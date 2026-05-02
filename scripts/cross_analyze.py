#!/usr/bin/env python3
"""Cross-analyze Tokyo Strata × UpgradeMap.

Inputs:
  - data/stats.json  (form strata per ward)
  - UpgradeMap data inline below (scraped from upgrademap.vercel.app)

Outputs:
  - data/cross.json  (per-ward joined record)
  - cross-report.md  (human-readable findings)
"""
import json
from pathlib import Path
import math

# UpgradeMap snapshot (from https://upgrademap.vercel.app/, May 2026)
# Format: ward_id -> (jp_name, code, score, signal, price_yoy_pct, pop_yoy_pct)
UPGRADEMAP = {
    'minato':     ('港',     '13103', 76, 'active',  16.2, 7.1),
    'chuo':       ('中央',   '13102', 75, 'active',  19.3, 19.8),
    'chiyoda':    ('千代田', '13101', 74, 'active',  11.3, 14.2),
    'shibuya':    ('渋谷',   '13113', 74, 'active',  15.4, 8.6),
    'meguro':     ('目黒',   '13110', 66, 'active',  4.1,  3.8),
    'shinjuku':   ('新宿',   '13104', 55, 'mature',  11.5, 4.7),
    'toshima':    ('豊島',   '13116', 71, 'active',  9.8,  3.6),
    'shinagawa':  ('品川',   '13109', 70, 'active',  10.6, 9.2),
    'suginami':   ('杉並',   '13115', 69, 'early',   7.9,  4.8),
    'koto':       ('江東',   '13108', 69, 'early',   10.0, 5.3),
    'katsushika': ('葛飾',   '13122', 68, 'early',   12.6, 2.3),
    'sumida':     ('墨田',   '13107', 66, 'early',   5.1,  6.2),
    'nerima':     ('練馬',   '13120', 66, 'early',   9.2,  4.3),
    'bunkyo':     ('文京',   '13105', 66, 'active',  6.1,  9.3),
    'arakawa':    ('荒川',   '13118', 65, 'unknown', 4.6,  2.5),
    'setagaya':   ('世田谷', '13112', 65, 'unknown', 4.3,  4.5),
    'itabashi':   ('板橋',   '13119', 63, 'unknown', 5.8,  4.0),
    'nakano':     ('中野',   '13114', 63, 'unknown', 4.1,  5.1),
    'adachi':     ('足立',   '13121', 61, 'unknown', 3.7,  3.7),
    'kita':       ('北',     '13117', 60, 'unknown', 1.9,  4.1),
    'ota':        ('大田',   '13111', 60, 'unknown', 1.7,  4.3),
    'edogawa':    ('江戸川', '13123', 58, 'unknown', 3.6,  2.4),
}

def pearson(xs, ys):
    n = len(xs)
    if n < 3: return None
    mx = sum(xs) / n
    my = sum(ys) / n
    num = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    dx2 = sum((x - mx) ** 2 for x in xs)
    dy2 = sum((y - my) ** 2 for y in ys)
    den = math.sqrt(dx2 * dy2)
    return num / den if den else None


def main():
    stats = json.loads(Path('data/stats.json').read_text())
    rows = []
    for wid, sdata in stats.items():
        if wid not in UPGRADEMAP:
            continue
        jp, code, score, signal, p_yoy, pop_yoy = UPGRADEMAP[wid]
        n = sdata['count']
        kuchiba_pct = round(100 * sdata['strata']['kuchiba'] / n, 1)
        rikyu_pct = round(100 * sdata['strata']['rikyu'] / n, 1)
        ginnezu_pct = round(100 * sdata['strata']['ginnezu'] / n, 1)
        tsukishiro_pct = round(100 * sdata['strata']['tsukishiro'] / n, 1)
        old_pct = round(kuchiba_pct + rikyu_pct, 1)  # combined "low-rise old"
        new_pct = round(ginnezu_pct + tsukishiro_pct, 1)  # combined "mid+high modern"
        rows.append({
            'id': wid, 'jp': jp, 'code': code,
            'count': n,
            'kuchiba': kuchiba_pct,
            'rikyu': rikyu_pct,
            'ginnezu': ginnezu_pct,
            'tsukishiro': tsukishiro_pct,
            'old': old_pct,
            'new': new_pct,
            'avg_h': sdata['avg_height'],
            'max_h': sdata['max_height'],
            'score': score,
            'signal': signal,
            'price_yoy': p_yoy,
            'pop_yoy': pop_yoy,
        })

    # Compute correlations
    def corr(a, b):
        return pearson([r[a] for r in rows], [r[b] for r in rows])
    correlations = {
        '朽葉% × upgrade score':       corr('kuchiba', 'score'),
        '月白% × upgrade score':       corr('tsukishiro', 'score'),
        '朽葉% × price YoY':           corr('kuchiba', 'price_yoy'),
        '月白% × price YoY':           corr('tsukishiro', 'price_yoy'),
        '朽葉% × pop YoY':             corr('kuchiba', 'pop_yoy'),
        '月白% × pop YoY':             corr('tsukishiro', 'pop_yoy'),
        '平均高 × upgrade score':       corr('avg_h', 'score'),
        '平均高 × price YoY':           corr('avg_h', 'price_yoy'),
        '古層 (朽葉+利休茶) % × score':  corr('old', 'score'),
        '新層 (銀鼠+月白) % × score':   corr('new', 'score'),
    }

    out = {'wards': rows, 'correlations': correlations}
    Path('data/cross.json').write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f'Wrote data/cross.json ({len(rows)} wards)')

    # Print summary
    print('\n=== Correlations (Pearson r, range [-1, 1]) ===')
    for k, v in sorted(correlations.items(), key=lambda x: -abs(x[1] or 0)):
        bar = ''
        if v is not None:
            mark = '+' if v >= 0 else '−'
            bar = mark * min(10, int(abs(v) * 10))
        print(f'  {k:32s}  r = {v:+.3f}  {bar}')

    print('\n=== Wards by 朽葉% (古層率), high → low ===')
    print(f'{"区":8s} {"朽葉%":>7s} {"score":>6s} {"signal":>10s} {"priceYoY":>10s} {"popYoY":>8s} {"avg_h":>7s}')
    for r in sorted(rows, key=lambda x: -x['kuchiba']):
        print(f'  {r["jp"]:6s} {r["kuchiba"]:>7.1f} {r["score"]:>6} {r["signal"]:>10s} {r["price_yoy"]:>+9.1f}% {r["pop_yoy"]:>+7.1f}% {r["avg_h"]:>5.1f}m')

    # Hypothesis classifier
    print('\n=== Investment Sweet Spot Classification ===')
    print('"忘れられた下町" (forgotten lowtowns): 朽葉 > 50% AND score < 65 AND price_yoy < 5')
    print('"上昇中の下町" (rising lowtowns):      朽葉 > 40% AND score > 65 AND price_yoy > 6')
    print('"成熟した都心" (mature centrals):      月白 > 10% AND signal in {active, mature}')
    print()
    for r in rows:
        cat = []
        if r['kuchiba'] > 50 and r['score'] < 65 and r['price_yoy'] < 5:
            cat.append('忘れられた下町')
        if r['kuchiba'] > 40 and r['score'] > 65 and r['price_yoy'] > 6:
            cat.append('上昇中の下町')
        if r['tsukishiro'] > 10 and r['signal'] in ('active', 'mature'):
            cat.append('成熟した都心')
        if cat:
            print(f'  {r["jp"]:6s}  {", ".join(cat)}')


if __name__ == '__main__':
    main()
