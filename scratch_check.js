/* ============ 基础数据 ============ */
var CLASSES = {
  design: { name: '游戏策划', color: '#34d399', glyph: '✍', ammo: ['📄', '📋', '✍'],
    builds: [
      { name: '概率骰 · 赌狗流', desc: '每次扔伤害随机 0.5~3 倍，期望更高，全看命', },
      { name: '百页方案 · 镇压流', desc: '周期性砸出一本方案书：大伤害并让怪物眩晕停火', },
      { name: '辩论波 · 稳态流', desc: '持续灼烧光波，稳定不吃运气', }] },
  prog: { name: '客户端程序', color: '#6366f1', glyph: '⌨', ammo: ['⌨', '{}', 'BUG'],
    builds: [
      { name: '连点流 · 键帽机枪', desc: '攻速大幅提升，单发不变', },
      { name: '重锤流 · 机械键盘', desc: '周期性砸下键盘：范围重击', },
      { name: '召唤流 · 分身调试', desc: '周期性召唤分身帮你一起扔', }] },
  ta: { name: '技术美术 TA', color: '#8b5cf6', glyph: '✨', ammo: ['✨', '🎯', 'Shader'],
    builds: [
      { name: 'Ray 射线 · 穿透流', desc: '周期性贯穿射线：高额伤害', },
      { name: '蜂群流 · 追踪弹', desc: '高频追踪弹，永远命中', },
      { name: '光追爆发 · 蓄能流', desc: '低频但毁天灭地的全屏爆发', }] },
  art: { name: '美术 / 特效', color: '#f59e0b', glyph: '🎨', ammo: ['🎨', '🖌', '⭐'],
    builds: [
      { name: '乱舞流 · 颜料泼溅', desc: '周期性多方向泼溅，总伤可观', },
      { name: '入魂流 · 一击入魂', desc: '蓄力后扔出巨大一击', },
      { name: '涂鸦流 · 画里有人', desc: '常驻涂鸦小人持续补伤害', }] },
  media: { name: '自媒体 / 内容', color: '#ec4899', glyph: '🔥', ammo: ['💬', '👍', '🔥'],
    builds: [
      { name: '弹幕雨 · 刷屏流', desc: '持续弹幕雨不断磨血', },
      { name: '热搜流 · 顶上去', desc: '怪物被顶上热搜：受到伤害增加', },
      { name: '三连流 · 终结技', desc: '攒满能量释放超大终结一击', }] },
  tech: { name: '服务端 / 引擎底层', color: '#94a3b8', glyph: '🔧', ammo: ['🔧', '01', '💾'],
    builds: [
      { name: '清内存 · GC 流', desc: '周期性清理：中伤并短暂压制怪物', },
      { name: '超频流 · Overclock', desc: '周期性进入超频：攻速翻倍', },
      { name: '指针流 · 高危高伤', desc: '扔出野指针：超高伤害，但会伤到自己', }] }
};
/* ============ 技能系统：属性点达到阈值 → 觉醒/进化 ============ */
var THRESH = [3, 7, 12];
var SKILLS = {
  design: [
    { name: '概率骰 · I', desc: '扔出去的伤害随机 0.5~3 倍，赌起来', act: { cd: 3, mul: 1.5, rand: [0.5, 3] } },
    { name: '百页方案 · II', desc: '砸出一本方案：大伤害并让怪物眩晕', act: { cd: 8, mul: 5, stun: 1.5, label: '📋 百页方案!' } },
    { name: '规则改写 · III', desc: '改写局部规则：超高等伤害', act: { cd: 12, mul: 9, label: '📜 规则改写!' } }],
  prog: [
    { name: '键帽机枪 · I', desc: '被动：扔弹攻速 +40%', passive: 'spd' },
    { name: '机械重锤 · II', desc: '周期性砸下键盘：范围重击', act: { cd: 6, mul: 4, label: '⌨ 重锤!' } },
    { name: '分身调试 · III', desc: '周期性召唤分身一起扔', act: { cd: 6, mul: 3, label: '👥 分身!' } }],
  ta: [
    { name: '微光弹 · I', desc: '高频微光弹持续骚扰', act: { cd: 4, mul: 1.5 } },
    { name: 'Ray 射线 · II', desc: '贯穿射线：高额伤害', act: { cd: 5, mul: 3.5, label: '✨ Ray!' } },
    { name: '光追爆发 · III', desc: '低频但毁天灭地的全屏爆发', act: { cd: 10, mul: 8, label: '💥 光追爆发!' } }],
  art: [
    { name: '涂鸦小人 · I', desc: '高频涂鸦攻击', act: { cd: 2, mul: 0.8 } },
    { name: '颜料泼溅 · II', desc: '多方向泼溅', act: { cd: 5, mul: 2.5, label: '🎨 泼溅!' } },
    { name: '一击入魂 · III', desc: '蓄力巨大一击', act: { cd: 9, mul: 7, label: '🖌 入魂!' } }],
  media: [
    { name: '弹幕雨 · I', desc: '持续弹幕磨血', act: { cd: 1.5, mul: 0.8 } },
    { name: '顶上热搜 · II', desc: '被动：怪物受到伤害 +25%', passive: 'vuln' },
    { name: '一键三连 · III', desc: '攒力终结一击', act: { cd: 12, mul: 10, label: '👍 三连!' } }],
  tech: [
    { name: '内存清理 · I', desc: '清空怪物弹幕并造成伤害', act: { cd: 7, mul: 2, clear: true, label: '🔧 GC!' } },
    { name: '超频 · II', desc: '攻速翻倍一段时间', act: { cd: 12, hyper: 10, label: '⚡ 超频!' } },
    { name: '野指针 · III', desc: '高伤害但会反伤自己', act: { cd: 5, mul: 4, self: 3, label: '🌀 野指针!' } }]
};
var SKILL_ACTIVES = {
  design1: { cd: 3, mul: 1.5, rand: [0.5, 3] },
  design2: { cd: 8, mul: 5, stun: 1.5, label: '📋 百页方案!' },
  design3: { cd: 12, mul: 9, label: '📜 规则改写!' },
  prog2: { cd: 6, mul: 4, label: '⌨ 重锤!' },
  prog3: { cd: 6, mul: 3, label: '👥 分身!' },
  ta1: { cd: 4, mul: 1.5 },
  ta2: { cd: 5, mul: 3.5, label: '✨ Ray!' },
  ta3: { cd: 10, mul: 8, label: '💥 光追爆发!' },
  art1: { cd: 2, mul: 0.8 },
  art2: { cd: 5, mul: 2.5, label: '🎨 泼溅!' },
  art3: { cd: 9, mul: 7, label: '🖌 入魂!' },
  media1: { cd: 1.5, mul: 0.8 },
  media3: { cd: 12, mul: 10, label: '👍 一键三连!' },
  tech1: { cd: 7, mul: 2, clear: true, label: '🔧 GC!' },
  tech2: { cd: 12, hyper: 10, label: '⚡ 超频!' },
  tech3: { cd: 5, mul: 4, self: 3, label: '🌀 野指针!' }
};
var SKILL_PASSIVE = { prog1: 'spd', media2: 'vuln' };
function statStage(k) { var v = S.stats[k] || 0; return v >= THRESH[2] ? 3 : v >= THRESH[1] ? 2 : v >= THRESH[0] ? 1 : 0; }
function addStat(k, n) { S.stats[k] = Math.max(0, (S.stats[k] || 0) + n); }
function checkStageUps() {
  for (var k in SKILLS) {
    var st = statStage(k), seen = S.stageSeen[k] || 0;
    if (st > seen) {
      S.stageSeen[k] = st;
      var sk = SKILLS[k][st - 1];
      var word = st === 1 ? '觉醒' : '进化';
      pushLog('<div style="margin:6px 0;padding:9px 13px;background:rgba(59,130,246,.12);border-left:3px solid #3b82f6;border-radius:6px"><b style="color:#8fb2ff">⭐ ' + word + '！' + CLASSES[k].name.split(' ')[0] + '之力 ' + word + '了——</b>获得技能 <b style="color:#8fb2ff">' + sk.name + '</b>：' + sk.desc + '（战斗中自动释放）</div>');
    }
  }
}

/* ============ 特殊 Build：八个次元来挖人，每局随机出现两个 ============ */
/* ============ 动态晨间剧情：根据玩家选择生成当天的叙事分支 ============ */
function dayExtras(day) {
  var out = [];
  var last = S.lastAction, top = topClass();
  if (day === 2 && last) {
    var m2 = {
      prog: '表弟指着屏幕上一片红色报错：「这都是啥？」——那是你昨天的战场，你今天要把它变成绿色。',
      design: '你把写了一半的策划案摊给表弟看，他居然从头看到了尾。「哥，你变了我都不知道。」',
      art: '表弟翻了翻你的临摹图：「这张像！」——像，就是今天的里程碑。',
      ta: '你给表弟演示了一个会发光的方块。他「哦——」了很长一声。',
      media: '你给表弟看你剪的片段，他反反复复点了三遍。',
      tech: '你给表弟讲服务器原理，讲到一半他睡着了。你讲得更起劲了。',
      idle: '表弟瞄到你的战绩：「哥，你不还是照样打游戏？」你只是笑——你看到的和他看到的，不是同一个游戏。'
    };
    if (m2[last]) out.push(m2[last]);
  }
  if (day === 3 && (S.streak || 0) >= 2) out.push('饭桌上有人问你国庆怎么过的，你说「在做一个东西」。说出口的瞬间，它忽然更像真的了。');
  if (day === 4) {
    if (S.specials.length) out.push('体内那股异次元的力量安静得很——今晚之前，你决定先靠自己。');
    var m4 = {
      prog: '你的手指已经自己记得快捷键了。',
      design: '你的方案第三稿终于能一口气读下来。',
      ta: '你调的参数让它从「能看」变成了「想再看一遍」。',
      art: '你撕掉的画纸已经比留下的多了。',
      media: '你的第三条内容比前两条加起来还顺。',
      tech: '文档里的黑话，你已经能读出声音了。'
    };
    if (m4[top]) out.push(m4[top]);
  }
  if (day === 5) {
    if (S.specials.length) {
      var sp5 = SPECIALS.filter(function (x) { return x.id === S.specials[0]; })[0];
      if (sp5) out.push('梦里的战场边，多了一个' + sp5.who + '的剪影——它说：「今晚，用我教你的那一招。」');
    }
    var total = 0;
    for (var k5 in S.stageSeen) total += S.stageSeen[k5];
    if (total >= 3) out.push('梦里的怪物看起来比前世弱了——不，是你的眼睛升级了。');
  }
  if (day === 6) {
    if ((S.stats.media || 0) >= 7) out.push('私信里有人问：「还有后续吗？」——有。你还有很多。');
    if ((S.streak || 0) >= 3) out.push('同一个方向，连续第 ' + S.streak + ' 天。习惯长成了骨头。');
  }
  if (day === 7) {
    out.push('你数了数这七天：' + Math.max(1, S.day - 1) + ' 个白天，全部亲手砸了进去。');
    if (S.specials.length) {
      var sp7 = SPECIALS.filter(function (x) { return x.id === S.specials[0]; })[0];
      if (sp7) out.push(sp7.emoji + ' ' + sp7.who + '的力量在你体内待命。');
      if (S.specials.length > 1) {
        var sp7b = SPECIALS.filter(function (x) { return x.id === S.specials[1]; })[0];
        if (sp7b) out.push(sp7b.emoji + '还有' + sp7b.who + '——两个次元都不想输。');
      }
    }
    var m7 = {
      prog: '明天之后，世界需要能跑起来的东西——你有。',
      design: '明天之后，世界需要新的规则——你会写。',
      ta: '明天之后，世界需要看得见的魔法——你会调。',
      art: '明天之后，世界需要被画出来的希望——你会画。',
      media: '明天之后，恐慌需要被声音压住——你会说。',
      tech: '明天之后，世界需要看不见的地基——你会搭。'
    };
    if (m7[top]) out.push(m7[top]);
  }
  return out;
}

