import io, re, subprocess

html = io.open(r'e:/Programs/GDPUDev/rebirth.html', encoding='utf-8').read()
dev = io.open(r'e:/Programs/GDPUDev/scratch_dev_events.txt', encoding='utf-8').read()
extras = io.open(r'e:/Programs/GDPUDev/scratch_day_extras.txt', encoding='utf-8').read()

# 1) EVENTS 追加开发向事件（补尾逗号）
s1 = html.index('var EVENTS = [')
e1 = html.index('\n];', s1)
html = html[:e1] + ',\n' + dev.strip('\n') + html[e1:]

# 2) dayExtras 函数插在 SKILLS 系统之后（var SPECIALS 之前）
anchor2 = 'var SPECIALS = ['
html = html.replace(anchor2, extras.strip('\n') + '\n\n' + anchor2, 1)

# 3) newState 加 lastAction/streak
html = html.replace(
    'pendingChoice: false, inBattle: false, dayDone: false,',
    'pendingChoice: false, inBattle: false, dayDone: false, lastAction: null, streak: 0,')

# 4) -5 晨间剧情改用 dayStory
old5 = """  if (item === -5) {
    /* 晨间剧情：时间轴第一条 */
    var st = DAY_STORY[S.day - 1];
    pushLog('<div style="margin:4px 0 10px"><div style="color:#edbe5c;font-weight:900;letter-spacing:2px">DAY ' + S.day + ' · ' + st[0] + '</div><div style="color:#e8e4d4;line-height:2">' + st[1] + '</div></div>');
    updateLogHint();
    return;
  }"""
new5 = """  if (item === -5) {
    /* 晨间剧情：基础 + 根据玩家历史动态生成的叙事分支 */
    var st = DAY_STORY[S.day - 1];
    var ex = dayExtras(S.day);
    var ext = ex.length ? '<div style="margin-top:8px;color:#cfe0d4;line-height:2;border-top:1px dashed #3d5a4e;padding-top:8px">' + ex.join('<br>') + '</div>' : '';
    pushLog('<div style="margin:4px 0 10px"><div style="color:#edbe5c;font-weight:900;letter-spacing:2px">DAY ' + S.day + ' · ' + st[0] + '</div><div style="color:#e8e4d4;line-height:2">' + st[1] + '</div>' + ext + '</div>');
    updateLogHint();
    return;
  }"""
assert old5 in html, '-5 handler not found'
html = html.replace(old5, new5, 1)

# 5) -7 下午行动：记录 lastAction/streak
old7 = """    if (a.k === 'idle') {
      S.hp = S.hmax; S.idleDays++;
      var kk = randomKey(); addStat(kk, 2);
      fxTxt = '你打了一下午游戏，理直气壮。意志回满，灵感：' + CLASSES[kk].name + ' +2';
    } else {
      addStat(a.k, 3);
      fxTxt = '你' + a.t + '。' + CLASSES[a.k].name.split(' ')[0] + ' +3';
    }
    pushLog('<div style="margin-bottom:6px"><span style="font-family:var(--font-mono);color:#6b8a7c">14:00</span>　下午，' + fxTxt + '</div>');
    checkStageUps();"""
new7 = """    if (a.k === 'idle') {
      S.hp = S.hmax; S.idleDays++;
      var kk = randomKey(); addStat(kk, 2);
      fxTxt = '你打了一下午游戏，理直气壮。意志回满，灵感：' + CLASSES[kk].name + ' +2';
    } else {
      addStat(a.k, 3);
      fxTxt = '你' + a.t + '。' + CLASSES[a.k].name.split(' ')[0] + ' +3';
    }
    S.streak = (S.lastAction === a.k) ? (S.streak || 0) + 1 : 1;
    S.lastAction = a.k;
    pushLog('<div style="margin-bottom:6px"><span style="font-family:var(--font-mono);color:#6b8a7c">14:00</span>　下午，' + fxTxt + '</div>');
    checkStageUps();"""
assert old7 in html, '-7 handler not found'
html = html.replace(old7, new7, 1)

io.open(r'e:/Programs/GDPUDev/rebirth.html', 'w', encoding='utf-8').write(html)

# 语法校验
m = re.search(r'<script>\n(.*)\n</script>', html, re.S)
open(r'e:/Programs/GDPUDev/scratch_check.js', 'w', encoding='utf-8').write(m.group(1))
r = subprocess.run(['node', '--check', r'e:/Programs/GDPUDev/scratch_check.js'], capture_output=True, text=True, encoding='utf-8', errors='replace')
print('JS:', 'SYNTAX_OK' if r.returncode == 0 else (r.stderr or r.stdout)[:800])
print('events go():', html.count('go: function'), '| dayExtras:', html.count('function dayExtras'))
