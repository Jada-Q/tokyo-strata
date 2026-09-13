# Blender headless: tokyo-strata GeoJSON -> miniature diorama render
# Usage:
#   /Applications/Blender.app/Contents/MacOS/Blender --background --python strata_diorama.py -- \
#       --geojson /path/to/ward.geojson --out /path/to/render.png [--limit 0] [--samples 128]
#
# Builds ONE mesh for all buildings (fast), 5 strata materials by (fp, h),
# clay/resin look + tilt-shift style camera + warm sun. Cycles still.
import bpy, bmesh, json, math, sys, argparse

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
ap = argparse.ArgumentParser()
ap.add_argument('--geojson', required=True)
ap.add_argument('--out', required=True)
ap.add_argument('--limit', type=int, default=0, help='0 = all features')
ap.add_argument('--samples', type=int, default=128)
ap.add_argument('--res', type=int, default=1600)
ap.add_argument('--focus', default='', help='lon,lat camera target (default: data centroid)')
ap.add_argument('--ground', default='c7b89e', help='ground hex color')
ap.add_argument('--distf', type=float, default=0.62, help='camera distance = span * distf')
ap.add_argument('--water', default='', help='optional water polygons geojson')
ap.add_argument('--green', default='', help='optional park/green polygons geojson')
args = ap.parse_args(argv)

# ---------- load ----------
feats = []
with open(args.geojson) as f:
    first = f.read(1); f.seek(0)
    if first == '{':
        gj = json.load(f)
        feats = gj.get('features', gj if isinstance(gj, list) else [])
    else:  # ndjson
        for line in f:
            line = line.strip()
            if line:
                feats.append(json.loads(line))
if args.limit:
    feats = feats[:args.limit]
print(f'features: {len(feats)}')

# ---------- projection: equirectangular meters around centroid ----------
lats, lons, n = 0.0, 0.0, 0
for ft in feats:
    g = ft.get('geometry') or {}
    cs = g.get('coordinates')
    if not cs: continue
    ring = cs[0] if g['type'] == 'Polygon' else cs[0][0]
    lons += ring[0][0]; lats += ring[0][1]; n += 1
lat0, lon0 = lats / max(1, n), lons / max(1, n)
MLAT = 111320.0
MLON = 111320.0 * math.cos(math.radians(lat0))
SCALE = 0.001  # 1 blender unit = 1 km -> ward fits in a few units

def prj(pt):
    return ((pt[0] - lon0) * MLON * SCALE, (pt[1] - lat0) * MLAT * SCALE)

# ---------- strata classification (mirror of explore.html) ----------
def stratum(fp, h):
    fp = str(fp or '')
    h = h or 0
    if fp in ('1003', '1011') and h < 10: return 0  # kuchiba
    if fp in ('1001', '1002') and h < 10: return 1  # rikyu
    if 10 <= h < 30: return 2                       # ginnezu
    if h >= 30: return 3                            # tsukishiro
    return 4                                        # other

COLORS = [
    (0x6e/255, 0x4c/255, 0x30/255, 1),  # 朽葉
    (0xb1/255, 0x9a/255, 0x55/255, 1),  # 利休茶
    (0x9d/255, 0x9c/255, 0x9d/255, 1),  # 銀鼠
    (0xe8/255, 0xec/255, 0xef/255, 1),  # 月白
    (0x8a/255, 0x84/255, 0x7c/255, 1),  # 不明 (warm grey for diorama)
]

# ---------- clean scene ----------
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

# ---------- build one mesh ----------
verts, faces, face_mat = [], [], []
skipped = 0
Z = SCALE * 3.0  # height exaggeration x3 (tuned for real ward density); h in meters * SCALE * 3
for ft in feats:
    g = ft.get('geometry') or {}
    props = ft.get('properties') or {}
    if g.get('type') == 'Polygon':
        polys = [g['coordinates']]
    elif g.get('type') == 'MultiPolygon':
        polys = g['coordinates']
    else:
        continue
    h = props.get('h') or 3.0
    try: h = float(h)
    except (TypeError, ValueError): h = 3.0
    if h <= 0: h = 3.0
    mi = stratum(props.get('fp'), h)
    top = h * Z
    for poly in polys:
        ring = poly[0]  # exterior only (v1: holes ignored)
        if len(ring) < 4:
            skipped += 1; continue
        pts = [prj(p) for p in ring[:-1]]  # drop closing dup
        if len(pts) < 3:
            skipped += 1; continue
        base = len(verts)
        k = len(pts)
        for x, y in pts: verts.append((x, y, 0.0))
        for x, y in pts: verts.append((x, y, top))
        for i in range(k):  # side quads
            a, b = base + i, base + (i + 1) % k
            faces.append((a, b, b + k, a + k)); face_mat.append(mi)
        faces.append(tuple(base + k + i for i in range(k)))  # top ngon
        face_mat.append(mi)

