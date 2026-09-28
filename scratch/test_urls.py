# -*- coding: utf-8 -*-
# 用 GET+完整 UA 复测可疑链接，并测试 Unity 文档候选 URL
import ssl, urllib.request
CTX = ssl.create_default_context(); CTX.check_hostname=False; CTX.verify_mode=ssl.CERT_NONE
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,*/*"})
    try:
        with urllib.request.urlopen(req, timeout=15, context=CTX) as r:
            return r.status, r.geturl()
    except Exception as e:
        return 'ERR', str(e)[:80]

cands = [
 'https://docs.unity3d.com/Manual/Addressables.html',
 'https://docs.unity3d.com/Manual/AddressableAssets.html',
 'https://docs.unity3d.com/Manual/AssetBundles-Introduction.html',
 'https://docs.unity3d.com/Manual/AssetBundles-Introducing.html',
 'https://docs.unity3d.com/Manual/AssetBundles.html',
 'https://docs.unity3d.com/Manual/BestPracticeGuides.html',
 'https://docs.unity3d.com/Manual/performance-optimization.html',
 'https://help.autodesk.com/view/MAYAUL/2025/ENU/',
 'https://help.autodesk.com/view/MAYAUL/2024/ENU/',
 'https://developer.android.com/games/agpi',
 'http://www.realtimerendering.com/',
 'https://www.bilibili.com/video/BV1X7411F744',
 'https://zhuanlan.zhihu.com/p/32047656748',
]
for u in cands:
    st, fin = get(u)
    print(st, '|', (fin[:110] if st == 'ERR' else ''), '|', u[:85])
