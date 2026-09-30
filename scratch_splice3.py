import io, re, subprocess

html = io.open(r'e:/Programs/GDPUDev/rebirth.html', encoding='utf-8').read()
new = io.open(r'e:/Programs/GDPUDev/scratch_auto2.txt', encoding='utf-8').read()

s0 = html.index('var AUTO_EVENTS = [')
e0 = html.index('\n];', s0)
# 最后一项缺尾逗号则补
tail = html[e0-2:e0]
html = html[:e0] + ',\n' + new.rstrip('\n').rstrip(';').rstrip() + '\n];' + html[e0+3:]

io.open(r'e:/Programs/GDPUDev/rebirth.html', 'w', encoding='utf-8').write(html)

m = re.search(r'<script>\n(.*)\n</script>', html, re.S)
open(r'e:/Programs/GDPUDev/scratch_check.js', 'w', encoding='utf-8').write(m.group(1))
r = subprocess.run(['node', '--check', r'e:/Programs/GDPUDev/scratch_check.js'], capture_output=True, text=True, encoding='utf-8', errors='replace')
print('JS:', 'SYNTAX_OK' if r.returncode == 0 else (r.stderr or r.stdout)[:600])
print('auto events:', html.count("{ h: '"))
