# -*- coding: utf-8 -*-
import io, os, subprocess

root = r'e:/Programs/GDPUDev'
conf = os.path.join(root, '_gdpudev.conf')

subprocess.run(['scp', 'gdpudev:/etc/nginx/conf.d/gdpudev.conf', conf], check=True)
s = io.open(conf, encoding='utf-8-sig').read().replace('\r\n', '\n')

bad = 'location ~* ^/gamedev/[A-Za-z0-9_-]+\\.html$ {'
good = 'location ~* ^/gamedev/([A-Za-z0-9_-]+)\\.html$ {'
if bad in s:
    s = s.replace(bad, good)
elif good not in s:
    raise SystemExit('redirect block not found!')

io.open(conf, 'w', encoding='utf-8', newline='\r\n').write(s)
subprocess.run(['scp', conf, 'gdpudev:/tmp/gdpudev.conf'], check=True)
r = subprocess.run(
    'ssh gdpudev "sudo cp /tmp/gdpudev.conf /etc/nginx/conf.d/gdpudev.conf '
    '&& sudo nginx -t && sudo systemctl reload nginx && echo RELOADED"',
    shell=True, capture_output=True, text=True)
print(r.stdout, r.stderr)
os.remove(conf)
