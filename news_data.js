window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-03",
    weekday: "星期六",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-03 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "反直觉访谈：AI 可能在给游戏公司『创造更多工作』而不是省时间",
      "《全战战锤3》知名 Mod 作者亲手『损坏』作品，抗议 AI 洗稿重传",
      "AI 生成的《辐射：纽约》浏览器游戏遭 Bethesda 律师函",
      "Krafton 砍掉 PUBG 衍生提取射击《Black Budget》：公布不到一年",
      "美光 CEO：内存缺货将持续到至少 2028 年——装机与开发成本都要重算"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9/1正式发布·WebGPU脱离实验版", badge: "推荐生产", color: "indigo" },
      { name: "Unity 7", type: "unity", status: "Unite Seoul公布·12月Beta·2027初发布", badge: "下一代", color: "blue" },
      { name: "团结引擎 1.10.4", type: "tuanjie", status: "9/23发布·持续更新", badge: "国内生态", color: "cyan" },
      { name: "UE 6", type: "unreal", status: "Rocket League首发·2027上线·UEFN合并", badge: "下一代", color: "purple" },
      { name: "Godot 4.8 dev6", type: "godot", status: "9/15发布·月内特性冻结", badge: "开发中", color: "emerald" },
      { name: "Godot 4.7.2", type: "godot", status: "当前稳定版·生产推荐", badge: "LTS", color: "pink" }
    ]
  },
  hero: {
    id: "ai-creating-more-work-not-less",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "反直觉洞察",
    title: "『AI 往往给了我更多活干』：当生成式工具开始给游戏公司加工作量而不是减",
    summary: "GamesIndustry.biz 刊发一组开发者访谈，挑战『AI = 省时间』的默认叙事：多位从业者反映，生成式工具产出的内容需要更多人工审校、返工与合规检查——净效果往往是工作变多而不是变少。",
    image: "https://assetsio.gnwcdn.com/5D7A6953.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "GamesIndustry.biz",
    date: "2026-10-02",
    url: "https://www.gamesindustry.biz/quite-often-its-given-me-more-to-do-why-ai-might-be-creating-more-work-for-games-companies-rather-than-saving-time",
    readTime: "8 分钟深度",
    hotScore: 92,
    tags: ["AI", "生成式工具", "工作流", "游戏公司", "生产管线"],
    content: [
      { title: "报道要点", type: "list", items: ["多位从业者反映：AI 产出的内容需要更多人工审校与返工；", "生成内容的版权与合规检查本身成为新的工作量；", "『省下的时间』常被『验证的时间』吃掉，净收益因团队而异；", "结论不是『AI 没用』，而是收益被系统性高估。"] },
      { title: "笔者观察", type: "text", text: "这是本月对 AI 叙事最诚实的一篇：它没有站队『AI 革命』或『AI 泡沫』，而是把账算到了工时层面——生成是瞬时的，验证是线性的，任何没算验证成本的 AI 提效预算都是在画饼。对学生做毕设的启示更直接：用 AI 生成素材前，先想清楚谁审、怎么审、审不过怎么办，这比纠结用哪个模型重要。参考来源：GamesIndustry.biz。" }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 财报 / 投融资 / 市场分析" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "新作发售 / 展会发布 / 热门追踪" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "DOTS / C# / 性能优化 / 架构设计" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI NPC / 智能体 / 生成式AI / 大模型工具" }
  ],
  items: [
    { id: "total-war-mod-corrupted-ai-protest", category: "ai", subcategory: "Mod 社区", title: "『支持 Mod 作者，不是支持 AI』：《全战战锤3》Mod 作者亲手损坏作品，抗议 AI 洗稿重传", summary: "《全战：战锤3》的一位 Mod 作者发现自己的作品被他人抓取、混入 AI 内容后未授权重传，选择以极端方式抗议：故意『损坏』自己的 Mod 原作——Mod 社区与 AI 抓取的矛盾激化到自伤式抗议的程度。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/support-modders-not-ai-total-war-warhammer-3-mod-deliberately-corrupted-by-its-own-creator-in-protest-of-ai-infused-unauthorised-reuploads", image: "https://assetsio.gnwcdn.com/total-war-warhammer-3-mod-corrupted-ai-reuploads-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "Mod 社区", badgeType: "ai", readTime: "5 分钟", hotScore: 86, tags: ["全战战锤3", "Mod", "AI 抓取", "版权"], content: [
      { title: "事件要点", type: "list", items: ["Mod 作者发现作品被 AI 混编后未授权重传；", "抗议方式：故意损坏自己的 Mod 原作使其不可用；", "社区口号：『支持 Mod 作者，不是支持 AI』。"] },
      { title: "笔者观察", type: "text", text: "Mod 生态的悖论在这一事件里暴露无遗：Mod 依赖开放分享才能存在，而开放恰恰是 AI 抓取的入口——作者用自毁抗议，等于用自己的身体堵枪眼。真正的问题是平台责任：创意工坊类的授权协议与 AI 溯源标注，该由 Valve 与 CA 来定规矩，而不是逼作者在『开放』和『自保』之间二选一。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-fallout-new-york-cd", category: "ai", subcategory: "合规纠纷", title: "AI 生成的《辐射：纽约》浏览器游戏遭 Bethesda 律师函：『slop 作者』自曝吃 C&D", summary: "一款用生成式 AI 批量制作的《辐射：纽约》题材浏览器游戏——以大量崩坏的人物脸出名——遭 Bethesda 律师函下架，其制作者自称『slop prompter』并公开了 C&D 文件：AI slop 与 IP 方的第一次正面对撞样本。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/ai-generated-fallout-new-york-browser-game-full-of-utterly-cursed-faces-slapped-with-bethesda-cease-and-desist-its-slop-prompter-claims", image: "https://assetsio.gnwcdn.com/fallout-4-mod-drama-breaking-benjamin-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "合规纠纷", badgeType: "ai", readTime: "4 分钟", hotScore: 80, tags: ["AI 生成", "Bethesda", "辐射", "律师函"], content: [
      { title: "事件要点", type: "list", items: ["AI 生成的《辐射》题材浏览器游戏被批量制作上线；", "人物面部崩坏图在社交平台病毒式传播；", "Bethesda 发出停止与终止函（C&D），制作者公开了文件。"] },
      { title: "笔者观察", type: "text", text: "这个案例的价值在于它把三个问题叠在了一起：IP 侵权（用 Bethesda 的世界观）、AI 素材的版权灰区、以及『故意做得烂』是否构成转换性使用。最后法院怎么判都会成为 AI 时代内容生产的先例之一。给学生团队的警示朴素但重要：练手可以，发布之前先问『这东西的商业链条上有没有别人的 IP』。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "krafton-cancels-black-budget", category: "industry", subcategory: "项目取消", title: "Krafton 砍掉《Black Budget》：公布不到一年的 PUBG 衍生提取射击，死于『长期体验』自评", summary: "Krafton 宣布关停 PUBG 宇宙衍生提取射击《Black Budget》——距封闭 alpha 测试仅九个月。官方给出的理由罕见地坦诚：判断它『无法提供玩家能够长期享受的体验』，宁可砍掉也不带病上线。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/krafton-shuts-down-pubg-spin-off-black-budget-nine-months-after-closed-alpha-test", image: "https://assetsio.gnwcdn.com/black-budget.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "项目取消", badgeType: "business", readTime: "4 分钟", hotScore: 83, tags: ["Krafton", "Black Budget", "PUBG", "提取射击"], content: [
      { title: "事件要点", type: "list", items: ["Krafton 关停 PUBG 衍生提取射击《Black Budget》；", "距封闭 alpha 测试仅约九个月；", "官方理由：无法提供『玩家能长期享受的体验』。"] },
      { title: "笔者观察", type: "text", text: "提取射击赛道的淘汰赛开始了——Marathon、Arc Raiders、Black Budget 同台，现在第一个出局的是背靠 PUBG IP 的那家，说明这个品类拼的不是导流量而是留存设计。『长期体验』这个自评标准值得记录：长线服务项目的立项验收应该有一条『三个月后玩家为什么还在』的硬指标，答不上来就别立项。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ram-shortage-until-2028", category: "industry", subcategory: "硬件供应", title: "美光 CEO 放话：内存缺货将持续到至少 2028 年——开发者与玩家的成本账都要重算", summary: "美光 CEO 公开表示内存供应紧张将持续到 2028 年以后：AI 数据中心对存储晶圆的吞噬正在挤压消费端供应。游戏侧的直接影响是明确的——玩家装机成本上升，开发者的高端配置基线也得跟着重估。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/ram-shortages-are-only-getting-worse-and-will-last-until-at-least-2028-micron-boss-declares-from-atop-a-mountain-of-money", image: "https://assetsio.gnwcdn.com/ram-stick-pile-resized-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "硬件供应", badgeType: "business", readTime: "4 分钟", hotScore: 78, tags: ["内存", "美光", "硬件成本", "AI 数据中心"], content: [
      { title: "报道要点", type: "list", items: ["美光 CEO 表示内存缺货将持续至至少 2028 年；", "根因：AI 数据中心需求挤压消费端存储供应；", "消费级内存价格持续上行，装机与升级成本显著增加。"] },
      { title: "笔者观察", type: "text", text: "这条对两本账都有影响：玩家的『推荐配置』会越来越贵，开发者的『最低配置』就不能再大方地写 16G 内存。更实际的建议给在校同学——如果近期有装机/升级计划，内存趁早；做毕设演示时把『低配可跑』当验收项，你的答辩评委和未来的玩家都会感谢这条工程纪律。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "sony-physical-media-consultation-opinion", category: "industry", subcategory: "深度评论", title: "GI.biz 评论：索尼的实体介质咨询『迟到总比不到好』——但数字化的列车不会停下", summary: "针对上周索尼就放弃光盘支持调研开发者的报道，GamesIndustry.biz 发表评论：咨询本身就是进步，但实体介质的衰退是结构性趋势——真正该讨论的不是『要不要数字化』，而是数字购买权的永久性保障。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/sonys-consultation-on-physical-media-better-late-than-never-opinion", image: "https://assetsio.gnwcdn.com/denise-jans-zvRgcCx8Nvs-unsplash-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "深度评论", badgeType: "business", readTime: "6 分钟", hotScore: 75, tags: ["索尼", "实体介质", "数字所有权", "评论"], content: [
      { title: "评论要点", type: "list", items: ["索尼向开发者发起实体介质去留咨询，评论认为『迟到但值得肯定』；", "实体衰退是结构性趋势，逆势保留成本高昂；", "真正的议题转向：数字购买的永久所有权与下架后可玩性。"] },
      { title: "笔者观察", type: "text", text: "把这条与 9/28 的索尼调研报道连读，能看清一个完整的舆论引导周期：先爆料 → 再官方咨询 → 最后评论定调。而文章把焦点从『光盘死不死』转向『数字所有权』，才是给玩家权益指出的真战场——游戏停服即消失的问题在纯数字时代会被无限放大。做买断制项目的同学，商店页的『离线可玩』说明会越来越值钱。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "2xko-mau-threshold-analysis", category: "industry", subcategory: "市场分析", title: "《2XKO》的经济账：格斗 F2P 要活下来，月活得有『几十万到百万级』", summary: "Riot 免费格斗游戏《2XKO》上线后的分析文章给出一份冷静的算术：以格斗品类的付费深度，这款游戏若要达成商业成功，月活跃用户需要达到数十万乃至百万量级——F2P 格斗这道题比想象中难。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/2xko-would-have-needed-an-mau-base-in-the-high-hundreds-of-thousands-if-not-millions-to-succeed", image: "https://assetsio.gnwcdn.com/2kxo_3bOEGlA.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "市场分析", badgeType: "business", readTime: "5 分钟", hotScore: 74, tags: ["2XKO", "Riot", "格斗游戏", "F2P 经济"], content: [
      { title: "分析要点", type: "list", items: ["格斗品类的人均付费深度低于 MOBA/射击等主流 F2P；", "推算《2XKO》商业成功需要数十万至百万级 MAU 支撑；", "格斗 F2P 的变现结构仍是被验证中的难题。"] },
      { title: "笔者观察", type: "text", text: "格斗游戏做 F2P 一直是个半解的题：观赏性极强的品类，付费点却天然稀薄（皮肤驱动弱于角色驱动的竞技公平性需求）。这份 MAU 门槛测算给了所有想做竞技 F2P 的团队一个参照系——先算清人均 ARPU 的天花板，再决定要不要做。想进 Riot/格斗方向的同学，读懂这篇的算术过程比看十篇入行攻略有用。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "stone-kite-transmedia-studio", category: "industry", subcategory: "新工作室", title: "Bungie 联合创始人 +《命运2》叙事总监创办跨媒介工作室 Stone Kite", summary: "Bungie 联合创始人与《命运2》叙事总监宣布联合创立跨媒介工作室 Stone Kite——游戏叙事人才向影视/跨媒介流动的又一标志性动作。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/bungie-co-founder-and-destiny-2-narrative-director-launch-transmedia-studio-stone-kite", image: "https://assetsio.gnwcdn.com/stone-kite-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新工作室", badgeType: "business", readTime: "3 分钟", hotScore: 70, tags: ["Bungie", "Stone Kite", "跨媒介", "叙事"], content: [
      { title: "事件要点", type: "list", items: ["Bungie 联合创始人携《命运2》叙事总监创办 Stone Kite；", "定位为跨媒介（transmedia）工作室；", "游戏叙事人才向影视/综合娱乐迁移的趋势延续。"] },
      { title: "笔者观察", type: "text", text: "『叙事总监』这个岗位最近频繁出现在创业新闻里，说明游戏叙事的价值正在被游戏行业之外的资本定价。对想走叙事方向的同学，就业面其实在被这些新工作室拓宽——游戏剧本能力 + 跨媒介改编意识，是未来五年叙事岗位的新简历标准。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "no-law-corner-shops-praise", category: "games", subcategory: "设计解析", title: "《No Law》的便利店为什么值得全行业『偷师』：开放世界细节的另一个档次", summary: "RPS 撰文盛赞《No Law》开放世界里『荒谬细致且真实』的街角便利店——货架陈列、价签体系到灯光氛围都按真实零售逻辑搭建，并呼吁全行业开发者从这件『小事』里偷师。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/if-game-developers-steal-one-thing-from-no-law-i-hope-its-the-open-world-games-ridiculously-detailed-and-realistic-corner-shops", image: "https://assetsio.gnwcdn.com/No-Law-peacekeeper.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计解析", badgeType: "games", readTime: "5 分钟", hotScore: 73, tags: ["No Law", "开放世界", "环境叙事", "关卡细节"], content: [
      { title: "解析要点", type: "list", items: ["《No Law》的街角便利店按真实零售逻辑搭建；", "货架陈列、价签、灯光共同构成可信的空间叙事；", "RPS 呼吁开发者把这种『无功能细节』的投入当作标杆。"] },
      { title: "笔者观察", type: "text", text: "便利店是开放世界设计里最好的『显微镜测试』：玩家不会为了货架停留，但货架决定了世界是布景还是场所。这条与本周《No Law》的反应性访谈连读正好完整——系统给玩家玩的理由，细节给世界活的理由。做场景设计的同学，给自己定一条『每个空间放一件和玩法无关但逻辑成立的东西』的规矩试试。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "gta6-pegi-drug-details", category: "games", subcategory: "分级信息", title: "GTA6 PEGI 分级细节曝光：Lucia 与 Jason 可随时从物品栏使用毒品", summary: "Eurogamer 报道：GTA6 的 18+ 分级信息显示，主角 Lucia 和 Jason 可以『直接从物品栏中、随时』使用毒品——分级文件正在变成新作机制的官方剧透源。", source: "Eurogamer", date: "2026-10-03", url: "https://www.eurogamer.net/gta6-age-rating-pegi-lucia-jason-drug-use", image: "https://assetsio.gnwcdn.com/GTA-6-Lucia_bnyTxLW.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "分级信息", badgeType: "games", readTime: "3 分钟", hotScore: 84, tags: ["GTA6", "PEGI", "分级", "开放世界"], content: [
      { title: "报道要点", type: "list", items: ["GTA6 的 PEGI 18+ 分级描述提及主角可随时使用毒品；", "细节来自分级委员会的公开评级说明；", "分级文件再度成为发售前机制信息的可靠来源。"] },
      { title: "笔者观察", type: "text", text: "一个冷知识：分级申请要在发售前提交完整内容清单，所以『看分级猜机制』比看预告片准。做发行或合规方向的同学注意，这也是国内版号材料工作的镜像逻辑——内容申报单就是机制清单，申报口径要与实机一致，别到时候两头对不上。参考来源：Eurogamer。" }
    ] },
    { id: "kcd2-gta6-price-hike", category: "games", subcategory: "行业观点", title: "《天国拯救2》负责人力挺 GTA6 带头涨价：『早就该来且很有必要』", summary: "Eurogamer 报道：《天国拯救2》相关负责人公开支持 GTA6 把 3A 游戏价格推向 80 美元——认为这对行业的生存『早就该来且很有必要』，开发商的定价话语权之争公开化。", source: "Eurogamer", date: "2026-10-03", url: "https://www.eurogamer.net/kingdom-come-deliverance-gta6-higher-game-prices", image: "https://assetsio.gnwcdn.com/KCDII_Standard_KA_Unbranded.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业观点", badgeType: "games", readTime: "4 分钟", hotScore: 82, tags: ["天国拯救2", "GTA6", "游戏定价", "3A"], content: [
      { title: "报道要点", type: "list", items: ["《天国拯救2》负责人支持 GTA6 带动 3A 涨价至 80 美元；", "观点核心：定价上调是行业生存的必要调整；", "中小团队『搭便车』跟涨与玩家反弹的风险并存。"] },
      { title: "笔者观察", type: "text", text: "注意发言人的立场结构：敢喊涨价的多是『卖得好且成本可控』的团队——天国拯救2 恰好两者都是。涨价潮里真正危险的是中间层：成本 3A 化、销量长尾化的项目。将来你谈薪或谈分成时记住，定价权从来不在开发组手里，这条新闻里没有一个是程序员说的。参考来源：Eurogamer。" }
    ] },
    { id: "gears-eday-missing-features", category: "games", subcategory: "新作观察", title: "《战争机器：E-Day》缺少电锯对决等标志性要素，官方承诺『并未消失』", summary: "Eurogamer 报道：《战争机器：E-Day》发售时缺少电锯对决等系列标志性内容，Coalition 回应这些要素『并未从系列中消失』，将在发售后的更新或下一部作品中回归。", source: "Eurogamer", date: "2026-10-03", url: "https://www.eurogamer.net/gears-of-war-eday-missing-features-update", image: "https://assetsio.gnwcdn.com/E-Day-meat-shield.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作观察", badgeType: "games", readTime: "3 分钟", hotScore: 78, tags: ["战争机器", "E-Day", "Coalition", "系列传统"], content: [
      { title: "报道要点", type: "list", items: ["《E-Day》首发缺少电锯对决等系列标志性玩法；", "Coalition 表示要素『并未消失』，后续更新或新作中回归；", "策略指向：用内容更新节奏换首发工期。"] },
      { title: "笔者观察", type: "text", text: "『标志性要素后补』正在成为 3A 的新常态——从系列传统到赛季内容的边界越来越模糊。对项目管理的启示是：把『系列传统』当独立需求项管理，砍它要有意识地决策并公示，而不是默默缩水等玩家发现。参考来源：Eurogamer。" }
    ] },
    { id: "aion-2-western-launch", category: "games", subcategory: "新作观察", title: "《永恒之塔2》西方发售在即：创始人礼包销量超过大型游戏，玩家数飙升", summary: "Eurogamer 报道：《永恒之塔2（Aion 2）》全球发售在即，西方区预订与玩家数据表现强劲——创始人礼包销量超过大型游戏，MMO 的西进战役开局漂亮。", source: "Eurogamer", date: "2026-10-03", url: "https://www.eurogamer.net/aion-2-western-release-steam-player-numbers", image: "https://assetsio.gnwcdn.com/aion-2-party-vs-big-dragon.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作观察", badgeType: "games", readTime: "3 分钟", hotScore: 76, tags: ["永恒之塔2", "MMO", "NCSoft", "出海"], content: [
      { title: "报道要点", type: "list", items: ["《Aion 2》西方区全球发售在即；", "创始人礼包销量超过大型游戏基准；", "Steam 玩家数据在上线前持续飙升。"] },
      { title: "笔者观察", type: "text", text: "韩国 MMO 出海这两年在西方越打越顺，靠的不是情怀而是『手游化运营 + 主机级画面』的混搭。对做出海方向的同学，Aion 2 是个值得拆的样本：它的西方营销节奏（先锋体验→礼包→正式上线）几乎可以当模板抄。参考来源：Eurogamer。" }
    ] },
    { id: "witcher3-remaster-lighting-patch", category: "engine", subcategory: "技术跟进", title: "《巫师3 重制版》PC 光照争议：CDPR 用新补丁正面回应", summary: "Eurogamer 报道：CD Projekt RED 针对玩家对《巫师3 重制版》PC 光照改动的争议发布新补丁——重制视觉方案的取舍被玩家翻桌后，官方选择快速迭代而不是硬扛。", source: "Eurogamer", date: "2026-10-02", url: "https://www.eurogamer.net/witcher-3-remastered-lighting-patch-pc", image: "https://assetsio.gnwcdn.com/geralt-horse-witcher-3.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "技术跟进", badgeType: "engine", readTime: "4 分钟", hotScore: 79, tags: ["巫师3", "重制版", "光照", "CDPR"], content: [
      { title: "报道要点", type: "list", items: ["重制版 PC 光照改动引发玩家争议；", "CDPR 通过新补丁对光照方案进行调整；", "重制版整体仍在按口碑资产路线运营。"] },
      { title: "笔者观察", type: "text", text: "光照是重制项目里最危险的一项：它直接改写玩家记忆里的画面情绪，改『好』了也未必讨好。技术侧的教训是重制的美术基线要有『原作对照图』评审环节——不是复刻，而是能解释每一次偏移的理由。参考来源：Eurogamer。" }
    ] },
    { id: "ps5-qssr-ai-upscaling", category: "engine", subcategory: "主机技术", title: "PS5 获得 Pro 同款 AI 引导升级技术：首批支持《漫威金刚狼》《羊蹄山之魂》", summary: "Eurogamer 报道：索尼把 PS5 Pro 的 AI 引导升级（QSSR）技术下放到标准版 PS5，《漫威金刚狼》与《羊蹄山之魂》成为首批支持作品——主机超分从 Pro 专属变成平台基线。", source: "Eurogamer", date: "2026-10-02", url: "https://www.eurogamer.net/ps5-ai-upscaling-qssr-marvels-wolverine-ghost-yotei", image: "https://assetsio.gnwcdn.com/ghost-of-yotei-review-header-(1).png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "主机技术", badgeType: "engine", readTime: "4 分钟", hotScore: 77, tags: ["PS5", "AI 升频", "索尼", "机器学习超分"], content: [
      { title: "报道要点", type: "list", items: ["PS5 Pro 的 AI 引导升级技术下放标准版 PS5；", "首批支持《漫威金刚狼》《羊蹄山之魂》等大作；", "机器学习超分成为主机平台的标配能力。"] },
      { title: "笔者观察", type: "text", text: "主机厂下场做 ML 超分，意味着『按分辨率渲染』的开发假设要改了：未来主机游戏的性能预算会越来越像 PC——分辨率是弹性的，帧率是刚性的。学引擎的同学今年起做毕设就按这个假设来，别再为 4K 目标分辨率优化而牺牲帧率。参考来源：Eurogamer。" }
    ] },
    { id: "nvidia-dlss5-nba2k27", category: "engine", subcategory: "图形技术", title: "NVIDIA DLSS 5 正式推出：3D 引导神经渲染随 NBA 2K27 首发", summary: "NVIDIA 官方宣布 DLSS 5 正式可用：首次引入 3D 引导神经渲染（3D-Guided Neural Rendering），在 NBA 2K27 中首发，支持 RTX 50 系全系 GPU 与 GeForce NOW——开发者可调校以还原艺术风格。", source: "NVIDIA GeForce 官方", date: "2026-09-01", url: "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/", image: "https://www.nvidia.com/content/dam/en-zz/nvidiaweb/geforce/news/dlss-5-3d-guided-neural-rendering/nvidia-dlss-5-3d-guided-neural-rendering-available-now-in-nba-2k27-ogimage.jpg", badge: "图形技术", badgeType: "engine", readTime: "6 分钟", hotScore: 83, tags: ["NVIDIA", "DLSS 5", "神经渲染", "RTX 50"], content: [
      { title: "技术要点", type: "list", items: ["DLSS 5 首次引入 3D 引导神经渲染；", "NBA 2K27 为首发支持作品；", "支持 RTX 50 系全系列 GPU 与 GeForce NOW 云端；", "官方强调开发者可调校渲染模型以保留艺术风格。"] },
      { title: "笔者观察", type: "text", text: "从超分到『神经渲染整个画面』，DLSS 的进化方向越来越清晰：AI 不再只补像素，而是在参与造像素。对 TA 方向的同学，『开发者可调校以还原艺术风格』这句最值得抠——神经渲染时代的美术话语权，取决于谁能给模型写好约束。参考来源：NVIDIA GeForce 官方。" }
    ] },
    { id: "nvidia-witcher3-path-tracing", category: "engine", subcategory: "图形技术", title: "《巫师3 重制版》新增路径追踪 + DLSS 4.5 光线重建：老游戏的技术天花板再抬高", summary: "NVIDIA 与 CD PROJEKT RED 合作：为《巫师3：狂猎——重制版》免费更新路径追踪与 DLSS 4.5 Ray Reconstruction，开启路径追踪与 Ultra+ 预设自动激活 DLSS 光线重建。", source: "NVIDIA GeForce 官方", date: "2026-09-29", url: "https://www.nvidia.com/en-us/geforce/news/witcher-3-wild-hunt-remastered-path-tracing-dlss-4-5-ray-reconstruction/", image: "https://www.nvidia.com/content/dam/en-zz/nvidiaweb/geforce/news/witcher-3-wild-hunt-remastered-path-tracing-dlss-4-5-ray-reconstruction/witcher-3-wild-hunt-remastered-path-tracing-dlss-4-5-ray-reconstruction-ogimage.jpg", badge: "图形技术", badgeType: "engine", readTime: "5 分钟", hotScore: 81, tags: ["NVIDIA", "路径追踪", "DLSS 4.5", "巫师3"], content: [
      { title: "技术要点", type: "list", items: ["重制版免费更新路径追踪与 DLSS 4.5 光线重建；", "开启路径追踪或 Ultra+ 预设时自动激活 DLSS Ray Reconstruction；", "同期多款新作（Gears E-Day、AION 2 等）加入 DLSS 4.5 阵容。"] },
      { title: "笔者观察", type: "text", text: "注意这条与上面光照争议补丁是同一款游戏的两个战场：官方一边用路径追踪立『重制的技术诚意』，一边用补丁修『改动的接受度』——技术上限和用户接受度要分开管理。这条组合拳值得写进你的重制/升级项目复盘模板。参考来源：NVIDIA GeForce 官方。" }
    ] },
    { id: "godot-4-8-dev6", category: "engine", subcategory: "版本动态", title: "Godot 4.8 dev6 快照发布：macOS 与 Android 专门热修复", summary: "Godot 官方发布 4.8 开发快照第 6 版（9 月 15 日）：针对性修复 macOS 与 Android 平台问题——4.8 月内特性冻结前的收尾阶段，移动端开发者值得关注。", source: "Godot Engine 官方博客", date: "2026-09-15", url: "https://godotengine.org/article/dev-snapshot-godot-4-8-dev-6/", image: "https://godotengine.org/storage/blog/covers/dev-snapshot-godot-4-8-dev-6.jpg", badge: "版本动态", badgeType: "engine", readTime: "3 分钟", hotScore: 70, tags: ["Godot", "4.8", "移动端", "开发快照"], content: [
      { title: "版本要点", type: "list", items: ["Godot 4.8 dev6 于 9 月 15 日发布；", "重点修复 macOS 与 Android 平台问题；", "此前 dev7（9 月 29 日）已进入特性冻结。"] },
      { title: "笔者观察", type: "text", text: "看快照节奏能读出发布计划：dev6 修双平台热修 → dev7 特性冻结，说明 4.8 的正式版进入倒计时。用 Godot 做移动项目的团队，现在是把项目从 4.7 迁到 4.8 测试分支做回归验证的合适窗口。参考来源：Godot Engine 官方博客。" }
    ] },
    { id: "agent-reach-cli", category: "opensource", subcategory: "信息工具", title: "Agent-Reach：一条 CLI 让 AI 读遍 Twitter/Reddit/YouTube/B站，88k star", summary: "Panniantong/Agent-Reach 今日热榜 +696（总 star 8.8 万+）：给 AI agent 装上『看全网的眼睛』——用一条 CLI 免费读取与搜索 Twitter、Reddit、YouTube、GitHub、B站、小红书，零 API 费用。", source: "GitHub: Panniantong/Agent-Reach", date: "2026-10-03", url: "https://github.com/Panniantong/Agent-Reach", image: "https://opengraph.githubassets.com/1/Panniantong/Agent-Reach", badge: "信息工具", badgeType: "hot", readTime: "4 分钟", hotScore: 78, tags: ["GitHub", "AI Agent", "信息聚合", "开源"], content: [
      { title: "项目看点", type: "list", items: ["统一 CLI 读取与搜索六大平台内容；", "零 API 费用，为智能体调用设计；", "今日新增 star 696，总 star 8.8 万+。"] },
      { title: "笔者观察", type: "text", text: "做竞品观察、社区运营甚至毕设调研，都可以把这个接到你的 agent 工作流里——让 AI 每天替你盯一遍各平台的关键词。顺手提醒：抓取类工具注意平台条款边界，商用前看清许可证。参考来源：GitHub。" }
    ] },
    { id: "caveman-token-saver", category: "opensource", subcategory: "上下文优化", title: "caveman：让编码 agent『像原始人一样说话』，砍掉 65% token 消耗", summary: "JuliusBrussee/caveman（总 star 10.9 万+）：用一套技能与代理配置让编码 agent 用极简『原始人语』输出——token 消耗直降 65%，省钱省上下文的花活背后是真问题。", source: "GitHub: JuliusBrussee/caveman", date: "2026-10-03", url: "https://github.com/JuliusBrussee/caveman", image: "https://opengraph.githubassets.com/1/JuliusBrussee/caveman", badge: "上下文优化", badgeType: "hot", readTime: "4 分钟", hotScore: 76, tags: ["GitHub", "AI Agent", "Token 优化", "开源"], content: [
      { title: "项目看点", type: "list", items: ["技能 + 代理双模式，强制 agent 极简输出；", "token 消耗降低 65%；", "总 star 10.9 万+，今日热榜在列。"] },
      { title: "笔者观察", type: "text", text: "它荒诞的表象下是一个严肃结论：LLM 的大量 token 花在『礼貌与重复』上，不是花在思考上。你的 agent 提示词里删掉客套话、要求先给结论，就能白捡 30% 的上下文预算——不用装 caveman 也能学到它的核心。参考来源：GitHub。" }
    ] },
    { id: "impeccable-design-language", category: "opensource", subcategory: "设计系统", title: "impeccable：给 AI 工具链补上『设计品味』的开源设计语言，74k star", summary: "pbakaus/impeccable（今日 +722，总 star 7.4 万+）：一套让 AI harness 在设计上更出色的设计语言——AI 生成界面的『审美债』有了开源解法。", source: "GitHub: pbakaus/impeccable", date: "2026-10-03", url: "https://github.com/pbakaus/impeccable", image: "https://opengraph.githubassets.com/1/pbakaus/impeccable", badge: "设计系统", badgeType: "hot", readTime: "4 分钟", hotScore: 75, tags: ["GitHub", "设计系统", "AI 生成 UI", "开源"], content: [
      { title: "项目看点", type: "list", items: ["面向 AI harness 的设计语言与规范；", "目标：AI 生成界面从『能用』到『耐看』；", "今日新增 star 722，总 star 7.4 万+。"] },
      { title: "笔者观察", type: "text", text: "AI 写代码已过关，写『好看』还在补课——impeccable 本质上是把设计师的隐性判断显性化成规则。做游戏 UI 工具或编辑器界面的团队可以直接抄它的思路：把你的美术规范写成 AI 可读的约束文件，比截图喂 sample 稳定得多。参考来源：GitHub。" }
    ] },
    { id: "google-agent-skills", category: "opensource", subcategory: "官方技能库", title: "Google 官方开源 Agent Skills 仓库：产品与技术技能集，2 万 star", summary: "google/skills（总 star 2 万+）：Google 官方维护的 Agent Skills 集合——覆盖 Google 产品与技术场景的可复用智能体技能，官方下场给生态发『标准件』。", source: "GitHub: google/skills", date: "2026-10-03", url: "https://github.com/google/skills", image: "https://opengraph.githubassets.com/1/google/skills", badge: "官方技能库", badgeType: "hot", readTime: "4 分钟", hotScore: 74, tags: ["GitHub", "Google", "Agent Skills", "官方开源"], content: [
      { title: "项目看点", type: "list", items: ["Google 官方维护的智能体技能仓库；", "覆盖 Google 产品与技术相关场景；", "总 star 2 万+，技能编写范式可参考。"] },
      { title: "笔者观察", type: "text", text: "大厂开源『技能』而不是『模型』，说明 agent 竞争已经打到编排层。想学 skills 写法的同学把它的目录当范本读：一个技能 = 一份清晰的意图声明 + 边界 + 工具映射，这个结构移植到游戏开发 agent（自动出表、自动校验配置）完全通用。参考来源：GitHub。" }
    ] },
    { id: "effect-ts-framework", category: "opensource", subcategory: "开发框架", title: "Effect-TS：用 TypeScript 构建生产级应用的『效果系统』框架", summary: "Effect-TS/effect（总 star 1.6 万+，今日 +80）：TypeScript 生态的 Effect 系统框架——把错误处理、并发、重试、可观测性全部类型化，服务端与工具链工程化的重型武器。", source: "GitHub: Effect-TS/effect", date: "2026-10-03", url: "https://github.com/Effect-TS/effect", image: "https://opengraph.githubassets.com/1/Effect-TS/effect", badge: "开发框架", badgeType: "hot", readTime: "5 分钟", hotScore: 70, tags: ["GitHub", "TypeScript", "服务端", "函数式"], content: [
      { title: "项目看点", type: "list", items: ["TypeScript 的生产级 Effect 系统框架；", "错误、并发、重试、资源管理全类型化；", "总 star 1.6 万+，社区活跃。"] },
      { title: "笔者观察", type: "text", text: "游戏服务端工具链、GM 后台、数据管线这类『不像游戏但天天写』的 TS 工程，正是 Effect 的主场：它把『出错路径』从注释里拉回类型系统。学习曲线陡是真的，但写给团队长期维护的服务，这笔投资划算。参考来源：GitHub。" }
    ] },
    { id: "learnopengl-classic", category: "tutorials", subcategory: "图形入门", title: "LearnOpenGL：图形学自学的黄金标准，从第一个三角形到 PBR", summary: "LearnOpenGL 是 OpenGL 学习事实上的标准教材：窗口、着色器、纹理、光照、PBR 一步步来，中文社区翻译完善——想做图形/引擎方向的从这条起步不会错。", source: "learnopengl.com", date: "2026-10-03", url: "https://learnopengl.com/", image: "", badge: "图形入门", badgeType: "tutorial", readTime: "长期自学", hotScore: 80, tags: ["OpenGL", "图形学", "PBR", "免费"], content: [
      { title: "资源要点", type: "list", items: ["从零到 PBR/IK/实例化渲染的完整路径；", "有高质量的中文翻译版本；", "配套代码全部开源可跑。"] },
      { title: "笔者观察", type: "text", text: "它的厉害之处在于『每章都给可运行的正反馈』——学完一节屏幕上就有可见变化。想走 TA 或引擎岗的同学，国庆假期够把前六章啃完，剩下的光照与 PBR 部分开学继续，进度刚刚好。参考来源：learnopengl.com。" }
    ] },
    { id: "gamemath-3d-primer", category: "tutorials", subcategory: "游戏数学", title: "《3D Math Primer》官方免费在线版：游戏数学大部头原文全开放", summary: "经典教材《3D Math Primer for Graphics and Game Development》在 gamemath.com 提供官方免费在线阅读：向量、矩阵、四元数到空间变换——游戏数学最友好的大部头。", source: "gamemath.com", date: "2026-10-03", url: "https://gamemath.com/", image: "", badge: "游戏数学", badgeType: "tutorial", readTime: "全书开放", hotScore: 77, tags: ["游戏数学", "线性代数", "四元数", "免费"], content: [
      { title: "资源要点", type: "list", items: ["官方免费开放全文在线阅读；", "覆盖向量/矩阵/四元数/欧拉角与空间变换；", "面向图形与游戏开发双重场景写作。"] },
      { title: "笔者观察", type: "text", text: "游戏数学的坑不在『不会算』而在『不知道为什么要这么变换』——这本书最值钱的是把每个数学工具对应的工程场景讲清楚。配合 Freya 的样条视频（本周简报已收）一起服用，理论与直觉一次补齐。参考来源：gamemath.com。" }
    ] },
    { id: "webgl-fundamentals", category: "tutorials", subcategory: "Web图形", title: "WebGL Fundamentals：从零理解浏览器 3D 渲染的免费互动教材", summary: "WebGL Fundamentals 用一系列可交互的课程把浏览器 3D 渲染讲透：缓冲区、矩阵、着色器、纹理——不需要装任何东西，打开浏览器就能学，Web 游戏方向的基础教材。", source: "webglfundamentals.org", date: "2026-10-03", url: "https://webglfundamentals.org/", image: "https://webglfundamentals.org/webgl/lessons/resources/webglfundamentals.jpg", badge: "Web图形", badgeType: "tutorial", readTime: "自学", hotScore: 74, tags: ["WebGL", "图形学", "JavaScript", "免费"], content: [
      { title: "资源要点", type: "list", items: ["全部课程浏览器内可运行、可改参数；", "从原始 WebGL 到矩阵变换与纹理逐层递进；", "同站还有 WebGL2 与 Three.js 系列姊妹篇。"] },
      { title: "笔者观察", type: "text", text: "和 MDN 那套（9/30 收过）互补：MDN 教你怎么做游戏，这套教 WebGL 底下发生了什么。看懂『三角形是怎么画上屏的』，再看任何引擎的渲染文档都会有熟悉感——底层的投资回报周期很长但很稳。参考来源：webglfundamentals.org。" }
    ] },
    { id: "lazyfoo-sdl-tutorials", category: "tutorials", subcategory: "C++实战", title: "Lazy Foo' SDL 教程：C++ 跨平台游戏开发的 40+ 讲免费阶梯", summary: "Lazy Foo' Productions 的 SDL 教程是 C++ 游戏开发最长青的免费阶梯：从窗口与输入到定时器、瓦片地图、线程，40+ 讲全免费——想做 C++ 游戏编程的朴素起点。", source: "lazyfoo.net", date: "2026-10-03", url: "https://lazyfoo.net/tutorials/SDL/index.php", image: "", badge: "C++实战", badgeType: "tutorial", readTime: "40+ 讲", hotScore: 72, tags: ["SDL", "C++", "游戏开发", "免费"], content: [
      { title: "资源要点", type: "list", items: ["SDL2 官方推荐的社区教程之一；", "从 Hello SDL 到多线程与瓦片地图 40+ 讲；", "每讲独立成课，代码可直接编译运行。"] },
      { title: "笔者观察", type: "text", text: "引擎用多了容易忘了游戏循环长什么样——SDL 教程的价值就是让你手写一遍事件循环、双缓冲和帧率控制。校招面试『讲讲你的游戏循环』这个问题，自己写过一遍和只用引擎的回答差距明显。参考来源：lazyfoo.net。" }
    ] },
    { id: "invent-with-python-pygame", category: "tutorials", subcategory: "Python实战", title: "《Making Games with Python & Pygame》免费全书：第一周就能跑出小游戏", summary: "Al Sweigart 的经典免费书《Making Games with Python & Pygame》提供在线全文：记忆翻牌、贪吃蛇、推箱子等十几个完整小游戏源码逐行讲解——编程零基础进游戏方向的最短路径之一。", source: "inventwithpython.com", date: "2026-10-03", url: "https://inventwithpython.com/pygame/", image: "", badge: "Python实战", badgeType: "tutorial", readTime: "全书免费", hotScore: 70, tags: ["Python", "Pygame", "入门", "免费"], content: [
      { title: "资源要点", type: "list", items: ["官方在线免费阅读，源码全部可下载；", "十几个完整小游戏从零讲到尾；", "作者另有 Invent Your Own Computer Games 等系列。"] },
      { title: "笔者观察", type: "text", text: "给非程序专业但想做游戏的同学（策划、美术转技术）首推这本：Pygame 的 API 面足够小，两周能摸完，剩下时间全花在『做游戏』本身。它的目标不是教 Python，是让你尽快拥有一个能给别人玩的成品。参考来源：inventwithpython.com。" }
    ] },
    { id: "gemini-4-argon", category: "ai", subcategory: "大模型", title: "Google DeepMind 发布 Gemini 4 Argon：『我们下一个前沿智能时代』", summary: "Google DeepMind 官方博客发布 Gemini 4 Argon 专文（9 月 30 日），标题定调『我们下一个前沿智能时代』——继 9 月下旬确认 Gemini 4 进入后训练后，官方首次公开以 Gemini 4 命名的旗舰模型文章。", source: "Google DeepMind 官方博客", date: "2026-09-30", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/", image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/g4_30-09-26_key-art_blog.width-1300.png", badge: "大模型", badgeType: "ai", readTime: "6 分钟", hotScore: 88, tags: ["Google", "Gemini 4", "大模型", "DeepMind"], content: [
      { title: "动态要点", type: "list", items: ["DeepMind 官方博客发布 Gemini 4 Argon 文章（9/30）；", "此前 9 月 24 日官方口径为『Gemini 4 进入后训练早期阶段』；", "模型能力细节以官方博客与后续技术报告为准。"] },
      { title: "笔者观察", type: "text", text: "把时间线排一下：9/24 确认后训练 → 9/29 OpenAI 放 GPT-6.1 Sol → 9/30 谷歌直接以 Gemini 4 Argon 亮相，头部两家的发布窗口咬得越来越近。对开发者，先别急着站队——等它的 Agent/多模态 API 落进工具链再评估迁移成本。参考来源：Google DeepMind 官方博客。" }
    ] },
    { id: "gemini-agentic-video", category: "ai", subcategory: "多模态", title: "Gemini 推出智能体式视频理解：动态检索视频片段，token 省 88%、成本降 66%", summary: "Google 为 Gemini 3.7 Flash / 3.6 Flash / 3.5 Flash-Lite 推出智能体式视频理解（9 月 1 日）：模型可动态搜索与检视视频片段，token 消耗最多降低 88%、成本降低 66%，准确率反而提升最多 7%。", source: "Google 官方博客", date: "2026-09-01", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/", image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/agentic-video___keyword__blog-header.width-1300.png", badge: "多模态", badgeType: "ai", readTime: "5 分钟", hotScore: 79, tags: ["Gemini", "视频理解", "多模态", "AI Agent"], content: [
      { title: "技术要点", type: "list", items: ["面向 Gemini 3.7 Flash / 3.6 Flash / 3.5 Flash-Lite 推出；", "智能体动态搜索并检视视频关键片段，而非吞全片；", "token 最多省 88%，成本最多降 66%，准确率提升最多 7%。"] },
      { title: "笔者观察", type: "text", text: "『让模型学会快进』听起来朴素，但省 88% token 的关键在检索策略而不是模型变大——这类工程化优化对预算紧张的团队才是真福音。游戏侧能想到的应用：自动 QA 看录像找 bug、直播切片、玩家行为分析管线，都值得拿这个 API 试。参考来源：Google 官方博客。" }
    ] },
    { id: "deepmind-games-ai-15-years", category: "ai", subcategory: "游戏AI", title: "DeepMind 回顾 15 年游戏 AI 研究之路：从 Atari 到 EVE Online 的持久开放世界", summary: "Google DeepMind 发布专文（8 月 21 日）回顾 15 年以游戏驱动的 AI 研究：从 Atari、AlphaGo 到 SIMA，并宣布与 EVE Online 开发商 Fenris Creations 深度合作，在持久开放世界中研究持续学习、长期记忆与多智能体协作。", source: "Google DeepMind 官方博客", date: "2026-08-21", url: "https://deepmind.google/blog/from-atari-to-eve-online-building-on-15-years-of-ai-research-in-games/", image: "", badge: "游戏AI", badgeType: "ai", readTime: "8 分钟", hotScore: 76, tags: ["DeepMind", "游戏AI", "SIMA", "EVE Online"], content: [
      { title: "文章要点", type: "list", items: ["回顾 Atari → AlphaGo → SIMA 的 15 年游戏 AI 路线；", "与 EVE Online 开发商 Fenris Creations 达成深度合作；", "研究方向：持久世界中的持续学习、长期记忆、长程规划与多智能体协作；", "目标：创造全新游戏体验，并把所学迁移到现实问题。"] },
      { title: "笔者观察", type: "text", text: "这条建议精读原文而不是只看摘要——它是理解『游戏为什么是 AI 研究的完美沙盒』的最系统叙述：规则明确、反馈密集、成本可控，还自带玩家社群。做 NPC 智能方向的同学注意 EVE 合作这个信号：持久世界 + 长期记忆，正是开放世界 NPC 革命缺的两块拼图。参考来源：Google DeepMind 官方博客。" }
    ] },
    { id: "booom-2026-autumn-running", category: "contest", subcategory: "国内Jam", title: "BOOOM 2026 秋季场进入最后一周：10 月 10 日截稿，21 天限时主题创作", summary: "机核暴造社区 BOOOM 2026 秋季场正在举行：比赛期 9 月 18 日至 10 月 10 日——21 天限时主题创作还剩最后一周，赶不上本届的可以先报名围观试玩节，备战下一届。", source: "机核 GCORES 暴造社区", date: "2026-10-03", url: "http://site.gcores.com/booom2026/", image: "", badge: "截稿倒计时", badgeType: "event", readTime: "4 分钟", hotScore: 82, tags: ["BOOOM", "机核", "GameJam", "暴造"], content: [
      { title: "赛程要点", type: "list", items: ["BOOOM 2026 秋季场比赛期：9 月 18 日 - 10 月 10 日；", "21 天限时 + 限定主题，个人或组队均可；", "10 月 10 日截稿，后续进入试玩评选阶段；", "官方活动页可查全部流程与提交说明。"] },
      { title: "笔者观察", type: "text", text: "还剩一周，现在入场做完整新作品来不及了——但『最后一周冲刺』本身就是最好的 Jam 预演：找一款半成品，限时一周把它砍到能交付的最小版本，练的就是砍需求的手。赶不上交稿就去看已提交作品，把试玩反馈的写法学到手。参考来源：机核 GCORES。" }
    ] },
    { id: "indiecade-festival", category: "contest", subcategory: "国际节展", title: "IndieCade：国际独立游戏节的常年征集与展映入口", summary: "IndieCade 是国际独立游戏节（international juried festival）：以评审制著称，常年开放作品征集与展映通道——实验性与艺术性作品的最佳国际舞台之一，官网可查历届与征稿动态。", source: "IndieCade 官网", date: "2026-10-03", url: "https://www.indiecade.com/", image: "", badge: "国际节展", badgeType: "event", readTime: "4 分钟", hotScore: 74, tags: ["IndieCade", "独立游戏", "国际节展", "实验游戏"], content: [
      { title: "节展要点", type: "list", items: ["IndieCade 为国际评审制独立游戏节；", "以实验性、艺术性作品的包容度著称；", "官网常年维护征集、展映与历届档案。"] },
      { title: "笔者观察", type: "text", text: "如果你的毕设是『不太好归类』的作品——体感装置、纸笔混合、无 fail 状态的慢游戏——IndieCade 这类节展比商业向大赛更友好：它的评审标准里『独特』本身就是得分项。做怪东西不是缺点，是要找对评委。参考来源：IndieCade 官网。" }
    ] },
    { id: "igf-2027-awards", category: "contest", subcategory: "独立游戏大赛", title: "IGF 2027：提交已截止，3 月 GDC 游戏节期间颁奖——蹲入围名单正当时", summary: "Independent Games Festival（IGF）2027 届奖项提交已关闭：展馆与颁奖典礼定于 2027 年 3 月 2-4 日 GDC Festival of Gaming 期间举行——独立游戏的『奥斯卡』进入评审期，入围名单值得蹲守。", source: "IGF 官网", date: "2026-10-03", url: "https://igf.com/", image: "https://knect365.imgix.net/uploads/IGF-Website-SEO-16x9-aecf818e767eebaf5c24928067266ced.png?auto=format&fit=max&w=400", badge: "赛程日历", badgeType: "event", readTime: "4 分钟", hotScore: 78, tags: ["IGF", "GDC", "独立游戏", "大赛"], content: [
      { title: "赛程要点", type: "list", items: ["IGF 2027 提交已截止，评审进行中；", "展馆 2027 年 3 月 2-4 日，颁奖典礼 3 月 3 日；", "均在 GDC Festival of Gaming（旧金山）期间举办。"] },
      { title: "笔者观察", type: "text", text: "IGF 的价值曲线在『入围名单公布』那一刻最陡：历届入围作品是独立游戏设计趋势最准的年度切片，而且全部有试玩可找。给自己定个日程：明年 1 月入围名单出来后，花一个周末把提名作品全玩一遍并各写 100 字设计笔记——这比看十篇年度总结有营养。参考来源：IGF 官网。" }
    ] }
  ]
}
