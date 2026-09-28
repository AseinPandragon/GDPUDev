# -*- coding: utf-8 -*-
# ① common.js 加移动端下拉点击展开逻辑 ② style.css 加对应规则 ③ 全站升版本号 a->b
import io, os, re

BASE = r'e:\Programs\GDPUDev'

# 1) roadmap-common.js 末尾追加
fp = os.path.join(BASE, 'roadmap-common.js')
c = io.open(fp, encoding='utf-8').read()
if 'mobileOpen' not in c:
    c += """
// ==== 移动端导航下拉：≤768px 时点击父项展开/收起，再次点击才跳转 ====
(function () {
  var mq = window.matchMedia('(max-width: 768px)');
  document.addEventListener('click', function (e) {
    if (!mq.matches) return;
    var drop = e.target.closest('.ark-nav-drop');
    if (!drop) return;
    var trigger = e.target.closest('.ark-nav-drop > .ark-nav-item');
    if (!trigger) return; // 菜单内的子链接正常跳转
    if (!drop.classList.contains('mobileOpen')) {
      e.preventDefault();
      document.querySelectorAll('.ark-nav-drop.mobileOpen').forEach(function (d) {
        if (d !== drop) d.classList.remove('mobileOpen');
      });
      drop.classList.add('mobileOpen');
    }
    // 已展开状态下再次点击父项 → 放行跳转到总览页
  }, true);
  // 点击页面其他区域收起
  document.addEventListener('click', function (e) {
    if (!mq.matches) return;
    if (e.target.closest('.ark-nav-drop')) return;
    document.querySelectorAll('.ark-nav-drop.mobileOpen').forEach(function (d) { d.classList.remove('mobileOpen'); });
  });
})();
"""
    io.open(fp, 'w', encoding='utf-8', newline='\r\n').write(c)
    print('common.js: mobile dropdown logic added')

# 2) roadmap-style.css 末尾追加规则
fp = os.path.join(BASE, 'roadmap-style.css')
c = io.open(fp, encoding='utf-8').read()
if 'mobileOpen' not in c:
    c += """
/* ==== 移动端导航下拉展开态（配合 common.js 点击逻辑） ==== */
@media (max-width: 768px) {
  .ark-nav-drop { position: relative; }
  .ark-nav-drop.mobileOpen .ark-nav-menu {
    display: block !important;
    position: absolute;
    left: 8px;
    right: 8px;
    top: calc(100% + 6px);
    z-index: 80;
    max-height: 60vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(15, 23, 42, .25);
  }
}
"""
    io.open(fp, 'w', encoding='utf-8', newline='\r\n').write(c)
    print('style.css: mobile dropdown rules added')

# 3) 全站升版本号
changed = 0
pages = []
for f in os.listdir(BASE):
    if f.endswith('.html') and f != 'admin.html':
        pages.append(f)
for sub in ['design', 'art', 'ta', 'client', 'engine']:
    d = os.path.join(BASE, sub)
    for f in os.listdir(d):
        if f.endswith('.html'):
            pages.append(sub + '/' + f)
for rel in pages:
    fp = os.path.join(BASE, rel.replace('/', '\\'))
    t = io.open(fp, encoding='utf-8').read()
    n = t.replace('roadmap-style.css?v=20260928a', 'roadmap-style.css?v=20260928b') \
         .replace('roadmap-common.js?v=20260928a', 'roadmap-common.js?v=20260928b') \
         .replace('quiz-bank.js?v=20260928a', 'quiz-bank.js?v=20260928b')
    if n != t:
        io.open(fp, 'w', encoding='utf-8', newline='\r\n').write(t)
        changed += 1
print('version bumped pages:', changed)
