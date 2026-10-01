import io, shutil, sys
sys.stdout.reconfigure(encoding='utf-8')

P = r'e:/Programs/GDPUDev/data/2026-10-01.js'
s = io.open(P, encoding='utf-8', newline='').read()

NEW = '''    { id: "ludum-dare-60-oct16", category: "contest", subcategory: "国际Jam", title: "Ludum Dare 60 定档 10 月 16 日：世界上最老牌的 48 小时极限开发又要开闸了", summary: "Ludum Dare 官网赛程确认：第 60 届 Ludum Dare 于 2026 年 10 月 16 日开赛，Compo 48 小时与 Jam 72 小时双模式照旧，2027 年 4 月的 LD 61 还将是 25 周年场。对国内学生来说，这是每年两次、门槛最低的国际级练兵场。", source: "Ludum Dare 官网", date: "2026-10-01", url: "https://ldjam.com/", image: "", badge: "报名窗口", badgeType: "event", readTime: "4 分钟", hotScore: 88, tags: ["Ludum Dare", "GameJam", "极限开发", "国际赛事"], content: [
      { title: "赛程要点", type: "list", items: ["LD 60：2026 年 10 月 16 日开赛；", "Compo 组 48 小时（素材全需现场创作）、Jam 组 72 小时（可组队、可用外部素材）；", "后续排期：LD 61 为 2027 年 4 月（25 周年），LD 62 为 2027 年 10 月；", "主题由社区投票决出，开赛那一刻才揭晓。"] },
      { title: "笔者观察", type: "text", text: "对在校学生，Ludum Dare 的价值不在名次，而在『完整交付』：从主题公布到上传成品，48 小时里你会被迫走完玩法原型→素材→打磨→上传的全流程，这正是课程作业永远练不到的部分。建议现在就组好队、装好引擎模板，把 10 月 16 日写进日历；哪怕做出来是个烂 demo，投稿页上的评论区反馈也比任何教程都有营养。参考来源：Ludum Dare 官网。" }
    ] },
    { id: "ciga-gamejam-portal", category: "contest", subcategory: "国内Jam", title: "CiGA Game Jam：中国最大规模的 48 小时 Game Jam，官网常年开放赛程入口", summary: "CiGA（中国独立游戏联盟）的 GameJams 官方页是了解国内 Game Jam 生态的第一入口：主理中国最大的 48 小时极限开发活动 CiGA Game Jam，主场比赛配合各地城市站同步举行，历届主题与参赛作品均可回看。", source: "CiGA 中国独立游戏联盟", date: "2026-10-01", url: "https://www.ciga.me/gamejams", image: "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/1489174/293", badge: "国内赛事", badgeType: "event", readTime: "4 分钟", hotScore: 84, tags: ["CiGA", "GameJam", "极限开发", "高校组队"], content: [
      { title: "赛事要点", type: "list", items: ["CiGA Game Jam 是国内规模最大的 48 小时 Game Jam 品牌；", "主场比赛 + 各城市站点同步，学生可就近参加或线上参赛；", "官网 GameJams 页常年维护历届主题、日程与作品入口。"] },
      { title: "笔者观察", type: "text", text: "国内学生参加 Jam，CiGA 系是最现实的选择：不用翻墙、有中文社区、城市站就在广州周边。更实际的用法是把它的历届主题页当『出题库』——平时拿历届主题给自己出 48 小时模拟赛，比漫无目的地练引擎有效得多。今年赶不上主场的，先关注它的赛程页，明年开报名时第一时间占座。参考来源：CiGA 官网。" }
    ] },
    { id: "indieplay-award-entry", category: "contest", subcategory: "独立游戏大赛", title: "indiePlay 中国独立游戏大赛：国产独立游戏的年度检阅场，官网入口常开", summary: "由 CiGA 主办的 indiePlay 中国独立游戏大赛是国内独立游戏最高规格的年度评选，设最佳独立游戏、最佳设计、最佳美术等奖项，入围名单每年秋季集中公布——官网常年开放历届获奖作品与征集动态查询。", source: "CiGA 中国独立游戏联盟", date: "2026-10-01", url: "https://www.ciga.me/", image: "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/1489174/293", badge: "年度大赛", badgeType: "event", readTime: "5 分钟", hotScore: 82, tags: ["indiePlay", "独立游戏", "大赛", "CiGA"], content: [
      { title: "赛事要点", type: "list", items: ["indiePlay 是 CiGA 主办的年度中国独立游戏大赛；", "奖项覆盖最佳独立游戏、最佳设计、最佳美术等维度；", "每年秋季为入围与颁奖窗口期，官网常年可查历届名单。"] },
      { title: "笔者观察", type: "text", text: "indiePlay 的历届获奖名单本身就是一份『国产独立游戏必玩清单 + 就业风向标』：拿过奖的团队基本都还在赛道上，而且常年招人。给你的建议是把官网的历届页面当月更读物——看入围作品在玩法和美术上做了什么取舍，比看十篇行业分析都直观。有毕设或 Prototype 的同学，记下征集窗口，明年把作品投出去试试水温。参考来源：CiGA 官网。" }
    ] },
    { id: "tencent-campus-game-contest", category: "contest", subcategory: "高校赛事", title: "腾讯高校游戏创意制作大赛：面向全国高校的年度官方赛事，官方页常年可查历届与动态", summary: "腾讯游戏学堂主办的高校游戏创意制作大赛是每年面向全国高校学生的官方赛事，提供策划、程序、美术组队的完整比赛链路，官网集合页常年可查历届赛题、获奖作品与新一年报名动态。", source: "腾讯游戏学堂", date: "2026-10-01", url: "https://gameinstitute.qq.com/yxds/collection", image: "", badge: "高校赛事", badgeType: "event", readTime: "4 分钟", hotScore: 80, tags: ["腾讯", "高校大赛", "组队", "官方赛事"], content: [
      { title: "赛事要点", type: "list", items: ["主办为腾讯游戏学堂，面向全国高校学生；", "以团队形式参赛，覆盖策划 / 程序 / 美术全岗位；", "官方集合页常年可查历届赛题、获奖作品与报名窗口。"] },
      { title: "笔者观察", type: "text", text: "这类大厂高校赛的隐藏价值是『评审即面试』：初赛作品会被腾讯系制作人直接翻牌子，历届获奖者里进大厂的比例不低。给你的操作建议：现在去集合页把近三年的获奖作品和赛题全部过一遍，摸清评委口味（完成度 > 创意堆砌）；明年开赛通道开启时，你有现成的赛题感和一支磨合过的队。参考来源：腾讯游戏学堂。" }
    ] },
    { id: "jsjds-digital-media-game-track", category: "contest", subcategory: "高校赛事", title: "中国大学生计算机设计大赛：数媒动漫与游戏类赛道，从校赛一路打到国赛的官方通道", summary: "中国大学生计算机设计大赛（4A 类学科竞赛）设有数媒动漫与游戏类赛道，赛制为校级初赛→省级复赛→国家级决赛，官网（北航承办）常年公布历年赛题、获奖名单与新一届通知，是保研综测认可度最高的大学生赛事之一。", source: "中国大学生计算机设计大赛组委会", date: "2026-10-01", url: "http://jsjds.blcu.edu.cn/", image: "", badge: "学科竞赛", badgeType: "event", readTime: "5 分钟", hotScore: 78, tags: ["计算机设计大赛", "4A赛事", "保研", "学科竞赛"], content: [
      { title: "赛事要点", type: "list", items: ["4A 类全国性学科竞赛，综测 / 保研普遍认可；", "数媒动漫与游戏类赛道支持游戏作品参赛；", "赛制：校级初赛 → 省级复赛 → 国家级决赛，每年春季为主战场；", "官网常设历年赛题与获奖名单归档。"] },
      { title: "笔者观察", type: "text", text: "对需要综测加分和保研材料的同学，这是游戏方向最『硬通货』的赛事——它的问题只是周期长：校赛在春季，国赛在夏天，作品要提前半年打磨。国庆假期正是启动点：现在开做一份能打 4A 赛的游戏作品，明年春天校赛、夏天省赛、暑假国赛，时间刚好。去官网把去年的数媒类赛题拉出来，选题尽量贴题。参考来源：大赛官网。" }
    ] }'''

anchor = '}\r\n  ]\r\n}'
idx = s.rfind(anchor)
assert idx > 0, 'items 结束锚点未找到'
head = s[:idx]
tail = s[idx:]
# 检查是否已插入过（幂等）
assert 'ludum-dare-60-oct16' not in s, '已插入过，跳过'
s = head + ',\r\n' + NEW.replace('\n', '\r\n') + '\r\n' + tail
io.open(P, 'w', encoding='utf-8', newline='').write(s)
shutil.copyfile(P, r'e:/Programs/GDPUDev/news_data.js')
print('INSERTED 5 contest items, copied to news_data.js')
