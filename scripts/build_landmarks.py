# Blender headless: build stylized low-poly landmark models -> .glb each + preview renders.
# Shapes are stylized artistic inference at real-world meter scale, +Z up, origin at ground center.
# Usage:
#   Blender --background --python build_landmarks.py -- --outdir /abs/models --preview /abs/previews [--only tokyo_tower]
import bpy, bmesh, math, sys, argparse, os

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
ap = argparse.ArgumentParser()
ap.add_argument('--outdir', required=True)
ap.add_argument('--preview', required=True)
ap.add_argument('--only', default='')
args = ap.parse_args(argv)
os.makedirs(args.outdir, exist_ok=True)
os.makedirs(args.preview, exist_ok=True)

# ---------------- helpers ----------------
MATS = {}
def mat(name, rgb, rough=0.7, metal=0.0):
    if name in MATS: return MATS[name]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    MATS[name] = m
    return m

VERMILION = ('vermilion', (0.72, 0.26, 0.15))
WHITE     = ('white',     (0.92, 0.93, 0.94))
SILVER    = ('silver',    (0.78, 0.81, 0.84))
BRICK     = ('brick',     (0.48, 0.22, 0.16))
DARKROOF  = ('darkroof',  (0.25, 0.26, 0.29))
GLASS     = ('glass',     (0.55, 0.62, 0.68))
STONE     = ('stone',     (0.72, 0.70, 0.65))
GREENCU   = ('copper',    (0.35, 0.52, 0.45))

def collection_reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    MATS.clear()

def add_box(cx, cy, z0, z1, sx, sy, m, rot_z=0.0):
    bpy.ops.mesh.primitive_cube_add(size=1, location=(cx, cy, (z0 + z1) / 2))
    o = bpy.context.active_object
    o.scale = (sx, sy, z1 - z0)  # size=1 cube has edge 1: scale IS the full dimension
    o.rotation_euler[2] = rot_z
    o.data.materials.append(mat(*m))
    return o

def add_cyl(cx, cy, z0, z1, r0, r1, m, verts=12):
    bpy.ops.mesh.primitive_cone_add(vertices=verts, radius1=r0, radius2=r1,
                                    depth=(z1 - z0), location=(cx, cy, (z0 + z1) / 2))
    o = bpy.context.active_object
    o.data.materials.append(mat(*m))
    return o

def add_strut(p0, p1, r, m, verts=6):
    """cylinder between two 3D points"""
    from mathutils import Vector
    d = Vector(p1) - Vector(p0)
    mid = (Vector(p0) + Vector(p1)) / 2
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=r, depth=d.length, location=mid)
    o = bpy.context.active_object
    o.rotation_euler = d.to_track_quat('Z', 'Y').to_euler()
    o.data.materials.append(mat(*m))
    return o

def add_sphere_cap(cx, cy, z0, r, h, m, seg=24):
    """squashed hemisphere dome"""
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=12, radius=r, location=(cx, cy, z0))
    o = bpy.context.active_object
    o.scale[2] = h / r
    # cut below z0: cheap way — move down and rely on ground plane hiding? Instead bisect:
    bm = bmesh.new(); bm.from_mesh(o.data)
    geom = bm.verts[:] + bm.edges[:] + bm.faces[:]
    bmesh.ops.bisect_plane(bm, geom=geom, plane_co=(0, 0, 0), plane_no=(0, 0, -1),
                           clear_outer=True)
    bm.to_mesh(o.data); bm.free()
    o.data.materials.append(mat(*m))
    return o

# ---------------- landmark builders ----------------
def tokyo_tower():
    """333m lattice: 4 curved legs, ring braces, X struts, 2 decks, antenna."""
    H, TOP_LEG = 333.0, 250.0
    def half_span(z):  # leg half-spacing from axis at height z (stylized curve)
        t = min(z / TOP_LEG, 1.0)
        return 42.0 * (1 - t) ** 1.6 + 4.0
    # legs at 4 diagonal positions, built as stacked segments
    steps = 14
    for corner in ((1, 1), (1, -1), (-1, 1), (-1, -1)):
        pts = []
        for i in range(steps + 1):
            z = TOP_LEG * i / steps
            s = half_span(z) / math.sqrt(2)
            pts.append((corner[0] * s, corner[1] * s, z))
        for a, b in zip(pts, pts[1:]):
            add_strut(a, b, 2.2, VERMILION)
    # ring braces every ~28m + X braces between rings
    ring_zs = [z for z in range(14, 240, 28)]
    for z in ring_zs:
        s = half_span(z) / math.sqrt(2)
        cs = [(s, s), (s, -s), (-s, -s), (-s, s)]
        for i in range(4):
            a, b = cs[i], cs[(i + 1) % 4]
            add_strut((a[0], a[1], z), (b[0], b[1], z), 1.3, VERMILION)
    for z0, z1 in zip(ring_zs, ring_zs[1:]):
        s0 = half_span(z0) / math.sqrt(2); s1 = half_span(z1) / math.sqrt(2)
        cs0 = [(s0, s0), (s0, -s0), (-s0, -s0), (-s0, s0)]
        cs1 = [(s1, s1), (s1, -s1), (-s1, -s1), (-s1, s1)]
        for i in range(4):
            j = (i + 1) % 4
            add_strut((cs0[i][0], cs0[i][1], z0), (cs1[j][0], cs1[j][1], z1), 0.9, VERMILION)
            add_strut((cs0[j][0], cs0[j][1], z0), (cs1[i][0], cs1[i][1], z1), 0.9, VERMILION)
    # main deck 145-150, top deck 248-253
    add_box(0, 0, 143, 151, 34, 34, WHITE)
    add_box(0, 0, 141, 143, 30, 30, DARKROOF)
    add_box(0, 0, 247, 254, 15, 15, WHITE)
    # antenna
    add_cyl(0, 0, TOP_LEG, H - 12, 2.4, 1.4, (VERMILION[0], VERMILION[1]))
    add_cyl(0, 0, H - 12, H, 1.0, 0.3, WHITE)

