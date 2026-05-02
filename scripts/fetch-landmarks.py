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
    'chiyoda':    [('日比谷公園, 千代田区, 東京', 'park'),
                   ('北の丸公園, 千代田区, 東京', 'park'),
                   ('国会議事堂, 千代田区, 東京', 'other'),
                   ('東京駅, 千代田区, 東京', 'other')],
    'chuo':       [('浜離宮恩賜庭園, 中央区, 東京', 'park'),
                   ('銀座四丁目交差点, 中央区, 東京', 'other'),
                   ('築地市場跡, 中央区, 東京', 'other')],
    'minato':     [('芝公園, 港区, 東京', 'park'),
                   ('お台場海浜公園, 港区, 東京', 'park'),
                   ('青山霊園, 港区, 東京', 'cemetery'),
                   ('東京タワー, 港区, 東京', 'other')],
    'shinjuku':   [('新宿御苑, 新宿区, 東京', 'park'),
                   ('新宿中央公園, 新宿区, 東京', 'park')],
    'bunkyo':     [('小石川後楽園, 文京区, 東京', 'park'),
                   ('小石川植物園, 文京区, 東京', 'park'),
                   ('東京ドーム, 文京区, 東京', 'other')],
    'sumida':     [('隅田公園, 墨田区, 東京', 'park'),
                   ('東京スカイツリー, 墨田区, 東京', 'other')],
    'koto':       [('木場公園, 江東区, 東京', 'park'),
                   ('夢の島公園, 江東区, 東京', 'park'),
                   ('東京ビッグサイト, 江東区, 東京', 'other')],
    'shinagawa':  [('大井ふ頭中央海浜公園, 大井, 品川区', 'park'),
                   ('林試の森公園, 品川区, 東京', 'park'),
                   ('品川駅, 品川区, 東京', 'other')],
    'meguro':     [('林試の森公園, 目黒区, 東京', 'park'),
                   ('目黒川, 目黒区, 東京', 'river')],
    'ota':        [('羽田空港, 大田区, 東京', 'airport'),
                   ('多摩川, 大田区, 東京', 'river'),
                   ('平和島公園, 大田区, 東京', 'park')],
    'setagaya':   [('駒沢オリンピック公園, 世田谷区, 東京', 'park'),
                   ('砧公園, 世田谷区, 東京', 'park'),
                   ('多摩川, 世田谷区, 東京', 'river')],
    'shibuya':    [('代々木公園, 渋谷区, 東京', 'park'),
                   ('明治神宮, 渋谷区, 東京', 'shrine'),
                   ('青山霊園, 港区, 東京', 'cemetery')],
    'nakano':     [('平和の森公園, 中野区, 東京', 'park'),
                   ('哲学堂公園, 中野区, 東京', 'park')],
    'suginami':   [('善福寺公園, 杉並区, 東京', 'park'),
                   ('和田堀公園, 杉並区, 東京', 'park'),
                   ('妙正寺公園, 杉並区, 東京', 'park')],
    'toshima':    [('雑司ヶ谷霊園, 豊島区, 東京', 'cemetery'),
                   ('池袋駅, 豊島区, 東京', 'other')],
    'kita':       [('飛鳥山公園, 北区, 東京', 'park'),
                   ('荒川河川敷, 北区, 東京', 'river'),
                   ('赤羽自然観察公園, 北区, 東京', 'park')],
    'arakawa':    [('隅田川, 荒川区, 東京', 'river'),
                   ('荒川自然公園, 荒川区, 東京', 'park')],
    'itabashi':   [('赤塚公園, 板橋区, 東京', 'park'),
                   ('荒川河川敷, 板橋区, 東京', 'river')],
    'nerima':     [('光が丘公園, 練馬区, 東京', 'park'),
                   ('石神井公園, 練馬区, 東京', 'park'),
                   ('武蔵関公園, 練馬区, 東京', 'park')],
    'adachi':     [('舎人公園, 足立区, 東京', 'park'),
                   ('荒川河川敷, 足立区, 東京', 'river')],
    'katsushika': [('水元公園, 葛飾区, 東京', 'park'),
                   ('江戸川河川敷, 葛飾区, 東京', 'river')],
    'edogawa':    [('葛西臨海公園, 江戸川区, 東京', 'park'),
                   ('旧江戸川, 江戸川区, 東京', 'river'),
                   ('荒川河川敷, 江戸川区, 東京', 'river')],
}

# Add 皇居 manually (well-known coordinate)
PALACE = [{'name': '皇居', 'lng': 139.7528, 'lat': 35.6852, 'type': 'palace'}]

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
    flat = list(PALACE)  # 皇居 prepended
    seen = {(lm['name'],) for lm in flat}
    for ward, items in LANDMARKS.items():
        for query, kind in items:
            name = display(query)
            if (name,) in seen:
                continue
            try:
                pt = nominatim(query)
                if pt is None:
                    print(f'  [{ward}] MISS: {query}')
                    continue
                lng, lat = pt
                flat.append({'name': name, 'lng': lng, 'lat': lat, 'type': kind, 'primary_ward': ward})
                seen.add((name,))
                print(f'  [{ward}] {name:30s} -> {lng:.5f}, {lat:.5f} ({kind})')
            except Exception as e:
                print(f'  [{ward}] ERROR: {query}: {e}')
            time.sleep(1.1)  # Nominatim rate limit
    out = {'landmarks': flat}
    Path('data/landmarks.json').write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f'\nWrote data/landmarks.json ({len(flat)} markers, flat list)')


if __name__ == '__main__':
    main()
