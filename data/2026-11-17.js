window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-17",
    "weekday": "星期二",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-17 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：投资者与发行商直面 AI 山寨潮与可发现性危机，产能过剩让「被看见」变稀缺（hero）",
      "引擎精读：UE 5.9 预览版把 AI 代理与 Lumen 世界缓存带进引擎，Godot 4.7.2 与 4.8 beta 并行",
      "开源宝库：AG-UI 协议、Univer AI 办公 SDK、Stitch Skills、NVIDIA SkillEvaluator、阿里代码评审",
      "AI 前沿：美团 LongCat-2.5 开源、Gemini 4 Hydrogen、Fable 5.2 生成游戏的成本账",
      "行业风向：数字公平法案、IP 保护实务、Nexon 老 IP 增长 72%、GDC 2027 改革",
      "竞赛招聘：DevGAMM Lisbon、Game Off 2026（SHIFT）、VIVERSE 黑客松、叠纸/网易 2027 校招"
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
        "name": "PlayCanvas",
        "type": "playcanvas",
        "status": "2.24 稳定",
        "badge": "2.24",
        "color": "blue"
      },
      {
        "name": "Jolt",
        "type": "jolt",
        "status": "物理库活跃",
        "badge": "C++",
        "color": "green"
      },
      {
        "name": "Flax",
        "type": "flax",
        "status": "1.13.x 维护",
        "badge": "C#",
        "color": "orange"
      }
    ]
  },
  "hero": {
    "id": "ai-longcat-hero",
    "category": "ai",
    "categoryName": "AI 前沿",
    "tag": "AI 头条",
    "title": "美团开源 LongCat-2.5：1.6 万亿参数模型把 3D 游戏场景生成带进开源阵营",
    "summary": "美团 11 月 2 日发布 LongCat-2.5，并在 11 月 9 日以 MIT 协议开源权重。模型采用 MoE 架构，总参数 1.6 万亿、每 token 激活约 480 亿，支持百万上下文，强化了原生视觉理解与智能体编程，官方演示包含搭建 3D 游戏场景、角色交互与载具物理运动。这是大型厂商把「能生成游戏」能力开放给开发者的一次标志性动作，但演示跑通与进入生产之间仍隔着稳定性与引擎适配的距离。",
    "image": "https://cdn-thumbnails.huggingface.co/social-thumbnails/models/meituan-longcat/LongCat-2.5.png",
    "source": "美团技术团队（官方一手）",
    "date": "2026-11-17",
    "url": "https://tech.meituan.com/2026/11/10/Meituan-LongCat-2.5-Open-Source.html",
    "readTime": "6 分钟",
    "hotScore": 97,
    "tags": [
      "LongCat-2.5",
      "开源模型",
      "3D 生成"
    ],
    "content": [
      {
        "title": "核心要点",
        "type": "list",
        "items": [
          "LongCat-2.5 于 11 月 9 日以 MIT 协议开源权重，支持商用与二次训练",
          "MoE 架构，1.6 万亿总参数、约 480 亿激活，百万 token 上下文",
          "原生视觉理解与智能体编程能力明显增强",
          "官方演示含 3D 场景、角色交互与载具物理运动"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "大模型厂商扎堆展示游戏场景，因为它是综合能力的绝佳考场——视觉、代码、物理、交互缺一不可。但对开发者而言，演示能跑通和能进生产是两回事：稳定性、引擎适配与团队协作这些工程问题，才是开源模型真正落地时要跨的坎。"
      }
    ]
  },
  "items": [
    {
      "id": "en-ue59",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·版本",
      "tag": "Unreal Engine",
      "title": "虚幻引擎 5.9 预览版把 AI 代理与 Lumen 世界缓存一起塞进引擎",
      "summary": "Epic 于 11 月 9 日放出 Unreal Engine 5.9 MegaJam 预览版，官方称这是首个主要由代理式工作流构建的引擎版本。发布说明列出 Lumen 世界缓存、Unreal Canvas、Unreal MCP 与 Python 脚本扩展等更新，正式版计划 2027 年推出。对团队而言，这是一次观察 AI 如何进入引擎日常流程的窗口。",
      "image": "https://maverickframe.com/migration-assets/uploads/2026/03/futuristic-yacht-rendering-stern-view-1440x815.webp",
      "source": "Epic Games 官方发布说明（一手）",
      "date": "2026-11-17",
      "url": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-9-release-notes",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Unreal 5.9",
        "Lumen",
        "AI 代理"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Lumen 世界缓存运行时路径追踪光照，不再依赖每个网格体的烘焙卡片",
            "Unreal Canvas 提供文本、图像、视频与网格体生成的共享工作区",
            "Unreal MCP 扩展蓝图、性能、场景捕获等工具集供外部代理调用",
            "新增实验性 WebAssembly 目标，支持 WebGPU 渲染"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "5.9 值得关注的不只是某个渲染特性，而是 Epic 把「人指挥代理」当成引擎构建方式本身来试验——预览版的代码仍在清理，正说明这套流程离稳定生产还有距离。"
        }
      ]
    },
    {
      "id": "en-godot472",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·版本",
      "tag": "Godot",
      "title": "Godot 4.7.2 维护版落地，4.8 beta 3 已在同月跟进",
      "summary": "Godot 官方发布 4.7.2 稳定维护版，定位为当前最新稳定分支；同期 4.8 已进入 beta 3（11 月 9 日）。官方版本页显示 4.7 与 4.6 分支获得完整支持，4.5 仅做安全维护。想上手的开发者需要把「稳定版」与「测试版」的边界分清楚。",
      "image": "https://godotengine.org/storage/blog/covers/maintenance-release-godot-4-7-2.jpg",
      "source": "Godot 官方博客（一手）",
      "date": "2026-11-17",
      "url": "https://godotengine.org/article/maintenance-release-godot-4-7-2/",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Godot",
        "版本更新",
        "开源引擎"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "4.7.2 为维护版本，修复稳定分支问题",
            "4.8 处于 beta 3 阶段，含新编辑器坞与 Trail3D 效果",
            "4.8 .NET 构建要求升级到 .NET 10，属破坏性变更",
            "官方建议新项目用最新稳定版，beta 仅在副本上测试"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "维护版与 beta 版并行是开源引擎的常态；真正影响项目决策的是「升级成本」而非版本号大小，先看迁移指南再动手更稳妥。"
        }
      ]
    },
    {
      "id": "en-godot48",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·特性",
      "tag": "Godot 4.8",
      "title": "Godot 4.8 beta 带来新编辑器坞与原生 Trail3D 效果",
      "summary": "跟踪 Godot 版本状态的资料站整理出 4.8 beta 的主要变化：新编辑器坞、原生 Trail3D 拖尾特效与渲染升级，同时提示 .NET 构建转向 .NET 10 的破坏性变更。beta 3 于 11 月 9 日发布，官方尚未给出稳定版日期。对新特性感兴趣的团队宜先在测试副本验证。",
      "image": "https://godotawesome.com/assets/images/articles/godot-versions.png",
      "source": "GodotAwesome 版本追踪（社区一手整理）",
      "date": "2026-11-17",
      "url": "https://godotawesome.com/godot-versions",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Godot 4.8",
        "Trail3D",
        "编辑器"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "新增编辑器坞与原生 Trail3D 拖尾效果",
            "渲染管线升级， части 效果有破坏性变更",
            ".NET 构建最低要求提升到 .NET 10",
            "beta 3 于 11 月 9 日发布，稳定版时间未定"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "拖尾这类「小而实用」的内置效果，往往比大版本宣传更能提升日常开发效率——少写一个自定义着色器就是实打实的收益。"
        }
      ]
    },
    {
      "id": "en-jolt",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·物理",
      "tag": "JoltPhysics",
      "title": "被《地平线：西之绝境》采用的 Jolt 物理库持续高频更新",
      "summary": "JoltPhysics 是一款面向 games 与 VR 的多核友好刚体物理与碰撞检测库，官方仓库显示有超过 1.2 万星，最近提交停留在 11 月中旬。它已被《地平线：西之绝境》与《死亡搁浅 2》等作品采用。对需要自研物理选型的团队，这是一个可核查的开源参照。",
      "image": "https://repository-images.githubusercontent.com/395341383/40c62306-e799-41a7-be43-6fa1887e4f9a",
      "source": "GitHub: jrouwe/JoltPhysics（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/jrouwe/JoltPhysics",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "JoltPhysics",
        "物理引擎",
        "C++"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "多核友好的刚体物理与碰撞检测，用 C++ 编写",
            "MIT 许可，适合 games 与 VR 场景",
            "已被《地平线：西之绝境》《死亡搁浅 2》采用",
            "仓库保持活跃，最近提交在 11 月中旬"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "商业大作背书加上 MIT 许可，让 Jolt 成为自研引擎物理层的现实选项；选型时仍要结合团队对 C++ 与调试工具的掌握程度。"
        }
      ]
    },
    {
      "id": "en-terrain3d",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·地形",
      "tag": "Terrain3D",
      "title": "Terrain3D 为 Godot 4 补上可实时编辑的高性能地形系统",
      "summary": "Terrain3D 是面向 Godot 4 的高性能可编辑地形插件，GitHub 仓库近期进入 C++ 趋势榜视野。它让开源引擎在开放世界地形这一块有了更完整的工具链。对坚持 Godot 技术栈又需要大地图的团队，这类插件直接决定项目能不能落地。",
      "image": "https://opengraph.githubassets.com/ec0573b86e2d8cdeff1e49685bdc4df672ebb6a9ebd323fb47a442b7c4881fbd/TokisanGames/Terrain3D",
      "source": "GitHub: TokisanGames/Terrain3D（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/TokisanGames/Terrain3D",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Terrain3D",
        "Godot",
        "地形"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "面向 Godot 4 的可实时雕刻与绘制地形系统",
            "近期登上 GitHub C++ 趋势榜，社区关注度上升",
            "补足开源引擎在开放世界地形方面的工具短板",
            "以插件形式集成，便于在 Godot 项目中试用"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "引擎生态的成熟度往往由这类关键插件决定；地形系统是否好用，直接影响开放世界项目的工期与画面上限。"
        }
      ]
    },
    {
      "id": "en-ozz",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·动画",
      "tag": "ozz-animation",
      "title": "ozz-animation 提供轻量 C++ 骨骼动画方案",
      "summary": "ozz-animation 是开源的 C++ 骨骼动画库与工具集，覆盖骨骼蒙皮、动画压缩与运行时采样等基础能力。仓库近期仍保持活跃更新。对希望把动画层从大引擎中解耦、自行搭建渲染管线的团队，它提供了可拆解的参考实现。",
      "image": "https://opengraph.githubassets.com/e8e25f212bff0fff3656ead9eb1a3b384fa6f4ccbb9ef84937db0e21a91a8ee2/guillaumeblanc/ozz-animation",
      "source": "GitHub: guillaumeblanc/ozz-animation（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/guillaumeblanc/ozz-animation",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "骨骼动画",
        "C++",
        "开源库"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "开源 C++ 骨骼动画库，含运行时与工具集",
            "覆盖蒙皮、动画压缩与采样等基础环节",
            "仓库保持活跃更新",
            "适合需要定制动画管线的项目参考"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "动画系统的价值在于可拆解与可替换；把基础能力做成独立库，反而更容易嵌进自研引擎或现有工程。"
        }
      ]
    },
    {
      "id": "in-gda",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·监管",
      "tag": "德国游戏协会",
      "title": "德国游戏行业协会警告：数字公平法案或引发重复监管与法律不确定性",
      "summary": "德国游戏行业协会（game）就欧盟《数字公平法案》发声，警告草案可能带来「双重监管与法律不确定性」，认为该法案正在削弱本已在全球竞争中吃力的欧洲游戏企业。此前 GamesIndustry.biz 观点文章也指出该法案条款宽泛。依赖内购变现的团队需要提前评估合规影响。",
      "image": "https://assetsio.gnwcdn.com/game-the-german-games-industry-association-logo.png?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（协会表态报道）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/german-games-industry-association-warns-digital-fairness-act-could-cause-double-regulation-and-legal-uncertainty",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "欧盟监管",
        "变现",
        "合规"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "德国游戏行业协会警告法案可能造成重复监管",
            "认为草案给欧洲游戏企业带来法律不确定性",
            "与此前「条款宽泛」的观点文章形成呼应",
            "内购与商业化设计面临更严格审查预期"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "监管趋同的路上，越早把变现设计往透明、可持续的方向调整，未来被动整改的成本就越低。"
        }
      ]
    },
    {
      "id": "in-dfa",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·监管",
      "tag": "Digital Fairness Act",
      "title": "欧盟《数字公平法案》草案落地，游戏变现规则面临重塑",
      "summary": "GamesIndustry.biz 观点文章指出，欧盟针对变现机制的《数字公平法案》草案是多年监管趋势的必然结果，条款在部分地方显得宽泛而模糊。德国游戏行业协会随后警告，该法案可能造成重复监管与法律不确定性。依赖内购与抽卡的团队需要提前理解合规边界。",
      "image": "https://assetsio.gnwcdn.com/towfiqu-barbhuiya-xkArbdUcUeE-unsplash.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（观点）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/the-digital-fairness-act-is-a-decade-long-bill-coming-due-opinion",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "欧盟监管",
        "变现",
        "合规"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "欧盟发布针对游戏变现的《数字公平法案》草案",
            "条款被评价为宽泛、模糊，但方向并不意外",
            "德国游戏行业协会警告重复监管与法律风险",
            "内购、抽卡等机制可能面临更严格审查"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "监管的方向比细节更确定：越依赖「利用玩家心理」的变现设计，未来面对的合规成本越高，早调整比被动整改划算。"
        }
      ]
    },
    {
      "id": "in-jobs",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·人事",
      "tag": "人事变动",
      "title": "11 月游戏行业人事汇总：Nordisk Games 换帅，多家工作室调整高管",
      "summary": "GamesIndustry.biz 的 11 月人事汇总显示，Nordisk Games 任命 Stefanía Halldórsdóttir 为 CEO、Ásgeir Kröyer 为 CFO，Stillfront 与 Playstack 也各有高管到任。多家工作室在发行协议与增长计划调整期进行领导层换血。对求职者而言，这些变动往往是团队方向与招聘需求的先行信号。",
      "image": "https://assetsio.gnwcdn.com/NG-announce-V2.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（人事汇总）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/jobs-roundup-november-nordisk-games-appoints-stefania-halldorsdottir-as-ceo-and-asgeir-kroyer-as-cfo",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "人事变动",
        "工作室",
        "求职信号"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Nordisk Games 任命新 CEO 与 CFO",
            "Stillfront 引入 Adam Schaub 任集团 COO",
            "Playstack 任命 Fernando Rizo 为高级发行总监",
            "多家工作室在发行与增长调整期更换领导层"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "高管变动不只是八卦，它常常预示团队战略与用人方向的转向；求职时顺着这些信号找机会，可能比海投更有效。"
        }
      ]
    },
    {
      "id": "in-nexon",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·财报",
      "tag": "Nexon",
      "title": "《冒险岛》系列带动 Nexon 三季度营收增长 72%",
      "summary": "GamesIndustry.biz 报道，Nexon 第三季度因《冒险岛》 franchise 营收增长 72% 而整体向好，旗下 FC、地下城与勇士、冒险岛三大 franchise 合计贡献约 6.784 亿美元。长线运营的老 IP 再次成为财报主力。这对追逐新作的工作室是一记提醒：稳定运营同样能撑起营收。",
      "image": "https://assetsio.gnwcdn.com/maplestory_gBothMO.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（财报报道）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/maplestory-franchise-q3-revenue-rises-72-drives-overall-growth-for-nexon",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Nexon",
        "财报",
        "长线运营"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "《冒险岛》franchise 三季度营收同比增长 72%",
            "FC、地下城与勇士、冒险岛合计贡献约 6.784 亿美元",
            "长线运营的老 IP 成为增长主力",
            "财报反映成熟产品矩阵的稳定性"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "老 IP 的持续变现能力常被低估；在版号与买量成本双高的环境里，把一款产品做长比做多更考验真功夫。"
        }
      ]
    },
    {
      "id": "in-gdc",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·会展",
      "tag": "GDC 2027",
      "title": "GDC 直面 2026  attendance 下滑，公布 2027 改革方案",
      "summary": "GamesIndustry.biz 采访 GDC 内容战略副总裁 Mark DeLoura，回应 2026 年参会人数下滑，并说明 2027 年将引入 Business Hall、调整定价与展会结构。作为全球最重要的游戏开发者大会之一，GDC 的自我调整折射出行业交流方式的变化。对想参展的独立开发者，规则变化值得提前关注。",
      "image": "https://assetsio.gnwcdn.com/55138521355_f5db9cb4aa_k_Hnb0M7J.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（采访）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/gdcs-mark-deloura-addresses-the-events-dip-in-attendance-in-2026-as-he-details-the-planned-changes-for-2027",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "GDC",
        "会展",
        "行业趋势"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "GDC 内容战略副总裁回应 2026 年参会人数下滑",
            "2027 年计划引入 Business Hall",
            "定价与展会结构将调整",
            "反映行业交流与商务对接方式的变化"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "展会兴衰是行业冷暖的温度计；当线下大会都要重构价值主张，独立开发者更该想清楚「参会到底为了什么」。"
        }
      ]
    },
    {
      "id": "in-launchable",
      "category": "industry",
      "categoryName": "行业风向",
      "subcategory": "行业·发行",
      "tag": "Launchable",
      "title": "Launchable 用「共享成功」模式帮独立工作室对接发行资源",
      "summary": "GamesIndustry.biz 专访 Launchable 联席 CEO Greg Hall，介绍其把工作室与开发者按需匹配、按收入分成付费的「shared success」模式。平台试图降低中小团队进入市场的门槛。对缺发行资源的独立团队，这类新中介模式提供了一条可选路径。",
      "image": "https://assetsio.gnwcdn.com/Launchable-logo.png?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz（专访）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/its-about-giving-more-great-games-a-chance-why-launchable-thinks-it-can-help-more-independent-studios-reach-the-market-with-its-shared-success-model",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "独立发行",
        "商业模式",
        "初创"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Launchable 提出按收入分成的共享成功模式",
            "平台匹配工作室与开发者，按成果付费",
            "目标是帮助更多独立作品触达市场",
            "联席 CEO 阐述平台的差异化定位"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "发行环节的创新常被技术人忽视，但「怎么把游戏卖出去」和「怎么把游戏做出来」同等重要——好的商业模式能放大技术投入的回报。"
        }
      ]
    },
    {
      "id": "ga-wolf3",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·IP",
      "tag": "Wolfenstein",
      "title": " id Software 确认《德军总部 3》新作，Xbox 25 周年节点添变数",
      "summary": "Rock Paper Shotgun 报道，Xbox 25 周年活动上，《德军总部 3》与 id Software 新作获得确认。这条消息把经典 FPS IP 的回归与平台周年的营销节奏叠加在一起。对玩家是情怀兑现，对行业则是老 IP 复用的又一次样本。",
      "image": "https://assetsio.gnwcdn.com/2_SN4DvSM.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "Rock Paper Shotgun（游戏资讯）",
      "date": "2026-11-17",
      "url": "https://www.rockpapershotgun.com/wolfenstein-3-and-new-id-software-game-confirmed-as-xbox-boss-somehow-unrelatedly-shouts-about-one-person-soon-wieldling-capabilities-that-once-required-entire-nations",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Wolfenstein",
        "id Software",
        "Xbox"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Xbox 25 周年活动确认《德军总部 3》相关消息",
            "id Software 新作同步获得确认",
            "经典 FPS IP 回归与平台营销节奏叠加",
            "老 IP 复用成为行业常见策略"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "经典 IP 的反复启用，说明成熟世界观与玩家认知本身就是稀缺资产；但情怀能带流量，能否兑现还得看玩法。"
        }
      ]
    },
    {
      "id": "ga-origame",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计",
      "tag": "Origame Digital",
      "title": "Origame Digital 用反法西斯叙事重构 Lovecraft 式三部曲",
      "summary": "Rock Paper Shotgun 专访 Origame Digital，介绍其如何在一部三部曲中改编并「涂改」Lovecraft 元素，打造被称为「原生反法西斯」的游戏系列，并回顾《Penguin Colony》的隐秘设计。叙事与机制的结合方式颇具实验性。对做叙事设计的开发者，这是一份关于「如何改造经典文本」的案例。",
      "image": "https://assetsio.gnwcdn.com/20261015192153_1.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "Rock Paper Shotgun（开发者专访）",
      "date": "2026-11-17",
      "url": "https://www.rockpapershotgun.com/how-origame-digital-are-channelling-and-defacing-lovecraft-over-a-trilogy-of-inherently-indigenous-anti-fascist-games",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "叙事设计",
        "Lovecraft",
        "独立游戏"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Origame Digital 打造反法西斯主题的三部曲",
            "对 Lovecraft 元素进行改编与「涂改」",
            "《Penguin Colony》采用隐秘设计手法",
            "探索经典文本的当代重构路径"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把经典文本当作可辩论的材料而非必须供奉的模板，是叙事设计走向成熟的标志——改编的价值在于立场，而不在于复刻。"
        }
      ]
    },
    {
      "id": "ga-deathdoor",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·设计",
      "tag": "Death's Door",
      "title": "《死亡之门》用更紧凑的冒险结构重新定义魂类体验",
      "summary": "Rock Paper Shotgun 的「Have you played」专栏回顾《死亡之门》，指出在 soulslikes 普遍追求「更大更长」的潮流里，它凭紧凑的关卡与明确的体量展现了另一种吸引力。小而完整的体验重新获得评价。对独立团队，这是「克制也是一种设计能力」的范例。",
      "image": "https://assetsio.gnwcdn.com/Death's-Door-Frog-King-fight.jpeg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "Rock Paper Shotgun（评测回顾）",
      "date": "2026-11-17",
      "url": "https://www.rockpapershotgun.com/have-you-played-deaths-door",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Death's Door",
        "关卡设计",
        "独立游戏"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "《死亡之门》以紧凑冒险结构区别于大体量魂类游戏",
            "关卡与体量控制被视为核心优势",
            "证明小规模体验同样有市场",
            "「Have you played」专栏做深度回顾"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "当行业默认「越大越好」，敢于把体验收束在恰好的长度，反而是对玩家时间的尊重，也是对团队产能的现实照顾。"
        }
      ]
    },
    {
      "id": "ga-worstclass",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·机制",
      "tag": "Worst Class Ever",
      "title": "《Worst Class Ever》把非对称对抗搬进教室：老师找出 NPC 中的捣蛋鬼",
      "summary": "Rock Paper Shotgun 介绍《Worst Class Ever》的非对称多人玩法：一名玩家扮演老师，需要在 NPC 学生中揪出偷偷吃糖的「坏孩子」。机制把校园恶作剧变成可玩的对抗。轻量创意与明确规则，是这类派对游戏能快速被理解的关键。",
      "image": "https://assetsio.gnwcdn.com/worst-class-ever.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "Rock Paper Shotgun（新作介绍）",
      "date": "2026-11-17",
      "url": "https://www.rockpapershotgun.com/worst-class-ever-takes-asymmetrical-multiplayer-back-to-school-with-a-teacher-player-trying-to-spot-the-naughty-children-among-the-npcs",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "非对称对抗",
        "多人游戏",
        "机制设计"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "采用非对称多人对抗结构",
            "老师玩家需在 NPC 中识别捣蛋的学生",
            "以校园恶作剧作为核心玩法主题",
            "规则简单、上手门槛低"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "好机制往往一句话就能讲清：当核心冲突足够直观，开发资源就能集中在打磨体验而非解释规则上。"
        }
      ]
    },
    {
      "id": "ga-snackbar",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "The Snackbar",
      "title": "《The Snackbar at the End of the World》把采集战斗与 Cooking Mama 式烹饪缝合",
      "summary": "Rock Paper Shotgun 报道新作《The Snackbar at the End of the World》：玩家在 1960 年代奇幻意大利采集食材、应对战斗，再以类似 Cooking Mama 的方式烹饪料理。题材与玩法的混搭形成独特辨识度。对独立开发者，这是「用组合创新低成本建立差异」的思路。",
      "image": "https://assetsio.gnwcdn.com/the-snackbar-at-the-end-of-the-world.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "Rock Paper Shotgun（新作介绍）",
      "date": "2026-11-17",
      "url": "https://www.rockpapershotgun.com/forage-and-fight-for-ingredients-in-a-magical-1960s-italy-and-whip-up-some-tasty-meals-cooking-mama-style-in-the-snackbar-at-the-end-of-the-world",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "独立游戏",
        "玩法融合",
        "烹饪"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "设定在 1960 年代的奇幻意大利",
            "融合采集、战斗与 Cooking Mama 式烹饪",
            "题材与玩法混搭带来辨识度",
            "以组合创新建立差异化"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "在玩法同质化严重的市场，把两套成熟机制缝出新体验，是中小团队可控的创新路径——关键在缝合得是否自然。"
        }
      ]
    },
    {
      "id": "ga-rasen",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·抢先体验",
      "tag": "Rasen",
      "title": "《Rasen》用格斗游戏的「回滚」技术改造 PvP 魂类体验",
      "summary": "Rock Paper Shotgun 报道，抢先体验新作《Rasen》是一款主打 PvP 的魂类游戏，并借用了格斗游戏中经典的 rollback netcode（回滚网络代码）来改善联机手感。跨类型借技术，是近年联机游戏的重要趋势。对做联网对战的团队，这类选型直接关系到体验下限。",
      "image": "https://assetsio.gnwcdn.com/rasen.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "Rock Paper Shotgun（新作报道）",
      "date": "2026-11-17",
      "url": "https://www.rockpapershotgun.com/rasen-out-in-early-access-now-is-a-pvp-focused-take-on-dark-souls-that-borrows-one-of-fighting-games-best-techy-tricks",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "PvP",
        "回滚网络",
        "魂类"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "《Rasen》进入抢先体验，主打 PvP",
            "借鉴格斗游戏的 rollback netcode 改善联机",
            "跨类型技术移植成为联机游戏趋势",
            "网络代码质量直接影响对战手感"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "回滚网络代码从格斗圈扩散到更多品类，说明「底层技术复用」往往比玩法抄搬更值得——好的手感是能跨类型迁移的。"
        }
      ]
    },
    {
      "id": "os-agui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·协议",
      "tag": "AG-UI",
      "title": "AG-UI 协议为前端应用接入智能体提供统一交互标准",
      "summary": "ag-ui-protocol/ag-ui 是 GitHub 趋势榜上的 TypeScript 项目，目标是定义「代理—用户交互协议」，把智能体接入前端应用的方式标准化。近期单日新增数百星。对做 AI 工具链的开发者，协议层统一意味着更少的重复造轮子。",
      "image": "https://opengraph.githubassets.com/4d5e7ea5085a87098eefb99692bcda8099560f4d155424a8761cf411965b380c/ag-ui-protocol/ag-ui",
      "source": "GitHub: ag-ui-protocol/ag-ui（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/ag-ui-protocol/ag-ui",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "AG-UI",
        "协议",
        "前端"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "定义 Agent-User Interaction 协议，连接智能体与前端",
            "TypeScript 实现，近期登上 GitHub 趋势榜",
            "目标是标准化智能体与界面的交互方式",
            "降低 AI 应用前端接入的重复开发"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "协议层的价值常被低估：当智能体需要嵌入各种界面，统一的交互标准能省下大量适配成本——这是基础设施级的开源机会。"
        }
      ]
    },
    {
      "id": "os-univer",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·办公",
      "tag": "Univer",
      "title": "Univer 用开源内核为产品与人构建 AI 办公套件",
      "summary": "dream-num/univer 是 GitHub 趋势榜上的 TypeScript 项目，提供可嵌入的 Office SDK，把编辑、计算、协作与文件处理带给人类用户和 AI 代理。近期单日新增星标居前列。对需要自建文档能力的团队，它是区别于商业套件的开源选项。",
      "image": "https://repository-images.githubusercontent.com/543101941/e14b70fa-fc46-4249-8bd8-399630941326",
      "source": "GitHub: dream-num/univer（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/dream-num/univer",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Univer",
        "Office SDK",
        "AI 办公"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "提供可嵌入的 Office SDK，基于可扩展开源内核",
            "同时服务人类用户与 AI 代理",
            "覆盖编辑、计算、协作与文件处理",
            "近期登上 GitHub 趋势榜前列"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把办公能力做成可嵌入 SDK，再同时面向人和代理设计，是 AI 时代基础软件的新范式——工具不再只为人准备。"
        }
      ]
    },
    {
      "id": "os-stitch",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·智能体",
      "tag": "Stitch Skills",
      "title": "Google Labs 开源 Stitch Skills，推动智能体技能标准化",
      "summary": "google-labs-code/stitch-skills 是一个遵循 Agent Skills 开放标准的技能库，可与 Stitch MCP 服务器配合，并兼容 Antigravity、Gemini CLI、Claude Code、Cursor 等编码代理。近期保持高热度。对想复用现成技能的团队，这是来自大厂的规范参考。",
      "image": "https://opengraph.githubassets.com/68e343ec14909df87a3d81ed7a3cb63f9908ceff435f104c8840b19b35af5184/google-labs-code/stitch-skills",
      "source": "GitHub: google-labs-code/stitch-skills（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/google-labs-code/stitch-skills",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Agent Skills",
        "MCP",
        "Google Labs"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "遵循 Agent Skills 开放标准的技能库",
            "配合 Stitch MCP 服务器使用",
            "兼容多种主流编码代理",
            "近期在 GitHub 趋势榜保持高热度"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "技能标准化是大厂押注的方向：当技能可以跨工具复用，代理生态才可能真正规模化——早点按其规范组织代码，迁移成本更低。"
        }
      ]
    },
    {
      "id": "os-skilleval",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·评测",
      "tag": "SkillEvaluator",
      "title": "NVIDIA 开源 SkillEvaluator，为智能体技能建立质量门槛",
      "summary": "NVIDIA/SkillEvaluator 是一个多层框架，用于评估 AI 代理技能与插件，提供质量门槛、语义重叠检测、合成评测集生成与实时代理评测。近期单日新增近千星。当技能数量爆发，「如何判断技能好不好」成了真问题。",
      "image": "https://opengraph.githubassets.com/f083bf3fe13e0fb1df2136a75f18fa8bea6a7f2adabec1afbc00c6622cd2e779/NVIDIA/SkillEvaluator",
      "source": "GitHub: NVIDIA/SkillEvaluator（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/NVIDIA/SkillEvaluator",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "SkillEvaluator",
        "评测",
        "NVIDIA"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "多层框架评估 AI 代理技能与插件",
            "含质量门槛与语义重叠检测",
            "支持合成评测集生成与实时评测",
            "近期登上 GitHub 趋势榜"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "当「写技能」变得容易，「验技能」就成了稀缺能力——把评测做成框架，是智能体工程走向成熟的标志。"
        }
      ]
    },
    {
      "id": "os-codeReview",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工具",
      "tag": "open-code-review",
      "title": "阿里开源代码评审工具，混合确定性流水线与 LLM 代理",
      "summary": "alibaba/open-code-review 是阿里开源的代码评审工具，采用「确定性流水线 + LLM 代理」混合架构，提供精确到行的评审意见，内置多语言规则集，并兼容 OpenAI 与 Anthropic 接口。近期星标增长显著。对重视代码质量的团队，这是可自建的评审方案。",
      "image": "https://repository-images.githubusercontent.com/1241960226/27bf01cb-17df-44d5-9b7b-bcf17c970c6d",
      "source": "GitHub: alibaba/open-code-review（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/alibaba/open-code-review",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "代码评审",
        "LLM",
        "阿里巴巴"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "混合确定性流水线与 LLM 代理架构",
            "提供精确到行的评审意见",
            "内置 NPE、线程安全、XSS、SQL 注入等规则",
            "兼容 OpenAI 与 Anthropic 接口"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「确定规则」与「模型判断」搭配，比纯靠模型评审更可控——用机器补人力，而不是把判断全外包给模型。"
        }
      ]
    },
    {
      "id": "os-cdp",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·开发工具",
      "tag": "Chrome DevTools MCP",
      "title": "Chrome DevTools MCP 把浏览器调试能力交给编码代理",
      "summary": "ChromeDevTools/chrome-devtools-mcp 是官方项目，让编码代理通过 MCP 调用 Chrome DevTools 的调试能力。仓库已有超过 5.7 万星，近期仍保持增长。对前端与 Web 游戏开发者，这意味着代理能真正「看见」并调试页面。",
      "image": "https://opengraph.githubassets.com/ad29656eda30cf6f302a94492ffe7e5ba1b8662f6cb14ca5bbdd60fd90b3d0f5/ChromeDevTools/chrome-devtools-mcp",
      "source": "GitHub: ChromeDevTools/chrome-devtools-mcp（一手）",
      "date": "2026-11-17",
      "url": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "DevTools",
        "MCP",
        "前端调试"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "让编码代理通过 MCP 使用 Chrome DevTools",
            "由 ChromeDevTools 官方组织维护",
            "仓库星标超过 5.7 万，近期保持增长",
            "适用于前端与 Web 项目的代理调试"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "代理一旦能直接读调试器数据，自动化就从「猜测式改代码」变成「有依据地修问题」——这类官方桥接项目值得关注。"
        }
      ]
    },
    {
      "id": "tu-unityrules",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·设计",
      "tag": "Unity 官方",
      "title": "Unity 官方指南：动手前先定义规则、状态与胜负条件",
      "summary": "Unity 官方博客 11 月 12 日发布游戏设计指南，用五步法讲清规则、游戏状态与胜负条件的设计：一句话写目标、按设置/进程/结算分类规则、画出状态流转、写清每种结局、再通过 playtest 验证。配图由 Claude Opus 5.5 生成。零基础读者也能照着走。",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/ebbc72a9b2744fe96af106cd8b1caa4f5dc1e93b-1920x1080.png",
      "source": "Unity 官方博客（一手）",
      "date": "2026-11-17",
      "url": "https://unity.com/blog/video-game-rules-states-win-conditions",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "游戏设计",
        "规则设计",
        "Unity"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "用五步法定义规则、状态与胜负条件",
            "规则分为设置、进程、结算三类",
            "强调先画状态流转图，再动手搭建",
            "以 playtest 检验目标与结局是否清晰"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "新手最常跳过「先把规则想清楚」这一步，结果在美术与关卡里返工——结构化设计看似慢，实则是省钱的做法。"
        }
      ]
    },
    {
      "id": "tu-mooc1",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·慕课",
      "tag": "中国大学 MOOC",
      "title": "《游戏开发基础》慕课用经典小游戏拆解开发思路",
      "summary": "国家高等教育智慧教育平台上的《游戏开发基础》课程由浙江传媒学院团队主讲，借助 Unity 引擎，以打地鼠、俄罗斯方块、贪吃蛇、推箱子等经典小游戏讲解程序实现思路。课程正在开课，面向零基础学习者。适合想从「玩」过渡到「做」的新生。",
      "image": "",
      "source": "中国大学 MOOC / 智慧教育平台（一手）",
      "date": "2026-11-17",
      "url": "https://www.chinaooc.com.cn/course/6a8627d5b44e493c760c8cbc",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "游戏开发基础",
        "慕课",
        "Unity"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "以 Unity 讲解多款经典小游戏的程序实现",
            "覆盖打地鼠、俄罗斯方块、贪吃蛇等案例",
            "由浙江传媒学院团队主讲，正在开课",
            "面向零基础学习者，强调算法与数据结构应用"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "从复刻经典小游戏入手，是新手建立「我能做出来」信心的最短路径——先完成，再谈创新。"
        }
      ]
    },
    {
      "id": "tu-mooc2",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·慕课",
      "tag": "中国大学 MOOC",
      "title": "《游戏引擎原理及应用》用 820 分钟视频讲透引擎模块",
      "summary": "中国传媒大学在智慧教育平台开设《游戏引擎原理及应用》一流课程，提供超过 820 分钟授课视频，系统讲解游戏引擎主要功能的实现原理及在 Unity 中的使用方法。课程以从零搭建案例为特色，帮助学习者理解引擎全貌。适合想补理论课的自学者。",
      "image": "",
      "source": "中国大学 MOOC / 智慧教育平台（一手）",
      "date": "2026-11-17",
      "url": "https://www.chinaooc.com.cn/course/698668cf95df98bb27d90d40",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "游戏引擎原理",
        "慕课",
        "Unity"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "系统讲解游戏引擎主要功能的实现原理",
            "提供超过 820 分钟授课视频",
            "案例从零搭建，突出学习目的",
            "把引擎各模块融合到具体游戏项目中"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "会用引擎和懂引擎原理是两回事；补上原理课，才能在遇到性能与架构问题时知道「为什么」。"
        }
      ]
    },
    {
      "id": "tu-godotch",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·视频",
      "tag": "Godot 频道",
      "title": "15 个优质 Godot 教学频道盘点，Heartbeast、GDQuest、Brackeys 领衔",
      "summary": "Developer Educators 更新 2026 年 11 月的 Godot 教学频道榜单，Heartbeast、GDQuest 与 Brackeys 位列前三，按覆盖深度、互动率与更新频率等维度排序。全部内容可在 YouTube 免费观看。对自学 Godot 的新手，这是挑选教程的实用索引。",
      "image": "https://developereducators.com/og/lists/best-godot-channels.png",
      "source": "Developer Educators（社区整理，一手榜单页）",
      "date": "2026-11-17",
      "url": "https://developereducators.com/lists/best-godot-channels",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Godot",
        "视频教程",
        "学习资源"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "盘点 15 个 Godot 教学频道并分维度排序",
            "Heartbeast、GDQuest、Brackeys 位列前三",
            "覆盖项目式与零基础入门等多种风格",
            "全部内容可在 YouTube 免费观看"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "免费优质教程已经足够多，新手的难点不是「找不到课」，而是「选对一条学到底」——榜单的价值在于缩小选择范围。"
        }
      ]
    },
    {
      "id": "tu-invest",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·发行",
      "tag": "融资指南",
      "title": "行业专家拆解 2026 年如何为游戏项目融资",
      "summary": "GamesIndustry.biz Academy 汇集行业专家建议，讲解 2026 年为游戏融资的路径：去哪里找资金、如何做 pitch、投资人看中什么。内容面向需要外部资金的独立团队。对项目预算紧张的开发者，这是发行之外另一堂必修课。",
      "image": "https://assetsio.gnwcdn.com/MCM-Comic-Con-Investment-Summit-2026-GI-Panel-(2).jpeg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz Academy（教程）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/how-to-get-investment-for-your-video-game-in-2026",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "融资",
        "独立开发",
        "pitch"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "讲解 2026 年游戏项目融资的现实路径",
            "覆盖资金来源与 pitch 方法",
            "行业专家分享投资人关注点",
            "面向需要外部资金的独立团队"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "技术人常把融资当成「别人的事」，但当项目规模超过自筹能力，会不会讲项目就和会不会做项目一样重要。"
        }
      ]
    },
    {
      "id": "tu-external",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·管理",
      "tag": "外部开发",
      "title": "五条黄金法则：如何与外部工作室合作少踩坑",
      "summary": "GamesIndustry.biz Academy 刊出 Code Wizards 负责人 Stuart Muckley 的五条外部开发准则，分享如何与外包或合作工作室协作，尽量减少摩擦、保持合作关系顺畅。对需要扩展产能的团队，外包协作是绕不开的一课。",
      "image": "https://assetsio.gnwcdn.com/jingming-pan-iYsrkq5qq0Q-unsplash.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "source": "GamesIndustry.biz Academy（教程）",
      "date": "2026-11-17",
      "url": "https://www.gamesindustry.biz/the-five-golden-rules-of-external-development",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "外包协作",
        "项目管理",
        "团队"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "分享与外部工作室合作的五条准则",
            "聚焦减少摩擦与维持合作体验",
            "来自 Code Wizards 负责人的实战经验",
            "适合需要扩展产能的团队参考"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "外包不是把活丢出去就完事——清晰的目标与边界，往往比合同本身更能决定协作结果。"
        }
      ]
    },
    {
      "id": "ai-hydrogen",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "AI·大模型",
      "tag": "Gemini 4 Hydrogen",
      "title": "Google 发布 Gemini 4 Hydrogen：主打快速执行的日常编码模型",
      "summary": "Google DeepMind 11 月 12 日发布 Gemini 4 Hydrogen，定位为面向日常编码与智能体工作流的「快速执行」模型，位于前沿模型 Carbon 与 Argon 之下。官方称其在默认设置下比 Gemini 3.8 Flash 快 2.5 倍，Terminal-Bench 4.1 得分从 18.2% 提升到 57%，黑白名单价格为每百万输入/输出 1.5/7.5 美元。数据均来自官方口径。",
      "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini-4-hydrogen__key-art__lockup__16-9.width-1300.jpg",
      "source": "Google DeepMind 官方博客（一手）",
      "date": "2026-11-17",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Gemini 4",
        "智能体",
        "编码模型"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "Hydrogen 定位为快速执行的日常编码模型",
            "官方称默认设置下比 3.8 Flash 快 2.5 倍",
            "Terminal-Bench 4.1 得分由 18.2% 升至 57%",
            "统一计价每百万输入/输出 1.5 与 7.5 美元"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "前沿模型负责深度推理、快速模型负责批量执行，这种「分层协作」正在成为标配——把合适的任务交给合适大小的模型，才是控本提效的关键。"
        }
      ]
    },
    {
      "id": "ai-fpscost",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "AI·成本",
      "tag": "Claude Fable 5.2",
      "title": "一句提示词生成可玩 FPS：Fable 5.2 的成本结构被逐项拆开",
      "summary": "分析文章以 Claude Fable 5.2 生成浏览器可玩 FPS 演示为样本，梳理其成本结构：约 8 小时、4.45 亿输入 token、270 万输出 token，按公开接口价折算约 550 美元。文章强调这些数字来自厂商与工程师公开案例，属原型验证而非独立实测。",
      "image": "https://ntgame.com/hardware/images/google-playground-unity-ai-games.webp",
      "source": "NTGame（成本结构分析，注明口径）",
      "date": "2026-11-17",
      "url": "https://ntgame.com/hardware/ai-generated-fps-cost",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Claude Fable 5.2",
        "AI 生成游戏",
        "成本"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "演示以一句提示词生成浏览器可玩 FPS",
            "约 8 小时、4.45 亿输入与 270 万输出 token",
            "按公开接口价折算约 550 美元",
            "数字为厂商与工程师公开案例，非独立实测"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「AI 也能做游戏」的惊叹拆成成本表，才有决策价值——单关演示与可发售成品之间，差的是工程化与人工打磨那一大段。"
        }
      ]
    },
    {
      "id": "ai-gazai",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "AI·游戏工具",
      "tag": "GAZAI",
      "title": "GAZAI 推出面向游戏与 VTuber 的娱乐特化型 LLM",
      "summary": "日本 GAZAI 公司 11 月 11 日开始提供娱乐特化型 LLM，面向游戏公司、VTuber 经纪与发行商，按客户数据微调，主打角色性格与世界观还原。模型针对轻小说与动漫的表达、情感与假名比例做了调整，并自建 GPU 服务器。能力定位来自厂商陈述。",
      "image": "https://api.yomimono.id/public/card/r_08c4c3e6b5afa072cb40c002.webp?size=wide&v=1794389832000",
      "source": "Yomimono（据 ASCII.jp 报道整理）",
      "date": "2026-11-17",
      "url": "https://yomimono.id/gazai-launches-entertainment-focused-llm-for-games-and-vtuber-agencies",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "GAZAI",
        "角色对话",
        "日语 LLM"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "面向游戏与 VTuber 的娱乐特化型 LLM",
            "按客户数据微调，主打角色性格与世界观还原",
            "针对动漫式表达与假名比例优化",
            "自建 GPU 服务器，降低对商业 API 依赖"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "通用模型做不好「角色像不像本人」，垂直微调就有了空间；不过效果是否成立，仍要看客户项目里的真实表现。"
        }
      ]
    },
    {
      "id": "ai-aibrief",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "AI·行业动态",
      "tag": "AI 日报",
      "title": "11 月中旬 AI 动态密集：国产世界模型、代理模型与支付打通同框",
      "summary": "11 月 16 日的 AI 热点汇总显示多条同日动态：华为云发布昇腾原生具身世界模型 CloudRobo WM1.2，Google 上线高速代理模型 Gemini 4 Hydrogen，OpenAI 推出 ChatGPT Wallet 打通代理支付。这些多为厂商公告与媒体转述，具体能力口径需回溯官方来源。",
      "image": "",
      "source": "稀土掘金（AI 日报聚合，注明转述口径）",
      "date": "2026-11-17",
      "url": "https://juejin.cn/post/7708030289726177334",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "AI 日报",
        "世界模型",
        "代理支付"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "华为云发布昇腾原生具身世界模型 CloudRobo WM1.2",
            "Google 上线高速代理模型 Gemini 4 Hydrogen",
            "OpenAI 推出 ChatGPT Wallet 打通代理支付",
            "信息来自厂商公告与媒体转述，需核对一手来源"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把多源信息放在同一张时间线上，能看出 AI 竞争已从「模型分数」扩展到世界模型、代理与支付等完整链路。"
        }
      ]
    },
    {
      "id": "ai-deepmind",
      "category": "ai",
      "categoryName": "AI 前沿",
      "subcategory": "AI·开源模型",
      "tag": "DeepSeek",
      "title": "DeepSeek 开放全栈 App 能力 API，缓存命中输入价再探底",
      "summary": "据 11 月 16 日 AI 简报，DeepSeek 将联网搜索、文件读取、链接阅读、OCR 与语音等 App 能力全面 API 化，开发者可通过多个端点复用，并开源聊天 Demo；V4.1 Flash 缓存命中输入价格最低降至每百万 token 0.003 美元。具体价格以官方公告为准。",
      "image": "https://www.deepseek.com/images/deepseek-social.jpg",
      "source": "DeepSeek 官方 API 文档（一手）",
      "date": "2026-11-17",
      "url": "https://api-docs.deepseek.com/news/news11252024",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "DeepSeek",
        "API",
        "推理成本"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "联网搜索、文件读取、OCR 与语音等能力全面 API 化",
            "开发者可通过多个端点复用并开源聊天 Demo",
            "V4.1 Flash 缓存命中输入价格大幅下探",
            "价格信息以官方公告为准"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把 App 级能力拆成可组合 API，再叠加价格下探，直接拉低了代理应用的试错门槛——成本曲线下降时，產品创意的重要性反而上升。"
        }
      ]
    },
    {
      "id": "co-devgamm",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·会展",
      "tag": "DevGAMM Lisbon",
      "title": "DevGAMM Lisbon 2026 于 11 月 17—18 日举行",
      "summary": "DevGAMM 葡萄牙站（Lisbon 2026）于 11 月 17 日至 18 日在里斯本 Carlos Lopes Pavilion 举行，涵盖演讲、游戏展示与 MeetToMatch 商务对接。官网当前为该届活动页。适合关注欧洲独立发行与商务对接的开发者留意。",
      "image": "https://devgamm.com/lisbon2026/wp-content/uploads/2026/06/DevGAMM_Lisbon_26_1200x628px.png",
      "source": "DevGAMM 官方网站（一手）",
      "date": "2026-11-17",
      "url": "https://devgamm.com/lisbon2026/",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "DevGAMM",
        "会展",
        "独立发行"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "DevGAMM Lisbon 2026 于 11 月 17—18 日举行",
            "地点为里斯本 Carlos Lopes Pavilion",
            "包含演讲、展示与商务对接环节",
            "官网为当届活动一手信息页"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "行业会展是独立团队对接发行与同行的高效场景；把行程和作品demo准备好，比单纯「去看看」更能换来机会。"
        }
      ]
    },
    {
      "id": "co-paper",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "叠纸游戏",
      "title": "叠纸游戏 2027 秋招返场，开放 UE5 在研项目与《恋与深空》岗位",
      "summary": "据 11 月 11 日的校招岗位快讯，叠纸游戏 2027 秋招返场，岗位覆盖《恋与深空》与在研 UE5 项目的角色原画、特效、关卡与战斗策划、客户端开发等方向，工作地上海，面向应届生与回国留学生。具体截止日期以官方投递页为准。",
      "image": "",
      "source": "搞定 offer（校招信息汇总，注明以官方为准）",
      "date": "2026-11-17",
      "url": "https://blog.gaodingoffer.cn/c314dd6fe3344622b4b074db29664491",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "叠纸游戏",
        "2027 秋招",
        "UE5"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "叠纸游戏 2027 秋招返场补录",
            "岗位覆盖《恋与深空》与在研 UE5 项目",
            "含美术、策划与客户端开发等方向",
            "工作地上海，面向应届及留学生"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "在研 UE5 项目集中放岗，往往意味着项目进入扩产阶段——对想做 3A 管线的应届生，这类岗位是难得的实战入口。"
        }
      ]
    },
    {
      "id": "co-netease",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易游戏互娱",
      "title": "网易互娱 27 届校招开放图形开发工程师岗位",
      "summary": "网易招聘官网显示，网易游戏（互娱）图形开发工程师岗位面向 27 届毕业生，工作地覆盖广州、上海、杭州，参与自研 3D 引擎底层研发，涉及渲染管线、物理模拟与全局光照。岗位要求扎实 C++ 与图形学基础，SIGGRAPH/CVPR 论文或神经渲染经验为加分项。",
      "image": "",
      "source": "网易招聘官网（一手）",
      "date": "2026-11-17",
      "url": "https://hr.163.com/job-detail.html?id=68172&lang=zh",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "网易游戏",
        "校招",
        "图形开发"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "面向 27 届的图形开发工程师岗位",
            "参与自研 3D 引擎底层研发",
            "涉及实时光追、全局光照与跨平台渲染",
            "要求扎实 C++ 与图形学基础"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "引擎底层岗位对数学与 C++ 的要求很高，但它提供的「从零搭底层」视野，是普通应用层开发很难替代的技术积累。"
        }
      ]
    },
    {
      "id": "co-viverse",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·黑客松",
      "tag": "VIVERSE Spark",
      "title": "VIVERSE Spark 2026 全球大学生黑客松开放报名，12 月 4 日截止",
      "summary": "HTC 旗下 VIVERSE 宣布 VIVERSE Spark 2026 全球大学生黑客松回归，赛期为 11 月 9 日至 12 月 4 日，设游戏、沉浸式叙事与社交体验三个赛道，支持 Unity WebGL、Godot、Three.js、Babylon.js 等 WebXR 引擎，1—5 人组队。获奖名单预计 2027 年 1 月公布。",
      "image": "https://pressreleasefeed.org/og.png",
      "source": "Press Release Feed（赛事新闻稿）",
      "date": "2026-11-17",
      "url": "https://pressreleasefeed.org/releases/htc-viverse-announces-viverse-spark-2026-global-university-hackathon-with-cash-505b24eb",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "VIVERSE Spark",
        "黑客松",
        "WebXR"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "赛期为 11 月 9 日至 12 月 4 日",
            "设游戏、沉浸式叙事与社交体验三赛道",
            "支持 Unity WebGL、Godot、Three.js 等引擎",
            "1—5 人组队，获奖名单 2027 年 1 月公布"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这类面向学生、免安装即可发布的 Web 赛事，试错成本很低——用现有引擎做一个能在浏览器打开的作品，就是最好的简历素材。"
        }
      ]
    },
    {
      "id": "co-gameoff",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·GameJam",
      "tag": "Game Off 2026",
      "title": "GitHub Game Off 2026 以 SHIFT 为主题，12 月 1 日截止",
      "summary": "GitHub 第 14 届 Game Off 游戏 jam 以「SHIFT」为主题，参赛者需在 12 月 1 日 13:37（PST）前把源码推送到公开 GitHub 仓库并在 itch.io 提交作品。可从视角切换、位移机制到位运算等多角度解读主题，社区投票将持续到 2027 年 1 月 1 日。",
      "image": "",
      "source": "DevObs（赛事报道，注明来源 GitHub 公告）",
      "date": "2026-11-17",
      "url": "https://www.devobs.io/news/news-event-6489486a68131f78bbc006ae",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Game Off 2026",
        "Game Jam",
        "GitHub"
      ],
      "content": [
        {
          "title": "要点梳理",
          "type": "list",
          "items": [
            "第 14 届 Game Off 以 SHIFT 为主题",
            "12 月 1 日 13:37 PST 提交截止",
            "需公开 GitHub 仓库并在 itch.io 提交",
            "社区投票持续到 2027 年 1 月 1 日"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Game Off 的价值不在奖金，而在「一个月内做完并公开」的纪律——对新手而言，完成一次完整发布比任何教程都更能建立工程直觉。"
        }
      ]
    }
  ]
};
