window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-28",
    "weekday": "星期六",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-28 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "腾讯混元 Hy3D 3.6 把 AI 3D 生成推进专业资产管线：200 万面、8K PBR 贴图，直指游戏高模工作流",
      "腾讯 DFly2 与蚂蚁 Ling-3.2-air 同日开源：一个让长文本解码提速 4.2 倍，一个 124B 只激活 55 亿",
      "Unite Tokyo 摊开 Unity 6.7/7 路线图：CoreCLR 迁移、ECS for All 与编码智能体官方插件",
      "TGA 2026 提名出炉：GTA6 八项领跑，国产《影之刃零》五项入围创单机新高",
      "TapTap/淘米 2027 校招把 AI 工具能力写进硬条件，Game Jam 与独立作品成加分项"
    ],
    "engineStatus": [
      {
        "name": "Unity",
        "type": "引擎",
        "status": "Unite Tokyo 摊开 6.7 LTS/7 路线图：CoreCLR 迁移、ECS for All、NTC 神经纹理压缩显存降约30%、Atrio 展示免烘焙 GI",
        "badge": "6.7/7 roadmap",
        "color": "#3f51b5"
      },
      {
        "name": "Unreal Engine",
        "type": "引擎",
        "status": "5.8 社区教程密集更新：卡通/火焰材质、Actor 组件复用、New Composure 广播级合成与 MCP×Codex 灯光 LookDev",
        "badge": "5.8",
        "color": "#0f172a"
      },
      {
        "name": "Godot",
        "type": "引擎",
        "status": "Material Maker 基于 Godot 构建程序化纹理工作流，1.8 版本持续迭代",
        "badge": "生态",
        "color": "#478cbf"
      },
      {
        "name": "Flax / Stride",
        "type": "引擎",
        "status": "Flax 1.13.1 热修复合入 30 项修复；开源 C# 引擎 Stride 更新至 4.4.3",
        "badge": "1.13.1/4.4.3",
        "color": "#ff9800"
      }
    ]
  },
  "hero": {
    "id": "hero-hy3d36",
    "category": "ai",
    "categoryName": "AI前沿",
    "tag": "今日头条",
    "title": "腾讯混元 Hy3D 3.6 把 AI 3D 生成推进专业资产管线",
    "summary": "11月27日，腾讯发布新一代 3D 大模型 Hy3D 3.6，主攻高模几何与 PBR 材质贴图：默认目标面数从上代 50 万提至 200 万、贴图最高 8K，几何表面更整洁、部件层次更清晰。模型已上线腾讯云 Token Hub 开放 API，并接入 Miora、游戏资产生成平台 LAP 与影视平台 WorkRally。它把 AI 生成从「看得过去的演示」往「能进重拓扑与烘焙环节的生产草稿」推了一步。对游戏美术而言，真正的价值不是替代建模，而是把高模起步的时间成本压下来。",
    "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-28-hero-hy3d36.jpg",
    "source": "腾讯新闻 / 腾讯混元",
    "date": "2026-11-28",
    "url": "https://news.qq.com/rain/a/20261127A07ADP00",
    "readTime": 7,
    "hotScore": 96,
    "tags": [
      "腾讯混元",
      "Hy3D 3.6",
      "3D生成",
      "PBR",
      "游戏资产"
    ],
    "content": [
      {
        "title": "要点速览",
        "type": "list",
        "items": [
          "11月27日腾讯发布 Hy3D 3.6，面向专业 3D 创作，重点优化高模几何与 PBR 材质贴图生成。",
          "默认目标面数由 Hy3D 3.1 的 50 万提升到 200 万，贴图分辨率最高 8K，硬表面与曲面细节更整洁。",
          "已上线腾讯云 Token Hub 提供 API，Miora、腾讯游戏 LAP、影视平台 WorkRally 完成接入；Public 创作引擎每日 5 次免费。"
        ]
      },
      {
        "title": "学习观察",
        "type": "text",
        "text": "原生 3D 生成模型与语言模型写代码生成 3D 是两条路线：前者更擅长角色、生物、服装与复杂道具的剪影和曲面，后者适合参数化零件与场景布局。Hy3D 3.6 强调的是「可直接进入后续流程的草稿」——表面平整、部件清晰、带 PBR 贴图，恰好对应游戏高模重拓扑与烘焙的入口要求。腾讯盲测称几何、纹理质量优于同类模型，但这是厂商口径。对中小团队的现实意义在于：把高模起步的重复劳动压缩，把精力留给真正需要审美判断的精修环节。"
      }
    ]
  },
  "items": [
    {
      "id": "en-ntc-compress",
      "category": "engine",
      "subcategory": "图形渲染",
      "badge": "Unity",
      "badgeType": "engine",
      "tag": "Unity",
      "title": "Unity 神经纹理压缩把显存占用压低近三成",
      "summary": "Unity 在 Unite Tokyo 展示 Neural Texture Compression：以 Sentis 在自有纹理上训练压缩模型，Atrio 场景纹理显存与磁盘体积各降约 30%，画质基本不变。功能将在 6.7 LTS 实验性登场、7.0 正式发布。",
      "image": "https://st.renderu.com/og/902315",
      "source": "Renderu / Unity",
      "date": "2026-11-28",
      "url": "https://renderu.com/zh/news/post/28929",
      "readTime": 6,
      "hotScore": 91,
      "tags": [
        "Unity",
        "NTC",
        "神经纹理压缩",
        "显存优化"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "NTC 工具内置于 Unity Editor，模型通过 Sentis 仅在开发者自有纹理数据上训练。",
            "Atrio 实测纹理显存占用减少近 30%，构建包体积同步下降约 30%。",
            "7.0 将推进 Shader Model 6.1 与 D3D12 LinAlg 支持，官方称推理速度最高可提升约 10 倍。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "纹理往往是移动游戏显存与包体的大头。NTC 的价值在于把「省显存」从人工挑格式变成项目内自动训练的工作流——但训练成本与解码对 shader model 的依赖仍需实测，别把厂商的 30% 直接写进预算表。"
        }
      ]
    },
    {
      "id": "en-atrio-urp-gi",
      "category": "engine",
      "subcategory": "图形渲染",
      "badge": "Unity",
      "badgeType": "engine",
      "tag": "Unity",
      "title": "Unity Atrio 展示免烘焙 URP 全局光照与反射",
      "summary": "Unite Tokyo 上 Unity 用 Atrio 场景演示 6.7/7 的 URP 新能力：Surface Cache GI 提供动态间接漫反射，屏幕空间反射支持移动端，地面真实环境光遮蔽并入 Volume 系统。",
      "image": "https://st.renderu.com/og/902048",
      "source": "Renderu / Unity",
      "date": "2026-11-28",
      "url": "https://renderu.com/zh/news/post/28912",
      "readTime": 6,
      "hotScore": 90,
      "tags": [
        "Unity",
        "URP",
        "全局光照",
        "Atrio"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Surface Cache GI 主打动态间接漫反射，在运行时性能与画质间取平衡。",
            "URP 新增屏幕空间反射、Ground Truth AO、物理光照单位与体积雾，并集成进 Volume 框架。",
            "Atrio  Samples 已在 Asset Store 提供，用于对照新渲染路径的实际表现。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把 GI 与反射塞进 URP，意味着中小团队不必为光照质量单独跳管线上 HDRP。这类「统一管线持续加厚」的方向值得跟，但实验性功能先在小场景验证回归风险，再决定是否进入主线。"
        }
      ]
    },
    {
      "id": "en-flax-1131",
      "category": "engine",
      "subcategory": "引擎版本",
      "badge": "Flax",
      "badgeType": "engine",
      "tag": "Flax",
      "title": "Flax 1.13.1 热修复合入 30 项修复与 22 个 PR",
      "summary": "Flax Engine 在 1.13 后两周发布 1.13.1：修复 30 个社区问题、合并 22 个 Pull Request，涉及场景加载回调、RPC 清理、脚本更新顺序与 Intel Arc 上的 DX12 启动崩溃。",
      "image": "https://flaxengine.com/wp-content/uploads/2026/11/Post_Flax1131.jpg",
      "source": "Flax Engine 官方",
      "date": "2026-11-28",
      "url": "https://flaxengine.com/?p=2619",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "Flax",
        "1.13.1",
        "热修复",
        "渲染后端"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "新增场景路径/文件名 API，公开 BatchedDrawCall 与 ConcurrentArenaAllocator。",
            "非 Windows 平台补上 BC6H 压缩支持，BC7 HDR 压缩问题同步修复。",
            "修掉 DX12 在 Intel Arc 上的启动崩溃、Vulkan 调试层警告与阴影接缝等渲染问题。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "一个引擎的安全感往往来自热修复质量而非大版本号。Flax 这次把重心放在编辑器工作流与图形后端边角问题上，对做工具链密集型管线的团队是积极信号——不过它仍是源码可用、非开源许可，商用前先算清 royalty。"
        }
      ]
    },
    {
      "id": "en-spartan-rt",
      "category": "engine",
      "subcategory": "引擎前沿",
      "badge": "Spartan",
      "badgeType": "engine",
      "tag": "Spartan",
      "title": "Spartan 引擎加入参考级路径追踪渲染路径",
      "summary": "开源引擎 Spartan 放出 11 月 19 日自动构建版，Renderer 新增「reference path tracer」参考路径追踪路径，提供 Vulkan/D3D12/WebGPU 多后端预编译包。",
      "image": "https://opengraph.githubassets.com/1/PanosK92/SpartanEngine",
      "source": "GitHub: PanosK92/SpartanEngine",
      "date": "2026-11-28",
      "url": "https://github.com/PanosK92/SpartanEngine/releases/tag/2026.11.19.20.07",
      "readTime": 5,
      "hotScore": 85,
      "tags": [
        "Spartan",
        "路径追踪",
        "WebGPU",
        "开源引擎"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "该构建版本在 Renderer 中加入 reference path tracer 路径追踪参考实现。",
            "提供 Windows Vulkan/D3D12、Linux Vulkan、macOS Metal、Windows WebGPU 与浏览器 WebGPU 多种包。",
            "首次启动需联网下载项目与世界资源，仓库附带 SHA-256 校验和。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把路径追踪做进可在浏览器 WebGPU 运行的开源引擎，是研究实时全局光照的低成本试验场。参考实现偏正确性而非性能，适合拿来做教学与对照，别指望直接支撑产品帧率。"
        }
      ]
    },
    {
      "id": "en-unite-roadmap",
      "category": "engine",
      "subcategory": "引擎路线图",
      "badge": "Unity",
      "badgeType": "engine",
      "tag": "Unity",
      "title": "Unite Tokyo 2026 摊开 Unity 6.7 与 Unity 7 双线路线图",
      "summary": "Unity 在 Unite Tokyo 公布 6.7 LTS 与 7.0 alpha 路线：Editor 迁移 CoreCLR、ECS for All 让 GameObject 同时也是 Entity，另有 Web Requests Profiler、统一 Netcode 与编码智能体官方插件。",
      "image": "https://unityreleases.com/brand/social-preview-gearbox.png",
      "source": "Unity Releases",
      "date": "2026-11-28",
      "url": "https://unityreleases.com/whats-new/unite-tokyo-2026",
      "readTime": 6,
      "hotScore": 89,
      "tags": [
        "Unity",
        "6.7 LTS",
        "Unity 7",
        "ECS",
        "CoreCLR"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "6.7 聚焦 CoreCLR 迁移基础、ECS for All 底座与 2D 图形/物理创作组件。",
            "7.0 计划在 Inspector 中查看与编辑 Entity 数据，网格图形后端 Unity Graphics Kernel 同步 preview。",
            "Unity CLI 1.0 已稳定，面向 Claude Code、Codex、Antigravity、Grok 的官方插件放出安装文档。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "路线图归路线图，落地节奏要看每个功能的实际版本。ECS for All 若真能让老项目渐进加速，会改变大量 Unity 团队的架构选择；编码智能体插件则是引擎厂商第一次把 AI 协作写进官方工具链。"
        }
      ]
    },
    {
      "id": "en-stride-443",
      "category": "engine",
      "subcategory": "引擎版本",
      "badge": "Stride",
      "badgeType": "engine",
      "tag": "Stride",
      "title": "开源 C# 引擎 Stride 更新至 4.4.3",
      "summary": "跨平台 C# 游戏引擎 Stride 在 11 月 17 日发布 4.4.3 版本。Stride 支持 2D/3D/VR，采用 C# 技术栈，是 Unity 之外的开源替代选项之一。",
      "image": "https://opengraph.githubassets.com/1/stride3d/stride",
      "source": "GitHub: stride3d/stride",
      "date": "2026-11-28",
      "url": "https://github.com/stride3d/stride",
      "readTime": 5,
      "hotScore": 82,
      "tags": [
        "Stride",
        "C#",
        "开源引擎",
        "版本更新"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Stride 是开源的 C# 2D/3D/VR 引擎，GitHub 仓库持续维护。",
            "社区目录将其 4.4.3（11 月 17 日）列为当前最新版本。",
            "与 Godot、PlayCanvas、O3DE 一同被列入 Unity 的开源替代候选。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "对 C# 团队而言，Stride 的价值是语言栈几乎无需切换。开源替代的成熟度和生态规模差距仍要正视，选型时把「社区活跃度」和「自己能维护多少」一起算进去。"
        }
      ]
    },
    {
      "id": "in-marvelous",
      "category": "industry",
      "subcategory": "厂商动向",
      "badge": "厂商重组",
      "badgeType": "business",
      "tag": "厂商重组",
      "title": "Marvelous 为主机业务寻求约 65 人自愿离职",
      "summary": "11月27日，《符文工房》《牧场物语》厂商 Marvelous 董事会批准职业转型计划，面向家用机业务约 65 人自愿离职，申请期 12月14日至次年1月8日，预计约 2.2 亿日元特别费用。",
      "image": "https://www.gaming.net/wp-content/uploads/2026/11/marvelous-seeks-65-voluntary-departures-in-console-game-restructuring.jpg",
      "source": "Gaming.net",
      "date": "2026-11-28",
      "url": "https://www.gaming.net/marvelous-seeks-65-voluntary-departures-in-console-game-restructuring",
      "readTime": 6,
      "hotScore": 90,
      "tags": [
        "Marvelous",
        "自愿离职",
        "主机业务",
        " restructuring"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "计划针对消费者游戏部门（主机/PC，不含手游），目标约 65 人，离职日原则上为 2027年3月31日。",
            "公司称主机项目变大、周期变长，将结合内部团队与外部合作伙伴的开发结构。",
            "据 Eurogamer 引Automaton，其 4—9 月数字内容利润同比大增，本轮调整并非因销售下滑。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "在利润改善的同时收缩固定成本，说明厂商在给长周期项目「削峰填谷」。把开发重心转向内部核心+外部协作，是中小体量厂商应对 3A 化成本曲线的常见选择——效果如何要看后续作品产能。"
        }
      ]
    },
    {
      "id": "in-ubisoft-ai-mandate",
      "category": "industry",
      "subcategory": "生产流程",
      "badge": "育碧",
      "badgeType": "business",
      "tag": "育碧",
      "title": "育碧被曝要求新游立项说明 AI 用法，不用需给理由",
      "summary": "据 Vertical Slice 报道并经游民星空转载，育碧要求内部提交立项方案时说明 AI 如何提效，若不使用 AI 须详细解释。此前育碧刚成立生成式 AI 工作室 Motherbrain。",
      "image": "",
      "source": "游民星空 / GameQuest",
      "date": "2026-11-28",
      "url": "https://www.gamersky.com/news/202611/2255207.shtml",
      "readTime": 6,
      "hotScore": 92,
      "tags": [
        "育碧",
        "生成式AI",
        "立项流程",
        "Motherbrain"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "多名在职员工称，提案若未写明 AI 使用计划将难以获批。",
            "管理层把生成式 AI 视为小团队快速做原型、迭代与及时砍项目的重要手段。",
            "财报显示员工数从 2022年9月的 2.07 万降至 2026年9月的 1.55 万，四年减少 5200 人。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把 AI 使用写进立项门槛，本质是把工具选择变成组织级默认项。这里的关键不是立场之争，而是「可验证」：原型更快能否转化为更好玩的游戏，需要项目数据回答，而不是口号。"
        }
      ]
    },
    {
      "id": "in-tga2026",
      "category": "industry",
      "subcategory": "行业展会",
      "badge": "TGA 2026",
      "badgeType": "event",
      "tag": "TGA 2026",
      "title": "TGA 2026 提名出炉：GTA6 八项领跑，国产《影之刃零》五项入围",
      "summary": "TGA 2026 年度游戏六强为《007 初露锋芒》《控制：共振》《GTA6》《影之刃零》《生化危机：安魂曲》《塞尔达传说：时之笛》重制版，GTA6 以 8 项提名居首。",
      "image": "https://images.ludens.com.tw/uploads/images/wp-content/uploads/2026/11/tga-2026-nominees.jpg",
      "source": "Ludens Media",
      "date": "2026-11-28",
      "url": "https://www.ludens.com.tw/tga-2026-nominees",
      "readTime": 6,
      "hotScore": 93,
      "tags": [
        "TGA 2026",
        "年度游戏",
        "GTA6",
        "影之刃零"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "参选资格为 11月20日前发售，GTA6 于 11月19日上线，评委提前拿到游戏。",
            "以发行商计任天堂 12 项最多，Capcom 11 项、Rockstar 8 项。",
            "新增「最佳玩家创作」奖；结果由 160 家媒体评审团（90%）与玩家投票（10%）共同决定。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "发售前一天入围引发的「野榜」争论，其实暴露的是评审机制与玩家感知的时间差。对开发者更有价值的信号是《影之刃零》以 5 项提名成为国产单机新高——全球同步发售的路径正在被验证。"
        }
      ]
    },
    {
      "id": "in-russia-license",
      "category": "industry",
      "subcategory": "政策监管",
      "badge": "海外市场",
      "badgeType": "business",
      "tag": "海外市场",
      "title": "俄罗斯讨论强制游戏发行许可并允许安全局获取玩家数据",
      "summary": "据《莫斯科时报》《商业报》11月23日报道，俄罗斯当局讨论对游戏实施类似电影的发行许可制度，并要求数据在俄境内存储、采用 SORM 监控系统。国家杜马计划年底前完成初审。",
      "image": "",
      "source": "GameLook",
      "date": "2026-11-28",
      "url": "http://www.gamelook.com.cn/2026/11/607139",
      "readTime": 6,
      "hotScore": 88,
      "tags": [
        "俄罗斯",
        "发行许可",
        "数据合规",
        "SORM"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "提案要求开发者与发行商取得发行许可证，并在通信监管局注册。",
            "要求用户数据存储在俄罗斯境内，采用 FSB 的 SORM  electronic 通信监控系统。",
            "行业组织警告：游戏是持续更新的「服务」，一次性证书一个月后即可能失效。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "对做出海的公司，这类政策的现实影响是合规成本与发布节奏的重新计算。证书制与「游戏即服务」的更新频率天然冲突，监督机制能否落地仍有变数，值得持续跟踪而非即刻下结论。"
        }
      ]
    },
    {
      "id": "in-bili-chenrui",
      "category": "industry",
      "subcategory": "厂商财报",
      "badge": "B站",
      "badgeType": "business",
      "tag": "B站",
      "title": "B站陈睿披露 AI 创作数据与四款新游储备",
      "summary": "B站董事长陈睿在业绩沟通中称，AI 原生视频创作平台 UpDream 累计观看超 50 亿分钟；首款自研游戏《闪耀吧！噜咪》海外流水占比约 45%，并一口气公布三款三国题材新游。",
      "image": "",
      "source": "GameLook",
      "date": "2026-11-28",
      "url": "http://www.gamelook.com.cn/2026/11/607343",
      "readTime": 6,
      "hotScore": 87,
      "tags": [
        "B站",
        "UpDream",
        "自研游戏",
        "出海"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "UpDream 创作视频累计观看超 50 亿分钟，播放破百万视频超 1000 条。",
            "《闪耀吧！噜咪》进入中国 iOS 下载榜前两名，海外市场约占其流水 45%。",
            "《三国志：王道天下》定档 12月24日，《仙境传说3》《激战：大牌英雄》《三国火凤燎原》计划 2027 年上线。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "分发平台做自研的关键，是能否用社区理解反向指导产品。海外流水占比接近一半说明内容型产品的全球化不再是可选项——但用密集新品对冲长线波动，最终仍要回到单品留存。"
        }
      ]
    },
    {
      "id": "in-kaiying-ai",
      "category": "industry",
      "subcategory": "公司研究",
      "badge": "恺英网络",
      "badgeType": "business",
      "tag": "恺英网络",
      "title": "恺英网络研报：AI 轻游戏平台 SoonPlay 探索视频即游戏",
      "summary": "华鑫证券 11月27日研报梳理恺英网络 AI 布局：旗下极逸人工智能推出 AI 轻游戏生成交互平台 SoonPlay，打通刷视频、玩游戏、做游戏三个场景。",
      "image": "",
      "source": "新浪财经 / 华鑫证券研报",
      "date": "2026-11-28",
      "url": "https://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/849088458567/index.phtml",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "恺英网络",
        "AI轻游戏",
        "SoonPlay",
        "视频即游戏"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "SoonPlay 被描述为全球首个 AI 轻游戏生成交互平台，主打「视频即游戏」。",
            "时光川行研发面向专业创作者的 AI 内容平台《零号台》，覆盖构思到成片全流程。",
            "公司持续探索 AI 陪伴、AI 潮玩、AI 短剧等新场景。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "券商研报带立场，数字与表述要打折看。真正值得技术团队留意的是「视频即游戏」这类交互形态：它把创作门槛降到内容消费场景里，是否成立要看留存与转化数据，而非概念新不新。"
        }
      ]
    },
    {
      "id": "ga-exodus-core",
      "category": "games",
      "subcategory": "新游速览",
      "badge": "新游",
      "badgeType": "game",
      "tag": "新游",
      "title": "回合制战术机甲新作 Exodus Core 11月28日上线",
      "summary": "黑暗科幻回合制战术游戏 Exodus Core 于 11月28日发售（抢先体验），玩家操控三台搭载士兵数字化人格的巨型机甲，对抗具备思维的虫群。支持中文。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3692020/bd3defbce4bec3e0e3cce4f4e8dcc4d81ebfd018/header.jpg?t=1795819767",
      "source": "Steam 商店",
      "date": "2026-11-28",
      "url": "https://store.steampowered.com/app/3692020/",
      "readTime": 5,
      "hotScore": 84,
      "tags": [
        "Exodus Core",
        "回合制战术",
        "机甲",
        "新游"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "发行日期 2026年11月28日，抢先体验，支持简体中文。",
            "核心玩法为高难度回合制战术，操控三台巨型机甲对抗虫群。",
            "Steam 商店页提供公开 header 图，appid 3692020 已通过 appdetails 核对名称。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "战术机甲是小而稳的独立品类。对开发者的启发在于：把「单位少、决策重」作为设计核心，能在有限美术成本下换取策略深度——比堆单位数量更适合小团队。"
        }
      ]
    },
    {
      "id": "ga-am-i-nima",
      "category": "games",
      "subcategory": "新游速览",
      "badge": "新游",
      "badgeType": "game",
      "tag": "新游",
      "title": "心理恐怖互动小说 Am I Nima 用组词推进对话",
      "summary": "心理恐怖游戏 Am I Nima 于 11月28日发售，玩家要在脑海中组词造句与母亲交流，设法让她相信自己就是女儿妮玛。以指向点击与互动叙事推进。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3224600/header.jpg",
      "source": "Steam 商店",
      "date": "2026-11-28",
      "url": "https://store.steampowered.com/app/3224600/",
      "readTime": 5,
      "hotScore": 82,
      "tags": [
        "Am I Nima",
        "心理恐怖",
        "互动小说",
        "新游"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "发行日期 2026年11月28日，类型为心理恐怖、互动小说、指向点击。",
            "核心机制是用词组造句与母亲对话，争取信任以推进剧情。",
            "Steam appid 3224600，名称经 appdetails 核对无误。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「语言生成」做成核心交互而非装饰，是叙事游戏少见的尝试。这类设计的关键在文本容错：玩家的输入如何被稳定映射到剧情分支，比恐怖氛围更决定体验下限。"
        }
      ]
    },
    {
      "id": "ga-10-million-pixels",
      "category": "games",
      "subcategory": "新游速览",
      "badge": "新游",
      "badgeType": "game",
      "tag": "新游",
      "title": "增量游戏 10 Million Pixels 把挖掘做成像素侵蚀",
      "summary": "增量游戏 10 Million Pixels 于 11月28日发售并支持中文，玩家在数百万像素中挖掘寻找唯一黄金像素，围绕探索与侵蚀主题展开。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4738100/b3f45c611fc7e96e0714a0a39b83606082577a9c/header.jpg?t=1795735526",
      "source": "Steam 商店",
      "date": "2026-11-28",
      "url": "https://store.steampowered.com/app/4738100/",
      "readTime": 5,
      "hotScore": 80,
      "tags": [
        "10 Million Pixels",
        "增量游戏",
        "物理",
        "新游"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "发行日期 2026年11月28日，支持简体中文，标签含增量、破坏、物理。",
            "玩法目标是挖掘数百万像素、找出唯一黄金像素。",
            "Steam appid 4738100，名称经 appdetails 核对无误。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "单一机制做到极致是增量游戏的常见打法。它提醒独立开发者：一个足够清晰的「唯一目标」，有时比复杂系统更能撑起完整体验。"
        }
      ]
    },
    {
      "id": "ga-dreadwinter",
      "category": "games",
      "subcategory": "新游速览",
      "badge": "新游",
      "badgeType": "game",
      "tag": "新游",
      "title": "魔法咖啡馆模拟 Dreadwinter 11月28日开启抢先体验",
      "summary": "工作模拟游戏 Dreadwinter 于 11月28日抢先体验发售，玩家经营一家诡异又温馨的魔法咖啡馆，在奇幻世界中精进手艺、把小店做成传奇。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2505230/header.jpg",
      "source": "Steam 商店",
      "date": "2026-11-28",
      "url": "https://store.steampowered.com/app/2505230/",
      "readTime": 5,
      "hotScore": 79,
      "tags": [
        "Dreadwinter",
        "工作模拟",
        "咖啡馆",
        "抢先体验"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "发行日期 2026年11月28日，抢先体验，标签含工作模拟、商店管理、温馨惬意。",
            "核心循环是经营咖啡馆、精进手艺并扩展影响力。",
            "Steam appid 2505230，名称经 appdetails 核对无误。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「诡异+温馨」的混搭定位，是模拟经营品类拉开差异的常见手法。抢先体验阶段适合观察商店页愿望单与更新节奏，再判断内容量是否支撑长线运营。"
        }
      ]
    },
    {
      "id": "ga-iron-dawn",
      "category": "games",
      "subcategory": "新游速览",
      "badge": "新游",
      "badgeType": "game",
      "tag": "新游",
      "title": "战术机甲射击 Iron Dawn 主打可完全摧毁战场",
      "summary": "Iron Dawn 于 11月27日发售，玩家作为佣兵驾驶员操控战争机器，选择合约、定制装备，部署到可完全摧毁的战场，带着收益撤离并升级武器库。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2765070/header.jpg",
      "source": "Steam 商店 / 腾讯新闻",
      "date": "2026-11-28",
      "url": "https://store.steampowered.com/app/2765070/",
      "readTime": 5,
      "hotScore": 81,
      "tags": [
        "Iron Dawn",
        "机甲",
        "撤离射击",
        "可摧毁场景"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "发行日期 2026年11月27日，标签含机甲、动作、机器人。",
            "核心是接合约、定制装备、在可完全摧毁的战场作战并撤离。",
            "Steam appid 2765070，名称经 appdetails 核对无误。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "可摧毁场景与撤离经济结合，把「环境交互」从噱头变成战术变量。对技术实现而言，破坏系统的性能预算与网络同步是这类项目真正的成本所在。"
        }
      ]
    },
    {
      "id": "ga-just-pull-weeds",
      "category": "games",
      "subcategory": "新游速览",
      "badge": "新游",
      "badgeType": "game",
      "tag": "新游",
      "title": "解压游戏《只管拔草》登陆 Steam，最多 6 人联机拔十万株",
      "summary": "日本独立团队 C-Chicken 开发的《只管拔草》11月27日登陆 Steam，目标是清完 10 万株杂草，支持最多 6 人联机，拔草、喂羊换钱、升级工具形成循环。",
      "image": "",
      "source": "3DM 游戏网",
      "date": "2026-11-28",
      "url": "https://www.3dmgame.com/news/202611/3961474.html",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "只管拔草",
        "劳动模拟",
        "多人联机",
        "独立游戏"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "2026年11月27日发售，单人或最多 6 人在线合作，支持简体中文。",
            "工具升级路线从空手、铲子、拔草机到黑洞、UFO，逐级提升效率。",
            "3DM 正文可 curl 200 读取，但图床有防盗链，按规则不留外链配图。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「重复劳动」做成解压核心，靠的是升级反馈而非叙事。这类极简循环提醒我们：多人共处本身就是内容——和朋友一起做无意义的事，往往比复杂目标更有黏性。"
        }
      ]
    },
    {
      "id": "os-pumpkin",
      "category": "opensource",
      "subcategory": "开源引擎",
      "badge": "开源",
      "badgeType": "engine",
      "tag": "开源",
      "title": "Pumpkin：用 Rust 重写的高性能 Minecraft 服务器",
      "summary": "Pumpkin 是用 Rust 编写的 Minecraft 服务器，星标约 1.3 万，通过 Cargo Workspace 拆分模块与 Tokio 并发，兼容 Java/Bedrock，并提供 WASM 插件机制。",
      "image": "https://opengraph.githubassets.com/1/Pumpkin-MC/Pumpkin",
      "source": "GitHub: Pumpkin-MC/Pumpkin",
      "date": "2026-11-28",
      "url": "https://github.com/Pumpkin-MC/Pumpkin",
      "readTime": 6,
      "hotScore": 90,
      "tags": [
        "Pumpkin",
        "Rust",
        "Minecraft",
        "服务器"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "项目采用 Rust Cargo Workspace，拆出 auth、config、command、inventory、plugin-api 等模块。",
            "官方基准：冷启动约 9.6–12.9ms、空闲内存约 60MiB，400–700 人并发内存约 1.38–1.74GiB。",
            "插件可运行在 WASM 环境，支持 Rust、Python、Kotlin、Go、C# 等语言；仍处 Pre-release。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "用 Rust 重写服务端的核心收益是并发模型与内存控制。官方基准由项目自测、且尚未实现全部原版机制，选型时要按自己的玩家规模复测——别把实验室数字当生产承诺。"
        }
      ]
    },
    {
      "id": "os-arnis",
      "category": "opensource",
      "subcategory": "开源工具",
      "badge": "开源",
      "badgeType": "engine",
      "tag": "开源",
      "title": "Arnis 用 OpenStreetMap 数据把真实城市生成进 Minecraft",
      "summary": "开源工具 Arnis 用 OpenStreetMap 数据把地球上任意地点生成成可游玩的 Minecraft 世界，GitHub 下载近 90 万、约 70 名贡献者，已从 Python 原型重写为 Rust。",
      "image": "https://opengraph.githubassets.com/1/louis-e/arnis",
      "source": "GitHub: louis-e/arnis",
      "date": "2026-11-28",
      "url": "https://github.com/louis-e/arnis",
      "readTime": 6,
      "hotScore": 89,
      "tags": [
        "Arnis",
        "OpenStreetMap",
        "Minecraft",
        "Rust"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "用户在地图选区，工具通过 Overpass API 拉取建筑、道路、河流、铁路与森林数据生成世界。",
            "复杂结构做 3D 模型转换以保留比例与建筑细节，结果直接写入游戏存档目录。",
            "团队已把地形生成扩展到月球与火星，使用 NASA 等机构的公开高程数据。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把真实地理数据转成游戏内容，是程序化生成最直观的一类落地。Rust 重写带来大规模区域的性能余量，AI 辅助则被用于自动化琐事——作者保留架构决策、把重复任务交给工具的分工方式值得借鉴。"
        }
      ]
    },
    {
      "id": "os-fantasy-map",
      "category": "opensource",
      "subcategory": "开源工具",
      "badge": "开源",
      "badgeType": "engine",
      "tag": "开源",
      "title": "Fantasy Map Generator 用 Voronoi 生成自洽的幻想地图",
      "summary": "Azgaar/Fantasy-Map-Generator 是浏览器端开源地图生成器，用 Voronoi 图程序化生成地形、政体、文化系统，星标约 6220，最新版本 v1.158.0。",
      "image": "https://opengraph.githubassets.com/1/Azgaar/Fantasy-Map-Generator",
      "source": "GitHub: Azgaar/Fantasy-Map-Generator",
      "date": "2026-11-28",
      "url": "https://github.com/Azgaar/Fantasy-Map-Generator",
      "readTime": 5,
      "hotScore": 84,
      "tags": [
        "Fantasy Map Generator",
        "Voronoi",
        "程序化生成",
        "世界构建"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "基于 Voronoi 图与地理逻辑生成地形，并集成政体、文化、宗教与军事系统。",
            "参数高度可调、提供可视化编辑器，浏览器直接运行并支持离线桌面版。",
            "GitHub 仓库 11月12日发布 v1.158.0，社区持续迭代。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "世界构建工具的价值不在「画得漂亮」，而在内在一致性——地形决定交通、交通影响政体边界。这种把系统耦合起来的程序化思路，对做开放世界与叙事设定的团队都有参考价值。"
        }
      ]
    },
    {
      "id": "os-material-maker",
      "category": "opensource",
      "subcategory": "开源工具",
      "badge": "开源",
      "badgeType": "engine",
      "tag": "开源",
      "title": "Material Maker 用节点化流程生成程序化纹理",
      "summary": "Material Maker 是基于 Godot 引擎构建的开源程序化纹理与 3D 绘制工具，通过节点连接纹理生成器、滤镜与数学运算，产出 PBR 材质贴图并导出到外部引擎。",
      "image": "https://opengraph.githubassets.com/1/RodZill4/material-maker",
      "source": "GitHub: RodZill4/material-maker",
      "date": "2026-11-28",
      "url": "https://github.com/RodZill4/material-maker",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "Material Maker",
        "程序化纹理",
        "PBR",
        "Godot"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "节点式界面把纹理生成器、滤镜与数学运算连成复杂材质。",
            "支持程序化笔刷直接在 3D 模型上绘制，可实时预览并导出贴图。",
            "最近发布 1.8 版本，MIT 许可，覆盖 Windows/macOS/Linux。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "程序化纹理的核心优势是可参数化与可复用：一套节点图能派生整个材质族。对缺美术资源的团队，它是补齐 PBR 素材管线的现实选择之一，但艺术方向仍需人工把控。"
        }
      ]
    },
    {
      "id": "os-llamacpp",
      "category": "opensource",
      "subcategory": "开源框架",
      "badge": "开源",
      "badgeType": "ai",
      "tag": "开源",
      "title": "llama.cpp 1.1.0 按体积预算自动逐层量化",
      "summary": "llama.cpp 发布 1.1.0：可按给定体积预算自动逐层量化，免去手工挑选量化档位；旧 llama_batch 接口已废弃，脚本需迁移到 llama_batch_ext。",
      "image": "https://opengraph.githubassets.com/1/ggml-org/llama.cpp",
      "source": "GitHub: ggml-org/llama.cpp",
      "date": "2026-11-28",
      "url": "https://github.com/ggml-org/llama.cpp",
      "readTime": 6,
      "hotScore": 91,
      "tags": [
        "llama.cpp",
        "量化",
        "本地推理",
        "1.1.0"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "新版本支持按体积预算自动逐层量化，降低手工调参门槛。",
            "旧 llama_batch 接口废弃，相关脚本需改用 llama_batch_ext。",
            "项目星标约 13.6 万，是 C/C++ 本地大模型推理的核心基础设施之一。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「给个预算就自动量化」把量化从专家活变成工程默认值，这对本地 AI 工具链是实质性进步。接口废弃提醒维护者：升级前先跑一遍回归，别让脚本在版本切换中静默失效。"
        }
      ]
    },
    {
      "id": "os-angelspec",
      "category": "opensource",
      "subcategory": "开源框架",
      "badge": "开源",
      "badgeType": "ai",
      "tag": "开源",
      "title": "腾讯 AngelSpec 开源：DFly2 背后的投机采样训练框架",
      "summary": "腾讯混元在开源 DFly2 草稿模型的同时，把配套训练推理框架 AngelSpec 并入仓库，支持隐状态落盘复用与 256K 上下文大规模训练。",
      "image": "https://opengraph.githubassets.com/1/Tencent/AngelSpec",
      "source": "GitHub: Tencent/AngelSpec",
      "date": "2026-11-28",
      "url": "https://github.com/Tencent/AngelSpec",
      "readTime": 6,
      "hotScore": 88,
      "tags": [
        "AngelSpec",
        "投机采样",
        "腾讯混元",
        "训练框架"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "DFly2 权重与训练代码一并开源，训练管线并入 AngelSpec。",
            "框架支持隐状态落盘复用，面向 256K 上下文的大规模训练场景。",
            "技术报告已上 arXiv，权重托管在 Hugging Face。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「模型」和「训练框架」一起开源，比只放权重更有工程价值——团队可以照着配置给自家稀疏模型配加速器。注意其收益依赖目标模型具备可复用的 KV 与索引选择，稠密模型受益有限。"
        }
      ]
    },
    {
      "id": "tu-cel-shading",
      "category": "tutorials",
      "subcategory": "材质教程",
      "badge": "教程",
      "badgeType": "engine",
      "tag": "教程",
      "title": "UE5 从零搭一套卡通渲染后处理材质",
      "summary": "Epic 官方社区教程用四步讲清卡通材质：Unlit 着色模型、点积、参数与材质实例，依次实现基础卡通阴影、分层阴影、高光与描边，适合材质编辑器新手。",
      "image": "",
      "source": "Epic Developer Community",
      "date": "2026-11-28",
      "url": "https://dev.epicgames.com/community/learning/tutorials/YDwRx/creating-a-simple-stylized-cel-shading-post-process-material-in-unreal-engine-5",
      "readTime": 6,
      "hotScore": 86,
      "tags": [
        "Unreal Engine",
        "卡通渲染",
        "材质",
        "后处理"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "教程面向 UE5 材质编辑器新手，用 Unlit 模型与点积搭建卡通光照。",
            "四步递进：基础阴影、分层阴影、高光、描边，配材质实例便于复用。",
            "Epic 官方社区页可读，但其 imgproxy 图床带本站 Referer 返回 403，按规则留空配图。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "卡通渲染是理解「材质即计算」的绝佳入门：每一个视觉特征都能还原成节点运算。对新手来说，比照着效果图调参数更有价值的，是理解每一步背后的数学意图。"
        }
      ]
    },
    {
      "id": "tu-fire-material",
      "category": "tutorials",
      "subcategory": "材质教程",
      "badge": "教程",
      "badgeType": "engine",
      "tag": "教程",
      "title": "UE5 纯节点做动态火焰着色器：UV 扭曲与渐变叠加",
      "summary": "Epic 社区教程只用材质节点制作风格化动态火焰：生成程序化条带、用正弦波扭曲 UV、叠加渐变并减去平移纹理，适配火把、网格体与 Niagara 缎带轨迹。",
      "image": "",
      "source": "Epic Developer Community",
      "date": "2026-11-28",
      "url": "https://dev.epicgames.com/community/learning/tutorials/58vZY/ich-habe-feuermaterialien-in-der-unreal-engine-5-erstellt",
      "readTime": 6,
      "hotScore": 84,
      "tags": [
        "Unreal Engine",
        "火焰着色器",
        "UV扭曲",
        "Niagara"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "教程全程不写代码，用材质节点完成程序化条带与 UV 正弦扭曲。",
            "多层 Lerp 渐变叠加出火焰纵深，滚动纹理用于溶解与裁切火焰形状。",
            "末尾给出材质优化与 Niagara 缎带集成思路，附项目下载。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "火焰特效的本质是「噪声+时间+渐变」的组合。这类教程的价值在于给出可拆解的节点结构，学会之后能迁移到水流、能量场等一大类动态效果。"
        }
      ]
    },
    {
      "id": "tu-actor-component",
      "category": "tutorials",
      "subcategory": "蓝图进阶",
      "badge": "教程",
      "badgeType": "engine",
      "tag": "教程",
      "title": "UE 蓝图 Actor 组件：让去实体化能力在多种 Actor 间复用",
      "summary": "Epic 官方教程讲解如何构建可复用的蓝图 Actor 组件：以网格体去实体化并恢复为示例，把同一行为套用到墙体、移动平台与物理摆动目标上。",
      "image": "",
      "source": "Epic Developer Community",
      "date": "2026-11-28",
      "url": "https://dev.epicgames.com/community/learning/tutorials/wr5nG/unreal-engine-actor",
      "readTime": 5,
      "hotScore": 82,
      "tags": [
        "Unreal Engine",
        "蓝图",
        "Actor组件",
        "复用"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "从零构建蓝图 Actor 组件，实现网格体去材质化与可逆恢复。",
            "同一组件复用到墙体、移动平台、物理驱动目标，保留各自原有行为。",
            "强调共享组件定义与独立实例状态的区别，用 UE5.8.3 录制。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "组件化是蓝图工程从「能跑」走向「好维护」的分水岭。共享定义+独立状态这套思路，正是把玩法能力做成可复用模块的基础，值得每个蓝图开发者练一遍。"
        }
      ]
    },
    {
      "id": "tu-interaction-system",
      "category": "tutorials",
      "subcategory": "蓝图入门",
      "badge": "教程",
      "badgeType": "engine",
      "tag": "教程",
      "title": "UE5.8 从零搭一套基于射线的通用交互系统",
      "summary": "Epic 社区入门教程用蓝图搭建第三人称/第一人称交互框架：从相机发射线条追踪获取注视 Actor，设置交互距离，配合接口与基类实现开门等示例。",
      "image": "",
      "source": "Epic Developer Community",
      "date": "2026-11-28",
      "url": "https://dev.epicgames.com/community/learning/tutorials/19Kvl/unreal-engine-ue-5-8-3d-interaction-system",
      "readTime": 5,
      "hotScore": 80,
      "tags": [
        "Unreal Engine",
        "交互系统",
        "线条追踪",
        "接口"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "用线条追踪从相机获取玩家注视的 Actor，并设置交互距离。",
            "讲解 Hit Result、蓝图接口、可交互对象基类与子类继承。",
            "附带准星 UI、简单输入与调试消息，附赠用 Move Component To 做门动画。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "交互系统是几乎所有 3D 游戏的第一块拼图。用接口+基类而非硬编码判断，能让后续新增可交互物件的成本趋近于零——这是新手进阶时最该建立的习惯。"
        }
      ]
    },
    {
      "id": "tu-composure",
      "category": "tutorials",
      "subcategory": "影视制作",
      "badge": "教程",
      "badgeType": "engine",
      "tag": "教程",
      "title": "UE5.8 New Composure：广播级 3D 合成工作流",
      "summary": "Epic 社区教程带你实操 UE5.8 新版 Composure：用 Composite Actor、Layer 与 Pass 做绿幕抠像与 3D 环幕投影，并通过 Pixel Streaming 连接 iPhone 做虚拟摄影机。",
      "image": "",
      "source": "Epic Developer Community",
      "date": "2026-11-28",
      "url": "https://dev.epicgames.com/community/learning/tutorials/4VE9R/unreal-engine-5-8-new-composure-broadcast-style-3d-compositing-workflow",
      "readTime": 5,
      "hotScore": 81,
      "tags": [
        "Unreal Engine",
        "Composure",
        "虚拟制片",
        "Pixel Streaming"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "覆盖新版 Composure 架构、Composite Actor、Layer 与 Pass 的组织方式。",
            "实操绿幕抠像、预录素材投影到 3D 环幕网格。",
            "讲解 VCam 设置与 iPhone 经 Pixel Streaming 的虚拟摄影机控制。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "实时合成把影视级流程压进引擎，成本结构随之改变。对做虚拟制片或过场内容的小团队，这套工作流值得研究——但硬件与延迟仍是落地的硬门槛。"
        }
      ]
    },
    {
      "id": "tu-mcp-lookdev",
      "category": "tutorials",
      "subcategory": "AI 工作流",
      "badge": "教程",
      "badgeType": "ai",
      "tag": "教程",
      "title": "UE × AI 实战：用 Unreal MCP 与 Codex 做参考图灯光 LookDev",
      "summary": "Epic 社区中文教程把 UE5.8 官方 Unreal MCP 接入 ChatGPT Codex，用自然语言在一个房间里做清晨、晚霞、夜晚三套灯光，并对照参考图核验 AI 改了哪些参数。",
      "image": "",
      "source": "Epic Developer Community",
      "date": "2026-11-28",
      "url": "https://dev.epicgames.com/community/learning/tutorials/ryk05/unreal-engine-ue-x-ai-unreal-mcp-codex-lookdev",
      "readTime": 6,
      "hotScore": 90,
      "tags": [
        "Unreal Engine",
        "MCP",
        "Codex",
        "灯光LookDev"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "从 NoLight 关卡起步，对照参考图用自然语言调整阳光方向与灯具布置。",
            "讲解锁定曝光、体积雾表现窗边光束，并在夜景加入蓝色月光。",
            "核心是让 AI 执行后逐项确认它改了哪些灯光与参数值。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这是把 AI 智能体接进引擎工具链的具体样本。最有价值的不是「AI 会打灯」，而是教程坚持逐项核验——能验证结果，才敢把重复劳动交给智能体。"
        }
      ]
    },
    {
      "id": "ai-dfly2",
      "category": "ai",
      "subcategory": "大模型",
      "badge": "AI",
      "badgeType": "ai",
      "tag": "AI",
      "title": "腾讯混元开源 DFly2：不改主模型，长文本解码提速 4.2 倍",
      "summary": "11月26日腾讯混元开源投机采样草稿模型 DFly2 及训练框架 AngelSpec。它复用主模型 KV 与索引，注意力开销与上下文长度脱钩，Agent 场景最高 4.2 倍解码加速且输出一致。",
      "image": "https://ai-bot.cn/wp-content/uploads/2026/11/DFly2-website.png",
      "source": "AI 工具集 / 腾讯混元",
      "date": "2026-11-28",
      "url": "https://ai-bot.cn/dfly2",
      "readTime": 7,
      "hotScore": 94,
      "tags": [
        "腾讯混元",
        "DFly2",
        "投机采样",
        "长文本"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "DFly2 通过 KV Share 与 Index Share 复用主模型资源，注意力复杂度收敛为常数级。",
            "19 个公开评测集上，长文与 Agentic 平均加速比分别比 DSpark 高约 12% 与 30%。",
            "官方口径：4.2 倍是纯解码段数字，把 64K 预填充算进来端到端约 1.35 倍。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「白捡的推理加速」有明确边界：它依赖目标模型是稀疏注意力架构，且收益集中在长文本与多轮 Agent。把端到端口径讲清楚，比单看 4.2 倍更能避免选型误判。"
        }
      ]
    },
    {
      "id": "ai-ling32",
      "category": "ai",
      "subcategory": "大模型",
      "badge": "AI",
      "badgeType": "ai",
      "tag": "AI",
      "title": "蚂蚁开源 Ling-3.2-air：1240 亿总参数、每 token 仅激活 55 亿",
      "summary": "蚂蚁百灵开源 Ling-3.2-air，原生多模态 MoE，总参数 124B、每 token 激活 5.5B，支持文本图像视频混合输入，MIT 许可可商用，SWE-bench Pro 由上代 26.40 升至 58.28。",
      "image": "https://cdn.modelscope.cn/social-thumbnails/models/inclusionAI/Ling-3.2-air.png",
      "source": "ModelScope / 蚂蚁百灵",
      "date": "2026-11-28",
      "url": "https://modelscope.cn/models/inclusionAI/Ling-3.2-air",
      "readTime": 6,
      "hotScore": 91,
      "tags": [
        "蚂蚁百灵",
        "Ling-3.2-air",
        "MoE",
        "开源模型"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "模型卡写明 Total 124B、Activated 5.5B，多模态 MoE 架构。",
            "官方称 SWE-bench Pro 从 26.40 提升到 58.28，AutomationBench-AA 从 15.7% 升至 61%。",
            "MIT 许可可商用；但长尾推理仍需数张百 GB 级卡，谈不上端侧。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "稀疏激活把「大模型能力」与「单次推理成本」解耦，是开源阵营今年的主线之一。对预算有限的团队，它提供了私有化部署的新选项——但显存门槛决定了它仍是企业级方案。"
        }
      ]
    },
    {
      "id": "ai-shownow",
      "category": "ai",
      "subcategory": "世界模型",
      "badge": "AI",
      "badgeType": "ai",
      "tag": "AI",
      "title": "ShowNow 用「预生成动作分支」把世界模型延迟砍掉 66%",
      "summary": "新加坡国立大学 Show Lab 于 11月27日发布 ShowNow：在上一帧播放时预生成最多八条动作条件视频分支，用户按键瞬间提交对应分支。ViZDoom 中位延迟从 620ms 降至 208ms。",
      "image": "",
      "source": "Emergent / NUS Show Lab",
      "date": "2026-11-28",
      "url": "https://emergent.sh/news/shownow-cuts-world-model-latency-66-action",
      "readTime": 7,
      "hotScore": 92,
      "tags": [
        "世界模型",
        "ShowNow",
        "推测执行",
        "实时交互"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "单张 H100 上 5B 模型中位延迟降 66%、P99 降 73%，480p/16fps 并维持八条分支。",
            "33B 变体在 8 卡 B300 上达 1344×768、23.94fps，中位延迟 232ms。",
            "论文承认在视觉保真度与长程一致性上存在权衡，但未给出量化数据。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把 CPU/GPU 的空闲播放算力拿去「猜」下一步，是推测执行思想在生成式视频里的移植。208ms 让神经渲染环境接近可玩，但保真度代价仍是开放问题——离真正替代引擎还很远。"
        }
      ]
    },
    {
      "id": "ai-karpathy-map",
      "category": "ai",
      "subcategory": "AI 应用",
      "badge": "AI",
      "badgeType": "ai",
      "tag": "AI",
      "title": "Karpathy 用 Claude Code 七小时生成文明风格游戏地图",
      "summary": "Andrej Karpathy 用 Claude Code 桌面版加 Opus 5.5，7 小时生成约 4.5 万行代码，把美国 31 个真实数据源整合到 25 公里六边形网格，做成一张文明风格游戏地图。",
      "image": "",
      "source": "微信公众号 @码上八分钟（授权整理）",
      "date": "2026-11-28",
      "url": "https://mp.weixin.qq.com/s?__biz=MzcwMTQ0MzU3MQ==&mid=2247484386&idx=1&sn=3b6d6360bb45e9e2c623ff27858209f1",
      "readTime": 6,
      "hotScore": 90,
      "tags": [
        "Karpathy",
        "Claude Code",
        "Vibe Coding",
        "数据可视化"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "GDP 映射为金产量、城市按人口点亮，数据来自人口普查、经济分析局等 31 个来源。",
            "整套项目约 4.5 万行代码、耗时 7 小时，被视作有代表性的 vibe coding 展示。",
            "原始出处为 Karpathy 社交平台帖，本条落地用作者授权的公众号整理页。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "当别人还在争论 AI 能否写代码时，这类项目已经用它搭起数据驱动的平行世界。可验证性是关键：数据源真实、结果可对照，才让大规模生成代码变得可信。"
        }
      ]
    },
    {
      "id": "ai-anthropic-rust",
      "category": "ai",
      "subcategory": "开发工具",
      "badge": "AI",
      "badgeType": "ai",
      "tag": "AI",
      "title": "Anthropic 把 Claude Messages API 从 Python 迁到 Rust",
      "summary": "Anthropic 将 Claude Messages API 由 Python 迁移至 Rust，官方 SDK 与接口同步更新，社区实测首 token 中位时间下降约 20%。这是其近期连续抠开发者体验的又一步。",
      "image": "https://assets.claude.com/6d4a0d28992ade92d6fa63646fd9c9d318245c6c.jpg",
      "source": "微信公众号 @JavaFamily（授权整理）",
      "date": "2026-11-28",
      "url": "https://mp.weixin.qq.com/s?__biz=MzUxMjA2Mjc4MA==&mid=2247485664&idx=1&sn=64037d356416a888cddc8d8574d2c561",
      "readTime": 6,
      "hotScore": 87,
      "tags": [
        "Anthropic",
        "Claude API",
        "Rust",
        "性能优化"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Messages API 从 Python 迁到 Rust，官方 SDK 与接口同步换血。",
            "社区报道首 token 中位时间降约 20%，目标是延迟、吞吐与内存的极限优化。",
            "配合桌面端 Artifacts 安装成应用等动作，Anthropic 在开发者体验上持续加码。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "主干道接口换语言，图的是长期的性能与稳定性红利。这类底层重写短期看不出功能变化，却决定了上层工具的天花板——对做 AI 应用集成的团队，值得关注接口与延迟的后续变化。"
        }
      ]
    },
    {
      "id": "ai-sage-interaction",
      "category": "ai",
      "subcategory": "大模型",
      "badge": "AI",
      "badgeType": "ai",
      "tag": "AI",
      "title": "上海 AI Lab 开源全双工模型 Sage-Interaction，可被随时打断",
      "summary": "上海人工智能实验室开源全双工多模态模型 Sage-Interaction，支持随时打断、平滑接话与话题切换，语音响应时延压到 1.29 秒，双工交互质量得分 80.73。",
      "image": "https://ai-bot.cn/wp-content/uploads/2026/11/Sage-Interaction-website.png",
      "source": "AI 工具集 / 上海 AI Lab",
      "date": "2026-11-28",
      "url": "https://ai-bot.cn/sage-interaction",
      "readTime": 6,
      "hotScore": 88,
      "tags": [
        "上海AI Lab",
        "Sage-Interaction",
        "全双工",
        "语音交互"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "支持随时打断、平滑接话、话题切换，回应时延 1.29 秒。",
            "采用快慢架构：前台负责对话感知，数学与科学计算静默交给后台书生科学大模型。",
            "在开闭源双工模型中时延排名第一，交互质量得分 80.73。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "语音是 C 端渗透率最高的交互形态，而「能被打断」是从客服机器人走向数字伙伴的分水岭。时延与打断体验一旦做到无感，交互入口的格局会重新洗牌。"
        }
      ]
    },
    {
      "id": "co-tap-2027",
      "category": "contest",
      "subcategory": "招聘·校招",
      "badge": "校招",
      "badgeType": "event",
      "tag": "校招",
      "title": "TapTap 2027 届秋招开放 AI 游戏创作与引擎研发实习岗",
      "summary": "TapTap 2027 届秋招启动，除常规技术岗外开放 AI 游戏创作实习生与 AI 游戏引擎开发实习生：前者用自然语言+AI 工具直接产出上线 TapTap 的游戏，后者参与引擎与智能体通信模块。",
      "image": "",
      "source": "中国科学院大学就业信息网",
      "date": "2026-11-28",
      "url": "https://job.ucas.ac.cn/frontpage/ucas/html/recruitmentinfoForm.html?&positionDetailId=4a3e0c9710cd49d0bd751d05e0aaedcf",
      "readTime": 6,
      "hotScore": 88,
      "tags": [
        "TapTap",
        "2027校招",
        "AI游戏创作",
        "引擎开发"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "AI 游戏创作实习生用自然语言描述创意、AI 生成代码，作品直接上线 TapTap 接受玩家检验。",
            "AI 游戏引擎开发实习生参与引擎与智能体通信、沙盒环境搭建与工具链开发。",
            "要求熟悉至少一种主流引擎（Unity/UE5/Cocos/Godot），加分项含 Game Jam 经历与独立作品。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「Game Jam 经历」「独立作品」写进招聘要求，说明行业正在把可展示的实作能力当作硬通货。对在校生，这比刷简历关键词更值得投入——一个上线作品胜过十行技能列表。"
        }
      ]
    },
    {
      "id": "co-taomee-2027",
      "category": "contest",
      "subcategory": "招聘·校招",
      "badge": "校招",
      "badgeType": "event",
      "tag": "校招",
      "title": "淘米网络 2027 校招把 AI 工具能力写进硬性说明",
      "summary": "淘米网络开放 2027 届游戏客户端开发校招，要求 C#/C++ 与 Unity 基础，并明确「具备良好 AI 工具运用能力」，简历需说明常用 AI 工具、熟练程度与实际提效场景。",
      "image": "",
      "source": "西安邮电大学就业创业信息网",
      "date": "2026-11-28",
      "url": "http://jiuye.xupt.edu.cn/detail/job?id=3285046",
      "readTime": 5,
      "hotScore": 85,
      "tags": [
        "淘米网络",
        "2027校招",
        "游戏客户端",
        "AI工具"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "面向 2027 届本科及以上，计算机相关专业，掌握 C#/C++，熟悉 Unity 等引擎。",
            "AI 能力说明为必需项：需在简历介绍常用 AI 工具、熟练度与实际项目提效案例。",
            "有可复用 Skill 沉淀实践、自研游戏作品或 ACM 获奖经历者优先。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "招聘要求从「会用 AI」细化到「能否沉淀可复用工作流」，这是岗位评价标准的实质变化。对求职者，把 AI 使用讲成具体场景与效果，比泛泛写「熟悉 AI 工具」有说服力得多。"
        }
      ]
    },
    {
      "id": "co-ggj-2027",
      "category": "contest",
      "subcategory": "赛事·GameJam",
      "badge": "赛事",
      "badgeType": "event",
      "tag": "赛事",
      "title": "Global Game Jam 2027 开放站点注册，活动周定在 1 月 25—31 日",
      "summary": "Global Game Jam 官方宣布 2027 站点注册已开放（自 11 月 1 日起），活动周为 2027 年 1 月 25—31 日；参与者注册将于 12 月 1 日开放，主题现场公布、48 小时完成游戏。",
      "image": "https://awnchina.cn/wp-content/uploads/2026/05/AWN_LOGO_Web.png.webp",
      "source": "動漫世界網絡中國站 / GGJ",
      "date": "2026-11-28",
      "url": "https://awnchina.cn/ggj-2027-%E7%AB%99%E7%82%B9%E6%B3%A8%E5%86%8C%E7%8E%B0%E5%B7%B2%E5%BC%80%E6%94%BE/",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "Global Game Jam",
        "GGJ 2027",
        "Game Jam",
        "48小时"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "GGJ 2027 官方活动周为 2027 年 1 月 25 日至 31 日，具体日期依各站点而定。",
            "站点注册自 2026 年 11 月 1 日开放，参与者注册 12 月 1 日开放。",
            "历史累计参与者超 50 万、诞生游戏超 11 万款，可申办线下站点或线上参与。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "48 小时围绕统一主题做出可玩原型，是训练快速原型与团队协作最高效的场合之一。想在校招里拿出作品的在校生，GGJ 是门槛最低、产出可展示的起点。"
        }
      ]
    },
    {
      "id": "co-stl-roundup",
      "category": "contest",
      "subcategory": "赛事·GameJam",
      "badge": "赛事",
      "badgeType": "event",
      "tag": "赛事",
      "title": "St. Louis 开发者社区 Spooky Jam 作品回顾与 11 月分享会",
      "summary": "St. Louis 游戏开发者社区第 40 期 RoundUp 回顾 Spooky Jam 获奖作品，并宣布 11 月 28 日 Share & Play 试玩活动开放 15 个展示名额，另有季度分享与年末聚会。",
      "image": "https://raw.githubusercontent.com/STLGameDev/STLGameDevRoundUp/main/screenshots/issue-40.png",
      "source": "St Louis Game Developer RoundUp",
      "date": "2026-11-28",
      "url": "https://roundup.stlgame.dev/issue-40",
      "readTime": 5,
      "hotScore": 78,
      "tags": [
        "Game Jam",
        "Spooky Jam",
        "Share & Play",
        "开发者社区"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "社区年度 Spooky Jam 主题为 The Other Side，多款成员作品在列。",
            "11 月 28 日 Share & Play 试玩活动开放 15 个 demo 展示名额。",
            "另有月度社交、季度 Share & Play 与 12 月 6 日年末聚会。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "地方开发者社区的 Jam 与试玩会，是独立开发者获得真实反馈的低门槛渠道。作品要能被陌生人玩到、被直白点评，成长速度往往比闭门开发更快。"
        }
      ]
    }
  ]
};
