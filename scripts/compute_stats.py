#!/usr/bin/env python3
"""Compute per-ward stats: bbox, count, strata distribution, avg/max height."""
import json
from pathlib import Path

WARDS = ['arakawa', 'bunkyo', 'shinjuku', 'chiyoda', 'shibuya', 'chuo', 'minato']


def stratum(fp, h):
    """Same rule as the viewer fill-color expression."""
    if h is None or h < 0:
        h = 0
    if fp in ('1003', '1011') and h < 10:
        return 'kuchiba'      # 朽葉
    if fp in ('1001', '1002') and h < 10:
        return 'rikyu'        # 利休茶
    if 10 <= h < 30:
        return 'ginnezu'      # 銀鼠
    if h >= 30:
        return 'tsukishiro'   # 月白
    return 'other'


def compute(ward_id):
    p = Path(f'data/{ward_id}/buildings.geojson')
    data = json.load(open(p))
    feats = data['features']

    minx, miny = 180.0, 90.0
    maxx, maxy = -180.0, -90.0
    strata = {'kuchiba': 0, 'rikyu': 0, 'ginnezu': 0, 'tsukishiro': 0, 'other': 0}
    heights = []

    for f in feats:
        for ring in f['geometry']['coordinates']:
            for x, y in ring:
                if x < minx: minx = x
                if y < miny: miny = y
                if x > maxx: maxx = x
                if y > maxy: maxy = y
        props = f['properties']
        s = stratum(props.get('fp'), props.get('h'))
        strata[s] += 1
        h = props.get('h')
        if h is not None and h > 0:
            heights.append(h)

    avg_h = sum(heights) / len(heights) if heights else 0
    max_h = max(heights) if heights else 0

    return {
        'count': len(feats),
        'bbox': [round(minx, 4), round(miny, 4), round(maxx, 4), round(maxy, 4)],
        'strata': strata,
        'avg_height': round(avg_h, 1),
        'max_height': round(max_h, 1),
    }


def main():
    out = {}
    for w in WARDS:
        s = compute(w)
        out[w] = s
        pct = {k: round(100 * v / s['count'], 1) for k, v in s['strata'].items()}
        print(f"{w:9s} n={s['count']:>6} avg={s['avg_height']:5.1f}m max={s['max_height']:6.1f}m  pct={pct}")
    Path('data/stats.json').write_text(json.dumps(out, indent=2, ensure_ascii=False))
    print('\nWrote data/stats.json')


if __name__ == '__main__':
    main()
