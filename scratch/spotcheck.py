# -*- coding: utf-8 -*-
# 外链抽查：全站新增的官方/学习资源链接逐个探测 HTTP 状态
import io, os, re, ssl, urllib.request
BASE = r'e:\Programs\GDPUDev'
CTX = ssl.create_default_context(); CTX.check_hostname=False; CTX.verify_mode=ssl.CERT_NONE
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0"

urls = set()
for sub in ['', 'design/', 'art/', 'ta/', 'client/', 'engine/']:
    d = os.path.join(BASE, sub) if sub else BASE
    for f in os.listdir(d):
        if f.endswith('.html') and f not in ('admin.html',):
            t = io.open(os.path.join(d, f), encoding='utf-8').read()
            for u in re.findall(r'href="(https?://[^"]+)"', t):
                if any(k in u for k in ['douban.com/subject', 'github.com', 'bilibili.com/video', 'learn.unity.com/pathway', 'docs.unity3d.com', 'liaoxuefeng', 'autodesk.com', 'blender.org', 'qt.io', 'renderdoc', 'android.com/games', 'microsoft.com', 'gdcvault', 'indienova', 'yooasset', 'learnopengl', '3blue1brown', 'scratchapixel', 'vkguide', 'bevyengine', 'o3de', 'epicgames', 'realtimerendering', 'catlikecoding', 'zhuanlan.zhihu.com/p/3', 'gameres']):
                    urls.add(u.split('#')[0])

fails = []
for u in sorted(urls):
    try:
        req = urllib.request.Request(u, headers={"User-Agent": UA}, method="HEAD")
        with urllib.request.urlopen(req, timeout=15, context=CTX) as r:
            ok = r.status in (200, 301, 302)
            print(('OK  ' if ok else 'BAD ') + str(r.status) + ' ' + u[:95])
            if not ok: fails.append(u)
    except Exception as e:
        print('ERR ' + u[:95] + ' | ' + str(e)[:60])
        fails.append(u)
print('\ntotal:', len(urls), '| fails:', fails if fails else 'NONE')
