window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-22",
    "weekday": "星期日",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-22 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：米哈游被曝筹备《原神》IP 新作，改用虚幻 5 试水 PVP（hero）",
      "引擎精读：Unity 6.7/CoreCLR 路线、Unity 7 ECS for All、Godot 4.8 beta 4、Babylon.js 9.37",
      "开源宝库：Claude-Code-Game-Studios、blender-skills、nobodywho、SpacetimeDB",
      "AI 前沿：ERNIE 5.5 写 UE 武侠游戏、Antigravity 自开浏览器、Runway 开源 Praxis-1",
      "游戏动态：《WE'RE ALL IN!》上线、《Occult Pawnshop Simulator》、《Kintsugi Cottage》",
      "竞赛招聘：Checkpoint Game Jam Top 20、indiePlay 学生作品、网易/紫龙 27 届校招"
    ],
    "engineStatus": [
      {
        "name": "Unity 6.7",
        "type": "unity",
        "status": "CoreCLR 实验后端",
        "badge": "UNITY",
        "color": "blue"
      },
      {
        "name": "Unreal 5.8",
        "type": "unreal",
        "status": "米哈游新作选型",
        "badge": "UE",
        "color": "violet"
      },
      {
        "name": "Godot 4.8",
        "type": "godot",
        "status": "beta 4 修复潮",
        "badge": "OSS",
        "color": "green"
      },
      {
        "name": "Babylon.js",
        "type": "native",
        "status": "9.37 WebGPU",
        "badge": "WEB",
        "color": "teal"
      },
      {
        "name": "SpacetimeDB",
        "type": "native",
        "status": "数据库即服务器",
        "badge": "OSS",
        "color": "cyan"
      },
      {
        "name": "ERNIE 5.5",
        "type": "ai",
        "status": "11h 写 UE 游戏",
        "badge": "AI",
        "color": "orange"
      }
    ]
  },
  "hero": {
    "id": "hero-mihoyo-ue5-pvp",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "米哈游·技术路线转向",
    "subcategory": "行业·引擎选型",
    "title": "米哈游被曝筹备《原神》IP 新作：改用虚幻 5，首次试水 PVP",
    "summary": "11 月 19 日电子科技大学软件学院技术分享上，米哈游《原神》技术负责人王萌透露团队正筹备一款基于《原神》IP 的新项目，采用虚幻引擎 5 开发、涉及「新概念 PVP」，由原班核心团队带领。官方尚未公布名称、玩法与上线计划。《原神》此前基于 Unity 研发，换引擎意味着战斗平衡、服务器架构与长线运营都要重搭。头部厂商愿意为一个新玩法方向换掉整套技术底座，本身就是对「品类扩张比复用管线更值钱」的下注——这对只盯着引擎迁移成本的团队是个提醒。",
    "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-22-hero-mihoyo.jpg",
    "source": "游戏葡萄（网易订阅转载）",
    "date": "2026-11-20",
    "url": "https://www.163.com/dy/article/LC6EBNJ305268BP2.html",
    "readTime": "8 分钟",
    "hotScore": 97,
    "tags": [
      "米哈游",
      "原神",
      "虚幻引擎5",
      "PVP",
      "引擎选型"
    ],
    "content": [
      {
        "title": "已披露要点",
        "type": "list",
        "items": [
          "透露场合为 11 月 19 日电子科技大学软件学院技术分享，分享人为《原神》技术负责人王萌",
          "项目基于《原神》IP，采用虚幻引擎 5 开发，由原班核心团队带领",
          "玩法方向涉及「新概念 PVP」，与米哈游擅长的长线内容型游戏不同",
          "官方尚未公布名称、玩法细节与上线计划，细节以现场流出信息为准"
        ]
      },
      {
        "title": "观察",
        "type": "text",
        "text": [
          "《原神》从 Unity 起步，据现场信息新项目改用 UE5，还有 5 个预研方向里多款采用 UE5。换引擎的代价不小，但 PVP 与多人合作对网络同步、战斗公平性要求更高，选一个更适配的底座比硬套旧管线理性。真正值得盯的不是「米哈游弃用 Unity」这类标题，而是它把 IP 当产品试验田、用不同引擎承接不同品类的思路——技术选型跟着玩法目标走，而不是反过来。"
        ]
      }
    ]
  },
  "items": [
    {
      "id": "en-unity67-coreclr",
      "category": "engine",
      "subcategory": "引擎·Unity",
      "title": "Unity 6.7 公测版落地：CoreCLR 作为实验性脚本后端登场",
      "summary": "Unity 6000.7.0b10 于 11 月 19 日发布，是 6.7 周期的公测构建。最大变化是 CoreCLR 作为可选脚本后端进入实验阶段，先在桌面端与 Mono、IL2CPP 并存；原生 Dictionary 序列化、移除不安全的 BinaryFormatter 也在其中。计划 6.8 移除 Mono、全面转向 CoreCLR。",
      "source": "Unity Releases / VersionAlert",
      "date": "2026-11-19",
      "url": "https://unityreleases.com/releases/6000.7.0b10",
      "image": "https://unityreleases.com/brand/social-preview-gearbox.png",
      "badge": "Unity 6.7",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Unity 6.7",
        "CoreCLR",
        "Mono",
        "脚本后端"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "6000.7.0b10 于 11 月 19 日发布，含 20 条发布说明与多项 Blocker 修复",
            "CoreCLR 作为实验性脚本后端，桌面优先，与 Mono/IL2CPP 并存",
            "新增原生 Dictionary 序列化，移除不安全的 BinaryFormatter",
            "官方口径 6.8 将移除 Mono，以 CoreCLR 作为 C# 层基础"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "Mono 用了十余年，换 CoreCLR 的核心收益是更精确的垃圾回收与更快的域重载——对大型项目是每周省下的等待时间。但 6.7 只是实验选项，官方也提醒先开分支试、别急着上架；真正的切换点在 6.8。现在该做的不是追新，而是把仍在用 BinaryFormatter 的依赖先 phased out。"
          ]
        }
      ]
    },
    {
      "id": "en-unity-coreclr-roadmap",
      "category": "engine",
      "subcategory": "引擎·Unity",
      "title": "从 Mono 到 CoreCLR：Unity 十年最大底层更换怎么影响你的项目",
      "summary": "一篇面向工作室的迁移分析拆解了 Unity 换脚本运行时的路线：6.7 公测版 CoreCLR 为实验性、可opt-in；6.8 将移除 Mono、CoreCLR 成为 C# 层基础，目标 .NET 10 与 C# 14。新 GC 是可移动的精确分代回收，并整合 MiMalloc 改善多线程分配，IL2CPP 在 iOS/主机端继续保留。",
      "source": "DEV Community · Oceanview Games",
      "date": "2026-11-18",
      "url": "https://dev.to/oceanviewgames/unitys-path-to-coreclr-what-the-mono-cutover-means-for-your-studio-49p1",
      "image": "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticle%2F",
      "badge": "CoreCLR 迁移",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Unity",
        "CoreCLR",
        "GC",
        "IL2CPP"
      ],
      "content": [
        {
          "title": "迁移路线",
          "type": "list",
          "items": [
            "6.7（公测）CoreCLR 为实验性、opt-in 后端，桌面优先，与 Mono/IL2CPP 并存",
            "6.8（目标年内）移除 Mono，CoreCLR 成为基础，瞄准 .NET 10 与 C# 14",
            "新 GC 为精确、可移动的分代回收；整合 MiMalloc 改善 Job System 多线程分配",
            "iOS 与主机等受限平台仍需 AOT，IL2CPP 不会退出"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "官方明确 6.8 先追求「整体性能持平」而非全面提速，这点比版本号更值得记住。对做移动与主机的团队，IL2CPP 仍是主战场，CoreCLR 的 GC 红利短期主要落在编辑器与桌面端。把这次升级当「地基工程」而非「性能更新」来排期，才不会在 6.8 到来时手忙脚乱。"
          ]
        }
      ]
    },
    {
      "id": "en-unite-tokyo-unity7",
      "category": "engine",
      "subcategory": "引擎·Unity",
      "title": "Unite Tokyo 2026 复盘：Unity 7 让每个 GameObject 都成为实体",
      "summary": "Unite Tokyo 2026 主题演讲披露 Unity 7 方向的 ECS for All——每个 GameObject 都是实体，ECS 变换就是 GameObject 变换，可在保留 Inspector 与撤销流程的前提下直接挂实体数据。图形侧 Atrio 演示 URP 动态全局光照，Unity Graphics Kernel 基于 DX12/Vulkan/Metal 让光追性能提升逾 62%，Unity CLI 1.0 正式发布。",
      "source": "The Futurist · Unite Tokyo",
      "date": "2026-11-19",
      "url": "https://www.thefuturist.co/whats-coming-to-unity-unite-tokyo/amp/",
      "image": "https://i.ytimg.com/vi/5m4kL-A2XJ8/maxresdefault.jpg",
      "badge": "Unity 7",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Unity 7",
        "ECS",
        "URP",
        "UGK"
      ],
      "content": [
        {
          "title": "大会要点",
          "type": "list",
          "items": [
            "ECS for All：GameObject 即实体，兼容 Inspector、自定义编辑器与撤销",
            "Atrio 演示 URP 表面缓存 GI，动态几何体零烘焙反射",
            "Unity Graphics Kernel 提速光追 GPU 性能超 62%，面向 DX12/Vulkan/Metal",
            "Unity CLI 1.0 正式发布，Pipeline API 处于 beta、计划 2027 年 GA"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "ECS for All 的关键不是性能数字，而是「不强迫你放弃熟悉的工作流」——把数据导向设计塞进 GameObject 体系里，迁移门槛一下低了不少。对还在观望 DOTS 的团队，这可能是第一次能渐进式吃到大批次红利的版本；但 beta 功能别进生产，先看 2027 的 GA。"
          ]
        }
      ]
    },
    {
      "id": "en-godot48-beta4",
      "category": "engine",
      "subcategory": "引擎·Godot",
      "title": "Godot 4.8 beta 4 发布：123 项修复，可能是稳定版前最后一个测试版",
      "summary": "Godot 4.8 beta 4 于 11 月 18 日发布，由 58 位贡献者带来 123 项修复，覆盖 3D 渲染、音频、场景序列化、编辑器与 GDScript 工具链。官方称多数发布阻塞已解决，可能是 4.8 周期最后一个 beta。C# 版本最低 .NET 要求提升至 10.0，Web 构建新增 HTTPS 服务选项。",
      "source": "FOSSWire",
      "date": "2026-11-18",
      "url": "https://fosswire.org/news/godot-48-beta-4-arrives-with-123-fixes-nears-final-release",
      "image": "https://fosswire.org/og/godot-48-beta-4-arrives-with-123-fixes-nears-final-release.png",
      "badge": "Godot 4.8",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 87,
      "tags": [
        "Godot 4.8",
        "beta 4",
        ".NET 10",
        "GDScript"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "11 月 18 日发布，58 位贡献者共 123 项修复，源自提交 b070e63b1",
            "修复 Trail3D 点缩放、VoxelGI 越界渲染与正交相机阴影剔除等问题",
            "节点无法处理时音频以暂停态启动，避免意外播放",
            "C# 构建最低要求升至 .NET 10；Web 构建新增 HTTPS 服务选项"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "从 beta 3 的 74 项到 beta 4 的 123 项，修复数回升说明团队在做最后一遍回归清理，而非加新功能。对计划升级的团队，这正是把项目丢进 beta 做压测的窗口——赶在稳定版锁定前报出回归，比上线后补救便宜得多。用 C# 的记得先升级工具链。"
          ]
        }
      ]
    },
    {
      "id": "en-babylon937",
      "category": "engine",
      "subcategory": "引擎·Web",
      "title": "Babylon.js 9.37 连发两版：修浮动原点与 WebGPU 异步管线",
      "summary": "Babylon.js 9.37.0 与 9.37.1 相继发布。9.37.0 修复文本数据 URL 的 UTF-8 解码、浮动原点导致的投影世界矩阵偏移，并让 Inspector Lite 显示纹理预览；9.37.1 新增可选的 WebGPU 异步管线创建，修正 Native 端与 WebGL 在视图矩阵、裁剪与深度共享上的差异。",
      "source": "GitHub Releases · Babylon.js",
      "date": "2026-11-20",
      "url": "https://github.com/BabylonJS/Babylon.js/releases/tag/9.37.0",
      "image": "https://opengraph.githubassets.com/1/BabylonJS/Babylon.js",
      "badge": "Babylon.js 9.37",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Babylon.js",
        "WebGPU",
        "Gaussian Splatting",
        "Native"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "9.37.0：文本数据 URL 按 UTF-8 解码，Color3/4 转十六进制前先钳制",
            "修复浮动原点下的投影世界矩阵偏移，恢复大世界场景的 CameraGizmo",
            "Gaussian splatting 现按调用顺序保留全量/部分纹理上传",
            "9.37.1 新增可选 WebGPU 异步管线创建，Native 端多项渲染对齐修复"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "这类小版本里的「顺序修复」最容易被忽视：纹理删除排在命令之后、splat 上传保序，解决的都是闪烁与陈旧资源这类难复现问题。同时跑 WebGPU 和 Native 的团队，升级后应重测依赖排序、混合与深度共享的场景——渲染差异往往就藏在补丁说明的一行字里。"
          ]
        }
      ]
    },
    {
      "id": "en-engine-compare",
      "category": "engine",
      "subcategory": "引擎·选型",
      "title": "17 款引擎横评表更新：把价格、抽成与许可证摊开对比",
      "summary": "Indie Tooling 的引擎对比表更新至 35 款产品（17 引擎 + 18 工具），按最新稳定版、价格、抽成、许可证、编辑器平台、导出目标与语言逐项列出，附来源与历史记录，支持 CSV/JSON 下载。引擎表 11 月 15 日更新，覆盖 Unity、UE、Godot、Bevy、Defold、Flax 等，并提供「免费无抽成」「开源」「可上主机」等快捷筛选。",
      "source": "Indie Tooling",
      "date": "2026-11-15",
      "url": "https://indietooling.com/posts/compare-tables-guide",
      "image": "https://indietooling.com/_astro/compare-tables-guide.DuCMTpxz_Z1K2xWs.jpg",
      "badge": "引擎选型",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "引擎对比",
        "许可证",
        "抽成",
        "开源"
      ],
      "content": [
        {
          "title": "表格要点",
          "type": "list",
          "items": [
            "覆盖 17 款引擎与 18 款开发工具，逐项列价格、抽成、许可证与平台",
            "Unity 年收入 20 万美元以下免费、Pro 每席位每年 2310 美元",
            "UE 每产品超 100 万美元总营收抽 5%，Epic 商店销售免抽成；Flax 超 25 万美元抽 4%",
            "提供免费无抽成、开源、可上主机、可导 Web 等一键筛选视图"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "选型纠结往往不是「哪个引擎更强」，而是「哪个的成本结构适合我这款游戏」。把抽成门槛、编辑器平台、导出目标放到一张表里，比读十篇对比长文更快收敛。对独立开发者，先用筛选视图圈出「免费无抽成 + 能导 Web」的候选，再挑一个做原型，比反复比较更实在。"
          ]
        }
      ]
    },
    {
      "id": "in-tencent-jiangxin",
      "category": "industry",
      "subcategory": "行业·投融资",
      "title": "腾讯入股北京江新互动 26.9%：休闲赛道的又一笔 minority 下注",
      "summary": "11 月 20 日工商变更显示，腾讯取得北京江新互动 26.9% 少数股权，后者由《我的家园我的世界》创始人刘佳治控制，6 月成立。此前腾讯 10 月参投土耳其 Flow Games 4600 万美元、9 月领投 Circle Games 2500 万美元，叠加全资的 Miniclip、Easybrain，持续加码休闲手游的留存与广告变现。",
      "source": "Gameforce Mobile",
      "date": "2026-11-20",
      "url": "https://www.gameforcemobile.com/news/6006-tencent-acquires-26-9-percent-of-beijing-jiangxin-as-its-casual-gaming-investment-strategy",
      "image": "https://www.gameforcemobile.com/images/news/2026-11-20/tencent-acquires-26-9-percent-of-beijing-jiangxin-as-its-casual-gaming-investment-strategy.jpg",
      "badge": "腾讯",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "腾讯",
        "休闲游戏",
        "投融资",
        "Miniclip"
      ],
      "content": [
        {
          "title": "交易要点",
          "type": "list",
          "items": [
            "腾讯取得北京江新互动 26.9% 少数股权，金额未披露",
            "标的由《我的家园我的世界》创始人刘佳治控制，2026 年 6 月成立",
            "此前腾讯参投 Flow Games 4600 万美元、领投 Circle Games 2500 万美元",
            "腾讯全资持有 Miniclip，及其收购的 Easybrain 与 Lessmore"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "腾讯在休闲赛道用的是「全资平台 + 少数股权广撒网」的组合拳：既控住 Miniclip 这样的现金牛，又用小额投资押中一批新团队。对用户获取越来越贵的当下，休闲游戏的广告变现与留存价值反而被重估——大厂的每一笔 minority 投资，都是在给这条赛道投票。"
          ]
        }
      ]
    },
    {
      "id": "in-netease-refund",
      "category": "industry",
      "subcategory": "行业·产品调整",
      "title": "网易《破碎之地》向付费测试玩家全额退款：研发中的项目为何主动「结账」",
      "summary": "11 月 19 日网易《破碎之地》项目组发布公开信，向参与过付费测试的玩家开放历史充值全额退款，申请期 11 月 19 日至 12 月 18 日，另备纪念周边。这款已沉寂近两年的研发中游戏，公告中写「重新进行认真的设计思考」，被解读为产品方向推倒重来。",
      "source": "GameLook（腾讯新闻转载）",
      "date": "2026-11-21",
      "url": "https://news.qq.com/rain/a/20261121A0DELU00",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-22-refund.jpg",
      "badge": "网易",
      "badgeType": "business",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "网易",
        "破碎之地",
        "退款",
        "产品调整"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "11 月 19 日项目组公开信宣布付费测试玩家历史充值全额退款",
            "申请时间 11 月 19 日至 12 月 18 日，另为付费测试玩家准备纪念周边",
            "游戏仍在研发、已沉寂近两年，公告称要「重新进行认真的设计思考」",
            "观察普遍解读为产品方向将大幅调整、而非停运"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "行业里「退款」通常绑定停运或丑闻，一款研发中的游戏主动给历史付费玩家结账，反而赢了口碑。对开发团队，这提示一个容易被忽略的细节：当你准备推翻旧方向时，如何体面处理早期支持者的投入，本身就是产品信誉的一部分——信任是可以攒的，也是能被记住的。"
          ]
        }
      ]
    },
    {
      "id": "in-firaxis-layoff",
      "category": "industry",
      "subcategory": "行业·人事",
      "title": "《文明》开发商 Firaxis 裁员三分之一，工作室总裁离任",
      "summary": "据 GameLook 汇总，Take-Two 主导下，《文明》与《XCOM》系列开发商 Firaxis Games 裁员约三分之一、涉及约 60 人，包括自 2023 年起担任工作室负责人的 Heather Hazen。这是 2026 年游戏行业持续收缩的又一例，头部 IP 系列也未能幸免。",
      "source": "腾讯新闻（Bloomberg 转载）",
      "date": "2026-11-18",
      "url": "https://news.qq.com/rain/a/20261118A0I4LN00",
      "image": "",
      "badge": "Firaxis",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 78,
      "tags": [
        "Firaxis",
        "Take-Two",
        "裁员",
        "文明"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "Firaxis Games 在 Take-Two 主导下裁员约三分之一、涉及约 60 人",
            "离任者包括自 2023 年起担任工作室负责人的 Heather Hazen",
            "同期 Jam City 裁约 10% 员工、保留全部工作室与游戏",
            "GDC 调查显示三分之一从业者过去两年经历过裁员"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "连《文明》这种长青系列的工作室都在缩编，说明这轮调整不是「项目失败」而是「成本结构重估」。对想进大厂的学生，稳定的老牌工作室不再是默认安全选项；把抗风险能力建在自己可迁移的技术与作品上，比押注某家公司的招牌更靠谱。"
          ]
        }
      ]
    },
    {
      "id": "in-jamcity-layoff",
      "category": "industry",
      "subcategory": "行业·人事",
      "title": "Jam City 裁员约 10%：CEO 更迭后的手游老将瘦身",
      "summary": "美国手游发行商 Jam City 于 11 月 20 日前后裁员约 10%，称是为了提升游戏表现与业务可持续性，同时强调不会关闭任何工作室或游戏。此前联合创始人 Joshua Yguado 已于 2026 年卸任 CEO，由 Kabam CEO Chul-min Sim 接任并同时管理两家公司。",
      "source": "Game Is Hard（援引 PocketGamer.biz）",
      "date": "2026-11-20",
      "url": "https://gameishard.gg/jam-city-cuts-approximately-10-of-staff-while-keeping-studios-and-games-open",
      "image": "",
      "badge": "Jam City",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 74,
      "tags": [
        "Jam City",
        "手游",
        "裁员",
        "Kabam"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "Jam City 裁员约 10%，理由为提升游戏表现与业务可持续性",
            "公司明确不关闭任何工作室或游戏，产品线含《哈利波特：霍格沃茨之谜》等",
            "联合创始人 Yguado 于 2026 年卸任 CEO，由 Kabam 的 Chul-min Sim 接任",
            "Jam City 与 Kabam 均与 Netmarble 有关联"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "裁员但保留全部项目，往往意味着「砍人保管线」——公司判断产品还在，只是组织太重。对从业者的信号是：即便项目活着，岗位也未必稳。看一家公司健不健康，别只看它在做什么游戏，更要看它的管理层的稳定性与现金流。"
          ]
        }
      ]
    },
    {
      "id": "in-eu-union-ai",
      "category": "industry",
      "subcategory": "行业·工会",
      "title": "欧洲游戏业工会发布联合宣言：要求全面避免使用生成式 AI",
      "summary": "11 月 17 日，IWGB Game Workers' Branch 联合 Game Workers Unite Ireland、西班牙 CSVI 与意大利 FIOM-CGIL Milan 发布《论生成式 AI 在游戏行业中的使用》宣言，从工作条件、劳资关系、训练数据、歧视到隐性成本列了五章，并为从业者、雇主、玩家与监管者各开行动清单，核心诉求是完全避免使用生成式 AI。",
      "source": "澎湃新闻",
      "date": "2026-11-17",
      "url": "https://www.thepaper.cn/newsDetail_forward_34514261",
      "image": "",
      "badge": "IWGB",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 76,
      "tags": [
        "工会",
        "生成式AI",
        "欧洲",
        "劳动权益"
      ],
      "content": [
        {
          "title": "宣言要点",
          "type": "list",
          "items": [
            "11 月 17 日由 IWGB 游戏工会分支联合爱尔兰、西班牙、意大利工会发布",
            "内容涵盖工作条件、劳资关系、训练数据、歧视与隐性成本五章",
            "为从业者、雇主、玩家、监管者分别列出行动清单",
            "核心诉求是完全避免使用生成式 AI"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "这份宣言与育碧成立 AI 工作室、GDC 调查中 55% 从业者认为生成式 AI 有害，构成同一张图景：AI 在游戏业的分歧不在技术可行性，而在「谁受益、谁承担代价」。对开发者，咒骂或拥抱都太早——把 AI 用在提效而非替代创作、并留意版权与工作流合规，是当下更务实的立场。"
          ]
        }
      ]
    },
    {
      "id": "in-giant-ai-reorg",
      "category": "industry",
      "subcategory": "行业·AI战略",
      "title": "巨人网络调整 AI 实验室架构：团队并入技术中台，聚焦研运结合",
      "summary": "11 月 16 日巨人网络确认调整 AI 实验室组织架构，将相关团队与技术能力整合至公司技术中台，称随着外部模型与工具生态快速迭代，现阶段 AI 布局重点是把前沿技术与自身研发经验结合、集中资源推动研发升级与玩法创新，并将继续加大 AI 战略投入。",
      "source": "南方+",
      "date": "2026-11-16",
      "url": "https://www.nfnews.com/content/n614vkDd3P.html",
      "image": "",
      "badge": "巨人网络",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 73,
      "tags": [
        "巨人网络",
        "AI实验室",
        "技术中台",
        "研运"
      ],
      "content": [
        {
          "title": "调整要点",
          "type": "list",
          "items": [
            "11 月 16 日巨人网络确认 AI 实验室组织架构调整",
            "相关团队与技术能力整合至公司技术中台",
            "方向从自研模型、音视频生成工具探索转向与业务场景深度结合",
            "公司称将继续加大 AI 战略投入，深化研运赋能与应用创新"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把独立 AI 实验室撤进技术中台，是个务实信号：早期「先行探索」的使命完成后，AI 价值要靠嵌入真实研发管线来兑现，而不是靠实验室 Demo。这和不少团队踩过的坑一致——AI 项目若长期游离在主营业务外，最后不是被砍就是被合并；从第一天就贴着痛点做，才活得下来。"
          ]
        }
      ]
    },
    {
      "id": "ai-ernie55-game",
      "category": "ai",
      "subcategory": "AI·大模型",
      "title": "百度 ERNIE 5.5 Flash Preview：11 小时自动写出一款 UE 武侠游戏",
      "summary": "百度 11 月 11 日发布 ERNIE 5.5 Flash Preview，MoE 架构 2800 亿总参数、每 token 激活 140 亿、100 万上下文，专门针对游戏开发训练，支持 UE、Unity、Godot。演示中它在一次 11 小时的 agent 运行里用 C++ 写出一款 UE5.8 第三人称武侠游戏；因看不到画面，把「角色悬空」等测试问题转成代码测试。",
      "source": "百度 ERNIE（Agentdex 汇编）",
      "date": "2026-11-11",
      "url": "https://ernie.baidu.com/release/ernie-5-5-flash-preview/",
      "image": "",
      "badge": "ERNIE 5.5",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 92,
      "tags": [
        "ERNIE 5.5",
        "游戏开发",
        "MoE",
        "虚幻引擎"
      ],
      "content": [
        {
          "title": "模型要点",
          "type": "list",
          "items": [
            "11 月 11 日发布，MoE 2800 亿总参数、每 token 激活 140 亿、100 万上下文",
            "针对游戏机制、玩法逻辑、运行时状态与资产管线训练，支持 UE/Unity/Godot",
            "演示用一次 11 小时 agent 运行写出 UE5.8 C++ 第三人称武侠游戏",
            "百度称 Apache 2.0 权重将于 11 月 25 日前放出，基准为其自测",
            "API 已在千帆与 OpenRouter 上线，定价约 0.28/1.13 美元每百万 token"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "亮点不是「AI 会做游戏」，而是把看不见的测试问题转成代码测试——这是 agent 在无法读屏时自我验证的关键一招。但要冷静：所有基准都是百度自测，图表显示其落后于头部闭源模型，开放权重也只是承诺。把它当提效工具试用可以，当成「取代开发者」的结论还太早。"
          ]
        }
      ]
    },
    {
      "id": "ai-antigravity-browser",
      "category": "ai",
      "subcategory": "AI·编码智能体",
      "title": "Google Antigravity 智能体会自己开浏览器测应用了",
      "summary": "Google 11 月 11 日宣布 Antigravity 的浏览器能力开始推送。从 2.30.0 版起，个人 Google 账户可用自然语言描述要检查的内容，主 agent 启动浏览器子 agent，打开 localhost、点击流程、读控制台错误与失败请求、截图并验证修复。多个子 agent 可并行、各占独立标签页，默认用 Gemini Flash 省额度。",
      "source": "Google Antigravity 官方文档",
      "date": "2026-11-11",
      "url": "https://antigravity.google/docs/browser/",
      "image": "https://antigravity.google/og/docs/browser.png",
      "badge": "Antigravity",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Antigravity",
        "浏览器智能体",
        "测试",
        "Gemini"
      ],
      "content": [
        {
          "title": "能力要点",
          "type": "list",
          "items": [
            "11 月 11 日起推送，个人 Google 账户从 2.30.0 版可用",
            "子 agent 可打开 localhost、点击流程、读控制台错误、截图并验证修复",
            "多个浏览器子 agent 并行，各占独立标签与上下文",
            "默认 Gemini Flash 模型；登录与下载需用户确认，企业账户暂不支持"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "「能编译但按钮坏了」是 agent 写前端最典型的翻车点，让智能体自己开浏览器验收，等于把闭环补上了。做 Web 游戏的人尤其该关注——UI 交互、资源加载失败这类问题，靠读日志很难发现，让 agent 看一眼页面就清楚了。先把本地预览跑通，再谈自动化部署。"
          ]
        }
      ]
    },
    {
      "id": "ai-runway-praxis",
      "category": "ai",
      "subcategory": "AI·世界模型",
      "title": "Runway 开源 Praxis-1：27B 视频-动作模型，普通网页视频就能训机器人策略",
      "summary": "Runway 11 月 11 日以 Apache 2.0 开放 Praxis-1 权重，可作商业用途。这是一个 270 亿参数的 MoE 扩散 transformer，联合预测视频与机器人动作，基于与世界模型相同的视频预训练。Runway 称其在 RoboLab-120 榜单以 46.2% 成功率居世界动作模型首位，并放出推理与微调代码。",
      "source": "Runway 官方",
      "date": "2026-11-11",
      "url": "https://runway.com/news/company-news/praxis-1-is-now-available",
      "image": "https://d3phaj0sisr2ct.cloudfront.net/site/images/sanity/2026/11/frame-8-bddb7fbc-4647-44e5-bf65-1fbb7e559b24-af3f1b60-26e7-4a91-afda-ee27b0a4674b.webp",
      "badge": "Praxis-1",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Runway",
        "世界模型",
        "机器人",
        "开源权重"
      ],
      "content": [
        {
          "title": "模型要点",
          "type": "list",
          "items": [
            "11 月 11 日以 Apache 2.0 开放权重，允许商业使用",
            "270 亿参数 MoE 扩散 transformer，联合预测视频与机器人动作",
            "Runway 称 RoboLab-120 榜单 46.2% 成功率，领先 FLUX 3 Action 的 42.9%",
            "含推理与全量/LoRA 微调代码，支持 LeRobot、vLLM-Omni 与 Jetson 等设备"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "对游戏开发者的价值在研究方法：Runway 称普通网页视频与机器人遥操作数据对预训练同样有效，这把「训练有能力的动作策略」门槛拉低了一大截。NPC 行为、世界模拟这些方向，未必需要昂贵动捕——现成视频可能就够了。当然 46.2% 是厂商自测，离生产可用仍有距离。"
          ]
        }
      ]
    },
    {
      "id": "ai-n8n-nod",
      "category": "ai",
      "subcategory": "AI·个人智能体",
      "title": "n8n Labs 开源个人智能体 Nod：自带一台电脑，动手前先问你",
      "summary": "n8n 于 11 月 10 日发布研究预览 Nod，一款独立于 n8n、无需账户的 Mac/Windows 应用，给 agent 配一台本地虚拟机与浏览器。用户在一个对话里下达任务，它跨 Gmail、日历、云盘、Slack 及任意网站工作，如退订并要退款、每月下载发票。Apache 2.0 开源，可自带模型；涉及发信、付款、删除前有独立确认。",
      "source": "n8n Labs 官方博客",
      "date": "2026-11-10",
      "url": "https://blog.n8n.io/meet-nod/",
      "image": "https://storage.ghost.io/c/0d/78/0d78b34c-0c5f-4975-900e-61d00ccb1c2d/content/images/size/w1200/2026/11/nod-header-2x-1.png",
      "badge": "Nod",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "n8n",
        "个人智能体",
        "开源",
        "本地执行"
      ],
      "content": [
        {
          "title": "产品要点",
          "type": "list",
          "items": [
            "11 月 10 日作为研究预览发布，独立于 n8n、无需账户",
            "给 agent 配本地虚拟机与浏览器，可跨应用与任意网站工作",
            "Apache 2.0 开源，可自带 API key、ChatGPT 订阅或本地模型",
            "发信、付款、发布、删除前有独立确认；登录与卡片信息本地加密"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "Nod 最值得抄的不是功能，而是安全设计：agent 有电脑，但花钱、发信、删除要单独确认，凭证走模型读不到的表单。这套「最小权限 + 关键动作确认」思路，正是把个人智能体从玩具带进日常的门槛。做游戏内 AI 助手时，同样该给「发送」「购买」这类动作加一道闸。"
          ]
        }
      ]
    },
    {
      "id": "ai-gemini-managed-sandbox",
      "category": "ai",
      "subcategory": "AI·智能体基建",
      "title": "Gemini API 托管智能体支持自带沙箱：代码跑在你自己的机器上",
      "summary": "Google AI Studio 11 月 11 日宣布，用 Gemini API 托管智能体开发的开发者可自带沙箱环境。此前一次 API 调用会给 agent 一个 Google 提供的 Linux 沙箱；现在 Google 的 agent 框架仍在其云端规划推理，代码执行与文件操作放在你控制的基础设施上，首批支持 Vercel、Modal、Daytona、Fly.io、Google Cloud、Cloudflare 与 E2B 七家。",
      "source": "AI Tracker（引 Google AI Studio）",
      "date": "2026-11-11",
      "url": "https://ai-tracker.rootstudio.io/news/2026-11-11-gemini-managed-agents-self-hosted-environments",
      "image": "https://ai-tracker.rootstudio.io/og/news/2026-11-11-gemini-managed-agents-self-hosted-environments.png",
      "badge": "Gemini API",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Gemini",
        "托管智能体",
        "沙箱",
        "数据驻留"
      ],
      "content": [
        {
          "title": "能力要点",
          "type": "list",
          "items": [
            "11 月 11 日宣布，托管智能体可自带沙箱环境",
            "规划推理仍在 Google 云端，代码执行与文件操作放到自有基础设施",
            "首批七家合作：Vercel、Modal、Daytona、Fly.io、Google Cloud、Cloudflare、E2B",
            "通过开源 CLI 走出站 HTTPS 连接，无需开放入站端口；功能处预览阶段"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把执行环境搬回自己的机器，解决的是 agent 落地时最现实的三件事：自定义镜像、GPU 访问与数据驻留。对处理未公开素材、或有合规要求的团队，这比模型能力本身更关键。预览阶段接口可能变，先小范围试，别把它当稳定依赖写进核心流程。"
          ]
        }
      ]
    },
    {
      "id": "ai-gamehaus-pipeline",
      "category": "ai",
      "subcategory": "AI·游戏管线",
      "title": "Gamehaus 称 AI 管线把可玩原型工作量砍掉约九成",
      "summary": "纳斯达克上市的休闲手游发行商 Gamehaus 11 月 16 日称，其与 Witmani 团队共建的 AI 生产管线把做出可玩原型的工作量减少约 90%：传统流程需 3 人 1 至 1.5 周（15–22.5 人日），新管线平均 1 人 1.5 至 2 天。首个产品 Ease Games 合集已在 Google Play 上线 12 款休闲游戏，约 7 周从立项到完成。相关比例为该公司内部估算。",
      "source": "Gamehaus 官方发布（Geekiki 报道）",
      "date": "2026-11-16",
      "url": "https://geekiki.com/blog/gamehaus-anuncia-pipeline-de-ia-que-reduz-esforco-de-prototipagem-em-cerca-de-90-e-lanca-ease-games-no-google-play?lang=en&set_lang=1",
      "image": "https://geekiki.com/assets/img/category-covers/games.webp",
      "badge": "Gamehaus",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "Gamehaus",
        "AI管线",
        "原型",
        "休闲游戏"
      ],
      "content": [
        {
          "title": "声明要点",
          "type": "list",
          "items": [
            "11 月 16 日公告称 AI 管线把可玩原型工作量降约 90%（内部估算）",
            "传统 3 人 1–1.5 周，新管线平均 1 人 1.5–2 天",
            "管线覆盖实现、美术、关卡生成、SDK 集成与上架",
            "Ease Games 合集约 7 周完成 12 款游戏，已在 Google Play 上线"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "90% 这个数字来自公司内部、按人日估算，别当成行业基准。但方向值得留意：当原型成本大幅下降，稀缺的就不再是「能不能做出来」，而是「做什么、能不能被玩到」。对独立开发者，快速试错的机会变多了；真正的竞争力会转移到选题判断与差异化设计上。"
          ]
        }
      ]
    },
    {
      "id": "tu-niagara-waterfall",
      "category": "tutorials",
      "subcategory": "教程·UE5",
      "title": "UE5 从零做风格化瀑布：Maya 建模 + 动态材质 + 多层 Niagara",
      "summary": "Epic 开发者社区 11 月 12 日更新的 Niagara 教程，从零制作风格化瀑布特效：先在 Maya 建模自定义网格体与 UV，再搭建带边缘渐隐和平移效果的动态主材质，最后组合多层 Niagara 发射器，实现水流、溶解遮罩与高光反射。",
      "source": "Epic Developer Community",
      "date": "2026-11-12",
      "url": "https://dev.epicgames.com/community/learning/tutorials/orawG/unreal-engine-ue5-niagara",
      "image": "https://img.edc-cdn.net/imgproxy/a5MtyRKc_VXW9-tLjrGDiSd2M09Fl8cYevNZ3SZbcE4/filename:recreate_thumbnail_as_square_image_6017f1c7.jpg/resizing_type:fill/width:600",
      "badge": "Niagara 瀑布",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "UE5",
        "Niagara",
        "VFX",
        "Maya"
      ],
      "content": [
        {
          "title": "教程路线",
          "type": "list",
          "items": [
            "Maya 中建模自定义网格体并准备 UV",
            "搭建带边缘渐隐与平移效果的动态主材质",
            "组合多层 Niagara 发射器，实现水流、溶解遮罩与高光反射",
            "面向从零开始的学习者，逐步覆盖材质与粒子衔接"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "VFX 的难点往往不在粒子参数，而在「网格体、UV 与材质」这三件前置工作做得够不够干净。这份教程把 Maya 建模放在第一步，是在提醒：想要可信的水流，先让载体和贴图站得住。跟着做完，比到处收藏粒子参数更有沉淀。"
          ]
        }
      ]
    },
    {
      "id": "tu-niagara-mask",
      "category": "tutorials",
      "subcategory": "教程·UE5",
      "title": "UE5 Niagara 区域遮罩模块：让粒子跟着角色跑",
      "summary": "Epic 开发者社区 11 月 9 日更新的 Niagara 教程，讲解区域遮罩模块：什么是区域遮罩，如何用球体、盒体、平面、薄板等不同形状驱动粒子颜色、大小、速度与卷曲噪声，最后把效果集成到蓝图中，让粒子区域实时跟随玩家角色。",
      "source": "Epic Developer Community",
      "date": "2026-11-09",
      "url": "https://dev.epicgames.com/community/learning/tutorials/WBmLR/unreal-engine-ue5-niagara",
      "image": "https://img.edc-cdn.net/imgproxy/9pouJS5H6dgT8Tbtfzg3ZPjjLY4kOnO_8J1dy4P-dVQ/filename:recreate_thumbnail_in_square_image_0fb309a3.jpg/resizing_type:fill/width:600",
      "badge": "Niagara 遮罩",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 79,
      "tags": [
        "UE5",
        "Niagara",
        "区域遮罩",
        "蓝图"
      ],
      "content": [
        {
          "title": "教程路线",
          "type": "list",
          "items": [
            "解释区域遮罩的概念与典型用途",
            "用球体、盒体、平面、薄板等形状驱动粒子颜色、大小、速度与卷曲噪声",
            "把粒子效果集成到蓝图，让遮罩区域实时跟随玩家角色",
            "适合已有 Niagara 基础、想做角色跟随特效的开发者"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "「粒子跟着角色走」看起来简单，真做起来要处理坐标传递、遮罩形态与性能开销。用区域遮罩把影响范围参数化，比每帧手动改粒子位置干净得多。这类可复用模块，正是把特效从「一次性调参」变成「可维护系统」的关键。"
          ]
        }
      ]
    },
    {
      "id": "tu-godot-first-game",
      "category": "tutorials",
      "subcategory": "教程·Godot",
      "title": "周末做出第一个 Godot 4 平台游戏：零基础到导出分享",
      "summary": "一篇面向零基础读者的 Godot 4 完整入门：下载引擎、新建 2D 项目，用场景拼出玩家、关卡、金币与敌人，做出带金币、敌人和计分的平台跳跃游戏，逐行解释 GDScript，最后导出给朋友玩。文中提醒当前稳定版为 4.7.2，先用 Compatibility 渲染器、把默认纹理过滤设为 Nearest 保持像素清晰。",
      "source": "MU Top 100",
      "date": "2026-11-15",
      "url": "https://www.mutop100.com/zh/guides/how-to-make-a-game-in-godot",
      "image": "https://www.mutop100.com/images/guides/how-to-make-a-game-in-godot.webp",
      "badge": "Godot 入门",
      "badgeType": "engine",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "Godot 4",
        "GDScript",
        "零基础",
        "平台游戏"
      ],
      "content": [
        {
          "title": "学习路线",
          "type": "list",
          "items": [
            "下载 Godot 4 稳定版、新建 2D 项目，认识场景与节点",
            "用 Compatibility 渲染器兼容旧设备与网页导出",
            "把默认纹理过滤设为 Nearest，保持像素画清晰",
            "做玩家、关卡、金币与敌人，逐行理解 GDScript，最后导出分享"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "入门教程最容易劝退的地方是「讲了很多但没做出东西」。这篇把目标锁死在一个能玩的平台小游戏上，每一步都对应看得见的产物，零基础读者能撑到通关。学游戏开发，先做完一个再谈体系——成就感本身就是最好的燃料。"
          ]
        }
      ]
    },
    {
      "id": "tu-godot70h",
      "category": "tutorials",
      "subcategory": "教程·Godot",
      "title": "70 小时免费开源的 Godot 教程合集：从 CS50 改编到完整 3D",
      "summary": "Godot 论坛一篇置顶帖整理了 The GameDev Tavern 的 70+ 小时免费开源教程：Godot 101（18 小时，改编自哈佛 CS50）、Fists of Fury（12 小时，格斗游戏）、Super Soccer（18 小时）、Goblins' Den（21 小时，3D）。全部手工代码/音乐/美术，以 CC-0 + MIT 发布，每集配代码挑战、GitHub 检查点与 Discord 支持。",
      "source": "Godot Forum",
      "date": "2026-11-10",
      "url": "https://forum.godotengine.org/t/70h-of-free-high-quality-open-source-tutorials-on-youtube/147054",
      "image": "https://forum.godotengine.org/uploads/default/original/2X/c/cbfa764bec13cc2f9506f1b9c9685e40766af7ba.png",
      "badge": "Godot 教程合集",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "Godot",
        "免费教程",
        "CS50",
        "开源"
      ],
      "content": [
        {
          "title": "合集要点",
          "type": "list",
          "items": [
            "70+ 小时免费、完全开源，代码/音乐/美术手工制作并以 CC-0 + MIT 发布",
            "Godot 101（18h）改编自哈佛 CS50，面向从未写过代码的人",
            "Fists of Fury（12h）、Super Soccer（18h）、Goblins' Den（21h，3D 全流程）",
            "每集讲「为什么」、附代码挑战与 GitHub 检查点，另有 Discord 社群"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "免费教程不缺，缺的是「有取舍、讲权衡」的体系化内容。这套合集坚持每个问题讨论多种解法的 trade-off、每行代码手讲，还把美术音乐都做成可复用素材——对自学者，这比拼凑十个碎片教程更能建立完整工程观。零基础从 Godot 101 开始就够。"
          ]
        }
      ]
    },
    {
      "id": "tu-web-games-guide",
      "category": "tutorials",
      "subcategory": "教程·Web",
      "title": "小团队 Web 游戏实战：Three.js 还是 Babylon.js，WebGPU 能不能上",
      "summary": "一篇 2026 年面向小团队的 Web 游戏实战指南：Three.js 是渲染库、Babylon.js 是自带物理/GUI/音频的完整引擎，PlayCanvas 带可视化编辑器；WebGPU 已在主流新设备落地但 MDN 仍标为受限可用，建议当升级而非硬性要求，底层留 WebGL 2 回退。文中还给出首载 20MB、16.6ms 帧预算、250 draw call、60 万三角面的中档参考。",
      "source": "AppScale Blog",
      "date": "2026-11-18",
      "url": "https://appscale.blog/zh/blog/web-games-threejs-babylonjs-webgpu-indie-guide-2026",
      "image": "https://appscale-media-prod-034250960622.s3.ap-south-1.amazonaws.com/uploads/153e02c4-c73f-428b-b998-12e80c102b32.png",
      "badge": "Web 游戏",
      "badgeType": "engine",
      "readTime": "8 分钟",
      "hotScore": 84,
      "tags": [
        "Three.js",
        "Babylon.js",
        "WebGPU",
        "性能优化"
      ],
      "content": [
        {
          "title": "选型要点",
          "type": "list",
          "items": [
            "Three.js 是渲染库、Babylon.js 是完整引擎、PlayCanvas 带托管编辑器",
            "WebGPU 在新设备覆盖良好但非 Baseline，建议底层留 WebGL 2 回退",
            "参考帧预算：16.6ms、250 draw call、60 万三角面（中档）",
            "首载控制 20MB；模拟器帧率不能代表真机性能"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "「模拟器数字不是性能数字」这句话值得打印贴墙——Web 游戏在作者笔记本上流畅、到中端手机就卡顿是常态。把帧预算和首载体积当硬约束写进设计，比事后优化省太多。选型上，2D 别上 3D 引擎、小项目优先 Three.js，这些取舍比追新特性实用。"
          ]
        }
      ]
    },
    {
      "id": "tu-godot-mobile-2d",
      "category": "tutorials",
      "subcategory": "教程·Godot",
      "title": "Unity/UE 开发者迁移 Godot 4：移动端 2D 渲染管线实战",
      "summary": "一篇面向有 Unity/UE 经验者的 Godot 4 迁移实战，聚焦把已有场景管理、材质/着色器、性能优化经验映射到 Godot 工作流，并针对移动端做 2D 渲染优化：用节点与场景替代 GameObject/Prefab，构建含角色控制、TileMap、粒子、UI 与简单光照的 2D 平台 Demo，强调轻量与导出体积优势。",
      "source": "编程知识（hqwc）",
      "date": "2026-11-14",
      "url": "https://www.hqwc.cn/a/235181.html",
      "image": "",
      "badge": "Godot 迁移",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 77,
      "tags": [
        "Godot 4",
        "Unity",
        "移动端",
        "2D 渲染"
      ],
      "content": [
        {
          "title": "迁移路线",
          "type": "list",
          "items": [
            "用节点（Node）与场景（Scene）映射 Unity 的 GameObject/Prefab、UE 的 Actor/Blueprint",
            "针对移动端选择 Compatibility/前向+渲染器并做 2D 优化",
            "构建含角色控制、TileMap、粒子、UI 与光照的 2D 平台 Demo",
            "利用 Godot 轻量导出，把 apk/ipa 体积控制在几十 MB"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "从成熟引擎迁移，最费劲的不是 API 对照，而是思维切换——从「组件拼装」到「节点组合」。这篇把重点放在经验映射而非从零入门，对有底的开发者更省时间。移动端 2D 恰是 Godot 强项，用熟悉的游戏逻辑做载体来学新引擎，是成本最低的路径。"
          ]
        }
      ]
    },
    {
      "id": "os-claude-game-studios",
      "category": "opensource",
      "subcategory": "开源·AI",
      "title": "Claude-Code-Game-Studios：把 AI 编码会话变成一支 49 代理的游戏工作室",
      "summary": "GitHub 项目 Claude-Code-Game-Studios（约 4.01 万星）提供一个模板，把 Claude Code 会话组织成结构化游戏工作室：49 个专职 AI 代理由导演层统筹，配 73 个斜杠命令、12 个校验钩子与 41 份文档模板。11 月 19 日单日涨星约 171，是 unreal-engine 话题下增速最快的项目之一。",
      "source": "GitHub · Donchitos",
      "date": "2026-11-19",
      "url": "https://github.com/Donchitos/Claude-Code-Game-Studios",
      "image": "https://opengraph.githubassets.com/1/Donchitos/Claude-Code-Game-Studios",
      "badge": "AI 工作室",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Claude Code",
        "多智能体",
        "游戏开发",
        "工作流"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "把 Claude Code 会话组织成 49 个专职代理的结构化游戏工作室",
            "配 73 个斜杠命令、12 个校验钩子与 41 份文档模板",
            "由导演层统筹分工，覆盖设计、实现与校验环节",
            "约 4.01 万星，11 月 19 日单日增约 171 星"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "这类项目的真正价值不在「代理数量」，而在它把游戏开发的分工结构显式化了——设计、实现、检查各有角色，这正是独立开发者最容易遗漏的部分。可以借鉴它的职责拆分思路，但别迷信一堆代理：先想清楚你的流程痛点在哪，再决定要不要上多代理。"
          ]
        }
      ]
    },
    {
      "id": "os-blender-skills",
      "category": "opensource",
      "subcategory": "开源·AI",
      "title": "blender-skills：给 AI 编码代理装上 28 项 Blender 全流程技能",
      "summary": "GitHub 项目 EL4CTEO/blender-skills（约 2200 星）是一套 28 项 Blender 技能，面向 Claude Code、Codex、Gemini CLI、Copilot、Cursor 等 AI 编码代理，覆盖从建模到 QA 的完整 3D 管线。11 月 19 日单日增约 193 星，是当时 unreal-engine 话题下涨星最快的项目。",
      "source": "GitHub · EL4CTEO",
      "date": "2026-11-19",
      "url": "https://github.com/EL4CTEO/blender-skills",
      "image": "https://opengraph.githubassets.com/1/EL4CTEO/blender-skills",
      "badge": "Blender 技能",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Blender",
        "Agent Skills",
        "3D 管线",
        "自动化"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "一套 28 项 Blender 技能，接入主流 AI 编码代理",
            "覆盖从建模到 QA 的完整 3D 管线",
            "11 月 19 日单日增约 193 星，为同期相关话题增速最快",
            "另有 arjun988/blender-skills 的 94 项技能版本走类似路线"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把 Blender 操作封装成代理可调用的「技能」，解决的正是 AI 做 3D 时「只会说不会做」的痛点。对独立开发者，这意味着挂机生成基础资产、批量处理重复操作有了抓手。不过技能多不等于质量高，先挑你最痛的那几步接进去验证，比全盘接管靠谱。"
          ]
        }
      ]
    },
    {
      "id": "os-nobodywho",
      "category": "opensource",
      "subcategory": "开源·推理",
      "title": "nobodywho：在手机甚至手表上离线跑大模型的开源推理引擎",
      "summary": "GitHub 项目 nobodywho-ooo/nobodywho（约 1700 星）是一个开源推理引擎，可在手机、桌面乃至 Apple Watch 上本地离线运行 LLM，不需 API key、不调云端。底层基于 llama.cpp，通过 Vulkan 或 Metal 做 GPU 加速，主打隐私与零依赖。",
      "source": "GitHub · nobodywho-ooo",
      "date": "2026-11-19",
      "url": "https://github.com/nobodywho-ooo/nobodywho",
      "image": "https://opengraph.githubassets.com/1/nobodywho-ooo/nobodywho",
      "badge": "本地推理",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "本地推理",
        "llama.cpp",
        "离线",
        "隐私"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "开源推理引擎，可在手机、桌面、Apple Watch 上离线运行 LLM",
            "不需 API key、不调用云端服务",
            "底层基于 llama.cpp，通过 Vulkan 或 Metal 做 GPU 加速",
            "Godot 4 话题下活跃项目，约 1700 星"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把大模型塞进手表、完全离线，看似极客玩具，实则指向一个重要方向：游戏里的 NPC 对话若能本地跑，就不受网络延迟、API 成本和隐私问题拖累。端侧推理能力每提升一档，离线 AI NPC 的可行性就上一台阶。现在就可以用小模型做原型，等硬件追上来。"
          ]
        }
      ]
    },
    {
      "id": "os-grit",
      "category": "opensource",
      "subcategory": "开源·Godot",
      "title": "grit：导出时把 GDScript 编译成 C++，让 Godot 游戏跑原生机器码",
      "summary": "GitHub 项目 DasDarki/grit（约 328 星）是 Godot 引擎模块，可在导出时把项目 GDScript 编译成 C++，让导出游戏运行原生机器码而非字节码；开发时仍照常写和调试 GDScript。项目定位为实验性转译器，主打「不改工作流的前提下提升运行时性能」。",
      "source": "GitHub · DasDarki",
      "date": "2026-11-19",
      "url": "https://github.com/DasDarki/grit",
      "image": "https://opengraph.githubassets.com/1/DasDarki/grit",
      "badge": "GDScript→C++",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 76,
      "tags": [
        "Godot",
        "GDScript",
        "C++",
        "转译器"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "Godot 引擎模块，导出时把 GDScript 编译成 C++",
            "导出游戏运行原生机器码，而非 GDScript 字节码",
            "编辑与调试阶段仍照常用 GDScript，工作流不变",
            "定位实验性，约 328 星"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "「写 GDScript、跑原生码」是很多 Godot 开发者的理想，grit 走的正是这条路。但它是实验性项目，别拿去做要上架的性能承诺；更值得关注的是思路——把性能瓶颈交给编译期，而不是逼开发者全程写 C++。等你真遇到热点函数跑不动时，再回来看它成熟没有。"
          ]
        }
      ]
    },
    {
      "id": "os-genex-desktop",
      "category": "opensource",
      "subcategory": "开源·AI",
      "title": "genex-desktop：面向 AI 原生游戏开发的开源桌面应用",
      "summary": "GitHub 项目 genex-games/genex-desktop（约 900 星）是一个开源桌面应用，主打 AI 原生游戏开发，可在 Unreal、Unity、Godot 等引擎里构建，集成本地大模型与 MCP。项目 2026 年 10 月启动、MIT 协议，近 7 天增约 49 星，定位是隐私优先、本地运行的游戏开发代理工作台。",
      "source": "GitHub · genex-games",
      "date": "2026-11-20",
      "url": "https://github.com/genex-games/genex-desktop",
      "image": "https://opengraph.githubassets.com/1/genex-games/genex-desktop",
      "badge": "AI 开发台",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 75,
      "tags": [
        "AI 原生",
        "MCP",
        "本地大模型",
        "多引擎"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "开源桌面应用，面向 AI 原生游戏开发",
            "可在 Unreal、Unity、Godot 等引擎里构建，集成本地 LLM 与 MCP",
            "2026 年 10 月启动、MIT 协议，约 900 星、近 7 天增约 49 星",
            "主打隐私与本地运行"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把 AI 代理做成桌面工作台、直连多个引擎，代表了一批新工具的思路：AI 不只在代码编辑器里，而要嵌进引擎工作流。目前星数和成熟度都还早，适合观察而非重度依赖。多引擎适配若能做成，独立开发者的工具链会轻不少——先收藏，等它长起来。"
          ]
        }
      ]
    },
    {
      "id": "os-spacetime",
      "category": "opensource",
      "subcategory": "开源·后端",
      "title": "SpacetimeDB：把数据库当服务器用，客户端直连免写后端",
      "summary": "GitHub 项目 clockworklabs/SpacetimeDB（约 2.56 万星）是一个「既是关系型数据库、又是服务器」的系统：把应用逻辑作为模块上传到数据库，客户端直连、数据实时同步，中间不再需要 Web 或游戏服务器。它主打省掉多人游戏的后端基础设施搭建。",
      "source": "GitHub · clockworklabs",
      "date": "2026-11-19",
      "url": "https://github.com/clockworklabs/SpacetimeDB",
      "image": "https://opengraph.githubassets.com/1/clockworklabs/SpacetimeDB",
      "badge": "SpacetimeDB",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "SpacetimeDB",
        "多人游戏",
        "后端",
        "实时同步"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "关系型数据库同时也是服务器，应用逻辑作为模块上传其中",
            "客户端直连数据库，数据实时同步到已连接客户端",
            "省去单独的 Web/游戏服务器层，主打多人游戏后端",
            "约 2.56 万星，为 unreal-engine 话题下高星项目之一"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "多人游戏最劝退独立开发者的往往不是玩法，而是状态同步与服务器运维。SpacetimeDB 把「写后端」变成「写数据库模块」，思路很吸引人。但把逻辑塞进数据库也意味着强绑定其模型，选型前先评估迁移成本——先用小 Demo 验证同步延迟与开发体验，再决定要不要押注。"
          ]
        }
      ]
    },
    {
      "id": "ga-were-all-in",
      "category": "games",
      "subcategory": "游戏·派对",
      "title": "《WE'RE ALL IN!》上线 Steam：把赌注桌搬进派对游戏",
      "summary": "Black Lantern Collective 与 Blast Furnace Games 于 11 月 21 日在 Steam 推出《WE'RE ALL IN!》，一款支持 8 人在线的派对游戏，售价 7.99 美元。玩法类似《马里奥派对》与《糖豆人》的随机小游戏合集，但用「下注桌」替代传统棋盘：玩家用虚拟筹码押注参赛者，靠小游戏赢星星与现金。",
      "source": "WiseVoter（援引 Capsule Computers）",
      "date": "2026-11-21",
      "url": "https://wisevoter.com/world/2026/11/21/were-all-in-party-game-launches-steam",
      "image": "https://images.highwise.com/stories/409378-1795290317476.jpg",
      "badge": "派对游戏",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 72,
      "tags": [
        "派对游戏",
        "多人联机",
        "Steam",
        "小游戏"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 21 日上线 Steam，售价 7.99 美元，支持最多 8 人在线",
            "随机小游戏合集，覆盖 1v1、混战与团队模式",
            "用虚拟筹码下注替代棋盘，集齐筹码换星星定胜负",
            "含可解锁外观与自定义大厅，未公布销量数据"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "派对游戏的竞争越来越靠「一句话能说清的差异化机制」——这款把下注做成核心循环，让旁观也有参与感。对独立团队，这类玩法创新比堆美术更容易出圈，但能否留住人，还得看小游戏本身的手感与数量是否经得起重复玩。"
          ]
        }
      ]
    },
    {
      "id": "ga-occult-pawnshop",
      "category": "games",
      "subcategory": "游戏·模拟",
      "title": "《Occult Pawnshop Simulator》登陆 Steam：鉴定赝品与诅咒的当铺经营",
      "summary": "11 月 21 日，PE Matvienko Andrey Kirill 在 Steam 推出单人模拟游戏《Occult Pawnshop Simulator》，售价 7 美元。玩家经营一家古董当铺，用灯、盐与共振鉴定真伪与超自然痕迹，比对成对观察结果查诅咒，在现金、声誉与危险三者间权衡，还要处理会过期的「封印」。",
      "source": "Steam 商店页",
      "date": "2026-11-21",
      "url": "https://store.steampowered.com/app/5490500/",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5490500/5aa0eba1a2398f010b6abbd34ad3a53ac95f7f7e/header.jpg",
      "badge": "模拟经营",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 70,
      "tags": [
        "模拟经营",
        "鉴定",
        "独立游戏",
        "Steam"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 21 日上线 Steam，售价 7 美元，单人游玩",
            "用灯、盐、共振等工具鉴定真伪与超自然痕迹",
            "诅咒参考靠成对观察比对，不能凭单一读数据下结论",
            "现金、声誉、危险三重平衡，封印会过期需定期复查"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把「鉴定」做成核心玩法，本质是设计一套可推理的规则系统——玩家要学、要验证、要为误判付代价。这种有内在逻辑的经营玩法，比纯点击放置更有黏性。成本不高、机制清晰，是独立开发者值得研究的轻量设计范本。"
          ]
        }
      ]
    },
    {
      "id": "ga-kintsugi-cottage",
      "category": "games",
      "subcategory": "游戏·解谜",
      "title": "《Kintsugi Cottage》：用 3D 拼图修复文物，11 月 20 日多平台上线",
      "summary": "Fdots Games 开发的《Kintsugi Cottage》于 11 月 20 日在 PC、Mac 与 Linux 上线，是一款第一人称 3D 拼图修复游戏。玩家在小屋博物馆里面对数百片碎片，靠釉色、弧度与纹样线索找出归属、亲手重建文物，风格温和、主打沉浸的修复体验。",
      "source": "The Game Extras（引 IGDB/Steam）",
      "date": "2026-11-20",
      "url": "https://thegameextras.com/game/kintsugi-cottage/",
      "image": "https://images.igdb.com/igdb/image/upload/t_720p/codbvf.jpg",
      "badge": "拼图修复",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 70,
      "tags": [
        "3D 拼图",
        "独立游戏",
        "治愈",
        "第一人称"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 20 日在 PC、Mac、Linux 上线，开发者为 Fdots Games",
            "第一人称单人 3D 拼图修复玩法",
            "数百片碎片，靠釉色、弧度、纹样线索判断归属",
            "主打温和沉浸的修复体验"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "「修复」比「破坏」更少见，却天然适合做解压向玩法——每一步都有明确反馈与最终完整感。把文物拼合做成 3D 交互，比平面拼图多了空间推理的层次。这类体验驱动的小品提醒我们：机制不用复杂，只要情绪目标清晰，就能立住一款游戏。"
          ]
        }
      ]
    },
    {
      "id": "ga-loamlets",
      "category": "games",
      "subcategory": "游戏·解谜",
      "title": "《Loamlets》上线：1500 关、无计时的「疏通虫虫」逻辑解谜",
      "summary": "独立开发者 Vladislavs Tarasovs 于 11 月 20 日在 Steam 推出《Loamlets》，首发 4.49 美元（原价 4.99）。玩家在花园里为每条虫虫找通路，点一下让它滑走，为下一条腾空间；含 1500 个无计时关卡、每日一题与冲高分的 Rush 模式，另有移动版本。",
      "source": "Steam 商店页",
      "date": "2026-11-20",
      "url": "https://store.steampowered.com/app/5002090/",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5002090/b5ec1e579d8857a7bc7f6979389a8d672dbef256/header.jpg",
      "badge": "逻辑解谜",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 69,
      "tags": [
        "逻辑解谜",
        "独立游戏",
        "每日一题",
        "Steam"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 20 日上线 Steam，首发 4.49 美元，含 1500 个关卡",
            "点击虫虫使其沿通路滑走，为下一条腾出空间",
            "关卡无计时，另有每日一题与冲分的 Rush 模式",
            "另有移动版《Loamlets: Worm Escape Puzzles》"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "规则一句话讲清、关卡量大、节奏自选——这是轻量解谜能长期留人的典型配方。对开发者，1,500 关意味着背后有成熟的关卡生成/校验流程，否则手工量 impossible。想做「小而持久」的产品，先解决内容生产管线，再谈创意玩法。"
          ]
        }
      ]
    },
    {
      "id": "ga-abyss-line",
      "category": "games",
      "subcategory": "游戏·文字冒险",
      "title": "《深渊航线》登陆 Steam：四条通信线路同时推进的深海推理",
      "summary": "Ebi Odore 开发、Dancing Shrimp Games 发行的 PC 文字冒险《深渊航线》于 11 月 19 日登陆 Steam，含税 790 日元。玩家扮演深海设施事故中的通信员，唯一工具是聊天界面；机关、医务、观测、地面管制四条线路随游戏内时间同步推进，搁置对话会积累未读消息。",
      "source": "3DM 游戏网",
      "date": "2026-11-19",
      "url": "https://www.3dmgame.com/news/202611/3960700.html",
      "image": "",
      "badge": "文字冒险",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 71,
      "tags": [
        "文字冒险",
        "推理",
        "深海",
        "Steam"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 19 日登陆 Steam，含税 790 日元",
            "四条通信线路随游戏内时间同步推进，未读消息会累积",
            "玩家要交叉比对证词、观测日志、设施图与时间记录找矛盾",
            "备用电量有限，每夜要为医疗、排水或观测区域分配供电"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "「四条线同时推进、时机即信息」是把 Limbo 式资源分配与叙事推理结合得不错的机制——玩家的选择不只是选谁说话，还有何时说。文字冒险的成本主要在结构与文本，这类时间压力设计让静态对话有了动态张力，值得做叙事的朋友借鉴。"
          ]
        }
      ]
    },
    {
      "id": "ga-procedure-zero",
      "category": "games",
      "subcategory": "游戏·潜行",
      "title": "《PROCEDURE ZERO》发售：监狱潜行 + 心理恐怖，先上试玩版",
      "summary": "DELANIVO GAMES 于 11 月 18 日发售监狱题材游戏《PROCEDURE ZERO》，融合第一人称潜行、心理恐怖与冒险叙事，原价 1900 日元、11 月 25 日前九折。玩家扮演因发现文件秘密被关押的监察员，用香烟、硬币与囚犯交换情报，调查接连失踪事件。",
      "source": "3DM 游戏（网易转载）",
      "date": "2026-11-18",
      "url": "https://www.163.com/dy/article/LC1H54J40526D8LR.html",
      "image": "",
      "badge": "潜行游戏",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 69,
      "tags": [
        "潜行",
        "心理恐怖",
        "叙事",
        "Steam"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 18 日发售，原价 1900 日元、11 月 25 日前九折",
            "第一人称潜行 + 心理恐怖 + 冒险叙事",
            "用香烟、硬币等资源与囚犯交换情报，调查失踪事件",
            "Steam 提供试玩版，可先体验潜行节奏与恐怖氛围"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "「有限资源 + 封闭空间 + 信息交易」是经典潜行叙事配方，PROCEDURE ZERO 把它们装进监狱题材里，靠氛围而非 jump scare 撑恐怖感。提供试玩版是聪明做法——这类体验型游戏，让玩家先感受节奏比看截图更能促成购买。"
          ]
        }
      ]
    },
    {
      "id": "co-checkpoint-jam",
      "category": "contest",
      "subcategory": "竞赛·GameJam",
      "title": "Checkpoint Game Jam 公布 Top 20：用游戏做「预防暴力极端主义」",
      "summary": "由联合国反恐办公室（UNOCT）与跨区域犯罪与司法研究所（UNICRI）联合 Global Game Jam 主办的 Checkpoint Game Jam 公布 Top 20。赛事以「Play to Prevent」为主题，面向印尼、马来西亚、菲律宾、新加坡开发者，共 418 名注册者提交 60 款游戏、20 款晋级。第二轮 11 月 15 日启动，持续至 2027 年 1 月 10 日，最终队伍将在东京路演。",
      "source": "Global Game Jam 官方",
      "date": "2026-11-15",
      "url": "https://globalgamejam.org/news/announcing-checkpoint-game-jam-top-20",
      "image": "",
      "badge": "Game Jam",
      "badgeType": "event",
      "readTime": "6 分钟",
      "hotScore": 78,
      "tags": [
        "Game Jam",
        "GGJ",
        "社会议题",
        "东南亚"
      ],
      "content": [
        {
          "title": "赛事要点",
          "type": "list",
          "items": [
            "由 UNOCT、UNICRI 联合 Global Game Jam 主办，主题「Play to Prevent」",
            "418 名注册者提交 60 款游戏，20 款晋级第二轮",
            "第二轮 11 月 15 日至 2027 年 1 月 10 日，含导师辅导与迭代",
            "最终最多 5 支队伍入选东京展示路演"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把游戏 jam 用于「预防暴力极端主义」这样的社会议题，展示了游戏作为表达媒介的另一面。对学生开发者，这类主题赛事不仅给作品与导师资源，还让作品有真实的社会语境——比起为做游戏而做游戏，有明确议题约束反而更容易激发创意。"
          ]
        }
      ]
    },
    {
      "id": "co-indieplay-2026",
      "category": "contest",
      "subcategory": "竞赛·独立游戏",
      "title": "2026 indiePlay 最佳学生作品入围公布：WePlay 现场可试玩",
      "summary": "CiGA 独立游戏联盟密集公开 2026 indiePlay 中国独立游戏大赛入围作品，最佳学生作品专场推出《空匣子》《致命赌局》等。2026 WePlay 文化展于 11 月 21 至 22 日在上海国家会展中心举办，72 款 indiePlay 入围作品中 13 款来自海外，同期还有颁奖典礼与产业对接。",
      "source": "CiGA 独立游戏联盟（网易订阅）",
      "date": "2026-11-16",
      "url": "https://www.163.com/dy/article/LBSR2B9J0526JULF.html",
      "image": "",
      "badge": "indiePlay",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 76,
      "tags": [
        "indiePlay",
        "WePlay",
        "学生作品",
        "独立游戏"
      ],
      "content": [
        {
          "title": "赛事要点",
          "type": "list",
          "items": [
            "2026 indiePlay 最佳学生作品入围含《空匣子》《致命赌局》等",
            "WePlay 文化展 11 月 21–22 日在上海国家会展中心举办",
            "72 款入围作品中 13 款来自海外，现场设试玩与颁奖",
            "同期有 B2B 对接、制作人圆桌与行业分享"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "学生作品专场把「毕业设计」和「行业评审」拉到同一张桌前，对学生团队是难得的曝光机会。看这些入围作，能直观感受到国内独立游戏在叙事与机制上的活跃度。想参赛的同学，先去现场试玩同类作品、再对照明年的赛道准备，比闭门造车有效率。"
          ]
        }
      ]
    },
    {
      "id": "co-recruit-netease",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "网易游戏 27 届秋招进行中：图形开发、引擎研发与 AI Agent 岗位在列",
      "summary": "网易游戏 27 届秋季校园招聘面向 2027 届本科及以上毕业生，热招城市杭州、广州、上海。岗位覆盖游戏引擎研发工程师、图形开发工程师、AI Agent 工程师（游戏研发）、游戏研发工程师及多类策划与设计岗，网申 10 月 19 日起、时间以官网为准。",
      "source": "网易游戏招聘",
      "date": "2026-11-16",
      "url": "https://miaoruzhi.com/recruitment/c19c5e6f-3737-4b5b-a20f-0d55b7a7a4d0",
      "image": "",
      "badge": "校招",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 74,
      "tags": [
        "网易游戏",
        "校招",
        "图形开发",
        "引擎"
      ],
      "content": [
        {
          "title": "招聘要点",
          "type": "list",
          "items": [
            "面向 2027 届本科及以上毕业生，城市杭州、广州、上海",
            "技术岗含游戏引擎研发、图形开发、AI Agent 工程师（游戏研发）",
            "另有游戏研发、测试开发及多类策划/设计岗位",
            "网申自 10 月 19 日起，具体截止以官网为准"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "图形开发与 AI Agent 同时进入大厂校招热招列表，说明引擎底层与 AI 工具链已成游戏研发的刚需方向。想进这类的同学，除了刷算法，更该拿出可运行的渲染或工具 Demo——岗位名称越具体，越看重「做过什么」而非「学过什么」。"
          ]
        }
      ]
    },
    {
      "id": "co-recruit-zilong",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "紫龙游戏 2027 校招：游戏开发工程师（上海，C/C++，硕士）",
      "summary": "紫龙游戏上海黑杰克工作室放出 2027 校招游戏开发工程师岗位，地点上海长宁、面向硕士应届生，薪资 10–15k·14 薪、招 4 人，截止 11 月 30 日。要求熟练 C/C++、数据结构扎实、有 Agent 使用经验、能读英文技术文档，自学过游戏开发且有 Demo 者优先。",
      "source": "猎聘 · 紫龙游戏",
      "date": "2026-11-18",
      "url": "https://www.liepin.com/lptjob/84653747",
      "image": "",
      "badge": "校招",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 72,
      "tags": [
        "紫龙游戏",
        "校招",
        "C++",
        "游戏开发"
      ],
      "content": [
        {
          "title": "岗位要点",
          "type": "list",
          "items": [
            "2027 校招游戏开发工程师，上海长宁，面向硕士应届生",
            "薪资 10–15k·14 薪，招 4 人，11 月 30 日截止",
            "要求熟练 C/C++、数据结构扎实、有 Agent 使用经验",
            "自学游戏开发且有 Demo 作品者优先"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "岗位描述把「有 Agent 使用经验」写进要求，是很新的信号——会用 AI 工具提效，正在从加分项变成基础项。同时它仍强调 C/C++ 与数据结构这些硬功底。给学生团队的启示：工具要用，但底层能力别丢，两者叠加才是当下最吃香的画像。"
          ]
        }
      ]
    }
  ]
};
