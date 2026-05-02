#!/usr/bin/env python3
"""Merge all per-ward buildings.geojson → single NDJSON for tippecanoe."""
import json, sys
from pathlib import Path

WARDS = [
    'chiyoda', 'chuo', 'minato', 'shinjuku', 'bunkyo', 'sumida', 'koto',
    'shinagawa', 'meguro', 'ota', 'setagaya', 'shibuya', 'nakano', 'suginami',
    'toshima', 'kita', 'arakawa', 'itabashi', 'nerima', 'adachi', 'katsushika', 'edogawa',
]

def main():
    out_path = Path(sys.argv[1] if len(sys.argv) > 1 else 'data/all-buildings.ndjson')
    out_path.parent.mkdir(parents=True, exist_ok=True)
    total = 0
    with open(out_path, 'w') as fout:
        for w in WARDS:
            p = Path(f'data/{w}/buildings.geojson')
            if not p.exists():
                print(f'  skip {w}: no geojson', file=sys.stderr)
                continue
            gj = json.load(open(p))
            n = 0
            for f in gj['features']:
                f['properties']['ward'] = w
                fout.write(json.dumps(f, separators=(',', ':')))
                fout.write('\n')
                n += 1
            total += n
            print(f'  {w}: {n} (cum {total})', file=sys.stderr)
    print(f'\nTotal features: {total}', file=sys.stderr)
    print(f'Wrote {out_path} ({out_path.stat().st_size / 1e6:.1f} MB)', file=sys.stderr)

if __name__ == '__main__':
    main()
