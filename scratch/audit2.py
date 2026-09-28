# -*- coding: utf-8 -*-
import io, re
t = io.open(r'e:\Programs\GDPUDev\roadmap-style.css', encoding='utf-8').read()
# 打印 pill-bar 那个 media 块全文
for m in re.finditer(r'@media \(max-width: 768px\) \{', t):
    start = m.end(); depth = 1; i = start
    while depth > 0 and i < len(t):
        if t[i] == '{': depth += 1
        elif t[i] == '}': depth -= 1
        i += 1
    block = t[start:i-1]
    if 'ark-nav-menu' in block:
        print('=== mobile pill-bar/nav block ===')
        print(block.strip()[:1200])
        print()
print('=== hover rules for ark-nav-drop ===')
for line in t.splitlines():
    if 'ark-nav-drop:hover' in line or 'ark-nav-menu' in line:
        print(line.strip()[:120])
print()
c = io.open(r'e:\Programs\GDPUDev\roadmap-common.js', encoding='utf-8').read()
print('=== roadmap-common.js size:', len(c), '===')
for kw in ['touch', 'click', 'dropdown', 'nav-drop', 'matchMedia']:
    print(kw, ':', kw in c)
