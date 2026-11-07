window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-08",
    "weekday": "星期日",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-08 07:30",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "《黑神话：悟空》持续热销，国产 3A 的全球语汇已立住",
      "跨端引擎观察：estella / ezEngine / SpartanEngine / Redot / Lumix / Pomdog",
      "开源宝库：Flecs / bgfx / DXC / Vulkan-Hpp / OpenXR / implot",
      "AI 工具线：Wanaka AI 引擎 / Render Sandboxes / Copilot×JetBrains Air / SGLang·LMDeploy·TensorRT-LLM",
      "行业风向：Steam 评测收紧 / Krafton 回购 / 游族 42 亿购 GPU / Unity 私有化传闻"
    ],
    "engineStatus": [
      {
        "name": "estella",
        "type": "estella",
        "status": "TS SDK 跨端引擎",
        "badge": "开源引擎",
        "color": "blue"
      },
      {
        "name": "ezEngine",
        "type": "ezengine",
        "status": "C++ 通用引擎",
        "badge": "开源引擎",
        "color": "cyan"
      },
      {
        "name": "SpartanEngine",
        "type": "spartan",
        "status": "GPU 驱动渲染",
        "badge": "渲染引擎",
        "color": "violet"
      },
      {
        "name": "Redot Engine",
        "type": "redot",
        "status": "Godot 社区分支",
        "badge": "C# 路线",
        "color": "emerald"
      },
      {
        "name": "LumixEngine",
        "type": "lumix",
        "status": "数据导向 ECS",
        "badge": "C++ 引擎",
        "color": "orange"
      },
      {
        "name": "Pomdog",
        "type": "pomdog",
        "status": "C++23 跨平台",
        "badge": "现代 C++",
        "color": "red"
      }
    ]
  },
  "hero": {
    "id": "ga-wukong-hero",
    "category": "games",
    "categoryName": "热门游戏",
    "tag": "黑神话：悟空",
    "title": "《黑神话：悟空》持续热销，国产 3A 的全球语汇已立住",
    "summary": "笔者观察到，《黑神话：悟空》自 2024 年发售以来持续作为国产 3A 的全球名片，它用扎实的动作密度、美术与世界观留白证明中国团队能做出世界级动作冒险，是本土开发者最贴近的范本。",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg",
    "source": "Steam 商店页（一手）",
    "date": "2026-11-08",
    "url": "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    "readTime": "5 分钟",
    "hotScore": 93,
    "tags": [
      "黑神话悟空",
      "国产3A",
      "Steam"
    ],
    "content": [
      {
        "title": "本次要点",
        "type": "list",
        "items": [
          "2024 发售、持续全球热销",
          "动作密度与美术标杆",
          "国产 3A 出海叙事样本"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "它和《影之刃零》共同推动一个信号：国产团队已具备做出全球量级动作 3A 的产能。对独立团队而言，更重要的是它验证了「高完成度单体玩法 + 强演出」仍能撬动大众市场，而非一味堆开放世界。"
      }
    ]
  },
  "items": [
    {
      "id": "en-estella",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·跨端",
      "tag": "estella",
      "title": "estella 用一套 TypeScript SDK 把 2D/3D 项目一键发到 Web/桌面/微信小游戏",
      "summary": "笔者观察到，estella 以 TypeScript SDK + C++/WASM 内核 + 可视化编辑器，宣称一次开发可出 Web、桌面、微信小游戏与移动端，是跨端小游戏开发的省心样本。",
      "image": "https://opengraph.githubassets.com/1/esengine/estella",
      "source": "esengine 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/esengine/estella",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "estella",
        "跨端引擎",
        "微信小游戏"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "TS SDK + C++/WASM 内核",
            "可视化编辑器",
            "Web/桌面/微信小游戏同工程"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "做微信小游戏最痛的就是「引擎不认这个平台」。estella 把目标平台当一等公民，对想用熟悉语言快速出 H5/小游戏的团队很友好。"
        }
      ]
    },
    {
      "id": "en-ezengine",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "ezEngine",
      "title": "ezEngine 把 C++ 引擎的「项目即文档」与编辑器体验打磨得相当完整",
      "summary": "笔者注意到，ezEngine 是开源 C++ 通用 2D/3D 引擎，强调「世界=文档」式的可视化与强类型配置，想把引擎工程化门槛降下来。",
      "image": "https://opengraph.githubassets.com/1/ezEngine/ezEngine",
      "source": "ezEngine 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/ezEngine/ezEngine",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "ezEngine",
        "C++",
        "通用引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "通用 2D/3D",
            "可视化世界编辑",
            "强类型配置"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多自研引擎死在「编辑器太糙没人用」。ezEngine 把配置与文档化当核心体验，值得参考其工程化思路。"
        }
      ]
    },
    {
      "id": "en-spartan",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·渲染",
      "tag": "SpartanEngine",
      "title": "SpartanEngine 用全绑定 GPU 驱动渲染 + 实时路径追踪 GI 展示现代 C++ 渲染高度",
      "summary": "笔者观察到，SpartanEngine 是多年打磨的 C++ 引擎，主打 bindless GPU-driven renderer 与实时路径追踪全局光照，是读「现代渲染管线怎么搭」的现成范本。",
      "image": "https://opengraph.githubassets.com/1/PanosK92/SpartanEngine",
      "source": "PanosK92 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/PanosK92/SpartanEngine",
      "readTime": "8 分钟",
      "hotScore": 83,
      "tags": [
        "SpartanEngine",
        "GPU驱动",
        "路径追踪"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "bindless GPU-driven",
            "实时路径追踪 GI",
            "200Hz 物理"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它把「显存里直接驱动渲染」这件事做到极致，是学 GPU 驱动管线的好样本：先看它怎么组织资源，再回头理解自家的延迟。"
        }
      ]
    },
    {
      "id": "en-redot",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·社区",
      "tag": "Redot Engine",
      "title": "Redot Engine 作为 Godot 社区分支，把 .NET/C# 支持与现代化当成第一目标",
      "summary": "笔者注意到，Redot 从 Godot 派生，主打更积极合并社区补丁、强化 C#/Mono 与 .NET 工具链，给需要稳定 .NET 路线的团队多一个开源选项。",
      "image": "https://opengraph.githubassets.com/1/Redot-Engine/redot-engine",
      "source": "Redot-Engine 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/Redot-Engine/redot-engine",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "Redot",
        "Godot分支",
        "C#"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Godot 社区派生",
            "强化 .NET/C#",
            "积极合社区补丁"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Godot 官方对 C# 的节奏常被吐槽。Redot 用「社区优先」补这块短板，提醒我们：开源引擎的价值不仅在代码，也在治理速度。"
        }
      ]
    },
    {
      "id": "en-lumix",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "LumixEngine",
      "title": "LumixEngine 用数据导向 + ECS 把 3D C++ 引擎做得轻而快",
      "summary": "笔者观察到，Lumix 是老牌开源 3D C++ 引擎，内置编辑器、ECS 与物理，强调可读源码与数据导向设计，适合想读得动引擎的人。",
      "image": "https://opengraph.githubassets.com/1/nem0/LumixEngine",
      "source": "nem0 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/nem0/LumixEngine",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "Lumix",
        "ECS",
        "C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "内置编辑器",
            "ECS + 物理",
            "可读源码"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "引擎源码最怕「读不懂」。Lumix 的体量适中、概念现代，是把「引擎到底怎么搭」讲明白的好样本。"
        }
      ]
    },
    {
      "id": "en-pomdog",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "Pomdog",
      "title": "Pomdog 用 C++23 把游戏引擎写成「现代标准库风格」的跨平台底座",
      "summary": "笔者注意到，Pomdog 是 C++23 开源引擎，抽象了图形/音频/输入与多后端，API 贴近现代 C++，是学「引擎如何屏蔽平台差异」的干净样本。",
      "image": "https://opengraph.githubassets.com/1/mogemimi/pomdog",
      "source": "mogemimi 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/mogemimi/pomdog",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "Pomdog",
        "C++23",
        "跨平台"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "C++23 风格 API",
            "图形/音频/输入抽象",
            "多后端"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的价值不在「多能打」，而在把引擎 API 写得像标准库一样顺手——这一点对长期维护的团队尤其重要。"
        }
      ]
    },
    {
      "id": "en-tuanjie",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·国产",
      "tag": "团结引擎",
      "title": "团结引擎动画系统升级：AnimGraph 加 Pose Cache、RigGraph 加物理模拟",
      "summary": "笔者观察到，团结引擎（Unity 中国）围绕 AnimGraph/RigGraph/AnimGraph CodeGen 三项升级动画系统，把动画逻辑复用与运行时开销压下去，国产引擎在垂直能力上持续补课。",
      "image": "",
      "source": "Unity 上海官方公众号（一手）",
      "date": "2026-11-08",
      "url": "https://www.163.com/dy/article/LB0EK1I00526E124.html",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "团结引擎",
        "动画系统",
        "AnimGraph"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "AnimGraph 增 Pose Cache",
            "RigGraph 增物理模拟",
            "CodeGen 降资产开销"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "国产引擎常被诟病「只有壳」。这类底层动画能力的持续迭代，才是真正缩小与一线引擎差距的硬功夫。"
        }
      ]
    },
    {
      "id": "in-steamreview",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·平台",
      "tag": "Steam 评测",
      "title": "Valve 收紧 Steam 评测：新游须实机游玩满 5 分钟才放行",
      "summary": "笔者观察到，Valve 在 Steamworks 发布更新评审清单，要求开发者用绿色 Play 按钮启动并累计至少 5 分钟游玩，直接对冲 AI 批量低质投稿潮。",
      "image": "",
      "source": "The Verge（一手报道）",
      "date": "2026-11-08",
      "url": "https://www.theverge.com/games/1025722/valve-steam-game-increase-submissions",
      "readTime": "5 分钟",
      "hotScore": 87,
      "tags": [
        "Steam",
        "评测",
        "AI投稿"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "5 分钟实机游玩硬门槛",
            "新增成就/云存档/运行库检查",
            "评审周期拉长至 12 工作日"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把「你到底在 Steam 上跑起来没」变成硬关卡，是 Valve 对 AI 加速灌水的最省事自动化答案，对认真做游戏的团队反而是减负。"
        }
      ]
    },
    {
      "id": "in-krafton",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·资本",
      "tag": "Krafton",
      "title": "Krafton 抛约 3000 亿韩元回购并注销，股价单日涨逾 16%",
      "summary": "笔者注意到，Krafton 公布约 1.651 亿股、总值约 ₩300B 的回购注销计划，被市场读成对利润率承压的缓冲，也折射韩国游戏股在重投入期的防御姿态。",
      "image": "",
      "source": "Yonhap（一手）",
      "date": "2026-11-08",
      "url": "https://www.yna.co.kr/view/AKR20261104042751008",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Krafton",
        "回购",
        "韩国游戏股"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "约 ₩300B 回购注销",
            "单日涨逾 16%",
            "多款新作重投入期"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "在新游转化完全兑现前，韩国头部游戏股用回购当过冬缓冲。对从业者，这提醒：资本市场看的是「利润率预期」，而非单纯流水。"
        }
      ]
    },
    {
      "id": "in-youzu",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·算力",
      "tag": "游族网络",
      "title": "游族网络拟斥约 42.25 亿元采购 GPU，押注算力转型",
      "summary": "笔者观察到，游族子公司签下约 42.25 亿元 PRO5500（Blackwell 系）GPU 采购合同，规模约三倍于其 2025 营收——AI 叙事正从工具层渗透进重资产。",
      "image": "",
      "source": "第一财经 Yicai（一手）",
      "date": "2026-11-08",
      "url": "https://www.yicai.com/news/103425002.html",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "游族",
        "GPU",
        "算力转型"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "约 42.25 亿元采购",
            "疑 Blackwell 系 PRO5500",
            "规模约三倍于年营收"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "游戏公司的资产负债表突然出现算力大单，说明 AI 已从「用什么工具」变成「买什么资产」。执行与需求才是真正的压力测试。"
        }
      ]
    },
    {
      "id": "in-unitybuyout",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "Unity",
      "title": "Unity 被传 250 亿美元私有化收购，条款与授权何去何从成焦点",
      "summary": "笔者注意到，市场传言一桩约 250 亿美元交易可能让 Unity 私有化；短期不变，但独立开发者应重新核对自己许可证里对「被收购后」的保护条款。",
      "image": "",
      "source": "Indie Tooling（一手分析）",
      "date": "2026-11-08",
      "url": "https://indietooling.com/posts/unity-buyout-talks-licence",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Unity",
        "私有化",
        "许可证"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "传约 250 亿美元交易",
            "短期条款不变",
            "开发者应复核授权"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "并购传闻年年有，但这次给独立者的功课很实在：把许可证里「被收购/转让」条款读一遍，比押注传闻更靠谱。"
        }
      ]
    },
    {
      "id": "in-wherewinds",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·技术",
      "tag": "燕云十六声",
      "title": "《燕云十六声》11/24 全球同步上线 NVIDIA DLSS 5 神经渲染",
      "summary": "笔者观察到，《燕云十六声》将与 NVIDIA 联合调校后于 11/24 在国内外同步启用 DLSS 5，国产开放世界把最新神经渲染当作出海硬件党的一张视觉牌。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3564740/library_header.jpg",
      "source": "新浪财经 / 上海证券报（一手）",
      "date": "2026-11-08",
      "url": "https://finance.sina.com.cn/roll/2026-11-04/doc-inixqhku6145888.shtml",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "燕云十六声",
        "DLSS 5",
        "神经渲染"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11/24 全球同步",
            "DLSS 5 神经渲染",
            "多方联合调校"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把最新 upscaling 栈与海外版本同步首发，是国产 3A 出海争夺硬件党安装量的一步好棋——视觉代差比单纯营销更直接。"
        }
      ]
    },
    {
      "id": "ga-rdr2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计观察",
      "tag": "Red Dead Redemption 2",
      "title": "《荒野大镖客2》用克制的系统密度，把开放世界做成会呼吸的世界",
      "summary": "笔者观察到，《荒野大镖客2》的 NPC 作息、生态与泥泞/风雪等细节不是堆料，而是用一致的系统让世界显得「自己运转」，是环境叙事的标杆。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-08",
      "url": "https://store.steampowered.com/app/1145360/Red_Dead_Redemption_2/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Red Dead Redemption 2",
        "设计观察",
        "Steam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "NPC 作息与生态联动",
            "细节一致而非堆料",
            "环境叙事标杆"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它证明开放世界的「真实感」来自系统而非贴图量；做世界设计时，先让 AI 与生态自洽，玩家才信这个空间。"
        }
      ]
    },
    {
      "id": "ga-sekiro",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计观察",
      "tag": "Sekiro",
      "title": "《只狼》用「躯干/架势」把战斗改写成风险与节奏的博弈",
      "summary": "笔者注意到，《只狼》抛弃血条逻辑、用 posture 与格挡把每次交手变成读招与时机判断，证明了动作设计可以用「失衡」而非「掉血」制造紧张。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-08",
      "url": "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Sekiro",
        "设计观察",
        "Steam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "posture/架势系统",
            "读招与时机",
            "死亡即学习"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它给动作设计的启示是：紧张感可以来自「节奏博弈」而非数值消耗。把核心机制讲清楚，比堆敌人更让人上头。"
        }
      ]
    },
    {
      "id": "ga-liesofp",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计观察",
      "tag": "Lies of P",
      "title": "《匹诺曹的谎言》把魂味框架与匹诺曹叙事缝合出新鲜感",
      "summary": "笔者观察到，《Lies of P》在类魂基底上加入武器组装与「说谎值」叙事分支，说明成熟品类只要加一层自洽机制，仍能让人眼前一亮。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-08",
      "url": "https://store.steampowered.com/app/1627720/Lies_of_P/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Lies of P",
        "设计观察",
        "Steam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "类魂基底",
            "武器组装",
            "说谎值分支"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的经验是：别因为品类老就放弃创新。在成熟框架里加一层「系统 + 叙事」钩子，往往比彻底重造更容易被接受。"
        }
      ]
    },
    {
      "id": "ga-rimworld",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计观察",
      "tag": "RimWorld",
      "title": "《环世界》用模拟系统涌现叙事，把管理游戏写成角色命运",
      "summary": "笔者注意到，《RimWorld》靠殖民者需求、事件与地块生成催生无数不可复现的故事，是「系统即编剧」的最佳教材，也启示我们：好玩法来自规则而非脚本。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-08",
      "url": "https://store.steampowered.com/app/294100/RimWorld/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "RimWorld",
        "设计观察",
        "Steam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "系统涌现叙事",
            "随机事件引擎",
            "不可复现故事"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它提醒：玩家记住的永远是「我的故事」，不是「你的关卡」。把规则写好，叙事会自己长出来。"
        }
      ]
    },
    {
      "id": "ga-valheim",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计观察",
      "tag": "Valheim",
      "title": "《英灵神殿》用程序生成 + 合作生存，证明小团队也能做大世界",
      "summary": "笔者观察到，《Valheim》以程序化地形、硬核生存与十人内合作，靠扎实手感而非美术堆料站稳，是独立团队做开放生存的可参照样本。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-08",
      "url": "https://store.steampowered.com/app/892970/Valheim/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Valheim",
        "设计观察",
        "Steam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "程序化地形",
            "硬核生存",
            "十人内合作"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的成功靠「手感优先、美术克制」。小团队做开放世界，先把核心循环打磨到上头，比先追画质更稳。"
        }
      ]
    },
    {
      "id": "ga-hades",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计观察",
      "tag": "Hades",
      "title": "《黑帝斯》用 rogue 循环 + 强叙事，把重复游玩变成追故事",
      "summary": "笔者注意到，《Hades》把每次死亡接上剧情推进与角色对话，让刷图不再空洞；它的经验是：重复玩法靠「意义」而非「数值」支撑。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-08",
      "url": "https://store.steampowered.com/app/1145360/Hades/",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Hades",
        "设计观察",
        "Steam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "rogue + 强叙事",
            "死亡推进剧情",
            "台词驱动"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它把「为什么再开一局」讲明白了：不是掉率，而是想看角色下一句说什么。这点值得所有刷子游戏学。"
        }
      ]
    },
    {
      "id": "os-flecs",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·ECS",
      "tag": "Flecs",
      "title": "Flecs 把 C/C++ 的 ECS 写到了极致轻快，是现代数据导向架构范本",
      "summary": "笔者观察到，Flecs 以极少模板魔法换来惊人性能与缓存友好遍历，几乎是 C++ 游戏写 ECS 的默认选择，读它能直观看到缓存命中带来的帧率红利。",
      "image": "https://opengraph.githubassets.com/1/SanderMertens/flecs",
      "source": "SanderMertens 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/SanderMertens/flecs",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Flecs",
        "ECS",
        "C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "极轻量 ECS",
            "缓存友好遍历",
            "MIT 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "ECS 的真正价值不在「组件」而在「连续内存里的批量处理」。读 Flecs 能直观看到缓存命中带来的帧率红利。"
        }
      ]
    },
    {
      "id": "os-bgfx",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·渲染",
      "tag": "bgfx",
      "title": "bgfx 用一层跨后端抽象，把 OpenGL/D3D/Vulkan/Metal 统一管起来",
      "summary": "笔者注意到，bgfx 是轻量跨平台渲染抽象库，让同一套绘制调用落到不同图形 API，是把「引擎如何屏蔽后端差异」讲明白的底层教材。",
      "image": "https://opengraph.githubassets.com/1/bkaradzic/bgfx",
      "source": "bkaradzic 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/bkaradzic/bgfx",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "bgfx",
        "渲染抽象",
        "跨平台"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "跨图形 API",
            "轻量无依赖",
            "渲染抽象层"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "做自研引擎最头疼的就是「每个后端写一遍」。bgfx 把差异收进一层，让你专注渲染逻辑本身。"
        }
      ]
    },
    {
      "id": "os-dxc",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·Shader",
      "tag": "DXC",
      "title": "DirectXShaderCompiler 把 HLSL 编译带进跨平台与开源工具链",
      "summary": "笔者观察到，微软开源的 DXC 支持 HLSL→DXIL/SPIR-V，是着色器编译、反射与跨后端管线的基石，做自研渲染或 Shader 工具链绕不开。",
      "image": "https://opengraph.githubassets.com/1/microsoft/DirectXShaderCompiler",
      "source": "microsoft 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/microsoft/DirectXShaderCompiler",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "DXC",
        "HLSL",
        "Shader编译"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "HLSL→DXIL/SPIR-V",
            "开源可嵌入",
            "着色器反射"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Shader 工具链最怕被单一厂商锁死。DXC 开源后，自研引擎也能复用成熟编译前端，省下大把造轮子时间。"
        }
      ]
    },
    {
      "id": "os-vulkanhpp",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·Vulkan",
      "tag": "Vulkan-Hpp",
      "title": "Vulkan-Hpp 用 C++ 封装把 Vulkan 显式 API 写得安全又顺手",
      "summary": "笔者注意到，Vulkan-Hpp 在原生 C Vulkan 之上提供 RAII 与类型安全封装，既保留显式控制力又减少样板错误，是 C++ 啃 Vulkan 的省力入口。",
      "image": "https://opengraph.githubassets.com/1/KhronosGroup/Vulkan-Hpp",
      "source": "KhronosGroup 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/KhronosGroup/Vulkan-Hpp",
      "readTime": "6 分钟",
      "hotScore": 81,
      "tags": [
        "Vulkan-Hpp",
        "C++",
        "类型安全"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "RAII 封装",
            "类型安全",
            "保留显式控制"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Vulkan 的显式换来性能，也换来样板地狱。Vulkan-Hpp 在不剥夺控制力的前提下把易错点收进类型系统，性价比极高。"
        }
      ]
    },
    {
      "id": "os-openxr",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·XR",
      "tag": "OpenXR",
      "title": "OpenXR-SDK 把 VR/AR 的输入与会话抽象成开放标准",
      "summary": "笔者观察到，Khronos 的 OpenXR 用一套 API 屏蔽各家头显差异，做跨设备 XR 应用时它能省掉大量厂商适配，是 XR 开发的事实入口。",
      "image": "https://opengraph.githubassets.com/1/KhronosGroup/OpenXR-SDK",
      "source": "KhronosGroup 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/KhronosGroup/OpenXR-SDK",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "OpenXR",
        "XR",
        "开放标准"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "跨头显抽象",
            "统一输入会话",
            "Khronos 标准"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "XR 碎片化比图形更凶。OpenXR 的价值就是「写一次，跑多家」——想做头显无关的应用，它是绕不开的底座。"
        }
      ]
    },
    {
      "id": "os-implot",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·调试",
      "tag": "implot",
      "title": "implot 在 Dear ImGui 之上把调试数据画成实时曲线",
      "summary": "笔者注意到，implot 是 ImGui 作者的即时模式绘图库，几行就能把帧率、内存、物理量画成可缩放曲线，是引擎/工具链调试可视化的利器。",
      "image": "https://opengraph.githubassets.com/1/epezent/implot",
      "source": "epezent 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/epezent/implot",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "implot",
        "ImGui",
        "调试可视化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "即时模式绘图",
            "实时曲线",
            "与 ImGui 配套"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "性能优化最怕「凭感觉」。implot 让帧率/内存/调度变成一眼可看的曲线，定位瓶颈比看日志快得多。"
        }
      ]
    },
    {
      "id": "tu-cs50g",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·入门",
      "tag": "CS50 Games",
      "title": "哈佛 CS50 游戏开发课：用 Unity 把手感与机制一次讲透",
      "summary": "笔者观察到，CS50 的 Introduction to Game Development 用 Unity 拆解《超级马里奥》《太空侵略者》等经典，从零搭可玩 demo，是英文世界里体系最友好的入门课之一。",
      "image": "",
      "source": "Harvard CS50 官方站点（一手）",
      "date": "2026-11-08",
      "url": "https://cs50.harvard.edu/games/",
      "readTime": "长期参考",
      "hotScore": 85,
      "tags": [
        "CS50",
        "Unity",
        "入门"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Unity 拆解经典",
            "从零可玩 demo",
            "体系化入门"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "学游戏开发最怕「教程零散拼不出作品」。CS50 的好处是每节课都产出能跑的东西，把知识焊进肌肉记忆。"
        }
      ]
    },
    {
      "id": "tu-redblob",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·算法",
      "tag": "Red Blob Games",
      "title": "Red Blob Games 把网格/路径/几何讲成可交互的直觉教材",
      "summary": "笔者注意到，Red Blob Games 用可视化 + 直觉推导讲透六边形网格、A* 与坐标系，是写寻路/地图逻辑时反复会回来翻的案头书。",
      "image": "https://www.redblobgames.com/img/red-blob-2d.png",
      "source": "Red Blob Games 官方站点（一手）",
      "date": "2026-11-08",
      "url": "https://www.redblobgames.com/",
      "readTime": "长期参考",
      "hotScore": 84,
      "tags": [
        "Red Blob",
        "网格",
        "A*"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "六边形网格",
            "A* 可视化",
            "坐标与几何"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "寻路 bug 最难调，因为错起来很玄学。把这里的几何基础打牢，比每次出问题靠试参数要根本得多。"
        }
      ]
    },
    {
      "id": "tu-gamedevtv",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·项目",
      "tag": "GameDev.tv",
      "title": "GameDev.tv 用项目驱动把 Unity/Unreal/Blender 学完即出货",
      "summary": "笔者观察到，GameDev.tv 走「做一个完整游戏」的实战路线，从 2D 平台到 RPG 都有课程，适合想尽快把知识焊成作品的人。",
      "image": "https://strapi.gamedev.tv/uploads/Ogre_character_Get_Good_lower_res_8f55348143.jpg",
      "source": "GameDev.tv 官方站点（一手）",
      "date": "2026-11-08",
      "url": "https://www.gamedev.tv/",
      "readTime": "长期参考",
      "hotScore": 83,
      "tags": [
        "GameDev.tv",
        "项目驱动",
        "实战"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "项目驱动",
            "Unity/Unreal/Blender",
            "学完即作品"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "看教程和做作品是两件事。项目制课程的价值是逼你从第一性原理把功能跑通，而非只收藏视频。"
        }
      ]
    },
    {
      "id": "tu-unity-junior",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Unity",
      "tag": "Unity Junior",
      "title": "Unity Junior Programmer 路径：从零到能写可玩 C# 游戏",
      "summary": "笔者注意到，Unity 官方的 Junior Programmer 学习路径用一连串小项目把 C#、物理与游戏设计基础串起来，是新人建立「我能做游戏」信心的最短路径。",
      "image": "",
      "source": "Unity Learn 官方路径（一手）",
      "date": "2026-11-08",
      "url": "https://learn.unity.com/pathway/junior-programmer",
      "readTime": "长期参考",
      "hotScore": 84,
      "tags": [
        "Unity",
        "Junior Programmer",
        "C#"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "小项目串联",
            "C# 与物理",
            "新人最短路径"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "官方路径比二手博客靠谱且随版本更新。新人先把这套走完，再谈深入渲染或网络，地基才稳。"
        }
      ]
    },
    {
      "id": "tu-khronos-ogl",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·图形",
      "tag": "Khronos OpenGL",
      "title": "Khronos OpenGL 官方页：把图形 API 的地基与版本说清楚",
      "summary": "笔者观察到，Khronos 的 OpenGL 资源页汇总了规范、扩展与版本演进，做图形入门时用来厘清「API 到底是什么、各版本差在哪」最权威。",
      "image": "https://www.khronos.org/assets/uploads/apis/OpenGL-Square.png",
      "source": "Khronos Group 官方站点（一手）",
      "date": "2026-11-08",
      "url": "https://www.khronos.org/opengl/",
      "readTime": "长期参考",
      "hotScore": 82,
      "tags": [
        "Khronos",
        "OpenGL",
        "图形"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "规范与扩展",
            "版本演进",
            "权威参考"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "图形最大的坑是「看不懂 API 在管什么」。先把规范层面的地基厘清，再读具体教程会顺很多。"
        }
      ]
    },
    {
      "id": "ai-wanaka",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·引擎",
      "tag": "Wanaka Studio",
      "title": "Wanaka Studio 推出 AI 原生 3D 游戏引擎，喊出比 Claude+Unity 少 80% token",
      "summary": "笔者观察到，Wanaka Studio 在 Product Hunt 首发一款 agent 驱动的 3D 引擎，主打可视化编辑、自动绑定与一键发布，宣称比「Claude Opus 5.5 + Unity」省约八成 token。",
      "image": "",
      "source": "Wanaka Studio 官方站点（一手）",
      "date": "2026-11-08",
      "url": "https://wanaka.app/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Wanaka",
        "AI引擎",
        "Agent"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "agent 驱动 3D 引擎",
            "可视化编辑 + 自动绑定",
            "宣称省约 80% token"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它是「把你的 Agent 工作流摊开来比」的最新擂台。无论参不参赛，研究它的产出都能照见 AI 辅助开发的当下水位。"
        }
      ]
    },
    {
      "id": "ai-render-sandbox",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·Agent",
      "tag": "Render Sandboxes",
      "title": "Render 推出 Sandboxes：给 AI Agent 隔离的临时执行环境",
      "summary": "笔者注意到，Render 的公测 Sandboxes 为智能体提供隔离、可快照、可挂起的计算环境，把「让 Agent 跑构建与测试」的工程从脚本升级成托管原语。",
      "image": "",
      "source": "Render 官方文档（一手）",
      "date": "2026-11-08",
      "url": "https://render.com/docs/sandboxes",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Render",
        "Sandboxes",
        "Agent"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "隔离临时环境",
            "快照与挂起",
            "托管式执行"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "让 Agent 跑构建/测试最怕污染主环境。Sandboxes 把这件事变成一等原语，是「Agent 进生产」的踏实一步。"
        }
      ]
    },
    {
      "id": "ai-copilot-air",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·IDE",
      "tag": "GitHub Copilot",
      "title": "GitHub Copilot 接入 JetBrains Air，本地/云端编码 Agent 可委派",
      "summary": "笔者观察到，GitHub 通过 Agent Client Protocol 把 Copilot 带进 JetBrains Air，开发者可委派本地或云端编码任务、在上下文里审改动，是「Agent 进 IDE」的又一步。",
      "image": "",
      "source": "GitHub 官方 Changelog（一手）",
      "date": "2026-11-08",
      "url": "https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "GitHub Copilot",
        "JetBrains Air",
        "编码Agent"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Agent Client Protocol",
            "本地/云端委派",
            "上下文审改动"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "编码智能体的意义不是替你写整局游戏，而是把「样板代码 + 跨文件重构」这类耗时活接走，让人专注设计决策。"
        }
      ]
    },
    {
      "id": "ai-sglang",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·推理",
      "tag": "SGLang",
      "title": "SGLang 把结构化生成 + 智能体编排做成高性能推理栈",
      "summary": "笔者注意到，SGLang 用前端语言控制复杂提示与多轮调用，在推理吞吐与 Agent 工作流上都很能打，是做游戏内 AI/本地模型服务时值得关注的底座。",
      "image": "https://opengraph.githubassets.com/1/sgl-project/sglang",
      "source": "sgl-project 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/sgl-project/sglang",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "SGLang",
        "推理",
        "Agent"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "前端控制提示流",
            "多轮调用编排",
            "高吞吐推理"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "游戏内 AI（对话 NPC、世界观百科）最吃推理吞吐。SGLang 这类栈让本地/服务端部署更顺，是落地而非玩具的关键。"
        }
      ]
    },
    {
      "id": "ai-lmdeploy",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·部署",
      "tag": "LMDeploy",
      "title": "LMDeploy 把大模型推理/部署压到「一行能跑、显存可控」",
      "summary": "笔者观察到，LMDeploy 提供 Turbomind 高效推理与量化部署，让中等显卡也能扛住对话/ Agent 负载，是团队把模型从 Demo 落到服务的实用工具。",
      "image": "https://opengraph.githubassets.com/1/InternLM/lmdeploy",
      "source": "InternLM 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/InternLM/lmdeploy",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "LMDeploy",
        "推理部署",
        "量化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Turbomind 推理",
            "量化部署",
            "中等显卡可用"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多团队卡在「Demo 跑得动、服务扛不住」。LMDeploy 把部署门槛压下来，是模型从演示走向产品的实用桥梁。"
        }
      ]
    },
    {
      "id": "ai-tensorrtllm",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·推理",
      "tag": "TensorRT-LLM",
      "title": "TensorRT-LLM 把 NVIDIA GPU 推理优化做成可组合内核",
      "summary": "笔者注意到，NVIDIA 的 TensorRT-LLM 用内核融合与量化把 LLM 推理推到极致，做本地/服务器的高并发 AI 服务时，它是性能天花板级的参考实现。",
      "image": "https://opengraph.githubassets.com/1/NVIDIA/TensorRT-LLM",
      "source": "NVIDIA 官方仓库（一手）",
      "date": "2026-11-08",
      "url": "https://github.com/NVIDIA/TensorRT-LLM",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "TensorRT-LLM",
        "NVIDIA",
        "推理优化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "内核融合",
            "量化推理",
            "高并发服务"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "做高并发 AI 服务时，推理优化往往决定成本。TensorRT-LLM 是性能天花板级的参考实现，值得在选型时认真评估。"
        }
      ]
    },
    {
      "id": "co-gameinstitute",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "Game Jam",
      "tag": "腾讯高校大赛",
      "title": "腾讯高校游戏创意制作大赛：面向大学生的赛事入口与作品通道",
      "summary": "笔者观察到，腾讯高校游戏创意制作大赛（gameinstitute）面向在校生开放报名与作品提交，是大学生低成本试水「做一款完整游戏」的官方舞台，截止以官网当期为准。",
      "image": "",
      "source": "腾讯游戏学堂官方入口（一手）",
      "date": "2026-11-08",
      "url": "https://gameinstitute.qq.com/yxds/collection",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "腾讯",
        "高校大赛",
        "Game Jam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "面向在校生",
            "报名与作品提交",
            "截止以官网为准"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大学生试水做完整游戏，官方赛事是最低门槛的舞台。先冲一个能玩的小品，比空想大作更练人。"
        }
      ]
    },
    {
      "id": "co-ncda",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "Game Jam",
      "tag": "NCDA",
      "title": "NCDA 未来设计师大赛：含游戏/数字艺术赛道的大学生赛事",
      "summary": "笔者注意到，NCDA 全国高校数字艺术设计大赛设游戏与数字艺术方向，获奖作品可进简历与作品集，是设计/数媒方向同学对口的学科竞赛。",
      "image": "",
      "source": "NCDA 官方站点（一手）",
      "date": "2026-11-08",
      "url": "https://www.ncda.org.cn/",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "NCDA",
        "数字艺术",
        "学科竞赛"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "游戏/数字艺术赛道",
            "作品集背书",
            "学科竞赛"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "设计/数媒同学别只盯大厂实习，这类学科竞赛的获奖作品本身就是最强作品集，性价比极高。"
        }
      ]
    },
    {
      "id": "co-ciga-jams",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "Game Jam",
      "tag": "CiGA GameJams",
      "title": "CiGA GameJams 日历：独立游戏 Jam 与 indiePlay 赛事入口",
      "summary": "笔者观察到，CiGA 的 GameJams 页汇总了国内独立游戏 Jam 与 indiePlay 中国独立游戏大赛节奏，想练手或冲奖的同学可据此规划参赛档期。",
      "image": "",
      "source": "CiGA 官方 GameJams 页（一手）",
      "date": "2026-11-08",
      "url": "https://www.ciga.me/gamejams",
      "readTime": "4 分钟",
      "hotScore": 84,
      "tags": [
        "CiGA",
        "Game Jam",
        "indiePlay"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "独立游戏 Jam",
            "indiePlay 大赛",
            "参赛日历"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "48 小时做出能玩的东西，是逼自己出货的最佳训练。把 Jam 日历存好，提前空出档期比临时起意强。"
        }
      ]
    },
    {
      "id": "co-tencent-campus",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "腾讯校招",
      "title": "腾讯校招入口开放：游戏相关岗位面向应届与实习持续招募",
      "summary": "笔者注意到，腾讯校招（join.qq.com）常年开放游戏策划/程序/美术等校招与实习通道，应届同学应尽早投实习卡位、以转正留用为目标，而非等秋招临门一脚。",
      "image": "",
      "source": "腾讯招聘官方入口（一手）",
      "date": "2026-11-08",
      "url": "https://join.qq.com/",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "腾讯",
        "校招",
        "实习转正"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "游戏策划/程序/美术",
            "校招 + 实习",
            "以转正为目标"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "一线厂的实习往往比校招更易进、也能更早看清自己适不适合。低年级同学别等秋招，先投实习卡位更稳。"
        }
      ]
    }
  ]
};
