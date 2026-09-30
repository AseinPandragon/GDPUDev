import io

lines = io.open(r'e:/Programs/GDPUDev/rebirth.html', encoding='utf-8').read().split('\n')
for i, l in enumerate(lines):
    if 'var AUTO_EVENTS' in l or (l.strip().startswith('];') and i < 900):
        for j in range(max(0, i - 2), min(len(lines), i + 3)):
            print(str(j + 1) + ': ' + lines[j][:110])
        print('---')
