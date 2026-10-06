# -*- coding: utf-8 -*-
import io, json, re, urllib.request
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0 Safari/537.36'}
urls = [
 'https://devblogs.microsoft.com/directx/advanced-shader-delivery-available-for-gears-of-war-e-day-and-coming-soon-across-windows-11/',
 'https://devblogs.microsoft.com/directx/introducing-dxtimingcapturelibrary/',
 'https://devblogs.microsoft.com/directx/autosr-on-intel/',
 'https://devblogs.microsoft.com/directx/announcing-agilitysdk-721-preview-and-more-shader-model-6-10-features/',
 'https://devblogs.microsoft.com/directx/advanced-shader-delivery-expands-public-preview-with-amd/',
 'https://gpuopen.com/amd-fsr-rayregeneration/',
]
out = {}
for u in urls:
    try:
        req = urllib.request.Request(u, headers=UA)
        html = urllib.request.urlopen(req, timeout=25).read(400000).decode('utf-8', 'replace')
        m = re.search(r'property="og:image"[^>]*content="([^"]+)"', html)
        og = m.group(1).replace('&amp;', '&') if m else ''
        d = re.search(r'2026-09-2[0-9]|2026-10-0[0-9]|October \d{1,2}, 2026', html)
        t = re.search(r'<title>([^<]+)</title>', html)
        out[u] = {'og': og, 'date': d.group(0) if d else '', 'title': (t.group(1).strip() if t else '')[:80]}
        print(u.split('/directx/')[-1][:50], '|', (d.group(0) if d else '-'), '|', og[:60], '|', (t.group(1).strip()[:60] if t else ''))
    except Exception as e:
        print('ERR', u[:60], str(e)[:50])
io.open(r'e:/Programs/GDPUDev/_dx.json', 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False, indent=1))