var SPECIALS = [
  { id: 'ultra', who: '光之巨人', emoji: '🔵', invite: '一道巨大的光落在你面前：「少年，愿意成为光吗？」', skill: { name: '斯派修姆光线', act: { cd: 9, mul: 12, label: '〰 斯派修姆光线——!' } }, cg: '【CG】十字手刀挥下的瞬间，整个世界都是白色的。怪物的剪影在光里碎成星屑。', yes: '你举起右手，光涌进身体。血管里像装了太阳。', no: '你摆摆手：「等我七天后再说。」光沉默地暗了下去。' },
  { id: 'ninja', who: '木叶忍者', emoji: '🌀', invite: '一个护额少年倒挂在树上：「要不要学查克拉？现在报名送分身。」', skill: { name: '影分身之术', act: { cd: 4, mul: 2.5, label: '🌀 影分身!' } }, cg: '【CG】砰——三个「你」同时坐在电脑前写代码，其中一个还在打哈欠。', yes: '你结了一个不太标准的印。分身出现了，先揉了揉腰。', no: '「不打紧，」他消失前说，「你本来就在修行，只是没有护额。」' },
  { id: 'pkm', who: '宝可梦博士', emoji: '⚡', invite: '白胡子老博士拦住你：「就决定是你了——要这只吗？它会电人。」', skill: { name: '十万伏特', act: { cd: 7, mul: 6, label: '⚡ 十万伏特!' } }, cg: '【CG】电气囊蓄能的蓝光，把怪物的剪影打在了整面墙上。', yes: '你接过精灵球。里面传来一声理直气壮的叫声。', no: '博士把球收回去：「那这只就留给下一个孩子。」' },
  { id: 'gundam', who: '高达驾驶员', emoji: '🤖', invite: '机库的门为你打开：「驾驶舱一直留着你的位置。」', skill: { name: '光束军刀', act: { cd: 6, mul: 5, label: '🗡 光束军刀!' } }, cg: '【CG】驾驶舱合拢，HUD 全亮，点火声像心跳一样撞进胸腔。', yes: '你扣上安全带，推下节流阀。地面离你远去。', no: '你退出来：「我先把自己的机体练好。」驾驶员点点头，很欣赏。' },
  { id: 'dbz', who: '龟仙人', emoji: '🐉', invite: '白胡子老头凑过来：「集齐七颗龙珠太慢，不如先学个气功波？」', skill: { name: '龟派气功', act: { cd: 11, mul: 11, label: '〰 龟——派——气功——!' } }, cg: '【CG】双手合拢推出光波的瞬间，地面被犁开了一道笔直的沟。', yes: '「卡——美——哈——美——」你练了一下午发音，邻居报了警。', no: '「也行，」老头笑眯眯，「气要从日常里养，你养的方式不错。」' },
  { id: 'moon', who: '月之骑士', emoji: '🌙', invite: '一只会说话的黑猫递来胸针：「变身吗？代表月亮消灭它。」', skill: { name: '月光净化', act: { cd: 8, mul: 4.5, label: '🌙 月光净化!' } }, cg: '【CG】光带缠绕全身，怪物的嘶吼在光里变成了闪耀的剪影。', yes: '你举起胸针。变身的过程没法描述，反正很闪，也很贵。', no: '黑猫耸耸肩：「猫都比你勇敢。」然后优雅地走了。' },
  { id: 'conan', who: '眼镜侦探', emoji: '🕵', invite: '眼镜少年推了推镜框：「需要支援吗？真相只有一个。」', skill: { name: '麻醉手表', act: { cd: 6, mul: 2, stun: 2, label: '🕵 麻醉针!' } }, cg: '【CG】怪物在麻醉针下缓缓跪倒，仿佛终于听到了真相。', yes: '你和眼镜少年击了个掌。推理时间，开始。', no: '「理解，」他推推眼镜，「证据链还没闭合的话，不勉强。」' },
  { id: 'slam', who: '红发王牌', emoji: '🏀', invite: '红发少年把篮球砸给你：「我们缺个能写战术的！顺便打个球？」', skill: { name: '灌篮重击', act: { cd: 7, mul: 6.5, label: '🏀 灌篮!' } }, cg: '【CG】篮球砸进怪物头顶的闷响，像一次完美压哨扣篮。', yes: '你运球过了三只史莱姆。手感，回来了。', no: '「切，」他捡回球，「天才不差你一个。」但你总觉得他在等。' }
];