def skytree():
    """634m: tri-leg base morphing to round shaft, 2 decks, antenna. Stylized solid core + surface struts."""
    H = 634.0
    # core: tapered 12-gon
    add_cyl(0, 0, 0, 350, 32, 15, SILVER, verts=12)
    add_cyl(0, 0, 350, 495, 15, 9, SILVER, verts=12)
    # tri-legs hint at base
    for k in range(3):
        a = k * 2 * math.pi / 3 + math.pi / 6
        x, y = math.cos(a) * 34, math.sin(a) * 34
        add_strut((x, y, 0), (0.0, 0.0, 120), 5.5, SILVER, verts=8)
    # surface diagonals (stylized lattice hint)
    for k in range(6):
        a = k * math.pi / 3
        x0, y0 = math.cos(a) * 30, math.sin(a) * 30
        x1, y1 = math.cos(a + 1.1) * 16, math.sin(a + 1.1) * 16
        add_strut((x0, y0, 8), (x1, y1, 340), 1.6, WHITE, verts=6)
    # decks: 350 (large ring), 450 (small ring)
    add_cyl(0, 0, 340, 355, 22, 22, WHITE, verts=16)
    add_cyl(0, 0, 445, 457, 13, 13, WHITE, verts=16)
    # gain tower / antenna
    add_cyl(0, 0, 495, 634, 4.5, 1.2, SILVER, verts=8)

def kokkai():
    """国会議事堂: symmetric wings + central stepped pyramid tower (~65m)."""
    add_box(0, 0, 0, 24, 150, 40, STONE)          # long body
    add_box(-58, 0, 0, 30, 36, 46, STONE)         # left wing
    add_box(58, 0, 0, 30, 36, 46, STONE)          # right wing
    add_box(0, 0, 0, 46, 42, 42, STONE)           # central tower base
    add_box(0, 0, 46, 56, 32, 32, STONE)
    # stepped pyramid top (chunky so it reads at distance)
    steps = [(26, 5), (20, 5), (14, 5), (8, 4)]
    z0 = 56
    for s, dz in steps:
        add_box(0, 0, z0, z0 + dz, s, s, DARKROOF)
        z0 += dz

def tokyo_dome():
    """white air-supported dome on low base, ~200m across."""
    add_cyl(0, 0, 0, 14, 105, 102, WHITE, verts=32)
    add_sphere_cap(0, 0, 14, 100, 42, WHITE)

def big_sight():
    """東京ビッグサイト: row of 4 inverted pyramids, tips landing on the podium."""
    add_box(0, 0, 0, 16, 210, 84, GLASS)          # podium
    for px in (-63, -21, 21, 63):
        o = add_cyl(px, 0, 16, 58, 5, 27, SILVER, verts=4)   # inverted pyramid
        o.rotation_euler[2] = math.pi / 4
    add_box(0, 0, 58, 66, 186, 46, WHITE)         # connecting slab on top

def tokyo_station():
    """丸の内駅舎: red-brick block, two end domes, slate roof."""
    L = 230
    add_box(0, 0, 0, 28, L, 26, BRICK)
    add_box(0, 0, 28, 34, L - 8, 20, DARKROOF)
    add_box(0, 0, 0, 38, 46, 32, BRICK)           # center pavilion
    add_box(0, 0, 38, 44, 38, 26, DARKROOF)
    for ex in (-L / 2 + 17, L / 2 - 17):
        add_box(ex, 0, 0, 34, 36, 34, BRICK)
        add_sphere_cap(ex, 0, 34, 16, 10, DARKROOF)

