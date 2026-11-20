window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-20",
    "weekday": "星期五",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-20 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：育碧裁 166 人同日成立生成式 AI 工作室 Motherbrain（hero）",
      "引擎精读：UE 5.9 网页导出实测限制、Godot 4.8 beta 3 交 74 项修复、Unity 7 亮出 ECS for All",
      "开源宝库：Bevy 逼近 5 万星、Fyrox 自带编辑器、Phaser 4 内置 AI Agent Skills",
      "AI 前沿：ComfyUI 0.45.0 加 UltraTex、Gemini 4 Carbon 公开多代理协作、World Labs Atlas 开放",
      "游戏动态：时空悍匪/Mercyrail 今日抢先体验，Krafton 十赴 G-Star",
      "竞赛招聘：GGJ Next 2027 开放（1 万美元奖学金）、英雄游戏与网易互娱 27 届校招"
    ],
    "engineStatus": [
      {
        "name": "Unreal 5.9",
        "type": "unreal",
        "status": "Preview 2·代理化",
        "badge": "预览",
        "color": "violet"
      },
      {
        "name": "Godot 4.8",
        "type": "godot",
        "status": "beta 3·74 修复",
        "badge": "4.8b3",
        "color": "teal"
      },
      {
        "name": "Unity 7",
        "type": "unity",
        "status": "ECS for All",
        "badge": "路线",
        "color": "cyan"
      },
      {
        "name": "Bevy 0.20.1",
        "type": "native",
        "status": "ECS·Rust",
        "badge": "OSS",
        "color": "blue"
      },
      {
        "name": "Gemini 4 Carbon",
        "type": "ai",
        "status": "公开·swarm",
        "badge": "AI",
        "color": "orange"
      },
      {
        "name": "Atlas",
        "type": "ai",
        "status": "世界模型开放",
        "badge": "3D",
        "color": "green"
      }
    ]
  },
  "hero": {
    "id": "hero-ubisoft-motherbrain",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "育碧·生成式AI",
    "subcategory": "行业·裁员转型",
    "title": "育碧一天之内裁掉 166 人，又宣布成立生成式 AI 工作室",
    "summary": "育碧 11 月 19 日确认在蒙特利尔与魁北克城裁减 166 个岗位，主要涉及生产与支持岗、占两工作室总人数不到 4%，含腾讯合资 Vantage Studios 的部分员工；4 至 9 月公司已累计减员约 1100 人。同一天，育碧宣布成立聚焦玩法机制的生成式 AI 子公司 Motherbrain，其团队曾做出首个可玩的生成式 AI 体验 Teammates。一边压缩人力、一边加码 AI，这两件事被放在同一天公布，很难说是巧合。把 AI 当作增效工具还是人力替代，育碧已经用动作给出了自己的答案，而行业里近三分之一从业者过去两年失去工作、超半数对生成式 AI 影响持负面看法——这笔账，最终要由每一名开发者在自己的技能选择里偿还。",
    "image": "https://quarterstack.online/wp-content/uploads/2026/11/ubisoft-cuts-166-jobs-montreal-quebec-city-studios.webp",
    "source": "QuarterStack（综合 GamesIndustry.biz 等报道）",
    "date": "2026-11-20",
    "url": "https://quarterstack.online/industry-business/ubisoft-cuts-166-jobs-montreal-quebec-city-studios",
    "readTime": "7 分钟",
    "hotScore": 96,
    "tags": [
      "育碧",
      "Motherbrain",
      "裁员",
      "生成式AI"
    ],
    "content": [
      {
        "title": "事件脉络",
        "type": "list",
        "items": [
          "11 月 19 日育碧确认裁减 166 个岗位，集中在蒙特利尔与魁北克城",
          "主要涉及生产与支持岗，占两工作室总人数不到 4%",
          "含腾讯合资 Vantage Studios 员工，涉及被取消或大改项目",
          "同日成立生成式 AI 子公司 Motherbrain，主打玩法机制 AI",
          "4 至 9 月育碧已累计减员约 1100 人"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "GDC 调查显示三分之一从业者两年内失业、55% 认为生成式 AI 带来负面影响，这组数字与育碧的裁员同频。与其在情绪里站队，不如尽早把可验证的 AI 辅助流程纳入技能栈——行业转向不会等任何人准备好，而能被验证的能力，才是应对不确定性的硬通货。"
      }
    ]
  },
  "items": [
    {
      "id": "en-ue59-web",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·虚幻",
      "tag": "UE 5.9",
      "title": "UE 5.9 把网页导出重写了一遍，但小团队先别急着扔掉原生平台",
      "summary": "Epic 在 11 月 9 日放出的 UE 5.9 MegaJam 预览版重新加入浏览器目标，底层是 WebAssembly 加 WebGPU，走移动渲染器。官方已知问题清单写明：itch.io 拒收超过 500 MB 的整包或 200 MB 的单文件，Lyra 样例与 Development 构建双双超标，Wasm 构建内存越过 2 GB 会崩溃。Blueprint-only 项目暂时用不了，Mac/Linux 还要自己编译。方向是对的，但离「一键发布到网页」还差一次专门的瘦身重构。",
      "image": "https://indietooling.com/_astro/unreal-5-9-preview-web-export.F_1JEJ4N_1ub1T6.jpg",
      "source": "Indie Tooling（基于 Epic 官方公告）",
      "date": "2026-11-20",
      "url": "https://indietooling.com/posts/unreal-5-9-preview-web-export",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "Unreal Engine",
        "WebGPU",
        "WebAssembly",
        "itch.io"
      ],
      "content": [
        {
          "title": "关键限制",
          "type": "list",
          "items": [
            "Web 目标走 WebAssembly + WebGPU，使用移动渲染器",
            "itch.io 限制：整包≤500 MB、单文件≤200 MB，Lyra/Development 构建超标",
            "Wasm 内存越过 2 GB 会崩溃（UE-411671）",
            "Blueprint-only 项目暂不支持，需要 C++ 源码构建",
            "刷新后存档与设置丢失（UE-412003），需给 Page Args 加 -project 参数"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "想蹭浏览器分发红利的小团队，可以先把「包体瘦身」当成独立课题：用 ASTC 代替 BC/DXT、关掉 Bink 视频、保持单线程。网页导出是渠道之争的关键落子，但真正决定能不能上线的，是这些不性感却绕不开的体积数字。"
        }
      ]
    },
    {
      "id": "en-ue59-divide",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·虚幻",
      "tag": "UE 5.9",
      "title": "Epic 用「一群代理」造出 UE 5.9，开发者却在评论区吵翻了",
      "summary": "UE 5.9 预览版是 Epic 首个主要靠 agentic 工作流构建的引擎版本：几个人指挥代理集群，把 AI 工具从 UE6 分支移植过来、把 UE4 退役的 HTML5 平台改造成 Web 目标，约一周完成、QA 周期短于常规。社区反应两极：有人宣布继续留在 5.8，理由是代理写的代码还要清理、3D 模型生成越了界；也有人欢迎「不强制在编辑器里用代理」的集成方式。把构建过程本身当实验值得肯定，但「预览版」三个字就是最好的风险提示。",
      "image": "https://cdn.mos.cms.futurecdn.net/G8ruCeku9ULXiWuMLjkVNB-1920-80.jpg",
      "source": "Creative Bloq（基于 Epic 官方公告）",
      "date": "2026-11-20",
      "url": "https://www.creativebloq.com/news/unreal-engine-5-9-divides-game-devs-with-an-ai-heavy-update",
      "readTime": "6 分钟",
      "hotScore": 91,
      "tags": [
        "Unreal Engine",
        "AI 代理",
        "社区争议"
      ],
      "content": [
        {
          "title": "争议焦点",
          "type": "list",
          "items": [
            "首个主要由 agentic 工作流构建的 UE 版本，约一周完成",
            "Unreal MCP / Assistant / Canvas 均标注 Experimental",
            "代理写的代码仍在清理，Web 渲染器部分是原型",
            "部分开发者表态留在 5.8，反对资源生成类功能"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "判断一个引擎版本能不能进生产，看的不是演示有多炫，而是官方敢不敢标注「实验性」。把代理当加速器而非正确性来源，先在项目副本里试、把改动逐个审，才是这波工作流该有的打开方式。"
        }
      ]
    },
    {
      "id": "en-godot48b3",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Godot",
      "tag": "Godot 4.8",
      "title": "Godot 4.8 beta 3 交出 74 项修复，RC 已在眼前",
      "summary": "Godot 团队发布 4.8 beta 3：51 位贡献者累计 74 项修复，多数是 beta 2 之后的回归问题——修正了 Sprite2D 空纹理报错、CommandQueueMT 多线程刷新竞态、失焦保存重建已删场景、TabContainer 选错标签页等。VisualShader 输出节点新增灯光顶点输入，Web 版 Sample 音频驱动也有多处修复。C# 用户要注意：.NET 构建最低要求从 .NET 8 抬到 .NET 10。以修复为主的收尾快照，信号是功能冻结、只求稳。",
      "image": "https://fosswire.org/og/godot-48-beta-3-brings-74-fixes-as-engine-nears-release-cand.png",
      "source": "FOSSWire（基于 Godot 官方公告）",
      "date": "2026-11-20",
      "url": "https://fosswire.org/news/godot-48-beta-3-brings-74-fixes-as-engine-nears-release-cand",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Godot",
        "beta 3",
        "回归修复",
        ".NET 10"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "51 位贡献者、74 项修复，主要处理 beta 2 以来的回归",
            "修复多线程物理 CommandQueueMT 竞态与鼠标覆盖手柄输入",
            "VisualShader 输出节点新增灯光顶点输入",
            ".NET 构建最低版本从 .NET 8 提升到 .NET 10",
            "仍是预发布版，官方建议频繁备份或用版本控制"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "4.8 完整版被外界预期为近几年最大的一次功能更新——mipmap 纹理流式加载、屏幕空间接触阴影、EditorDocks 自由浮动。现在这个以修复为主的 beta 3，正是把老项目提前拉出来跑一遍回归测试的最佳窗口。"
        }
      ]
    },
    {
      "id": "en-unity7",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Unity",
      "tag": "Unity 7",
      "title": "Unite 东京把 Unity 7 的家底摊开：ECS for All 与图形后端 UGK 是主角",
      "summary": "Unity 在 Unite Tokyo 2026 回顾演讲里给出 7.0 的技术路线：ECS for All 让每个 GameObject 同时是实体，5000 艘飞船的演示里 ECS 版帧率稳定而传统版随数量变慢；新样本场景 Atrio 展示 URP 的表面缓存 GI，无需烘焙、全分辨率 60 FPS；神经纹理压缩把纹理内存压低近 30%，作为 6.7 LTS 实验功能、计划在 7 全面铺开；新图形后端 UGK 基于 DirectX 12、Vulkan、Metal，开启光追后 GPU 性能提升超 62%。",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/c434ae876ad1d579e55874528c20ba43bbe9545d-1920x1080.png",
      "source": "Unity 官方博客",
      "date": "2026-11-20",
      "url": "https://unity.com/cn/blog/unite-tokyo-2026-keynote-recap",
      "readTime": "8 分钟",
      "hotScore": 92,
      "tags": [
        "Unity 7",
        "ECS",
        "UGK",
        "神经纹理压缩"
      ],
      "content": [
        {
          "title": "技术要点",
          "type": "list",
          "items": [
            "ECS for All：GameObject 即实体，5000 飞船演示中帧率稳定",
            "Atrio 样本：URP 表面缓存 GI，免烘焙、全分辨率 60 FPS",
            "神经纹理压缩：纹理内存减少近 30%，6.7 LTS 实验、7.0 全面发布",
            "UGK 图形后端：基于 DX12/Vulkan/Metal，光追场景 GPU 性能 +62%",
            "官方提供 Claude / Codex / Antigravity / Grok 插件"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Unity 这一代把赌注压在「底层性能红利 + AI 工具链」上。与其追新特性，不如先理解 ECS 的数据布局思维——它是这波性能提升的公共底座，也是从 Unity 6 迁移到 7 绕不开的一课。"
        }
      ]
    },
    {
      "id": "en-ue59-preview2",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·虚幻",
      "tag": "UE 5.9",
      "title": "UE 5.9 Preview 2 放出：MCP 随编辑器自启，工具集铺到渲染与关卡",
      "summary": "Epic 在开发者论坛发布 UE 5.9 Preview 2，可从启动器、GitHub 或 Linux 包获取。相比 Preview 1，Unreal MCP 现在随编辑器自动启动、连接更稳定，工具集扩展到渲染、源码管理、性能分析、调试、玩法测试、几何、音频、UI 与关卡创建；新增 Lore 集成管理项目变更与源码流程，Fab 工具集可搜索目录、浏览库并直接安装资产。Python API 覆盖音频、MetaSounds、建模、物理、Niagara、材质、PCG、网络与 UI。",
      "image": "",
      "source": "Epic 开发者社区论坛",
      "date": "2026-11-20",
      "url": "https://forums.unrealengine.com/t/preview-2-unreal-engine-5-9-preview/2852840",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Unreal Engine",
        "Unreal MCP",
        "Python API"
      ],
      "content": [
        {
          "title": "更新要点",
          "type": "list",
          "items": [
            "MCP 随编辑器自启、连接更稳定，工具集覆盖渲染/源码/调试/关卡",
            "Lore 集成管理项目变更与源码控制流程",
            "Fab 工具集支持搜索目录、浏览库、安装免费或付费资产",
            "Python API 覆盖音频、Niagara、材质、PCG、网络与 UI"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "工具集越开放，越考验工程纪律。把代理对编辑器的操作当成一次代码评审——先看权限级别，再看它改了什么，最后在场景里跑一遍——比盲目相信「自动完成」可靠得多。"
        }
      ]
    },
    {
      "id": "en-godot-doc",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Godot",
      "tag": "Godot 文档",
      "title": "Godot 官方文档把「从零到第一个游戏」拆成了一串可勾选的台阶",
      "summary": "Godot 稳定版文档的 Step by step 系列，把入门路径编排成一条清晰动线：先认识节点与场景，用 GDScript 写第一个类，再用信号让节点之间通信，随后自然过渡到「你的第一个 2D 游戏」完整教程。每个概念页都挂了深入主题的链接，适合边做边查。文档还按读者水平分层——没做过游戏、会做但不会用 Godot、会用想进阶、想参与贡献——各自有入口。",
      "image": "",
      "source": "Godot 官方文档",
      "date": "2026-11-20",
      "url": "https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html",
      "readTime": "5 分钟",
      "hotScore": 78,
      "tags": [
        "Godot",
        "GDScript",
        "官方文档",
        "入门路径"
      ],
      "content": [
        {
          "title": "路径结构",
          "type": "list",
          "items": [
            "节点与场景 → 创建实例 → 脚本语言 → 第一个脚本 → 玩家输入 → 信号",
            "完成后衔接「Your first 2D game」完整实战",
            "按读者水平分四层入口，零基础也能找到起点"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "好教程的价值不在讲得多深，而在把「下一步」永远放得很近。Godot 文档这种台阶式结构，值得任何想做教学内容的团队抄作业。"
        }
      ]
    },
    {
      "id": "in-ubisoft",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·财报",
      "tag": "育碧",
      "title": "育碧财报露出裂痕：销售涨 16.8%，净预订却跌 20.8%",
      "summary": "在宣布裁员 166 人的同一季度，育碧财报显示销售额同比增长 16.8%，但净预订额下滑 20.8%，公司称新运营模式已全面就位、降本计划进展顺利，并强调《刺客信条：黑旗 重制》表现超预期。CEO 伊夫·吉约在电话会上称未来两个财年有涵盖刺客信条、幽灵行动、孤岛惊魂的庞大产品管线，但仍未给出具体发售日；公司还在竞购微软旗下的 Arkane。财报与裁员同日发布，销售增长与预订下滑的背离，比裁员数字本身更值得琢磨。",
      "image": "https://skyline.hi-rise.media/images/9QkaqKXvNPG3",
      "source": "Hit Crit（综合育碧季度财报）",
      "date": "2026-11-20",
      "url": "https://www.hitcrit.com/game-news/ubisoft-continues-layoffs-cuts-over-150-more-employees-amidst-shifting-priorities-240548",
      "readTime": "6 分钟",
      "hotScore": 93,
      "tags": [
        "育碧",
        "季度财报",
        "净预订",
        "产品管线"
      ],
      "content": [
        {
          "title": "财报要点",
          "type": "list",
          "items": [
            "销售额同比 +16.8%，净预订额同比 -20.8%",
            "公司称新运营模式已全面就位、降本计划按计划推进",
            "《刺客信条：黑旗 重制》被称表现超预期，但未给具体数字",
            "CEO 称未来两财年有刺客信条/幽灵行动/孤岛惊魂等大作管线",
            "育碧仍在竞购微软旗下 Arkane 工作室"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "销售涨、预订跌的背离，说明收入确认与现金流之间存在时间差，也解释了为什么裁员和「管线强大」的说法能同时出现。读财报时把净预订这种前瞻指标和营收分开看，比只看涨跌更能判断一家公司的真实健康度。"
        }
      ]
    },
    {
      "id": "in-tencent-q3",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·财报赛事",
      "tag": "腾讯/灵游坊",
      "title": "腾讯本土游戏收入涨 11%，《影之刃零》拿下 TGA 五项提名",
      "summary": "腾讯 11 月 18 日发布三季报：网络游戏业务总收入 665 亿元、同比增 5%，本土市场收入 476 亿元、同比增 11%，多款长青游戏日活创历史新高。同日 TGA 公布 2026 提名名单，北京灵游坊的《影之刃零》获得年度最佳游戏、最佳游戏指导、最佳配乐、最佳艺术指导、最佳动作游戏五项提名，超过上一款入围的中国产品《黑神话：悟空》的 4 项。收入稳增与国产 3A 站上国际舞台，是同一周里两条相互印证的线。",
      "image": "https://inews.gtimg.com/om_ls/On4hYpZj9Ge3SlorFblrConx1HGH-hXlKd38iqDVfNEmEAA_330330/0",
      "source": "腾讯新闻·每日经济新闻",
      "date": "2026-11-20",
      "url": "https://news.qq.com/rain/a/20261119A0738J00",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "腾讯",
        "影之刃零",
        "TGA",
        "财报"
      ],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": [
            "腾讯三季度网游收入 665 亿元、同比 +5%，本土 476 亿元、同比 +11%",
            "多款长青产品日活创历史新高",
            "《影之刃零》获 TGA 五项提名，含年度游戏与最佳动作游戏",
            "超越《黑神话：悟空》当年的 4 项提名纪录"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "长青产品日活新高说明产品矩阵打法有效，而《影之刃零》的提名给了国产团队一个国际定价参照。但提名只是过程而非结果——能否转化为销量与口碑，才是这波关注度的真正考题。"
        }
      ]
    },
    {
      "id": "in-krafton",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·产品布局",
      "tag": "Krafton",
      "title": "FPS 之外找增长：Krafton 一次亮出两款 2027 新作",
      "summary": "Krafton 在首尔发布会上公开两款计划明年发售的新作，并在 11 月 19 日开幕的 G-Star 2026 提供试玩：Boundary 开发的《Tare: Unbound》是取材东亚 15 至 17 世纪、融合轮回观念的斜俯视角动作 RPG，打怪刷装、类暗黑破坏神；Piccolo Studio 开发的《Age Twister》是双人合作冒险，爷孙可在童年、少年、青年、老年四段年龄间切换，不同年龄有不同能力。Krafton 三季度营业利润同比降 35.5%，收入高度依赖 PUBG。利用既有发行能力孵化差异化品类，是当前最现实的解法。",
      "image": "https://djf7qc4xvps5h.cloudfront.net/resource/magazine/image/2ea74eda-d82c-4d93-a9a1-9622b5075f1b_512.webp",
      "source": "朝鲜日报 Biz（基于 Krafton 发布会）",
      "date": "2026-11-20",
      "url": "https://biz.chosun.com/en/en-it/2026/11/19/DO5Q7E47LNEVDCMWDIYGKBZZQQ/",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "Krafton",
        "G-Star 2026",
        "动作RPG",
        "合作游戏"
      ],
      "content": [
        {
          "title": "产品要点",
          "type": "list",
          "items": [
            "《Tare: Unbound》：东亚暗黑幻想动作 RPG，斜俯视角砍杀刷装",
            "《Age Twister》：双人合作，四段年龄切换带来不同解谜能力",
            "两作均计划 2027 年发售，G-Star 现场可试玩",
            "Krafton 三季度营业利润同比降 35.5%，PC 收入降 32.5%"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "当一家公司 80% 的现金流压在一个 IP 上，孵化新品就不是选择题而是生存题。两款新作都不碰射击、主打「文化题材 + 合作体验」，这种主动避开主场的操作，反而比硬刚竞品更值得中小团队借鉴。"
        }
      ]
    },
    {
      "id": "in-unity-q3",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·财报",
      "tag": "Unity",
      "title": "Unity 靠广告网络交出史上最强三季度，也第一次实现了 GAAP 盈利",
      "summary": "Unity 公布截至 11 月的三季度财报：营收 6.22 亿美元、同比增 32%，为 2020 年上市以来首个 GAAP 盈利季度，净利润 1.22 亿美元、利润率 20%。增长引擎是 AI 驱动的广告网络 Vector，同比激增 126%，带动 Grow Solutions 收入增 44% 至 4.57 亿美元；Create Solutions 增 8% 至 1.65 亿美元。战略收入增 59% 至 5.97 亿美元，非战略部分（IronSource 与 Supersonic）降 73%。盈利来自广告而非引擎销售，这个结构值得每个用 Unity 的团队读懂。",
      "image": "https://assetsio.gnwcdn.com/Unity-00.png?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz",
      "date": "2026-11-20",
      "url": "https://gamesindustry.biz/unity-reports-strongest-ever-q3-results-driven-by-its-ai-powered-ad-network-vector",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Unity",
        "财报",
        "Vector",
        "广告网络"
      ],
      "content": [
        {
          "title": "财报要点",
          "type": "list",
          "items": [
            "营收 6.22 亿美元、同比 +32%，上市以来首次 GAAP 盈利",
            "净利润 1.22 亿美元，利润率 20%",
            "AI 广告网络 Vector 同比 +126%，Grow Solutions 收入 +44%",
            "Create Solutions +8%，战略收入 +59%、非战略收入 -73%"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Unity 的盈利拐点来自广告变现而非引擎授权，这决定了它未来的产品重心在哪。开发者读财报不该只看涨跌，而要看钱从哪来——它往往预告了下一季度的功能优先级。"
        }
      ]
    },
    {
      "id": "in-unity-acquire",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购传闻",
      "tag": "Unity",
      "title": "Unity 传出约 250 亿美元收购谈判，买家是 EA 的同一批人",
      "summary": "据路透社报道，投资财团在财报发布前讨论过以约 250 亿美元估值收购 Unity，公司正与投行评估选项，潜在买方包括私募巨头 Silver Lake 与沙特公共投资基金 PIF——这两家此前参与了 550 亿美元收购 EA 的交易。三季报发布后 Unity 市值约 215 亿美元，盘后股价涨 4%。Silver Lake 早在 2017 年就持有约 8% 股份。交易尚未确定、条款可能变化。对开发者而言，价格是次要问题，融资结构才决定未来的定价与路线图。",
      "image": "",
      "source": "PixelHerald（综合路透社 / GamesIndustry.biz）",
      "date": "2026-11-20",
      "url": "https://pixelherald.com/is-unity-being-acquired-by-silver-lake-and-saudi-arabias-pif-what-we-know",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Unity",
        "并购",
        "Silver Lake",
        "PIF"
      ],
      "content": [
        {
          "title": "已知信息",
          "type": "list",
          "items": [
            "潜在估值约 250 亿美元，高于财报后约 215 亿美元市值",
            "Silver Lake 与 PIF 曾参与 550 亿美元收购 EA",
            "Unity 已聘投行评估，尚未确定交易、条款或生变",
            "Silver Lake 自 2017 年起持有约 8% 股份"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "EA 被同一批买家收购后 BioWare 关闭、约 400 人被裁的先例，是评估这条传闻最现实的参照。真正该盯的是融资杠杆：如果债务压到 Unity 头上，定价和路线图就会成为泄压阀。"
        }
      ]
    },
    {
      "id": "in-unity-synty",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "Unity/Synty",
      "title": "Unity 收购低多边形素材老厂 Synty，把美术资产喂给 AI 平台",
      "summary": "Unity 在 Unite Tokyo 宣布收购新西兰工作室 Synty Studios——POLYGON 低多边形素材包的作者，财务条款未披露。多数团队会加入 Unity，但 Synty 保留品牌与商店，资产继续支持 Unreal、Godot，授权、工作流与商店不变，免费资产仍免费，暂无涨价计划。Synty 自 2014 年以来产出逾 7 万个资产。这些经过美工制作的素材将成为 Unity AI 创作平台 Spark 的原料，Spark 计划年内进入封闭测试。熟悉的素材品牌进了 AI 平台，是资产管理领域一个值得观察的转向。",
      "image": "https://welike.red/api/og/article/unity-acquires-synty-studios-polygon-asset-maker-for-unity-spark?v=179494971",
      "source": "WeLike（综合 GamesIndustry.biz / Game World Observer）",
      "date": "2026-11-20",
      "url": "https://welike.red/news/unity-acquires-synty-studios-polygon-asset-maker-for-unity-spark",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Unity",
        "Synty",
        "POLYGON",
        "Spark"
      ],
      "content": [
        {
          "title": "交易要点",
          "type": "list",
          "items": [
            "Synty 保留品牌与商店，资产继续支持 Unreal、Godot",
            "授权、工作流、商店与价格不变，免费资产仍免费",
            "Synty 累计产出逾 7 万个资产，成立于 2014 年",
            "资产将接入 Unity 的 AI 创作平台 Spark，年内封闭测试"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "对正在用 POLYGON 包的团队，短期没有任何变化，可以放心。真正的变化在下游：当美工制作的资产变成 AI 平台的素材库，素材授权与商业使用的边界，会越来越需要开发者自己擦亮眼睛。"
        }
      ]
    },
    {
      "id": "ga-gtl",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·抢先体验",
      "tag": "时空悍匪",
      "title": "200 个按钮的时光机、抓 NPC 当工人：合作互坑新作今日抢先体验",
      "summary": "REAL PLAYERS 开发的第一人称合作游戏《Grand Theft Timeline》（时空悍匪）11 月 20 日在 Steam 开启抢先体验，售价 68 元，支持 1 至 4 人联机并首发简中。核心是时间旅行：玩家组装时光机、乱按 200 多个无说明的按钮穿梭到 1503 年佛罗伦萨偷《蒙娜丽莎》、2009 年挖比特币，把历史名人抓回笼子持续产出「悖论」资源。首发含 200 余个世界、25 个主题包、超 2000 名可捕获角色。把混乱协作做成核心机制，是这作最聪明的取舍。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4928450/9856eb60fb023ea4c10ed38270e8fbd0159522ed/header.jpg",
      "source": "游侠网 / Steam 商店页",
      "date": "2026-11-20",
      "url": "https://3g.ali213.net/news/html/1055673.html",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "时空悍匪",
        "抢先体验",
        "合作游戏",
        "时间旅行"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 20 日 Steam 抢先体验，售价 68 元，支持 1 至 4 人联机",
            "时光机面板有 200 多个无说明按钮，乱按即可穿梭年代",
            "抓回的历史人物产出「悖论」资源，作时光机燃料",
            "首发 200 余个世界、25 个以上主题包、超 2000 名可捕获角色"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "不给按钮写说明、让队友的误操作把全队送错年代——这种「把混乱变玩法」的设计，比堆画质更能制造社交传播。小团队做合作游戏，机制的可讲性往往比内容量更重要。"
        }
      ]
    },
    {
      "id": "ga-mercyrail",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·生存管理",
      "tag": "Mercyrail",
      "title": "一个人用真实英国铁路网做末日列车游戏，今日进抢先体验",
      "summary": "单人开发者 Nico（Built by Rebels）制作的《Mercyrail: Haven Bound》11 月 20 日在 Steam 抢先体验：英国崩塌一年后，玩家在一台老 CRT 终端上运营最后一列满载火车，从滑铁卢开往传说中的生存地 Haven。地图用 OpenStreetMap 的真实数据，约 2600 个车站、2800 条连接，线路会被道岔故障、洪水、路障阻断。乘客每人都要吃要喝，谁上车谁被拒会被记住。一人开发、真实地图、轻重抉择叠加，是独立游戏以小博大的典型样本。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/371640/528ae67923b475e1de41878881f1fd8db44eeff4/header.jpg",
      "source": "iGame Magazine / Steam 商店页",
      "date": "2026-11-20",
      "url": "https://igamemag.com/mercyrail-haven-bound-release-date",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "Mercyrail",
        "生存管理",
        "OpenStreetMap",
        "独立游戏"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 20 日 Steam 抢先体验，单人开发，预计 EA 约 12 个月",
            "约 2600 个真实英国车站、2800 条连接，源自 OpenStreetMap",
            "一台 CRT 终端完成选线、读档案、派船员、等报告的循环",
            "食物、燃料、药品、水、零件共用一个货舱，抉择会跟着玩家到 Haven"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "用开放地理数据替换手工造图，单人开发者也能撑起一张可信的大地图。这类「把现成公共数据变成玩法骨架」的思路，是预算有限时最划算的杠杆之一。"
        }
      ]
    },
    {
      "id": "ga-dice",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·正式版",
      "tag": "Dice Have No Eyes",
      "title": "两人团队的掷骰 Roguelike 今日告别抢先体验，补上结局",
      "summary": "由 Franek 与 Max Cahill 两人团队（分驻波兰与澳大利亚）开发的《Dice Have No Eyes》11 月 20 日在 Steam 发布 1.0 正式版，售价 9.99 美元。这是一款关于运气与贪婪的掷骰 Roguelike，被形容为 Balatro 式的「高烧梦境」：掷骰得分、决定何时收手，多掷一次就可能爆点清空本轮；关卡间更换骰子、收集饰品与法术改写规则。1.0 新增大结局、Rift 无尽关卡、角色结局、成就排行榜与更多语言。两人小队把一款 EA 打磨到 1.0，节奏控制值得参考。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4535880/1494094c7c0925ec102011179aab34b3f7283e51/header.jpg",
      "source": "How To Video Game / Steam 商店页",
      "date": "2026-11-20",
      "url": "https://howtovideogame.com/dice-have-no-eyes-1-0-release-date",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "Dice Have No Eyes",
        "Roguelike",
        "1.0",
        "独立游戏"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "11 月 20 日发布 1.0，5 月 19 日进入抢先体验，售价 9.99 美元",
            "核心循环：掷骰得分与何时收手的贪婪博弈",
            "1.0 新增大结局、Rift 无尽关、成就与排行榜、更多语言",
            "开发者两人，均参与过奇幻 RPG《Arco》"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「何时停手」这种心理博弈做成核心机制，比复杂系统更容易上手又耐玩。两人团队用半年 EA 迭代到 1.0，证明小体量 Roguelike 依然有稳定的生存空间。"
        }
      ]
    },
    {
      "id": "ga-steamweek",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新游速览",
      "tag": "Steam 新游",
      "title": "本周 Steam 51 款新游扎堆，塔防、自动化、视觉小说各有代表",
      "summary": "GameGrin 盘点 11 月 16 日至 22 日登陆 Steam 的 51 款新游，题材分散：塔防放置类《Swarmbreaker》（11 月 18 日）、自动化沙盒《STEEL GULLET》、策略游戏《Theocracy》（11 月 20 日）、恐怖视觉小说《Resequence: The Orchard》（11 月 20 日）、探索步行模拟《No Visitors Allowed》（11 月 20 日）等。同一周里还有多款作品扎堆 11 月 20 日发售。想在密集档期里被看见，光有好玩法远远不够。",
      "image": "https://www.gamegrin.com/assets/Uploads/_resampled/croppedimage1201631-CnP-15112026-203358.png",
      "source": "GameGrin",
      "date": "2026-11-20",
      "url": "https://www.gamegrin.com/news/51-hidden-gems-launching-on-steam-this-week-16th-of-november-to-the-22nd-of-november-2026",
      "readTime": "5 分钟",
      "hotScore": 76,
      "tags": [
        "Steam",
        "新游速览",
        "塔防",
        "独立游戏"
      ],
      "content": [
        {
          "title": "本周代表",
          "type": "list",
          "items": [
            "《Swarmbreaker》：塔防 + 放置 + 策略，11 月 18 日发售",
            "《STEEL GULLET》：自动化沙盒建造，11 月 17 日发售",
            "《Theocracy》：RTS 与城市建设，11 月 20 日发售",
            "《No Visitors Allowed》：探索解谜步行模拟，11 月 20 日发售"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "一周 51 款、同一天多款撞车，是当下 Steam 供给过剩的缩影。对独立开发者，选发售档期和提前攒愿望单，可能和做完游戏一样重要。"
        }
      ]
    },
    {
      "id": "ga-krafton-gstar",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·展会",
      "tag": "G-Star 2026",
      "title": "Krafton 十赴 G-Star：五款新作试玩，PUBG 联名女团 IVE",
      "summary": "Krafton 连续第十年参加 11 月 19 日至 22 日在釜山 BEXCO 举办的 G-Star 2026，以「KRAFTON NOW」为主题搭五款作品体验区。PUBG 展区把与女团 IVE 的联名从线上搬进线下，还原《LOVE DIVE》主题的「IVE 宅邸」与表情舞台；东方暗黑幻想新作《TARAE: The Unbound》首次开放新职业「斗鬼」试玩；《Age Twisters》设双人合作试玩；《Waltz and Jam》《Overgeared Hero》也各有展台与愿望单活动。把游戏 IP 做成线下可打卡的体验，正在成为大厂展台的标配打法。",
      "image": "https://djf7qc4xvps5h.cloudfront.net/resource/magazine/image/2ea74eda-d82c-4d93-a9a1-9622b5075f1b_512.webp",
      "source": "Minimap（基于 Krafton 官方公告）",
      "date": "2026-11-20",
      "url": "https://minimap.net/magazine/krafton-gstar-2026-booth-programs-en",
      "readTime": "5 分钟",
      "hotScore": 78,
      "tags": [
        "G-Star 2026",
        "Krafton",
        "PUBG",
        "线下体验"
      ],
      "content": [
        {
          "title": "展台亮点",
          "type": "list",
          "items": [
            "PUBG × IVE 联名：IVE 宅邸、表情舞台、主题拍照区",
            "《TARAE: The Unbound》首开新职业「斗鬼」世界首发试玩",
            "《Age Twisters》双人合作试玩，配角色拍照区",
            "多款新作设 Steam 愿望单活动与限定周边"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "大厂把展台做成「可拍照、可社交传播」的体验空间，本质是把线下流量导回线上愿望单。独立团队虽没这预算，但「一个值得拍照的展位」这个思路同样适用。"
        }
      ]
    },
    {
      "id": "ga-meshy-gstar",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·AI3D",
      "tag": "Meshy",
      "title": "AI 3D 平台 Meshy 亮相 G-Star：1500 万用户、累计生成超 1 亿模型",
      "summary": "总部位于美国桑尼维尔的 AI 3D 生成平台 Meshy 于 11 月 19 日至 21 日在 G-Star 2026 B2B 馆设展，现场演示文本或图片输入、数分钟内生成 3D 模型的核心功能，覆盖角色、道具、背景等游戏资产，并提供文生 3D、图生 3D、AI 贴图、绑定与动画的体验区。官方称截至 2026 年注册用户达 1500 万、累计生成 3D 模型超 1 亿个，并与多家韩国游戏及内容企业洽谈制作管线接入。AI 3D 正在从演示走向真实生产管线，值得持续跟踪其落地效果。",
      "image": "https://cdn.gamemeca.com/gmdata/0001/783/377/gm546247_261112-risel-yy2.webp",
      "source": "游戏메카（GameMeca）",
      "date": "2026-11-20",
      "url": "https://www.gamemeca.com/zh/view.php?gid=1783377",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "Meshy",
        "AI 3D",
        "G-Star 2026",
        "游戏资产"
      ],
      "content": [
        {
          "title": "展会要点",
          "type": "list",
          "items": [
            "Meshy 11 月 19 至 21 日在 G-Star 2026 B2B 馆（H305）设展",
            "演示文生 3D、图生 3D、AI 贴图、绑定、动画全流程",
            "官方称注册用户 1500 万，累计生成 3D 模型超 1 亿个",
            "与韩国游戏及内容企业洽谈管线接入与 API 集成"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把 AI 3D 摆进 B2B 展、和美术总监与制片人谈管线，说明这东西已经过了「炫技」阶段。但它能否真正省工时，还要看生成结果进引擎后的返工率——这才是落地的关键指标。"
        }
      ]
    },
    {
      "id": "os-bevy",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·游戏引擎",
      "tag": "Bevy",
      "title": "Bevy 逼近 5 万星：Rust 的 ECS 引擎把 0.20.1 补丁和代理技能一起端上来",
      "summary": "数据驱动的 Rust 开源游戏引擎 Bevy 仓库已逼近 5 万星（约 4.96 万），90 天内发了 5 个版本，最新为 10 月末的 0.20.1 维护版。它把从逻辑到渲染的一切都建立在实体组件系统（ECS）之上，主打简单与模块化，双许可 MIT 或 Apache 2.0。社区给它的定位很清醒：核心功能仍缺、文档偏少，约每三个月一次破坏性 API 更新并附迁移指南。想要性能与现代数据导向设计、又受得了版本折腾的 Rust 开发者，它仍是首选。",
      "image": "https://opengraph.githubassets.com/1/bevyengine/bevy",
      "source": "GitHub: bevyengine/bevy / GStars",
      "date": "2026-11-20",
      "url": "https://github.com/bevyengine/bevy",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "Bevy",
        "Rust",
        "ECS",
        "开源引擎"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "仓库约 4.96 万星，90 天 5 个版本，最新 0.20.1",
            "纯 ECS 架构，2D/3D 通吃，MIT 或 Apache 2.0 双许可",
            "约每 3 个月一次破坏性更新，提供迁移指南",
            "MSRV 贴近最新稳定版 Rust，文档仍偏少"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Bevy 的价值不只在性能，更在于它把 ECS 这种数据导向范式讲成了可上手的工程实践。想理解「为什么 ECS 能并行得这么干净」，读它的源码比读论文更快。"
        }
      ]
    },
    {
      "id": "os-engine-roundup",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·引擎横评",
      "tag": "渲染引擎",
      "title": "2026 开源 3D 渲染引擎横评：按用途挑，别只问哪个最强",
      "summary": "一份 11 月 6 日逐项核对许可证与活跃度的横评，把主流开源 3D 渲染引擎按用途分类：离线物理渲选用 Cycles（Apache 2.0，随 Blender 发布）、LuxCoreRender；科研用 Mitsuba 3；学习参考用 pbrt-v4；嵌入自研 C++ 应用选 Filament、OGRE；浏览器场景选 Three.js、Babylon.js、PlayCanvas；游戏与交互选 Godot、Bevy。文章特别提醒「source-available 不等于开源」——Unreal、Remotion 等虽公开代码，但许可限制了再分发或商用。按任务选工具、看清许可，比追排名更有用。",
      "image": "https://cdn.moda.app/voyager/blog/vork/cake-poster-2dcd4ddc4d0f3ad6.webp",
      "source": "Voyager 博客",
      "date": "2026-11-20",
      "url": "https://voyager.so/blog/best-open-source-3d-rendering-engines",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "开源渲染",
        "Cycles",
        "Three.js",
        "许可证"
      ],
      "content": [
        {
          "title": "分类速览",
          "type": "list",
          "items": [
            "离线渲染：Cycles、LuxCoreRender；科研：Mitsuba 3；学习：pbrt-v4",
            "嵌入式实时：Filament 1.80、OGRE 14.6.3（均为 11 月更新）",
            "浏览器：Three.js r187、Babylon.js 9.35.0、PlayCanvas 2.23.3",
            "游戏：Godot 4.7.2、Bevy 0.20.1、O3DE 2605.0"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「哪个引擎最好」是个伪问题，正确问法是「我这帧要在哪渲染、给谁看」。把许可证和最近提交时间一起列入选型表，能避开很多开源幻灭时刻。"
        }
      ]
    },
    {
      "id": "os-fyrox",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·游戏引擎",
      "tag": "Fyrox",
      "title": "Fyrox 把场景编辑器塞进 Rust 引擎，被低估的 2D/3D 全能选手",
      "summary": "Fyrox 是一款用 Rust 写的功能完整、可用于生产的通用 2D/3D 游戏引擎，前身为 rg3d，仓库约 9700 星、465 个 fork、81 位贡献者，MIT 许可，11 月仍在更新。它自带场景编辑器，官方 Book 从「如何构建」一路讲到各类教程，示例项目可直接在浏览器运行，配套 Discord 与 Discussions 社区。相比同门 Bevy 的数据驱动路线，Fyrox 更接近「开箱即有编辑器」的传统引擎体验。Rust 游戏生态同时有这两种取向，是件好事。",
      "image": "https://opengraph.githubassets.com/1/fyroxengine/fyrox",
      "source": "GitHub: fyroxengine/fyrox / CodeRank",
      "date": "2026-11-20",
      "url": "https://github.com/fyroxengine/fyrox",
      "readTime": "6 分钟",
      "hotScore": 78,
      "tags": [
        "Fyrox",
        "Rust",
        "场景编辑器",
        "MIT"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "Rust 编写的 2D/3D 引擎，前身 rg3d，约 9700 星",
            "自带场景编辑器，MIT 许可，81 位贡献者",
            "官方 Book 覆盖从构建到教程，示例可在浏览器运行",
            "走「开箱即用编辑器」路线，与 Bevy 的纯代码 ECS 形成互补"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Rust 游戏生态不该只有一个叙事：Bevy 适合爱写代码的人，Fyrox 适合想要编辑器工作流的人。两条路线并存，才说明这个生态在真正长大。"
        }
      ]
    },
    {
      "id": "os-egui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·GUI库",
      "tag": "egui",
      "title": "Rust 即时模式 GUI 库 egui 破 3.2 万星，游戏内嵌工具的省心选项",
      "summary": "egui 是一个易用、可移植的 Rust 即时模式 GUI 库，仓库约 3.23 万星、2400 fork、457 位贡献者，Apache 2.0 许可，由 Rerun 赞助。它可在 Web、原生以及各类游戏引擎中运行——只要能画纹理三角形就能集成，官方框架 eframe 支持 Web、Linux、Mac、Windows 与 Android。官方强调它简单、快速、依赖少且不使用 unsafe 代码。给游戏做调试面板、编辑器工具时，这种「塞进去就能用」的 GUI 库能省下大量造轮子时间。",
      "image": "https://opengraph.githubassets.com/1/emilk/egui",
      "source": "GitHub: emilk/egui / GStars",
      "date": "2026-11-20",
      "url": "https://github.com/emilk/egui",
      "readTime": "5 分钟",
      "hotScore": 77,
      "tags": [
        "egui",
        "Rust",
        "即时模式GUI",
        "工具开发"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "约 3.23 万星、457 位贡献者，Apache 2.0 许可",
            "即时模式 GUI，依赖少、无 unsafe 代码",
            "可在 Web、原生及主流游戏引擎中运行",
            "eframe 支持 Web 与多桌面平台，含 Android"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "游戏工具链里，GUI 往往是「不做不行、做好又费时」的苦活。egui 这类即时模式库把成本压到最低，让开发者把精力留给真正影响玩法的核心系统。"
        }
      ]
    },
    {
      "id": "os-phaser",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·2D框架",
      "tag": "Phaser 4",
      "title": "Phaser 4 把整套 AI Agent Skills 塞进仓库，HTML5 游戏开发迎来代理时代",
      "summary": "HTML5 游戏框架 Phaser 的新版本 Phaser 4 在仓库中内置了覆盖场景、物理、输入、动画、瓦片地图、补间、粒子、相机等主要子系统的 AI Agent Skills：把编码代理指向 skills 目录，它就能按 Phaser 4 的架构与惯用法生成游戏代码、搭场景、设物理与输入。仓库还提供 v3 到 v4 的迁移 skill，逐一说明渲染器、着色 API、光照等破坏性变更。官方称 Phaser 已是各大前沿模型的训练数据。框架主动为代理准备「说明书」，是这波工具链变化里很务实的一步。",
      "image": "https://phaser.io/oss/docs/phaser/getting-started/installation",
      "source": "Phaser 官方仓库与文档",
      "date": "2026-11-20",
      "url": "https://phaser.io/oss/docs/phaser/getting-started/installation",
      "readTime": "6 分钟",
      "hotScore": 79,
      "tags": [
        "Phaser 4",
        "HTML5",
        "AI Agent Skills",
        "H5游戏"
      ],
      "content": [
        {
          "title": "更新要点",
          "type": "list",
          "items": [
            "仓库内置覆盖主要子系统的 AI Agent Skills",
            "提供 v3→v4 迁移 skill，逐条列出破坏性变更与替代方案",
            "渲染器改为 render-node 架构，新增 SpriteGPULayer 支持海量精灵",
            "GLSL 加载改用标准 #pragma 指令，兼容语法检查器"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "框架方主动维护「给代理看的技能说明」，比用户自己写提示词靠谱得多。选 H5 框架时，AI 友好度正在成为和性能、文档并列的新维度。"
        }
      ]
    },
    {
      "id": "os-perf-skills",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·性能工具",
      "tag": "性能优化",
      "title": "一份跨引擎性能优化技能库，把 CPU/GPU 分流和预热坑点写成清单",
      "summary": "开源技能库 gamedev-skills 中的性能优化条目，把 Unity、Unreal、Godot、Roblox 的 Common profiling 与优化经验整理成可执行清单：先分清 CPU 受限还是 GPU 受限再做优化，用对象池避免热循环里的实例化与释放，Unity 6 用 GraphicsStateCollection 预热 PSO、Godot 4.4+ 盯管线编译监视器、Unreal 做 PSO 预缓存。它还点破几个常见误判：开 VSync 测帧率看不出优化效果、每帧读 Godot 的 TIME_PROCESS 拿到的是上一秒最差值、手机上默认 30 FPS 要先确认目标帧率。清单式经验，很适合贴进团队规范。",
      "image": "https://funnelslayer.com/funnelslayer-og.jpg",
      "source": "FunnelSlayer: gamedev-skills",
      "date": "2026-11-20",
      "url": "https://funnelslayer.com/skills/s/gamedev-skills/awesome-gamedev-agent-skills/performance-optimization",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "性能优化",
        "Profiling",
        "PSO预热",
        "对象池"
      ],
      "content": [
        {
          "title": "高频坑点",
          "type": "list",
          "items": [
            "优化前先分流：CPU 微优化对 GPU 受限帧毫无作用",
            "开 VSync 测帧率会让优化看起来「没效果」，先解锁再读毫秒数",
            "Godot 的 TIME_PROCESS 是每秒最大值、不是逐帧值",
            "Unity Android/iOS 默认 30 FPS，先显式设定 targetFrameRate",
            "热循环频繁实例化会导致 GC 尖峰，改用对象池"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "性能问题的多数浪费不是「优化得不够」，而是「优化错了地方」。这类清单最大的价值，是把「先测量、再动手」的纪律变成随手可查的常识。"
        }
      ]
    },
    {
      "id": "tu-gameassetly",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·选型入门",
      "tag": "引擎入门",
      "title": "给零基础的第一份引擎对照表：先做完一个小游戏再谈选择",
      "summary": "一份面向初学者的 2026 引擎入门指南把 Unity、Unreal、Godot、Blender 摆在一起：Unity 走官方 Learn 路径与 C#，Unreal 用蓝图做可视化脚本、C++ 进阶，Godot 从官方「Your first 2D game」与 GDScript 起步，Blender 从甜甜圈教程入手做自有美术。它给出的核心建议很朴素——场景、对象、脚本、物理、输入这些概念在四个工具里相通，先做 Pong、单房间平台跳跃或跑酷这类小项目并坚持做完。跨引擎知识会迁移，纠结选哪个不如先动手。",
      "image": "https://gameassetly.com/wp-content/uploads/2026/10/game-development-with-GameAssetly-guide-.png",
      "source": "GameAssetly",
      "date": "2026-11-20",
      "url": "https://gameassetly.com/unity-unreal-godot-blender-beginners-guide/",
      "readTime": "6 分钟",
      "hotScore": 77,
      "tags": [
        "引擎入门",
        "零基础",
        "Godot",
        "Unity"
      ],
      "content": [
        {
          "title": "入门建议",
          "type": "list",
          "items": [
            "Unity：官方 Learn 免费路径 + C#，社区教程最丰富",
            "Unreal：蓝图无需写代码即可出效果，适合视觉思考者",
            "Godot：官方文档即教程，GDScript 类似 Python，开源免费",
            "先做 Pong、平台跳跃、跑酷等小项目并坚持做完"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "引擎切换的代价，远没有「五个没做完的大项目」高。对新生来说，第一条该记住的规则不是选哪个引擎，而是「先完成一个丑但能玩的小游戏」。"
        }
      ]
    },
    {
      "id": "tu-roadmap",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·学习路线",
      "tag": "技能路线",
      "title": "2026 游戏开发路线图：把 15 项技能拆成六个阶段",
      "summary": "一份 11 月的游戏开发学习路线图把入门到就业拆成六阶段：编程基础（变量、循环、函数、OOP）、数学与解题（向量、三角函数、矩阵、物理）、选引擎、玩法与图形、工具与生产（Git、调试、测试、优化）、作品集与发布。每阶段给出建议周期，并强调「一个带干净文档、能玩的小游戏，胜过几个半成品」。它还列了常见坑：学太多语言、频繁换引擎、只看教程不实践、目标过于宏大、忽视数学、不用 Git、跳过测试。把大目标切成可完成的小闭环，是这份路线图的价值所在。",
      "image": "",
      "source": "Swarup Infotech",
      "date": "2026-11-20",
      "url": "https://www.swarupinfotech.co.in/2026/11/game-development-roadmap-essential-skills-2026.html",
      "readTime": "7 分钟",
      "hotScore": 79,
      "tags": [
        "学习路线",
        "技能树",
        "Git",
        "作品集"
      ],
      "content": [
        {
          "title": "六个阶段",
          "type": "list",
          "items": [
            "编程基础 → 数学与解题 → 选择引擎 → 玩法与图形 → 工具与生产 → 作品集发布",
            "工具与生产阶段重点：Git、项目组织、调试、测试、优化、协作",
            "常见坑：换引擎、只学不练、目标过大、忽视数学、不用 Git、跳过测试"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "路线图的用处不是让人照着走完，而是让每一步都知道「为什么现在学这个」。把 Git 和测试放进早期阶段，是这份清单里最值得新生照做的一条。"
        }
      ]
    },
    {
      "id": "tu-phaser-scenes",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·2D框架",
      "tag": "Phaser",
      "title": "Phaser 场景生命周期图解：暂停、休眠、停止到底差在哪",
      "summary": "Phaser 官方文档用流程图把 Scene 的生命周期讲清楚：Start、Init、Preload、Create、Update 串起一次启动，暂停（pause）是继续渲染但不更新，休眠（sleep）是不更新也不渲染，停止（stop）则彻底关闭；对应的 resume、wake、start 分别把它们带回。文档还强调一对容易踩坑的方法：switch 会休眠目标场景、start 会停掉调用方，而 run 会根据目标当前状态决定恢复、唤醒还是重启。重进场景后状态变量没重置、旧场景对象仍挂着事件，是「重开就崩」的常见原因，应在 init 里统一复位。",
      "image": "",
      "source": "Phaser 官方文档",
      "date": "2026-11-20",
      "url": "https://phaser.io/oss/docs/phaser/concepts/scenes",
      "readTime": "6 分钟",
      "hotScore": 76,
      "tags": [
        "Phaser",
        "场景生命周期",
        "2D游戏",
        "状态管理"
      ],
      "content": [
        {
          "title": "核心概念",
          "type": "list",
          "items": [
            "pause 停更新继续渲染，sleep 停更新停渲染，stop 彻底关闭",
            "resume / wake / start 分别对应三种恢复路径",
            "switch 休眠目标场景，run 按目标状态智能切换",
            "重开场景要在 init 里重置状态、清理旧事件监听"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "场景管理看似框架细节，实则是状态管理的缩影。把生命周期画成图、把复位逻辑集中在 init，能省掉大量「重开一局就出怪事」的调试时间。"
        }
      ]
    },
    {
      "id": "tu-unity-shadow",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·渲染排错",
      "tag": "Unity",
      "title": "Unity 影子不显示？官方给出的三步排查顺序值得收藏",
      "summary": "Unity 官方支持文档把「影子不显示」的排查固定为三个位置：光源、网格渲染器、渲染管线的全局阴影设置，并强调按顺序查。光源侧要看 Mode 是否 Realtime/Mixed、Shadow Type 是否为软/硬阴影、Strength 是否大于 0、Culling Mask 是否包含目标层；物体侧要确认 Cast Shadows 开启、接收对象开启 Receive Shadows（URP 在材质表面选项里，HDRP 无此开关）；管线侧则分别检查 Quality、URP Asset、HDRP Asset 的阴影距离与每像素光源设置。文档适用内置管线、URP 与 HDRP。把排错写成有序清单，是很实用的教学范式。",
      "image": "https://support.unity.com/hc/theming_assets/01KK9GKF2AHV2WYN8WXTWDYDDG",
      "source": "Unity 官方支持中心",
      "date": "2026-11-20",
      "url": "https://support.unity.com/hc/en-us/articles/207927086",
      "readTime": "6 分钟",
      "hotScore": 75,
      "tags": [
        "Unity",
        "阴影",
        "URP",
        "HDRP",
        "排错"
      ],
      "content": [
        {
          "title": "排查顺序",
          "type": "list",
          "items": [
            "查光源：Mode、Shadow Type、Strength、Culling Mask 或 Rendering Layers",
            "查物体：Cast Shadows 开启、接收方 Receive Shadows 开启",
            "查管线：Quality / URP Asset / HDRP Asset 的阴影距离与逐像素设置",
            "内置管线与 URP 用 Render Mode，HDRP 用 Shadow Map 相关开关"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "新手调渲染最费时的不是不会用功能，而是不知道「该从哪里开始查」。把这类高频问题写成有序清单，比零散搜答案高效得多，也更适合沉淀成团队知识库。"
        }
      ]
    },
    {
      "id": "tu-worldlabs",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·AI3D管线",
      "tag": "World Labs",
      "title": "World Labs Atlas 开放：一张图变可探索 3D 场景，还能导出网格进引擎",
      "summary": "李飞飞创立的 World Labs 于 11 月 12 日至 13 日把世界模型 Atlas 向公众开放，附带网页工具与开发者 API，新账号送 1 万个额度。四件工具串成管线：Viewfinder 从一张图重建场景并移动相机、渲染新视角，可导出视频或高斯泼溅（PLY/SPZ）；Chisel 用简单灰盒布局加自然语言描述生成场景；Relight 给泼溅场景重打光；Splat to Mesh 把泼溅转成带贴图的三角网格（GLB），可直接导入游戏引擎或 Blender，还能拟合直立包围盒作碰撞参考。官方提醒：精细重建约 5 美元、15 至 25 分钟，免费与标准层输出仅限非商用。",
      "image": "https://tokenstrom.com/posts/world-labs-opens-up-atlas-turn-a-sketch-or-a-sentence-into-a-3d-world/art.webp",
      "source": "Tokenstrom（基于 World Labs 官方公告）",
      "date": "2026-11-20",
      "url": "https://tokenstrom.com/posts/world-labs-opens-up-atlas-turn-a-sketch-or-a-sentence-into-a-3d-world",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "World Labs",
        "Atlas",
        "AI 3D",
        "高斯泼溅"
      ],
      "content": [
        {
          "title": "工具管线",
          "type": "list",
          "items": [
            "Viewfinder：单图重建场景，支持移动相机与多视角渲染",
            "Chisel：灰盒布局 + 文本/参考图生成可控场景",
            "Relight：为泼溅场景重新打光并加阴影",
            "Splat to Mesh：转 GLB 网格，可导出直立包围盒作碰撞参考",
            "定价：草稿约 0.5 美元、精细重建约 5 美元；免费/标准层非商用"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Atlas 第一次把「图生场景」接进常规资产管线：先摆灰盒、再让 AI 填细节、最后导出网格。但要真拿去用，仍得检查门洞位置、重拓扑、碰撞和 LOD——AI 给的是起点，不是成品。"
        }
      ]
    },
    {
      "id": "tu-gamejam",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·参赛入门",
      "tag": "Game Jam",
      "title": "第一次参加 Game Jam 之前，先把这七件事想明白",
      "summary": "一份面向新手的 Game Jam 指南把常见问题一次说清：Jam 是在 48 或 72 小时内围绕主题从零做小游戏的活动，GGJ 与 Ludum Dare 均为 48/72 小时、GMTK 四天；不需要会写代码，GGJ 接受桌游等非数字作品，Twine 可无代码做互动故事；作品归属看各 Jam 规则，Ludum Dare 与 GMTK 归作者，GGJ 用 CC BY-NC-SA 4.0 许可。备赛建议包括提前注册热门站点、装好并测试引擎与版本控制、做一次「hello world」导出、选定角色，以及赛前把主题拆解成十个字面与十个发散含义。",
      "image": "https://tensorhack.com/opengraph-image",
      "source": "Tensor Hack",
      "date": "2026-11-20",
      "url": "https://tensorhack.com/guides/what-is-a-game-jam",
      "readTime": "6 分钟",
      "hotScore": 74,
      "tags": [
        "Game Jam",
        "新手入门",
        "GGJ",
        "Ludum Dare"
      ],
      "content": [
        {
          "title": "赛前准备",
          "type": "list",
          "items": [
            "提前注册站点、装好引擎与版本控制、预演一次导出",
            "选定角色：程序、美术、设计、音频、写作或制作人",
            "把主题写中间，列十个字面含义与十个发散含义",
            "留意版权与许可：GGJ 作品按 CC BY-NC-SA 4.0 上传"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Game Jam 的价值不在拿奖，而在「48 小时内把一个想法做到能玩」。新手先把导出流程跑通、把范围压到最小，比任何构思技巧都更能提高完赛率。"
        }
      ]
    },
    {
      "id": "ai-comfyui045",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·创作工具",
      "tag": "ComfyUI",
      "title": "ComfyUI 0.45.0 把 UltraTex 网格贴图与视频放大塞进本地节点",
      "summary": "开源节点式生成工具 ComfyUI 于 11 月 10 日发布 0.45.0，主打本地能力扩张：原生支持 UltraTex——一个 FLUX.2 Klein 9B LoRA，把参考图绘制到 3D 网格并烘焙进 UV，输出基础色贴图与置信度蒙版；新增 RelayVSR 快速 2 倍/4 倍视频放大（实测 H100 上 X2 达 45 FPS，对比 SeedVR2-3B 的 0.69 FPS）；还纳入 MiniMax-H3-Image、WeVisOne-VL，并给 Qwen 3.x 加视频输入、给 SeedVR2 的 VAE 切片加自适应显存管理。本地工作流正从出图扩展到图、视频、音频、3D 全套。",
      "image": "https://aifilmhq.com/og.png",
      "source": "AI Film HQ",
      "date": "2026-11-20",
      "url": "https://aifilmhq.com/entry/comfyui-v0-45-0-ultratex-relayvsr-minimax-h3-image",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "ComfyUI",
        "UltraTex",
        "RelayVSR",
        "本地生成"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "11 月 10 日发布 0.45.0，主打本地模型与 3D 能力",
            "UltraTex：参考图绘到网格并烘焙 UV，输出贴图与置信度蒙版",
            "RelayVSR：2x/4x 视频放大，H100 上 X2 达 45 FPS",
            "新增 MiniMax-H3-Image、WeVisOne-VL，Qwen 3.x 支持视频输入",
            "SeedVR2 的 VAE 切片长度按空闲显存自适应，减少显存溢出"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "ComfyUI 正把自己从出图界面做成多模态编排平台，UltraTex 这类网格贴图节点尤其贴近游戏美术。要注意的是，部分伙伴节点是付费云 API，跑之前看清价格标签。"
        }
      ]
    },
    {
      "id": "ai-runway3d",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·3D生成",
      "tag": "Runway",
      "title": "Runway 接入 Tripo H3.1：文生、图生 3D 模型还能指定相机角度",
      "summary": "Runway 于 11 月 12 日在创作套件中加入原生 3D 能力：借助 Tripo H3.1，用户可用文本或静态图生成 3D 模型，也能上传自有 3D 网格；随后旋转模型挑好相机角度，作为下游图像或视频生成的视觉参考，并把模型导出到外部 3D 管线。这是继 11 月 9 日 Sightline 工作区、11 日 Apache 2.0 世界动作模型 Praxis-1 之后，Runway 一周内的第三步。官方公告未说明每次生成的额度消耗与支持的网格格式（GLB/FBX/USDZ）。把 3D 当作可编排的中间资产，是创作工具的新方向。",
      "image": "https://ashutoshai.com/ai-compass/og/2026-11-12/runway-3d-generation-tripo-h3-1.jpg",
      "source": "Ashutosh AI（基于 Runway 官方公告）",
      "date": "2026-11-20",
      "url": "https://ashutoshai.com/ai-compass/2026/11/12/runway-3d-generation-tripo-h3-1",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "Runway",
        "Tripo H3.1",
        "AI 3D",
        "相机角度"
      ],
      "content": [
        {
          "title": "能力要点",
          "type": "list",
          "items": [
            "11 月 12 日上线，基于 Tripo H3.1 做文生 3D 与图生 3D",
            "支持上传自有 3D 网格，旋转挑选相机角度作视觉参考",
            "模型可导出到外部 3D 管线",
            "一周内连续推出 Sightline、Praxis-1 与本功能"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把 3D 模型变成能指定机位的中间资产，比单纯生成模型更聪明——它直接服务后续的镜头与视频生成。不过额度消耗和导出格式还没说清，落地前值得先跑个小样验证。"
        }
      ]
    },
    {
      "id": "ai-newmodels",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·编码模型",
      "tag": "GPT-6.1/Gemini",
      "title": "游戏开发助手上新三款模型：GPT-6.1 Terra 与两款 Gemini 分工明确",
      "summary": "面向游戏开发者的 AI 助手新增三款聊天模型：OpenAI 的 GPT-6.1 Terra 取代 GPT-5.6 Terra，上下文窗口 105 万 token（输入上限 92.2 万、输出 12.8 万），单 token 计费更低；Google 的 Gemini 3.8 Flash 主打快速迭代、100 万 token 上下文；旗舰 Gemini 4 Argon 于 2026 年 10 月发布、同为 100 万上下文，面向最难的编码与设计任务。三者需 Studio 及以上套餐，Gemini 模型有年龄与地区限制（不在欧盟、英国、瑞士提供）。按任务难度分层选模型，比一味追旗舰更划算。",
      "image": "https://ai-game.dev/blog/new-ai-models-gpt-6-1-terra-gemini/hero.jpg",
      "source": "Unity MCP / AI Game Developer",
      "date": "2026-11-20",
      "url": "https://unity-mcp.dev/blog/new-ai-models-gpt-6-1-terra-gemini",
      "readTime": "6 分钟",
      "hotScore": 81,
      "tags": [
        "GPT-6.1 Terra",
        "Gemini 4 Argon",
        "Gemini 3.8 Flash",
        "游戏开发"
      ],
      "content": [
        {
          "title": "模型分工",
          "type": "list",
          "items": [
            "GPT-6.1 Terra：105 万 token，取代 5.6 Terra，单位成本更低",
            "Gemini 3.8 Flash：快速迭代，适合读场景、改组件、查控制台",
            "Gemini 4 Argon：10 月发布的旗舰，面向复杂架构与玩法系统",
            "均为 Studio 及以上套餐，Gemini 模型受年龄与地区限制"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "模型选择正在从哪个最强变成这一步该用哪个：日常小改动用快模型、疑难架构问题再上旗舰。给代理配一套分层策略，往往比全程堆旗舰更省钱也更快。"
        }
      ]
    },
    {
      "id": "ai-benchmark",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·模型评测",
      "tag": "基准测试",
      "title": "游戏 AI 模型基准换代：Artificial Analysis 指数升到 v5.0.1",
      "summary": "一份 11 月 12 日更新的游戏开发 AI 评测指出，Artificial Analysis 把智能指数从 v4.3.2 换成重新标定的 v5.0.1，并新增 Coding Agents（FrontierCode v1.1）与 AA-3D 等分项：Claude Fable 5.2（max）以 64.56 分居首，Gemini 4 Carbon 60.03、Claude Opus 5.5 为 59.11；编码代理里 Claude Code + Opus 5.5 得 0.617 领先，Gemini 4 Carbon 在 Antigravity CLI 得 0.594 且耗时不到一半。3D 场景构建、Blender 建模等终于有了直接基准，但通用测试仍不衡量手感与美术调性。分数能参考，手感还得自己试。",
      "image": "https://creategame.ai/blog/img/best-ai-models-for-game-development.webp",
      "source": "CreateGame",
      "date": "2026-11-20",
      "url": "https://creategame.ai/blog/best-ai-models-for-game-development",
      "readTime": "8 分钟",
      "hotScore": 83,
      "tags": [
        "AI 评测",
        "Artificial Analysis",
        "AA-3D",
        "编码代理"
      ],
      "content": [
        {
          "title": "评测要点",
          "type": "list",
          "items": [
            "智能指数升级到 v5.0.1，不与旧 v4.3.2 分数直接比较",
            "Fable 5.2 居首（64.56），Gemini 4 Carbon 60.03",
            "编码代理：Claude Code + Opus 5.5 得 0.617 领先",
            "AA-3D 测离线 Three.js 场景构建，DesignArena 测 Blender 建模",
            "通用基准仍不衡量核心循环手感与美术调性"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "有了 3D 与编码的真实基准，选模型终于不必全凭口碑。但要记住基准测的是能不能做出来，不是做出来好不好玩——后者只能靠人试。"
        }
      ]
    },
    {
      "id": "ai-gemini-swarm",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·多智能体",
      "tag": "Gemini 4 Carbon",
      "title": "Gemini 4 Carbon 公开：多个 AI 分工协作，做出一个能玩的 3D 小游戏",
      "summary": "Google 于 11 月 10 日向 Google AI Ultra 订阅者开放 Gemini 4 Carbon，这是一个擅长复杂编程、科研与网络安全任务的高性能模型。同步发布的实验功能 /swarm 让多个 AI 代理接受同一指令并分工：Carbon 负责总体设计、协调与验证，其他更快的模型处理简单修改，用户可实时看每个代理进度。官方演示里，多个代理用 Blender 建模、用 Three.js 搭出一个鹈鹕骑车探索谷歌总部的可玩 3D 游戏，还展示了埃菲尔铁塔建造照片重建的互动展览。多代理协作从概念走向可玩 Demo，值得实测其稳定性。",
      "image": "https://i.gzn.jp/img/2026/11/11/gemini-4-carbon/00.png",
      "source": "GIGAZINE（基于 Google 官方公告）",
      "date": "2026-11-20",
      "url": "https://gigazine.net/gsc_news/en/20261111-gemini-4-carbon",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "Gemini 4 Carbon",
        "多智能体",
        "swarm",
        "Google Antigravity"
      ],
      "content": [
        {
          "title": "发布要点",
          "type": "list",
          "items": [
            "11 月 10 日向 Google AI Ultra 订阅者开放",
            "/swarm 让多代理分工：Carbon 设计协调验证，快模型做简单修正",
            "演示用 Blender 建模 + Three.js 做出可玩的鹈鹕 3D 游戏",
            "与 Artificial Analysis 合推 MKA 基准，测多图多表文档理解"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "/swarm 把一个代理干到底拆成设计者与执行者的分工，这和软件团队的组织方式很像。值得留意它对长任务的纠错能力——Demo 好看，但复杂引擎里的可靠性还得实测。"
        }
      ]
    },
    {
      "id": "ai-worldlabs-alt",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·世界模型",
      "tag": "Atlas",
      "title": "李飞飞团队 Atlas 开放 API：从照片重建世界，按相机位姿精确生成",
      "summary": "World Labs 把世界模型 Atlas 从预览转为公开，提供网页应用 Viewfinder、Chisel 与开发者 API，新账户赠 1 万额度。Atlas 是原生处理文本、图像、视频、3D 的多模态自回归扩散 Transformer，核心特点是空间一致性：每张输入图锚定到 3D 空间的具体位置、每张生成图绑定精确相机位姿，因此能按像素精度控制镜头，而非用镜头左移这类模糊文字指挥。能力包括从一两图重建真实场景、生成最多一分钟 1440p 视频、点云与高斯泼溅输出、三到五部手机素材做子弹时间。免费与标准层输出限非商用。",
      "image": "https://pub-4552ab4b36fa4e0889188dd998a66596.r2.dev/world-labs-atlas-open-to-everyone-viewfinder-chisel-api-cover.jpg",
      "source": "ArtRealmAI（基于 World Labs 官方公告）",
      "date": "2026-11-20",
      "url": "https://artrealmai.com/article/world-labs-atlas-open-to-everyone-viewfinder-chisel-api",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "World Labs",
        "Atlas",
        "世界模型",
        "空间一致性"
      ],
      "content": [
        {
          "title": "核心能力",
          "type": "list",
          "items": [
            "多模态自回归扩散 Transformer，原生理解文本/图/视频/3D",
            "相机按位姿精确控制，输入图锚定到 3D 空间具体位置",
            "从少量照片重建场景，支持点云与高斯泼溅输出",
            "最多一分钟 1440p 镜头生成，多机素材可做子弹时间"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Atlas 和传统视频生成器的分水岭是空间一致性：它记得每个元素在哪，所以能换机位而不穿帮。对做场景预览和虚拟制片的人，这比单纯画质提升更有价值。"
        }
      ]
    },
    {
      "id": "co-ggjnext",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·赛事",
      "tag": "GGJ Next 2027",
      "title": "GGJ Next 2027 开放：面向 10 至 18 岁，优胜队获 1 万美元奖学金",
      "summary": "Global Game Jam 与 Games for Change 连续第三年合作，推出面向 10 至 18 岁青少年的 GGJ Next 2027，并与 G4C Student Challenge 联动。组织者可在 2026 年 11 月 15 日至 2027 年 3 月 15 日之间办 Jam，学生作品提交给 G4C 的截止日为 2027 年 3 月 29 日；分 Junior（10 至 14 岁）与 Senior（15 至 18 岁）两组，允许短至 4 至 6 小时的活动以适配学校日程。年度最佳游戏团队将分享 1 万美元奖学金，另设最佳桌面游戏、最佳玩法、最佳 Unity 制作等奖项。2027 主题为 Bounce Back 与 Everyone Belongs Here。",
      "image": "https://acc.niuqizp.com/post/coverpic/202611/shuangshiyibaxinyigangweijiarutoudi_3d29833f.jpg",
      "source": "Global Game Jam 官方 / itch.io",
      "date": "2026-11-20",
      "url": "https://itch.io/jam/ggj-next-2027",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "GGJ Next",
        "G4C",
        "青少年",
        "奖学金"
      ],
      "content": [
        {
          "title": "赛程要点",
          "type": "list",
          "items": [
            "主办：Global Game Jam 与 Games for Change，连续第三年合作",
            "办 Jam 窗口：2026-11-15 至 2027-03-15，G4C 提交截止 2027-03-29",
            "分组：Junior（10-14 岁）、Senior（15-18 岁），支持短时活动",
            "年度最佳团队分享 1 万美元奖学金，设最佳 Unity 制作等单项奖",
            "2027 主题：Bounce Back、Everyone Belongs Here"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "GGJ Next 把做游戏和用游戏回应真实议题绑在一起，还给了奖学金这种实打实的激励。对中学生社团和高校志愿者，这是低成本练手又能写进履历的好机会。"
        }
      ]
    },
    {
      "id": "co-yingxiong",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·社招校招",
      "tag": "英雄游戏",
      "title": "英雄游戏 27 届校招 + 社招同开：UE5 特效、客户端 TA、开放世界岗密集",
      "summary": "英雄游戏放出社招、27 届校招与实习三类岗位，招聘时间 2026 年 11 月 11 日至 12 月 9 日，覆盖北京、广州、杭州。社招北京侧有 UE5 特效资深/组长、开放世界 CrisisX 客户端 TA、资深战斗策划、技术美术、场景模型；广州侧有女性向卡牌 Unity3D 客户端开发、TA、UI 动效、游戏编剧等。校招含角色原画、场景原画、文案策划；实习含角色模型、数值策划、UE 开发、地编、关卡策划。UE5 与开放世界技术岗集中，是图形方向学生值得关注的窗口。",
      "image": "https://acc.niuqizp.com/post/coverpic/202611/shuangshiyibaxinyigangweijiarutoudi_3d29833f.jpg",
      "source": "牛企直聘（来源：英雄游戏 HR 公众号）",
      "date": "2026-11-20",
      "url": "https://campus.niuqizp.com/schedule-7y8stL5Nz.html",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "英雄游戏",
        "27届校招",
        "UE5",
        "技术美术"
      ],
      "content": [
        {
          "title": "岗位要点",
          "type": "list",
          "items": [
            "招聘期 2026-11-11 至 2026-12-09，城市北京/广州/杭州",
            "社招：UE5 特效资深/组长、开放世界客户端 TA、技术美术、场景模型",
            "广州社招含 Unity3D 客户端、TA、UI 动效、游戏编剧等",
            "校招：角色原画、场景原画、文案；实习含 UE 开发、地编、关卡策划"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "UE5 特效、客户端 TA、开放世界技术岗同时开放，说明商家对引擎底层与美术管线人才的需求仍然旺盛。想走图形方向的同学，把 UE5 加技术美术的组合练扎实，正逢其时。"
        }
      ]
    },
    {
      "id": "co-netease",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易互娱",
      "title": "网易互娱 27 届秋招进入下半程：图形开发、引擎研发、AI Agent 岗 HC 充足",
      "summary": "网易游戏（互娱）2027 届校园招聘进度已过半，官方公布一批面试发起率较高的岗位：程序方向有游戏引擎研发工程师、图形开发工程师（实时光追、全局光照、渲染）、游戏技术美术工程师（PCG 向）、AI Agent 工程师（多模态、AIGC），以及客户端/服务端研发；策划方向含数值、文案、战斗、关卡、任务；另有音效、3D 角色美术、动画、测试开发等。工作地广州、杭州、上海，每人最多投 2 个岗位，简历未处理前可在官网修改。图形与 AI Agent 方向 HC 充足，适逢其时。",
      "image": "",
      "source": "长安大学招生就业处（来源：网易游戏）",
      "date": "2026-11-20",
      "url": "http://mp.weixin.qq.com/s?__biz=MzIxOTEzODM3NQ==&mid=2651461890&idx=4&sn=2ed48c6b1b7e4e55ec6220c6b681b5ce",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "网易互娱",
        "27届秋招",
        "图形开发",
        "AI Agent"
      ],
      "content": [
        {
          "title": "岗位要点",
          "type": "list",
          "items": [
            "程序方向：引擎研发、图形开发（光追/全局光照）、TA（PCG）、AI Agent 工程师",
            "工作地广州/杭州/上海，面向 2027 届毕业生",
            "每人最多投 2 个岗位，简历未处理前可改志愿",
            "官方称相关岗位 HC 充足、面试发起率较高"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "图形开发明确写了实时光追与全局光照，AI Agent 写了多模态与 AIGC，说明这两个方向已经从概念进入校招技能清单。学生在准备作品集时，针对性做一两个相关 Demo 会比泛泛投岗更有竞争力。"
        }
      ]
    },
    {
      "id": "co-ggj-basics",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·赛事科普",
      "tag": "Game Jam",
      "title": "GGJ 到底怎么运作：2025 年全球 795 个站点、3.5 万人同时开做",
      "summary": "一份 Global Game Jam 科普梳理了这个全球最大线下 Jam 的运作方式：2025 年有 795 个站点、97 个国家、35371 名注册参与者，2024 年首次覆盖七大洲。GGJ 主题刻意宽松，常是一个词、一张图甚至一段声音（2013 年主题是心跳声），任何类型都能套；每站点产出作品数逐年上升，说明团队变小、工具变快。参赛建议包括提前注册热门站点、在家装好并测试引擎与版本控制、预演一次导出、选定角色，并遵守各站点对预制素材与 AI 生成内容的规定。",
      "image": "https://tensorhack.com/opengraph-image",
      "source": "Sorceress Games",
      "date": "2026-11-20",
      "url": "https://sorceress.games/blog/global-game-jam",
      "readTime": "6 分钟",
      "hotScore": 75,
      "tags": [
        "Global Game Jam",
        "线下活动",
        "参赛准备",
        "主题"
      ],
      "content": [
        {
          "title": "关键数据",
          "type": "list",
          "items": [
            "2025 年：795 个站点、97 国、35371 名注册参与者",
            "2024 年首次覆盖全部七大洲",
            "主题宽松（词/图/声音），鼓励发散解读",
            "赛前预演导出、选定角色、了解预制与 AI 素材规则"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "每站点作品越来越多、团队越来越小，背后是工具效率的提升。对学生来说，GGJ 最大的价值是第一次和陌生人组队、48 小时交付一个能玩的东西——这是课堂很难替代的一课。"
        }
      ]
    }
  ]
};
