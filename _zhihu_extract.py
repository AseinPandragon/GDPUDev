# -*- coding: utf-8 -*-
# 从已接管的 Edge 会话批量摘取 5 篇知乎专栏正文
import io, os, re, subprocess

OUT = r'E:\Temp\zhihu_texts'
os.makedirs(OUT, exist_ok=True)

JOBS = [
    ('illustration', 'https://zhuanlan.zhihu.com/p/144163935'),
    ('modeling', 'https://zhuanlan.zhihu.com/p/366884722'),
    ('animation', 'https://zhuanlan.zhihu.com/p/86556188'),
    ('vfx', 'https://zhuanlan.zhihu.com/p/16385362024'),
    ('ui', 'https://zhuanlan.zhihu.com/p/323976428'),
]

def run(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True, encoding='utf-8', errors='replace')
    return (r.stdout or '') + (r.stderr or '')

for slug, url in JOBS:
    out = run('playwright-cli goto ' + url)
    m = re.search(r'HTTP status: (\d+)', out)
    status = m.group(1) if m else '?'
    ev = run('playwright-cli eval "document.querySelector(\'.Post-RichTextContainer, .Post-RichText\') ? document.querySelector(\'.Post-RichTextContainer, .Post-RichText\').innerText : \'NO_NODE\'"')
    m2 = re.search(r'### Result\s*\r?\n"(.*)"\s*\r?\n\s*### Ran Playwright code', ev, re.S)
    if not m2:
        print('FAIL', slug, status)
        continue
    text = m2.group(1)
    text = text.replace('\\n', '\n').replace('\\"', '"').replace("\\'", "'")
    text = re.sub(r'\n{3,}', '\n\n', text)
    io.open(os.path.join(OUT, slug + '.txt'), 'w', encoding='utf-8').write('URL: ' + url + '\nHTTP: ' + status + '\n----\n' + text)
    print('OK', slug, 'http=' + status, 'chars=', len(text))
print('DONE')