var MONSTERS = [
  { name: '空指针史莱姆', emoji: '🫠', desc: '一滩会弹出 NullReferenceException 的黏液，新手村特产。', hp: 26, dmg: 3, dex: 'D1' },
  { name: '紫黑棋盘格犬', emoji: '🐕', desc: '浑身闪着 Missing Texture 的紫黑格子，咬人之前先咬贴图。', hp: 40, dmg: 4, dex: 'D2' },
  { name: '内存泄漏水蛭', emoji: '🪱', desc: '吸走你的性能，越打越长，从来没有 free 过。', hp: 58, dmg: 5, dex: 'D3' },
  { name: '死循环衔尾蛇', emoji: '🐍', desc: 'while(true) 的化身，它咬住尾巴的那一刻，你回到了第一天。', hp: 80, dmg: 7, dex: 'D4' },
  { name: '碰撞箱错位妖', emoji: '📦', desc: '明明没碰到你，你却掉了血。判定不对齐的东西最不讲道理。', hp: 108, dmg: 9, dex: 'D5' },
  { name: '需求变更魔王 · 影', emoji: '😈', desc: '它不攻击，它只是微笑着说：这个玩法，再改一版。', hp: 145, dmg: 11, dex: 'D6' },
];
var BOSS = { name: '降临级 1.0.0 · 黄金周吞噬者', emoji: '👑', desc: '大降临的先遣之王。版本号 1.0.0——本版本尚无通关者。', hp: 260, dmg: 13, dex: 'BOSS' };
var DAY_STORY = [
  ['10 月 1 日 · 国庆第一天', '前世今天，你打了整整一天排位。这次，你盯着电脑桌面上那个从没打开过的引擎图标，看了很久。<em>还有 7 天。</em>'],
  ['10 月 2 日 · 表弟来了', '表弟趴在你肩膀上看你屏幕：「哥你在写啥？」「在写你以后要躲着走的东西。」你第一次觉得，学习这件事有点热血。'],
  ['10 月 3 日 · 同学聚会', '饭桌上有人晒大厂工牌，有人劝你「玩游戏没前途」。你笑笑没说话——你比在座所有人都清楚，五天后这个世界的规则会怎么改写。'],
  ['10 月 4 日 · 它跑起来了', '凌晨两点，你的第一个 demo 跑起来了。画面很丑，操作很烂，但<em>它动了</em>。你忽然明白前世死掉的时候，为什么那么不甘心。'],
  ['10 月 5 日 · 梦里的弱点', '你梦到了前世那只杀死你的怪物。这次你没有跑，你凑近看清了它身上的纹路——醒来时枕头上写满了笔记。你开始有了「职业」的样子。'],
  ['10 月 6 日 · 陌生的转发', '你随手发的内容第一次被陌生人转发。窗外地铁路况播报着「返程高峰」——前世，死亡就是从返程那晚开始的。<em>还剩 2 天。</em>'],
  ['10 月 7 日 · 最后一夜', '你把七天攒下的所有东西摊在桌上。明天早上 8 点，它们会走进现实。今晚不是复习夜——<em>今晚是决战前夜。</em>']
];
var ACTIONS = [
  { k: 'design', t: '写一份策划案', s: '策划脑 +3', d: '拆一个你最喜欢的玩法系统，写成规则表。' },
  { k: 'prog', t: '肝一个 demo', s: '代码力 +3', d: '把昨天想的功能真的写出来，报错也写。' },
  { k: 'art', t: '临摹练习', s: '美术手 +3', d: '找一张喜欢的图，一笔一笔抠。' },
  { k: 'ta', t: '研究渲染效果', s: '渲染眼 +3', d: '让一个方块发光这件事，你能玩一下午。' },
  { k: 'media', t: '发一条开发日志', s: '声量 +3', d: '把今天学的东西讲给别人听。' },
  { k: 'tech', t: '啃底层文档', s: '底层根骨 +3', d: '别人当睡前故事读的东西，你当功法练。' },
  { k: 'idle', t: '打一天游戏 🎮', s: '意志回满 + 随机灵感 +2', d: '理直气壮地玩：你是去「研究优秀设计」的。' }
];
var ROGUE_POOL = [
  { id: 'dmg', t: '弹药增粗', d: '伤害 +25%（可叠加）' },
  { id: 'spd', t: '射速提升', d: '攻速 +20%（可叠加）' },
  { id: 'hp', t: '意志上限', d: '意志上限 +8，并立即回复 8 点' },
  { id: 'crit', t: '会心一击', d: '暴击率 +15%（暴击 ×2 伤害）' },
  { id: 'vamp', t: '残光吸取', d: '造成伤害的 10% 转化为意志（可叠加）' },
  { id: 'skill', t: '技能强化', d: 'Build 技能伤害 +40%（可叠加）' },
  { id: 'cdr', t: '冷却缩减', d: 'Build 技能冷却 -15%' },
  { id: 'regen', t: '意志之泉', d: '战斗中每秒回复 0.5 意志' },
  { id: 'sup', t: '火力压制', d: '怪物攻击间隔 +0.25 秒（它出手更慢了）' },
  { id: 'combo', t: '连击惯性', d: '战斗时间越长伤害越高：每 5 秒 +8%（上限 +48%）' },
  { id: 'shield', t: '备用弹药箱', d: '每场战斗开始时获得 12 点护盾（先于意志扣除，可叠加）' },
  { id: 'critdmg', t: '会心重击', d: '暴击伤害从两倍变三倍（配合暴击率食用）' },
  { id: 'adr', t: '肾上腺素', d: '意志低于三成时，伤害 +60%——绝境反杀专用' },
  { id: 'thorn', t: '反击装甲', d: '被怪物击中时反弹 3 点伤害（可叠加）' },
  { id: 'split', t: '弹药分裂', d: '普攻有 20% 概率分裂成两发（可叠加）' },
  { id: 'burst', t: '开场风暴', d: '每场战斗的前 5 秒，攻速快到看不清' },
  { id: 'big', t: '巨人化', d: '你变大了：伤害 +40%，攻速 -10%（有得必有失）' },
  { id: 'healwin', t: '战后喘息', d: '每场战斗胜利后回复 15 点意志' },
  { id: 'revive', t: '★ 不死鸟羽', d: '每场战斗可抵挡一次致命伤害，保留 1 点意志（每层一次）' },
  { id: 'lucky', t: '★ 幸运星', d: '此后所有战利品三选一变成四选一（贪婪之选）' }
];
var ENDINGS = {
  E_design: { t: '规则之主', got: 'win' },
  E_prog: { t: '手中有码', got: 'win' },
  E_ta: { t: '画面之下', got: 'win' },
  E_art: { t: '造像者', got: 'win' },
  E_media: { t: '声量', got: 'win' },
  E_tech: { t: '底层之根', got: 'win' },
  D1: { t: '新手村的坑', got: '死' },
  D2: { t: '紫黑的狗', got: '死' },
  D3: { t: '越打越长', got: '死' },
  D4: { t: '走不出去', got: '死' },
  D5: { t: '差一个身位', got: '死' },
  D6: { t: '再改一版', got: '死' },
  BOSS: { t: '1.0.0 无人通关', got: '死' },
  E_idle: { t: '娱乐玩家', got: '隐' }
};
var ENDING_TEXT = {
  win: {
    design: '降临日清晨，你在天台摊开七天写满的策划案。怪物踏进城的第一步，踩进了你设计的领域——它们发现，这个世界的规则，也有人类能改。',
    prog: '你敲下最后一行代码，天亮了。怪物逼近，你的 demo 第一次连上服务器——屏幕亮起的那一刻，你听见了加载音。现实，被你打上了补丁。',
    ta: '众人眼里的怪物是恐怖的，你眼里它们只是没渲染完的 mesh。你抬手改了它们的 Shader——降临之物第一次在人类面前，变成了半透明。',
    art: '你把七天画的设定图贴满整条街。怪物停在一幅画前不动了——那幅画画着它被击败的样子。它信了。美术，就是让不存在之物存在的职业。',
    media: '你七天发的开发日志在降临夜冲上热搜第一。全城的人按你视频里说的躲进了安全屋。你没能打死怪物，但你让十万人活了下来——声量，也是一种战力。',
    tech: '降临的核心是一台巨大的服务器，而你读过它的文档。你把手按上去，敲下第一行指令——这个世界的 root 权限，这次在人类手里。'
  },
  death: {
    D1: '前世你死在它手里，这次还是。临死前你终于看清了它弹出的报错——你压根没初始化。',
    D2: '贴图丢失兽咬住你的瞬间，你看到自己身上也是紫黑棋盘格。原来在它们眼里，没准备好的你，才是没加载出来的那个。',
    D3: '内存泄漏水蛭吸走了你的意志。你的七天，像没 free 的内存一样被它一点点占满。',
    D4: '死循环衔尾蛇咬住尾巴的那一刻，你睁眼回到了第一天早上。你开始怀疑，这已经是第 N 个七天了。',
    D5: '碰撞箱错位妖明明没碰到你，你却掉了血。判定没对齐的东西，杀起人来最不讲道理。',
    D6: '需求变更魔王没有杀你。它只是把你的七天改成了别的版本。你死在自己删掉的代码里。',
    BOSS: '黄金周吞噬者把你吞下去的时候，空中弹出一行字：【1.0.0 · 本版本尚无通关者】。它在等一个把版本号推进到 1.0.1 的人。'
  },
  idle: '你七天都在打游戏。降临那天，你正打到排位晋级赛。怪物踩进房间时，你头也没抬——反正这局马上就赢了。系统评价：快乐，但毫无胜算。这是唯一一个你没有输给怪物的结局——你输给了期限。'
};
var EVENTS = [
  { t: '室友的邀请', s: '室友推门进来：「开黑吗？就一把。」屏幕里好友头像在闪。', c: [
    { t: '来！就一把！', go: function () { S.hp = Math.min(S.hmax, S.hp + 6); return '一把之后又一把，凌晨一点你心满意足地关掉游戏。快乐有时候就是意志本身。意志 +6。'; } },
    { t: '不了，困了', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '你早早躺下，室友的键盘声响到两点。你睡得像块石头。意志 +3。'; } },
    { t: '你们打，我旁边看会儿', go: function () { var k = randomKey(); S.stats[k] += 2; return '看别人打比自己打轻松，顺便还看懂了点什么。灵感来了：' + CLASSES[k].name + ' +2。'; } }] },
  { t: '深夜 EMO', s: '凌晨的 emo 时刻：「七天，真的够吗？」', c: [
    { t: '蒙头睡觉，明天再说', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); return '有些问题睡一觉就会变小。意志 +4。'; } },
    { t: '戴上耳机听歌，随机循环', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); var k = randomKey(); S.stats[k] += 1; return '第三首歌的间隙，你忽然想通了一件小事。' + CLASSES[k].name + ' +1，意志 +2。'; } },
    { t: '坐回电脑前，接着干', go: function () { S.hp = Math.max(1, S.hp - 2); var k = randomKey(); S.stats[k] += 2; return 'EMO 的唯一解法是进度条。' + CLASSES[k].name + ' +2，意志 -2。'; } },
    { t: '给朋友发消息聊聊', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '朋友说：「你已经比上周厉害多了。」你信了一半，睡了个好觉。意志 +3。'; } }] },
  { t: '饭堂阿姨的手', s: '阿姨舀菜的手悬在你餐盘上方，抖了一下。', c: [
    { t: '微笑说谢谢', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '阿姨手一稳，肉多了两块。被善意对待的一天。意志 +3。'; } },
    { t: '换个窗口排队', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '新窗口的糖醋排骨意外地好吃。意志 +1。'; } },
    { t: '拍照发帖吐槽', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '帖子在墙群小火了一把，你收获了一批同病相怜的饭搭子。意志 +1。'; } }] },
  { t: '蓝屏', s: '干着干着活，屏幕猛地一蓝——UNEXPECTED_STORE_EXCEPTION。', c: [
    { t: '今晚必须修好它', go: function () { S.stats.prog += 2; S.hp = Math.max(1, S.hp - 3); return '凌晨三点你修好了它，顺便看懂了半本系统原理。代码力 +2，意志 -3。'; } },
    { t: '关机，明天再说', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '你选择放过自己。意志 +3。'; } },
    { t: '抱着电脑去找懂行的同学', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '十分钟修好，你们顺便聊了半小时游戏。意志 +2。'; } }] },
  { t: '亲戚的灵魂拷问', s: '家族群弹出语音：「听说你在搞游戏？那玩意能当饭吃吗？」', c: [
    { t: '发六十秒语音认真解释', go: function () { S.stats.media += 2; return '讲到一半你自己都更信了。声量 +2。'; } },
    { t: '发个笑脸打哈哈', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '家族话题成功拐去了房价。意志 +2。'; } },
    { t: '把你做的东西发进群里', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '小侄子回了六个「牛」表情。意外地爽。意志 +3。'; } }] },
  { t: '神仙教程', s: '刷到一个教程，讲的正是你卡了两天的地方。', c: [
    { t: '一口气跟着做完', go: function () { S.hp = Math.max(1, S.hp - 3); var k = randomKey(); S.stats[k] += 3; return '跟到凌晨，卡点全通。' + CLASSES[k].name + ' +3，意志 -3。'; } },
    { t: '收藏，明天看', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '你和你的收藏夹都心知肚明：不会再打开了。意志 +1。'; } },
    { t: '转发给同样在学的朋友', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '朋友回你：「你是我的嘴替。」意志 +2。'; } }] },
  { t: '网吧五连坐', s: '路过网吧，朋友在里面朝你招手：「来啊，缺一个！」', c: [
    { t: '上！通宵！', go: function () { S.hp = Math.max(1, S.hp - 4); var k = randomKey(); S.stats[k] += 3; return '打到早上六点，全程研究对面技能循环——灵感不讲道理。意志 -4，' + CLASSES[k].name + ' +3。'; } },
    { t: '站着看两把就走', go: function () { var k = randomKey(); S.stats[k] += 2; return '看别人打比自己打轻松，还看出了门道。' + CLASSES[k].name + ' +2。'; } },
    { t: '头也不回地走开', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '大丈夫有所不为。意志 +2。'; } }] },
  { t: '停电的夜晚', s: '宿舍片区跳闸，整栋楼陷入黑暗，手机还剩 30% 电。', c: [
    { t: '睡觉，天赐的早睡理由', go: function () { S.hp = Math.min(S.hmax, S.hp + 5); return '没有屏幕的夜晚睡得格外沉。意志 +5。'; } },
    { t: '躺着刷手机到没电', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '刷到手机自动关机，反而获得了解脱。意志 +2。'; } },
    { t: '摸黑坐着发呆', go: function () { var k = randomKey(); S.stats[k] += 2; return '黑暗里你把最近的思路顺了一遍，居然顺通了一个卡点。' + CLASSES[k].name + ' +2。'; } }] },
  { t: '降温了', s: '冷空气到了，你嗓子有点痒。', c: [
    { t: '硬扛，别耽误事', go: function () { S.hp = Math.max(1, S.hp - 3); var k = randomKey(); S.stats[k] += 2; return '鼻子堵着也能干活，就是效率打八折。意志 -3，' + CLASSES[k].name + ' +2。'; } },
    { t: '去校医院拿药', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '医生说多喝水。你听了，还多睡了两小时。意志 +2。'; } },
    { t: '奶茶续命，去冰三分糖', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return ' scientific 快乐水。意志 +3。'; } }] },
  { t: '前世的路口', s: '你特意绕到前世死去的那条街。空的，安静，音响还在放促销广告。', c: [
    { t: '在原地站十分钟', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '你把前世那七十二小时想了一遍。有些东西想明白了，才跑得快。意志 +3。'; } },
    { t: '拍张照片设成锁屏', go: function () { var k = randomKey(); S.stats[k] += 2; return '从此每次解锁手机都是一次提醒。' + CLASSES[k].name + ' +2。'; } },
    { t: '快步离开，别回头', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '有些地方不适合多待。意志 +1。'; } }] },
  { t: '捡到五十块', s: '路边一张 50 元，风吹得它贴在你鞋上。', c: [
    { t: '请自己吃顿好的', go: function () { S.hp = Math.min(S.hmax, S.hp + 5); return '双拼饭加例汤加鸡腿。人对自己的好，都是意志。意志 +5。'; } },
    { t: '买本一直想看的书', go: function () { var k = randomKey(); S.stats[k] += 2; return '二手书五折，正好。' + CLASSES[k].name + ' +2。'; } },
    { t: '放回原地，不是你的', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '你心安理得地走了，走得特别直。意志 +2。'; } }] },
  { t: '朋友圈的远方', s: '高中同学在三亚潜水、在雪山脚下打卡。你盯着天花板看了十分钟。', c: [
    { t: '点个赞，继续刷', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '刷着刷着就麻了。意志 +2。'; } },
    { t: '关手机，拉窗帘', go: function () { var k = randomKey(); S.stats[k] += 2; return '世界与你无关的两小时。' + CLASSES[k].name + ' +2。'; } },
    { t: '把酸变成燃料', go: function () { S.hp = Math.max(1, S.hp - 2); var k = randomKey(); S.stats[k] += 2; return '「他们晒的是假期，我攒的是底牌。」' + CLASSES[k].name + ' +2，意志 -2。'; } }] },
  { t: '收费墙', s: '教程看到最关键一步：解锁完整版，仅需 299 元。', c: [
    { t: '氪！知识值得付费', go: function () { var k = randomKey(); S.stats[k] += 3; return '确实有用，钱花在了刀刃上。' + CLASSES[k].name + ' +3。'; } },
    { t: '自己东拼西凑', go: function () { S.hp = Math.max(1, S.hp - 2); S.stats.tech += 2; return '耗了一整天，但拼出来的理解格外扎实。底层根骨 +2，意志 -2。'; } },
    { t: '跳过这段，后面总有免费版', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return ' Internet 会记住一切，三天后你真找到了免费讲得更好的。意志 +1。'; } }] },
  { t: '通关的梦', s: '你梦见自己做出了一个游戏，很多人在玩，你在梦里笑出了声。', c: [
    { t: '醒来把它记下来', go: function () { S.stats.design += 2; return '梦里那个玩法真的有点东西。策划脑 +2。'; } },
    { t: '再睡会儿，把梦做完', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); return '梦的结局是有人催你交房租。但你休息够了。意志 +4。'; } },
    { t: '醒了直接开工', go: function () { S.hp = Math.max(1, S.hp - 2); var k = randomKey(); S.stats[k] += 2; return '趁着梦的热乎劲干了一早上。' + CLASSES[k].name + ' +2，意志 -2。'; } }] },
  { t: '家里的电话', s: '「国庆回来吗？给你做了排骨。」', c: [
    { t: '「回不去，学校有事。」', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '挂了电话鼻子酸了一下，然后把它变成了专注。意志 +3。'; } },
    { t: '说实话：在学做游戏', go: function () { var k = randomKey(); S.stats[k] += 2; return '那头沉默两秒：「那……饭给你寄过来？」意外被支持了。' + CLASSES[k].name + ' +2。'; } },
    { t: '干脆聊了四十分钟', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); return '从排骨聊到表弟成绩再聊回来。挂掉电话整个人是满的。意志 +4。'; } }] },
  { t: '40G 的更新包', s: '你期待很久的游戏今晚更新，进度条慢得像重生前的日子。', c: [
    { t: '等下载的时候干点别的', go: function () { var k = randomKey(); S.stats[k] += 2; return '进度条 40%，你的笔记 20 页。' + CLASSES[k].name + ' +2。'; } },
    { t: '下完先玩为敬', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '玩的时候你在拆它的引导设计——玩都玩得很有职业素养。意志 +3。'; } },
    { t: '不管了，睡觉，明早再说', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '明早更新好了，游戏和你都是新的。意志 +3。'; } }] },
  { t: '校园采访', s: '校媒扛着相机拦住你：「同学，假期都在做什么？」', c: [
    { t: '接受采访', go: function () { S.stats.media += 3; return '你讲了三分钟自己在做的事，视频在校内小范围刷屏。声量 +3。'; } },
    { t: '摆手跑路', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '社恐保平安。意志 +2。'; } },
    { t: '接受采访，但全程安利你的社团朋友', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); S.stats.media += 1; return '视频剪出来人人有镜头，你落了个好名声。声量 +1，意志 +2。'; } }] },
  { t: '一块旧键盘', s: '楼下垃圾桶旁边躺着一块旧机械键盘，只坏了一个键。', c: [
    { t: '捡走，修好它', go: function () { S.stats.prog += 2; return '换轴二十分钟，敲字的手感回来了。代码力 +2。'; } },
    { t: '爱惜形象，不捡', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '你大方地走过去了。然后想了一晚上那块键盘。意志 +1。'; } }] },
  { t: '新闻推送', s: '「黄金周出行人数创历史新高」——人多。降临那天，怪物也会多。', c: [
    { t: '关掉推送，别自己吓自己', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '焦虑没有用，过好今天才有用。意志 +1。'; } },
    { t: '盯着这行字想了很久', go: function () { S.stats.design += 2; return '人口密度、地形、撤离路线——你已经在脑内做降临日的关卡设计。策划脑 +2。'; } },
    { t: '转发给朋友：「你说会来多少？」', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '朋友：「你最近总发这些怪东西。」你们聊到十二点。意志 +2。'; } }] },
  { t: '速成班广告', s: '群里有人发「游戏开发 21 天速成班，原价 4999 现价 99」。', c: [
    { t: '点进去研究它的话术', go: function () { S.stats.design += 1; S.stats.media += 1; return '看完销售页你写了一条拆解：它把「焦虑→希望→付费」做成了漏斗。策划脑 +1，声量 +1。'; } },
    { t: '举报，然后该干嘛干嘛', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '世界上没有速成，只有今天多写的三行代码。意志 +2。'; } },
    { t: '笑一笑，划走', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '生活需要一点看猴戏的乐趣。意志 +1。'; } }] },
  { t: '难得的好太阳', s: '秋天的太阳晒在宿舍阳台，被子、猫、你，都适合出去。', c: [
    { t: '搬小桌板出去待着', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); var k = randomKey(); S.stats[k] += 1; return '阳光下的效率意外地高，猫在你脚边睡了一下午。意志 +4，' + CLASSES[k].name + ' +1。'; } },
    { t: '拉上窗帘，与世隔绝', go: function () { var k = randomKey(); S.stats[k] += 2; return '房间越暗，屏幕越亮。' + CLASSES[k].name + ' +2。'; } },
    { t: '纯散步，什么都不带', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '绕 campus 三圈，脑子清空了一圈半。意志 +3。'; } }] },
  { t: '室友的文学雷达', s: '室友瞟到你手机备忘录：「重生是什么感觉？」——他以为你在写小说。', c: [
    { t: '顺势聊了两个小时', go: function () { S.stats.media += 2; return '你把「如果游戏降临」讲成了一段设定，室友听得后背发凉。声量 +2。'; } },
    { t: '「天机不可泄露。」', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '秘密让你感到安全。意志 +2。'; } },
    { t: '拉着室友一起写设定', go: function () { S.stats.design += 2; return '两个人越写越上头，室友贡献的反派设定意外地好。策划脑 +2。'; } }] },
  { t: '便利店的关东煮', s: '深夜十一点半，便利店玻璃上全是雾气，关东煮在锅里咕嘟。', c: [
    { t: '吃！加两个鱼蛋', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); return '热汤下肚的瞬间，你觉得七天什么的也不是不能打。意志 +4。'; } },
    { t: '买杯咖啡就走', go: function () { S.hp = Math.max(1, S.hp - 1); var k = randomKey(); S.stats[k] += 2; return '咖啡因到位，回去又干了三小时。' + CLASSES[k].name + ' +2，意志 -1（咖啡因的债）。'; } },
    { t: '什么都不买，就走走', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '夜风、路灯、空无一人的街。意志 +2。'; } }] },
  { t: '闹钟没响', s: '睁眼已经十点半，阳光晒在键盘上。假期的早晨没有人叫你。', c: [
    { t: '回笼觉，天大地大睡觉最大', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '人生难得，回笼觉更难得。意志 +3。'; } },
    { t: '弹射起步，追赶进度', go: function () { S.hp = Math.max(1, S.hp - 2); var k = randomKey(); S.stats[k] += 2; return '半小时完成洗漱早餐和计划。' + CLASSES[k].name + ' +2，意志 -2。'; } },
    { t: '躺着刷会儿手机再起', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '一刷一小时。起都起了，就不骂你了。意志 +1。'; } }] },
  { t: '前世的聊天记录', s: '翻到前世今天发的朋友圈：「七天假！开摆！」评论区一片「+1」。', c: [
    { t: '看着看着就哭了', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); return '哭完你更清醒了。上一次的摆，是这一次的债。意志 +4。'; } },
    { t: '编辑一条还没发的朋友圈', go: function () { S.stats.media += 2; return '你重新写了一条：「这个假期，做点以后不会后悔的事。」声量 +2。'; } },
    { t: '截图存进「别忘记」相册', go: function () { var k = randomKey(); S.stats[k] += 2; return '那个相册是你的燃料库。' + CLASSES[k].name + ' +2。'; } }] },
  { t: '神秘的路人', s: '自习室里一个人一直盯着你看，忽然起身在你桌上放了张纸条就走：「你也是……回来的？」', c: [
    { t: '追出去', go: function () { var k = randomKey(); S.stats[k] += 3; return '走廊空无一人，只有墙上的一行粉笔字：「第七天，小心版本号。」' + CLASSES[k].name + ' +3。'; } },
    { t: '翻纸条背面', go: function () { S.stats.design += 2; return '背面画着 BOSS 的攻击前摇示意图。有人替你踩过坑。策划脑 +2。'; } },
    { t: '当没看见，收好纸条', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '时机未到的东西，先收进口袋。意志 +2。'; } }] },
  { t: '图书馆的旧书', s: '书架最深处压着一本《游戏设计艺术》，借书卡上的名字停在七年前。', c: [
    { t: '借走，读它', go: function () { S.stats.design += 3; return '一读就停不下来。前世想不明白的问题，有人早就写成了书。策划脑 +3。'; } },
    { t: '拍下目录，改天再说', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '目录已经够你消化一晚。意志 +2。'; } },
    { t: '放回去，回来路上买了杯奶茶', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '书是好书，奶茶是好奶茶，今天先当好一个活人。意志 +3。'; } }] },
  { t: '交流群的三百人', s: '你被拉进一个游戏开发群，大佬们聊的东西你一半看不懂。', c: [
    { t: '潜水，疯狂记笔记', go: function () { var k = randomKey(); S.stats[k] += 2; return '看大佬吵架都能学到东西。' + CLASSES[k].name + ' +2。'; } },
    { t: '冒泡提问', go: function () { S.hp = Math.max(1, S.hp - 2); var k = randomKey(); S.stats[k] += 3; return '有人嘲讽你问题基础，但也有人写了三百字认真回答。' + CLASSES[k].name + ' +3，意志 -2。'; } },
    { t: '退群，眼不见心不烦', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '群里一天几百条，退了之后世界安静了。意志 +2。'; } }] },
  { t: '广场上的猫', s: '一只三花猫蹲在广场中央，盯着你走过的方向，目光像认识你。', c: [
    { t: '蹲下来对视', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '它冲你眨了下眼。你也眨了。两个穿越者达成了某种默契。意志 +3。'; } },
    { t: '分它一半火腿肠', go: function () { var k = randomKey(); S.stats[k] += 3; return '它吃完在前面走，你鬼使神差跟着，走到了一个从没去过的自习角。' + CLASSES[k].name + ' +3。'; } },
    { t: '拍下来发帖：「校园猫の凝视」', go: function () { S.stats.media += 2; return '帖子火了，评论区都在问后续。声量 +2。'; } }] },
  { t: '耳机一边不响了', s: '左耳没声音了。你拍了拍，它时好时坏。', c: [
    { t: '再拍两下，好了', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '玄学维修成功。意志 +1。'; } },
    { t: '单声道凑合用', go: function () { return '世界只剩左半边，但歌还是那首歌。'; } },
    { t: '记到购物清单最顶上', go: function () { return '理性人。清单 +1。'; } }] },
  { t: '楼上深夜的歌声', s: '楼上有人唱歌，跑调跑得很有勇气。', c: [
    { t: '听完全程', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '听着听着居然有点感动。意志 +2。'; } },
    { t: '录下来发群里', go: function () { return '群里笑了十分钟。快乐是会传染的。'; } },
    { t: '戴上耳机隔绝世界', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '你的世界只有你和正在做的事。意志 +1。'; } }] },
  { t: '该晒被子了', s: '抱着被子站在阳台，阳光正好。', c: [
    { t: '晒！拍两下再抱回来', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '晚上钻被窝的时候有太阳的味道。意志 +3。'; } },
    { t: '算了，明天再晒', go: function () { return '明天的你会有明天的太阳。'; } }] },
  { t: '半夜的大更新', s: '游戏弹出更新：12G。你的网速：感人。', c: [
    { t: '挂着下载，直接睡', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '明早起来它就好了，像圣诞礼物。意志 +2。'; } },
    { t: '盯着进度条等它', go: function () { S.hp = Math.max(1, S.hp - 1); return '你盯着它爬了一小时，像在看着自己的耐心死亡。意志 -1。'; } }] },
  { t: '奶茶店买一送一', s: '楼下奶茶店买一送一，队排到了马路牙子。', c: [
    { t: '排！带一杯', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '三十分钟换来一杯三分糖。值。意志 +2。'; } },
    { t: '排！第二杯冻起来', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '今天的快乐和明天的快乐一起到手。意志 +3。'; } },
    { t: '看看队伍长度，撤退', go: function () { return '你计算了一下时间成本，理性地走了。'; } }] },
  { t: '数据线失踪', s: '充电数据线不见了。它昨天还在的。', c: [
    { t: '翻箱倒柜找它', go: function () { S.hp = Math.max(1, S.hp - 1); var k = randomKey(); S.stats[k] += 1; return '在枕头套里找到了它（？）。顺便整理了床。意志 -1，' + CLASSES[k].name + ' +1。'; } },
    { t: '借室友的', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '友情的力量，充电速度 +100%。意志 +1。'; } },
    { t: '用坏的那根凑合', go: function () { return '接触不良的线像极了人生，但你习惯了。'; } }] },
  { t: '好久没动了', s: '你忽然意识到，这几天最远的路程是床到饭堂。', c: [
    { t: '去操场跑两圈', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); return '跑完的第二天腿会酸，但当晚睡得特别香。意志 +3。'; } },
    { t: '出去走一圈就好', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '散步是跑步的礼貌版本。意志 +1。'; } },
    { t: '明天，明天一定', go: function () { return '你把这句话加进了和「明天开始早睡」同一个收藏夹。'; } }] },
  { t: '敲门的陌生人', s: '咚咚咚。「同学，了解一下……」', c: [
    { t: '听他把话说完', go: function () { return '是卖考研网课的。你礼貌道别，门关上的瞬间长舒一口气。'; } },
    { t: '委婉拒绝', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '「不用了谢谢——」一气呵成。意志 +1。'; } },
    { t: '不出声，装不在', go: function () { return '你无声地趴下。门外的人等了十秒走了。'; } }] },
  { t: '年度报告', s: 'APP 弹出你的年度报告：你今年最晚的一次睡是早上六点。', c: [
    { t: '看完，还挺准', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '数据不会说谎，但它可以委婉一点。意志 +1。'; } },
    { t: '截图发群里', go: function () { return '大家互相展示了彼此的堕落程度。'; } },
    { t: '关掉，不想面对', go: function () { return '有些数据，眼不见为净。'; } }] },
  { t: '半夜饿了', s: '十一点半，胃发出明确抗议。', c: [
    { t: '泡面，加蛋', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '深夜的泡面是这世上最诚实的食物。意志 +2。'; } },
    { t: '睡觉，睡着了就不饿', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '你用睡眠欺骗了胃。暂时。意志 +1。'; } },
    { t: '扛到天亮', go: function () { S.hp = Math.max(1, S.hp - 1); return '你赢了饿，输了睡眠。意志 -1。'; } }] },
  { t: '降温预警', s: '天气预报：明天断崖式降温 10 度。', c: [
    { t: '翻出厚衣服放床头', go: function () { return '未雨绸缪的人，明天早上会感谢今晚的自己。'; } },
    { t: '无所谓，风华正茂', go: function () { S.hp = Math.max(1, S.hp - 1); return '年轻人的体温是拿来挥霍的。意志 -1。'; } }] },
  { t: '会员到期', s: '视频网站提示：会员已于今日到期。广告，来了。', c: [
    { t: '续一个月', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '十五秒的广告时间省下来，够你多看两集。意志 +2。'; } },
    { t: '忍着看广告', go: function () { S.hp = Math.max(1, S.hp - 1); return '你背下来了广告的全部台词。意志 -1。'; } },
    { t: '换一个白嫖平台', go: function () { return '你有六个视频网站会员，其中四个是蹭的。这是技能。'; } }] },
  { t: '编译通过', s: '下午四点，进度条走完：0 Error, 0 Warning。你盯着那行绿字看了很久。', c: [
    { t: '截图，设成手机壁纸', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); S.stats.prog += 1; return '从今天起你的手机壁纸是一行编译日志。代码力 +1，意志 +3。'; } },
    { t: '冷静，接着写下一个功能', go: function () { S.stats.prog += 2; return '狂喜只持续了十秒，你已经打开了下一个文件。代码力 +2。'; } },
    { t: '出去绕操场走一圈庆祝', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); return '走完一圈你还在笑。意志 +4。'; } }] },
  { t: '被批得体无完肤', s: '你把策划案发给一个业内前辈求点评。十分钟后，回来的是满屏批注。', c: [
    { t: '一条条对着改', go: function () { S.stats.design += 3; S.hp = Math.max(1, S.hp - 2); return '改到深夜。第三稿比第一稿好了一个版本号。策划脑 +3，意志 -2。'; } },
    { t: '先放两天再看', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '两天后重读，你发现批注说的全对。意志 +2。'; } },
    { t: '不服，逐条反驳', go: function () { S.stats.design += 1; S.stats.media += 1; return '反驳到第七条你卡住了——那一条他是对的。敢于辩护是好事，输得起更好。策划脑 +1，声量 +1。'; } }] },
  { t: '发光的方块', s: '那个方块，发光了。是你写的 Shader 让它发光的。它只是一个方块，但它在发光。', c: [
    { t: '立刻截图发给三个朋友', go: function () { S.stats.ta += 1; S.stats.media += 2; return '有人回「就这？」，有人回「卧槽」。你决定以后只给后者看。声量 +2，渲染眼 +1。'; } },
    { t: '什么都不干，再看五分钟', go: function () { S.stats.ta += 2; return '第五分钟你忽然理解了那行代码为什么有效。渲染眼 +2。'; } },
    { t: '调亮一点，再调暗一点', go: function () { S.stats.ta += 1; S.hp = Math.max(1, S.hp - 1); return '调参一小时，眼睛发酸。渲染眼 +1，意志 -1。'; } }] },
  { t: '凌晨三点的画', s: '画完最后一笔，你把笔放下，手在抖。画得不完美，但它完整。', c: [
    { t: '发出去', go: function () { S.stats.art += 2; S.stats.media += 1; return '发出作品需要另一种勇气。美术手 +2，声量 +1。'; } },
    { t: '设成自己的锁屏', go: function () { S.stats.art += 1; S.hp = Math.min(S.hmax, S.hp + 2); return '每次解锁都提醒你：你能创造东西。美术手 +1，意志 +2。'; } },
    { t: '收起来，画下一张', go: function () { S.stats.art += 2; return '真正的画手从不留恋上一张。美术手 +2。'; } }] },
  { t: '23 个播放', s: '你的第一条开发日志视频：播放量 23。其中大概 5 次是你自己点的。', c: [
    { t: '分析为什么只有 23', go: function () { S.stats.media += 3; return '封面、标题、前五秒——你拆了一遍，列出了下一条的改进清单。声量 +3。'; } },
    { t: '「23 个也是观众」继续更', go: function () { S.stats.media += 2; S.hp = Math.min(S.hmax, S.hp + 1); return '更新的意义在更新本身。声量 +2，意志 +1。'; } },
    { t: '设为私密，当我没发过', go: function () { S.hp = Math.max(1, S.hp - 2); return '藏起来的视频会在硬盘里等你回来。意志 -2。'; } }] },
  { t: '48 小时 Game Jam', s: '一个线上 Game Jam 开始报名：48 小时，从零做一个游戏，主题当场公布。', c: [
    { t: '报名！单人出战', go: function () { S.hp = Math.max(1, S.hp - 3); S.stats.design += 2; S.stats.prog += 2; return '48 小时后你交出了一个能跑的东西——丑，但完整。策划脑 +2，代码力 +2，意志 -3。'; } },
    { t: '拉着室友组队', go: function () { S.hp = Math.max(1, S.hp - 2); S.stats.design += 1; S.stats.media += 2; return '你负责策划和宣传，室友被迫学了剪辑。合作是第一课。策划脑 +1，声量 +2，意志 -2。'; } },
    { t: '这次算了，先攒实力', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '你围观了全程的直播，做了三页笔记。有时候看别人打仗也是练兵。意志 +2。'; } }] },
  { t: '组队与鸽子', s: '网上认识的两个人说好一起做游戏，约好今晚开第一语音会。', c: [
    { t: '准时上线等他们', go: function () { S.stats.prog += 2; return '他们没来。你把等待的时间写了一个小工具——独立开发的第一个技能：不等任何人。代码力 +2。'; } },
    { t: '发消息改期', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '改期两次后项目自然死亡。但你学会了两件事：招人看行动，别看嘴。意志 +2。'; } }] },
  { t: 'Code Review', s: '你把代码发到社区求 review。回来的第一条：「变量命名在糊弄谁？」', c: [
    { t: '全盘接受，重命名一切', go: function () { S.stats.prog += 2; return '改完之后连你自己都读得懂自己的代码了。奇迹。代码力 +2。'; } },
    { t: '只接受一半，另一半给出理由', go: function () { S.stats.prog += 1; S.stats.design += 1; return '被指出问题的改了，有设计考量的你写了注释捍卫。代码力 +1，策划脑 +1。'; } },
    { t: '「能跑就行」', go: function () { S.hp = Math.max(1, S.hp - 2); return '能跑。直到下次你打开它的时候。意志 -2。'; } }] },
  { t: ' Dokument 与 DNS', s: '你只是想查一个报错，结果顺着文档读到了 DNS 是怎么工作的。三个小时过去了。', c: [
    { t: '顺势读完，写笔记', go: function () { S.stats.tech += 3; return '从报错到原理，一条完整的链路被你打通了。底层根骨 +3。'; } },
    { t: '只看报错那一页', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '目标导向的学习，效率优先。意志 +1。'; } }] },
  { t: '想放弃的那天', s: '傍晚，你坐在电脑前，忽然非常非常想放弃。不是累，是一种说不清的空。', c: [
    { t: '允许自己空十分钟', go: function () { S.hp = Math.min(S.hmax, S.hp + 4); return '十分钟后，那种空过去了。它经常这样：来了，然后走了。意志 +4。'; } },
    { t: '翻出前世的记忆', go: function () { S.hp = Math.min(S.hmax, S.hp + 3); S.stats.design += 1; return '你想起自己是怎么死的。比起那个，眼下的空算什么。意志 +3，策划脑 +1。'; } },
    { t: '去吃顿好的', go: function () { S.hp = Math.min(S.hmax, S.hp + 5); return '没有人能饿着肚子拯救世界。意志 +5。'; } }] },
  { t: '盗版课的诱惑', s: '有人私聊你：「全套付费教程，原价三千，给你 50。」', c: [
    { t: '拒绝，并拉黑', go: function () { S.hp = Math.min(S.hmax, S.hp + 2); return '你保护了创作者，也保护了自己不用看画质 240p 的课程。意志 +2。'; } },
    { t: '买了，把大纲抄下来自己找免费资源学', go: function () { S.stats.tech += 1; S.stats.media += 1; return '你花 50 块买了一份「学习路线图」，然后用白嫖的资源走完了它。底层根骨 +1，声量 +1。'; } }] },
  { t: '校招摊位前', s: '路过大厂的校招摊位，HR 姐姐冲你微笑：「同学，了解游戏策划吗？」', c: [
    { t: '聊十分钟，递上你这几天写的东西', go: function () { S.stats.design += 2; S.stats.media += 1; return 'HR 看完你便签纸上的系统设计，给了你一个内推码。策划脑 +2，声量 +1。'; } },
    { t: '「我还没准备好。」', go: function () { S.hp = Math.min(S.hmax, S.hp + 1); return '诚实的回答。但把「还没准备好」记下来——它就是你的练习清单。意志 +1。'; } }] }
];
var SAVE_KEY = 'rebirth_save_v1', DEX_KEY = 'rebirth_endings_v1';
/* 时间轴自动事件：不用选，自动结算。h=时刻 s=内容 hp/rand=效果 */
var AUTO_EVENTS = [
  { h: '07:30', s: '食堂的豆浆今天是甜的。有人抱怨，你觉得还行。', hp: 1 },
  { h: '07:50', s: '宿舍楼下有人晨跑，你挥了挥手，对方也挥了挥手。' },
  { h: '08:30', s: '你把今天的计划写在便签上，贴在屏幕边框。' },
  { h: '09:15', s: '手机推送：一款十年前的老游戏宣布重制。评论区吵成一团。' },
  { h: '09:40', s: '你把昨天的笔记翻出来重读了一遍，思路清晰了一点。', rand: 1 },
  { h: '10:20', s: '快递到了——是提前买好的参考书，塑封都懒得撕。', rand: 1 },
  { h: '10:45', s: '楼下的广场舞音乐准时响起。你戴上耳机，把它当成了 BGM。' },
  { h: '11:10', s: '阳台的花开了。你没种过它，但它开了。' },
  { h: '11:40', s: '饭堂出了新菜。你排到了最后一勺。', hp: 2 },
  { h: '12:30', s: '趴桌午睡二十分钟，梦里有代码在跑。', hp: 2 },
  { h: '13:00', s: '醒来时手边的水杯倒了。运气好，没洒在键盘上。' },
  { h: '14:00', s: '你盯着一个效果看了很久，忽然反应过来它是怎么实现的。', rand: 2 },
  { h: '14:40', s: '前世的你这个时候在打排位。这次不亏。', hp: 1 },
  { h: '15:00', s: '表弟发消息问你在干嘛，你回了一张屏幕截图。他回：「哦。」' },
  { h: '15:30', s: '你顺手帮同学修了个小问题，被夸「专业」。', hp: 2 },
  { h: '16:00', s: '灵感突袭：你赶紧记在备忘录里，字迹潦草得只有你能看懂。', rand: 2 },
  { h: '16:30', s: '刷到一条视频，正好演示了你昨天想不通的知识点。', rand: 2 },
  { h: '17:00', s: '手滑删了一个文件。冷汗三十秒，回收站里捞回来了。', hp: -1 },
  { h: '17:20', s: '夕阳照进房间，你发呆了五分钟。不算浪费。' },
  { h: '17:55', s: '食堂阿姨今天认出了你：「又来啦。」', hp: 2 },
  { h: '18:30', s: '新闻推送：黄金周返程票开售即空。你多看了两眼。', hp: -1 },
  { h: '19:00', s: '楼下有人放烟花，国庆的气氛推到了最浓。' },
  { h: '19:30', s: '蚊子进了帐子。半夜它还会来第二趟。', hp: -1 },
  { h: '20:00', s: '耳机随机到一首很多年前的歌。你跟着哼完了副歌。', hp: 1 },
  { h: '20:30', s: '室友开黑语音很吵。你把窗户关上，世界清净了一半。' },
  { h: '21:00', s: '你重新排列了桌上的东西——整理桌面就是整理脑子。', rand: 1 },
  { h: '21:30', s: '嗓子有点痒。你多喝了热水。', hp: -1 },
  { h: '22:00', s: '你把今天的成果截图发了出去，收到了三个赞。', hp: 2 },
  { h: '22:20', s: '墙上那张「国庆快乐」的海报边角翘起来了。你伸手按了按。' },
  { h: '22:40', s: '楼道的声控灯为你亮了一路。今晚运气不错。', hp: 1 },
  { h: '23:00', s: '隔壁楼传来吉他声，有人在小声唱歌。' },
  { h: '23:20', s: '你看到一条评论：「做游戏的人，都是给世界做梦的人。」', rand: 1 },
  { h: '23:40', s: '电脑风扇的声音今晚格外像引擎轰鸣。' },
  { h: '23:55', s: '睡前你检查了一遍明天的计划。踏实。', hp: 1 },
  { h: '12:10', s: '奶茶洒了。擦得快，键盘毫发无损。虚惊一场。', hp: -1 },
  { h: '14:10', s: '一场雨毫无预兆地砸下来。你庆幸自己带了伞。' },
  { h: '08:00', s: '楼下早餐摊的煎饼果子多加了个蛋，今天运气从早晨开始。', hp: 1 },
  { h: '10:00', s: '阳台晾的衣服在风里晃，晃得很有节奏。' },
  { h: '10:30', s: '楼上装修的电钻响了十分钟，忽然停了。世界安静得可疑。', hp: -1 },
  { h: '11:00', s: '你研究了二十分钟怎么让电脑开机更快。有进步。', rand: 1 },
  { h: '11:20', s: '校群有人出二手显卡，评论区已经盖到一百多层。' },
  { h: '13:10', s: '午后的风把窗帘吹起来，又放下。', },
  { h: '13:40', s: '你打了一个很长的哈欠。', hp: 1 },
  { h: '14:20', s: '楼下有小孩在放假期的风筝，线放得很高。' },
  { h: '15:10', s: '你把一首 BGM 循环了半小时，越听越对味。', rand: 1 },
  { h: '15:50', s: '笔记本提示电量不足，你慢悠悠摸出充电器。' },
  { h: '16:10', s: '外卖小哥在楼下喊错了三个名字。第三个是你的。', hp: 1 },
  { h: '16:40', s: '你把桌面图标按颜色排好了。强迫症得到抚慰。', rand: 1 },
  { h: '17:10', s: '晚霞是橙紫色的。你拍了一张，没发出去，就自己留着。' },
  { h: '17:40', s: '宿舍楼道一盏灯坏了，一闪一闪的像恐怖片开场。', hp: -1 },
  { h: '18:00', s: '你认真思考了十分钟晚饭吃什么。这是今天最难的决定。' },
  { h: '18:20', s: '有孩子在楼下背古诗，背到第七句卡住了。你在心里替他接上了。', hp: 1 },
  { h: '19:10', s: '你把浏览器里三十个标签页关掉了二十八个。断舍离。', rand: 1 },
  { h: '20:10', s: '楼上椅子拖动的声音，一下，又一下。' },
  { h: '20:40', s: '你给未来的自己写了一句话，存在备忘录最顶上。', rand: 2 },
  { h: '21:20', s: '窗外有人拍夜景，快门声轻轻的，咔哒，咔哒。' },
  { h: '21:50', s: '你翻出上学期的教材，发现当时画的重点毫无意义。', hp: -1 },
  { h: '22:10', s: '楼下便利店的灯还亮着，像一座小灯塔。' },
  { h: '22:35', s: '你伸了个懒腰，肩膀咔哒一声。声音很爽。', hp: 1 },
  { h: '09:05', s: '你发现昨天的水杯忘在教室了。默哀三秒。', hp: -1 },
  { h: '09:12', s: '编译通过：0 Error, 0 Warning。你把那行绿字看了很久。', rand: 1 },
  { h: '10:05', s: '修掉一个两小时的 bug——原因是你手滑多打了一个等号。', rand: 1 },
  { h: '10:40', s: '你拆解了 вчера那个让你上头的游戏的引导流程，画了满满一页图。', rand: 2 },
  { h: '11:30', s: '你发现引擎更新了一个新功能，眼睛瞬间亮了。', rand: 1 },
  { h: '13:20', s: '你的第一张 UI 配色图成型了。不完美，但「顺眼」这件事很主观也很真实。', rand: 2 },
  { h: '15:20', s: 'Shader 第一次在真机上跑通。方块还是那个方块，但它会呼吸了。', rand: 2 },
  { h: '17:15', s: '你把今天的进度发到学习群，收到两个「牛」和一个「求教程」。', hp: 2 },
  { h: '18:40', s: '你给一个游戏的关键抉择画了张决策流程图。画完自己都震惊：原来这么复杂。', rand: 2 },
  { h: '19:50', s: '看大佬直播写代码一小时。看他删代码的果断程度，你明白了很多。', rand: 1 },
  { h: '22:30', s: '临睡前想到一个绝佳的关卡设计。你挣扎了三十秒，还是开了灯记下来。', rand: 2 }
];

