/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-18
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-18",
    weekday: "星期五",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-18 08:30",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "🎬 TGS 2026开幕！小岛秀夫宣布Bill Skarsgård（小丑Pennywise演员）主演Physint，感谢Xbox支持",
      "🔧 Unity连发两大官方AI插件：OpenAI Codex版（9/17）+ Claude Code版（9/10），第一方集成",
      "📱 团结引擎1.9.0发布：全局动态实时光照支持移动端，并行渲染+自适应光照探针",
      "🎮 小岛秀夫《OD》音频录制恢复：SAG-AFTRA罢工结束，Sophia Lillis/Hunter Schafer表演已启动",
      "⚠️ Hyper Light Drifter开发商Heart Machine大裁员，发行商撤资导致团队几乎解散"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9/1正式发布·6000.0.84f1 LTS补丁", badge: "最新LTS", color: "indigo" },
      { name: "Unity 7", type: "unity", status: "12月Beta·2027 Q1正式·CoreCLR+.NET 10", badge: "下一代", color: "blue" },
      { name: "团结引擎 1.9.0", type: "tuanjie", status: "全局动态光照上移动端·并行渲染", badge: "移动端优化", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix维护·社区呼吁5.9稳定版", badge: "UE5工业化", color: "purple" },
      { name: "Godot 4.8 dev6", type: "godot", status: "9/15发布·macOS/Android Hotfix", badge: "开发版", color: "emerald" },
      { name: "Bevy 0.17.3", type: "godot", status: "Rust ECS引擎·Event/Message拆分", badge: "Rust新秀", color: "pink" }
    ]
  },
  hero: {
    id: "hero-tgs2026-bill-skarsgard-physint",
    category: "industry",
    categoryName: "行业热点 · 头条深度",
    tag: "🎬 TGS 2026",
    title: "TGS 2026开幕：小岛秀夫宣布Bill Skarsgård主演Physint，公开感谢Xbox支持，《OD》音频录制同步恢复",
    summary: "2026东京电玩展（TGS 2026）于9月17日正式开幕，展期延长至史上最长5天（9/17-9/21）。小岛秀夫在展会上正式宣布，瑞典演员Bill Skarsgård（《小丑回魂》Pennywise扮演者）将主演其全新谍报动作IP《Physint》。小岛同时公开感谢Xbox对其创作愿景的支持。此外，小岛秀夫还分享了《OD》的开发进展：受SAG-AFTRA罢工影响暂停的表演捕捉和ADR对白录音已恢复，Sophia Lillis和Hunter Schafer的表演正在按计划推进。这是小岛工作室与索尼长期合作关系转向Xbox后的首次大规模公开亮相。",
    image: "",
    source: "Game Informer / 凤凰网科技 / MasGamers",
    date: "2026-09-17",
    url: "https://gameinformer.com/news",
    readTime: "4 分钟深度",
    hotScore: 97,
    tags: ["TGS 2026", "小岛秀夫", "Physint", "Bill Skarsgård", "Xbox", "OD", "东京电玩展"],
    content: [
      {
        title: "TGS 2026 关键信息",
        type: "list",
        items: [
          "9月17日开幕，展期5天（史上最长）；",
          "幕张Messe会场，1-11号馆；",
          "9/17-18商务日，9/19-21公众日；",
          "CAPCOM SPOTLIGHT 9/16已举行；",
          "LOLLIPOP CHAINSAW新企划9/19公布；",
          "小岛秀夫Physint主演公布；",
          "《OD》音频录制恢复。"
        ]
      },
      {
        title: "行业分析",
        type: "text",
        text: "TGS 2026在PS5、Switch 2和Xbox三主机时代的关键节点开幕，小岛秀夫从PlayStation转向Xbox的Physint是本届展会最受关注的新闻之一。Bill Skarsgård的加盟不仅提升了Physint的星味，也标志着小岛工作室在游戏电影化方向的持续探索。《OD》与Physint并行开发，加上Xbox对小岛工作室的全面支持，显示了微软在第一方收缩背景下，通过与顶级制作人合作来填补内容空白的战略。对游戏开发者而言，TGS 2026也释放了主机市场从独占内容向订阅+跨平台转型的信号。"
      }
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
    {
      id: "unity-official-codex-plugin",
      category: "engine",
      subcategory: "Unity AI",
      title: "Unity发布OpenAI Codex官方插件：编辑器内直接调用GPT-6 Astra生成C#脚本",
      summary: "Unity于9月17日正式发布针对OpenAI Codex的官方Unity插件，这是继9月10日发布Claude Code插件后的又一第一方AI集成。插件允许开发者在Unity编辑器内直接与OpenAI Codex交互，用自然语言描述需求即可生成功能完整的C#脚本和自动化工作流。该插件与GPT-6 Astra的发布同步推出，是Unity将前沿AI能力深度整合进核心开发生态的重要一步。此前Unity已在9月10日发布了Claude Code官方插件，现在同时支持两大AI编程平台。",
      source: "Inven Global / SevenLab",
      date: "2026-09-17",
      url: "https://labs.invenglobal.com/articles/26087/unity-releases-official-plugin-dedicated-to-openai-codex",
      image: "",
      badge: "Codex 插件",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 91,
      tags: ["Unity", "OpenAI Codex", "GPT-6 Astra", "官方插件", "C#脚本", "AI编程", "第一方集成"],
      content: [
        {
          title: "插件要点",
          type: "list",
          items: [
            "9月17日正式发布；",
            "OpenAI Codex专用官方Unity插件；",
            "编辑器内直接调用Codex；",
            "自然语言生成C#脚本；",
            "自动化工作流；",
            "与GPT-6 Astra发布同步；",
            "9/10已发Claude Code插件。"
          ]
        },
        {
          title: "战略意义",
          type: "text",
          text: "Unity在一周内连发Claude Code和OpenAI Codex两大官方插件，标志着Unity正式将AI编程工具作为开发生态的核心基础设施。这不仅简化了开发者的AI工具集成流程，也反映了Unity在AI时代的平台战略——通过第一方插件锁定开发者工作流，同时保持与多家AI厂商的开放合作。对开发者而言，现在可以直接在Unity编辑器内使用最前沿的AI编程助手，无需手动配置API和环境。"
        }
      ]
    },
    {
      id: "unity-claude-code-plugin",
      category: "ai",
      subcategory: "Unity AI",
      title: "Unity官方Claude Code插件上线：一键安装零配置，第一方支持Anthropic托管目录",
      summary: "Unity于9月10日正式上线官方Claude Code插件，这是Unity第一个第一方AI编程集成。插件直接在Anthropic托管目录中可用，开发者一键安装即可将Unity项目接入Claude Code的AI工作流。Unity官方表示，这一集成是为了让大量已经在使用Claude Code的开发者能够更顺畅地将Unity纳入AI辅助开发流程。插件由Unity官方维护和支持，无需额外配置。这是Unity在AI辅助游戏开发领域的重要布局。",
      source: "Unity Releases Discussions",
      date: "2026-09-10",
      url: "https://unityreleases.com/discussions",
      image: "",
      badge: "Claude Code",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["Unity", "Claude Code", "Anthropic", "官方插件", "AI工作流", "一键安装"],
      content: [
        {
          title: "插件要点",
          type: "list",
          items: [
            "9月10日正式上线；",
            "Unity第一个第一方AI编程插件；",
            "Anthropic托管目录直接可用；",
            "一键安装零配置；",
            "Unity官方维护支持；",
            "将Unity纳入Claude Code工作流；",
            "服务已用Claude Code的开发者。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Unity官方Claude Code插件9/10上线，一键安装零配置。这是Unity第一个第一方AI编程集成，让已用Claude Code的开发者直接将Unity项目接入AI工作流。一周后又发Codex插件，双平台并进。"
        }
      ]
    },
    {
      id: "tuanjie-190-release",
      category: "engine",
      subcategory: "团结引擎",
      title: "团结引擎1.9.0发布：全局动态实时光照支持移动端，并行渲染+自适应光照探针上线",
      summary: "Unity中国宣布团结引擎1.9.0正式发布。新版本的核心亮点是全局动态实时光照（Global Dynamic Real-time Lighting）终于支持移动端平台，这意味着移动游戏也能获得接近PC/主机级别的实时光照效果。此外还新增了并行渲染（Parallel Rendering）和自适应光照探针（Adaptive Light Probes）功能，进一步提升移动端渲染性能和画质。团结引擎1.9.0在微信小游戏、移动端游戏开发方向持续深化优化。",
      source: "Unity官方开发者社区",
      date: "2026-09-15",
      url: "https://developer.unity.cn/",
      image: "",
      badge: "1.9.0",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 86,
      tags: ["团结引擎1.9.0", "全局动态光照", "移动端", "并行渲染", "自适应光照探针", "微信小游戏"],
      content: [
        {
          title: "1.9.0 新特性",
          type: "list",
          items: [
            "全局动态实时光照支持移动端；",
            "移动端接近PC级实时光照；",
            "并行渲染（Parallel Rendering）；",
            "自适应光照探针（Adaptive Probes）；",
            "提升移动端渲染性能和画质；",
            "微信小游戏方向持续优化；",
            "9月15日发布。"
          ]
        },
        {
          title: "技术意义",
          type: "text",
          text: "全局动态实时光照支持移动端是团结引擎在移动端渲染技术上的重要突破——此前移动端受限于GPU性能，通常使用烘焙光照或简化的实时方案。团结引擎1.9.0通过并行渲染和自适应探针等优化，在移动端实现了动态实时光照，这对需要动态光照效果的移动游戏（如开放世界、昼夜循环）具有重要意义，也增强了团结引擎在微信小游戏和手游市场的竞争力。"
        }
      ]
    },
    {
      id: "unity-lts-6000-84f1",
      category: "engine",
      subcategory: "Unity LTS",
      title: "Unity 6000.0.84f1 LTS补丁发布：21项修复，升级风险评分+28",
      summary: "Unity于9月16日发布6000.0.84f1 LTS维护版本，Changeset为78ab6fc243d5，包含21项修复。根据Unity Releases社区的评分，该版本的升级风险评分为+28（Net cleanup +16，Live debt +9），在LTS队列（325个版本）中属于中等偏稳定水平。这是Unity 6 LTS分支的常规维护更新，建议生产项目按节奏升级。",
      source: "Unity Releases",
      date: "2026-09-16",
      url: "https://unityreleases.com/releases/6000.0.84f1?lanes=fix",
      image: "",
      badge: "LTS 补丁",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["Unity 6000.0.84f1", "LTS", "21项修复", "升级风险+28", "维护版本"],
      content: [
        {
          title: "版本信息",
          type: "list",
          items: [
            "6000.0.84f1发布于9月16日；",
            "Changeset 78ab6fc243d5；",
            "21项修复；",
            "升级风险评分+28；",
            "Net cleanup +16；",
            "Live debt +9；",
            "LTS队列325个版本。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Unity 6000.0.84f1 LTS补丁9/16发布，21项修复，升级风险中等。建议生产项目按节奏升级，关注Net cleanup和Live debt评分变化。"
        }
      ]
    },
    {
      id: "kojima-od-audio-resume",
      category: "industry",
      subcategory: "小岛秀夫",
      title: "小岛秀夫《OD》音频录制恢复：SAG-AFTRA罢工结束，Sophia Lillis和Hunter Schafer表演进行中",
      summary: "小岛秀夫在TGS 2026期间分享了《OD》的最新开发进展。受美国演员工会（SAG-AFTRA）罢工影响，《OD》的表演捕捉和ADR（自动对白替换）录音一度暂停。目前相关工作已恢复，项目正按原定计划推进。小岛秀夫表示演员Sophia Lillis和Hunter Schafer以及开发团队带来了强烈且出色的表演，期待玩家最终看到这些内容。《OD》由小岛秀夫与Jordan Peele和A24合作开发，是恐怖游戏领域的创新项目。",
      source: "凤凰网科技 / IT之家",
      date: "2026-09-18",
      url: "https://tech.ifeng.com/c/8wVlIFkDjBh",
      image: "",
      badge: "OD 进展",
      badgeType: "hot",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["OD", "小岛秀夫", "SAG-AFTRA", "Sophia Lillis", "Hunter Schafer", "Jordan Peele", "A24"],
      content: [
        {
          title: "OD 进展要点",
          type: "list",
          items: [
            "SAG-AFTRA罢工结束后恢复；",
            "表演捕捉和ADR录音重启；",
            "按原定计划推进；",
            "Sophia Lillis和Hunter Schafer参演；",
            "小岛秀夫称赞表演强烈出色；",
            "与Jordan Peele和A24合作；",
            "恐怖游戏领域创新项目。"
          ]
        },
        {
          title: "行业意义",
          type: "text",
          text: "《OD》是小岛秀夫在恐怖游戏领域的全新尝试，与电影制作人Jordan Peele和A24的合作使其备受关注。SAG-AFTRA罢工对游戏行业表演捕捉的影响在2026年持续显现，《OD》的录音恢复显示了罢工结束后行业恢复正常的节奏。这也是小岛工作室同时推进Physint（Xbox）和OD（Xbox）两个项目的证据。"
        }
      ]
    },
    {
      id: "heart-machine-layoffs",
      category: "industry",
      subcategory: "裁员",
      title: "《Hyper Light Drifter》开发商Heart Machine大裁员：发行商撤资，团队几乎解散",
      summary: "据Game Informer 9月17日报道，《Hyper Light Drifter》和《Solar Ash》开发商Heart Machine正在进行大规模裁员，几乎裁掉了全部团队成员。原因是一家未公开名称的发行商突然退出了其最新项目的发行协议。Heart Machine由Alx Preston创立，以其独特的视觉风格和动作RPG设计著称，是独立游戏领域的标志性工作室。这一事件再次凸显了中型独立工作室在发行商依赖模式下的脆弱性——发行商的单方退出可能直接导致工作室停摆。",
      source: "Game Informer",
      date: "2026-09-17",
      url: "https://gameinformer.com/",
      image: "",
      badge: "工作室裁员",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 84,
      tags: ["Heart Machine", "Hyper Light Drifter", "裁员", "发行商撤资", "独立游戏", "Alx Preston"],
      content: [
        {
          title: "事件要点",
          type: "list",
          items: [
            "Heart Machine几乎全员裁员；",
            "未公开名称的发行商撤资；",
            "最新项目发行协议终止；",
            "代表作：Hyper Light Drifter/Solar Ash；",
            "独立游戏标志性工作室；",
            "发行商依赖模式的风险；",
            "Alx Preston创立。"
          ]
        },
        {
          title: "行业警示",
          type: "text",
          text: "Heart Machine的裁员是2026年独立游戏行业困境的又一例证——即使是有知名作品和良好口碑的工作室，也可能因为发行商的单方决定而陷入生存危机。这与微软Xbox裁员3200人、EA私有化后的重组形成对比：无论是大厂还是独立工作室，游戏行业2026年都在经历深度调整。对独立开发者而言，这提醒了需要谨慎选择发行合作伙伴，以及做好财务风险管理。"
        }
      ]
    },
    {
      id: "ffvii-revolution-state-of-play",
      category: "games",
      subcategory: "State of Play",
      title: "Final Fantasy Resonance试玩版上线：Sephiroth登场，10月22日发售，Demo存档可继承",
      summary: "在9月17日的PlayStation State of Play直播中，Square Enix公布了《Final Fantasy Resonance》的全新预告片，确认Sephiroth将在游戏中登场。游戏将于10月22日发售，同时今天上线PS5免费试玩版，包含完整第一章，试玩版存档可继承至正式版。Square Enix在TGS 2026期间展示了该作的实机画面，包含过场动画和战斗系统。这是FF系列2026年最受期待的新作之一。",
      source: "PlayStation / Wccftech",
      date: "2026-09-17",
      url: "https://www.playstation.com/en-id/state-of-play/",
      image: "",
      badge: "FF 新作",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["Final Fantasy Resonance", "FF", "Sephiroth", "Square Enix", "10月22日", "PS5试玩", "State of Play"],
      content: [
        {
          title: "FF Resonance 信息",
          type: "list",
          items: [
            "10月22日发售；",
            "PS5试玩版当日上线；",
            "试玩版含完整第一章；",
            "Demo存档可继承正式版；",
            "Sephiroth确认登场；",
            "TGS 2026展示实机；",
            "FF系列2026年最受期待新作。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Square Enix在State of Play公布FF Resonance详情：Sephiroth登场，10/22发售，PS5试玩版含完整第一章且存档可继承。TGS 2026期间展示了过场动画和战斗系统。"
        }
      ]
    },
    {
      id: "eu-kids-act-tim-sweeney",
      category: "industry",
      subcategory: "政策监管",
      title: "欧盟发布Kids Act草案限制未成年人网游访问，Epic CEO Tim Sweeney猛烈批评",
      summary: "欧盟委员会于9月16日正式公布名为EU Kids Act的法律草案，可能使欧洲未成年人更难访问在线游戏。Epic Games CEO Tim Sweeney立即公开批评该法案，称其对下一代人类来说将是可怕的（This would be terrible for the next generation of humanity）。该法案草案引发了游戏行业对过度监管的担忧，可能影响在线游戏的设计、运营和市场准入。这是欧盟继数字服务法案（DSA）后对游戏行业的又一重大监管动作。",
      source: "GameWorldObserver",
      date: "2026-09-16",
      url: "https://gameworldobserver.com/",
      image: "",
      badge: "欧盟监管",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["EU Kids Act", "欧盟", "Tim Sweeney", "Epic Games", "未成年人保护", "游戏监管"],
      content: [
        {
          title: "政策要点",
          type: "list",
          items: [
            "欧盟委员会9/16公布草案；",
            "名为EU Kids Act；",
            "可能限制未成年人网游访问；",
            "Tim Sweeney公开批评；",
            "称对下一代人类可怕；",
            "继DSA后又一重大监管；",
            "影响游戏设计和运营。"
          ]
        },
        {
          title: "行业影响",
          type: "text",
          text: "EU Kids Act草案反映了全球游戏行业监管趋严的大趋势——从中国的防沉迷系统到欧盟的未成年人保护法案，游戏行业面临越来越复杂的合规要求。对游戏开发者而言，需要提前关注各地区的监管动态，尤其是涉及未成年人的在线游戏设计。Epic Games作为全球最大的游戏平台之一，其CEO的公开反对显示了行业与监管机构之间的紧张关系。"
        }
      ]
    },
    {
      id: "everplay-wardogs-stake",
      category: "industry",
      subcategory: "投资",
      title: "Everplay Group增持《战狗》开发商股份，游戏200万销量后资本加速进入",
      summary: "据GameWorldObserver报道，Everplay Group在《战狗》（Wardogs）取得成功后，增持了开发商的股份。这一投资发生在Wardogs抢先体验5天销量突破200万份、Steam在线峰值42.8万之后。Everplay Group的增持表明资本市场对这款现象级战术射击游戏的长期前景看好。这也反映了中型游戏开发商在取得商业突破后吸引资本注入的典型路径。",
      source: "GameWorldObserver",
      date: "2026-09-17",
      url: "https://gameworldobserver.com/",
      image: "",
      badge: "资本增持",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["Everplay Group", "战狗", "Wardogs", "增持股份", "200万销量", "资本进入"],
      content: [
        {
          title: "投资要点",
          type: "list",
          items: [
            "Everplay Group增持开发商股份；",
            "发生在Wardogs 200万销量后；",
            "Steam在线峰值42.8万；",
            "资本看好长期前景；",
            "中型开发商成功后融资；",
            "Bulkhead Interactive开发。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Everplay Group在Wardogs取得200万销量成功后增持开发商股份，反映资本市场对现象级独立游戏的长期看好，也是中型开发商商业突破后吸引资本的典型路径。"
        }
      ]
    },
    {
      id: "resident-evil-movie-96rt",
      category: "industry",
      subcategory: "影视改编",
      title: "新版《生化危机》电影烂番茄96%：史上评分最高游戏改编电影",
      summary: "由Zack Cregger执导的新版《生化危机》电影在烂番茄获得96%新鲜度，基于超过80篇影评。这使该片成为历史上评分最高的电子游戏改编电影，超越了此前的纪录保持者。新电影的成功标志着游戏改编电影进入了新的质量水平——从早期的B级片到如今获得影评界广泛认可的作品。这对游戏IP的跨媒介改编具有重要的标杆意义。",
      source: "Shazoo",
      date: "2026-09-17",
      url: "https://shazoo.ru/tags/419/games",
      image: "",
      badge: "影史最佳",
      badgeType: "event",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["生化危机", "Resident Evil", "电影", "烂番茄96%", "Zack Cregger", "游戏改编", "史上最佳"],
      content: [
        {
          title: "电影信息",
          type: "list",
          items: [
            "Zack Cregger执导；",
            "烂番茄96%新鲜度；",
            "超过80篇影评；",
            "史上评分最高游戏改编电影；",
            "超越此前纪录保持者；",
            "游戏IP跨媒介改编标杆。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "新版《生化危机》电影烂番茄96%，成为史上评分最高的游戏改编电影。Zack Cregger执导的成功标志着游戏改编电影从B级片到影评界认可的质量飞跃。"
        }
      ]
    },
    {
      id: "gta6-online-2027",
      category: "games",
      subcategory: "GTA VI",
      title: "GTA Online for GTA VI或2027年推出：Twitch CEO发言泄露R星计划",
      summary: "据LaPS4报道，Twitch CEO在公开场合的发言泄露了GTA Online for GTA VI可能于2027年推出的消息。虽然Rockstar尚未正式公布GTA VI的在线模式时间表，但Twitch CEO的言论暗示R星计划在2027年推出GTA VI专属的在线模式。GTA VI本身预计2026年底发售，在线模式通常会在单人模式发售后数月至一年内推出。这一消息引发了玩家社区对GTA VI在线内容的高度期待。",
      source: "LaPS4",
      date: "2026-09-17",
      url: "https://www.laps4.com/noticias/",
      image: "",
      badge: "GTA VI",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["GTA VI", "GTA Online", "2027", "Twitch CEO", "Rockstar", "泄露"],
      content: [
        {
          title: "消息要点",
          type: "list",
          items: [
            "Twitch CEO发言泄露；",
            "GTA Online for GTA VI或2027年推出；",
            "R星尚未正式公布；",
            "GTA VI预计2026年底发售；",
            "在线模式通常单人发售后数月至一年；",
            "玩家社区高度期待。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Twitch CEO发言泄露GTA Online for GTA VI可能2027年推出。GTA VI预计2026年底发售，在线模式通常随后数月至一年推出。R星尚未正式公布时间表。"
        }
      ]
    },
    {
      id: "lollipop-chainsaw-2",
      category: "games",
      subcategory: "新作公布",
      title: "《电锯甜心2 Back2Back》2027年登陆PS5：Juliet回归更疯狂，TGS公布全新企划",
      summary: "在TGS 2026上，官方公布了《电锯甜心》（Lollipop Chainsaw）全新企划——《Lollipop Chainsaw 2: Back2Back》，将于2027年登陆PS5。Juliet将回归，带来更疯狂的拍摄风格和动作玩法。TGS活动日程显示，9月19日将举行LOLLIPOP CHAINSAW NEW PROJECT的特别舞台活动。这是2012年原作以来的正统续作，由原作制作人Yasuda领衔开发。",
      source: "LaPS4 / TGS官网",
      date: "2026-09-17",
      url: "https://tgs.cesa.or.jp/2026/en/event?id=97",
      image: "",
      badge: "续作公布",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 76,
      tags: ["电锯甜心2", "Lollipop Chainsaw 2", "Back2Back", "PS5", "2027", "Juliet", "TGS 2026"],
      content: [
        {
          title: "新作信息",
          type: "list",
          items: [
            "Lollipop Chainsaw 2: Back2Back；",
            "2027年登陆PS5；",
            "Juliet回归；",
            "更疯狂的拍摄风格；",
            "TGS 9/19特别舞台；",
            "原作2012年发售；",
            "Yasuda领衔开发。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "TGS 2026公布《电锯甜心2 Back2Back》，2027年登陆PS5，Juliet回归。9/19将举行特别舞台活动，是2012年原作以来的正统续作。"
        }
      ]
    },
    {
      id: "spacecraft-community-update",
      category: "games",
      subcategory: "抢先体验",
      title: "《SpaceCraft》首个社区更新：Northgard/Dune Spice Wars团队打造星际模拟，按玩家反馈大改",
      summary: "Shiro Games（Northgard、Dune: Spice Wars、Wartales开发商）宣布其星际太空模拟游戏《SpaceCraft》推出首个社区更新。这款Steam抢先体验游戏让玩家进入广阔的太空进行建造和自动化冒险。首个社区更新根据玩家反馈进行了全面改进，体现了工作室「由玩家塑造、为玩家打造」的开发理念。Shiro Games以其在策略和模拟游戏领域的扎实制作著称。",
      source: "Techmash",
      date: "2026-09-17",
      url: "https://techmash.co.uk/category/gaming-news/",
      image: "",
      badge: "社区更新",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 75,
      tags: ["SpaceCraft", "Shiro Games", "Northgard", "星际模拟", "抢先体验", "社区更新"],
      content: [
        {
          title: "更新要点",
          type: "list",
          items: [
            "Shiro Games开发；",
            "Steam抢先体验；",
            "星际太空模拟+自动化冒险；",
            "首个社区更新；",
            "根据玩家反馈全面改进；",
            "工作室曾做Northgard/Dune: Spice Wars/Wartales。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Shiro Games的《SpaceCraft》首个社区更新上线，根据玩家反馈全面改进。这款星际太空模拟游戏目前在Steam抢先体验，工作室以策略游戏扎实制作著称。"
        }
      ]
    },
    {
      id: "nvidia-rtx60-rubin-greenlight",
      category: "industry",
      subcategory: "硬件",
      title: "NVIDIA RTX 60系列Rubin架构获内部绿灯：目标2027上半年发布，比预期提前",
      summary: "据油管频道Moore's Law is Dead爆料，NVIDIA基于Rubin架构的RTX 60系列游戏显卡已获得内部绿灯批准，目前进入最终开发阶段。内部目标为2027年上半年发布，比此前传闻的2027年下半年有所提前。Rubin架构是NVIDIA继Blackwell之后的下一代GPU架构，将为下一代游戏和AI计算提供更强的图形性能。这对游戏行业的硬件路线图有重要参考意义。",
      source: "逗游网 / Moore's Law is Dead",
      date: "2026-09-16",
      url: "https://www.doyo.cn/news/danji",
      image: "",
      badge: "RTX 60",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 77,
      tags: ["NVIDIA", "RTX 60", "Rubin架构", "2027上半年", "Moore's Law is Dead", "GPU", "硬件路线图"],
      content: [
        {
          title: "硬件信息",
          type: "list",
          items: [
            "RTX 60系列Rubin架构获内部绿灯；",
            "进入最终开发阶段；",
            "目标2027上半年发布；",
            "比此前传闻的2027下半年提前；",
            "Rubin是Blackwell之后下一代架构；",
            "更强的游戏和AI计算性能；",
            "Moore's Law is Dead爆料。"
          ]
        },
        {
          title: "行业影响",
          type: "text",
          text: "NVIDIA RTX 60系列提前到2027上半年发布的消息，对游戏行业硬件路线图有重要参考意义。新GPU架构通常会带动PC游戏视觉标准的提升，DLSS、光线追踪等技术也将随之演进。对游戏开发者而言，需要关注Rubin架构带来的新特性和性能提升，以便在2027-2028年的游戏项目中充分利用新硬件能力。"
        }
      ]
    },
    {
      id: "denuvo-sues-voices38",
      category: "industry",
      subcategory: "DRM诉讼",
      title: "Denuvo起诉破解黑客voices38：绕过《霍格沃茨之遗》《黑神话：悟空》等20余款游戏DRM",
      summary: "据Solidot报道，Denuvo在美国加州北区联邦法院起诉了名为voices38的匿名游戏破解黑客，指控其违反DMCA反规避条款。被告被指控绕过了超过20款游戏使用的Denuvo DRM，相关游戏包括《霍格沃茨之遗》（Hogwarts Legacy）和《黑神话：悟空》。随着诉讼推进，Denuvo寻求对被告的法律救济。这是DRM厂商对游戏破解行为的最新法律行动，引发了版权保护与用户隐私的讨论。",
      source: "奇客Solidot",
      date: "2026-09-16",
      url: "https://www.solidot.org/search?tid=13&page=1",
      image: "",
      badge: "DRM诉讼",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 76,
      tags: ["Denuvo", "voices38", "DMCA", "霍格沃茨之遗", "黑神话悟空", "DRM", "版权诉讼"],
      content: [
        {
          title: "诉讼要点",
          type: "list",
          items: [
            "Denuvo起诉匿名黑客voices38；",
            "美国加州北区联邦法院；",
            "指控违反DMCA反规避条款；",
            "绕过超20款游戏Denuvo DRM；",
            "涉及霍格沃茨之遗；",
            "涉及黑神话：悟空；",
            "寻求法律救济。"
          ]
        },
        {
          title: "行业意义",
          type: "text",
          text: "Denuvo对游戏破解者的法律行动反映了游戏行业在DRM保护上的持续投入。《黑神话：悟空》作为国产3A大作被列入诉讼涉及的游戏，也显示了中国游戏在全球PC盗版防护中的地位。这一诉讼可能对游戏破解社区产生寒蝉效应，但也引发了关于DRM对正版玩家体验影响的讨论。"
        }
      ]
    },
    {
      id: "tencent-hunyuan-game-visual-2",
      category: "ai",
      subcategory: "AI美术",
      title: "腾讯混元游戏视觉生成平台2.0发布：AI驱动游戏美术生产全流程升级",
      summary: "腾讯于9月5日正式发布混元游戏视觉生成平台2.0，标志着AI驱动游戏美术开发工具的重大升级。新版平台引入了前沿的AI生成能力，支持游戏美术资源的批量生成和风格化处理。该平台面向游戏开发者，旨在提升美术生产效率，降低AI辅助美术制作的门槛。腾讯在AI游戏工具领域持续投入，混元大模型已深度整合进游戏开发管线。",
      source: "AI D-A-M-N",
      date: "2026-09-16",
      url: "https://ai-damn.com/tencent-launches-hunyuan-game-visual-platform-2-0-1757286044105",
      image: "",
      badge: "腾讯混元",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["腾讯", "混元", "游戏视觉平台2.0", "AI美术", "美术生产", "游戏开发管线"],
      content: [
        {
          title: "平台要点",
          type: "list",
          items: [
            "9月5日正式发布；",
            "混元游戏视觉生成平台2.0；",
            "AI驱动美术资源批量生成；",
            "风格化处理能力；",
            "面向游戏开发者；",
            "提升美术生产效率；",
            "降低AI美术门槛。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "腾讯混元游戏视觉生成平台2.0发布，AI驱动游戏美术生产全流程升级。支持美术资源批量生成和风格化处理，面向开发者提升效率，降低AI辅助美术门槛。"
        }
      ]
    },
    {
      id: "youtube-playables-builder",
      category: "ai",
      subcategory: "无代码AI",
      title: "YouTube Playables Builder内测：Gemini 3驱动，文字描述即生成可玩游戏",
      summary: "YouTube正在测试名为Playables Builder的新工具，这是一个基于Web的AI游戏创作平台，利用Google的Gemini 3技术将简单的文字提示转化为可玩的游戏体验。目前处于封闭测试阶段。开发者只需用文字描述游戏想法，上传参考图片或短视频，AI即可处理技术重活，生成完整的可玩游戏。这一工具将游戏创作的门槛降至前所未有的低——像发社交媒体帖子一样简单。",
      source: "AI D-A-M-N",
      date: "2026-09-15",
      url: "https://ai-damn.com/youtube-s-new-ai-tool-lets-anyone-design-games-instantly-1766030559110",
      image: "",
      badge: "YouTube AI",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["YouTube", "Playables Builder", "Gemini 3", "无代码", "文字生成游戏", "封闭测试"],
      content: [
        {
          title: "工具特性",
          type: "list",
          items: [
            "YouTube Playables Builder封闭测试；",
            "基于Google Gemini 3；",
            "文字描述生成可玩游戏；",
            "支持上传参考图/短视频；",
            "AI处理技术重活；",
            "Web-based工具；",
            "游戏创作门槛极低。"
          ]
        },
        {
          title: "行业影响",
          type: "text",
          text: "YouTube Playables Builder代表了AI游戏创作工具的最新方向——不是生成代码片段，而是直接生成完整可玩的游戏体验。Gemini 3的多模态能力使得文字+图片/视频的输入方式成为可能。这与GDevelop AI、SoonLab 2.0、TapTap制造等工具一起，构成了2026年AI无代码游戏创作的爆发期。对传统游戏开发者而言，这些工具既是竞争也是新的分发渠道。"
        }
      ]
    },
    {
      id: "taptap-maker-ai",
      category: "ai",
      subcategory: "国内AI创作",
      title: "TapTap制造开启限量测试：零门槛AI游戏创作智能体，对话即创作完成即发布",
      summary: "TapTap上线「制造」应用，开启限量测试。这是一款专为游戏爱好者打造的零门槛AI游戏创作智能体。用户用自然语言描述想做的游戏，AI即可完成代码、美术、音乐全流程，作品直接上架TapTap平台。供应商为易玩（上海）网络科技有限公司。目前已开启限量测试招募。这是国内平台级AI游戏创作工具的代表，对标YouTube Playables Builder和GDevelop AI。",
      source: "TapTap",
      date: "2026-09-17",
      url: "https://www.taptap.cn/app/810249?os=pc",
      image: "",
      badge: "TapTap制造",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["TapTap", "制造", "AI游戏创作", "零门槛", "对话即创作", "国内平台", "限量测试"],
      content: [
        {
          title: "工具要点",
          type: "list",
          items: [
            "TapTap制造限量测试；",
            "零门槛AI游戏创作智能体；",
            "自然语言描述游戏；",
            "代码/美术/音乐AI全包；",
            "作品直接上架TapTap；",
            "供应商：易玩（上海）；",
            "对标YouTube Playables Builder。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "TapTap「制造」开启限量测试，零门槛AI游戏创作智能体：自然语言描述游戏，AI全包代码美术音乐，作品直接上架TapTap。国内平台级AI游戏创作工具代表。"
        }
      ]
    },
    {
      id: "summer-engine-0567",
      category: "opensource",
      subcategory: "AI引擎",
      title: "Summer Engine v0.5.67发布：Windows睡眠恢复修复，Mac Metal渲染加固，AI Agent面板稳定化",
      summary: "Summer Engine发布v0.5.67版本更新，主题为「更稳定的Summer」。Windows端修复了从睡眠/休眠恢复后聊天和编辑器状态丢失的问题，现在能正确恢复上下文。Mac端加固了Metal渲染器，减少了图形崩溃，改进了drawable保留和离屏队列。编辑器的Agent面板现在在停靠栏聚焦时正确恢复显示。这是一款集成AI Agent能力的游戏引擎，持续提升稳定性和用户体验。",
      source: "Summer Engine Changelog",
      date: "2026-09-13",
      url: "https://www.summerengine.com/changelog",
      image: "",
      badge: "v0.5.67",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 74,
      tags: ["Summer Engine", "v0.5.67", "Windows睡眠恢复", "Mac Metal", "AI Agent面板", "稳定性"],
      content: [
        {
          title: "更新内容",
          type: "list",
          items: [
            "v0.5.67发布于9/13；",
            "Windows睡眠后正确恢复聊天和编辑器状态；",
            "Mac Metal渲染器加固减少崩溃；",
            "drawable保留+离屏队列改进；",
            "Agent面板聚焦停靠栏时恢复显示；",
            "主题：更稳定的Summer。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Summer Engine v0.5.67发布，修复Windows睡眠恢复和Mac Metal崩溃问题，AI Agent面板稳定化。这款集成AI Agent的游戏引擎持续提升稳定性。"
        }
      ]
    },
    {
      id: "razer-ai-dev-tools",
      category: "ai",
      subcategory: "游戏测试",
      title: "Razer发布AI游戏开发工具：自主执行测试用例的AI Agent，GDC 2026 Future of Play亮相",
      summary: "Razer在GDC 2026的Future of Play展示活动中发布了AI驱动的游戏开发工具。核心功能是AI驱动的玩法Agent，能够自主执行测试用例并返回通过/失败结果。Razer强调这些工具旨在支持和放大人类创造力，帮助开发者更快推进同时保持对创作过程的控制，而非替代人类开发者。这是硬件厂商Razer向游戏开发工具领域拓展的重要一步。",
      source: "GAMES.GG",
      date: "2026-09-15",
      url: "https://games.gg/news/razer-unveils-ai-tools-to-streamline-game-development/",
      image: "",
      badge: "Razer AI",
          badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 75,
      tags: ["Razer", "AI工具", "游戏测试", "AI Agent", "GDC 2026", "Future of Play", "自动化测试"],
      content: [
        {
          title: "工具要点",
          type: "list",
          items: [
            "Razer发布AI游戏开发工具；",
            "AI驱动玩法Agent；",
            "自主执行测试用例；",
            "返回通过/失败结果；",
            "GDC 2026 Future of Play展示；",
            "支持而非替代人类创造力；",
            "硬件厂商拓展开发工具。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Razer在GDC 2026发布AI游戏开发工具，核心是能自主执行测试用例的AI Agent，返回通过/失败结果。Razer强调工具支持而非替代人类开发者。"
        }
      ]
    },
    {
      id: "soonlab-2-gpt6-astra",
      category: "ai",
      subcategory: "AI游戏创作",
      title: "SoonLab 2.0集成GPT-6 Astra：对话式游戏创作，无需写代码即可将想法变成可玩体验",
      summary: "AI驱动的可玩游戏创作平台SoonLab宣布在2.0版本中集成OpenAI的GPT-6 Astra。这次发布将OpenAI的推理和编码能力带入SoonLab的对话式游戏创作工作流，让创作者无需自己编写代码就能将想法变成可玩体验。SoonLab定位为AI-powered的可玩游戏创建和分享平台，2.0版本的GPT-6 Astra集成显著提升了创作质量和复杂游戏逻辑的生成能力。",
      source: "GlobeNewswire",
      date: "2026-09-11",
      url: "https://rss.globenewswire.com/news-release/2026/09/11/3360392/0/en/soonlab-integrates-gpt-6-astra-into-soonlab-2-0-bringing-advanced-ai-reasoning-to-playable-game-creation.html",
      image: "",
      badge: "GPT-6 集成",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 79,
      tags: ["SoonLab 2.0", "GPT-6 Astra", "对话式游戏创作", "无代码", "可玩体验", "AI推理"],
      content: [
        {
          title: "集成要点",
          type: "list",
          items: [
            "9月11日发布；",
            "SoonLab 2.0集成GPT-6 Astra；",
            "对话式游戏创作工作流；",
            "无需写代码；",
            "想法变可玩体验；",
            "OpenAI推理和编码能力；",
            "提升复杂游戏逻辑生成。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "SoonLab 2.0集成GPT-6 Astra，对话式游戏创作无需写代码即可将想法变成可玩体验。OpenAI的推理和编码能力显著提升了复杂游戏逻辑的生成质量。"
        }
      ]
    },
    {
      id: "playco-playbot",
      category: "ai",
      subcategory: "AI IDE",
      title: "Playco推出Playbot：基于GPT-6 Astra的AI游戏开发IDE，直接集成Unity和Godot",
      summary: "游戏创业公司Playco发布Playbot，这是一款基于OpenAI GPT-6 Astra的AI驱动集成开发环境（IDE）。Playbot设计用于简化游戏开发流程，直接与Unity和Godot等主流游戏引擎集成。与替代人类开发者不同，Playbot与开发者协作工作，支持场景编辑、游戏测试和变更验证，并融入现有工作流。OpenAI于9月发布了相关案例研究，展示了Playbot在游戏开发中的应用效果。",
      source: "Cryptelio",
      date: "2026-09-03",
      url: "https://cryptelio.cc/news/playco-launches-playbot-an-ai-development-tool-using-openais-gpt-6-astra",
      image: "",
      badge: "Playbot",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 78,
      tags: ["Playco", "Playbot", "GPT-6 Astra", "AI IDE", "Unity集成", "Godot集成", "场景编辑"],
      content: [
        {
          title: "工具要点",
          type: "list",
          items: [
            "Playco发布Playbot；",
            "基于OpenAI GPT-6 Astra；",
            "AI驱动游戏开发IDE；",
            "直接集成Unity和Godot；",
            "协作而非替代开发者；",
            "场景编辑+游戏测试+变更验证；",
            "OpenAI发布案例研究。"
          ]
        },
        {
          title: "开发价值",
          type: "text",
          text: "Playbot的差异化在于直接与Unity和Godot引擎集成，而非作为独立的代码生成工具。这使得AI能够直接理解和操作游戏场景、测试游戏逻辑，形成完整的开发闭环。与开发者协作的定位也比完全替代的论调更务实，反映了AI游戏开发工具2026年的主流方向——增强而非取代人类开发者。"
        }
      ]
    },
    {
      id: "aura-10-ramen",
      category: "ai",
      subcategory: "AI Agent",
      title: "Ramen发布Aura 1.0：Unity和Unreal的AI开发Agent，Verification Agent+持久项目记忆+多项目支持",
      summary: "Ramen于9月9日正式发布Aura 1.0，这是面向Unity和Unreal引擎游戏开发者的AI开发Agent。1.0版本带来重新设计的界面、前沿级性能的Verification Agent、更快的Blueprint生成、持久项目记忆、多项目支持，以及Auto模式下的无限使用量。价格比beta期间更低，同时新增Mac支持并登陆更多平台。Aura专注于成为游戏开发者的AI结对编程伙伴。",
      source: "Games Press",
      date: "2026-09-09",
      url: "https://www.gamespress.com/de/Aura-10-Launches-Today-Pushing-the-Frontier-of-Agentic-AI-in-Game-Deve",
      image: "",
      badge: "Aura 1.0",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["Ramen", "Aura 1.0", "AI Agent", "Unity", "Unreal", "Verification Agent", "Blueprint生成"],
      content: [
        {
          title: "1.0 新特性",
          type: "list",
          items: [
            "9月9日正式发布；",
            "面向Unity和Unreal开发者；",
            "重新设计界面；",
            "Verification Agent前沿性能；",
            "更快Blueprint生成；",
            "持久项目记忆；",
            "多项目支持；",
            "Auto模式无限使用；",
            "新增Mac支持。"
          ]
        },
        {
          title: "技术价值",
          type: "text",
          text: "Aura 1.0的Verification Agent是其核心差异化——AI不仅生成代码，还能验证生成结果的正确性，这解决了AI代码生成中常见的幻觉和错误问题。持久项目记忆和多项目支持则让Aura能够适应真实的游戏开发工作流，而非一次性代码生成工具。价格低于beta也显示了Ramen对规模化用户增长的期望。"
        }
      ]
    },
    {
      id: "bevy-017-migration",
      category: "opensource",
      subcategory: "Rust引擎",
      title: "Bevy 0.17迁移指南：Event拆分为Message和Event，Required Components替代Bundle模式",
      summary: "Bevy Engine发布了0.16到0.17的迁移指南。最重要的破坏性变更包括：Event被拆分为Message（缓冲事件）和Event（观察者事件）；Required Components替代了Bundle-everywhere模式，开发者不再需要到处传递Bundle。Bevy 0.17还引入了光线追踪光照、改进的观察者和事件系统、headless UI widgets等。当前最新版本为0.17.3。Bevy是Rust生态中最活跃的开源游戏引擎，以ECS架构和数据驱动设计著称。",
      source: "Bevy Engine",
      date: "2026-08-27",
      url: "https://bevy.org/learn/migration-guides/0-16-to-0-17/",
      image: "",
      badge: "Bevy 0.17",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 77,
      tags: ["Bevy", "Rust", "ECS", "0.17迁移", "Event/Message拆分", "Required Components", "光线追踪"],
      content: [
        {
          title: "关键变更",
          type: "list",
          items: [
            "Event拆分为Message+Event；",
            "Required Components替代Bundle模式；",
            "光线追踪光照；",
            "观察者和事件系统改进；",
            "Headless UI widgets；",
            "最新版本0.17.3；",
            "Rust生态最活跃开源引擎。"
          ]
        },
        {
          title: "开发价值",
          type: "text",
          text: "Bevy 0.17的架构变更对使用Bevy进行游戏开发的团队有直接影响——Event/Message拆分和Required Components是自0.10精灵重构以来最大的人机工程学变化。迁移指南详细列出了需要修改的代码模式，建议在升级前仔细阅读。Bevy作为Rust游戏引擎的代表，其ECS架构和并行调度能力在技术上具有独特优势，适合对性能有极致要求的项目。"
        }
      ]
    },
    {
      id: "ace-combat-8-oct2",
      category: "games",
      subcategory: "新作发售",
      title: "《皇牌空战8》10月2日发售：Wings of Theve模式确认，故事预告片公开",
      summary: "万代南梦宫宣布《皇牌空战8》（Ace Combat 8: Wings of Theve）将于10月2日正式发售。今日公开了故事预告片，展示了The Endurance号上船员们的日常生活，并确认了Annihilation Battle模式。这是皇牌空战系列的最新正统续作，以其精美的空对空战斗和故事叙事著称。系列拥有庞大的全球粉丝基础，新作将登陆PS5、Xbox Series和PC平台。",
      source: "PlayStation",
      date: "2026-09-14",
      url: "https://www.playstation.com/en-id/",
      image: "",
      badge: "10/2发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 76,
      tags: ["皇牌空战8", "Ace Combat 8", "Wings of Theve", "10月2日", "万代南梦宫", "空战", "故事预告片"],
      content: [
        {
          title: "发售信息",
          type: "list",
          items: [
            "10月2日正式发售；",
            "Wings of Theve故事预告片公开；",
            "Annihilation Battle模式确认；",
            "The Endurance号船员日常；",
            "PS5/Xbox Series/PC全平台；",
            "皇牌空战系列正统续作；",
            "全球庞大粉丝基础。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "《皇牌空战8》10月2日发售，故事预告片公开展示The Endurance号船员日常，Annihilation Battle模式确认。全平台登陆，系列粉丝期待已久。"
        }
      ]
    },
    {
      id: "gw2-creation-code-update",
      category: "games",
      subcategory: "MMO更新",
      title: "《激战2》ArenaNet发布大型创作代码更新：Eternal Vision故事线结局，自定义内容工具升级",
      summary: "ArenaNet为《激战2》（Guild Wars 2）发布了大型创作代码更新，标志着Eternal Vision故事线的结局。这次更新包括大量自定义内容创作工具的升级，让玩家能够更灵活地设计和分享自己的游戏内容。《激战2》作为运营超过13年的MMO，持续通过重大内容更新保持玩家活跃度。ArenaNet在玩家创作内容生态建设上投入了大量资源。",
      source: "Aroged",
      date: "2026-09-17",
      url: "https://www.aroged.com/",
      image: "",
      badge: "MMO大更新",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 73,
      tags: ["激战2", "Guild Wars 2", "ArenaNet", "Eternal Vision", "创作代码更新", "MMO", "玩家自定义"],
      content: [
        {
          title: "更新要点",
          type: "list",
          items: [
            "大型创作代码更新；",
            "Eternal Vision故事线结局；",
            "自定义内容创作工具升级；",
            "玩家更灵活设计分享内容；",
            "ArenaNet开发；",
            "运营超13年MMO；",
            "持续内容更新保持活跃。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "ArenaNet为《激战2》发布大型创作代码更新，Eternal Vision故事线结局，自定义内容工具升级。这款运营13年的MMO持续通过重大更新保持玩家活跃。"
        }
      ]
    },
    {
      id: "youzu-dijiang-investment",
      category: "industry",
      subcategory: "中国厂商",
      title: "游族网络联合发起谛疆科技先进封装项目：面向AI芯片量产代工，董事长宛正出席揭牌",
      summary: "9月16日，游族网络联合发起谛疆科技先进封装项目，游族网络董事长宛正作为联合发起方代表与谛疆科技创始人蔡孟霖共同为项目揭牌，数十家投资机构代表到场见证。谛疆科技聚焦2.5D/3D先进封装，核心团队具备AI芯片量产经验，项目将分阶段建设规模化产线，面向AI、存储等高算力芯片提供一站式量产代工服务。这是游戏公司向半导体产业链延伸的跨界投资案例。",
      source: "每日经济新闻 / 今日头条",
      date: "2026-09-16",
      url: "http://m.toutiao.com/group/7686635470448542248/",
      image: "",
      badge: "跨界投资",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 72,
      tags: ["游族网络", "谛疆科技", "先进封装", "2.5D/3D", "AI芯片", "宛正", "跨界投资"],
      content: [
        {
          title: "投资要点",
          type: "list",
          items: [
            "9月16日项目揭牌；",
            "游族网络董事长宛正联合发起；",
            "谛疆科技创始人蔡孟霖；",
            "聚焦2.5D/3D先进封装；",
            "核心团队具备AI芯片量产经验；",
            "分阶段建设规模化产线；",
            "面向AI/存储高算力芯片代工。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "游族网络联合发起谛疆科技先进封装项目，面向AI芯片量产代工。游戏公司向半导体产业链跨界投资，核心团队具备AI芯片量产经验。"
        }
      ]
    },
    {
      id: "ue5-orbitals-retro-anime",
      category: "tutorials",
      subcategory: "UE5渲染",
      title: "UE5渲染Orbitals复古动漫风：Shapefarm用自定义着色器重现80-90年代太空动画美学",
      summary: "Epic Games官方博客发布技术文章，深入介绍Shapefarm工作室如何使用Unreal Engine 5重现经典80-90年代日本动漫风格的太空冒险游戏《Orbitals》。文章详细解析了自定义着色器、胶片灵感后期效果和后处理管线的实现方式，展示了如何在UE5中实现复古科幻动画的视觉风格。这是一个将现代渲染技术与复古美学相结合的优秀案例，对独立美术风格游戏有参考价值。",
      source: "Unreal Engine Blog",
      date: "2026-09-03",
      url: "https://www.unrealengine.com/feed?categories=all&page=3",
      image: "",
      badge: "UE5美术",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 76,
      tags: ["UE5", "Orbitals", "复古动漫", "自定义着色器", "Shapefarm", "后处理", "太空冒险"],
      content: [
        {
          title: "技术要点",
          type: "list",
          items: [
            "Shapefarm开发Orbitals；",
            "UE5重现80-90年代动漫风；",
            "自定义着色器实现复古效果；",
            "胶片灵感后期效果；",
            "后处理管线设计；",
            "现代渲染+复古美学结合；",
            "Epic官方博客技术解析。"
          ]
        },
        {
          title: "开发参考",
          type: "text",
          text: "Orbitals的渲染方案对追求独特美术风格的UE5开发者有直接参考价值——通过自定义着色器和后期处理管线，可以在现代引擎中实现特定的复古视觉风格，而无需依赖手绘动画的传统流程。这种技术方案尤其适合独立团队以较小成本实现高质量的视觉差异化。"
        }
      ]
    },
    {
      id: "capcom-spotlight-tgs2026",
      category: "industry",
      subcategory: "TGS 2026",
      title: "CAPCOM SPOTLIGHT登陆TGS 2026：9月16日特别直播，怪物猎人/生化危机/街霸新情报汇总",
      summary: "CAPCOM在TGS 2026期间举行了CAPCOM SPOTLIGHT特别直播活动，于9月16日23:00-23:50播出。直播中公开了怪物猎人、生化危机、街霸等核心IP的最新情报。作为日本最大的游戏展会之一，TGS 2026于9月17日正式开幕，展期5天。CAPCOM每年在TGS的展示都是展会亮点，吸引大量玩家关注。此外TGS期间还有LOLLIPOP CHAINSAW新企划、30周年纪念座谈会等活动。",
      source: "TGS 2026官网",
      date: "2026-09-16",
      url: "https://tgs.cesa.or.jp/2026/en/program",
      image: "",
      badge: "CAPCOM",
      badgeType: "event",
      readTime: "2 分钟",
      hotScore: 77,
      tags: ["CAPCOM", "TGS 2026", "怪物猎人", "生化危机", "街霸", "SPOTLIGHT", "9月16日" ],
      content: [
        {
          title: "活动信息",
          type: "list",
          items: [
            "CAPCOM SPOTLIGHT 9/16播出；",
            "23:00-23:50特别直播；",
            "怪物猎人/生化危机/街霸新情报；",
            "TGS 2026于9/17开幕；",
            "展期5天（9/17-9/21）；",
            "幕张Messe 1-11号馆；",
            "TGS每年CAPCOM展示为亮点。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "CAPCOM SPOTLIGHT在TGS 2026期间9/16播出，公开怪物猎人/生化危机/街霸新情报。TGS 2026于9/17开幕，展期5天，是日本最大游戏展会。"
        }
      ]
    }
  ]
};
