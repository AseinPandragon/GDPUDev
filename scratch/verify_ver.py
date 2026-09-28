# -*- coding: utf-8 -*-
# 复核：全站版本号无残留 a；新逻辑文件就位
import io, os
BASE = r'e:\Programs\GDPUDev'
left = []
pages = [f for f in os.listdir(BASE) if f.endswith('.html') and f != 'admin.html']
for sub in ['design', 'art', 'ta', 'client', 'engine']:
    d = os.path.join(BASE, sub)
    for f in os.listdir(d):
        if f.endswith('.html'):
            pages.append(sub + '/' + f)
for rel in pages:
    t = io.open(os.path.join(BASE, rel.replace('/', '\\')), encoding='utf-8').read()
    if 'v=20260928a' in t:
        left.append(rel)
print('pages with stale v=a:', left if left else 'NONE')
c = io.open(os.path.join(BASE, 'roadmap-common.js'), encoding='utf-8').read()
s = io.open(os.path.join(BASE, 'roadmap-style.css'), encoding='utf-8').read()
print('common.js mobileOpen:', 'mobileOpen' in c, '| style.css mobileOpen:', 'mobileOpen' in s)
