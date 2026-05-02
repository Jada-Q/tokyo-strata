#!/usr/bin/env python3
"""Fetch lat/lng for landmark names via Nominatim (OSM geocoder).

Output: data/landmarks.json — { ward_id: [{name, lng, lat, type, ...}] }

Rate limit: Nominatim usage policy = 1 req/sec max. Script sleeps 1.1s between calls.
"""
import json, time, urllib.parse, urllib.request
from pathlib import Path

USER_AGENT = 'tokyo-strata-landmarks/1.0 (research; ptp.qiuyu@gmail.com)'

# Per-ward landmarks. type: 'park' | 'river' | 'shrine' | 'cemetery' | 'airport' | 'other'
# Query string is what we send to Nominatim. Keep it specific to disambiguate.
LANDMARKS = {
    'chiyoda':    [],  # 皇居 already hardcoded in index.html
    'chuo':       [('浜離宮恩賜庭園, 中央区, 東京', 'park')],
    'minato':     [('芝公園, 港区, 東京', 'park'), ('お台場海浜公園, 港区, 東京', 'park')],
    'shinjuku':   [('新宿御苑, 新宿区, 東京', 'park')],
    'bunkyo':     [('小石川後楽園, 文京区, 東京', 'park')],
    'sumida':     [('隅田公園, 墨田区, 東京', 'park'), ('東京スカイツリー, 墨田区, 東京', 'other')],
    'koto':       [('木場公園, 江東区, 東京', 'park'), ('夢の島公園, 江東区, 東京', 'park')],
    'shinagawa':  [('大井ふ頭中央海浜公園, 品川区, 東京', 'park')],
    'meguro':     [('林試の森公園, 目黒区, 東京', 'park')],
    'ota':        [('羽田空港, 大田区, 東京', 'airport'), ('多摩川河川敷, 大田区, 東京', 'river')],
    'setagaya':   [('駒沢オリンピック公園, 世田谷区, 東京', 'park'), ('砧公園, 世田谷区, 東京', 'park')],
    'shibuya':    [('代々木公園, 渋谷区, 東京', 'park'), ('明治神宮, 渋谷区, 東京', 'shrine')],
    'nakano':     [('平和の森公園, 中野区, 東京', 'park')],
    'suginami':   [('善福寺公園, 杉並区, 東京', 'park')],
    'toshima':    [('雑司ヶ谷霊園, 豊島区, 東京', 'cemetery')],
    'kita':       [('飛鳥山公園, 北区, 東京', 'park')],
    'arakawa':    [('隅田川, 荒川区, 東京', 'river'), ('荒川河川敷, 荒川区, 東京', 'river')],
    'itabashi':   [('赤塚公園, 板橋区, 東京', 'park')],
    'nerima':     [('光が丘公園, 練馬区, 東京', 'park'), ('石神井公園, 練馬区, 東京', 'park')],
    'adachi':     [('舎人公園, 足立区, 東京', 'park')],
    'katsushika': [('水元公園, 葛飾区, 東京', 'park')],
    'edogawa':    [('葛西臨海公園, 江戸川区, 東京', 'park')],
}

# Pretty display name (drop ward suffix for label)
def display(query):
    return query.split(',')[0].strip()


def nominatim(query):
    url = ('https://nominatim.openstreetmap.org/search?'
           + urllib.parse.urlencode({'q': query, 'format': 'json', 'limit': 1, 'countrycodes': 'jp'}))
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode())
    if not data:
        return None
    return float(data[0]['lon']), float(data[0]['lat'])


def main():
    out = {}
    for ward, items in LANDMARKS.items():
        out[ward] = []
        for query, kind in items:
            try:
                pt = nominatim(query)
                if pt is None:
                    print(f'  [{ward}] MISS: {query}')
                    continue
                lng, lat = pt
                out[ward].append({'name': display(query), 'lng': lng, 'lat': lat, 'type': kind})
                print(f'  [{ward}] {display(query):30s} -> {lng:.5f}, {lat:.5f} ({kind})')
            except Exception as e:
                print(f'  [{ward}] ERROR: {query}: {e}')
            time.sleep(1.1)  # Nominatim rate limit
    Path('data/landmarks.json').write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f'\nWrote data/landmarks.json ({sum(len(v) for v in out.values())} markers across {len(out)} wards)')


if __name__ == '__main__':
    main()