/* ============ 状态 ============ */
var S = null;
function newState() {
  return { phase: 'title', day: 1, stats: { design: 0, prog: 0, ta: 0, art: 0, media: 0, tech: 0 },
    hp: 40, hmax: 40, trained: { design: 0, prog: 0, ta: 0, art: 0, media: 0, tech: 0 },
    buffs: [], idleDays: 0, kills: 0, speed: 1, runEvents: [], evPtr: 0, dayPlan: [], logPtr: 0, logEntries: [], pendingChoice: false, inBattle: false, dayDone: false, lastAction: null, streak: 0,
    stageSeen: { design: 0, prog: 0, ta: 0, art: 0, media: 0, tech: 0 }, specials: [], specialOffers: [], specialDays: [], spPtr: 0 };
}
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) {} }
function load() { try { var s = localStorage.getItem(SAVE_KEY); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function clearSave() { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
function getDex() { try { return JSON.parse(localStorage.getItem(DEX_KEY) || '[]'); } catch (e) { return []; } }
function markEnding(id) { try { var d = getDex(); if (d.indexOf(id) < 0) { d.push(id); localStorage.setItem(DEX_KEY, JSON.stringify(d)); } } catch (e) {} }
function topClass() {
  var best = 'design';
  for (var k in S.stats) if (S.stats[k] > S.stats[best]) best = k;
  return best;
}
function power() { var t = 0; for (var k in S.stats) t += S.stats[k]; return t; }
function rating() { var p = power(); return p >= 50 ? 'S · 开发者之魂' : p >= 40 ? 'A · 出师' : p >= 28 ? 'B · 入门' : 'C · 火种未熄'; }
function buff(id) { var n = 0; S.buffs.forEach(function (b) { if (b === id) n++; }); return n; }
function randomKey() { var ks = Object.keys(S.stats); return ks[Math.floor(Math.random() * ks.length)]; }
var BUFF_HUMAN = {
  dmg: ['弹药增粗', '你扔出去的东西更重更实在，每层伤害 +25%'],
  spd: ['射速提升', '你扔得更快了，每层攻速 +20%'],
  hp: ['意志上限', '更能扛打了：意志上限 +8'],
  crit: ['会心一击', '有概率打出双倍伤害，每层 +15%'],
  vamp: ['残光吸取', '打出去的伤害有一部分变成你的意志，每层 5%'],
  skill: ['技能强化', 'Build 技能砸得更疼，每层 +40%'],
  cdr: ['冷却缩减', 'Build 技能转得更快，冷却 -15%'],
  regen: ['意志之泉', '战斗中每秒自动回复 0.5 意志'],
  sup: ['火力压制', '怪物被你打得抬不起手：它的攻击间隔每层 +0.25 秒'],
  combo: ['连击惯性', '打得越久越疼：开战每过 5 秒，伤害 +8%（最多 +48%）'],
  shield: ['备用弹药箱', '每场战斗开始时多一层护盾，能替你挡 12 点伤害'],
  critdmg: ['会心重击', '暴击造成的伤害变成三倍'],
  adr: ['肾上腺素', '意志越低越凶：低于三成时伤害 +60%'],
  thorn: ['反击装甲', '怪物打你会被扎：每次被击中反弹 3 点伤害'],
  split: ['弹药分裂', '普攻有概率裂成两发，每层 +20% 概率'],
  burst: ['开场风暴', '每场战斗开头 5 秒攻速极快'],
  big: ['巨人化', '你变大了：伤害 +40%，出手稍慢'],
  healwin: ['战后喘息', '每场胜利后回复 15 点意志'],
  revive: ['不死鸟羽', '每场战斗挡住一次死：致命伤只把你打到 1 点意志'],
  lucky: ['幸运星', '战利品三选一变四选一']
};
function humanBuffs() {
  if (!S.buffs.length) return '还没有碎片——打赢今晚的遭遇战就会掉落，自动生效不用管。';
  var counts = {};
  S.buffs.forEach(function (b) { counts[b] = (counts[b] || 0) + 1; });
  var lines = [];
  for (var id in counts) { var r = BUFF_HUMAN[id]; lines.push('<b>' + r[0] + '</b>' + (counts[id] > 1 ? ' ×' + counts[id] : '') + '：' + r[1]); }
  return lines.join('<br>');
}
function wrap() { return document.getElementById('gameWrap'); }
function show(html) { wrap().innerHTML = html; window.scrollTo(0, 0); }

/* ============ 画面 ============ */
function hudHtml() {
  var c = topClass(), s = '';
  for (var k in S.stats) s += '<span class="rb-stat" style="background:' + CLASSES[k].color + '">' + CLASSES[k].name.split(' ')[0] + ' ' + S.stats[k] + '</span>';
  return '<div class="rb-panel"><div class="rb-hud"><span>第 ' + S.day + ' / 7 天</span><span>意志 <b>' + Math.ceil(S.hp) + '/' + S.hmax + '</b></span><span>战力 <b>' + power() + '</b></span><span>主修 <b>' + CLASSES[c].name + '</b></span><span>击杀 <b>' + S.kills + '</b></span></div>' + s + '</div>';
}
function screenTitle() {
  S = newState(); S.phase = 'title';
  var hasSave = !!load();
  var dex = getDex();
  var h = '<div class="rb-panel rb-endcard">';
  h += '<div class="t">重 生</div><div class="rb-tag" style="text-align:center">游戏降临前的七天 · SEVEN DAYS BEFORE THE DESCENT</div>';
  h += '<div class="d" style="margin-bottom:16px">2026 年 10 月 8 日凌晨，「大降临」——所有游戏里的怪物走进了现实。只有亲手<em>做过游戏</em>的人，才能看见它们的血条与弱点。<br><br>你是个只会玩游戏的学生。前世你躲了三天，死在一只怪物的碰撞箱下。<br><br>再睁眼：<b style="color:#edbe5c">9 月 30 日 23:47，国庆前夜。</b><span class="sys">【开发者系统已激活】距离大降临还有 7 天。<br>把你自己，练成一个游戏开发者。</span></div>';
  h += '<button class="rb-btn gold" style="text-align:center" onclick="startPrologue()">▶ 开始七天</button>';
  if (hasSave) h += '<button class="rb-btn" style="text-align:center" onclick="resume()">↻ 继续上次的进度（第 ' + load().day + ' 天）</button>';
  h += '<div style="margin-top:14px"><div class="rb-tag">结局图鉴 · ' + dex.length + ' / 14</div><div class="rb-dex">';
  for (var id in ENDINGS) h += '<div class="' + (dex.indexOf(id) >= 0 ? 'got' : '') + '">' + (dex.indexOf(id) >= 0 ? ENDINGS[id].got + ' · ' + ENDINGS[id].t : '？？？') + '</div>';
  h += '</div></div></div>';
  show(h);
}
function startPrologue() {
  S = newState();
  /* 每局随机 2 个特殊职业邀请，出现在第 3~5 天 */
  var sidx = [];
  for (var si = 0; si < SPECIALS.length; si++) sidx.push(si);
  for (var sj = sidx.length - 1; sj > 0; sj--) { var sr = Math.floor(Math.random() * (sj + 1)); var st2 = sidx[sj]; sidx[sj] = sidx[sr]; sidx[sr] = st2; }
  S.specialOffers = sidx.slice(0, 2).map(function (i) { return SPECIALS[i].id; });
  var days = [2, 3, 4];
  for (var dj = days.length - 1; dj > 0; dj--) { var dr = Math.floor(Math.random() * (dj + 1)); var dt = days[dj]; days[dj] = days[dr]; days[dr] = dt; }
  S.specialDays = days;
  var idx = [];
  for (var i = 0; i < EVENTS.length; i++) idx.push(i);
  for (var j = idx.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t2 = idx[j]; idx[j] = idx[r]; idx[r] = t2; }
  S.runEvents = idx.slice(0, Math.min(14, idx.length)); S.evPtr = 0;
  screenDay();
}
function resume() { var s = load(); if (s) { S = s; S.inBattle = false; screenDay(); } }
function screenDay() { startDayPlan(); }
function advanceDay() { startDayPlan(); }
function startDayPlan() {
  if (!S.dayPlan || !S.dayPlan.length) {
    var idx = [];
    for (var i = 0; i < AUTO_EVENTS.length; i++) idx.push(i);
    for (var j = idx.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = idx[j]; idx[j] = idx[r]; idx[r] = t; }
    var n = 6 + Math.floor(Math.random() * 3);
    var picked = idx.slice(0, n);
    /* 按时刻排序：一天从早读到深夜，顺序不能乱 */
    picked.sort(function (a, b) { var ta = AUTO_EVENTS[a].h, tb = AUTO_EVENTS[b].h; return ta > tb ? 1 : (ta < tb ? -1 : 0); });
    /* 剧情开场 → 上午事件 → 中午决定下午怎么过 → 下午/夜晚事件 → 随机抉择穿插 → 夜战 */
    var noon = picked.length;
    for (var i2 = 0; i2 < picked.length; i2++) if (AUTO_EVENTS[picked[i2]].h >= '12:00') { noon = i2; break; }
    var plan = [-5].concat(picked.slice(0, noon));
    plan.push(-7); /* 下午行动：自动发生，命运决定 */
    plan = plan.concat(picked.slice(noon));
    /* 特殊邀请：轮到它的那天，插入夜战之前 */
    while (S.spPtr < S.specialOffers.length && S.specialDays[S.spPtr] === S.day) { plan.push(-6); S.spPtr++; }
    var avail = S.runEvents.length - S.evPtr;
    var nChoice = Math.min(Math.floor(Math.random() * 3), avail);
    for (var c = 0; c < nChoice; c++) plan.splice(2 + Math.floor(Math.random() * (plan.length - 2)), 0, -1);
    plan.push(-3, -4);
    S.dayPlan = plan; S.logPtr = 0; save();
  }
  renderDayLog();
}
function applyFx(ev) {
  var parts = [];
  if (ev.hp) { S.hp = Math.max(1, Math.min(S.hmax, S.hp + ev.hp)); parts.push('意志' + (ev.hp > 0 ? '+' : '') + ev.hp); }
  if (ev.rand) { var k = randomKey(); addStat(k, ev.rand); parts.push(CLASSES[k].name.split(' ')[0] + '+' + ev.rand); }
  checkStageUps();
  return parts.join('，');
}
/* 流水账：常驻大框，所有条目累加保留；点击流水账任意位置 = 下一条（文字人生式） */
function renderDayLog() {
  var h = hudHtml() + '<div class="rb-panel" id="logPanel" style="cursor:pointer" onclick="logTap(event)"><div class="rb-tag">第 ' + S.day + ' 天 · 时间轴 <span style="color:#55665f">（点击任意处继续）</span></div>';
  h += '<div id="logBox" style="font-size:13.5px;line-height:2.1;color:#cfe0d4">' + (S.logEntries || []).join('') + '</div>';
  h += '<div id="rlogHint" style="margin-top:8px;font-family:var(--font-mono);font-size:12px;color:#55665f"></div>';
  h += '</div>';
  show(h);
  window.scrollTo(0, document.body.scrollHeight);
  updateLogHint();
}
function logTap(e) {
  if (e && e.target && e.target.closest && e.target.closest('button')) return; /* 按钮自己处理 */
  nextLog();
}
function pushLog(html) {
  S.logEntries = S.logEntries || [];
  S.logEntries.push(html);
  var box = document.getElementById('logBox');
  if (box) { box.insertAdjacentHTML('beforeend', html); window.scrollTo(0, document.body.scrollHeight); }
  save();
}
function rebuildLogBox() {
  var box = document.getElementById('logBox');
  if (box) { box.innerHTML = (S.logEntries || []).join(''); window.scrollTo(0, document.body.scrollHeight); }
}
function updateLogHint() {
  var hint = document.getElementById('rlogHint');
  if (!hint) return;
  if (S.inBattle) hint.innerHTML = '⚔ 战斗进行中（画面在下方）……';
  else if (S.pendingChoice) hint.innerHTML = '▲ 作出你的选择（点选项，点背景无效）';
  else if (S.dayDone) hint.innerHTML = '— 点击任意处睡下 → 第 ' + (S.day + 1) + ' 天 —';
  else if (S.logPtr >= S.dayPlan.length) hint.innerHTML = '— 点击任意处，夜幕降临 —';
  else hint.innerHTML = '· 点击任意处继续 ▸';
}
function nextLog() {
  if (S.pendingChoice) return; /* 选择没做完，点背景无效 */
  if (S.inBattle) return; /* 战斗进行中，时间轴暂停 */
  if (S.logPtr >= S.dayPlan.length) { finishDayLog(); return; }
  var item = S.dayPlan[S.logPtr];
  S.logPtr++;
  if (item === -5) {
    /* 晨间剧情：基础 + 根据玩家历史动态生成的叙事分支 */
    var st = DAY_STORY[S.day - 1];
    var ex = dayExtras(S.day);
    var ext = ex.length ? '<div style="margin-top:8px;color:#cfe0d4;line-height:2;border-top:1px dashed #3d5a4e;padding-top:8px">' + ex.join('<br>') + '</div>' : '';
    pushLog('<div style="margin:4px 0 10px"><div style="color:#edbe5c;font-weight:900;letter-spacing:2px">DAY ' + S.day + ' · ' + st[0] + '</div><div style="color:#e8e4d4;line-height:2">' + st[1] + '</div>' + ext + '</div>');
    updateLogHint();
    return;
  }
  if (item === -3) {
    /* 夜幕宣告：内嵌在时间轴里（数值为缩放后的实际战斗值） */
    var mon = battleMon();
    var lst = [];
    for (var k3 in SKILLS) {
      var st4 = statStage(k3);
      if (st4 >= 1) lst.push('<span style="color:' + CLASSES[k3].color + '">' + SKILLS[k3][st4 - 1].name + '</span>');
    }
    S.specials.forEach(function (id4) {
      var sp4 = SPECIALS.filter(function (x) { return x.id === id4; })[0];
      if (sp4) lst.push('<span style="color:#c4b5fd">' + sp4.skill.name + '（特殊）</span>');
    });
    if (!lst.length) lst.push('<span style="color:#f0b8ac">赤手空拳（一项技能都没觉醒——今晚凶多吉少）</span>');
    pushLog('<div style="margin:10px 0 4px;color:#f0b8ac;font-weight:900;letter-spacing:2px">—— 夜幕降临 ——</div>');
    pushLog('<div style="margin-bottom:8px"><span style="font-family:var(--font-mono);color:#6b8a7c">NIGHT</span>　' + mon.emoji + ' <b style="color:#f0b8ac">' + mon.name + '</b>' + mon.desc + '<br>耐久 <b>' + mon.hp + '</b> · 攻击 <b>' + mon.dmg + '/发</b>（你不用躲，扛着打）<br>今晚自动释放的技能：' + lst.join(' / ') + '<br><span style="color:#9fd3b8">' + humanBuffs() + '</span></div>');
    updateLogHint();
    return;
  }
  if (item === -6) {
    /* 特殊邀请：内嵌抉择 */
    var sp = SPECIALS.filter(function (x) { return x.id === S.specialOffers[S.spPtr]; })[0];
    S.spPtr++;
    var sh = '<div style="margin:10px 0;padding:12px 14px;background:rgba(139,92,246,.12);border:2px solid #8b5cf6;border-radius:10px">';
    sh += '<b style="color:#c4b5fd;font-size:16px">' + sp.emoji + ' 特殊邀请 · ' + sp.who + '</b><br><span style="color:#e8e4d4;line-height:2">' + sp.invite + '</span><br>';
    sh += '<button class="rb-btn" style="margin-top:8px;padding:8px 12px;border-color:#8b5cf6;color:#c4b5fd" onclick="acceptSpecial(event,\'' + sp.id + '\')">✦ 接受邀请（获得特殊技能 + 专属剧情）</button>';
    sh += '<button class="rb-btn" style="margin-top:6px;padding:8px 12px" onclick="declineSpecial(event,\'' + sp.id + '\')">✕ 婉拒</button></div>';
    S.pendingChoice = true;
    S.guardUntil = Date.now() + 1000;
    pushLog(sh);
    updateLogHint();
    return;
  }
  if (item === -4) {
    /* 战斗画面 = 流水账里的一条 */
    var bmon = S.day === 7 ? BOSS : MONSTERS[S.day - 1];
    pushLog('<div style="margin:8px 0"><div class="rb-tag" style="margin-bottom:6px">⚔ 遭遇战 · ' + bmon.name + '<span style="float:right"><button onclick="cycleSpeed(event)" id="spdBtn" style="cursor:pointer;background:rgba(0,0,0,.5);color:#9fd3b8;border:1px solid #3d6b52;border-radius:8px;padding:4px 10px;font-family:var(--font-mono);font-size:12px">速度 ×1</button></span></div><canvas id="battleCanvas" width="720" height="360" style="width:100%;display:block;background:radial-gradient(at 50% 20%, #1c2b33 0%, #0d141b 70%);border:1px solid var(--border-strong);border-radius:12px"></canvas><div class="rb-buffline" style="text-align:center;margin-top:4px">战斗全自动——打完会折叠成一行战报</div></div>');
    startBattle();
    return;
  }
  if (item === -7) {
    /* 下午行动：自动发生，命运决定 */
    if (S.afternoonAct === undefined || S.afternoonAct === null) S.afternoonAct = Math.floor(Math.random() * ACTIONS.length);
    var a = ACTIONS[S.afternoonAct];
    var fxTxt;
    if (a.k === 'idle') {
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
    checkStageUps();
    updateLogHint(); save();
    return;
  }
  if (item === -1) {
    /* 选择事件：内嵌在流水账里，必须点选项 */
    var ev = EVENTS[S.runEvents[S.evPtr]];
    var html = '<div style="margin:8px 0;padding:10px 13px;background:rgba(237,190,92,.07);border-left:3px solid #edbe5c;border-radius:6px">';
    html += '<b style="color:#edbe5c">▶ ' + ev.t + '</b><br><span style="color:#e8e4d4">' + ev.s + '</span><br>';
    ev.c.forEach(function (c2, i) {
      html += '<button class="rb-btn" style="margin-top:6px;padding:8px 12px" onclick="resolveEvent(event,' + i + ')">' + c2.t + '</button>';
    });
    html += '</div>';
    S.pendingChoice = true;
    S.guardUntil = Date.now() + 1000; /* 1 秒误触保护 */
    pushLog(html);
    updateLogHint();
    save();
    return;
  }
  var aev = AUTO_EVENTS[item];
  var fx = applyFx(aev);
  var cls = fx.indexOf('-') >= 0 ? '#f0b8ac' : '#7ed696';
  pushLog('<div style="margin-bottom:6px"><span style="font-family:var(--font-mono);color:#6b8a7c">' + aev.h + '</span>　' + aev.s + (fx ? ' <b style="color:' + cls + '">(' + fx + ')</b>' : '') + '</div>');
  updateLogHint();
}
function resolveEvent(e, i) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!S.pendingChoice || Date.now() < (S.guardUntil || 0)) return;
  S.pendingChoice = false;
  var ev = EVENTS[S.runEvents[S.evPtr]];
  var res = ev.c[i].go();
  S.evPtr++;
  checkStageUps();
  /* 收起：把抉择块折叠成「已选」状态，未选的选项不再显示 */
  var picked = '<div style="margin:8px 0;padding:10px 13px;background:rgba(237,190,92,.07);border-left:3px solid #edbe5c;border-radius:6px">';
  picked += '<b style="color:#edbe5c">▶ ' + ev.t + '</b><br><span style="color:#e8e4d4">' + ev.s + '</span><br>';
  picked += '<button class="rb-btn" disabled style="margin-top:6px;padding:8px 12px;border-color:#edbe5c;color:#edbe5c">✓ ' + ev.c[i].t + '</button></div>';
  S.logEntries[S.logEntries.length - 1] = picked;
  rebuildLogBox();
  pushLog('<div style="margin:4px 0 8px;padding:8px 12px;color:#f5e6bd;background:rgba(237,190,92,.05);border-radius:6px">' + res + '</div>');
  updateLogHint();
}
function finishDayLog() { if (S.dayDone) nextDay(); else startBattle(); }
function unlockedBuilds() {
  var opts = [];
  for (var k in CLASSES) {
    var n = S.trained[k] ? Math.min(3, S.trained[k]) : 0;
    for (var i = 0; i < n; i++) opts.push({ c: k, i: i });
  }
  return opts;
}
/* ---- 自动战斗引擎（canvas，嵌入时间轴下方） ---- */
/* 当前夜晚的怪物：血量/攻击随玩家战力成长缩放，避免越练越秒 */
function battleMon() {
  var m = S.day === 7 ? BOSS : MONSTERS[S.day - 1];
  var hpM = (1 + power() / 12) * (S.day === 7 ? 2.2 : 1);
  var dmM = (1 + power() / 150) * (S.day === 7 ? 1.0 : 1);
  return {
    name: m.name, emoji: m.emoji, desc: m.desc, dex: m.dex,
    hp: Math.round(m.hp * hpM),
    dmg: Math.max(1, Math.round(m.dmg * dmM))
  };
}
var B = null, RAF = null;
function startBattle() {
  if (S.inBattle) return;
  S.inBattle = true;
  var isBoss = S.day === 7;
  var mon = battleMon();
  var mc = topClass();
  var stat = S.stats[mc] || 0;
  var skills = unlockedBuilds();
  var keys = {};
  skills.forEach(function (o) { keys[o.c + o.i] = true; });
  B = {
    mon: mon, isBoss: isBoss,
    clsName: CLASSES[mc].name.split(' ')[0],
    mhp: mon.hp, mmax: mon.hp,
    php: S.hp, pmax: S.hmax,
    dmg: (3 + 0.55 * stat) * (1 + 0.25 * buff('dmg')),
    crit: 0.15 * buff('crit'),
    vamp: buff('vamp') > 0 ? 0.05 + 0.05 * buff('vamp') : 0,
    regen: 0.5 * buff('regen'),
    skillDmg: 1 + 0.4 * buff('skill'),
    cdMul: Math.max(0.3, 1 - 0.15 * buff('cdr')),
    ammo: CLASSES[mc].ammo,
    hasProg0: statStage('prog') >= 1, hasDesign0: statStage('design') >= 1,
    mVuln: statStage('media') >= 2 ? 1.25 : 1,
    actives: (function () {
      var arr = [];
      for (var k2 in SKILLS) {
        var st3 = statStage(k2);
        if (st3 >= 1 && SKILL_ACTIVES[k2 + st3]) {
          var def = SKILL_ACTIVES[k2 + st3];
          /* 开场错开：首个技能在前半段冷却内随机时刻释放，避免开局齐射秒杀 */
          arr.push({ key: k2 + st3, def: def, last: -(def.cd * (0.15 + Math.random() * 0.85)) });
        }
      }
      S.specials.forEach(function (id3) {
        var sp3 = SPECIALS.filter(function (x) { return x.id === id3; })[0];
        if (sp3) arr.push({ key: 'sp-' + id3, def: sp3.skill.act, last: -(sp3.skill.act.cd * (0.15 + Math.random() * 0.85)) });
      });
      return arr;
    })(),
    t: 0, lastThrow: 0, mLast: 0,
    mInterval: 1.4 + 0.25 * buff('sup'), shield: 12 * buff('shield'),
    critMul: 2 + buff('critdmg'), adr: buff('adr') > 0, thorn: 3 * buff('thorn'),
    split: 0.2 * buff('split'), burst: buff('burst') > 0, big: buff('big') > 0,
    healwin: buff('healwin') > 0, revive: buff('revive'), throwCount: 0,
    shots: [], mshots: [], floats: [], over: false, speed: 1, stun: 0, hyper: 0,
    entryIdx: S.logEntries.length - 1 /* 战斗所在的流水账条目，打完折叠 */
  };
  B.cv = document.getElementById('battleCanvas');
  B.ctx = B.cv.getContext('2d');
  B.last = performance.now();
  RAF = requestAnimationFrame(loop);
}
function cycleSpeed(e) { if (e && e.stopPropagation) e.stopPropagation(); B.speed = B.speed === 1 ? 2 : B.speed === 2 ? 4 : 1; document.getElementById('spdBtn').textContent = '速度 ×' + B.speed; }
/* 把战斗那条折叠成一行战报 */
function collapseBattle(resultHtml) {
  var summary = '<div style="margin:8px 0;padding:9px 13px;background:rgba(12,18,24,.7);border:1px solid var(--border-strong);border-radius:8px"><b>⚔ 遭遇战 · ' + B.mon.name + '</b> —— ' + resultHtml + '<span style="color:#55665f">（用时 ' + B.t.toFixed(1) + ' 秒）</span></div>';
  S.logEntries[B.entryIdx] = summary;
  rebuildLogBox();
}
function cycleSpeed() { B.speed = B.speed === 1 ? 2 : B.speed === 2 ? 4 : 1; document.getElementById('spdBtn').textContent = '速度 ×' + B.speed; }
function floatText(x, y, txt, color) { B.floats.push({ x: x, y: y, txt: txt, c: color, t: 0 }); }
function loop(now) {
  if (!B || B.over) return;
  RAF = requestAnimationFrame(loop); /* 先续帧：即使本帧抛异常，战斗也不会停摆 */
  var dt = Math.min(0.05, (now - B.last) / 1000) * B.speed;
  B.last = now; B.t += dt;
  try {
  var W = B.cv.width, H = B.cv.height;
  var px = W / 2, py = H - 70, mx = W / 2, my = 80;
  /* 玩家扔弹（基础攻击） */
  var iv = 0.8 / (1 + 0.2 * buff('spd'));
  if (B.hasProg0) iv /= 1.4;
  if (B.hyper > 0) iv *= 0.5;
  if (B.big) iv *= 1.1;
  if (B.burst && B.t < 5) iv *= 0.35;
  if (B.t - B.lastThrow >= iv) {
    B.lastThrow = B.t;
    B.throwCount++;
    var dmg = B.dmg * ((Math.random() < B.crit) ? B.critMul : 1);
    if (B.hasDesign0) dmg = B.dmg * (0.5 + Math.random() * 2.5);
    if (B.adr && B.php < B.pmax * 0.3) dmg *= 1.6;
    if (B.big) dmg *= 1.4;
    B.shots.push({ x: px, y: py - 24, vy: -430, dmg: dmg, glyph: B.ammo[Math.floor(Math.random() * B.ammo.length)] });
    if (B.split > 0 && Math.random() < B.split) B.shots.push({ x: px + (Math.random() * 40 - 20), y: py - 24, vy: -430, dmg: dmg * 0.6, glyph: B.ammo[Math.floor(Math.random() * B.ammo.length)] });
  }
  /* Build 技能（全部自动释放） */
  skillTick(dt, mx, my);
  /* 怪物攻击（不被躲，纯数值对轰） */
  if (B.stun <= 0 && B.t - B.mLast >= B.mInterval) {
    B.mLast = B.t;
    B.mshots.push({ x: mx + (Math.random() * 120 - 60), y: my + 30, vy: 260, dmg: B.mon.dmg, glyph: '❓' });
  }
  B.stun = Math.max(0, B.stun - dt);
  if (B.regen > 0) B.php = Math.min(B.pmax, B.php + B.regen * dt);
  /* 弹道推进与命中 */
  for (var i = B.shots.length - 1; i >= 0; i--) {
    var s = B.shots[i]; s.y += s.vy * dt;
    if (s.y <= my + 30) { hitMonster(s.dmg, s.x, my + 20); B.shots.splice(i, 1); }
  }
  for (var i2 = B.mshots.length - 1; i2 >= 0; i2--) {
    var m = B.mshots[i2]; m.y += m.vy * dt;
    if (m.y >= py - 20) { hitPlayer(m.dmg); B.mshots.splice(i2, 1); }
  }
  /* 胜负 */
  if (B.mhp <= 0 && !B.over) { endBattleWin(); return; }
  if (B.php <= 0 && !B.over) { endBattleDeath(); return; }
  render(px, py, mx, my);
  } catch (err) { if (window.console) console.error('[battle]', err); } /* 单帧出错不停摆 */
}
function skillTick(dt, mx, my) {
  var base = B.dmg * B.skillDmg;
  B.actives.forEach(function (a) {
    var def = a.def;
    if (B.t - a.last < def.cd * B.cdMul) return;
    a.last = B.t;
    var d = base * (def.mul || 1);
    if (def.rand) d = base * (def.rand[0] + Math.random() * (def.rand[1] - def.rand[0]));
    hitMonster(d * B.mVuln, mx, my + 20);
    if (def.label) floatText(mx, my + 55, def.label, '#edbe5c');
    if (def.stun) B.stun = Math.max(B.stun, def.stun);
    if (def.clear) B.mshots = [];
    if (def.hyper) B.hyper = def.hyper;
    if (def.self) hitPlayer(def.self);
  });
  if (B.hyper > 0) B.hyper -= dt;
}
function hitMonster(dmg, x, y) {
  if (B.over || B.mhp <= 0) return;
  dmg *= 1 + Math.min(0.48, 0.08 * Math.floor(B.t / 5)); /* 连击惯性：越打越疼 */
  B.mhp -= dmg;
  if (B.vamp > 0) B.php = Math.min(B.pmax, B.php + dmg * B.vamp);
  B.floats.push({ x: x, y: y, txt: '-' + Math.round(dmg), c: '#f07a70', t: 0 });
}
function hitPlayer(dmg) {
  if (B.over) return;
  if (B.shield > 0) { var ab = Math.min(B.shield, dmg); B.shield -= ab; dmg -= ab; }
  if (dmg > 0) B.php -= dmg;
  if (B.thorn > 0) hitMonster(B.thorn, mx0(), my0());
  if (B.php <= 0 && B.revive > 0) { B.revive--; B.php = 1; B.floats.push({ x: 360, y: 340, txt: '★ 不死鸟羽！', c: '#edbe5c', t: 0 }); return; }
  B.floats.push({ x: 360 + (Math.random() * 80 - 40), y: 340, txt: dmg > 0 ? '-' + Math.round(dmg) : '🛡 抵挡', c: dmg > 0 ? '#f0b8ac' : '#9fd3b8', t: 0 });
}
function mx0() { return B.cv ? B.cv.width / 2 : 360; }
function my0() { return B.cv ? 80 : 80; }
function render(px, py, mx, my) {
  var ctx = B.ctx, W = B.cv.width, H = B.cv.height;
  ctx.clearRect(0, 0, W, H);
  /* 怪物 */
  ctx.font = '52px serif'; ctx.textAlign = 'center';
  ctx.fillText(B.mon.emoji, mx, my + 20);
  ctx.font = '700 15px sans-serif'; ctx.fillStyle = '#f0b8ac';
  ctx.fillText(B.mon.name, mx, my - 44);
  ctx.fillStyle = '#10151c'; ctx.fillRect(mx - 130, my - 38, 260, 10);
  ctx.fillStyle = '#c9453e'; ctx.fillRect(mx - 130, my - 38, 260 * Math.max(0, B.mhp / B.mmax), 10);
  /* 主角 */
  ctx.font = '40px serif'; ctx.fillText('🧑‍💻', px, py + 14);
  ctx.font = '700 13px sans-serif'; ctx.fillStyle = '#9fd3b8';
  ctx.fillText(B.clsName + ' · ' + B.actives.length + ' Build 全开', px, py + 38);
  ctx.fillStyle = '#10151c'; ctx.fillRect(px - 130, H - 18, 260, 10);
  ctx.fillStyle = '#7ed696'; ctx.fillRect(px - 130, H - 18, 260 * Math.max(0, B.php / B.pmax), 10);
  ctx.font = '11px monospace'; ctx.fillStyle = '#9fb3aa';
  ctx.fillText('意志 ' + Math.max(0, Math.ceil(B.php)) + '/' + B.pmax, px, H - 24);
  /* 弹药 */
  B.shots.forEach(function (s) { ctx.font = '20px serif'; ctx.fillText(s.glyph, s.x, s.y); });
  B.mshots.forEach(function (m) { ctx.font = '18px serif'; ctx.fillText('❗', m.x, m.y); });
  /* 飘字 */
  for (var i = B.floats.length - 1; i >= 0; i--) {
    var f = B.floats[i]; f.t += 0.016 * B.speed;
    if (f.t > 1) { B.floats.splice(i, 1); continue; }
    ctx.font = '900 16px sans-serif'; ctx.fillStyle = f.c; ctx.globalAlpha = 1 - f.t;
    ctx.fillText(f.txt, f.x, f.y - f.t * 30); ctx.globalAlpha = 1;
  }
}
function endBattleWin() {
  B.over = true; cancelAnimationFrame(RAF); S.inBattle = false;
  S.hp = Math.max(1, Math.min(B.pmax, B.php)); S.kills++;
  if (B.healwin) S.hp = Math.min(B.pmax, S.hp + 15);
  var mc = topClass(); S.stats[mc] += 1;
  collapseBattle('<span style="color:#7ed696">胜利</span>');
  if (B.isBoss) { screenBossWin(); return; }
  pushLog('<div style="margin-bottom:8px">' + B.mon.emoji + ' ' + B.mon.name + ' 化作了数据尘埃。实战经验：' + CLASSES[mc].name.split(' ')[0] + ' +1。掉落了三块「引擎碎片」——只能拿一块：</div>');
  var pool = ROGUE_POOL.slice();
  var cands = [];
  for (var k in S.trained) if (S.trained[k] >= 1 && S.trained[k] < 3) cands.push(k);
  if (cands.length) pool.push({ id: 'essence', t: '经验精华', d: '随机一项属性 +3——点数够的话，当场觉醒/进化新技能' });
  var picks = [];
  var want = 3 + (buff('lucky') > 0 ? 1 : 0);
  while (picks.length < want && pool.length) picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  var html = '<div style="margin:8px 0;padding:10px 13px;background:rgba(237,190,92,.07);border-left:3px solid #edbe5c;border-radius:6px"><b style="color:#edbe5c">▶ 战利品 · ' + (want > 3 ? '四' : '三') + '选一（可叠加）</b><br>';
  picks.forEach(function (p) {
    html += '<button class="rb-btn" style="margin-top:6px;padding:8px 12px" onclick="pickRogue(event,\'' + p.id + '\')"><b style="color:#7ed696">' + p.t + '</b>　' + p.d + '</button>';
  });
  html += '</div>';
  S.pendingChoice = true;
  S.guardUntil = Date.now() + 1000; /* 1 秒误触保护 */
  pushLog(html);
  updateLogHint(); save();
}
function endBattleDeath() {
  B.over = true; cancelAnimationFrame(RAF); S.inBattle = false;
  collapseBattle('<span style="color:#f0b8ac">你倒下了</span>');
  if (S.idleDays >= 7) { showEnding('E_idle'); return; }
  showEnding(B.isBoss ? 'BOSS' : B.mon.dex);
}
function pickRogue(e, id) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!S.pendingChoice || Date.now() < (S.guardUntil || 0)) return;
  S.pendingChoice = false;
  var label;
  if (id === 'essence') {
    var k6 = randomKey(); addStat(k6, 3);
    label = '经验精华——' + CLASSES[k6].name + ' +3。';
  } else {
    S.buffs.push(id);
    label = '「' + BUFF_HUMAN[id][0] + '」已生效。';
    if (id === 'hp') { S.hmax += 8; S.hp = Math.min(S.hmax, S.hp + 8); }
  }
  /* 收起战利品块：只保留已选 */
  var chosen = ROGUE_POOL.filter(function (p) { return p.id === id; })[0];
  var picked = '<div style="margin:8px 0;padding:10px 13px;background:rgba(237,190,92,.07);border-left:3px solid #edbe5c;border-radius:6px"><b style="color:#edbe5c">▶ 战利品 · 三选一</b><br>';
  picked += '<button class="rb-btn" disabled style="margin-top:6px;padding:8px 12px;border-color:#edbe5c;color:#edbe5c">✓ ' + (chosen ? chosen.t : label) + '</button></div>';
  S.logEntries[S.logEntries.length - 1] = picked;
  rebuildLogBox();
  pushLog('<div style="margin:4px 0 8px;padding:8px 12px;color:#f5e6bd;background:rgba(237,190,92,.05);border-radius:6px">你拿走了' + label + '</div>');
  checkStageUps();
  pushLog('<div style="margin:10px 0 4px;color:#9fb3aa">—— 深夜 · 第 ' + S.day + ' 天结束 ——</div><div style="margin-bottom:8px">你把今天学到的东西存进记忆。<span style="color:#edbe5c">【距离大降临还剩 ' + (7 - S.day) + ' 天】进度已自动保存。</span></div>');
  S.dayDone = true;
  updateLogHint(); save();
}
function acceptSpecial(e, id) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!S.pendingChoice || Date.now() < (S.guardUntil || 0)) return;
  S.pendingChoice = false;
  var sp = SPECIALS.filter(function (x) { return x.id === id; })[0];
  S.specials.push(id);
  var picked = '<div style="margin:10px 0;padding:12px 14px;background:rgba(139,92,246,.12);border:2px solid #8b5cf6;border-radius:10px"><b style="color:#c4b5fd">' + sp.emoji + ' 特殊邀请 · ' + sp.who + '</b><br><span style="color:#e8e4d4">' + sp.invite + '</span><br><button class="rb-btn" disabled style="margin-top:8px;border-color:#8b5cf6;color:#c4b5fd">✦ 接受了邀请</button></div>';
  S.logEntries[S.logEntries.length - 1] = picked;
  rebuildLogBox();
  pushLog('<div style="margin:6px 0;padding:12px 14px;color:#0b1210;background:linear-gradient(135deg,#c4b5fd,#8b5cf6);border-radius:10px;font-weight:700;line-height:1.9">' + sp.cg + '</div>');
  pushLog('<div style="margin:4px 0 8px;padding:8px 12px;color:#f5e6bd;background:rgba(237,190,92,.05);border-radius:6px">' + sp.yes + '　<b style="color:#c4b5fd">特殊技能获得：' + sp.skill.name + '</b>（战斗中自动释放，不受属性阈值限制）</div>');
  updateLogHint(); save();
}
function declineSpecial(e, id) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!S.pendingChoice || Date.now() < (S.guardUntil || 0)) return;
  S.pendingChoice = false;
  var sp = SPECIALS.filter(function (x) { return x.id === id; })[0];
  var picked = '<div style="margin:10px 0;padding:12px 14px;background:rgba(139,92,246,.12);border:2px solid #8b5cf6;border-radius:10px"><b style="color:#c4b5fd">' + sp.emoji + ' 特殊邀请 · ' + sp.who + '</b><br><span style="color:#e8e4d4">' + sp.invite + '</span><br><button class="rb-btn" disabled style="margin-top:8px">✕ 婉拒了</button></div>';
  S.logEntries[S.logEntries.length - 1] = picked;
  rebuildLogBox();
  pushLog('<div style="margin:4px 0 8px;padding:8px 12px;color:#9fb3aa;background:rgba(255,255,255,.03);border-radius:6px">' + sp.no + '</div>');
  updateLogHint(); save();
}
function nextDay() { S.day++; S.dayPlan = []; S.logPtr = 0; S.dayDone = false; S.hp = Math.min(S.hmax, S.hp + 15); screenDay(); }
function screenBossWin() {
  /* 通关：职业结局 + 评级 */
  var c = topClass();
  markEnding('E_' + c);
  var dex = getDex();
  show(hudHtml() + '<div class="rb-panel rb-endcard"><div class="rb-tag">10 月 8 日 · 大降临</div><div class="rb-monname" style="margin-bottom:10px">👑 黄金周吞噬者 · 已被击退</div><div class="d rb-story" style="text-align:left">' + ENDING_TEXT.win[c] + '</div><div style="margin-top:14px"><span class="rb-stat" style="background:#edbe5c">结局 · ' + ENDINGS['E_' + c].t + '</span><span class="rb-stat" style="background:#7ed696">战力评级 ' + rating() + '</span><span class="rb-stat" style="background:#9fd3b8">总战力 ' + power() + '</span></div><div class="rb-tag" style="margin-top:14px">你的方向画像</div><div>' + (function () { var s = ''; for (var k in S.stats) s += '<span class="rb-stat" style="background:' + CLASSES[k].color + '">' + CLASSES[k].name.split(' ')[0] + ' ' + S.stats[k] + '</span>'; return s; })() + '</div><div class="rb-tag" style="margin-top:14px">结局图鉴 · ' + dex.length + ' / 14</div><div class="rb-dex">' + dexHtml() + '</div><button class="rb-btn gold" style="text-align:center;margin-top:12px" onclick="restart()">↻ 再来一世（新的一局）</button><button class="rb-btn" style="text-align:center" onclick="location.href=\'quiz\'">想看正式的方向测试？去 QUIZ 页</button></div>');
  clearSave();
}
function showEnding(id) {
  markEnding(id);
  var isIdle = id === 'E_idle';
  var dex = getDex();
  var body = isIdle ? ENDING_TEXT.idle : ENDING_TEXT.death[id];
  var mon = id === 'BOSS' ? BOSS : MONSTERS[parseInt(id.slice(1)) - 1];
  show(hudHtml() + '<div class="rb-panel rb-endcard"><div class="rb-tag">' + (isIdle ? '隐藏结局' : '你死了 · 死于第 ' + S.day + ' 天') + '</div><div class="t">' + ENDINGS[id].t + '</div><div style="font-size:34px;margin-bottom:10px">' + (isIdle ? '🎮' : mon.emoji) + '</div><div class="d">' + body + '</div><div class="rb-tag" style="margin-top:16px">结局图鉴 · ' + dex.length + ' / 14（死了也有收获——这就是多结局的意义）</div><div class="rb-dex">' + dexHtml() + '</div><button class="rb-btn gold" style="text-align:center;margin-top:12px" onclick="restart()">↻ 再重生一次（从第一天开始）</button><button class="rb-btn" style="text-align:center" onclick="location.href=\'quiz\'">不想打了？去做正经方向测试</button></div>');
  clearSave();
}
function dexHtml() {
  var dex = getDex(), h = '';
  for (var id in ENDINGS) h += '<div class="' + (dex.indexOf(id) >= 0 ? 'got' : '') + '">' + (dex.indexOf(id) >= 0 ? ENDINGS[id].got + ' · ' + ENDINGS[id].t : '？？？') + '</div>';
  return h;
}
function restart() { clearSave(); S = newState(); screenDay(); }
screenTitle();