# -*- coding: utf-8 -*-
import ssl, urllib.request
CTX = ssl.create_default_context(); CTX.check_hostname = False; CTX.verify_mode = ssl.CERT_NONE
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
urls = [
 'https://origingame.ai/aigcc',
 'https://gameinstitute.qq.com/awards2026/ai',
 'https://github.com/Kevin-Liu-01/Claude-of-Tanks',
 'https://github.com/playcanvas/engine',
 'https://github.com/endless-sky/endless-sky',
 'https://github.com/adalinesimonian/gdvm',
 'https://github.com/EL4CTEO/rbx-studio-mcp',
 'https://github.com/esengine/estella',
 'https://unity.com/blog/scaling-scritchy-scratchy-across-platforms',
 'https://baijiahao.baidu.com/s?id=1876545484745078873',
 'https://baijiahao.baidu.com/s?id=1877489321630707667',
 'https://blog.csdn.net/2401_85555433/article/details/164269282',
 'https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html',
 'https://www.bilibili.com/video/BV1sPUGYzEz3',
 'https://www.gdcvault.com/free',
]
for u in urls:
    try:
        req = urllib.request.Request(u, headers={"User-Agent": UA, "Accept": "text/html,*/*"})
        with urllib.request.urlopen(req, timeout=20, context=CTX) as r:
            print(r.status, u[:95])
    except Exception as e:
        print('ERR', str(e)[:55], u[:95])
