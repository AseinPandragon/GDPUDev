window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-03",
    "weekday": "星期二",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-03 07:30",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "EA 关闭 BioWare、取消下一部《质量效应》：31 年传奇 RPG 工作室落幕，大厂成本重构继续",
      "开源引擎矩阵更新：Cocos Creator / LÖVE / A-Frame / Kaplay / Excalibur 值得精读",
      "《GTA VI》定档 11 月 19 日：年末最大发布拉开序幕，多款大作同期扎堆",
      "AI 工具链开源化：Hugging Face Transformers / PyTorch / AutoGen 等值得上手",
      "Game Jam 与校招双线：Ludum Dare 61 开赛，淘米 / 三七互娱 2027 校招进行中"
    ],
    "engineStatus": [
      {
        "name": "Cocos Creator",
        "type": "cocos",
        "status": "跨平台小游戏",
        "badge": "开源引擎",
        "color": "cyan"
      },
      {
        "name": "LÖVE",
        "type": "love2d",
        "status": "纯 Lua 2D",
        "badge": "轻量框架",
        "color": "orange"
      },
      {
        "name": "A-Frame",
        "type": "aframe",
        "status": "WebXR 入门",
        "badge": "Web3D",
        "color": "blue"
      },
      {
        "name": "Kaplay",
        "type": "kaplay",
        "status": "TS 原型库",
        "badge": "2D 引擎",
        "color": "violet"
      },
      {
        "name": "Excalibur",
        "type": "excalibur",
        "status": "TS 2D 结构化",
        "badge": "2D 引擎",
        "color": "emerald"
      }
    ]
  },
  "hero": {
    "id": "ind-ea-bioware-hero",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "BioWare 关闭",
    "title": "EA 关闭 BioWare、取消下一部《质量效应》：31 年传奇 RPG 工作室落幕",
    "summary": "笔者注意到，EA 在 10 月 21 日宣布关闭旗下 BioWare 工作室，并取消仍处于早期开发的下一部《质量效应》。这一决定与公司整体战略收缩、聚焦核心 IP 与体育业务直接相关，也与 8 月完成、背负约 180 亿美元债务的私有化交易后的降本计划一脉相承。对学习者而言，这是观察「大厂如何在财务压力与项目风险之间取舍」的鲜活样本——即便手握定义过一个品类的传奇工作室，也会被重新估值。",
    "image": "https://drop-assets.ea.com/images/1HZCdDmXw5qAxhLTi3wCq3/558f97428f5b4fe69a06ab91a0882fa6/eacom-news-featured-image-shapes-inverted.png?im=AspectCrop=(16,9),xPosition=0.5,yPosition=0.5",
    "source": "EA 官方公告（一手）",
    "date": "2026-11-03",
    "url": "https://www.ea.com/zh-hans/news/building-eas-next-chapter",
    "readTime": "6 分钟",
    "hotScore": 95,
    "tags": [
      "EA",
      "BioWare",
      "质量效应",
      "工作室关闭"
    ],
    "content": [
      {
        "title": "本次要点",
        "type": "list",
        "items": [
          "EA 关闭 BioWare 及埃德蒙顿办公室，下一部《质量效应》早期开发终止；",
          "约 400 个岗位受影响（约 3%），其中 BioWare 约 50 人；",
          "公司转向聚焦 EA SPORTS、战地与 Respawn/DICE 的星战项目等核心增长盘。"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "BioWare 的落幕离「做游戏」看似很远，其实很近：它提醒新人，一款游戏能否活到发售、一个团队能否存续，常常不取决于作品本身，而取决于母公司当季的资产负债表与战略优先级。读懂行业，不只是读懂玩法，更要读懂资本如何为内容资产重新定价。"
      }
    ]
  },
  "items": [
    {
      "id": "en-cocos-creator",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·TS/Cocos",
      "tag": "Cocos Creator",
      "title": "Cocos Creator：用一套工作流同时打到小游戏、H5 与原生",
      "summary": "笔者观察到，cocos-creator/engine 作为 Cocos Creator 的底层开源引擎，把 2D/3D、粒子、动画、物理与跨平台发布打包在同一套编辑器驱动的工作流里。对新人来说，它中国生态成熟、文档中文友好，是做微信/抖音小游戏与 H5 试水的低摩擦入口。",
      "source": "cocos-creator/engine 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/cocos-creator/engine",
      "image": "https://opengraph.githubassets.com/1/cocos-creator/engine",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Cocos",
        "跨平台",
        "小游戏"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "底层开源引擎，编辑器驱动、跨平台发布；",
            "2D/3D、粒子、动画、物理一体化；",
            "中文生态成熟，适合小游戏与 H5 试水。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新人纠结先学哪个引擎。Cocos 的价值在于它把「发布到哪」这件事变得几乎无感——你写完一套逻辑，就能推到多个平台。先做出能分发的小东西，比在引擎间反复横跳更有复利。"
        }
      ]
    },
    {
      "id": "en-love2d",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·Lua",
      "tag": "LÖVE",
      "title": "LÖVE：用纯 Lua 写 2D 游戏，零黑盒、可完全自控",
      "summary": "笔者注意到，love2d/love 是一套极简的 2D 游戏框架，几乎只给你「窗口+循环+绘图+输入」的最小集合，用 Lua 表达全部逻辑。它不替你管理场景树，却因此让新手真正理解一帧是怎么跑起来的——先手写游戏循环，再回头看大引擎，你会更懂那些「自动帮你做的事」。",
      "source": "love2d/love 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/love2d/love",
      "image": "https://opengraph.githubassets.com/1/love2d/love",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "LÖVE",
        "Lua",
        "2D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "极简 2D 框架，最小 API 集合；",
            "Lua 表达全部逻辑，无场景树黑盒；",
            "适合理解游戏循环与渲染本质。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "LÖVE 的克制很珍贵：它不替你做架构决策，逼你理解每一帧。新手最该有的体感，不是「引擎帮我跑了」，而是「我知道它为什么这么跑」。"
        }
      ]
    },
    {
      "id": "en-aframe",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·WebXR",
      "tag": "A-Frame",
      "title": "A-Frame：写几行 HTML 标签就能在浏览器里跑 VR/AR",
      "summary": "笔者观察到，aframevr/aframe 用声明式的 HTML 标签（<a-scene>、<a-box>）把 WebXR 门槛压到极低，配合任何头显的浏览器即可运行。对想试水沉浸式内容、又不想先啃一整套 3D 引擎的新人，它是「当天就能看到立体画面」的入口。",
      "source": "aframevr/aframe 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/aframevr/aframe",
      "image": "https://opengraph.githubassets.com/1/aframevr/aframe",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "A-Frame",
        "WebXR",
        "VR"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "声明式 HTML 标签搭 3D/VR 场景；",
            "浏览器即运行时，免安装；",
            "适合低成本试水沉浸式内容。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "VR/AR 常被当成高门槛领域。A-Frame 的反例说明：先把立体画面跑起来，再谈优化，比先补完一堆图形学理论更容易坚持。"
        }
      ]
    },
    {
      "id": "en-kaplay",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·TS/JS",
      "tag": "Kaplay",
      "title": "Kaplay（原 Kaboom.js）：几分钟搭出一个可玩原型",
      "summary": "笔者注意到，kaplayjs/kaplay 是面向原型与教学的类型安全 2D 游戏库，API 直观、报错友好，内置场景、精灵、物理与音效。它不追求工业级复杂度，而是让新手在「写几行就出画面」的正反馈里把游戏循环、碰撞与状态机跑通。",
      "source": "kaplayjs/kaplay 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/kaplayjs/kaplay",
      "image": "https://opengraph.githubassets.com/1/kaplayjs/kaplay",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Kaplay",
        "TypeScript",
        "原型"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "类型安全的 2D 游戏库，API 直观；",
            "内置场景、精灵、物理、音效；",
            "低门槛快速产出可玩原型。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "原型阶段要的是速度，不是完备。Kaplay 这种「写几行就出画面」的库，最适合用来验证一个玩法点子值不值得继续投入。"
        }
      ]
    },
    {
      "id": "en-excalibur",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·TypeScript",
      "tag": "Excalibur",
      "title": "Excalibur：用 TypeScript 写结构清晰的 2D 游戏",
      "summary": "笔者观察到，excaliburjs/Excalibur 是一套为 TypeScript 而生的 2D 引擎，自带场景管理、资源加载、碰撞与相机系统，约定清晰、类型完备。对已经会前端、想把工程化习惯带进游戏开发的人，它比手写 canvas 更接近「正经项目」的写法。",
      "source": "excaliburjs/Excalibur 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/excaliburjs/Excalibur",
      "image": "https://opengraph.githubassets.com/1/excaliburjs/Excalibur",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Excalibur",
        "TypeScript",
        "2D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "TypeScript 原生 2D 引擎；",
            "场景、资源、碰撞、相机系统齐备；",
            "类型完备，适合工程化习惯。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "会前端的人常被引擎的「另一种语言」劝退。Excalibur 用你熟悉的类型系统搭起游戏结构，是把既有工程习惯平移进游戏开发的平滑过渡。"
        }
      ]
    },
    {
      "id": "ind-turn10-playground",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "大厂重组",
      "tag": "Xbox 工作室合并",
      "title": "微软将 Turn 10 与 Playground Games 合并，《极限竞速》主创 Dan Greenawalt 离职",
      "summary": "笔者注意到，微软将《极限竞速》开发商 Turn 10 与《极限竞速：地平线》开发商 Playground Games 合并为同一工作室，主创 Dan Greenawalt 在任职近 27 年后离开。对学习者而言，这是观察「大厂如何用项目制重组研发资源」的样本——即便手握王牌 IP，团队结构也会随战略重写。",
      "source": "IT之家 / 今日头条 报道",
      "date": "2026-11-03",
      "url": "https://www.toutiao.com/article/7702973975311303204",
      "image": "",
      "badge": "行业",
      "badgeType": "industry",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "微软",
        "Xbox",
        "Turn 10"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Turn 10 与 Playground Games 合并为一家工作室；",
            "《极限竞速》主创 Dan Greenawalt 任职近 27 年后离开；",
            "延续 Xbox 年内大规模重组节奏。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "工作室合并常发生在战略换挡期。新人看这条新闻，重点不在谁走谁留，而在「平台方如何用组织重组把资源重新导向增长盘」——这决定了哪些方向会被持续投入。"
        }
      ]
    },
    {
      "id": "ind-asgc-layoffs",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业数据",
      "tag": "裁员追踪",
      "title": "2026 游戏行业裁员已达 10977 人，超过 2025 全年",
      "summary": "笔者观察到，ASGC 游戏行业裁员追踪数据显示，截至 11 月 2 日，2026 年已削减 10977 个岗位、超过 2025 全年（9197），预计年底约 13077 人。数字背后是约 35 家工作室关停、161 家遭遇裁员。新人看行业别只盯神作，要看资本与组织如何决定项目生死。",
      "source": "腾讯新闻 / ASGC 数据",
      "date": "2026-11-03",
      "url": "https://news.qq.com/rain/a/20261102A098UI00",
      "image": "",
      "badge": "行业",
      "badgeType": "industry",
      "readTime": "5 分钟",
      "hotScore": 92,
      "tags": [
        "裁员",
        "ASGC",
        "行业数据"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "2026 年已削减 10977 个岗位，超 2025 全年；",
            "约 35 家工作室关停、161 家遭遇裁员；",
            "预计年底全行业约 13077 人。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这组数字是行业最冷的底色。它提醒想入行的人：选择方向时，除了热爱，也要看赛道是否在扩张——逆水行舟的项目，留给新人的位置更少。"
        }
      ]
    },
    {
      "id": "ind-arkane-lyon",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "工作室关停",
      "tag": "Arkane 里昂",
      "title": "微软拟 11 月关闭 Arkane 里昂，《漫威：刀锋战士》推迟至 2027",
      "summary": "笔者注意到，微软计划于 11 月 13 日关闭 Arkane 里昂工作室（影响约 217 人），其《漫威：刀锋战士》已接近完成却推迟到 2027 年底，微软正寻合作伙伴推进商业化。这是「项目未停、团队先散」的又一例，提醒新人：工作室命运与单款产品进度未必同步。",
      "source": "电玩巴士 报道",
      "date": "2026-11-03",
      "url": "https://tgbus.com/news/246017",
      "image": "",
      "badge": "行业",
      "badgeType": "industry",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "Arkane",
        "微软",
        "工作室关闭"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "微软计划 11 月 13 日关闭 Arkane 里昂；",
            "影响约 217 个岗位；",
            "《漫威：刀锋战士》接近完成却推迟至 2027 年底。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "项目临近完工却团队解散，是最让人唏嘘的组合。它说明在集团视角里，单款产品的进度未必能决定团队去留——预算与战略优先级才是。"
        }
      ]
    },
    {
      "id": "ind-suckerpunch-layoff",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "工作室裁员",
      "tag": "Sucker Punch",
      "title": "《羊蹄山之魂》开发商 Sucker Punch 据报道裁员 24 人",
      "summary": "笔者观察到，Ghost of Yōtei 开发商 Sucker Punch 据报道裁减 24 人，内部信称是在评估市场挑战与下一项目人力需求后的决定。即便《羊蹄山之魂》首月卖出 330 万份、提振了索尼 Q3 数字收入，商业成功也不再能担保团队稳定——这是当下行业最冷的注脚。",
      "source": "GamesIndustry.biz 报道（一手）",
      "date": "2026-11-03",
      "url": "https://www.gamesindustry.biz/sucker-punch-productions-reportedly-lays-off-24-employees-following-launch-of-ghost-of-yotei-complete-edition",
      "image": "https://assetsio.gnwcdn.com/Discover-Japans-Natural-Beauty-Virtually-Through-Ghost-of-Yotei-hero.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "行业",
      "badgeType": "industry",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Sucker Punch",
        "索尼",
        "裁员"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Ghost of Yōtei 开发商据报裁员 24 人；",
            "《羊蹄山之魂》首月 330 万份、提振索尼 Q3；",
            "内部信称因市场挑战与下一项目人力需求。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "商业成绩亮眼却仍裁员，是这一年最反复出现的故事。它给新人的现实课是：项目成功不等于团队安全，组织结构与成本模型的影响往往更大。"
        }
      ]
    },
    {
      "id": "ind-schell-games",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "工作室裁员",
      "tag": "Schell Games",
      "title": "《Among Us VR》联合开发商 Schell Games 年内第二轮裁员",
      "summary": "笔者注意到，以《I Expect You To Die》系列和《Among Us VR》联合开发闻名的 Schell Games 宣布年内第二轮裁员，涉及工程、美术、设计、声音、市场、IT、研究与 QA。这家曾公开主张「不把岗位置于风险中」的工作室也未能幸免，说明行业性收缩已越过单款产品的成败边界。",
      "source": "腾讯新闻 报道",
      "date": "2026-11-03",
      "url": "https://news.qq.com/rain/a/20261102A0CD8900",
      "image": "",
      "badge": "行业",
      "badgeType": "industry",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Schell Games",
        "VR",
        "裁员"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Schell Games 年内第二轮裁员；",
            "涉及工程、美术、设计、声音、市场、IT、研究与 QA；",
            "曾公开主张避免裁员的立场被打破。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "当一家以「不裁人」为信条的工作室也低头，说明行业性逆风已经越过个体选择。新人要建立的，是对周期的判断力，而不只是对某一家的信任。"
        }
      ]
    },
    {
      "id": "ga-gta6",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "大作首发",
      "tag": "GTA VI",
      "title": "《GTA VI》定档 11 月 19 日：重返 Vice City，年末最大发布拉开序幕",
      "summary": "笔者观察到，Rockstar 将《GTA VI》定档 11 月 19 日登陆 PS5 / Xbox Series，讲述 Jason 与 Lucia 在 Leonida 州的故事。它不只是年度大作，更是观察「开放世界叙事、技术表现与发行节奏」的标杆样本——服务器表现、销量与后续计划都将定义这一世代的发行范式。",
      "source": "Rockstar 官方（一手）",
      "date": "2026-11-03",
      "url": "https://www.rockstargames.com/VI",
      "image": "https://www.rockstargames.com/VI/_next/static/media/meta.0t8ty~nlmxq2s.jpg?nrpYjD-X9qCVdRWtREDg1",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 96,
      "tags": [
        "GTA VI",
        "Rockstar",
        "开放世界"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11 月 19 日登陆 PS5 / Xbox Series；",
            "重返 Vice City，主角 Jason 与 Lucia；",
            "PC 版日期尚未公布。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "GTA VI 是观察「技术表现如何服务于叙事规模」的绝佳样本。对新人，它最大的启发未必是画质，而是 Rockstar 如何用十年磨一剑的节奏，把开放世界做成一种文化事件。"
        }
      ]
    },
    {
      "id": "ga-footballmanager27",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "体育模拟",
      "tag": "Football Manager 27",
      "title": "《足球经理 27》11 月 10 日全球发布，加入 Netflix 移动版",
      "summary": "笔者注意到，《Football Manager 27》将于 11 月 10 日登陆 PC、Xbox、PS5 与 Netflix 移动端，带来更新的导航、比赛日体验与转会截止日/杯赛抽签机制。对做模拟经营与数据驱动玩法的开发者，它的数据库更新与战术系统是最值得拆解的对象。",
      "source": "Football Manager 官方（一手）",
      "date": "2026-11-03",
      "url": "https://www.footballmanager.com/",
      "image": "https://cdn.footballmanager.com/site/2026-09/FM27%20Opengraph%20-%201200x630.png",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "FM27",
        "Sports Interactive",
        "模拟经营"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11 月 10 日 PC、Xbox、PS5、Netflix 移动端同步；",
            "更新导航与比赛日体验；",
            "转会截止日与杯赛抽签机制改进。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "FM 系列是「数据驱动玩法」的活化石。想做模拟经营的新人，研究它的数据库结构、评分体系与战术表达，比读十篇设计文档都实在。"
        }
      ]
    },
    {
      "id": "ga-metaphor-switch2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "JRPG",
      "tag": "Metaphor ReFantazio",
      "title": "《Metaphor: ReFantazio》登陆 Switch 2（11/12），JRPG 阵容补强",
      "summary": "笔者观察到，Atlus 的《Metaphor: ReFantazio》将于 11 月 12 日登陆 Nintendo Switch 2。对新人而言，Atlus 的回合制节奏、意象化美术与叙事密度，是拆解「JRPG 系统如何服务情绪」的上佳样本；而它转向新平台也说明老 IP 仍在靠移植续命。",
      "source": "Atlus 官方（一手）",
      "date": "2026-11-03",
      "url": "https://metaphor.atlus.com/",
      "image": "https://metaphor.atlus.com/media/img/common/og_img.jpg",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Atlus",
        "JRPG",
        "Switch 2"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11 月 12 日登陆 Nintendo Switch 2；",
            "Atlus 的回合制与意象化美术；",
            "老 IP 借新平台延续生命周期。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "移植是行业里被低估的一门手艺。把一款为旧硬件打磨的 RPG 搬到新平台还保持手感，本身就是工程与设计的双重功课。"
        }
      ]
    },
    {
      "id": "ga-stellarblade-ns2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "移植",
      "tag": "Stellar Blade",
      "title": "《Stellar Blade》登陆 Switch 2（11/5–6），高速动作进入任系阵营",
      "summary": "笔者注意到，Shift Up 的《Stellar Blade》将于 11 月初登陆 Nintendo Switch 2，把标志性的高速近战与美术表现带到新平台。对做动作游戏的开发者，它是观察「主机独占如何做跨平台适配、如何在保留手感的同时压住功耗」的案例。",
      "source": "Stellar Blade 官方（一手）",
      "date": "2026-11-03",
      "url": "https://www.stellarblade.com/ns2/",
      "image": "https://www.stellarblade.com/ns2/assets/images/main/bg_hero.jpg",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "Stellar Blade",
        "Shift Up",
        "Switch 2"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11 月初登陆 Nintendo Switch 2；",
            "高速近战与标志性美术表现；",
            "从独占到跨平台的适配课题。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "动作游戏的手感极依赖帧率与输入延迟。把一款以手感著称的作品搬上不同硬件，最考验的是「在不牺牲体验的前提下压住功耗」的取舍。"
        }
      ]
    },
    {
      "id": "ga-pathofexile2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "ARPG",
      "tag": "Path of Exile 2",
      "title": "《流放之路 2》12 月 11 日迈向 1.0，暗黑系 ARPG 收官本年",
      "summary": "笔者观察到，《Path of Exile 2》计划于 12 月 11 日推出 1.0 正式版，在免费模式下延续深度 BD 与终局玩法。对设计者而言，它的技能宝石系统、经济与终局地图是拆解「长线服务型 ARPG 如何维持十年热度」的教科书。",
      "source": "Path of Exile 官方（一手）",
      "date": "2026-11-03",
      "url": "https://www.pathofexile.com/",
      "image": "https://web.poecdn.com/protected/image/favicon/ogimage.png?key=DDHQnVxwj0AxeMbsPiRoEQ",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "PoE2",
        "Grinding Gear",
        "ARPG"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "12 月 11 日推出 1.0 正式版；",
            "技能宝石系统与深度 BD；",
            "终局玩法支撑长线服务。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "PoE2 是「系统深度」的极致样本。它证明：一个可组合、可成长的规则系统，比不断堆新内容更能让玩家留下来十年。"
        }
      ]
    },
    {
      "id": "os-p5js",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "创意编程",
      "tag": "p5.js",
      "title": "p5.js：用最少的代码把创意画到浏览器画布上",
      "summary": "笔者注意到，processing/p5.js 把 Processing 的「一行代码一个图形」哲学带进浏览器，内置绘图、交互、声音与媒体 API。对新人而言，它是理解「程序化生成美术」最温柔的入口——不用先学引擎，先让代码长出形状。",
      "source": "processing/p5.js 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/processing/p5.js",
      "image": "https://opengraph.githubassets.com/1/processing/p5.js",
      "badge": "开源",
      "badgeType": "opensource",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "p5.js",
        "创意编程",
        "可视化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "浏览器内创意编程，API 极简；",
            "内置绘图、交互、声音、媒体；",
            "适合程序化生成美术入门。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "p5.js 的魔力在于即时反馈：改一行，画面就变。这种「代码即画笔」的体感，是很多新人爱上做游戏的第一颗种子。"
        }
      ]
    },
    {
      "id": "os-opentk",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "多媒体·C#",
      "tag": "OpenTK",
      "title": "OpenTK：用 C# 直接调 OpenGL/Vulkan/OpenAL 写游戏",
      "summary": "笔者观察到，opentk/opentk 为 .NET 提供了面向 OpenGL、OpenGL ES、Vulkan 与 OpenAL 的底层绑定与数学库，让你在 C# 里亲手管渲染与音频。它比 Unity 更裸，却正适合理解「引擎之下到底发生了什么」。",
      "source": "opentk/opentk 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/opentk/opentk",
      "image": "https://opengraph.githubassets.com/1/opentk/opentk",
      "badge": "开源",
      "badgeType": "opensource",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "OpenTK",
        "C#",
        "图形 API"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "面向 OpenGL/Vulkan/OpenAL 的 .NET 绑定；",
            "附带数学库；",
            "比 Unity 更裸，贴近底层。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "用 C# 又想看懂引擎底层，OpenTK 是绝佳跳板。它逼你亲手管理渲染上下文，这种「无遮挡」的体验，会让你回头用 Unity 时更明白那些抽象在替你做什么。"
        }
      ]
    },
    {
      "id": "os-json",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "数据·C++",
      "tag": "nlohmann/json",
      "title": "nlohmann/json：游戏配置与存档序列化的事实标准",
      "summary": "笔者注意到，nlohmann/json 是 C++ 里最流行的单头文件 JSON 库，几乎成了游戏项目做配置表、本地化与存档读写的默认选择。新人不必深究解析细节，先把它当成「把游戏数据安全地存进文件再读出来」的趁手工具。",
      "source": "nlohmann/json 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/nlohmann/json",
      "image": "https://opengraph.githubassets.com/1/nlohmann/json",
      "badge": "开源",
      "badgeType": "opensource",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "JSON",
        "C++",
        "序列化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "单头文件 C++ JSON 库；",
            "配置表、本地化、存档读写默认选择；",
            "API 友好、零外部依赖。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "存档与配置是每款游戏都绕不开的脏活。先把 nlohmann/json 用顺手，你就少了一块「数据怎么落地」的心理负担。"
        }
      ]
    },
    {
      "id": "os-hazel",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "教学·C++",
      "tag": "Hazel",
      "title": "TheCherno/Hazel：跟着视频从零写一套 C++ 游戏引擎",
      "summary": "笔者观察到，TheCherno/Hazel 是配套 YouTube 系列的教学引擎，从窗口、渲染、图层一路写到引擎架构。它不追求工业级完备，而是把「引擎是怎么搭起来的」完整摊开——想真正看懂大引擎源码，先跟着手写一遍最划算。",
      "source": "TheCherno/Hazel 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/TheCherno/Hazel",
      "image": "https://opengraph.githubassets.com/1/TheCherno/Hazel",
      "badge": "开源",
      "badgeType": "opensource",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Hazel",
        "C++",
        "引擎教学"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "配套视频从零写引擎；",
            "覆盖窗口、渲染、图层与架构；",
            "教学优先，不追求工业完备。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "看大引擎源码常让人窒息。Hazel 的价值是把复杂度按集拆开：跟着手写一遍，你再读 Unity/Unreal 的源码，会少很多「这到底是啥」的茫然。"
        }
      ]
    },
    {
      "id": "os-sokol",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "图形·C",
      "tag": "Sokol",
      "title": "Sokol：用单头文件把图形/音频/文件跨平台打包",
      "summary": "笔者注意到，floooh/sokol 用一组单头文件提供跨平台的 3D 图形、音频、文件与计算能力，零依赖、编译快。对想做轻量工具、原型或 WebAssembly 导出的人，它是「能直接塞进项目、不绑架构建系统」的务实选择。",
      "source": "floooh/sokol 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/floooh/sokol",
      "image": "https://opengraph.githubassets.com/1/floooh/sokol",
      "badge": "开源",
      "badgeType": "opensource",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Sokol",
        "C",
        "跨平台"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "单头文件组，跨平台图形/音频/文件；",
            "零依赖、编译快；",
            "适合工具、原型与 WASM 导出。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Sokol 的信条是「不绑架你的构建系统」。这种克制对做自研工具链的人极友好——它像乐高零件，而不是一整套装修方案。"
        }
      ]
    },
    {
      "id": "os-vulkan-samples",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "图形·Vulkan",
      "tag": "Vulkan Samples",
      "title": "KhronosGroup/Vulkan-Samples：官方示范如何写好 Vulkan",
      "summary": "笔者观察到，KhronosGroup/Vulkan-Samples 由 Khronos 官方维护，用一个个可运行的小例子讲清同步、渲染、降噪等 Vulkan 关键点。对想跨过「Vulkan 太难」这道坎的人，它比文档更直观，是挨着 API 学的脚手架。",
      "source": "KhronosGroup/Vulkan-Samples 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/KhronosGroup/Vulkan-Samples",
      "image": "https://opengraph.githubassets.com/1/KhronosGroup/Vulkan-Samples",
      "badge": "开源",
      "badgeType": "opensource",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "Vulkan",
        "Khronos",
        "图形"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Khronos 官方维护；",
            "可运行小例子讲清关键概念；",
            "适合按 API 挨个突破。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Vulkan 的门槛在显式与繁琐。Vulkan-Samples 把每个难点做成可跑的样例，相当于有人陪你一行行把坑踩平——比干读规范高效太多。"
        }
      ]
    },
    {
      "id": "tu-phaser",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "入门·JS",
      "tag": "Phaser",
      "title": "Phaser 官方 Learn：用最少的代码做出第一个网页小游戏",
      "summary": "笔者注意到，phaser.io/learn 提供从场景、精灵、物理到发布的渐进式教程，强调「先跑起来再讲原理」。对新人，网页游戏免安装、改完即见，是最好的第一块试验田。",
      "source": "Phaser 官方（一手）",
      "date": "2026-11-03",
      "url": "https://phaser.io/learn",
      "image": "",
      "badge": "教程",
      "badgeType": "tutorial",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Phaser",
        "网页游戏",
        "入门"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "场景、精灵、物理、发布渐进式；",
            "强调先跑起来再讲原理；",
            "网页游戏免安装、改完即见。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "网页是最友好的第一块试验田：没有安装门槛，改完刷新就能看到结果。Phaser 的教程思路也值得借鉴——先让画面动起来，兴趣才会留下。"
        }
      ]
    },
    {
      "id": "tu-godot-intro",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "入门·GDScript",
      "tag": "Godot",
      "title": "Godot 官方入门：用节点与 GDScript 搭出第一个场景",
      "summary": "笔者观察到，docs.godotengine.org 的入门章节把「场景=可复用节点树」讲得很透。对新人，Godot 的编辑器即所见即所得，先照着做出能动的角色，再理解信号与场景继承，比空读概念高效得多。",
      "source": "Godot 文档（一手）",
      "date": "2026-11-03",
      "url": "https://docs.godotengine.org/en/stable/about/introduction.html",
      "image": "",
      "badge": "教程",
      "badgeType": "tutorial",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Godot",
        "GDScript",
        "节点"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "入门章节讲清节点与场景；",
            "编辑器所见即所得；",
            "先做出能动角色，再学信号与继承。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Godot 的「场景即节点树」是理解组合优于继承的好教材。新手照着文档做出第一个会动的小人，比背一堆术语更早建立真实体感。"
        }
      ]
    },
    {
      "id": "tu-unity-learn",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "入门·Unity",
      "tag": "Unity Learn",
      "title": "Unity Learn：从编辑器到 C# 脚本的系统化路径",
      "summary": "笔者注意到，learn.unity.com 把官方课程按角色与项目组织好，覆盖编辑器、C# 脚本、2D/3D 与 Shader。对想进工业级管线的人，它提供了「照着做一遍完整小项目」的结构化入口。",
      "source": "Unity Learn 官方（一手）",
      "date": "2026-11-03",
      "url": "https://learn.unity.com/",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/learn-production/b29e9c9c1ed197a3361510be60163c3f05b8c7c1-1920x1080.jpg?w=1280&q=80&fit=max&auto=format",
      "badge": "教程",
      "badgeType": "tutorial",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Unity",
        "C#",
        "系统化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "课程按角色与项目组织；",
            "覆盖编辑器、C#、2D/3D 与 Shader；",
            "提供完整小项目的结构化路径。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "想进工业级管线，结构化学习比碎片化教程更省时间。Unity Learn 的价值在于它把「从零到能交付一个小项目」的路径铺平了。"
        }
      ]
    },
    {
      "id": "tu-mdn-games",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "入门·Web",
      "tag": "MDN",
      "title": "MDN Game Development：从 canvas 到 WebGL 的纯前端路线",
      "summary": "笔者观察到，MDN 的 Game Development 专题用原生 JavaScript 讲清游戏循环、碰撞、音效与 WebGL 基础。它不依赖任何引擎，适合想搞懂「浏览器里一帧到底怎么画」的人打底。",
      "source": "MDN Web Docs（一手）",
      "date": "2026-11-03",
      "url": "https://developer.mozilla.org/en-US/docs/Games",
      "image": "",
      "badge": "教程",
      "badgeType": "tutorial",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "MDN",
        "canvas",
        "WebGL"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "原生 JS 讲游戏循环与碰撞；",
            "覆盖音效与 WebGL 基础；",
            "不依赖任何引擎。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "在不依赖引擎的情况下理解「一帧怎么画」，是从使用者迈向创造者的关键一跃。MDN 给你的是地基，不是脚手架。"
        }
      ]
    },
    {
      "id": "tu-catlike",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "进阶·Unity",
      "tag": "Catlike Coding",
      "title": "Catlike Coding：用 Unity 把数学与渲染啃透的实战教程",
      "summary": "笔者注意到，catlikecoding.com/unity/tutorials 以「一个概念一篇文章+可运行工程」的方式，把噪声、渲染管线、曲线、Mesh 等讲得很硬核。对想从「会用引擎」迈向「懂引擎在算什么」的人，它是进阶的磨刀石。",
      "source": "Catlike Coding（一手）",
      "date": "2026-11-03",
      "url": "https://catlikecoding.com/unity/tutorials/",
      "image": "https://catlikecoding.com/unity/tutorials/banner.png",
      "badge": "教程",
      "badgeType": "tutorial",
      "readTime": "6 分钟",
      "hotScore": 81,
      "tags": [
        "Unity",
        "渲染",
        "数学"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "一个概念一篇文章+可运行工程；",
            "覆盖噪声、渲染管线、曲线、Mesh；",
            "硬核、适合进阶。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "会用引擎和懂引擎之间隔着一道数学与渲染的墙。Catlike Coding 不绕路，它带你把墙拆掉——过程辛苦，但拆完之后看什么都通透。"
        }
      ]
    },
    {
      "id": "ai-transformers",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "框架·NLP",
      "tag": "Transformers",
      "title": "Hugging Face Transformers：把大模型接进游戏工作流的入口",
      "summary": "笔者注意到，huggingface/transformers 几乎是开源模型的统一接口层，覆盖文本、视觉、音频与多模态。对游戏开发者，它意味着你能本地加载一个小模型做 NPC 对话、内容审核或文案生成，而不必每个需求都调云端 API。",
      "source": "huggingface/transformers 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/huggingface/transformers",
      "image": "https://opengraph.githubassets.com/1/huggingface/transformers",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "Hugging Face",
        "大模型",
        "NLP"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开源模型的统一接口层；",
            "覆盖文本、视觉、音频与多模态；",
            "可本地加载小模型做 NPC 对话等。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对游戏开发者，Transformers 的真正价值是「本地可控」：把模型接进工作流，既能做 NPC 对话，也能做内容审核，而不必把每个需求都交给云端。"
        }
      ]
    },
    {
      "id": "ai-pytorch",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "框架·深度学习",
      "tag": "PyTorch",
      "title": "PyTorch：从研究原型到训练你自己的游戏 AI",
      "summary": "笔者观察到，pytorch/pytorch 是当代深度学习的事实标准，动态图让你边写边调。对新人，先用它复现一个简单的强化学习 agent 玩小游戏，比读论文更快建立「模型是怎么从奖励里学出行为」的直觉。",
      "source": "pytorch/pytorch 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/pytorch/pytorch",
      "image": "https://opengraph.githubassets.com/1/pytorch/pytorch",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "PyTorch",
        "深度学习",
        "强化学习"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "当代深度学习事实标准；",
            "动态图，边写边调；",
            "适合复现 RL agent 玩小游戏。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "想理解 AI 游戏智能体，先别读论文。用 PyTorch 复现一个会玩 Flappy Bird 的小 agent，那种「它真的学会了」的震撼，会替你记住所有概念。"
        }
      ]
    },
    {
      "id": "ai-autogen",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "框架·多智能体",
      "tag": "AutoGen",
      "title": "Microsoft AutoGen：用多智能体编排游戏开发流水线",
      "summary": "笔者注意到，microsoft/autogen 让你把多个 LLM agent 编排成可对话、可协作的团队，适合做「策划 agent + 美术 agent + 代码 agent」的原型。对想用 AI 串起工作流的人，它是理解「agent 如何分工」的好起点。",
      "source": "microsoft/autogen 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/microsoft/autogen",
      "image": "https://opengraph.githubassets.com/1/microsoft/autogen",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "AutoGen",
        "多智能体",
        "微软"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "多 LLM agent 可对话协作；",
            "适合策划/美术/代码 agent 原型；",
            "理解 agent 分工的起点。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "多智能体不是噱头，而是把「一个大 prompt 解决一切」的幻想拆成可验证的分工。AutoGen 让你先看清：协作本身就需要设计。"
        }
      ]
    },
    {
      "id": "ai-tensorflow",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "框架·工业级",
      "tag": "TensorFlow",
      "title": "TensorFlow：工业级模型训练与部署的另一条主线",
      "summary": "笔者观察到，tensorflow/tensorflow 在训练、导出与端侧部署上生态成熟，适合把模型从笔记本搬到服务器或移动端。新人不必二选一，理解两套框架的共同抽象（张量、计算图、自动微分），比死磕某个库更重要。",
      "source": "tensorflow/tensorflow 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/tensorflow/tensorflow",
      "image": "https://opengraph.githubassets.com/1/tensorflow/tensorflow",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "TensorFlow",
        "部署",
        "端侧"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "训练、导出、端侧部署生态成熟；",
            "适合模型从笔记本到移动端；",
            "与 PyTorch 共享核心抽象。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "两套路子不必二选一。真正该掌握的，是张量、计算图、自动微分这些共同语言——框架只是方言，概念才是母语。"
        }
      ]
    },
    {
      "id": "ai-audiocraft",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "生成·音频",
      "tag": "AudioCraft",
      "title": "Meta AudioCraft：用文本生成音乐与音效的开放研究",
      "summary": "笔者注意到，facebookresearch/audiocraft 提供了 MusicGen 与 AudioGen，能从文本/条件生成音乐与音效。对独立开发者，这是「先快速铺一层氛围音、再手工精修」的捷径，也值得思考 AI 生成音频的版权与工作流边界。",
      "source": "facebookresearch/audiocraft 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/facebookresearch/audiocraft",
      "image": "https://opengraph.githubassets.com/1/facebookresearch/audiocraft",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "AudioCraft",
        "音乐生成",
        "Meta"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "MusicGen 与 AudioGen 文本/条件生成；",
            "适合快速铺氛围音再精修；",
            "引出 AI 音频版权议题。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "音频是独立开发者最容易卡壳的环节。AudioCraft 这类工具先把氛围铺起来，你再手工打磨——但版权与署名这条线，越早想清楚越好。"
        }
      ]
    },
    {
      "id": "ai-whisper",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "语音·ASR",
      "tag": "Whisper",
      "title": "OpenAI Whisper：把语音变成字幕与可检索对话",
      "summary": "笔者观察到，openai/whisper 是多语言语音识别的开放基线，本地即可跑。对做语音交互 NPC、游戏内字幕或播客式叙事的人，它意味着「让玩家用嘴说话、系统用文字回应」的门槛被大幅拉低。",
      "source": "openai/whisper 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/openai/whisper",
      "image": "https://opengraph.githubassets.com/1/openai/whisper",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Whisper",
        "语音识别",
        "OpenAI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "多语言语音识别开放基线；",
            "本地即可运行；",
            "适合语音 NPC 与字幕。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "语音交互最难的不是「听懂」，而是「接得住」。Whisper 把识别这一步拉平后，真正的设计功夫落在：玩家说出的话，系统要怎么回应才不尴尬。"
        }
      ]
    },
    {
      "id": "ai-nanogpt",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "教学·训练",
      "tag": "nanoGPT",
      "title": "Karpathy/nanoGPT：几百行代码看清 GPT 是怎么炼成的",
      "summary": "笔者注意到，karpathy/nanoGPT 用极简代码从零实现 GPT 训练，是「读得懂、跑得动」的教科书。对新人，先把它跑通、再喂自己的小语料，比直接调 API 更能建立对「模型到底是什么」的真实体感。",
      "source": "karpathy/nanoGPT 仓库（一手）",
      "date": "2026-11-03",
      "url": "https://github.com/karpathy/nanoGPT",
      "image": "https://opengraph.githubassets.com/1/karpathy/nanoGPT",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "nanoGPT",
        "GPT",
        "教学"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "几百行从零实现 GPT 训练；",
            "读得懂、跑得动；",
            "适合喂自己的小语料练手。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "调 API 像是借别人的大脑，跑 nanoGPT 则是自己长出一颗。前者让你快点用上 AI，后者让你真正明白 AI 是怎么回事——两者都值得。"
        }
      ]
    },
    {
      "id": "co-ld61",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·Game Jam",
      "tag": "Ludum Dare 61",
      "title": "Ludum Dare 61 开赛：48/72 小时极限做出可玩原型",
      "summary": "笔者注意到，Ludum Dare 61 如期开赛，沿用经典的 Solo（48h）与 Jam（72h）双赛道，给定主题后比拼创意与完成度。对新人，它是「逼自己交付一个完整循环」的最佳练兵——评分反馈比任何教程都真实。",
      "source": "Ludum Dare 官方（一手）",
      "date": "2026-11-03",
      "url": "https://ldjam.com/events/ludum-dare-61",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "Ludum Dare",
        "Game Jam",
        "极限开发"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Solo 48h 与 Jam 72h 双赛道；",
            "给定主题后比拼创意与完成度；",
            "评分反馈真实、练兵价值高。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Game Jam 的价值不在获奖，而在「限时逼出完整闭环」。新人最该从 LD 学到的，是把一个想法在三天内变成能玩的东西——这种肌肉，平时练不出来。"
        }
      ]
    },
    {
      "id": "co-taomee",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "淘米网络",
      "title": "淘米网络 2027 校招：游戏客户端/策划多岗，看重 AI 工具运用",
      "summary": "笔者观察到，淘米网络 2027 届校招开放游戏客户端开发等岗位，明确要求「具备良好的 AI 工具运用能力，能熟练使用 AI 编程工具提升效率」，并对 Agent/Skill/MCP 有实际了解者加分。对应届生，这释放出清晰信号：会用好 AI 工具，正在成为基础项。",
      "source": "24365 就业平台 / 淘米（一手）",
      "date": "2026-11-03",
      "url": "https://www.91job.org.cn/recruitment/jobDetails?dwid=702372&zpgwid=1000000000769903",
      "image": "",
      "badge": "招聘",
      "badgeType": "recruit",
      "readTime": "4 分钟",
      "hotScore": 79,
      "tags": [
        "淘米",
        "校招",
        "AI 工具"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开放游戏客户端开发等岗位；",
            "明确要求 AI 编程工具运用能力；",
            "Agent/Skill/MCP 实践者加分。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "招聘要求里写进「AI 工具运用」，是今年最值得新人注意的信号：会用 AI 提效，正从加分项变成基础项。早一点把它变成肌肉记忆，比临场抱佛脚强。"
        }
      ]
    },
    {
      "id": "co-37games",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "三七互娱",
      "title": "三七互娱 2027 秋招启动：以「游戏×AI 科技」寻新生力量",
      "summary": "笔者注意到，三七互娱 2027 届秋招以「游戏×AI 科技」为主题，岗位覆盖技术开发、AI 算法/平台、游戏研发、策划、美术与运营，并设有内推加速通道。对想进成熟发行体系的人，这是流程透明、岗位齐全的窗口期。",
      "source": "云校招 / 三七互娱（一手）",
      "date": "2026-11-03",
      "url": "https://51uns.bysjy.com.cn/Announce/Details/3575519?schoolCode=10723",
      "image": "",
      "badge": "招聘",
      "badgeType": "recruit",
      "readTime": "4 分钟",
      "hotScore": 78,
      "tags": [
        "三七互娱",
        "校招",
        "游戏 AI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "以「游戏×AI 科技」为主题；",
            "覆盖技术开发、AI 算法、研发、策划、美术、运营；",
            "设有内推加速通道。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "三七把「AI」写进校招主题，说明大厂已经把 AI 当作战略底色而非点缀。新人选题或准备作品集时，往「AI 如何真正服务玩法」上靠，会更容易被看见。"
        }
      ]
    }
  ]
};
