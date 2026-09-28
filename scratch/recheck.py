# -*- coding: utf-8 -*-
# 批次5复测：四年步长均字数 + 外链数
import io, os, re
BASE = r'e:\Programs\GDPUDev'
pages = []
for sub in ['design', 'art', 'ta', 'client', 'engine']:
    d = os.path.join(BASE, sub)
    for f in sorted(os.listdir(d)):
        if f.endswith('.html'):
            pages.append(sub + '/' + f)

def section_text(t, title):
    i = t.find('<div class="section-title">' + title)
    if i < 0: return ''
    j = t.find('<div class="category-section-block">', i + 100)
    return t[i:j if j > 0 else i + 3000]

fail = []
for rel in pages:
    t = io.open(os.path.join(BASE, rel.replace('/', '\\')), encoding='utf-8').read()
    four = section_text(t, '■ 大学四年怎么走')
    sums = re.findall(r'<div class="card-summary">([\s\S]*?)</div>', four)
    lens = [len(re.sub(r'<[^>]+>', '', s).strip()) for s in sums] or [0]
    avg = sum(lens) // len(lens)
    links = len(re.findall(r'href="https?://', t))
    ok = avg >= 200 and links >= 2
    if not ok: fail.append(rel)
    print('%-24s 步长均:%-5d 外链:%-3d %s' % (rel, avg, links, 'OK' if ok else 'FAIL'))
print('\nFAIL:', fail if fail else 'NONE')
