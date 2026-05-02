#!/usr/bin/env python3
"""Parse PLATEAU CityGML (LOD0 footprint) → form strata GeoJSON.

Per building extracts: lod0RoofEdge polygon, measuredHeight, storeysAboveGround,
bldg:usage code, uro:fireproofStructureType code.
Coordinates are PLATEAU EPSG:6697 (lat lng alt per 3 numbers); GeoJSON output is [lng,lat].
"""
import sys, json, gc, time
from pathlib import Path
import xml.etree.ElementTree as ET

NS = {
    'gml':  'http://www.opengis.net/gml',
    'bldg': 'http://www.opengis.net/citygml/building/2.0',
    'core': 'http://www.opengis.net/citygml/2.0',
    'uro':  'https://www.geospatial.jp/iur/uro/3.1',
}
def q(p, n): return f'{{{NS[p]}}}{n}'

BUILDING = q('bldg', 'Building')
LOD0 = q('bldg', 'lod0RoofEdge')
POSLIST = q('gml', 'posList')
HEIGHT = q('bldg', 'measuredHeight')
STOREYS = q('bldg', 'storeysAboveGround')
USAGE = q('bldg', 'usage')
FIREPROOF = q('uro', 'fireproofStructureType')


def parse_pos(text):
    if not text:
        return []
    n = text.split()
    out = []
    for i in range(0, len(n) - 2, 3):
        try:
            lat = float(n[i]); lng = float(n[i + 1])
            out.append([lng, lat])
        except ValueError:
            return []
    return out


def parse_gml(path):
    feats = []
    for ev, elem in ET.iterparse(str(path), events=('end',)):
        if elem.tag != BUILDING:
            continue
        h_el = elem.find(HEIGHT)
        height = float(h_el.text) if h_el is not None and h_el.text else None
        s_el = elem.find(STOREYS)
        try:
            storeys = int(s_el.text) if s_el is not None and s_el.text else None
        except ValueError:
            storeys = None
        u_el = elem.find(USAGE)
        usage = u_el.text.strip() if u_el is not None and u_el.text else None
        fp = None
        for el in elem.iter(FIREPROOF):
            if el.text:
                fp = el.text.strip()
                break
        polygon = []
        lod0 = elem.find(LOD0)
        if lod0 is not None:
            for pl in lod0.iter(POSLIST):
                polygon = parse_pos(pl.text)
                break
        if not polygon or len(polygon) < 4:
            elem.clear()
            continue
        feats.append({
            'type': 'Feature',
            'geometry': {'type': 'Polygon', 'coordinates': [polygon]},
            'properties': {'h': height, 's': storeys, 'u': usage, 'fp': fp},
        })
        elem.clear()
    return feats


def main():
    data_dir = Path(sys.argv[1] if len(sys.argv) > 1 else '/Users/jada/Desktop/Projects/tokyo-strata/data')
    out = Path(sys.argv[2] if len(sys.argv) > 2 else data_dir / 'buildings.geojson')
    files = sorted((data_dir / 'udx' / 'bldg').glob('*_bldg_*.gml'))
    print(f'{len(files)} mesh files', file=sys.stderr)
    all_f = []
    t0 = time.time()
    for i, p in enumerate(files):
        n0 = len(all_f)
        try:
            all_f.extend(parse_gml(p))
        except Exception as e:
            print(f'  ERROR {p.name}: {e}', file=sys.stderr)
        print(f'  [{i+1:>2}/{len(files)}] {p.name}: +{len(all_f)-n0} (cum {len(all_f)}, {time.time()-t0:.1f}s)', file=sys.stderr)
        gc.collect()
    # Stats
    fp_count = sum(1 for f in all_f if f['properties']['fp'])
    h_count = sum(1 for f in all_f if f['properties']['h'])
    print(f'\nTotal:           {len(all_f)}', file=sys.stderr)
    print(f'  with fireproof: {fp_count} ({100*fp_count/max(1,len(all_f)):.1f}%)', file=sys.stderr)
    print(f'  with height:    {h_count} ({100*h_count/max(1,len(all_f)):.1f}%)', file=sys.stderr)
    with open(out, 'w') as f:
        json.dump({'type': 'FeatureCollection', 'features': all_f}, f, separators=(',', ':'))
    print(f'Wrote {out} ({out.stat().st_size / 1e6:.1f} MB)', file=sys.stderr)


if __name__ == '__main__':
    main()
