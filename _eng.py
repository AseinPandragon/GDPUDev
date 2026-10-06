# -*- coding: utf-8 -*-
import re, urllib.request
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
try:
    html = urllib.request.urlopen(urllib.request.Request('https://godotengine.org/blog/pre-release/', headers=UA), timeout=25).read(300000).decode('utf-8', 'replace')
    arts = re.findall(r'href="(/article/dev-snapshot-godot-4-8-[a-z0-9-]+/)"', html)
    print('godot pre-release:', list(dict.fromkeys(arts))[:4])
except Exception as e:
    print('godot ERR', str(e)[:50])
for repo in ['bevyengine/bevy', 'defold/defold', 'phaserjs/phaser', 'nesbox/TIC-80', 'flame-engine/flame']:
    try:
        req = urllib.request.Request('https://api.github.com/repos/' + repo + '/releases?per_page=2', headers={'User-Agent': 'curl'})
        rel = json_lib = __import__('json')
        data = __import__('json').loads(urllib.request.urlopen(req, timeout=20).read().decode())
        for x in data:
            print(repo, '->', x['tag_name'], '@', str(x['published_at'])[:10])
    except Exception as e:
        print(repo, 'ERR', str(e)[:50])
