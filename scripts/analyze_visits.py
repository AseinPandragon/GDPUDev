#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""汇总 gdpudev-analytics 访问日志（/var/lib/gdpudev-analytics/visits-*.jsonl）"""
import json, glob, collections

rows = []
for f in sorted(glob.glob('/var/lib/gdpudev-analytics/visits-*.jsonl')):
    for line in open(f, encoding='utf-8'):
        line = line.strip()
        if not line:
            continue
        try:
            rows.append(json.loads(line))
        except Exception:
            pass

views = [r for r in rows if r.get('type') == 'view']
leaves = [r for r in rows if r.get('type') == 'leave']
print('总记录', len(rows), '| view', len(views), '| leave', len(leaves))

days = collections.Counter(r['ts'][:10] for r in views)
print('--- 每日 view 数 ---')
for d in sorted(days):
    print(d, days[d])

ips = collections.Counter(r.get('ip', '') for r in views)
print('--- 独立IP', len(ips), '个 | TOP ---')
for ip, c in ips.most_common(8):
    print(ip, c)

paths = collections.Counter(r.get('path', '') for r in views)
print('--- 页面 TOP12 ---')
for p, c in paths.most_common(12):
    print(p, c)

refs = collections.Counter((r.get('ref') or '直接访问/无来源') for r in views)
print('--- 来源 TOP8 ---')
for r, c in refs.most_common(8):
    print(r, c)

dw = {}
for r in leaves:
    dw.setdefault(r.get('path', ''), []).append(r.get('dwell', 0) or 0)
print('--- 平均停留(秒) ---')
for p, v in sorted(dw.items(), key=lambda x: -sum(x[1])):
    print(p, round(sum(v) / len(v), 1), 'n=', len(v))

dev = collections.Counter('mobile' if (r.get('w', 0) or 0) < 768 else 'desktop' for r in views)
print('--- 设备 ---', dict(dev))

today = max(r['ts'][:10] for r in views)
tv = [r for r in views if r['ts'][:10] == today]
print('--- 最近一天', today, '明细 ---')
for r in tv:
    print(r['ts'][11:16], r.get('ip'), r.get('path'), (r.get('ref') or '-')[:60], 'w=%s' % r.get('w'))
