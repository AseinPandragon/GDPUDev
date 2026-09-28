import re, io, os
files = [
    r"e:\Programs\GDPUDev\data\2026-09-24.js",
    r"e:\Programs\GDPUDev\data\2026-09-25.js",
    r"e:\Programs\GDPUDev\data\2026-09-26.js",
    r"e:\Programs\GDPUDev\data\2026-09-27.js",
    r"e:\Programs\GDPUDev\data\2026-09-28.js",
]
pat = re.compile(r'url:\s*"([^"]+)"')
out = []
for f in files:
    text = io.open(f, encoding="utf-8-sig").read()
    urls = pat.findall(text)
    out.append("=== %s (%d) ===" % (os.path.basename(f), len(urls)))
    out.extend(urls)
result = "\n".join(out)
io.open(r"e:\Programs\GDPUDev\scratch\urls_recent5.txt", "w", encoding="utf-8").write(result)
print("total lines:", len(out))
