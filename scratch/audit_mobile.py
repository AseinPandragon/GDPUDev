# -*- coding: utf-8 -*-
import io, re
t = io.open(r'e:\Programs\GDPUDev\roadmap-style.css', encoding='utf-8').read()
print('=== media queries ===')
for m in re.finditer(r'@media[^{]+\{', t):
    print(m.group(0))
print('\n=== overflow-x rules ===')
for line in t.splitlines():
    if 'overflow-x' in line:
        print(line.strip())
print('\n=== pill-bar / nav-drop mobile related (in media blocks) ===')
# 抓取每个 media 块内容里的关键选择器
for m in re.finditer(r'@media[^{]+\{', t):
    start = m.end()
    depth = 1
    i = start
    while depth > 0 and i < len(t):
        if t[i] == '{': depth += 1
        elif t[i] == '}': depth -= 1
        i += 1
    block = t[start:i-1]
    keys = re.findall(r'([.#][\w-]+[^{]*)\{', block)
    print(m.group(0).strip(), '->', keys[:18])