def ginza_wako():
    """和光: corner block + clock tower."""
    add_box(0, 0, 0, 30, 40, 32, STONE)
    add_box(12, 10, 30, 44, 12, 12, STONE)        # clock tower
    add_sphere_cap(12, 10, 44, 7, 4, GREENCU)

def meiji_torii():
    """明治神宮: big wooden torii."""
    for x in (-8, 8):
        add_cyl(x, 0, 0, 11.4, 1.5, 1.3, BRICK, verts=10)
    add_box(0, 0, 10.4, 12.0, 23, 2.0, BRICK)     # kasagi (top lintel)
    add_box(0, 0, 8.2, 9.4, 20.5, 1.6, BRICK)     # nuki (through both pillars)
    add_box(0, 0, 12.0, 12.9, 25, 2.4, DARKROOF)

def haneda():
    """羽田: terminal slab + control tower (~115m)."""
    add_box(0, -40, 0, 16, 240, 60, GLASS)
    add_cyl(30, 30, 0, 100, 5, 4, WHITE, verts=10)
    add_cyl(30, 30, 100, 112, 9, 6, GLASS, verts=10)

def shinagawa():
    """品川駅: wide low station hall with vaulted roof hint."""
    add_box(0, 0, 0, 18, 150, 60, GLASS)
    add_sphere_cap(0, 0, 18, 70, 10, WHITE)
    add_box(0, 55, 0, 30, 90, 24, SILVER)

def ikebukuro():
    """池袋駅: twin blocks + low hall."""
    add_box(-40, 0, 0, 50, 44, 36, SILVER)
    add_box(40, 0, 0, 42, 44, 36, SILVER)
    add_box(0, 0, 0, 16, 130, 56, GLASS)

def ginza_crossing():  # 銀座四丁目交差点 → use 和光 as the marker building
    ginza_wako()

BUILDERS = {
    'tokyo_tower': tokyo_tower,
    'skytree': skytree,
    'kokkai': kokkai,
    'tokyo_dome': tokyo_dome,
    'big_sight': big_sight,
    'tokyo_station': tokyo_station,
    'ginza_wako': ginza_crossing,
    'meiji_torii': meiji_torii,
    'haneda': haneda,
    'shinagawa': shinagawa,
    'ikebukuro': ikebukuro,
}

def render_preview(name, size_hint):
    scene = bpy.context.scene
    cam_d = bpy.data.cameras.new('c'); cam_d.lens = 60
    cam_d.clip_end = 100000  # default clip_end drops distant subjects (skytree at 634m)
    cam = bpy.data.objects.new('c', cam_d)
    scene.collection.objects.link(cam)
    from mathutils import Vector
    d = size_hint * 1.9
    cam.location = (d * 0.8, -d, size_hint * 0.75)
    direction = Vector((0, 0, size_hint * 0.38)) - Vector(cam.location)
    cam.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()
    scene.camera = cam
    sun_d = bpy.data.lights.new('s', 'SUN'); sun_d.energy = 4; sun_d.angle = 0.3
    sun = bpy.data.objects.new('s', sun_d)
    scene.collection.objects.link(sun)
    sun.rotation_euler = (math.radians(55), 0, math.radians(-40))
    w = bpy.data.worlds.new('w'); w.use_nodes = True
    w.node_tree.nodes['Background'].inputs['Color'].default_value = (0.12, 0.12, 0.13, 1)
    scene.world = w
    bpy.ops.mesh.primitive_plane_add(size=size_hint * 6, location=(0, 0, -0.05))
    bpy.context.active_object.data.materials.append(mat('ground', (0.16, 0.15, 0.14)))
    scene.render.engine = 'CYCLES'
    scene.cycles.samples = 24
    scene.cycles.device = 'GPU'
    try:
        prefs = bpy.context.preferences.addons['cycles'].preferences
        prefs.compute_device_type = 'METAL'; prefs.get_devices()
        for dv in prefs.devices: dv.use = True
    except Exception: pass
    scene.render.resolution_x = 640
    scene.render.resolution_y = 640
    scene.render.filepath = os.path.join(args.preview, f'{name}.png')
    bpy.ops.render.render(write_still=True)

SIZE_HINTS = {'tokyo_tower': 333, 'skytree': 634, 'kokkai': 120, 'tokyo_dome': 160,
              'big_sight': 140, 'tokyo_station': 180, 'ginza_wako': 60,
              'meiji_torii': 24, 'haneda': 140, 'shinagawa': 110, 'ikebukuro': 110}

targets = [args.only] if args.only else list(BUILDERS)
for name in targets:
    collection_reset()
    BUILDERS[name]()
    # select all meshes for export
    for o in bpy.context.scene.objects:
        o.select_set(o.type == 'MESH')
    out = os.path.join(args.outdir, f'{name}.glb')
    bpy.ops.export_scene.gltf(filepath=out, use_selection=True)
    render_preview(name, SIZE_HINTS[name])
    print(f'BUILT {name}: {out}')
print('ALL DONE')
