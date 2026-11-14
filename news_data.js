window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-15",
    "weekday": "星期日",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-15 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：GTA 6 预购冲到约 1031 万份、破 10 亿美元（Sensor Tower），11/19 正式上线（hero）",
      "引擎精读：Godot 4.8 beta 3、Unity 6.7 beta 引入 AgX 色调映射、Defold 1.14.1、MonoGame 3.8.6.1、Flax 1.13.1、raylib",
      "开源宝库：Bullet3 / miniaudio / nuklear / stb / sokol / llama.cpp 一批底层库仍在高频迭代",
      "AI 前沿：Moonshot Kimi 游戏开发套件、Gemini 4 Carbon + /swarm、Ludo.ai 动作库、ComfyUI 0.44、QuickMatch 新工具盘点",
      "行业风向：Fortis Games 关停波及 440 人、Nvidia 黄仁勋辞任 CEO、Gamesight 推 Quests、Xbox 明确「不会每款游戏都塞广告」",
      "竞赛招聘：SHIFT 游戏 Jam（Unity 联合）、Jamference AI Jam、Unity 2026 官方 Jam、网易游戏新加坡校招启动"
    ],
    "engineStatus": [
      {
        "name": "Phaser 3",
        "type": "phaser",
        "status": "2D HTML5 框架",
        "badge": "2D",
        "color": "blue"
      },
      {
        "name": "LÖVE",
        "type": "love",
        "status": "Lua 轻量 2D",
        "badge": "Lua",
        "color": "green"
      },
      {
        "name": "KAPLAY",
        "type": "kaplay",
        "status": "极简 2D 游戏库",
        "badge": "原型",
        "color": "cyan"
      },
      {
        "name": "Panda3D",
        "type": "panda3d",
        "status": "Python/C++ 3D",
        "badge": "3D",
        "color": "violet"
      },
      {
        "name": "Diligent",
        "type": "diligent",
        "status": "跨后端渲染抽象",
        "badge": "渲染",
        "color": "teal"
      },
      {
        "name": "The Forge",
        "type": "forge",
        "status": "跨平台渲染框架",
        "badge": "跨端",
        "color": "orange"
      }
    ]
  },
  "hero": {
    "id": "gta6-preorders-1b-hero",
    "category": "industry",
    "categoryName": "行业风向",
    "tag": "GTA 6",
    "title": "GTA 6 预购冲破 1031 万份、破 10 亿美元（Sensor Tower）",
    "summary": "Take-Two 于 11/11 披露，GTA 6 预购按 Sensor Tower 第三方估算约 1031 万份、毛收入约 7.51 亿美元；游戏定档 11/19 登陆 PS5 与 Xbox Series X/S，预下载已开放、容量约 207.7GB。Take-Two 维持 FY27 净预订指引 80–82 亿美元，并称预购「远超预期」。",
    "image": "https://gamesbeat.com/wp-content/uploads/2026/11/gta-vi.jpg",
    "source": "GamesBeat（一手，Sensor Tower 数据）",
    "date": "2026-11-15",
    "url": "https://gamesbeat.com/grand-theft-auto-vi-preorders-cross-1b-analyst-roundup",
    "readTime": "5 分钟",
    "hotScore": 98,
    "tags": [
      "GTA 6",
      "Take-Two",
      "预购"
    ],
    "content": [
      {
        "title": "核心要点",
        "type": "list",
        "items": [
          "Sensor Tower 估算预购约 1031 万份，其中约 74% 来自 PlayStation 5",
          "Take-Two 将 FY27 净预订指引维持在 80–82 亿美元，称预购「远超预期」",
          "11/19 上线，预下载已开放，文件体量约 207.7GB",
          "Enders Analysis 给出首年 3000–3500 万套的基准预测"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "预购量级已经把发行周的服务器负载、零售排班乃至区域缺货都推到极限，对独立团队来说，更现实的启发不是「和它正面对撞」，而是思考如何借这一波全民关注度做内容、做联动、做社区——流量就在那里，接得住才算本事。"
      }
    ]
  },
  "items": [
    {
      "id": "en-godot48",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·3D",
      "tag": "Godot",
      "title": "Godot 4.8 beta 3 发布：离稳定版只差少量阻断问题",
      "summary": "Godot 团队于 11 月放出 4.8 beta 3，社区更新称「只剩少量 blockers」；4.8 在渲染、编辑器与 3D 工作流上继续推进，4.7.2 仍是当前稳定线。",
      "image": "https://godotengine.org/assets/share-image.jpg",
      "source": "Godot 官方下载页（一手）",
      "date": "2026-11-15",
      "url": "https://godotengine.org/download/preview/",
      "readTime": "6 分钟",
      "hotScore": 92,
      "tags": [
        "Godot",
        "开源引擎",
        "4.8"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "4.8 beta 3 进入收尾阶段，剩余阻断问题已很少",
            "4.7.2 依旧是推荐给生产的稳定版本",
            "本周期重点在渲染管线、编辑器体验与 3D 资产工作流"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Godot 的发布节奏越来越像「稳定线 + 预览线」双轨，个人开发者可以放心把 4.7 用在生产里，同时用预览版提前踩 4.8 的新能力，不必赌稳定性。"
        }
      ]
    },
    {
      "id": "en-unity67",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·通用",
      "tag": "Unity",
      "title": "Unity 6.7 beta 引入 AgX 色调映射",
      "summary": "Unity 6.7.0b7（10/29 放出）把 AgX 色调映射带进内建管线，主打更自然的 high dynamic range 色彩过渡，减少高光区域的色偏与断层。",
      "image": "https://unityreleases.com/opengraph-image",
      "source": "Unity Releases（一手）",
      "date": "2026-11-15",
      "url": "https://unityreleases.com/releases/6000.7.0b7",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Unity",
        "AgX",
        "色调映射"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "6.7 beta（6000.7.0b7）加入 AgX 色调映射",
            "AgX 改善 HDR 下的色彩与高光过渡，降低过饱和与色偏",
            "面向电影感画面与写实光照场景更友好"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "AgX 原本是 Blender/Cycles 那一套色彩科学，现在下沉到实时引擎，意味着「离线渲染和实时画面讲同一套色彩语言」，做风格化或写实项目时调色思路可以更直接地迁移。"
        }
      ]
    },
    {
      "id": "en-defold141",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·轻量",
      "tag": "Defold",
      "title": "Defold 1.14.1：运行时矢量字体、原生 Lua 调试器",
      "summary": "Defold 于 11/10 发布 1.14.1，带来运行时矢量字体与 emoji 支持、更快的粒子与对象更新、压缩 glTF（Draco/Meshopt）与 KTX2，并加入原生 Lua DAP 调试器。",
      "image": "https://defold.com/images/social/facebook-share.jpg",
      "source": "Defold 官方博客（一手）",
      "date": "2026-11-15",
      "url": "https://www.defold.com/blog",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Defold",
        "矢量字体",
        "Lua 调试"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "1.14.1 加入运行时矢量字体与 emoji",
            "原生 Lua DAP 调试器、更快的粒子/transform/资源加载",
            "压缩 glTF（Draco/Meshopt）+ KTX2 贴图"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Defold 继续走「小、快、跨端」路线，矢量字体和原生调试器这类改动看着不大，却直接改善 Web/移动端小游戏的开发体验，对 solo 开发者很实用。"
        }
      ]
    },
    {
      "id": "en-monogame",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C#",
      "tag": "MonoGame",
      "title": "MonoGame 3.8.6.1 发布：聚焦 bug 修复",
      "summary": "MonoGame 于 11 月初推出 3.8.6.1，主要是稳定性修复，修复了 DesktopGL 在 Clear 后 stale scissor state 等问题，并非重大功能版本。",
      "image": "https://opengraph.githubassets.com/1/MonoGame/MonoGame",
      "source": "MonoGame GitHub Releases（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/MonoGame/MonoGame/releases",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "MonoGame",
        "C#",
        "修复"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "3.8.6.1 以 bug 修复为主",
            "修正 DesktopGL 在 Clear 之后的 stale scissor 状态",
            "适合仍在 3.8.x 生产线的 C# 团队跟进"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "MonoGame 这种「守成型」小版本提醒我们：框架成熟后，稳定比花哨更重要，挑一个不常打断你工作流的版本并长期跟随，往往比追新更省心。"
        }
      ]
    },
    {
      "id": "en-flax",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "Flax",
      "title": "Flax 1.13.1 热修：30 项修复、22 个 PR",
      "summary": "Flax Engine 在 1.13 之后于 11 月推出 1.13.1 热修，两周内合并 22 个 PR、修复 30 个问题，覆盖编辑器与运行时的稳定性。",
      "image": "https://opengraph.githubassets.com/1/FlaxEngine/FlaxEngine",
      "source": "Flax Engine GitHub Releases（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/FlaxEngine/FlaxEngine/releases",
      "readTime": "4 分钟",
      "hotScore": 78,
      "tags": [
        "Flax",
        "C++",
        "热修"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "1.13.1 在 1.13 基础上合并 22 个 PR、修复 30 个问题",
            "重点在编辑器与运行时稳定性",
            "Flax 保持高频小步快跑的更新节奏"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Flax 把 C++ 性能与 C# 脚本便利结合，又肯快速响应社区反馈，是想要「比 Unity 轻、比自研省事」的团队的务实备选。"
        }
      ]
    },
    {
      "id": "en-raylib",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C",
      "tag": "raylib",
      "title": "raylib 持续迭代：轻量 C 游戏编程库仍是原型首选",
      "summary": "raylib 作为单头文件、零依赖的 C 语言游戏编程库，仍在高频更新；它把窗口、图形、音频、输入封装得极简，是做算法可视化与原型验证的常青选择。",
      "image": "https://opengraph.githubassets.com/1/raysan5/raylib",
      "source": "raysan5/raylib GitHub（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/raysan5/raylib",
      "readTime": "4 分钟",
      "hotScore": 76,
      "tags": [
        "raylib",
        "C",
        "原型"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "单头文件、零依赖，跨桌面/移动/Web",
            "窗口、图形、音频、输入一站式封装",
            "非常适合算法可视化、教学与 48 小时原型"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "raylib 的价值不在「能做多大」，而在「上手多快」——当你只想验证一个玩法或一段数学，它比任何重型引擎都更不挡路。"
        }
      ]
    },
    {
      "id": "in-fortis",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·裁员",
      "tag": "Fortis Games",
      "title": "Fortis Games 关停，波及约 440 个岗位",
      "summary": "总部位于旧金山的发行商 Fortis Games 于 11/10 确认关停，最多影响 440 名员工；其背后金主 Las Vegas Sands 终止注资，旗下《Twilight Towers》也将于 11/16 停服。",
      "image": "https://gamesbeat.com/wp-content/uploads/2025/05/Fortis-Games-1.jpg",
      "source": "GamesBeat（一手）",
      "date": "2026-11-15",
      "url": "https://gamesbeat.com/fortis-games-closes-down-affecting-440-jobs",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "Fortis",
        "关停",
        "裁员"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Fortis Games 确认关停，最多 440 个岗位受影响",
            "金主 Las Vegas Sands 终止长期注资",
            "此前收购 Doppio / Oktagon / Metagame 等团队"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "一家背靠巨额资本、班底豪华的发行商也会在五年内烧完跑道，再次说明「融资能力」和「做出能留存的产品」是两件事，独立团队更该把留存和单元经济放在融资故事之前。"
        }
      ]
    },
    {
      "id": "in-nvidia",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·硬件",
      "tag": "Nvidia",
      "title": "黄仁勋辞任 Nvidia CEO，CFO Colette Kress 暂代",
      "summary": "Nvidia 于 11/12 宣布联合创始人黄仁勋辞去 CEO 职务，CFO Colette Kress 出任临时 CEO；辞任源于连续曝出的个人争议与股价波动，董事会已启动内外部继任者遴选。",
      "image": "https://gamesbeat.com/wp-content/uploads/2025/10/jensen.jpg",
      "source": "GamesBeat（一手）",
      "date": "2026-11-15",
      "url": "https://gamesbeat.com/jensen-huang-resigns-as-nvidia-ceo/",
      "readTime": "6 分钟",
      "hotScore": 93,
      "tags": [
        "Nvidia",
        "换帅",
        "GPU"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "黄仁勋 11/12 辞去 Nvidia CEO，Kress 任临时 CEO",
            "辞任与连续个人争议及股价波动相关",
            "Nvidia 称产品路线图与客户承诺不受影响"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Nvidia 的 GPU 既是游戏显卡也是 AI 算力，换帅短期不会改写路线图，但游戏硬件成本已被 AI 需求推高，独立开发者选平台和预估设备预算时得把这条线算进去。"
        }
      ]
    },
    {
      "id": "in-gamesight",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·营销",
      "tag": "Gamesight",
      "title": "Gamesight 推出 Quests：把创作者计划做成开箱即用的平台",
      "summary": "Gamesight 于 11/12 发布 Quests，让发行商能为创作者社群设定挑战任务并自动发奖，结合其已有的游戏遥测与归因能力，已接入 Plaion、Capcom、Arc System Works 等客户。",
      "image": "https://gamesbeat.com/wp-content/uploads/2026/11/EDITORIAL-CANVA-51.png",
      "source": "GamesBeat（一手）",
      "date": "2026-11-15",
      "url": "https://gamesbeat.com/gamesight-launches-quests-product-to-streamline-publishers-creator-programs",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Gamesight",
        "创作者营销",
        "Quests"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Quests 让发行商设置挑战并自动奖励创作者",
            "可对接游戏内行为做遥测与归因",
            "Plaion / Capcom / Arc System Works 已在使用"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "创作者营销正从「找人发视频」变成「可度量、可自动化的平台」，小团队预算有限，反而更适合用这类工具把每一次曝光都接到明确的转化目标上。"
        }
      ]
    },
    {
      "id": "in-xboxads",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·变现",
      "tag": "Xbox",
      "title": "Xbox 广告负责人：绝不会让广告出现在每一款游戏里",
      "summary": "Xbox Media Solutions 负责人 Jonathan Stringfield 在 GamesBeat Next 表示，广告只会出现在「讲得通、能创造价值」的地方，工作室对是否接入拥有决定权，且全程非强制。",
      "image": "https://gamesbeat.com/wp-content/uploads/2026/11/GBN1126DSC_4110.jpg",
      "source": "GamesBeat（一手）",
      "date": "2026-11-15",
      "url": "https://gamesbeat.com/xbox-advertising-leader-there-is-zero-world-where-ads-appear-in-every-game-gamesbeat-next-2026/",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "Xbox",
        "广告",
        "变现"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Xbox 明确广告不会成为「全游戏标配」",
            "是否接入由工作室自行决定，且非强制",
            "定位为订阅/买断之外的补充收入"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "在开发成本与售价两头挤压的当下，广告被摆上桌面是趋势，但 Xbox 把「决定权交给工作室」的说法，至少给开发者留了不破坏体验的退路。"
        }
      ]
    },
    {
      "id": "in-ainative",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·AI",
      "tag": "AI 原生",
      "title": "GamesBeat Next 聚焦：只能靠 AI 做出来的游戏",
      "summary": "GamesBeat Next 2026 设立「AI 原生游戏开发」议题，讨论一类只有借助 AI 才能成立的产品形态——从程序化生成到 agent 协作，AI 从工具变成玩法的组成部分。",
      "image": "https://gamesbeat.com/wp-content/uploads/2026/11/AI-1.jpg",
      "source": "GamesBeat（一手）",
      "date": "2026-11-15",
      "url": "https://gamesbeat.com/ai-native-game-development-making-games-that-can-only-be-made-with-ai-gamesbeat-next-2026/",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "AI 原生",
        "生成式",
        "玩法"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "议题探讨「只有 AI 才能做出来的游戏」",
            "AI 从生产工具转向玩法构成部分",
            "涵盖程序化生成与 agent 协作两种路径"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这类讨论的价值在于把 AI 从「省钱工具」抬到「设计维度」——当你能用自然语言实时生成关卡或角色，游戏规则本身就得重新想，而不只是把旧流程自动化。"
        }
      ]
    },
    {
      "id": "gm-5063450",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Steam",
      "tag": "Industry Unbound",
      "title": "Industry Unbound 登陆 Steam：把工厂经营做成开放沙盒",
      "summary": "《Industry Unbound》在 Steam 上架，主打无脚本的开放工业沙盒，玩家从零搭建生产线、物流与自动化网络，强调系统涌现而非固定关卡。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5063450/68820c61a140e4875fe3e3aacfa61bcbcb153af4/capsule_616x353.jpg?t=1794264841",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-15",
      "url": "https://store.steampowered.com/app/5063450/",
      "readTime": "4 分钟",
      "hotScore": 74,
      "tags": [
        "工厂",
        "沙盒",
        "自动化"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 新上架的开放工业沙盒",
            "从零搭建生产线、物流与自动化网络",
            "强调涌现式系统而非固定关卡"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这类「给工具不给剧本」的沙盒，恰是检验系统设计的练习场：它逼着你把生产、物流、供需都建模成可组合的规则，对想做模拟经营的人很有参考价值。"
        }
      ]
    },
    {
      "id": "gm-3301000",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Steam",
      "tag": "The Vast White",
      "title": "The Vast White：极地生存探索在 Steam 开页",
      "summary": "《The Vast White》在 Steam 公开页面，以冰雪荒野中的生存与探索为核心，结合基地建造、气候压迫与叙事线索，定位偏氛围向的硬核生存。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3301000/3ddb6093bed11659665cb1fead620d8f14b017b7/capsule_616x353.jpg?t=1794416519",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-15",
      "url": "https://store.steampowered.com/app/3301000/",
      "readTime": "4 分钟",
      "hotScore": 72,
      "tags": [
        "生存",
        "探索",
        "极地"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 公开的冰雪生存探索新作",
            "结合基地建造、气候压迫与叙事线索",
            "偏氛围向的硬核生存体验"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "极地题材把「温度、补给、视野」压缩成清晰的生存数值，是学习如何用环境本身当关卡设计的现成样本。"
        }
      ]
    },
    {
      "id": "gm-2487190",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Steam",
      "tag": "Main Sequence",
      "title": "Main Sequence：把恒星演化做成策略模拟",
      "summary": "《Main Sequence》在 Steam 上架，以恒星从诞生到坍缩的生命周期为模拟对象，玩家调度物质、能量与引力，观察星系统治级的演化分支。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2487190/f64b856e3c9254a8b92456643a24a6d614043875/capsule_616x353_alt_assets_1.jpg?t=1794507021",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-15",
      "url": "https://store.steampowered.com/app/2487190/",
      "readTime": "4 分钟",
      "hotScore": 71,
      "tags": [
        "模拟",
        "天文",
        "策略"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 上的恒星演化策略模拟",
            "以恒星全生命周期为模拟对象",
            "玩家调度物质、能量与引力分支"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把天体物理塞进策略框架，是「用玩法讲科学」的好例子；想做科普向或系统向游戏，这种把真实定律当规则的做法值得借鉴。"
        }
      ]
    },
    {
      "id": "gm-4780870",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Steam",
      "tag": "Aleef",
      "title": "Aleef：手绘风平台跳跃在 Steam 露面",
      "summary": "《Aleef》在 Steam 公开页面，主打手绘美术与紧凑平台跳跃，强调手感打磨与可重玩路线，是独立平台游戏又一例。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4780870/dc4bfb6821d6fc795ce65db4b7ba4d87a688e149/capsule_616x353.jpg?t=1794401956",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-15",
      "url": "https://store.steampowered.com/app/4780870/",
      "readTime": "3 分钟",
      "hotScore": 70,
      "tags": [
        "平台跳跃",
        "手绘",
        "独立"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 公开的手绘风平台跳跃",
            "强调手感打磨与可重玩路线",
            "典型的小团队独立作品"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "平台跳跃是最卷也最考验手感的品类，Aleef 这类作品提醒我们：美术风格能帮你被看见，但留客终究靠那几帧的跳跃反馈。"
        }
      ]
    },
    {
      "id": "gm-5028850",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Steam",
      "tag": "Arena of the Forge",
      "title": "Arena of the Forge：锻造主题的竞技场对战",
      "summary": "《Arena of the Forge》在 Steam 上架，把武器锻造与竞技场对战结合，玩家在战斗间隙打造与改造装备，形成「打—造—再打」的循环。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5028850/9efec09260c5e9f31be2e2c99fd505e67cd094bd/capsule_616x353.jpg?t=1794401947",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-15",
      "url": "https://store.steampowered.com/app/5028850/",
      "readTime": "4 分钟",
      "hotScore": 69,
      "tags": [
        "竞技",
        "锻造",
        "Roguelite"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 上的锻造主题竞技场对战",
            "战斗间隙打造与改造装备",
            "「打—造—再打」的核心循环"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「制造」嵌进对战循环，既给成长反馈又制造取舍，是低成本做出深度的一个套路：让玩家在每个回合都为「下一步造什么」纠结。"
        }
      ]
    },
    {
      "id": "gm-5094930",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Steam",
      "tag": "Armory Keeper",
      "title": "Armory Keeper：地下军械库的防守经营",
      "summary": "《Armory Keeper》在 Steam 公开，融合地下城防守与军械经营，玩家在深渊中维护、升级与分配武器，抵御一波波来袭。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5094930/3d1e7b0ec14ab724b11ee4d0b3138cbdf3852a5e/capsule_616x353.jpg?t=1794409099",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-15",
      "url": "https://store.steampowered.com/app/5094930/",
      "readTime": "4 分钟",
      "hotScore": 68,
      "tags": [
        "防守",
        "经营",
        "地下城"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 公开的地下军械库防守经营",
            "维护、升级与分配武器应对来袭",
            "地下城 + 经营 + 塔防的混合"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「资源管理」和「实时防守」叠在一起，天然制造张力：你总在「加固」和「补线」之间做选择，这种两难正是留存的设计来源。"
        }
      ]
    },
    {
      "id": "gm-5389200",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Steam",
      "tag": "Asteroid Watch",
      "title": "Asteroid Watch：小行星带中的警戒生存",
      "summary": "《Asteroid Watch》在 Steam 上架，背景设定于小行星带，玩家值守前哨、监测并规避太空碎片与威胁，融合生存、观测与轻度建造。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5389200/418c3139a4a81856310695bc5cb47a112c4880ca/capsule_616x353.jpg?t=1794388577",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-15",
      "url": "https://store.steampowered.com/app/5389200/",
      "readTime": "3 分钟",
      "hotScore": 67,
      "tags": [
        "太空",
        "生存",
        "观测"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 上的小行星带警戒生存",
            "值守前哨、监测与规避太空威胁",
            "生存 + 观测 + 轻度建造"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「预警—决策—损失」的节奏很适合做氛围叙事，太空题材把孤独感和风险量化成可玩的机制，是环境叙事的低成本示范。"
        }
      ]
    },
    {
      "id": "os-bullet3",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·物理",
      "tag": "Bullet3",
      "title": "Bullet3：实时与离线物理引擎持续维护",
      "summary": "Bullet Physics 的 Bullet3 仍是 C++ 物理引擎的常青树，覆盖刚体、软体、车辆与碰撞检测，被大量游戏与仿真项目直接采用或内嵌。",
      "image": "https://opengraph.githubassets.com/1/bulletphysics/bullet3",
      "source": "bulletphysics/bullet3 GitHub（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/bulletphysics/bullet3",
      "readTime": "4 分钟",
      "hotScore": 77,
      "tags": [
        "物理",
        "C++",
        "仿真"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "刚体、软体、车辆、碰撞检测全覆盖",
            "实时与离线仿真两条路径",
            "被大量游戏与引擎内嵌使用"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "想理解「碰撞、约束、求解」这些物理底层，Bullet3 的源码与示例比任何教程都直观，是自己做物理或接物理系统的硬核参考书。"
        }
      ]
    },
    {
      "id": "os-miniaudio",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·音频",
      "tag": "miniaudio",
      "title": "miniaudio：单文件 C 音频引擎仍在高频打磨",
      "summary": "mackron/miniaudio 用极简 C 代码统一了播放、混音、编解码与设备抽象，单文件即可接入，是轻量游戏音频管线的热门选择。",
      "image": "https://opengraph.githubassets.com/1/mackron/miniaudio",
      "source": "mackron/miniaudio GitHub（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/mackron/miniaudio",
      "readTime": "4 分钟",
      "hotScore": 75,
      "tags": [
        "音频",
        "C",
        "单文件"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "单文件 C 实现播放、混音、解码与设备抽象",
            "不依赖外部库，跨平台接入简单",
            "适合轻量或自研音频管线"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "音频往往是独立项目的短板，miniaudio 证明「够用的音频引擎」可以极其轻量——把复杂留在内部，把简单留给调用方，正是好库的素养。"
        }
      ]
    },
    {
      "id": "os-nuklear",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·UI",
      "tag": "nuklear",
      "title": "nuklear：单头文件即时模式 GUI 库",
      "summary": "vurtun/nuklear 是即时模式（IMGUI）的极简实现，单头文件即可在 C/C++ 项目里画出调试面板与工具界面，常被接进引擎编辑器与原型。",
      "image": "https://opengraph.githubassets.com/1/vurtun/nuklear",
      "source": "vurtun/nuklear GitHub（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/vurtun/nuklear",
      "readTime": "3 分钟",
      "hotScore": 73,
      "tags": [
        "IMGUI",
        "C",
        "编辑器"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "即时模式 GUI，单头文件零依赖",
            "C/C++ 项目即可绘制调试面板",
            "适合引擎编辑器、工具与原型"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "IMGUI 的「每一帧重画」思路特别适合调试界面：状态即代码，不必维护一堆 widget 对象，理解它之后你会对编辑器 UI 有全新看法。"
        }
      ]
    },
    {
      "id": "os-stb",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·图像",
      "tag": "stb",
      "title": "stb：被无数项目内嵌的图像与工具库集合",
      "summary": "nothings/stb 是一组单头文件库（图像加载、字体、噪声、真值碰撞等），以「复制即用」著称，几乎成了 C/C++ 游戏项目的标配积木。",
      "image": "https://opengraph.githubassets.com/1/nothings/stb",
      "source": "nothings/stb GitHub（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/nothings/stb",
      "readTime": "3 分钟",
      "hotScore": 72,
      "tags": [
        "stb",
        "单头文件",
        "C/C++"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "图像加载、字体、噪声、碰撞等单头文件库",
            "复制即用，几乎零接入成本",
            "C/C++ 游戏项目的标配积木"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "stb 把「能跑、好读、随手可改」做到极致，是「库就应该这么轻」的典范——读它的源码比读文档更能学到工程上的克制。"
        }
      ]
    },
    {
      "id": "os-sokol",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·跨平台",
      "tag": "sokol",
      "title": "sokol：极简跨平台底层 API 封装",
      "summary": "floooh/sokol 用少量 C 代码统一了图形、音频、输入等平台后端，目标是「写一次、到处编译」，常被用于自研引擎的跨端底座。",
      "image": "https://opengraph.githubassets.com/1/floooh/sokol",
      "source": "floooh/sokol GitHub（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/floooh/sokol",
      "readTime": "4 分钟",
      "hotScore": 71,
      "tags": [
        "跨平台",
        "C",
        "后端抽象"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "少量 C 代码封装图形/音频/输入后端",
            "主打「写一次、到处编译」",
            "适合做自研引擎的跨端底座"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "跨平台最难的不是画一个三角形，而是把各平台的窗口、上下文、事件统一成干净接口，sokol 用极小的表面积做到了这点，非常值得琢磨。"
        }
      ]
    },
    {
      "id": "os-llamacpp",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·AI",
      "tag": "llama.cpp",
      "title": "llama.cpp：端侧推理继续成为 AI 游戏化的底座",
      "summary": "ggerganov/llama.cpp 让大模型在 CPU/GPU/移动端高效推理，是众多本地 AI 助手、NPC 对话与工具链的起点，仍在快速迭代量化与后端。",
      "image": "https://opengraph.githubassets.com/1/ggerganov/llama.cpp",
      "source": "ggerganov/llama.cpp GitHub（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/ggerganov/llama.cpp",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "llama.cpp",
        "端侧推理",
        "AI"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "在 CPU/GPU/移动端高效跑大模型",
            "本地 AI 助手、NPC 对话的常用底座",
            "量化与后端仍在快速迭代"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把推理搬到端侧，意味着更低的延迟、更私密的对话与更可控的成本——想做「会聊天的 NPC」或「本地策划助手」，llama.cpp 是绕不开的那块地基。"
        }
      ]
    },
    {
      "id": "tu-dodatech",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·图形",
      "tag": "Shader",
      "title": "GLSL/HLSL 着色器编程指南：从顶点到后处理",
      "summary": "DodaTech 的着色器教程系统讲清 GPU 管线：用 GLSL 与 HLSL 分别写顶点/片元着色器、用 uniform 传参、采样贴图并实现 Blinn-Phong 与泛光等后处理。",
      "image": "https://godotengine.org/assets/share-image.jpg",
      "source": "tutorials.dodatech.com（一手）",
      "date": "2026-11-15",
      "url": "https://tutorials.dodatech.com/game-development/shader-programming",
      "readTime": "8 分钟",
      "hotScore": 83,
      "tags": [
        "Shader",
        "GLSL",
        "HLSL"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "讲清顶点/片元着色器与 GPU 管线",
            "GLSL 与 HLSL 双语言对照示例",
            "Blinn-Phong 光照与泛光/边缘检测后处理"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "着色器入门最大的坎是「它每像素跑一次、没状态」，这篇把 uniform、纹理采样和分支代价都点透了，配合 RenderDoc 上手能少踩很多坑。"
        }
      ]
    },
    {
      "id": "tu-gamineai",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·清单",
      "tag": "资源汇总",
      "title": "40 个免费游戏开发教程（2026 更新版）",
      "summary": "GamineAI 整理了覆盖 Unity、Unreal、Godot、编程、美术与设计的 40 个免费教程清单，按官方锚点与引擎分门别类，适合新手搭学习路径。",
      "image": "https://cdn.dribbble.com/userupload/42069257/file/original-563665fafd7b0e041f2812d9589a4f0c.png?format=webp&resize=800x600&vertical=center&gamineSlug=resources-40-free-game-development-tutorials-updated-october-2026",
      "source": "gamineai.com（一手）",
      "date": "2026-11-15",
      "url": "https://gamineai.com/resources/40-free-game-development-tutorials-updated-october-2026",
      "readTime": "6 分钟",
      "hotScore": 74,
      "tags": [
        "教程清单",
        "新手",
        "免费"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "覆盖 Unity / Unreal / Godot / 编程 / 美术 / 设计",
            "按官方文档与频道分门别类",
            "适合新手搭一条连贯的学习路径"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "教程很多，但「按顺序学完一段」比「收藏一百篇」有用得多——这类清单的价值是帮你做减法，先打通一条主线再横向扩展。"
        }
      ]
    },
    {
      "id": "tu-cs50",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·基础",
      "tag": "CS50",
      "title": "哈佛大学 CS50 游戏开发课程：从 Lua 到游戏设计",
      "summary": "Harvard 的 CS50 Introduction to Game Development 以 Lua/Love2D 等轨道讲清游戏循环、状态与可玩性，是免费且体系化的入门课。",
      "image": "https://img.youtube.com/vi/3IdOCxHGMIo/maxresdefault.jpg",
      "source": "cs50.harvard.edu（一手）",
      "date": "2026-11-15",
      "url": "https://cs50.harvard.edu/games/",
      "readTime": "7 分钟",
      "hotScore": 73,
      "tags": [
        "CS50",
        "入门",
        "Lua"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "以 Lua/Love2D 等轨道讲游戏开发基础",
            "覆盖游戏循环、状态机与可玩性",
            "免费且体系化的名校公开课"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "入门最怕一上来就被引擎淹没，CS50 先讲「循环、状态、输入」这些不依赖引擎的底层概念，打牢之后再选引擎会顺很多。"
        }
      ]
    },
    {
      "id": "tu-gdquest",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Godot",
      "tag": "GDQuest",
      "title": "GDQuest：Godot 4 工作流与开源管线",
      "summary": "GDQuest 围绕 Godot 4 提供 GDScript、着色器与生产习惯的免费/开源教程，强调干净的项目结构与可复用模式，适合从零到可发布。",
      "image": "https://gdquest.com/img/social-banner.png",
      "source": "gdquest.com（一手）",
      "date": "2026-11-15",
      "url": "https://gdquest.com/",
      "readTime": "6 分钟",
      "hotScore": 72,
      "tags": [
        "GDQuest",
        "Godot 4",
        "GDScript"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Godot 4 的 GDScript / 着色器 / 生产习惯",
            "强调干净项目结构与可复用模式",
            "免费与开源资料并重"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "GDQuest 的强项是把「工程习惯」讲清楚：信号怎么用、场景树怎么拆、资源怎么组织，这些正是新手项目后期崩坏的根源。"
        }
      ]
    },
    {
      "id": "tu-catlike",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Unity",
      "tag": "Catlike Coding",
      "title": "Catlike Coding：Unity 渲染与着色器从零讲起",
      "summary": "Catlike Coding 用一步步的 Unity 教程拆解渲染与着色器基础，从最朴素的三角形到光照模型，适合想真正搞懂图形底层的开发者。",
      "image": "https://catlikecoding.com/unity/tutorials/banner.png",
      "source": "catlikecoding.com（一手）",
      "date": "2026-11-15",
      "url": "https://catlikecoding.com/unity/tutorials/rendering/",
      "readTime": "9 分钟",
      "hotScore": 71,
      "tags": [
        "Unity",
        "渲染",
        "着色器"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一步步拆解 Unity 渲染与着色器",
            "从基础三角形讲到光照模型",
            "偏底层、重推导"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "图形最容易「照抄 shader 但不知其所以然」，Catlike Coding 的推导式写法逼你理解每一行在算什么，长期看比背模板更划算。"
        }
      ]
    },
    {
      "id": "tu-godotdocs",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Godot",
      "tag": "Godot 文档",
      "title": "Godot 官方文档：从零开始的入门路径",
      "summary": "Godot 4.x 稳定版文档提供从场景树、脚本到导出的一条龙入门路径，是权威且随版本更新的第一手参考资料。",
      "image": "https://opengraph.githubassets.com/1/godotengine/godot",
      "source": "docs.godotengine.org（一手）",
      "date": "2026-11-15",
      "url": "https://docs.godotengine.org/en/stable/getting_started/introduction/index.html",
      "readTime": "5 分钟",
      "hotScore": 70,
      "tags": [
        "Godot",
        "官方文档",
        "入门"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "覆盖场景树、脚本、渲染与导出",
            "稳定版文档随版本更新",
            "权威的第一手参考资料"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "文档常被人低估，但 Godot 这套入门路径把「先建场景还是先写脚本」这类取舍讲得很清楚，卡住时回到官方文档往往比搜教程更快。"
        }
      ]
    },
    {
      "id": "ai-moonshot",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·套件",
      "tag": "Moonshot Kimi",
      "title": "Moonshot AI 推出 Kimi 游戏开发套件（Unity/Unreal/Blender）",
      "summary": "Moonshot AI 于 11/3 发布 Kimi 平台的游戏开发套件，把 K3.1 模型接入 Unity、Unreal 与 Blender，用 Kimi Code / Kimi Work 两个 agent 直接改项目目录与场景层级。",
      "image": "https://aiunderstanding.org/api/news/image/moonshot-ai-launches-game-development-suite-for-unity-and-unreal?v=1793777850787&size=uhd",
      "source": "AI Understanding（一手）",
      "date": "2026-11-15",
      "url": "https://aiunderstanding.org/news/moonshot-ai-launches-game-development-suite-for-unity-and-unreal",
      "readTime": "6 分钟",
      "hotScore": 91,
      "tags": [
        "Moonshot",
        "Kimi",
        "agent"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "K3.1 模型接入 Unity / Unreal / Blender",
            "Kimi Code 改源码、Kimi Work 跑多文件工作流",
            "演示中无人值守 20 小时复刻一款游戏并导出原生代码"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这类套件把 agent 直接放进引擎文件树，价值在「省去复制粘贴」，但演示方也承认可靠性取决于你审 diff 的成本——把它当强力副驾，而不是替你背锅的同事。"
        }
      ]
    },
    {
      "id": "ai-gemini",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·模型",
      "tag": "Gemini 4 Carbon",
      "title": "Gemini 4 Carbon 开放付费 API，/swarm 把任务拆给一队 agent",
      "summary": "Google 于 11/10 向付费开发者与 AI Ultra 用户开放 Gemini 4 Carbon，并在 Antigravity 推出 /swarm 协作预览：一个提示被拆成协调 agent 与多个并行 worker，各自在独立 git 工作树改代码、由对抗验证器审查。",
      "image": "https://static.atlascloud.ai/uploads/gemini_4_carbon_is_google_s_strongest_model_yet_and_free_gemini_plans_don_t_incl_cover_4b497eec34.png",
      "source": "Atlas Cloud（一手，Google 公告）",
      "date": "2026-11-15",
      "url": "https://www.atlascloud.ai/zh-TW/blog/tips/gemini-4-carbon",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "Gemini",
        "Carbon",
        "swarm"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Carbon 11/10 开放付费 API，Ultra 用户可在 Antigravity 使用",
            "/swarm 把提示拆成协调 agent + 多个并行 worker",
            "演示用 Blender 建模 + Three.js 拼出 3D 网页游戏"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「按角色分配模型」是 swarm 最值钱的设计：把深推理留给规划与审查，把重复活交给便宜模型，这和游戏里把重计算下放给子线程是同一套工程直觉。"
        }
      ]
    },
    {
      "id": "ai-ludo",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·美术",
      "tag": "Ludo.ai",
      "title": "Ludo.ai 新增可复用动作库，支持人形动画左右镜像",
      "summary": "Ludo.ai 于 11/11 更新中加入账号级动作库：同一段人形动作可驱动多个精灵或已绑定 3D 角色，并支持镜像交换动作的左右侧，降低重复制作成本。",
      "image": "https://ludo.ai/image/0x0/_media-80199c62-57e7-475f-babd-8288049031e0.png",
      "source": "ludo.ai（一手）",
      "date": "2026-11-15",
      "url": "https://ludo.ai/features/sprite-generator",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Ludo.ai",
        "动作库",
        "动画"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "账号级可复用人形动作库",
            "同一段动作驱动多个精灵或 3D 角色",
            "支持左右镜像，减少重复制作"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「一次生成、多处复用」正是 AI 美术该有的形态——把动作当资产沉淀下来，团队的边际成本才会随项目数下降，而不是每个角色都从零来一遍。"
        }
      ]
    },
    {
      "id": "ai-comfyui",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工程",
      "tag": "ComfyUI",
      "title": "ComfyUI 迁入 Comfy-Org 组织，最新稳定版 v0.45.0 发布",
      "summary": "ComfyUI 官方仓库已从个人账号 comfyanonymous 迁移至 Comfy-Org 组织（旧链接自动重定向），最新稳定版 v0.45.0 已发布，节点生态持续扩张，仍是游戏素材批量生成与改版的首选可视化工作流。",
      "image": "https://opengraph.githubassets.com/1/Comfy-Org/ComfyUI",
      "source": "Comfy-Org/ComfyUI GitHub Releases（一手）",
      "date": "2026-11-15",
      "url": "https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.45.0",
      "readTime": "5 分钟",
      "hotScore": 78,
      "tags": [
        "ComfyUI",
        "视频编辑",
        "H3 Max"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "0.44 新增 6 个 MiniMax H3 Max 视频节点",
            "可换演员、画幅、时长与镜头运动",
            "适合把预告片素材快速改版适配多平台"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "游戏宣发越来越吃短视频物料，把视频编辑接进 ComfyUI 工作流，意味着同一段实机画面可以批量产出不同比例与风格的切片，省下大量手工剪辑。"
        }
      ]
    },
    {
      "id": "ai-quickmatch",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "QuickMatch",
      "title": "QuickMatch 盘点新一波 AI 游戏开发工具",
      "summary": "QuickMatch 在 11 月持续收录新一批 AI 游戏开发工具：从一句话生成可玩 2D/3D 网页游戏，到 Roblox 脚本生成、Minecraft 模组制作、Godot/iPad 编辑器内 agent 等。",
      "image": "https://quickmatch.si/og/new.png",
      "source": "quickmatch.si（一手）",
      "date": "2026-11-15",
      "url": "https://quickmatch.si/new",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "QuickMatch",
        "工具盘点",
        "AI"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一句话生成可玩 2D/3D 网页游戏",
            "Roblox 脚本、Minecraft 模组、Godot/iPad 内 agent",
            "新工具几乎以「每天一款」的节奏出现"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "工具多到看不过来时，关键不是追新，而是挑一条你真实会卡住的环节（比如「出首个可玩 Demo 太慢」）去试一款，验证它是否真的把那一步压缩了。"
        }
      ]
    },
    {
      "id": "ai-makegamewithai",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·周报",
      "tag": "周报",
      "title": "AI 游戏开发周报：多人联机测试、Gemini Carbon、Ludo 动作库",
      "summary": "makegamewithai 的周报汇总 11/8–11/12 的 AI 游戏动态：The Sandbox Studio 开放实时多人、Gemini 4 Carbon 付费 API、Ludo.ai 动作库、3D Gen Studio 4.1 提示动画、Gemini 3.8 TTS 等。",
      "image": "https://makegamewithai.com/og.png",
      "source": "makegamewithai.com（一手）",
      "date": "2026-11-15",
      "url": "https://makegamewithai.com/news",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "周报",
        "AI 动态",
        "工具"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "The Sandbox Studio 开放实时多人联机",
            "Gemini 4 Carbon 开放付费 API、Ludo.ai 动作库上线",
            "3D Gen Studio 4.1、Gemini 3.8 TTS、ComfyUI 0.44 等集中更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "周报的意义是把散落的更新拼成趋势：这一周的主线其实是「AI 从单点工具变成可编排的工作流」——多人测试、动作库、音频复用都在朝系统化走。"
        }
      ]
    },
    {
      "id": "ct-shift",
      "category": "contest",
      "categoryName": "竞赛招聘",
      "subcategory": "竞赛·Jam",
      "tag": "SHIFT Jam",
      "title": "SHIFT 游戏 Jam 开赛：Unity 联合、奖金 6 万迪拉姆",
      "summary": "Abu Dhabi Gaming 与 Unity 于 11/13–15 在阿布扎比举办第二届 SHIFT 游戏 Jam，奖金合计 6 万迪拉姆，面向个人或最多五人团队，可用 AI 辅助开发。",
      "image": "https://gamesbeat.com/wp-content/uploads/2026/11/AI-1.jpg",
      "source": "Arab Game News（一手）",
      "date": "2026-11-15",
      "url": "https://www.arabgamenews.com/post/abu-dhabi-gaming-unity-shift-game-jam-2026",
      "readTime": "4 分钟",
      "hotScore": 76,
      "tags": [
        "SHIFT",
        "Unity",
        "Game Jam"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/13–15 在阿布扎比线下举办",
            "奖金合计 6 万迪拉姆，个人或最多五人团队",
            "允许 AI 辅助，需在提交中披露"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Jam 的价值从来不在奖金，而在 48 小时逼你做完一个闭环；主办方明确「AI 可用但须披露」，也说明这类赛事已在认真地把 AI 当正式工具对待。"
        }
      ]
    },
    {
      "id": "ct-jamference",
      "category": "contest",
      "categoryName": "竞赛招聘",
      "subcategory": "竞赛·AI Jam",
      "tag": "Jamference",
      "title": "Jamference：用 AI 做游戏的线上 Jam，主题 Solarpunk",
      "summary": "Jamference 于 11/13–20 举办以 Solarpunk 为主题、隐藏「招财猫」限制的 AI 游戏 Jam，支持 solo 或组队，强调「把 AI 用在明处」，结束后再用一周互相评分。",
      "image": "https://makegamewithai.com/og.png",
      "source": "jamference.com（一手）",
      "date": "2026-11-15",
      "url": "https://jamference.com/index.html",
      "readTime": "4 分钟",
      "hotScore": 75,
      "tags": [
        "Jamference",
        "Solarpunk",
        "AI Jam"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/13–20 线上，主题 Solarpunk",
            "隐藏限制：游戏中藏一只可发现的招财猫",
            "强调「AI 用在明处」，结束后再评一周"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「隐藏彩蛋」作为硬性限制，是设计上的巧思——它逼每个参赛者在玩法里为真隐藏物留位置，比单纯「做个游戏」更有叙事钩子。"
        }
      ]
    },
    {
      "id": "ct-unity2026",
      "category": "contest",
      "categoryName": "竞赛招聘",
      "subcategory": "竞赛·官方 Jam",
      "tag": "Unity Jam",
      "title": "Unity 2026 官方游戏 Jam：11/5–13 线上开跑",
      "summary": "Unity 于 11/5–13 举办 2026 官方游戏 Jam，开发者有七天围绕揭晓主题做游戏，另留数日通过 itch.io 提交；设 Unity Choice Awards 与最佳学生游戏奖。",
      "image": "https://unityreleases.com/opengraph-image",
      "source": "World Programming（一手）",
      "date": "2026-11-15",
      "url": "https://www.worldprogramming.org/posts/unity-invites-developers-to-its-2026-game-jam-omkxyq",
      "readTime": "4 分钟",
      "hotScore": 74,
      "tags": [
        "Unity",
        "官方 Jam",
        "itch.io"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/5–13 线上，七天围绕主题做游戏",
            "通过 itch.io 提交，设 Unity Choice Awards",
            "另设最佳学生游戏奖"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "官方 Jam 的评委口径更偏「完成度与创意」，比纯社区 Jam 多一层被行业看到的机会，学生团队尤其值得拿它当作品集的练兵场。"
        }
      ]
    },
    {
      "id": "ct-netease",
      "category": "contest",
      "categoryName": "竞赛招聘",
      "subcategory": "招聘·校招",
      "tag": "网易游戏",
      "title": "网易游戏新加坡校招启动：游戏程序员岗位开放",
      "summary": "NetEase Games 在新加坡开启校园招聘，游戏程序员岗位面向掌握 C/C++/Python 与计算机基础的候选人，强调图形学、分布式系统与 AI 提效经验的加分。",
      "image": "https://store.steampowered.com/app/5389200/capsule_616x353.jpg",
      "source": "Digital in Asia 招聘（一手）",
      "date": "2026-11-15",
      "url": "https://jobs.digitalinasia.com/jobs/07072ecce13a55fb/netease-games-sg-campus-recruitment-game-programmer",
      "readTime": "4 分钟",
      "hotScore": 77,
      "tags": [
        "网易",
        "校招",
        "游戏程序"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "新加坡校园招聘，游戏程序员岗位",
            "要求 C/C++/Python 与扎实的计算机基础",
            "图形学、分布式系统、AI 提效经验加分"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "大厂校招把「图形学 + AI 工具提效」同时列进加分项，说明行业想要的不是单一技能，而是既懂底层渲染、又能用 AI 把流程跑快的人——学习路线可以照这个方向偏一点。"
        }
      ]
    }
  ]
};