mesh = bpy.data.meshes.new('strata')
mesh.from_pydata(verts, [], faces)
mesh.validate(verbose=False)
obj = bpy.data.objects.new('strata', mesh)
scene.collection.objects.link(obj)
print(f'mesh: {len(verts)} verts, {len(faces)} faces, skipped {skipped}')

# materials: clay
for i, c in enumerate(COLORS):
    m = bpy.data.materials.new(f'stratum_{i}')
    m.use_nodes = True
    bsdf = m.node_tree.nodes['Principled BSDF']
    bsdf.inputs['Base Color'].default_value = c
    bsdf.inputs['Roughness'].default_value = 0.75
    obj.data.materials.append(m)
mesh.polygons.foreach_set('material_index', face_mat)

# ---------- ground plane: warm paper ----------
xs = [v[0] for v in verts] or [0]; ys = [v[1] for v in verts] or [0]
cx, cy = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2
span = max(max(xs) - min(xs), max(ys) - min(ys), 1.0)
bpy.ops.mesh.primitive_plane_add(size=span * 3, location=(cx, cy, -0.001))
plane = bpy.context.active_object
pm = bpy.data.materials.new('paper')
pm.use_nodes = True
pb = pm.node_tree.nodes['Principled BSDF']
gc = args.ground.lstrip('#')
ground_rgb = tuple(int(gc[i:i+2], 16) / 255 for i in (0, 2, 4))
pb.inputs['Base Color'].default_value = (*ground_rgb, 1)
pb.inputs['Roughness'].default_value = 0.9
plane.data.materials.append(pm)

# ---------- optional flat overlays: water / green ----------
def add_overlay(path, name, color, z_off):
    if not path: return
    gj = json.load(open(path))
    v2, f2 = [], []
    for ft in gj['features']:
        ring = ft['geometry']['coordinates'][0]
        pts = [prj(p) for p in ring[:-1]]
        if len(pts) < 3: continue
        b = len(v2)
        for x, y in pts: v2.append((x, y, z_off))
        f2.append(tuple(b + i for i in range(len(pts))))
    m2 = bpy.data.meshes.new(name)
    m2.from_pydata(v2, [], f2)
    m2.validate(verbose=False)
    o2 = bpy.data.objects.new(name, m2)
    scene.collection.objects.link(o2)
    mat = bpy.data.materials.new(name + '_mat')
    mat.use_nodes = True
    b2 = mat.node_tree.nodes['Principled BSDF']
    b2.inputs['Base Color'].default_value = color
    b2.inputs['Roughness'].default_value = 0.35 if name == 'water' else 0.85
    o2.data.materials.append(mat)
    print(f'overlay {name}: {len(f2)} polys')

add_overlay(args.water, 'water', (0.24, 0.40, 0.50, 1), 0.0004)
add_overlay(args.green, 'green', (0.44, 0.52, 0.32, 1), 0.0007)

# ---------- camera: high-angle diorama with shallow DOF ----------
cam_d = bpy.data.cameras.new('cam')
cam_d.lens = 85
cam_d.dof.use_dof = True
cam_d.dof.aperture_fstop = 0.9
cam = bpy.data.objects.new('cam', cam_d)
scene.collection.objects.link(cam)
from mathutils import Vector
if args.focus:
    flon, flat = (float(v) for v in args.focus.split(','))
    tx, ty = prj((flon, flat))
else:
    tx, ty = cx, cy
dist = span * args.distf
cam.location = (tx + dist * 0.55, ty - dist * 0.75, dist * 0.62)
target = Vector((tx, ty, 0.02))
direction = target - Vector(cam.location)
cam.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()
cam_d.dof.focus_distance = direction.length
scene.camera = cam

# ---------- light: warm sun + sky ----------
sun_d = bpy.data.lights.new('sun', 'SUN')
sun_d.energy = 5.5
sun_d.color = (1.0, 0.90, 0.76)
sun_d.angle = math.radians(8)  # crisper miniature shadows
sun = bpy.data.objects.new('sun', sun_d)
scene.collection.objects.link(sun)
sun.rotation_euler = (math.radians(50), 0, math.radians(-35))

world = bpy.data.worlds.new('w')
world.use_nodes = True
world.node_tree.nodes['Background'].inputs['Color'].default_value = (0.72, 0.80, 0.92, 1)
world.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.45
scene.world = world

# ---------- render ----------
scene.render.engine = 'CYCLES'
scene.cycles.samples = args.samples
scene.cycles.device = 'GPU'
try:
    prefs = bpy.context.preferences.addons['cycles'].preferences
    prefs.compute_device_type = 'METAL'
    prefs.get_devices()
    for d in prefs.devices: d.use = True
except Exception as e:
    print('GPU setup fallback to CPU:', e)
scene.render.resolution_x = args.res
scene.render.resolution_y = int(args.res * 0.8)
scene.render.filepath = args.out
scene.render.image_settings.file_format = 'PNG'
bpy.ops.render.render(write_still=True)
print('rendered:', args.out)
