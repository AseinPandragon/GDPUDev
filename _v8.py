# -*- coding: utf-8 -*-
import io, json, re, urllib.request
used = set(l.strip() for l in io.open(r'e:/Programs/GDPUDev/_dedupe_urls.txt', encoding='utf-8') if l.strip())
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126.0 Safari/537.36'}
for u in ['https://www.gamesindustry.biz/you-can-now-enter-the-2026-uk-gamesindustrybiz-best-places-to-work-awards',
          'https://github.com/OpenRCT2/OpenRCT2',
          'https://devgamm.com/awards2026/']:
    dup = u in used
    try:
        req = urllib.request.Request(u, headers=UA)
        html = urllib.request.urlopen(req, timeout=25).read(400000).decode('utf-8', 'replace')
        m = re.search(r'property="og:image"[^>]*content="([^"]+)"', html)
        og = m.group(1).replace('&amp;', '&') if m else ''
        d = re.search(r'2026-10-0[0-9]|October \d{1,2}, 2026', html)
        s = re.search(r'([\d,]+)\s*stars', html)
        print(('DUP ' if dup else 'OK  '), '| d:', (d.group(0) if d else '-'), '| og:', og[:60])
        if 'OpenRCT2' in u:
            print('   OpenRCT2 og:', og)
    except Exception as e:
        print('ERR', u[:60], str(e)[:50])
