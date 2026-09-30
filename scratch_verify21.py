import io, re, subprocess
s = io.open(r'e:/Programs/GDPUDev/rebirth.html', encoding='utf-8').read()
m = re.search(r'<script>\n(.*)\n</script>', s, re.S)
open(r'e:/Programs/GDPUDev/scratch_check.js', 'w', encoding='utf-8').write(m.group(1))
r = subprocess.run(['node', '--check', r'e:/Programs/GDPUDev/scratch_check.js'], capture_output=True, text=True, encoding='utf-8', errors='replace')
print('JS:', 'SYNTAX_OK' if r.returncode == 0 else (r.stderr or r.stdout)[:600])
print('auto:', s.count("{ h: '"), '| choice go():', s.count('go: function'), '| dayExtras:', 'function dayExtras' in s)
