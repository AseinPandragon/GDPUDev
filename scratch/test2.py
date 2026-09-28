# -*- coding: utf-8 -*-
import ssl, urllib.request
CTX = ssl.create_default_context(); CTX.check_hostname=False; CTX.verify_mode=ssl.CERT_NONE
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,*/*"})
    try:
        with urllib.request.urlopen(req, timeout=15, context=CTX) as r:
            return r.status, r.geturl()
    except Exception as e:
        return 'ERR', str(e)[:70]
for u in [
 'https://docs.unity3d.com/Manual/com.unity.addressables.html',
 'https://docs.unity3d.com/Manual/AssetBundlesIntro.html',
 'https://docs.unity3d.com/Manual/MobileOptimizationPracticalGuide.html',
 'https://docs.unity3d.com/Manual/BestPracticeGuides.html',
 'https://www.realtimerendering.com/',
 'https://developer.android.com/games',
]:
    st, fin = get(u)
    print(st, '|', (fin[:80] if st == 'ERR' else (fin[:80] if fin != u else '')), '|', u[:90])
