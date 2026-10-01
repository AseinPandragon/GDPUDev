import ssl, urllib.request, re, gzip, json, io, sys
sys.stdout.reconfigure(encoding='utf-8')
ctx = ssl.create_default_context()
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'}

def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers=UA)
    r = urllib.request.urlopen(req, timeout=timeout, context=ctx)
    raw = r.read()
    if r.headers.get('Content-Encoding') == 'gzip':
        raw = gzip.decompress(raw)
    return r.status, raw

def check(url):
    try:
        st, raw = fetch(url)
        html = raw.decode('utf-8', 'ignore')
        m = re.search(r'property=["\']og:image["\'][^>]*content=["\']([^"\']+)', html) or \
            re.search(r'content=["\']([^"\']+)["\'][^>]*property=["\']og:image', html)
        m2 = re.search(r'<title[^>]*>(.*?)</title>', html, re.S)
        title = (m2.group(1).strip()[:70] if m2 else '')
        og = m.group(1).replace('&amp;', '&') if m else ''
        return {'url': url, 'status': st, 'og': og, 'title': title}
    except Exception as e:
        return {'url': url, 'status': 'ERR', 'og': '', 'title': str(e)[:60]}

CANDS = [
    'https://itch.io/jams',
    'https://ldjam.com/',
    'https://globalgamejam.org/',
    'https://www.ciga.me/gamejams',
    'https://www.ciga.me/',
    'https://gameinstitute.qq.com/yxds/collection',
    'https://www.ncda.org.cn/',
    'http://jsjds.blcu.edu.cn/',
    'https://indienova.com/',
]
out = [check(u) for u in CANDS]
for o in out:
    print(o['status'], '|', o['url'])
    print('   title:', o['title'])
    print('   og:', o['og'][:120])
io.open(r'e:/Programs/GDPUDev/scratch_contest.json', 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False, indent=1))
