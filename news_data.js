window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-18",
    "weekday": "星期三",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-18 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：GTA 6 发售前两天，Take-Two 让 Firaxis 裁掉三分之一并换帅（hero）",
      "引擎精读：Stride 4.4/4.4.2 着色器管线现代化，PixiJS/Wicked/GB Studio/Pyxel 多引擎速览",
      "开源宝库：last30days-skill、腾讯 LoopForge、Claude-BugHunter、PaperOrchestra、Plannotator",
      "AI 前沿：米哈游 Gamer 自主游玩星穹铁道、GPT-6.2 突袭发布成本大降、游戏开发模型榜",
      "行业风向：GTA 6 预购破 14 亿、英国驳回 PS 诉讼、Unity 收购 Synty、Roblox 免费移植",
      "竞赛招聘：GGJ 2027 站点注册、网易雷火/互娱 2027 秋招（引擎/图形岗）"
    ],
    "engineStatus": [
      {
        "name": "Unreal 5.9",
        "type": "unreal",
        "status": "MegaJam 预览版",
        "badge": "预览",
        "color": "violet"
      },
      {
        "name": "Godot 4.8",
        "type": "godot",
        "status": "beta 3",
        "badge": "beta",
        "color": "teal"
      },
      {
        "name": "Unity 6.6",
        "type": "unity",
        "status": "官方设计指南更新",
        "badge": "6.6",
        "color": "cyan"
      },
      {
        "name": "Stride 4.4",
        "type": "stride",
        "status": "着色器管线现代化",
        "badge": "4.4",
        "color": "blue"
      },
      {
        "name": "PixiJS",
        "type": "pixijs",
        "status": "2D WebGL 活跃",
        "badge": "JS",
        "color": "green"
      },
      {
        "name": "Wicked",
        "type": "wicked",
        "status": "现代图形 API",
        "badge": "C++",
        "color": "orange"
      }
    ]
  },
  "hero": {
    "id": "hero-firaxis-layoff",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "Take-Two·Firaxis",
    "subcategory": "行业·人事",
    "title": "GTA 6 发售前两天，Take-Two 让 Firaxis 裁掉三分之一并换掉掌门人",
    "summary": "11 月 17 日，深耕策略游戏三十年的 Firaxis（《文明》《幽浮》）裁员约 60 人、占员工数三成，工作室负责人 Heather Hazen 同日离任；一款新《幽浮》据报在夏季未达成关键里程碑。Take-Two 称将「围绕核心优势重新聚焦」。在 GTA 6 上市前夕砍掉成熟工作室的人力，是组合逻辑压过情怀的又一例证，值得关注 IP 现金流的开发者细读。",
    "image": "https://storage.googleapis.com/the-executive-brief-images/cached-images/86a1a243032920b5d2f94c96a5bdaaef.webp",
    "source": "GamesIndustry.biz（一手报道）",
    "date": "2026-11-18",
    "url": "https://executivesbrief.com/news/firaxis-cuts-30-of-staff-as-a-new-xcom-misses-its-summer-milestone-86a1a2",
    "readTime": "8 分钟",
    "hotScore": 96,
    "tags": [
      "Firaxis",
      "Take-Two",
      "裁员",
      "GTA 6"
    ],
    "content": [
      {
        "title": "事实梳理",
        "type": "list",
        "items": [
          "11 月 17 日 Firaxis 裁员约 60 人，约占工作室员工 30%，工作室主管 Heather Hazen 离任",
          "据 Bloomberg，一款未公布的新《幽浮》在夏季未达成重要里程碑，项目继续但可能调整",
          "Take-Two 官方口径为「围绕核心优势重新聚焦」，强调设计、技术与玩家体验",
          "裁员发生在 GTA 6（11 月 19 日发售）前两天，交易后 Take-Two Q2 财报刚发布"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "把 Firaxis 与 GTA 6 放在同一张表看，才能读懂这次裁员：发行商用「里程碑是否达标」决定下一笔资金，延期信号一到，人力预算往往是最快能动的那一档。对想进大厂的开发者，选项目时看它是否处在母公司的现金牛赛道，比看工作室名气更实际。"
      }
    ]
  },
  "items": [
    {
      "id": "in-sensor-gta6",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·数据",
      "tag": "Sensor Tower",
      "title": "GTA 6 预购破 14 亿美元，87% 来自终极版",
      "summary": "Sensor Tower 统计显示 GTA 6 预购额已超 14 亿美元，其中 87% 为终极版；Netflix 播出延长版预告当天，单日预购增长六倍至 1630 万美元。高价位版本占绝对多数，说明核心用户对溢价内容接受度极高。这种「预购结构」比总量更能反映定价策略的成效。",
      "image": "https://assetsio.gnwcdn.com/gta-6-headline-launch-gallery-30.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手数据）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/sensor-tower-gta-6-pre-orders-exceed-14bn-with-87-for-the-ultimate-edition",
      "readTime": "5 分钟",
      "hotScore": 94,
      "tags": [
        "Sensor Tower"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "预购额超 14 亿美元，87% 为 200 美元级终极版",
            "Netflix 延长版预告上线当天单日预购 1630 万美元、环比增六倍",
            "高价位版本主导，反映核心粉丝溢价意愿",
            "数据为第三方估算，非官方财务口径"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "预购结构比总量更有信息量：终极版占 87% 意味着厂商的「分层定价 + 独家内容」打法被市场验证。做商业化设计时，与其纠结定价高低，不如想清楚每个档位凭什么让人觉得值。"
        }
      ]
    },
    {
      "id": "in-newzoo-gta6",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·用户研究",
      "tag": "Newzoo",
      "title": "Newzoo 画像：GTA 6 预购用户是典型主机玩家，且以男性为主",
      "summary": "Newzoo 独家分析指出，GTA 6 早期预购人群是高消费的主机玩家、多数有系列前作经历，且性别以男性为主；结论是游戏会「做大市场而非重新分配市场」，上市初期影响局限于西方市场。用户画像比销量数字更能指导发行节奏与本地化排期。",
      "image": "https://assetsio.gnwcdn.com/Jason_and_Lucia_20.0cd~.c7jr~5g9_ZsIyOIo.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（Newzoo 独家）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/newzoo-gta-6-pre-orders-are-archetypal-console-players-but-overwhelmingly-male-game-will-grow-the-market-rather-than-simply-redistribute-it",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "Newzoo"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "预购人群以高消费主机玩家为主，多数有系列前作经历",
            "性别结构以男性为主",
            "Newzoo 判断会扩大市场而非重新分配存量",
            "上市初期影响集中在西方市场"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「做大市场还是重新分蛋糕」是判断一款超级大作商业价值的关键分歧。把用户画像与地域节奏结合看，比单看预购额更能推演它对各平台、各区域的实际拉动。"
        }
      ]
    },
    {
      "id": "in-uk-ps-lawsuit",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·法务",
      "tag": "GamesIndustry.biz",
      "title": "英国法庭驳回 20 亿英镑 PlayStation 抽成诉讼",
      "summary": "英国竞争上诉法庭驳回一桩标的约 20 亿英镑的 PlayStation 集体诉讼，原告指控索尼商店 30% 抽成构成不公平定价。法庭认为消费者有实体版与竞品主机等替代选择，与此前对 App Store 的判决不同。平台抽成是否「过高」，历来取决于替代方案的认定。",
      "image": "https://assetsio.gnwcdn.com/playstation-5-reet-talreja-unsplash.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/uk-tribunal-dismisses-2bn-playstation-class-action-suit-which-alleged-unfair-pricing-over-30-cut-on-playstation-store",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "GamesIndustry.biz"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "英国竞争上诉法庭驳回约 20 亿英镑集体诉讼",
            "争点为 PS Store 30% 抽成是否不公平定价",
            "法庭认定实体版与竞品主机构成充分替代",
            "结果与此前 App Store 案不同"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "同样是 30% 抽成，为什么在手机端被判有问题、在主机端被驳回？关键在「替代选项」如何界定。做平台经济分析时，先问替代品，再谈定价，顺序反了结论就会偏。"
        }
      ]
    },
    {
      "id": "in-roblox-creator",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·平台",
      "tag": "GamesIndustry.biz",
      "title": "Roblox 推出创作者计划，免费把游戏带上多端",
      "summary": "Roblox 启动一项面向开发者的创作者计划，与少量开发者与游戏合作，覆盖移动端、PC 和主机，帮助把自己的作品免费引入平台。此举发生在 Roblox 调整分成策略、股价承压的背景下，意在补充优质内容供给。平台的吸引力，最终还是取决于创作者能否赚到钱。",
      "image": "https://assetsio.gnwcdn.com/roblox_RBFFQkI.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/roblox-launches-creator-program-for-devs-to-bring-games-to-its-platform-for-free",
      "readTime": "5 分钟",
      "hotScore": 87,
      "tags": [
        "GamesIndustry.biz"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Roblox 新创作者计划覆盖移动、PC、主机多端",
            "初期与少量开发者及游戏合作",
            "允许开发者免费把作品引入平台",
            "背景为平台分成调整与股价承压"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "UGC 平台的竞争正在从「谁给的多」转向「谁能把好内容稳定带进来」。对独立开发者，多一个免费分发入口是机会，但要看清分成与曝光规则，别只被「零门槛」吸引。"
        }
      ]
    },
    {
      "id": "in-unity-synty",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "GamesIndustry.biz",
      "title": "Unity 收购 3D 素材厂商 Synty，并入 AI 创作平台 Unity Spark",
      "summary": "Unity 宣布收购 3D 美术素材 creator Synty Studios，其作品将以原有品牌、艺术家与风格继续提供，并整合进 AI 游戏创作平台 Unity Spark。这是 Unity 在生成式 AI 创作工具上的又一次内容侧补强。工具平台收购素材库，本质是给 AI 创作备好「合规的原料」。",
      "image": "https://assetsio.gnwcdn.com/Unity%2BSyntyStudios_02.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/unity-acquires-3d-asset-creator-synty-studios-artist-created-content-to-be-integrated-into-ai-game-creation-platform-unity-spark",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "GamesIndustry.biz"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Unity 收购 3D 素材厂商 Synty Studios",
            "Synty 保留原品牌、艺术家与风格",
            "内容将整合进 AI 创作平台 Unity Spark",
            "延续 Unity 在生成式 AI 工具链上的布局"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "AI 创作平台要落地，绕不开「素材从哪来、版权归谁」。Unity 直接买下素材库，是把合规原料握在自己手里的一步。对美术从业者，这类整合既带来分发渠道，也提示原创素材的授权条款会越来越值钱。"
        }
      ]
    },
    {
      "id": "in-valve-breach",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·安全",
      "tag": "GamesIndustry.biz",
      "title": "Valve 确认 Steam 硬件买家数据因物流商攻击外泄",
      "summary": "Valve 确认 Steam Deck 等硬件购买者的数据在区域物流伙伴 CEVA Logistics 遭网络攻击时泄露，受影响者以欧洲客户为主。事件发生在承运商环节，而非 Steam 平台本身。第三方供应链正在成为数据安全链条上最薄弱的一环。",
      "image": "https://assetsio.gnwcdn.com/Steam-Machine-(3).png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/valve-confirms-steam-hardware-buyers-data-exposed-in-ceva-logistics-cyberattack",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "GamesIndustry.biz"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Valve 确认 Steam 硬件买家数据外泄",
            "泄露发生在物流伙伴 CEVA Logistics",
            "受影响客户以欧洲为主",
            "Steam 平台本身未被攻破"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把用户数据交给供应商，就等于把安全边界交出去一部分。做产品时评估第三方 SDK、物流、支付等外部环节，和加固自家系统同等重要——这也是一条常被忽略的工程常识。"
        }
      ]
    },
    {
      "id": "in-bravarda",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·工作室",
      "tag": "GamesIndustry.biz",
      "title": "里斯本工作室 Bravarda 关闭，新作未能收回开发成本",
      "summary": "位于里斯本的 Studio Bravarda 宣布关闭，原因是最新作品《Extremely Powerful Capybaras》未能收回开发成本，团队称已到「无法长期继续经营」的地步。又一家中小型工作室倒在回本线上。买断制小品的市场容错空间，正被越来越高的曝光成本压缩。",
      "image": "https://assetsio.gnwcdn.com/extremely-powerful-capybaras.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/lisbon-based-studio-bravarda-closes-down-after-failing-to-recoup-dev-costs-on-its-most-recent-title-extremely-powerful-capybaras",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "GamesIndustry.biz"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "里斯本 Studio Bravarda 宣布关闭",
            "新作《Extremely Powerful Capybaras》未收回开发成本",
            "团队称无法长期持续经营",
            "延续中小工作室「回本难」的行业趋势"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把 Bravarda 和近期一连串关闭、裁员放在一起看，会发现共同点不是产品质量，而是「被发现」的成本。对独立团队，立项时把发行与曝光预算当成和产品同等的头等大事，比多堆叠玩法更现实。"
        }
      ]
    },
    {
      "id": "in-coffeestain-ip",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "GamesIndustry.biz",
      "title": "Coffee Stain 收购破产厂商的《Chronicles: Medieval》IP",
      "summary": "《满意工厂》发行商 Coffee Stain 从破产的 Raw Power Games 手中收购《Chronicles: Medieval》IP，将与原作部分成员组建新公司并持股 75%。买 IP + 留核心团队，是成熟的 IP 抢救式收购范式。",
      "image": "https://assetsio.gnwcdn.com/ss_8d564795cb6b1eaeb9f3ea6b862b445ffe62a5e5.1920x1080.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/coffee-stain-acquires-chronicles-medieval-ip-from-bankrupt-raw-power-games",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "GamesIndustry.biz"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Coffee Stain 收购《Chronicles: Medieval》IP",
            "卖方为已破产的 Raw Power Games",
            "与原作成员组建新公司，持股 75%",
            "发行商典型的 IP 抢救式收购"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「买 IP 连带把做它的人捞回来」这套打法，比单纯买代码或美术资产更聪明——因为项目的隐性知识都在这批人脑子里。研究产业并购时，值得留意这种「人 + IP」捆绑的交易结构。"
        }
      ]
    },
    {
      "id": "ga-ck3silk",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·DLC",
      "tag": "Paradox",
      "title": "《十字军之王 3》第五部大型扩展「丝绸与白银」11/17 上线",
      "summary": "Paradox 于 11 月 17 日推出《十字军之王 3》第五部大型扩展「丝绸与白银」（Steam appid 4232910），主打无地商人家族与共和制玩法：建立贸易路线、游说贵族、把商业垄断转化为政治权力。策略游戏把「经济系统」做成主线，给数值设计提供了新样本。",
      "image": "",
      "source": "CK3 Wiki / Paradox 官方资料（一手发售信息）",
      "date": "2026-11-18",
      "url": "https://ck3.paradoxwikis.com/Silk_%26_Silver",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "Paradox"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "「丝绸与白银」为 CK3 第五部大型扩展，11 月 17 日发售",
            "新增无地商人家族玩法与共和制政体",
            "可建立商路、游说、垄断商品并转化为政治影响力",
            "Steam DLC appid 4232910，国区定价约 178 元"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「赚钱」而非「打仗」做成一整个扩展的核心循环，说明策略游戏的系统深度还有大量未被开采的矿脉。做系统设计的开发者可以留意它如何把贸易、法律、派系串成一条可玩的成长线。"
        }
      ]
    },
    {
      "id": "ga-swarmbreaker",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·发售",
      "tag": "Paracorn",
      "title": "物理塔防《Swarmbreaker》11/18 发售：敌人是大规模物理模拟",
      "summary": "由 Paracorn 开发的塔防新作《Swarmbreaker》（Steam appid 4948940）定档 11 月 18 日，主打「敌人不是一波波刷新，而是大规模动态物理模拟」。Demo 保留并新增关卡、挑战模式与可移动炮塔，多数改动来自玩家反馈。物理模拟与塔防的结合，是玩法微创新的一个务实样本。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4948940/9ca398a9595a2161d1178c2a34e235b86ecca845/header.jpg?t=1794913776",
      "source": "SteamRaw / Steam 官方商店数据（一手发售信息）",
      "date": "2026-11-18",
      "url": "https://steamraw.com/app/4948940/swarmbreaker",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Paracorn"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "《Swarmbreaker》11 月 18 日正式发售（appid 4948940）",
            "核心卖点是敌人采用大规模动态物理模拟",
            "正式版加入新关卡、挑战模式、可移动炮塔",
            "大量改动源自 Demo 阶段的玩家反馈"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「用物理模拟替代脚本化刷怪」听起来是技术噱头，但真正的价值在于让每一局都不可复现——这正是塔防品类最缺的重玩动力。小团队用单一机制做出辨识度，比堆内容量更划算。"
        }
      ]
    },
    {
      "id": "ga-tanuki",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·独立",
      "tag": "GamesIndustry.biz",
      "title": "《Tanuki: Pon’s Summer》：想做《塞尔达》与 GTA 6 之间的「小可爱黑马」",
      "summary": "GamesIndustry.biz 专访独立作品《Tanuki: Pon’s Summer》团队，开发者把目标定位为「玩家玩完塞尔达和 GTA 6 之后，会想起的那款 BMX 狸猫游戏」。在超级大作扎堆的档期，中小作品如何找到自己的生态位，这篇访谈给了很实在的思路。",
      "image": "https://assetsio.gnwcdn.com/TANUKI_4K_KEY_NO-LOGO.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "GamesIndustry.biz（一手专访）",
      "date": "2026-11-18",
      "url": "https://www.gamesindustry.biz/tanuki-pons-summer-is-hoping-to-be-a-lovely-little-underdog-between-ocarina-of-time-and-gta-6",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "GamesIndustry.biz"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "独立游戏《Tanuki: Pon’s Summer》以 BMX 狸猫为主角",
            "团队定位为「时之笛与 GTA 6 之间的可爱黑马」",
            "访谈谈到大作档期下的差异化生存策略",
            "主打轻松探索与主角辨识度"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「在大作间隙做一款让人记住的小作品」，是独立团队对抗曝光危机的清醒选择。它提醒开发者：定位不是写在宣传语上的形容词，而是你愿意为哪类玩家、在哪个时段腾出位置。"
        }
      ]
    },
    {
      "id": "ga-steamweek",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·新游速览",
      "tag": "腾讯新闻",
      "title": "Steam 11/18 新游扎堆：方舟工厂、第一人称银河城、物理沙盒同日上线",
      "summary": "腾讯新闻整理 11 月 16 至 22 日 Steam 上架新游，11 月 18 日单日就有《STEEL GULLET》（移动方舟上用热力学建厂）、《AlterMage》（第一人称魔法银河城）、《Granule》（物理沙盒）、《Space Station Designer》（空间站设计模拟）等多款作品，中文支持比例不低。密集上新里藏着不少机制有意思的小体量作品。",
      "image": "https://inews.gtimg.com/om_ls/OiqbzqsRx0a3N2kF0rGQtKm3s6mRw95Yi-p2OunzTjxYMAA_330330/0",
      "source": "腾讯新闻（Steam 上架推荐）",
      "date": "2026-11-18",
      "url": "https://news.qq.com/rain/a/20261117A036LC00",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "腾讯新闻"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 18 日多款 Steam 新游同日发售",
            "《STEEL GULLET》主打热力学工厂建造",
            "《AlterMage》为第一人称魔法银河城",
            "《Granule》主打无脚本物理沙盒互动"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "单日扎堆上新既是机会也是灾难：玩家注意力被摊薄，机制再新也容易被淹没。对独立开发者，选发售档期和做玩法一样重要——避开 3A 大作的影子，往往比硬碰硬更聪明。"
        }
      ]
    },
    {
      "id": "os-last30days",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·AI 智能体",
      "tag": "GitHub",
      "title": "last30days-skill：让智能体跨平台检索「最近 30 天」再给结论",
      "summary": "GitHub 热榜项目 mvanhorn/last30days-skill（约 6.8 万星）是一个 AI 智能体技能，能在 Reddit、X、YouTube、Hacker News、Polymarket 与全网检索某主题近期动态，再综合出带依据的摘要。它把「时效性检索」封装成可复用技能，省去每次手写提示词的麻烦。",
      "image": "https://opengraph.githubassets.com/1/mvanhorn/last30days-skill",
      "source": "GitHub: mvanhorn/last30days-skill（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/mvanhorn/last30days-skill",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "GitHub"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "跨平台检索 Reddit / X / YouTube / HN / Polymarket",
            "按「近期」时间窗聚合，输出带依据摘要",
            "以 Agent Skill 标准封装，可被多种编码智能体加载",
            "GitHub 约 6.8 万星，11 月 17 日活跃更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「搜索 + 归纳」做成标准技能，而不是每次现写提示词，是智能体工程走向复用的典型信号。做工具链的人可以借鉴：稳定的能力边界 + 统一接口，比堆功能更容易被社区采用。"
        }
      ],
      "badge": "AI",
      "badgeType": "ai"
    },
    {
      "id": "os-loopforge",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工作流",
      "tag": "GitHub",
      "title": "腾讯 LoopForge：自托管编码智能体交付工作流",
      "summary": "腾讯在 GitHub 开源 LoopForge（约 2.8 千星），一套自托管的编码智能体交付工作流，可用脚本编排 CodeBuddy、Codex 与 Claude Code，并加入人工审批关卡（human approval gate）。它把「AI 写代码」纳入有审核、可追溯的工程流程，而不是放任自动提交。",
      "image": "https://opengraph.githubassets.com/1/Tencent/LoopForge",
      "source": "GitHub: Tencent/LoopForge（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/Tencent/LoopForge",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "GitHub"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "腾讯开源的自托管编码智能体编排工作流",
            "支持脚本化编排 CodeBuddy / Codex / Claude Code",
            "内置人工审批关卡，强调人在回路",
            "覆盖 SOP / 多智能体 / 代码评审等场景"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「让 AI 写代码」不难，难的是让它的产出可审核、可回滚、可追责。LoopForge 把人工审批做成一等公民，正是生产环境引入智能体时最该先补的那一环。"
        }
      ],
      "badge": "AI",
      "badgeType": "ai"
    },
    {
      "id": "os-bughunter",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·安全",
      "tag": "GitHub",
      "title": "Claude-BugHunter：82 个技能组成的漏洞挖掘工具包",
      "summary": "GitHub 项目 elementalsouls/Claude-BugHunter（约 8 千星）是一套面向漏洞挖掘与外部红队的 Claude Code 技能包，含 82 个技能、15 个斜杠命令、覆盖 24 类核心漏洞的 681 个披露报告范式，以及企业身份与基础设施攻击矩阵。它把安全研究经验结构化成了可复用的智能体知识。",
      "image": "https://opengraph.githubassets.com/1/elementalsouls/Claude-BugHunter",
      "source": "GitHub: elementalsouls/Claude-BugHunter（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/elementalsouls/Claude-BugHunter",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "GitHub"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "82 个漏洞挖掘技能 + 15 个斜杠命令",
            "覆盖 24 类核心漏洞的 681 个披露范式",
            "含企业身份与基础设施攻击矩阵",
            "面向授权红队与安全研究，非攻击自动化"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把专家经验整理成结构化技能库，是智能体在垂直领域真正好用的前提。这类项目的价值不在「自动化攻击」，而在把散落的披露案例变成可检索、可传承的知识资产。"
        }
      ]
    },
    {
      "id": "os-paperorch",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·研究工具",
      "tag": "GitHub",
      "title": "PaperOrchestra：多智能体协作写 AI 论文",
      "summary": "Google Research 在 GitHub 开源 paper-orchestra（约 2.1 千星），一套用多智能体框架自动化 AI 研究论文写作的工具。它把文献梳理、实验归纳、文稿撰写拆给不同智能体协作完成，是「多智能体分工」在科研写作场景的一次落地尝试。",
      "image": "https://opengraph.githubassets.com/1/google-research/paper-orchestra",
      "source": "GitHub: google-research/paper-orchestra（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/google-research/paper-orchestra",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "GitHub"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Google Research 开源的多智能体论文写作框架",
            "把研究写作拆成多个子任务由智能体分工",
            "11 月 15 日仍在活跃更新",
            "面向 AI 研究辅助，非结果真实性保证"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "多智能体的价值在于「分工」而非「多喊几个人」。看这类项目，重点不是它能多快出稿，而是每个角色的输入输出边界是否清晰——这决定了结果能不能被验证。"
        }
      ]
    },
    {
      "id": "os-plannotator",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·代码评审",
      "tag": "GitHub",
      "title": "Plannotator：把「计划—评审—反馈」塞进一个智能体工作区",
      "summary": "GitHub 项目 backnotprop/plannotator（约 1.3 万星）提供一个工作区，让开发者在智能体写代码前先塑造、决定、规划、标注与评审，再把反馈一键回传给智能体。它强调「人始终在环」，把计划评审前置到生成动作之前。",
      "image": "https://opengraph.githubassets.com/1/backnotprop/plannotator",
      "source": "GitHub: backnotprop/plannotator（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/backnotprop/plannotator",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "GitHub"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "围绕智能体的计划—评审—反馈工作区",
            "支持规划、标注、评审并一键回传反馈",
            "兼容 OpenCode / Codex / Claude Code 等工具",
            "GitHub 约 1.3 万星，11 月 17 日活跃"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "与其等智能体写完再返工，不如在动手前把计划聊清楚。Plannotator 把「先对齐再执行」产品化，这条经验对任何用 AI 做复杂任务的团队都适用。"
        }
      ]
    },
    {
      "id": "tu-srp",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·渲染",
      "tag": "Catlike Coding",
      "title": "Catlike Coding 自定义 SRP 教程更新到 7.0，跟着从零搭渲染管线",
      "summary": "Catlike Coding 的 Unity 自定义 SRP（可脚本化渲染管线）系列已更新到 7.0.0，是少见的「从零手写渲染管线」系统教程：从绘制调用、光照到后处理逐步搭建。配合 Unity 官方文档食用，能补上只会用现成 URP/HDRP 的底层盲区。",
      "image": "https://catlikecoding.com/unity/tutorials/custom-srp/color-grading/tutorial-image.jpg",
      "source": "Catlike Coding（开发者一手教程）",
      "date": "2026-11-18",
      "url": "https://catlikecoding.com/unity/tutorials/custom-srp/",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Catlike Coding"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "自定义 SRP 系列已更新至 7.0.0",
            "从绘制调用、光照到后处理逐步手写渲染管线",
            "与 Unity 官方渲染文档互补",
            "适合想理解 URP/HDRP 底层原理的开发者"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "只会调 URP 参数，和能读懂一帧是怎么被画出来的，是两回事。花时间手写一遍渲染管线，短期不产出项目，长期却决定了你能不能真正解决画面性能问题。"
        }
      ]
    },
    {
      "id": "tu-shaderopt",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·性能优化",
      "tag": "Unity 官方文档",
      "title": "Unity 官方着色器优化手册：移动端先砍复杂计算与重复计算",
      "summary": "Unity 官方手册的「优化着色器」页给出一组朴素但有效的建议：用查找纹理替代 pow/log/sin、把片元计算挪到顶点、用 half 降低精度、避免 discard 与写深度缓冲。这些条目尤其针对 GPU 性能受限的移动平台。",
      "image": "https://unity3d.com/files/images/ogimg.jpg",
      "source": "Unity 官方文档（一手）",
      "date": "2026-11-18",
      "url": "https://docs.unity3d.com/6000.1/Documentation/Manual/SL-ShaderPerformance.html",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Unity 官方文档"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "用查找纹理替代 pow / log / sin 等重函数",
            "把可提前算的部分从片元移到顶点着色器",
            "除世界坐标和纹理坐标外优先用 half",
            "移动端避免 discard、ColorMask 与写深度"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "优化的第一原则不是「上更高级的 GPU」，而是「少做无用功」。这份清单里的每一条都能直接落到代码，是移动端图形性能调优最划算的入场课。"
        }
      ]
    },
    {
      "id": "tu-mobilecheck",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·移动优化",
      "tag": "Ocean View Games",
      "title": "一份务实的 Unity 移动端优化清单：从 GC 到帧率分层",
      "summary": "Ocean View Games 发布的移动端优化清单，把建议按渲染、内存、物理、脚本分层：核心目标是核心循环「每帧零分配」以避免 GC 尖峰，用 URP、烘焙光照、NonAlloc 物理查询、IL2CPP，并按机型做高中低三档画质。清单化表达让优化不再靠灵感。",
      "image": "https://oceanviewgames.co.uk/api/og?title=Mobile+Game+Optimisation&category=Blog&author=David+Edgecombe&v=4",
      "source": "Ocean View Games（开发者技术博客）",
      "date": "2026-11-18",
      "url": "https://oceanviewgames.co.uk/blog/posts/unity-mobile-optimization-checklist",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Ocean View Games"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "目标：核心游戏循环每帧零堆分配，消除 GC 尖峰",
            "渲染用 URP + 烘焙光照 + 精简着色器变体",
            "物理用 NonAlloc 查询与简化碰撞体",
            "按设备分级设高中低画质与目标帧率"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "优化清单最大的价值是把「要注意性能」变成「逐条能核对的动作」。把它贴在项目墙上，每次提测前过一遍，比临上线才想起 Profile 有效得多。"
        }
      ]
    },
    {
      "id": "ai-gamer",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·游戏智能体",
      "tag": "米哈游",
      "title": "米哈游开源 Gamer：像真人一样用键鼠玩《崩坏：星穹铁道》",
      "summary": "11 月 17 日，米哈游《崩坏》AI 团队联合清华、北大等高校发布通用视觉语言动作模型 Gamer，只靠每秒 5 帧截图与键鼠指令操作 2D/3D 游戏，不读游戏内部数据、不依赖专用 API。用超 1 万小时跨游戏轨迹预训练，自研 Streaming-vLLM 把端到端延迟从 1306ms 降到 65ms。这是「通用交互智能体」在游戏测试方向的一次可核查探索。",
      "image": "https://inews.gtimg.com/om_ls/O0e4I1cLPeuiXt1Ml02NcjEUih8z-UBZTBdDGZ3LmTuLUAA_330330/0",
      "source": "腾讯新闻 / 米哈游 AI 团队（一手发布）",
      "date": "2026-11-18",
      "url": "https://news.qq.com/rain/a/20261117A0ABA700",
      "readTime": "5 分钟",
      "hotScore": 96,
      "tags": [
        "米哈游"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 17 日发布，联合多所高校，定位通用视觉语言动作模型",
            "以 5Hz 截图 + 30Hz 键鼠指令操作，不读内部状态、不用专用 API",
            "超 1 万小时跨游戏轨迹预训练，Streaming-vLLM 延迟 1306ms→65ms",
            "Gamer-RL 在 40 项陌生小游戏任务平均成功率 49.7%"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "值得关注的不是「AI 会打游戏」，而是它坚持走人类输入路径——这决定了这套能力有望迁移到自动化测试与无障碍辅助。团队明确不开放星穹铁道数据与权重，也说明学术探索与商业落地之间仍有边界。"
        }
      ],
      "badge": "热",
      "badgeType": "hot"
    },
    {
      "id": "ai-gpt62",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·大模型",
      "tag": "OpenAI",
      "title": "OpenAI 突袭发布 GPT-6.2 Astra 与 Sol，主打成本大幅下探",
      "summary": "当地时间 11 月 17 日，OpenAI 在 ChatGPT Work、Codex 与 API 三个入口上线 GPT-6.2 Astra 与 Sol。官方称 Astra 在工作与科学评测中刷新纪录、成本不足上一代三分之一，两款模型在网络安全能力达准备度框架 Critical 级。模型竞争正从「拼榜单」转向「性能—成本—入口」三重较量。",
      "image": "",
      "source": "搜狐科技（OpenAI 官方发布转述）",
      "date": "2026-11-18",
      "url": "https://www.sohu.com/a/1102940723_128075",
      "readTime": "5 分钟",
      "hotScore": 95,
      "tags": [
        "OpenAI"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 17 日在 ChatGPT Work / Codex / API 三入口上线",
            "Astra 刷新工作与科学评测纪录，成本不足前代三分之一",
            "两款模型网络安全能力达准备度框架 Critical 级",
            "API 模型名 gpt-6.2-astra / gpt-6.2-sol"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "性能纪录与成本曲线同时变化，才是真正的产业信号：当单位任务成本降到可规模化，企业 AI 应用会从「试点」转为「常规采购」。对开发者，缓存前缀、上下文档位这些工程细节，正变得和选哪个模型一样影响账单。"
        }
      ],
      "badge": "热",
      "badgeType": "hot"
    },
    {
      "id": "ai-gamedevrank",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·模型评测",
      "tag": "AgentKernel",
      "title": "游戏开发场景模型榜：Claude Opus 5.5 领衔，开放权重看 Kimi K3.1 Pro",
      "summary": "模型评测站 AgentKernel 更新「游戏开发」场景榜单（11 月 17 日）：Claude Opus 5.5 以 1427 Elo 居首，Meta Muse Wonder、GPT-6.1 Sol 紧随；开放权重最佳为 Kimi K3.1 Pro（1403）。这类按具体场景切分的榜单，比综合排名更贴近「我该为游戏项目选哪个模型」的实际问题。",
      "image": "https://www.agentkernel.si/og.png",
      "source": "AgentKernel（模型评测榜）",
      "date": "2026-11-18",
      "url": "https://www.agentkernel.si/best-ai/game-development",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "AgentKernel"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Claude Opus 5.5 以 1427 Elo 居游戏开发榜首",
            "Meta Muse Wonder、GPT-6.1 Sol 分列二三",
            "开放权重最佳为 Kimi K3.1 Pro（1403）",
            "榜单基于用户对生成结果的头对头投票"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「哪个模型最强」是没有答案的问题，「哪个模型最适合写代码 / 生成素材 / 做 NPC」才有。按场景切分的评测是可用的选型参考，但仍要结合自己的任务实测，别把榜单分数当生产保证。"
        }
      ],
      "badge": "AI",
      "badgeType": "ai"
    },
    {
      "id": "ai-copilot-retire",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·开发工具",
      "tag": "GitHub",
      "title": "GitHub Copilot 下线三款模型，Claude Opus 5 与 GPT-5.6 Terra 退场",
      "summary": "GitHub 宣布自 11 月 16 日起，在 Copilot 聊天、内联编辑、Agent 模式与代码补全中下线 Claude Opus 4.8、Claude Opus 5 与 GPT-5.6 Terra，建议迁移到 Claude Opus 5.5 或 GPT-6.1 Sol / GPT-6 Luna。这是 Copilot 产品侧的模型调整，厂商自身 API 仍可调用这些模型。开发工具的「模型可换」，要求工作流别绑死单一模型。",
      "image": "https://github.blog/wp-content/uploads/2026/11/708090845-dba83c99-f90a-44f8-b5dc-ea4d634a8dee.jpg",
      "source": "GitHub 官方 Changelog（一手）",
      "date": "2026-11-18",
      "url": "https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "GitHub"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 16 日起 Copilot 多渠道下线三款模型",
            "Claude 系列建议迁移到 Opus 5.5",
            "GPT-5.6 Terra 建议迁移到 GPT-6.1 Sol 或 GPT-6 Luna",
            "属产品侧调整，厂商 API 仍可调用"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把工作流绑死在某一个模型名上，迟早会遇到这样的下线通知。更稳的做法是让提示词、评测集与模型层解耦——这样换模型只是改配置，而不是重写流程。"
        }
      ],
      "badge": "AI",
      "badgeType": "ai"
    },
    {
      "id": "ai-codingplans",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·行业观察",
      "tag": "Standard Compute",
      "title": "11 月 AI 编程套餐大变动：模型退役、开放权重上量",
      "summary": "Standard Compute 梳理 11 月 AI 编程订阅变化：多家平台退役旧模型并给出替代、开放权重模型（如 Meta Muse Spark Open、Reflection Beam 1.0）密集上线，价格带进一步分化，部分套餐额度与日上限同步调整。订阅制 AI 工具正进入「高频迭代 + 精细计价」阶段。",
      "image": "https://standardcompute.com/opengraph-image.png",
      "source": "Standard Compute（行业变动梳理）",
      "date": "2026-11-18",
      "url": "https://standardcompute.com/ai-coding-plan-changes",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Standard Compute"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "多家平台 11 月退役旧模型并给出迁移路径",
            "Meta Muse Spark Open、Reflection Beam 1.0 等开放权重模型上线",
            "不同价位档与额度上限调整频繁",
            "订阅制工具进入高频迭代期"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "AI 工具的价格与模型还在快速变动，做预算和选型时要留弹性。与其追求「一步选对」，不如定期回看账单和模型清单——这已经是常态化的工程维护工作。"
        }
      ],
      "badge": "AI",
      "badgeType": "ai"
    },
    {
      "id": "co-ggj2027",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·GameJam",
      "tag": "Global Game Jam",
      "title": "GGJ 2027 站点注册开放：1/25–31 全球 48 小时共做一款游戏",
      "summary": "全球游戏制作马拉松 Global Game Jam 2027 已开放站点注册（2026 年 11 月 1 日起），官方活动周为 2027 年 1 月 25 至 31 日；参与者注册将于 12 月 1 日开放。赛事覆盖上百国家、800 多个站点，团队在 48 小时内围绕统一主题做出可玩原型。想积累作品集的新生，这是门槛最低的实战场之一。",
      "image": "https://www.stavleak.com/en/catalog/global-game-jam-2027/opengraph-image-14ba9l?5b0f4388c646d73a",
      "source": "Global Game Jam 赛事日历（一手赛程信息）",
      "date": "2026-11-18",
      "url": "https://www.stavleak.com/en/catalog/global-game-jam-2027",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "Global Game Jam"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "站点注册 11 月 1 日开放，参与者注册 12 月 1 日开放",
            "官方活动周 2027 年 1 月 25 至 31 日",
            "48 小时内围绕统一主题做可玩原型",
            "覆盖上百国家、800 多个线下/线上站点"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "对零基础新生，Game Jam 的价值不在获奖，而在「48 小时把一个想法做到能玩」。这种强制压缩的练习，比跟着教程做半年更接近真实开发。先在校内找个站点报名，是成本最低的第一步。"
        }
      ],
      "badge": "赛事",
      "badgeType": "event"
    },
    {
      "id": "co-netease-leyhuo",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易游戏雷火",
      "title": "网易雷火 2027 届秋招：引擎/渲染、游戏 AI Agent 岗位在列",
      "summary": "网易游戏雷火 2027 届秋季校园招聘全球开启，技术类岗位覆盖游戏引擎/渲染、客户端/服务端、技术美术与测试开发；AI 类岗位含 Agent 智能体与强化学习、LLM Agent、游戏 AI、智能 NPC 方向。这是面向 2027 届毕业生、以技术与 AI 岗为重点的一次大规模招聘。",
      "image": "",
      "source": "网易游戏雷火校招公告（招聘信息）",
      "date": "2026-11-18",
      "url": "https://www.xiamenrcw.cn/xiaoyuanzhaopin_1469B4B334F01CF4.shtml",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "网易游戏雷火"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "面向 2027 届毕业生的秋季校园招聘",
            "技术类含游戏引擎/渲染、客户端/服务端、技术美术",
            "AI 类含 Agent、强化学习、智能 NPC 等方向",
            "具体岗位以校招官网为准"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「引擎/渲染」和「游戏 AI Agent」放在同一份招聘清单里，正是当下技术岗的风向：图形与智能体两条线都在扩。准备校招的同学，作品集里有一个能跑的引擎或智能体 Demo，比堆课程分数更有说服力。"
        }
      ],
      "badge": "招聘",
      "badgeType": "event"
    },
    {
      "id": "co-netease-huyu",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易游戏互娱",
      "title": "网易互娱 2027 秋招正式批：图形开发、引擎研发 HC 充足",
      "summary": "网易游戏（互娱）2027 届秋招正式批进行中，《蛋仔派对》《燕云十六声》《第五人格》《漫威争锋》等项目在招。程序方向的游戏引擎研发工程师、图形开发工程师被列为 HC 充足的优先岗位，面向 2027 届、广州/杭州/上海多地可选。投递入口以校招官网为准，警惕付费内推诈骗。",
      "image": "",
      "source": "高校就业平台 / 网易互娱校招公告",
      "date": "2026-11-18",
      "url": "https://24365.cq.smartedu.cn/campus/view/id/733453",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "网易游戏互娱"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "网易互娱 2027 届秋招正式批进行中",
            "引擎研发、图形开发列为 HC 充足优先岗位",
            "覆盖广州/杭州/上海多地，面向 2027 届",
            "官方提醒警惕第三方付费内推诈骗"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「HC 充足的岗位优先冲」是求职的务实提醒：同样是投简历，选对缺口大的方向，回报率差很多。图形开发连续出现在多家大厂的重点岗位里，说明这条技术线的供需缺口是真实的。"
        }
      ],
      "badge": "招聘",
      "badgeType": "event"
    },
    {
      "id": "en-stride442",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·版本",
      "tag": "Stride",
      "title": "Stride 4.4/4.4.2 落地：着色器管线现代化与确定性构建",
      "summary": "开源 C# 引擎 Stride 在 11 月发布 4.4 正式版并跟进 4.4.2 补丁：着色器管线现代化（SPIR-V 路线）、更广的跨平台构建与测试、新 CLI 工作流、强化 Vulkan/D3D12 与 NativeAOT 支持。补丁版修复了资源状态跟踪、着色器报错定位与构建的确定性——多次构建产出一致，对版本管理很关键。",
      "image": "https://opengraph.githubassets.com/1/stride3d/stride",
      "source": "GitHub: stride3d/stride（官方仓库）",
      "date": "2026-11-18",
      "url": "https://github.com/stride3d/stride",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Stride"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Stride 4.4 正式版（11 月 14 日）与 4.4.2 补丁接连发布",
            "着色器管线现代化，推进 SPIR-V 与新 SDSL 解析",
            "强化 Vulkan / D3D12 与 NativeAOT、新 CLI 工作流",
            "4.4.2 修复资源状态跟踪与构建确定性"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「多次构建产出一致」听起来不起眼，却是大型项目可复现构建的基石。评估引擎时，这类工程细节比功能清单更能预测长期维护成本。"
        }
      ]
    },
    {
      "id": "en-pixijs",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·2D/Web",
      "tag": "PixiJS",
      "title": "PixiJS：老牌 2D WebGL 渲染引擎持续高频迭代",
      "summary": "GitHub 项目 pixijs/pixijs（约 4.9 万星）是成熟的 HTML5 2D 渲染引擎，主打快速灵活的 WebGL/WebGPU 渲染，11 月仍在活跃更新。对要做 2D 网页游戏、互动内容或小游戏原型的团队，它是比从零写 Canvas 更稳的起点。",
      "image": "https://opengraph.githubassets.com/1/pixijs/pixijs",
      "source": "GitHub: pixijs/pixijs（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/pixijs/pixijs",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "PixiJS"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "成熟的开源 HTML5 2D 渲染引擎，约 4.9 万星",
            "支持 WebGL / WebGPU 渲染",
            "11 月保持活跃迭代",
            "适合网页游戏与互动内容"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Web 小游戏的底层渲染早已不是「能不能做」，而是「够不够稳、够不够省」。选 PixiJS 这类沉淀多年的引擎，能省下大量踩坑时间，把精力留给玩法本身。"
        }
      ]
    },
    {
      "id": "en-wicked",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·图形",
      "tag": "Wicked Engine",
      "title": "Wicked Engine：面向现代图形 API 的 C++ 引擎",
      "summary": "GitHub 项目 turanszkij/WickedEngine（约 7.4 千星）是一款现代 3D 图形引擎，以对 Vulkan、DirectX 12 等现代图形 API 的深度支持和丰富的渲染示例著称，常被用作学习现代渲染架构的参考工程。",
      "image": "https://opengraph.githubassets.com/1/turanszkij/WickedEngine",
      "source": "GitHub: turanszkij/WickedEngine（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/turanszkij/WickedEngine",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "Wicked Engine"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "现代 C++ 3D 引擎，约 7.4 千星",
            "深度支持 Vulkan / DirectX 12",
            "渲染示例丰富，常被当作学习参考",
            "11 月中旬仍在活跃更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "想读懂现代渲染架构，读一个真实引擎的源码往往比看十篇概念文有效。Wicked Engine 的渲染示例就是不错的「活教材」，适合想从 API 调用上升到架构理解的开发者。"
        }
      ]
    },
    {
      "id": "en-gbstudio",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·复古",
      "tag": "GB Studio",
      "title": "GB Studio：拖拽式做 Game Boy 风格游戏",
      "summary": "GitHub 项目 chrismaltby/gb-studio（约 9.4 千星）是一款拖拽式复古游戏制作工具，无需写代码即可做出能在 Game Boy 兼容环境运行的作品，11 月仍在活跃更新。它把「做一款能玩的小游戏」的门槛降到了很低。",
      "image": "https://opengraph.githubassets.com/1/chrismaltby/gb-studio",
      "source": "GitHub: chrismaltby/gb-studio（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/chrismaltby/gb-studio",
      "readTime": "5 分钟",
      "hotScore": 78,
      "tags": [
        "GB Studio"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "拖拽式复古游戏制作工具，约 9.4 千星",
            "无需写代码即可制作 Game Boy 风格游戏",
            "可导出到兼容运行环境",
            "11 月中旬活跃更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "限制往往激发创造力：4 色画面、有限内存反而让新手更容易完成一款「完整」的作品。对零基础新生，先用这类工具做出第一个能玩的游戏，再谈引擎和图形学，动线更顺。"
        }
      ]
    },
    {
      "id": "en-pyxel",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·像素",
      "tag": "Pyxel",
      "title": "Pyxel：用 Python 写复古像素游戏的轻量引擎",
      "summary": "GitHub 项目 kitao/pyxel（约 1.8 万星）是一款 Python 复古游戏引擎，API 故意模仿 PICO-8，限定调色板与像素分辨率，让开发者用很少的代码做出复古风格小游戏，适合编程入门与快速原型。",
      "image": "https://opengraph.githubassets.com/1/kitao/pyxel",
      "source": "GitHub: kitao/pyxel（一手）",
      "date": "2026-11-18",
      "url": "https://github.com/kitao/pyxel",
      "readTime": "5 分钟",
      "hotScore": 78,
      "tags": [
        "Pyxel"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Python 复古游戏引擎，约 1.8 万星",
            "API 模仿 PICO-8，限定调色板与分辨率",
            "适合编程入门与快速原型",
            "11 月中旬活跃更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「限制即脚手架」在 Pyxel 上体现得很清楚：调色板和分辨率被限定后，新手不必面对无限选择瘫痪，能专注把一个小玩法做完整。这是很适合入门自学的第一台「游戏主机」。"
        }
      ]
    },
    {
      "id": "ga-blacksmith",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·发售",
      "tag": "PC Gamer",
      "title": "《Blacksmith Master》1.0 定档 11/19，与 GTA 6 同日「硬碰硬」",
      "summary": "PC Gamer 的 11 月新游日历显示，Hooded Horse 发行的铁匠铺模拟《Blacksmith Master》将于 11 月 19 日脱离抢先体验、发布 1.0 正式版，与 GTA 6 同日上线。发行商方面并不避讳这场撞车。经营模拟品类用「不躲大作」的姿态抢占档期，本身就是一种曝光策略。",
      "image": "https://cdn.mos.cms.futurecdn.net/uEeQBN2oCc55CcCkNVRYiQ-1920-80.jpg",
      "source": "PC Gamer（11 月新游日历，一手发售信息）",
      "date": "2026-11-18",
      "url": "https://www.pcgamer.com/games/november-games-2026",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "PC Gamer"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "《Blacksmith Master》11 月 19 日发布 1.0 正式版",
            "由 Hooded Horse 发行，此前为抢先体验",
            "与 GTA 6 同日上线，官方未刻意回避",
            "属铁匠铺经营模拟品类"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "中小发行商敢和 GTA 6 同日发售，靠的是细分品类的稳定受众——目标玩家本就不同。做产品排期时，「避开」不是唯一解，想清楚你的用户会不会被大作分流，才是判断依据。"
        }
      ]
    },
    {
      "id": "tu-phaser",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Web 游戏",
      "tag": "Phaser",
      "title": "Phaser 官方第一课：用纯 JS 做出第一个网页游戏",
      "summary": "Phaser 官方「Making your first Phaser 3 game」教程是网页游戏入门的经典第一步：从加载资源、创建场景到精灵移动与碰撞，全程用原生 JavaScript，无需构建工具。对于一个想快速看到「自己做的东西能动」的新生，它是最短的正反馈路径之一。",
      "image": "",
      "source": "Phaser 官方教程（一手）",
      "date": "2026-11-18",
      "url": "https://phaser.io/tutorials/making-your-first-phaser-3-game",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "Phaser"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Phaser 官方入门教程，纯 JavaScript 实现",
            "涵盖资源加载、场景、精灵与碰撞",
            "无需构建工具，浏览器即可运行",
            "适合网页游戏与快速原型入门"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "新手最需要的不是最完整的引擎，而是最快跑通「加载—操作—反馈」闭环的教程。Phaser 这一课的价值就在短平快：一个下午做出能玩的东西，比啃完一本理论书更能建立信心。"
        }
      ]
    },
    {
      "id": "tu-mdn",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Web 游戏",
      "tag": "MDN",
      "title": "MDN Game Development：从零搭建网页游戏的系统性入口",
      "summary": "MDN 的 Game Development 专区把网页游戏开发拆成几条主线：用 Canvas 绘制 2D、用 WebGL 着色器做图形、用 Web Audio 处理声音，并通过一个完整的 2D 平台游戏示例串起来。文档兼顾概念与可运行代码，是零基础新生理解「游戏循环 how it works」的可靠起点。",
      "image": "",
      "source": "MDN Web Docs（一手文档）",
      "date": "2026-11-18",
      "url": "https://developer.mozilla.org/en-US/docs/Games",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "MDN"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "MDN 游戏开发专区覆盖 Canvas 2D / WebGL / Web Audio",
            "通过一个完整 2D 平台游戏示例串联知识点",
            "概念讲解与可运行代码并重",
            "适合零基础理解游戏循环与渲染基础"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "官方文档的价值在「准确且成体系」。想真正搞懂浏览器里一帧是怎么画出来的，跟着 MDN 把示例敲一遍，比零散看短视频更能建立完整心智模型。"
        }
      ]
    }
  ]
};
