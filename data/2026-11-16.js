window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-16",
    "weekday": "星期一",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-16 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：GDC 报告 40% 开发者已将生成式 AI 用于工作，AI 争议从「用不用」转向「怎么用」（hero）",
      "引擎精读：PlayCanvas 2.24 动态天空/平面反射、Unity 6.6 更新版、Unity Pipeline/CLI 智能体化、UE 5.9 预览",
      "开源宝库：crucible（AI 驱动 WebGL2 引擎）/ three-live（Three.js 原生 JIT）/ libGDX / Cesium / f3d / Sunshine",
      "AI 前沿：Rein-NPC-4B 开源会做事的 NPC、高通 MindSand、Tryll 端侧 NPC、83 款 AI 工具横评",
      "行业风向：Steam 提审积压拖慢发行、Hidden Horses 员工持股、Paradox CEO 换人、金摇杆奖、Denmu 超募",
      "竞赛招聘：Game Off 2026（SHIFT，12/1 截止）、VIVERSE 高校黑客松、网易雷火/互娱 2027 校招"
    ],
    "engineStatus": [
      {
        "name": "PlayCanvas",
        "type": "playcanvas",
        "status": "Web 3D 引擎 2.24",
        "badge": "WebGPU",
        "color": "blue"
      },
      {
        "name": "Unity 6.6",
        "type": "unity",
        "status": "受支持更新版",
        "badge": "6.6",
        "color": "cyan"
      },
      {
        "name": "Unreal 5.9",
        "type": "unreal",
        "status": "AI 智能体预览",
        "badge": "预览",
        "color": "violet"
      },
      {
        "name": "Godot",
        "type": "godot",
        "status": "4.8 beta 冲刺",
        "badge": "beta",
        "color": "teal"
      },
      {
        "name": "Flax",
        "type": "flax",
        "status": "1.13.x 热修",
        "badge": "C#",
        "color": "orange"
      },
      {
        "name": "Defold",
        "type": "defold",
        "status": "1.14.x 稳定",
        "badge": "Lua",
        "color": "green"
      }
    ]
  },
  "hero": {
    "id": "in-gdc-ai40-hero",
    "category": "industry",
    "categoryName": "行业风向",
    "tag": "GDC 行业报告",
    "title": "GDC 行业报告：40% 开发者已把生成式 AI 用进日常工作",
    "summary": "GDC 发布《游戏行业现状》报告，40% 的开发者表示工作中使用生成式 AI。这个数字把持续两年的 AI 争论落到真实采用率上，也与设计、美术、程序各岗位的分工变化直接相关。对开发者而言，问题已经从「要不要用」变成「如何在合规与质量控制前提下用好」。",
    "image": "https://assetsio.gnwcdn.com/state-of-the-game-industry-2026_SaCPvuv.png?width=1200&height=630&fit=crop&enable=upscale",
    "source": "GamesIndustry.biz（GDC 报告，一手）",
    "date": "2026-11-16",
    "url": "https://www.gamesindustry.biz/gdc-state-of-the-game-industry-report-40-of-developers-are-using-generative-ai-for-work",
    "readTime": "5 分钟",
    "hotScore": 97,
    "tags": [
      "GDC",
      "生成式 AI",
      "行业调研"
    ],
    "content": [
      {
        "title": "核心要点",
        "type": "list",
        "items": [
          "GDC《游戏行业现状》报告：40% 开发者工作中使用生成式 AI",
          "数据基于行业调研，反映真实采用率而非厂商单方宣传",
          "生成式 AI 已进入设计、美术、程序等多个岗位的日常流程",
          "同期行业讨论聚焦 IP 保护、AI 复制品与可发现性危机"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "四成采用率意味着 AI 不再是边缘实验，而是需要被正规管理的工作流。团队真正该关心的是授权边界、版权与质量控制——把 AI 纳入规范，比纠结用不用更现实。"
      }
    ]
  },
  "items": [
    {
      "id": "en-playcanvas224",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Web3D",
      "tag": "PlayCanvas",
      "title": "PlayCanvas 2.24 把动态天空与平面反射带进浏览器引擎",
      "summary": "PlayCanvas 11 月 9 日发布 2.24：DynamicSkyEffect 可随昼夜循环驱动方向光与环境光照，平面反射进入 StandardMaterial，frame-pass API 转正并新增 ComputePass（仅 WebGPU）。引擎已计划 11 月 16 日将其设为编辑器默认版本。",
      "image": "https://opengraph.githubassets.com/1/playcanvas/engine",
      "source": "PlayCanvas 官方论坛 / 官方发行说明（一手）",
      "date": "2026-11-16",
      "url": "https://forum.playcanvas.com/t/engine-v2-24-0/42778/1",
      "readTime": "6 分钟",
      "hotScore": 91,
      "tags": [
        "PlayCanvas",
        "WebGPU",
        "渲染"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "DynamicSkyEffect 支持白昼、星空、月亮与体积云，并可让方向光跟随太阳",
            "StandardMaterial 新增平面反射输入，镜面、抛光地面与静水受益",
            "frame-pass API 转正，ComputePass 可插到指定帧阶段（WebGPU only）",
            "11 月 16 日起成为编辑器默认版本"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "动态天空的价值不在「好看」，而在它把太阳、光照、环境反射统一成一个可随时间推进的系统——这类一体化设计，正是浏览器 3D 从 demo 走向真实场景的关键一步。"
        }
      ]
    },
    {
      "id": "en-unity66",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·版本动态",
      "tag": "Unity",
      "title": "Unity 6.6 更新版落地：更快的进入播放模式与内容目录",
      "summary": "截至 11 月，Unity 6.6 成为当前受支持更新版，主打更快的 Enter Play Mode、Content Directories 内容目录、重设计的 Hierarchy 窗口与 2D 光照改进；6.3 LTS 仍提供长期支持，6.7 与 5.9 尚处预览。",
      "image": "https://upskill.biz/wp-content/uploads/2026/11/by-tzimt0ms-e1794500445684.webp",
      "source": "Unity 官方 / upSkill 季度综述（一手）",
      "date": "2026-11-16",
      "url": "https://upskill.biz/new-game-engine-features-unity-unreal-godot",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "Unity",
        "6.6",
        "编辑器"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "6.6 为受支持更新版，6.3 LTS 长期支持延续",
            "更快进入 Play Mode，减少调试等待",
            "Content Directories 更精细控制资源组织与加载",
            "新增 backdrop filter、UI Toolkit 与 2D 光照改进"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「进入播放模式」这种高频动作压缩等待时间，看似细小，却直接决定一天里能做多少次迭代——工具链的速度就是团队的速度。"
        }
      ]
    },
    {
      "id": "en-unity600069f1",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·补丁",
      "tag": "Unity",
      "title": "Unity 6000.6.9f1 发布：内存分析归因更清晰",
      "summary": "Unity 于 11 月 12 日放出 6000.6.9f1，改进 Memory Profiler 对 Asset Database 原生内存的归因，Licensing Client 升级到 1.19.0 启动更快，Mono 在低统计开销下减少 JIT 负担，并修复一批 2D、Android 与 UI 问题。",
      "image": "https://unityreleases.com/opengraph-image",
      "source": "Unity 官方发布说明（一手）",
      "date": "2026-11-16",
      "url": "https://unity.com/releases/editor/whats-new/6000.6.9",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Unity",
        "6000.6.9f1",
        "内存分析"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Memory Profiler 把原生内存归到具名 AssetDatabase 根节点",
            "Licensing Client 升级 v1.19.0，启动更快",
            "Mono 在关闭运行时统计时跳过 JIT 计时开销",
            "修复多项 2D 光源、Android 与 uGUI 回归问题"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "内存归因从「无根内存」变成具名节点，是排查资源泄露的转折点——看不见的开销，永远优化不了。"
        }
      ]
    },
    {
      "id": "en-pipeline",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "工具链·AI",
      "tag": "Unity",
      "title": "Unity Pipeline 与 CLI 进入实验/测试：脚本与智能体可直接驱动编辑器",
      "summary": "Unity 推出 Pipeline 0.9.1-exp.1 与 CLI 1.0.0-beta.14（10 月 21–22 日最近审阅），前者让脚本与编码智能体通过命令创建场景、资源、运行测试与构建，后者支持无 Hub 的无人值守安装、构建与测试流程。",
      "image": "https://unityreleases.com/opengraph-image",
      "source": "Unity 官方发布页（一手）",
      "date": "2026-11-16",
      "url": "http://unityreleases.com/",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "Unity",
        "Pipeline",
        "CLI",
        "自动化"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Pipeline 0.9.1-exp.1：命令式创建场景/资源、运行测试与构建",
            "CLI 1.0.0-beta.14：无 Hub 安装编辑器、管理项目、自动化构建",
            "两者都面向编码智能体与无人值守工作流",
            "当前分别处于实验与 Beta 阶段"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "当编辑器可以被命令行和智能体驱动，「做游戏」和「写脚本生成游戏」的边界开始消失——这是自动化生产管线真正的入口。"
        }
      ]
    },
    {
      "id": "en-fenris-carbon",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "渲染技术·开源",
      "tag": "Fenris",
      "title": "《EVE Online》开发商给开源 Carbon 引擎加入新渲染技术",
      "summary": "Eve Online 开发商 Fenris Creations 正为其开源 Carbon 引擎加入一项渲染技术，官方称可带来更准确的着色与更强的景深表现。这套引擎此前已在 Unity 路线上公开演示，此次继续强化自研渲染栈。",
      "image": "https://assetsio.gnwcdn.com/eve-online-in-unity-triumph.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（引擎技术，一手引述）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/eve-online-maker-fenris-creations-is-adding-a-rendering-technique-to-its-open-source-carbon-engine-that-promises-more-accurate-shading-and-greater-depth",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Carbon 引擎",
        "渲染",
        "开源"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Fenris Creations 为开源 Carbon 引擎加入新渲染技术",
            "目标是更准确的着色与更强的深度感",
            "引擎此前已公开基于 Unity 的技术演示",
            "技术细节来自开发商官方表述"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "老牌 MMO 厂商选择把引擎开源并持续投入渲染，说明「自研引擎」不再是 3A 的专利，而是长期项目构筑技术护城河的现实选项。"
        }
      ]
    },
    {
      "id": "en-unreal59",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·预览",
      "tag": "Unreal",
      "title": "UE 5.9 预览版把 AI 智能体与 Web 目标带进编辑器",
      "summary": "Epic 放出 Unreal Engine 5.9 MegaJam Preview，首次以智能体工作流为主构建：Unreal Assistant 面板对接 Claude Code、Codex 等编码智能体，Unreal MCP 自动启动并扩展工具集，Unreal Canvas 可用自有 API 生成概念图与 3D 网格，并试验 WebAssembly/WebGPU 浏览器目标。",
      "image": "https://cms-assets.unrealengine.com/AiKUh5PQCTaOFnmJDZJBfz/resize=width:1200/cmvgzdmqd5yp406ohyvjs01ly",
      "source": "Unreal Engine 官方 / Geekiki（一手转述）",
      "date": "2026-11-16",
      "url": "https://geekiki.com/blog/unreal-engine-5-9-preview-chega-com-agentes-de-ia-no-editor-e-suporte-a-web?lang=en",
      "readTime": "7 分钟",
      "hotScore": 92,
      "tags": [
        "Unreal",
        "5.9",
        "AI 智能体",
        "WebGPU"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Unreal Assistant 面板对接外部编码智能体（Claude Code/Codex/Cursor）",
            "Unreal MCP 自动启动，工具集扩展到渲染、调试、关卡创建等",
            "Unreal Canvas 支持提示词生成概念图、3D 网格与视频",
            "试验性 Web（WASM/WebGPU）支持；完整 5.9 仍计划 2027 年"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Epic 把「引擎本身由智能体参与构建」当作实验目标，这比任何单个新特性都更值得关注——它在重新定义引擎的开发方式。"
        }
      ]
    },
    {
      "id": "in-gdc-ai40",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "调研报告·AI",
      "tag": "GDC",
      "title": "GDC 行业报告：40% 开发者已把生成式 AI 用进日常工作",
      "summary": "GDC 发布《游戏行业现状》报告，40% 的开发者表示工作中使用生成式 AI。该数据把持续两年的 AI 争论落到真实采用率上，也与设计、美术、程序各岗位的实际分工变化直接相关。",
      "image": "https://assetsio.gnwcdn.com/state-of-the-game-industry-2026_SaCPvuv.png?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（GDC 报告，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/gdc-state-of-the-game-industry-report-40-of-developers-are-using-generative-ai-for-work",
      "readTime": "5 分钟",
      "hotScore": 94,
      "tags": [
        "GDC",
        "生成式 AI",
        "行业调研"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "GDC《游戏行业现状》报告：40% 开发者工作中使用生成式 AI",
            "数据来自行业调研，反映真实采用率而非厂商宣传",
            "涉及设计、美术、程序等多个岗位的实际使用",
            "AI 工具争论从「要不要用」转向「怎么用」"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "四成采用率意味着 AI 不再是边缘实验，而是需要被正规管理的工作流——团队该关心的是规范、版权与质量控制，而不是要不要碰它。"
        }
      ]
    },
    {
      "id": "in-ip-clones",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "版权·AI",
      "tag": "IP 保护",
      "title": "AI 克隆作品泛滥，开发者开始系统讨论 IP 保护策略",
      "summary": "随着生成式 AI 让换皮与仿制成本骤降，GamesIndustry.biz 刊文讨论开发者如何保护自己的 IP。同期一场投资人 perspective 讨论也指向「AI 复制品激增 + 可发现性危机」的双重挤压。",
      "image": "https://assetsio.gnwcdn.com/pexels-icon0-1214270.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（行业观察，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/how-to-protect-your-ip-against-the-army-of-ai-clones",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "IP 保护",
        "AI 克隆",
        "可发现性"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "生成式 AI 显著降低仿制与换皮成本",
            "文章系统梳理开发者保护 IP 的策略与注意事项",
            "投资人视角讨论 AI 复制品激增与可发现性危机",
            "争议核心从技术转向权属与曝光"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "当复制成本趋近于零，稀缺的不再是「做出一个玩法」，而是被玩家记住、被平台看见——品牌与社区成为最硬的护城河。"
        }
      ]
    },
    {
      "id": "in-steam-backlog",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "平台·发行",
      "tag": "Steam",
      "title": "Steam 提审积压拖慢独立开发者上线节奏",
      "summary": "GamesIndustry.biz 报道，Steam 的提交与审核积压正迫使部分独立开发者推迟游戏上线。在 GTA 6 等大作占据注意力的窗口期，审核排队成为小团队难以控的外部变量。",
      "image": "",
      "source": "GamesIndustry.biz（行业报道，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/steams-submission-and-approval-backlog-is-forcing-indie-devs-to-delay-game-launches",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "Steam",
        "发行",
        "独立开发"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Steam 提交与审核出现积压",
            "部分独立开发者被迫推迟上线日期",
            "平台审核成为不可控的外部依赖",
            "叠加年末大作窗口，曝光竞争更激烈"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "发行排期不能只算自己的开发进度——把平台审核时间纳入缓冲，是小团队规划上线时必须补上的一课。"
        }
      ]
    },
    {
      "id": "in-hidden-horses",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "工作室·人事",
      "tag": "Hidden Horses",
      "title": "被裁的 Id Software 开发者组建员工持股工作室 Hidden Horses",
      "summary": "一批从 Id Software 离职的开发者成立员工持股工作室 Hidden Horses。在行业持续裁员的背景下，员工所有制被视为保留团队、掌握自身命运的一种新路径。",
      "image": "https://assetsio.gnwcdn.com/hidden-horses.webp?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（行业报道，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/laid-off-id-software-devs-form-employee-owned-studio-hidden-horses",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Hidden Horses",
        "员工持股",
        "裁员"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "前 Id Software 开发者组建员工持股工作室 Hidden Horses",
            "发生在行业裁员持续的大背景下",
            "员工所有制成为团队自救的一种选择",
            "延续了近年来「被裁团队另起炉灶」的趋势"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把命运握在自己手里听起来理想主义，但当大厂不断收缩，「共同所有、共同决策」正从口号变成可落地的团队方案。"
        }
      ]
    },
    {
      "id": "in-wester",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "人事·厂商",
      "tag": "Paradox",
      "title": "Fredrik Wester 卸任 Paradox Interactive CEO",
      "summary": "Paradox Interactive 宣布 Fredrik Wester 卸任 CEO。作为把 Paradox 从小型发行商带成策略游戏巨头的灵魂人物，其离任标志着公司进入新的治理阶段。",
      "image": "https://assetsio.gnwcdn.com/fredrik-wester.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（官方公告，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/fredrik-wester-steps-down-as-paradox-interactive-ceo",
      "readTime": "4 分钟",
      "hotScore": 87,
      "tags": [
        "Paradox",
        "CEO",
        "人事变动"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Fredrik Wester 卸任 Paradox Interactive CEO",
            "其任内把 Paradox 发展为策略游戏头部厂商",
            "公司进入新的管理层交接阶段",
            "人事变动为一家以长线运营著称的公司带来变量"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "创始型领导者的交棒，往往是一家公司从「创始人意志」走向「制度运转」的分水岭——对长线 IP 是机会也是考验。"
        }
      ]
    },
    {
      "id": "in-blackforest",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "工作室·整合",
      "tag": "Third Signal",
      "title": "Black Forest Games 从 THQ Nordic 拆分，联合创立 Third Signal",
      "summary": "Black Forest Games 宣布从 THQ Nordic 体系拆分，并联合创立独立工作室联盟 Third Signal。这一动作延续了近期大厂拆分、工作室寻求更大自主权的行业动向。",
      "image": "https://assetsio.gnwcdn.com/black-forest-games.jpeg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（行业报道，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/black-forest-games-spins-out-from-thq-nordic-co-founds-indie-studio-group-third-signal",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Black Forest Games",
        "THQ Nordic",
        "Third Signal"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Black Forest Games 从 THQ Nordic 拆分",
            "联合创立独立工作室联盟 Third Signal",
            "反映大厂拆分与工作室自主权诉求",
            "与近期多起工作室独立/出售动向呼应"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "拆分不等于衰退——对中型工作室而言，脱离大厂体系换取创作与决策自主，正在成为一种主动选择。"
        }
      ]
    },
    {
      "id": "in-goldenjoy",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "奖项·口碑",
      "tag": "Golden Joystick",
      "title": "《生化危机：安魂曲》横扫金摇杆奖四项大奖",
      "summary": "《Resident Evil Requiem》在 Golden Joystick Awards 拿下包括 Ultimate Game of the Year 与 Console GOTY 在内的四项大奖，成为本届最大赢家，也印证了经典 IP 新作的市场号召力。",
      "image": "https://assetsio.gnwcdn.com/grace-ashcroft-resident-evil.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（奖项报道，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/resident-evil-requiem-wins-four-golden-joystick-awards-including-ultimate-and-console-goty",
      "readTime": "4 分钟",
      "hotScore": 85,
      "tags": [
        "Golden Joystick",
        "生化危机",
        "奖项"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "《Resident Evil Requiem》获四项金摇杆奖",
            "包括 Ultimate Game of the Year 与 Console GOTY",
            "为玩家投票类奖项，反映大众口碑",
            "经典 IP 新作延续强势表现"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "玩家投票类奖项的价值，在于它衡量的是「被记住」——在一个供给过剩的市场里，能被主动想起来就是稀缺能力。"
        }
      ]
    },
    {
      "id": "in-denmu",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "投融资",
      "tag": "Denmu",
      "title": "投资机构 Denmu 首期基金超额认购，规模超 5000 万美元",
      "summary": "游戏投资机构 Denmu 宣布首期基金超额认购，超过原定 5000 万美元目标。其已投项目包括《Star Wars: Galactic Racer》《The Hundred Line》等，显示出对具鲜明创意身份团队的持续押注。",
      "image": "https://assetsio.gnwcdn.com/galactic-racer.webp?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（投融资，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/investment-firm-denmu-closes-oversubscribed-debut-fund-surpassing-50-million-target",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Denmu",
        "投融资",
        "独立游戏"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Denmu 首期基金超额认购，超过 5000 万美元目标",
            "已投项目包括 Star Wars: Galactic Racer、The Hundred Line 等",
            "投资策略强调「清晰的创意身份」",
            "在裁员潮中仍有资本愿意押注中小团队"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "寒冬里依然有超额认购的基金，说明资本没有离场，只是更挑剔——有清晰创意与稳定团队的项目的窗口仍在。"
        }
      ]
    },
    {
      "id": "ga-trafficity",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "模拟·新作",
      "tag": "Trafficity",
      "title": "《Trafficity》11/16 上线：用无网格道路工具管理城市车流",
      "summary": "城市交通模拟《Trafficity》于 11 月 16 日登陆 Steam，主打无网格道路布局、复合环岛与多相信号设计，配合真实通勤寻路，让玩家在拥挤的城市节点里维持车流效率。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5185750/cba1f3195974a89cac41d5ae9c56e6bed1809b56/header.jpg?t=1794652056",
      "source": "Steam 官方商店（一手，appid 5185750）",
      "date": "2026-11-16",
      "url": "https://store.steampowered.com/app/5185750/",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Trafficity",
        "交通模拟",
        "城市规划"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 16 日登陆 Steam",
            "无网格道路布局，支持复合环岛",
            "多相信号灯设计与真实通勤寻路",
            "面向交通与城市规划爱好者"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「堵车」做成可玩的核心机制，本质是把一个真实系统的约束变成关卡——系统模拟类游戏的乐趣，往往来自这种贴近现实的复杂度。"
        }
      ]
    },
    {
      "id": "ga-harma",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "Roguelike·新作",
      "tag": "HARMA",
      "title": "《HARMA》11/16 发售：100% 手绘哥特像素的卡牌构筑",
      "summary": "Roguelike 卡牌构筑游戏《HARMA》于 11 月 16 日上线，主打 100% 人工绘制的哥特风像素美术，并加入 Dimensional Rift 模式，强调纯手工视觉与构筑深度的结合。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2483700/16ef2cf7570d03f263f6df2b2e3ea01c199a0566/header.jpg?t=1793780638",
      "source": "Steam 官方商店（一手，appid 2483700）",
      "date": "2026-11-16",
      "url": "https://store.steampowered.com/app/2483700/",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "HARMA",
        "Roguelike",
        "卡牌构筑"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 16 日发售",
            "100% 人工绘制的哥特风像素插画",
            "包含 Dimensional Rift 模式",
            "强调美术与构筑玩法的双重手工感"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "在 AI 生成美术泛滥的当下，坚持「100% 人工绘制」本身就是一种产品定位——它把创作过程变成了可讲述的差异化价值。"
        }
      ]
    },
    {
      "id": "ga-spiritcrossing",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "生活模拟·新作",
      "tag": "Spirit Crossing",
      "title": "《Spirit Crossing》11/16 上线：可选的柔和社交生活模拟",
      "summary": "Sprout Interactive 的《Spirit Crossing》于 11 月 16 日登陆 Steam，是款柔和色调的 MMO 生活模拟，主打可选择开启的社交可见性与家园装饰，为玩家提供低压力的共同生活体验。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2321960/ef5229ee7c51162c7233296443ef0520408387cd/header.jpg?t=1794773454",
      "source": "Steam 官方商店（一手，appid 2321960）",
      "date": "2026-11-16",
      "url": "https://store.steampowered.com/app/2321960/",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Spirit Crossing",
        "生活模拟",
        "MMO"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 16 日上线",
            "柔和色系的精灵世界MMO生活模拟",
            "社交可见性可选择开启，降低社交压力",
            "强调家园装饰与放松体验"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「可选择开启社交」是一个很聪明的设计——它把社交从默认义务变成可选奖励，回应了一大批想要陪伴又怕被打扰的玩家。"
        }
      ]
    },
    {
      "id": "ga-attic",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "解谜·新作",
      "tag": "The Attic",
      "title": "《The Attic》11/16 发售：修理老设备揭开家庭秘密",
      "summary": "谜题游戏《The Attic: A Mystery Puzzle Game》于 11 月 16 日上线，玩家扮演 Jess，通过修理复古相机、磁带与卡带，逐步揭开关于哥哥 Matt 与神秘人物 Destiny 的秘密。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5005750/07557011b109242c2e63f0631f5406f90887e721/header.jpg?t=1794385515",
      "source": "Steam 官方商店（一手，appid 5005750）",
      "date": "2026-11-16",
      "url": "https://store.steampowered.com/app/5005750/",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "The Attic",
        "解谜",
        "叙事"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 16 日发售",
            "核心玩法是修理复古相机、磁带与卡带",
            "围绕家庭秘密展开叙事",
            "以「修复物」驱动解谜进程"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「修东西」做成解谜载体，让道具本身承载叙事——这种机制与故事的强耦合，比堆砌谜题更能留下记忆点。"
        }
      ]
    },
    {
      "id": "ga-melvor2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "放置·新作",
      "tag": "Melvor Idle 2",
      "title": "《Melvor Idle 2》11/17 上线：纯粹的放置成长循环",
      "summary": "由 Games by Malcs 开发、Jagex 发行的《Melvor Idle 2》将于 11 月 17 日登陆 Steam，剥离多余干扰，专注复刻 Old School RuneScape 式的技能成长循环，面向喜爱数值优化的玩家。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3218350/21b3f6881a12eef86b7c17b21640b396f3510f92/header.jpg?t=1794524310",
      "source": "Steam 官方商店（一手，appid 3218350）",
      "date": "2026-11-16",
      "url": "https://store.steampowered.com/app/3218350/",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Melvor Idle 2",
        "放置游戏",
        "数值成长"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 17 日上线",
            "专注 OSRS 式技能成长循环",
            "由 Jagex 商业部门发行",
            "面向喜欢效率优化的细分玩家"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "在大作扎堆的窗口坚持做「纯粹的成长循环」，靠的是对细分受众的清晰认知——不是所有游戏都需要靠叙事或画面取胜。"
        }
      ]
    },
    {
      "id": "ga-warhammer",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "生存·新作",
      "tag": "Warhammer Survivors",
      "title": "《Warhammer Survivors》开放试玩：战锤世界观遇上幸存者玩法",
      "summary": "Auroch Digital 的《Warhammer Survivors》已放出试玩版，把战锤 IP 与割草式幸存者玩法结合。作为 11 月独立游戏清单中的热门，试玩版可先验证操作与性能表现。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3669620/dc61fccdeec6b05a58fbcdd7b1d0bbbe1f6999ea/header.jpg?t=1794485359",
      "source": "Steam 官方商店（一手，appid 3669620）",
      "date": "2026-11-16",
      "url": "https://store.steampowered.com/app/3669620/",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "Warhammer Survivors",
        "幸存者玩法",
        "战锤"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "已开放试玩版",
            "战锤 IP 与幸存者（割草）玩法结合",
            "适合先验证操作手感与性能",
            "为 11 月独立游戏关注焦点之一"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "成熟 IP 加上被验证过的玩法框架，是降低新品风险的组合拳——但对开发者而言，如何做出差异化仍是真问题。"
        }
      ]
    },
    {
      "id": "ga-volvy",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "冒险·新作",
      "tag": "Volvy",
      "title": "《Volvy's Adventure: Reslimed》定档 11/19",
      "summary": "Devolver Digital 发行的《Volvy's Adventure: Reslimed》定档 11 月 19 日，是 11 月受关注的新作之一。发行商把它列为当月重点作品，与多款独立新作共同构成年末密集发行窗口。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4523120/bd01ad0f41f47272b6f1459de015d2494b24a422/header.jpg?t=1793281784",
      "source": "Steam 官方商店（一手，appid 4523120）",
      "date": "2026-11-16",
      "url": "https://store.steampowered.com/app/4523120/",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "Volvy",
        "冒险",
        "Devolver Digital"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "定档 11 月 19 日",
            "由 Devolver Digital 发行",
            "为 11 月重点独立新作之一",
            "处于年末密集发行窗口"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Devolver 的选品口味本身就是一种质量信号——被它挑中的小团队作品，往往在玩法创意上有鲜明个性。"
        }
      ]
    },
    {
      "id": "os-crucible",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "3D 引擎·AI",
      "tag": "crucible",
      "title": "codepawl/crucible：可被 AI 智能体驱动的 WebGL2 3D 引擎",
      "summary": "codepawl/crucible 是一个 67js 写的 WebGL2 3D 引擎，场景即数据，智能体通过 MCP 服务构建与修改场景，并可检查 PNG 预览、渲染静帧或 MP4。11 月 13 日单日涨约 37 星，是 glTF 话题下增长最快的项目之一。",
      "image": "https://opengraph.githubassets.com/1/codepawl/crucible",
      "source": "GitHub: codepawl/crucible（一手）",
      "date": "2026-11-16",
      "url": "https://github.com/codepawl/crucible",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "crucible",
        "WebGL2",
        "MCP",
        "AI 智能体"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "67js 实现的 WebGL2 3D 引擎，场景以纯数据描述",
            "智能体通过 MCP 服务搭建与修改场景",
            "可检查 PNG 预览并渲染静帧或 MP4 视频",
            "11 月 13 日在 glTF 话题下日增星领先"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「场景」变成智能体可读写的纯数据，再用 MCP 打通，这类设计让 3D 内容第一次真正进入可编程、可自动化的生产链路。"
        }
      ]
    },
    {
      "id": "os-threelive",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "Three.js·编译",
      "tag": "three-live",
      "title": "google/three-live：把标准 Three.js 代码编译成移动端原生 3D",
      "summary": "google/three-live 是一个运行时与设备端 JIT 编译器，可把标准 Three.js 代码编译为 Android、iOS/visionOS 与 Web 上的原生 3D（WebGL2/WebXR）。11 月 13 日单日增长约 30 星。",
      "image": "https://opengraph.githubassets.com/1/google/three-live",
      "source": "GitHub: google/three-live（一手）",
      "date": "2026-11-16",
      "url": "https://github.com/google/three-live",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "three-live",
        "Three.js",
        "JIT",
        "跨端"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "运行时 + 设备端 JIT 编译器",
            "把标准 Three.js 代码编译成原生 3D",
            "覆盖 Android、iOS/visionOS 与 Web（WebGL2/WebXR）",
            "11 月 13 日单日增长约 30 星"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "让同一套 Three.js 代码跑到移动端原生，本质是抹平 Web 与原生之间的性能鸿沟——这类工具会显著改变轻量 3D 项目的选型。"
        }
      ]
    },
    {
      "id": "os-libgdx",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "游戏框架·Java",
      "tag": "libGDX",
      "title": "libGDX：跨七端的 Java 2D/3D 游戏框架仍在高频更新",
      "summary": "libGDX 是基于 OpenGL ES 的 Java 2D/3D 游戏框架，覆盖 Windows、Linux、macOS、Android、浏览器与 iOS，不强制设计模式，通过 Gradle 配置。11 月 GitHub Digest 中仍以超 2.5 万星位列热门项目。",
      "image": "https://opengraph.githubassets.com/1/libgdx/libgdx",
      "source": "GitHub: libgdx/libgdx（一手）",
      "date": "2026-11-16",
      "url": "https://github.com/libgdx/libgdx",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "libGDX",
        "Java",
        "跨端",
        "游戏框架"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "基于 OpenGL ES 的 Java 2D/3D 框架",
            "覆盖桌面、移动、Web 与 iOS 多平台",
            "不强制设计模式，Gradle 配置",
            "11 月 GitHub Digest 热门项目，超 2.5 万星"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "在引擎越来越「重」的今天，libGDX 这种轻量、可控、跨端的框架，仍是理解游戏循环与渲染底层的好教材。"
        }
      ]
    },
    {
      "id": "os-cesium",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "3D 地理·WebGL",
      "tag": "Cesium",
      "title": "CesiumJS：浏览器里免插件的 3D 地球与 2D 地图库",
      "summary": "CesiumGS/cesium 是用 JavaScript 编写的开源库，可在浏览器中无需插件创建 3D 地球与 2D 地图，底层用 WebGL 硬件加速。截至 11 月 15 日约 1.59 万星，位列 glTF 话题前三。",
      "image": "https://opengraph.githubassets.com/1/CesiumGS/cesium",
      "source": "GitHub: CesiumGS/cesium（一手）",
      "date": "2026-11-16",
      "url": "https://github.com/CesiumGS/cesium",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Cesium",
        "WebGL",
        "地理可视化",
        "glTF"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "浏览器端免插件创建 3D 地球与 2D 地图",
            "基于 WebGL 硬件加速",
            "截至 11 月 15 日约 1.59 万星",
            "glTF 话题 star 数前三"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "地理空间数据正在成为游戏与可视化的新素材源——掌握 3D 地球这类专用渲染库，能为模拟与数字孪生项目打开新方向。"
        }
      ]
    },
    {
      "id": "os-f3d",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "3D 查看器·C++",
      "tag": "f3d",
      "title": "f3d：支持数十种格式的极简 3D 查看器",
      "summary": "f3d-app/f3d 是快速、极简的 3D 查看器桌面应用，支持 glTF、USD、STL、STEP、PLY、OBJ、FBX、Alembic 等格式，并提供实时 PBR 渲染与光追选项。约 5100 星。",
      "image": "https://opengraph.githubassets.com/1/f3d-app/f3d",
      "source": "GitHub: f3d-app/f3d（一手）",
      "date": "2026-11-16",
      "url": "https://github.com/f3d-app/f3d",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "f3d",
        "3D 查看器",
        "PBR",
        "工具链"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "支持 glTF/USD/STL/STEP/OBJ/FBX 等众多格式",
            "提供实时 PBR 渲染与光追选项",
            "桌面极简查看器，约 5100 星",
            "适合快速检查与验证 3D 资产"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "一个趁手的资产查看器能省下大量「打不开、看不出问题」的时间——工具链里这类小工具的价值常被低估。"
        }
      ]
    },
    {
      "id": "os-sunshine",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "串流·自托管",
      "tag": "Sunshine",
      "title": "Sunshine：自托管的 Moonlight 游戏串流主机",
      "summary": "SunshineStream/Sunshine 是自建的游戏串流主机，搭配 Moonlight 客户端使用，可在自有硬件上搭建低延迟远程游戏。11 月 C++ 趋势榜中约 4.3 万星，持续活跃。",
      "image": "https://opengraph.githubassets.com/1/SunshineStream/Sunshine",
      "source": "GitHub: SunshineStream/Sunshine（一手）",
      "date": "2026-11-16",
      "url": "https://github.com/SunshineStream/Sunshine",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Sunshine",
        "串流",
        "自托管",
        "Moonlight"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "自托管游戏串流主机，搭配 Moonlight 客户端",
            "在自有硬件上搭建低延迟远程游戏",
            "11 月 C++ 趋势榜约 4.3 万星",
            "项目持续活跃维护"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "自己掌控串流主机，意味着不必依赖闭源生态——对想做云游戏实验或小范围远程游玩的团队，这是可控性很高的起点。"
        }
      ]
    },
    {
      "id": "tu-perf",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "性能优化·方法论",
      "tag": "性能优化",
      "title": "可复现的性能优化流程：先定位 CPU/GPU 瓶颈再动手",
      "summary": "gamedev-skills 的 Performance Optimization Skill 强调「先剖析再改代码」：用引擎 Profiler 看整帧与 CPU/GPU 拆分，锁定单一最大开销，优先做算法级优化（少做事、缓存、空间划分），再在同一场景复测并给出 before/after 数字。",
      "image": "https://skillselion.com/og/listing?n=Performance+Optimization&a=gamedev-skills&r=gamedev-skills%2Fawesome-gamedev-agent-skills&k=Skill&s=8903&i=13562",
      "source": "gamedev-skills / Skillselion（教程，一手）",
      "date": "2026-11-16",
      "url": "https://skillselion.com/skills/gamedev-skills/awesome-gamedev-agent-skills/performance-optimization",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "性能优化",
        "Profiler",
        "帧预算"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "60FPS≈16.67ms、30FPS≈33.3ms、120FPS≈8.33ms 的帧预算换算",
            "先用引擎 Profiler 判断瓶颈在 CPU 还是 GPU",
            "优先算法级优化，再做对象池、合批、消除每帧分配",
            "改完在同一场景/硬件复测，报告真实数字"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「应该更快」不是结论，「从 22ms 降到 14ms」才是——性能优化的第一原则是把感受变成可复现的数字。"
        }
      ]
    },
    {
      "id": "tu-urp2d",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "渲染·URP 2D",
      "tag": "URP",
      "title": "URP 2D 渲染器实战：给 Tilemap 省下数百万次采样",
      "summary": "一篇 URP 2D 渲染器指南拆解移动端 Tilemap 光照开销：铺满 1920×1080 的地面配两种 Blend Style 就是约 400 万次采样。作者给出六招——目标排序层摘出地面、乘法层缓冲降到 0.5、Tilemap 分块、静态受光烘进 tile、避免地面挂阴影投射、光源贴地收半径。",
      "image": "",
      "source": "独游魔盒（技术教程，一手）",
      "date": "2026-11-16",
      "url": "https://xmohe.com/techie/special/unity-urp/29-unity-urp-2d-renderer-guide",
      "readTime": "8 分钟",
      "hotScore": 89,
      "tags": [
        "URP",
        "Tilemap",
        "2D 光照",
        "移动端"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "全屏 Tilemap × 多层 Blend Style 会带来数百万次采样",
            "用目标排序层把地面从技能光中摘出，收益最大",
            "乘法压暗层缓冲缩放设 0.5，填充成本可降约四分之三",
            "Tilemap 分块建议 8×8~16×16；地面不挂阴影投射"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "移动端 2D 的瓶颈常常不是灯的数量，而是灯的覆盖成本——理解 TBDR「拿带宽换像素」的机制，才知道该从哪里省。"
        }
      ]
    },
    {
      "id": "tu-weapon-refactor",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "C#·架构重构",
      "tag": "Unity",
      "title": "用多态与事件重构武器系统：从 switch 到解耦架构",
      "summary": "Code Monkey 的教程演示如何重构 Unity 武器系统：用多态 C# 类替换武器专属 switch，把 ScriptableObject 配置与运行时弹药状态分离，用事件解耦逻辑、表现与 UI，并以 IDamageable 接口替代字符串伤害调用。",
      "image": "https://gameloop-issue-assets-issueassetsbucket-or1lkrdhk2y9.s3.us-east-1.amazonaws.com/published/464281b0-c75d-40a6-a13a-fd8c70325ace/2f96b038-1afc-4e6b-bcc7-5cec39050317/2-6adb5f9b-e12f-4e2d-b48a-a4016ae533e4.jpg",
      "source": "GameLoop 技术综述（Code Monkey 教程转述）",
      "date": "2026-11-16",
      "url": "https://www.gameloop.tech/gamedev/issues/2026-11-08",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Unity",
        "C#",
        "多态",
        "架构重构"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "用多态类替换手枪/霰弹枪/火箭筒的 switch 分支",
            "ScriptableObject 配置与运行时状态分离",
            "事件解耦武器逻辑、表现与 UI",
            "用 IDamageable 接口替代字符串伤害调用"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把 switch 换成多态，不只是代码更漂亮——它让「加一种新武器」从修改多处条件变成新增一个类，这才是可扩展性的实际意义。"
        }
      ]
    },
    {
      "id": "tu-unity-render-roadmap",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "渲染·技术路线图",
      "tag": "Unity",
      "title": "Unity 渲染路线图拆解：从 SCGI 实时全局光照到神经纹理压缩",
      "summary": "Unity Korea 工程师在 AI Game Lab Day 2026（11/12）系统讲解 6.6→6.7 LTS→7 的图形路线图：URP 引入 Surface Cache GI（免烘焙实时间接光）、SSR 屏幕空间反射、GTAO，并用 Sentis 推理引擎做 Neural Texture Compression，纹理内存约降 40%；6.7 LTS 计划 12 月发布，Unity 7 预计明年 GDC 前后推出。",
      "image": "https://static.invenglobal.com/upload/image/2026/11/12/r1794483730633569.jpeg",
      "source": "Inven Global（Unity 工程师演讲，一手转述）",
      "date": "2026-11-16",
      "url": "https://www.invenglobal.com/articles/28529/moving-beyond-the-editor-unitys-three-approaches-to-the-ai-ecosystem",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "Unity 6.7",
        "URP",
        "SCGI",
        "神经渲染",
        "GTAO"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "URP 引入 Surface Cache GI（SCGI），跨移动端/PC/主机免烘焙实时间接光",
            "新增 SSR 屏幕空间反射与 GTAO 环境光遮蔽",
            "Neural Texture Compression 借 Sentis 引擎让纹理内存约降 40%",
            "6.7 LTS 计划 12 月发布；Unity 7 转向 CoreCLR 与最新 C#，整合渲染器到 URP"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「免烘焙的实时间接光」和「降 40% 纹理内存」放进主渲染管线，意味着过去只有大项目才负担得起的画质，正在变成移动端的默认配置——这是理解未来两年 Unity 项目技术选型的关键线索。"
        }
      ]
    },
    {
      "id": "tu-roguelike",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "Godot·入门",
      "tag": "Godot",
      "title": "Godot 4 俯视角 Roguelike 课程：七步搭出可玩原型",
      "summary": "一篇 Godot 4 入门课程用七个步骤搭建俯视角 Roguelike：新建项目与主场景、设计角色与移动、制作房间模板、程序化生成关卡、加入战斗机制，并给出常见错误排查，约 30 分钟可完成。",
      "image": "",
      "source": "ersinyildiz 技术博客（教程，一手）",
      "date": "2026-11-16",
      "url": "https://ersinyildiz.com/en/blog/godot-4-roguelike-course-build-a-complete-top-down-action-game-en-2026",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Godot 4",
        "GDScript",
        "Roguelike",
        "入门"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "七步搭建俯视角 Roguelike 原型",
            "涵盖角色移动、房间模板与程序化关卡生成",
            "加入战斗机制并给出常见错误排查",
            "面向有基础 GDScript 认识的初学者"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "以一个能跑起来的小原型为目标，比零散学 API 更有效——「先做出一个循环」始终是学引擎最好的路径。"
        }
      ]
    },
    {
      "id": "tu-voxel",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "程序化生成·体素",
      "tag": "程序化生成",
      "title": "从噪声地形到无限宇宙：Unity 体素世界的技术路径",
      "summary": "一篇技术长文拆解 Unity 体素世界的完整实现：从噪声地形、区块（Chunk）网格生成与并行优化，到状态管理（光照/湿度/温度作为着色器输入）、玩家编辑方块与序列化持久化，再延伸到球面星球、生态链与太空场景。",
      "image": "",
      "source": "SheratonHQ（技术教程，一手）",
      "date": "2026-11-16",
      "url": "http://www.sheratonhq.com/news/56536",
      "readTime": "8 分钟",
      "hotScore": 85,
      "tags": [
        "体素",
        "程序化生成",
        "Unity",
        "Chunk"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "噪声地形 + Chunk 网格生成与并行优化",
            "方块存储光照/湿度/温度作为着色器输入",
            "射线检测编辑方块、标记脏区块并重新生成网格",
            "延伸到球面星球、生态规则与太空生成"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "体素世界的难点从来不是「画方块」，而是分块、网格合并与状态管理——把大问题拆成可迭代的模块，是程序化生成的核心方法论。"
        }
      ]
    },
    {
      "id": "ai-rein",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "开源模型·NPC",
      "tag": "Rein-NPC-4B",
      "title": "Rein-NPC-4B：会「做事」的开源 NPC 模型，4B 参数可本地跑",
      "summary": "Hugging Face 用户 jmc0 于 11 月 9 日放出 Rein-NPC-4B 开源权重，基于 Qwen3.5-4B 微调、Apache-2.0 许可，Q4_K_M 约需 3.4GB 显存。模型通过新增 64 个决策 token 实现「先决策再回复」的两段式调用，10 个测试角色、每角 80 轮中正确执行动作达 96%。",
      "image": "https://pub-4552ab4b36fa4e0889188dd998a66596.r2.dev/rein-npc-4b-open-npc-model-tools-character-lock-cover.jpg",
      "source": "Hugging Face / ArtRealmAI（一手模型卡转述）",
      "date": "2026-11-16",
      "url": "https://artrealmai.com/article/rein-npc-4b-open-npc-model-tools-character-lock",
      "readTime": "7 分钟",
      "hotScore": 93,
      "tags": [
        "Rein-NPC-4B",
        "开源模型",
        "NPC",
        "Qwen"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "基于 Qwen3.5-4B 微调，Apache-2.0，Q4_K_M 约 3.4GB 显存",
            "新增 64 个决策 token，实现「决策 + 回复」两段式调用",
            "10 角色×80 轮测试动作正确率 96%（基座 42%）",
            "可用 llama.cpp / vLLM / Transformers 等运行，无需为新角色训练"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "只训练新增 token 的 embedding、不动原权重——这种极轻量的改造思路，让小团队也能用开源基座做出「有行为约束」的 NPC。"
        }
      ]
    },
    {
      "id": "ai-mindsand",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "开源插件·NPC",
      "tag": "MindSand",
      "title": "高通开源 MindSand：让 LLM 小队听懂语音指令并生成行动",
      "summary": "Snapdragon Game Studios 于 11 月 10 日在 GitHub 开源 MindSand v1.0.0（BSD-3-Clause-Clear），这是 UE 5.6+ 的行为引擎插件：把队员状态、感知与世界上下文打包给 LLM，模型输出计划再解析成普通 UGameplayTask。支持云端 HTTP 与骁龙端侧 Genie SDK 两种后端。",
      "image": "https://pub-4552ab4b36fa4e0889188dd998a66596.r2.dev/qualcomm-mindsand-open-source-llm-npc-teammates-unreal-cover.jpg",
      "source": "GitHub / ArtRealmAI（一手转述）",
      "date": "2026-11-16",
      "url": "https://artrealmai.com/article/qualcomm-mindsand-open-source-llm-npc-teammates-unreal",
      "readTime": "7 分钟",
      "hotScore": 92,
      "tags": [
        "MindSand",
        "高通",
        "Unreal",
        "LLM NPC"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "UE 5.6+ 行为引擎插件，BSD-3-Clause-Clear 开源",
            "把队员状态/感知/世界上下文打包给 LLM，输出计划",
            "计划解析为普通 UGameplayTask，行动由数据资产定义",
            "云端 HTTP 与骁龙端侧 Genie SDK 双后端"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "让 LLM 只负责「决定做什么」、真正的移动战斗仍交给引擎原有系统——这种职责边界，正是 AI NPC 从演示走向可控的关键。"
        }
      ]
    },
    {
      "id": "ai-tryll",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "中间件·NPC",
      "tag": "Tryll Engine",
      "title": "Tryll Engine 开放免费公测：模型与语音全跑在玩家 GPU 上",
      "summary": "Tryll Engine 于 11 月 10 日结束 21 家工作室封测后进入免费公测，是面向 Unity 6.3+ 与 UE 5.7/5.8 的中间件：语言模型、语音识别与合成都在玩家 GPU 本地运行，无需服务器与按 token 付费，0.10.0 是首个宣称可发布版本。",
      "image": "https://vibestackweekly.com/og-image.png",
      "source": "Tryll 官方下载页 / VibeStack Weekly（一手转述）",
      "date": "2026-11-16",
      "url": "https://vibestackweekly.com/ai-npc-dialogue-tools",
      "readTime": "6 分钟",
      "hotScore": 91,
      "tags": [
        "Tryll Engine",
        "端侧 AI",
        "NPC",
        "Unity/Unreal"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "11 月 10 日进入免费公测，此前有 21 家工作室封测",
            "面向 Unity 6.3+ 与 UE 5.7/5.8（UE 5.9 预览未列入）",
            "模型、STT、TTS 全在玩家 GPU 本地运行",
            "0.10.0 为首个宣称可发布的版本；玩家端暂限 Windows PC"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把推理成本从「按 token 付费」转成「玩家硬件成本」，为中团队打开了新思路——但要记得在最低配置机器上实测，别让端侧 AI 变成劝退门槛。"
        }
      ]
    },
    {
      "id": "ai-chatforce",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "工具综述·盘点",
      "tag": "AI 工具",
      "title": "83 款 AI 游戏制作工具横评更新：按用途而非热度分类",
      "summary": "Chatforce 于 11 月 9 日更新其 AI 游戏制作工具对比，覆盖 83 款工具，逐站核对官方页面而非媒体转述。盘点涵盖 NPC 对话、世界模型（Genie 3、Microsoft Muse、World Labs Marble）与语音工具，并明确区分「研究原型」与「可发布工具」。",
      "image": "https://chatforce.com/assets/branding/og-image.png?v=20260820",
      "source": "Chatforce（工具盘点，一手核对）",
      "date": "2026-11-16",
      "url": "https://chatforceai.com/blog/best-ai-game-makers-compared",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "AI 工具",
        "世界模型",
        "NPC",
        "横评"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "覆盖 83 款工具，11 月 9 日更新",
            "逐工具核对官方页面并记录定价与用途",
            "区分实时对话 NPC 与预生成台词两类方案",
            "世界模型（Genie 3/Muse/Marble）标注为研究或早期阶段"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「研究原型」和「可上线工具」明确分开，是这份盘点的最大价值——选型时最容易踩的坑，就是把炫目 demo 当成可交付方案。"
        }
      ]
    },
    {
      "id": "ai-cdpr-voice",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "行业争议·配音",
      "tag": "CDPR",
      "title": "CDPR 用 AI 修改《巫师 3》杰洛特原波兰配音引争议",
      "summary": "GamesIndustry.biz 报道，CD Projekt Red 在《巫师 3：过去之歌》中使用 AI 改动了杰洛特原波兰语配音演员的声音。事件把一个老问题重新推上台面：AI 处理既有表演素材时，演员权益与授权边界该如何界定。",
      "image": "https://assetsio.gnwcdn.com/witcher-3_dtDke18.webp?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（行业报道，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/cd-projekt-red-used-ai-to-alter-the-voice-of-geralts-original-polish-actor-in-witcher-3-songs-of-the-past",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "CDPR",
        "AI 配音",
        "演员权益"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "CDPR 用 AI 改动杰洛特原波兰配音演员的声音",
            "用于《巫师 3：过去之歌》相关内容",
            "重新引发 AI 处理表演素材的授权争议",
            "与近期演员权益协议讨论形成呼应"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "技术能做到不等于可以直接用——涉及真人表演的 AI 处理，授权与署名是必须先厘清的前提，这也是团队使用 AI 工具时的合规底线。"
        }
      ]
    },
    {
      "id": "ai-wild",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "行业观察·AI",
      "tag": "AI 复制品",
      "title": "投资人视角：AI 复制品激增正加剧新作「可发现性危机」",
      "summary": "GamesIndustry.biz 的一组投资人/发行商观点指出，AI 让复制品与换皮作品大量涌现，叠加平台曝光拥挤，新作的可发现性危机正在恶化。文章把 AI 争议从生产端推向了发行与曝光端。",
      "image": "https://assetsio.gnwcdn.com/pexels-icon0-1214270.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（行业观点，一手）",
      "date": "2026-11-16",
      "url": "https://www.gamesindustry.biz/its-a-wild-situation-an-investor-and-publisher-perspective-on-the-rise-of-ai-copycats-the-discoverability-crisis-and-more",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "AI 复制品",
        "可发现性",
        "发行"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "投资人/发行商视角讨论 AI 复制品激增",
            "平台曝光拥挤叠加仿制泛滥，加剧可发现性危机",
            "AI 争议从生产端延伸到发行端",
            "强调创意身份与市场辨识度的重要性"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "当供给被 AI 放大，「被看见」比「被做出来」更稀缺——独立开发者需要把社区与品牌当作和玩法同等重要的资产来经营。"
        }
      ]
    },
    {
      "id": "co-gameoff",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·GameJam",
      "tag": "Game Off 2026",
      "title": "GitHub Game Off 2026 主题 SHIFT，12 月 1 日截止投稿",
      "summary": "GitHub 第 14 届 Game Off 以 SHIFT 为主题，投稿截止 12 月 1 日 13:37 PST。作品须有公开 GitHub 仓库并在 itch.io 单独提交，允许使用 AI 工具但须披露。社区投票 2027 年 1 月 1 日结束，设总体、玩法、画面、音效、创新与主题诠释六项奖。",
      "image": "https://lumienai.com/media/2026/11/news-cover-github-game-off-2026-theme-shift-deadline.webp",
      "source": "GitHub 官方公告 / Lumien AI（一手转述）",
      "date": "2026-11-16",
      "url": "https://lumienai.com/news/github-game-off-2026-theme-shift-deadline",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Game Off 2026",
        "Game Jam",
        "GitHub",
        "SHIFT"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "第 14 届 Game Off 主题为 SHIFT，12 月 1 日 13:37 PST 截止",
            "须有公开 GitHub 仓库，并在 itch.io 另行提交",
            "允许 AI 辅助但提交时须披露使用方式",
            "社区投票 2027 年 1 月 1 日结束，六个评奖类别"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "SHIFT 是足够宽的主题，从换挡、位移到位运算都能切——对想练习「一个机制、一个可玩关卡」的同学，这是年末最合适的练手机会。"
        }
      ]
    },
    {
      "id": "co-viverse",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·高校",
      "tag": "VIVERSE Spark",
      "title": "VIVERSE Spark 2026 全球高校黑客松：11/9–12/4 报名中",
      "summary": "HTC 旗下 VIVERSE 全球高校黑客松 Spark 2026 于 11 月 9 日至 12 月 4 日举行，面向全球大学生，设游戏、沉浸式叙事、社交体验三类，支持 Unity WebGL、Godot、Three.js、Babylon.js 等 WebXR 引擎，设现金奖励，2027 年 1 月初公布获奖。",
      "image": "",
      "source": "HTC VIVERSE 官方公告 / 中央社（一手转述）",
      "date": "2026-11-16",
      "url": "https://www.bernama.com/en/general/news.php?id=2632833",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "VIVERSE Spark",
        "高校黑客松",
        "WebXR",
        "现金奖"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "赛期 11 月 9 日至 12 月 4 日，面向全球大学生",
            "三类：游戏、沉浸式叙事、社交体验",
            "支持 Unity WebGL、Godot、Three.js、Babylon.js 等 WebXR 引擎",
            "12 月 7–18 日评审，2027 年 1 月初公布结果"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "用浏览器就能发布、无需安装，这类 WebXR 赛事对设备门槛友好的同时，也给作品带来了全球可访问的展示面。"
        }
      ]
    },
    {
      "id": "co-leihuo",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易雷火",
      "title": "网易游戏雷火 2027 届秋招全球开启，研发设计岗约 500 人",
      "summary": "网易游戏雷火 2027 届秋季校园招聘全球开启，研发设计类岗位约 500 人，面向计算机、电子信息、设计学等专业，工作地杭州。团队代表作包括《逆水寒》《永劫无间》《无限大》等项目。",
      "image": "",
      "source": "网易雷火官方 / 高校就业平台（一手转述）",
      "date": "2026-11-16",
      "url": "https://www.91wllm.cn/job/view/id/2385382/from_type/4/from_id/1001744",
      "readTime": "4 分钟",
      "hotScore": 85,
      "tags": [
        "网易雷火",
        "2027 校招",
        "游戏研发",
        "杭州"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "雷火 2027 届秋招全球开启，研发设计类约 500 人",
            "面向计算机、电子信息、中文、设计学等专业",
            "工作地为杭州，11 月 6 日更新",
            "代表作含《逆水寒》《永劫无间》《无限大》"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "校招信息要看岗位与项目匹配度——把「想做的技术方向」和团队在研项目对上，比广撒网更有效。"
        }
      ]
    },
    {
      "id": "co-netease-huyu",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易互娱",
      "title": "网易游戏（互娱）2027 届校招进行中，引擎/图形岗 HC 充足",
      "summary": "网易游戏（互娱）2027 届校招火热进行中，游戏引擎研发、图形开发、技术美术（PCG 向）等岗位 HC 充足，客户端/服务端研发、AI Agent 工程师等也在招聘，面向 2027 届毕业生，广州/杭州/上海多地可选。",
      "image": "",
      "source": "网易互娱官方 / 高校就业网（一手转述）",
      "date": "2026-11-16",
      "url": "https://jy.cumtb.edu.cn/Zhaopin/xiaozhao.html?type=1&id=f6360077-e6d9-656c-3113-a6064d02392f",
      "readTime": "4 分钟",
      "hotScore": 84,
      "tags": [
        "网易互娱",
        "2027 校招",
        "引擎研发",
        "图形开发"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "游戏引擎研发、图形开发、技术美术（PCG 向）HC 充足",
            "客户端/服务端研发、AI Agent 工程师等同步招聘",
            "面向 2027 届毕业生，广州/杭州/上海多 base",
            "代表作含《蛋仔派对》《燕云十六声》《漫威争锋》"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "引擎与图形岗集中放出 HC，说明技术向岗位仍是争夺重点——想把图形学基础用在实战上的同学，这是值得关注的窗口。"
        }
      ]
    }
  ]
};
