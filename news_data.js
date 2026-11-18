window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-19",
    "weekday": "星期四",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-19 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：《GTA 6》发售即登顶 Metacritic 历史均分榜，均分 99、多家居 10 分（hero）",
      "行业风向：GTA 6 未发售先拿 TGA 8 项提名；索尼 30% 抽成诉讼被驳回；Take-Two 盘前涨近 7%",
      "引擎精读：UE 5.9 代理化工作流与 Web 目标、Flax 1.13.1、Bayonetta 3 重编译到 Vulkan",
      "开源宝库：REA、Orca、DeepSeek Harness、Graphify、Firecrawl Local、uv 六款高热工具",
      "AI 前沿：Genie 4 向公众开放、NVIDIA Switchyard 模型路由、Google Stitch Loop 自动开 PR",
      "竞赛招聘：GGJ 2027 站点注册开放（1/25–31）、三七互娱与完美世界 2027 校招"
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
        "name": "Godot 4.7.2",
        "type": "godot",
        "status": "稳定维护版",
        "badge": "4.7.2",
        "color": "teal"
      },
      {
        "name": "Flax 1.13.1",
        "type": "flax",
        "status": "热修复发布",
        "badge": "1.13.1",
        "color": "cyan"
      },
      {
        "name": "Bayonetta3 Recomp",
        "type": "native",
        "status": "NVN→Vulkan",
        "badge": "OSS",
        "color": "blue"
      },
      {
        "name": "Genie 4",
        "type": "ai",
        "status": "向 Ultra 开放",
        "badge": "AI",
        "color": "orange"
      },
      {
        "name": "GTA 6",
        "type": "game",
        "status": "发售·MC 99",
        "badge": "HOT",
        "color": "green"
      }
    ]
  },
  "hero": {
    "id": "hero-gta6-launch",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "Rockstar·Metacritic",
    "subcategory": "行业·发售",
    "title": "等了 13 年，《GTA 6》发售即登顶 Metacritic 历史均分榜",
    "summary": "《GTA 6》11 月 19 日全球发售，Metacritic 收录 141 篇评测、均分 99，追平 1998 年《时之笛》历史最高；IGN、GameSpot 等多家给满分，OpenCritic 推荐率 100%。世界规模约 50–75 平方公里、为 GTA 5 两倍，业界估算年内销售额可达 32 亿美元。13 年慢工换来近乎满分，说明开放世界的天花板在细节密度与统一调性，而非技术堆料。",
    "image": "https://media.tag24.com/1200x800/7/4/74y4bbwstg54mckoj44m5okdmke3j4z6.jpg",
    "source": "ABC News / Metacritic（一手报道）",
    "date": "2026-11-19",
    "url": "https://www.abc.net.au/news/2026-11-19/gta-vi-smashes-expectations-after-overnight-launch/107401924",
    "readTime": "8 分钟",
    "hotScore": 98,
    "tags": [
      "GTA 6",
      "Rockstar",
      "Metacritic"
    ],
    "content": [
      {
        "title": "事实梳理",
        "type": "list",
        "items": [
          "11 月 19 日全球发售，新西兰率先于午夜解锁",
          "Metacritic 均分 99、141 篇评测，追平《时之笛》历史最高",
          "IGN、GameSpot、Game Informer 等多家满分，OpenCritic 推荐率 100%",
          "世界约 50–75 平方公里，Omdia 估算年内销售额 32 亿美元"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "13 年打磨换来近乎满分的答卷，放在快节奏的行业里反而成了稀缺品。对开放世界开发者，真正的启发不是「堆更大的地图」，而是把细节密度与叙事调性统一到让人愿意长期停留——这恰恰是最费时间、也最难被 AI 批量替代的部分。"
      }
    ]
  },
  "items": [
    {
      "id": "en-ue59-megajam",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·虚幻",
      "tag": "UE 5.9",
      "title": "Epic 把 UE 5.9 做成「AI 代理协作」实验品，编辑器内可直接调 Claude Code 与 Codex",
      "summary": "Epic 于 11 月 9 日放出 Unreal Engine 5.9 MegaJam 预览版，称这是首个主要由 AI 代理工作流构建的引擎版本：Unreal Assistant 面板可外接 Claude Code、Codex、Cursor、OpenCode，Unreal MCP 工具集覆盖渲染、源码管理、调试与关卡创建，并加入实验性 WebAssembly/WebGPU 浏览器目标。代理写的代码仍在清理、Web 渲染器仍是原型，QA 时间短于常规版本。",
      "image": "https://casrai.org/api/og?title=Epic%20releases%20Unreal%20Engine%205.9%20MegaJam%20Preview%20with%20agent%20workflows&eyebrow=Editorial&type=editorial",
      "source": "Epic Games 官方 / CasRAI（一手）",
      "date": "2026-11-19",
      "url": "https://casrai.org/news/unreal-engine-59-megajam-agentic-preview-2026",
      "readTime": "7 分钟",
      "hotScore": 93,
      "tags": [
        "Unreal Engine",
        "AI 代理",
        "WebGPU",
        "MCP"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "首个以 agentic 工作流为主构建的 UE 版本，约一周完成",
            "Unreal Assistant 支持 Claude Code/Codex/Cursor/OpenCode 外接",
            "Unreal MCP 工具集覆盖渲染、源码、调试、关卡",
            "实验性 WebAssembly/WebGPU 浏览器目标，需源码构建"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「让代理写代码、工程师审查测试」正在成为引擎迭代的新范式。想跟上这波变化，值得先把 MCP 工具链与权限边界（Ask/Read/Edit/Auto/Full）摸清楚，而不是只盯着生成画面。"
        }
      ]
    },
    {
      "id": "en-ue59-web",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·虚幻",
      "tag": "Web 目标",
      "title": "UE 5.9 把网页重新列为目标平台，浏览器里跑 3A 引擎不再只是演示",
      "summary": "Epic 在 Unreal Fest Tokyo 期间确认 Unreal Engine 5.9 预览版恢复 Web 平台支持，WebAssembly + WebGPU 让引擎体验可在浏览器运行，重新接上 UE4 时代退役的 HTML5 路线。这是 5.9 四大重点（AI 工作流、Web 目标、渲染、动画）之一，完整版仍计划 2027 年发布并对原型部分重构。",
      "image": "https://runtimewire.com/og/epic-unreal-engine-5-9-preview-web-target.16x9.jpg?v=og2-1wl7tp7",
      "source": "RuntimeWire（引 Epic 官方公告）",
      "date": "2026-11-19",
      "url": "https://runtimewire.com/zh/article/epic-unreal-engine-5-9-preview-web-target",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Unreal Engine",
        "WebGPU",
        "WebAssembly"
      ],
      "content": [
        {
          "title": "事实梳理",
          "type": "list",
          "items": [
            "5.9 预览版恢复 Web 作为目标平台",
            "基于 WebAssembly 运行、WebGPU 渲染",
            "补齐 UE5 缺失的网页平台选项",
            "完整 5.9 版计划 2027 年发布"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "网页平台回归，意味着「一次构建、浏览器即玩」的分发路径重新可行。做小游戏或技术演示的团队，可以提前评估 WebGPU 的性能上限与兼容性。"
        }
      ]
    },
    {
      "id": "en-flax1131",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Flax",
      "tag": "Flax 1.13.1",
      "title": "Flax 1.13.1 热修复两周合并 22 个 PR，光追与 Vulkan 细节继续打磨",
      "summary": "Flax Engine 在 1.13 大版本后两周内发布 1.13.1 热修复，累计修复 30 个 bug、合并 22 个 Pull Request。更新涉及点光源阴影接缝、Vulkan/D3D12 上传页对齐、BC6H/BC7 纹理压缩跨平台支持、草体剔除过渡防跳变等图形与渲染细节，并把 BatchedDrawCall、ConcurrentArenaAllocator 等加入公开 API。",
      "image": "https://flaxengine.com/wp-content/uploads/2026/11/Post_Flax1131.jpg",
      "source": "Flax Engine 官方博客（一手）",
      "date": "2026-11-19",
      "url": "https://flaxengine.com/blog/flax-1-13-1-released/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Flax Engine",
        "渲染",
        "Vulkan"
      ],
      "content": [
        {
          "title": "更新要点",
          "type": "list",
          "items": [
            "两周修复 30 bug、合并 22 PR",
            "修复点光源 cubemap 阴影接缝与 Vulkan 计算着色器警告",
            "新增 BC6H 跨平台压缩、Decal 全轴像素定位",
            "BatchedDrawCall 等进入公开 API"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "从这份 changelog 能看出当代引擎的维护重心：光影接缝、纹理压缩、多线程分配这些「看不见」的细节，才是稳定商业项目真正依赖的地基。"
        }
      ]
    },
    {
      "id": "en-bayo3",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·图形",
      "tag": "Bayonetta 3 Recomp",
      "title": "民间把《猎天使魔女 3》重编译成原生 PC/安卓程序，NVN 调用翻译成 Vulkan",
      "summary": "开源项目 bayo3-recomp 把《猎天使魔女 3》的 AArch64 机器码逐函数重编译为 C++，再由 Clang 编译到 x86-64 与 ARM64，运行时把 NVN 图形调用映射到 Vulkan、着色器离线转 SPIR-V。实测 Windows 中位 89.2 fps、Steam Deck 50–60 fps、骁龙 8 Elite 54–60 fps，项目 11 月 19 日仍活跃更新。仓库不含游戏本体，需自备合法游戏文件。",
      "image": "https://opengraph.githubassets.com/1/aoxzh/bayo3-recomp",
      "source": "GitHub / aoxzh（一手项目）",
      "date": "2026-11-19",
      "url": "https://github.com/aoxzh/bayo3-recomp",
      "readTime": "8 分钟",
      "hotScore": 89,
      "tags": [
        "逆向工程",
        "Vulkan",
        "重编译"
      ],
      "content": [
        {
          "title": "技术要点",
          "type": "list",
          "items": [
            "AArch64→C++ 逐函数重编译，无运行时指令翻译",
            "NVN 图形调用映射到 Vulkan，着色器离线转 SPIR-V",
            "60Hz 步进转真实时间，适配 90/120Hz",
            "平台覆盖 Windows/Linux/Steam Deck/Android"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这类项目是学习图形 API 映射与跨平台运行时的活教材：把闭源主机的图形栈「翻译」到 Vulkan，考验的正是对渲染管线与时序的深刻理解。"
        }
      ]
    },
    {
      "id": "en-godot472",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Godot",
      "tag": "Godot 4.7.2",
      "title": "Godot 4.7.2 稳定版推送，维护分支继续走「安全升级」路线",
      "summary": "Godot 官方在 Google Play 与更新页确认 4.7.2-stable 已推送，作为 4.7 系列的维护版本，主打 bug 修复与稳定性，官方建议可安全升级。4.7 主线在此前的 6 月带来模板缓冲、无障碍描述等特性，4.8 开发快照同步推进。",
      "image": "",
      "source": "Godot Foundation / Google Play 更新页（一手）",
      "date": "2026-11-19",
      "url": "https://play.google.com/store/apps/details?id=org.godotengine.editor.v4&hl=zh",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Godot",
        "开源引擎",
        "版本更新"
      ],
      "content": [
        {
          "title": "事实梳理",
          "type": "list",
          "items": [
            "Godot 4.7.2-stable 已发布",
            "定位维护版本，主打稳定性与 bug 修复",
            "4.8 开发快照同步推进"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "维护版本看着不起眼，却是生产项目最该跟的版本。团队选型时把「维护节奏是否稳定」放进评估表，比追新特性更能降低踩坑成本。"
        }
      ]
    },
    {
      "id": "en-ue59notes",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·虚幻",
      "tag": "UE 5.9",
      "title": "UE 5.9 发布说明细读：网格体分区、世界分区与 Python 脚本能力同步增强",
      "summary": "Epic 的 UE 5.9 预览版发布说明列出多项底层增强：网格体分区新增简化设置与光追代理选项、改进与 PCG 互操作；世界分区增加蓝图函数与数据层节点；Mass StateTrees 可通过蓝图或 Python 编辑；编辑器新增用 Python 或工具蓝图创建蓝图、图表、节点的脚本函数。",
      "image": "",
      "source": "Epic 开发者社区（一手文档）",
      "date": "2026-11-19",
      "url": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-9-release-notes?lang=zh-CN",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Unreal Engine",
        "World Partition",
        "Python"
      ],
      "content": [
        {
          "title": "文档要点",
          "type": "list",
          "items": [
            "网格体分区新增简化设置与光追代理",
            "世界分区增加数据层节点与蓝图函数",
            "Mass StateTrees 支持蓝图/Python 编辑",
            "编辑器开放 Python 创建蓝图与图表"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "脚本化编辑能力持续扩张，意味着「把重复劳动写成工具」的门槛在降低。做 TA 或工具链的开发者，值得系统补一遍编辑器 Python API。"
        }
      ]
    },
    {
      "id": "in-tga2026",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·奖项",
      "tag": "The Game Awards",
      "title": "《GTA 6》未发售先拿 8 项提名领跑，任天堂以 12 项成提名王",
      "summary": "2026 游戏大奖（The Game Awards）提名名单 11 月 17 日公布，《GTA 6》以 8 项提名领跑作品榜，涵盖年度游戏、叙事、动作冒险等；任天堂以 12 项领跑发行商，Capcom 11 项紧随。《生化危机：安魂曲》《控制：共鸣》各 6 项，《影之刃零》5 项。颁奖礼定于 12 月 10 日洛杉矶举行。",
      "image": "https://tldrdailynews.com/og/po4qCxtYS9vhcGAuA.png",
      "source": "Famitsu / 3DM（转述官方提名）",
      "date": "2026-11-19",
      "url": "https://www.3dmgame.com/news/202611/3960584.html",
      "readTime": "6 分钟",
      "hotScore": 92,
      "tags": [
        "TGA 2026",
        "GTA 6",
        "任天堂"
      ],
      "content": [
        {
          "title": "提名要点",
          "type": "list",
          "items": [
            "《GTA 6》8 项提名含年度游戏",
            "任天堂 12 项领跑发行商，Capcom 11 项",
            "《生化危机：安魂曲》《控制：共鸣》各 6 项",
            "颁奖礼 12 月 10 日举行"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "发售前两天就凭试玩版入围，反映评审更看重已完成内容而非最终销量。对开发团队来说，「可提前试玩」本身就是一种有效的口碑资产。"
        }
      ]
    },
    {
      "id": "in-sonytoll",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·平台政策",
      "tag": "Sony / 英国 CMA",
      "title": "伦敦法庭驳回 26 亿美元诉讼，索尼 30% PS Store 抽成得以保留",
      "summary": "伦敦竞争上诉法庭驳回由消费者倡导者 Alex Neill 代表约 900 万英国玩家提起的 26 亿美元诉讼，认定 Xbox、任天堂、PC 与实体光盘构成真实竞争，30% 商店抽成未构成违法。索尼同时宣布 2028 年 1 月起新游戏仅以数字版发行。《GTA 6》15 亿美元预购中约四分之三来自 PlayStation。",
      "image": "https://storage.googleapis.com/theinference-public/img/d02ad23ae9c1059d.jpg",
      "source": "The Inference（一手分析）",
      "date": "2026-11-19",
      "url": "https://theinference.org/article/sony-s-30-playstation-store-cut-survived-a-2-6-billion-uk-claim-the-day-its-gta-6-update-went-mandatory",
      "readTime": "8 分钟",
      "hotScore": 91,
      "tags": [
        "PlayStation",
        "平台抽成",
        "数字发行"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "伦敦法庭驳回 26 亿美元抽成诉讼",
            "认定主机、PC、实体盘构成竞争",
            "索尼 2028 年 1 月起新游戏转纯数字",
            "GTA 6 预购约 3/4 在 PlayStation"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "法庭的判决逻辑建立在「实体盘仍是替代选项」之上，而索尼正亲手移除这个前提。平台定价权与分发形态的博弈，会长期影响中小团队的发行成本结构。"
        }
      ]
    },
    {
      "id": "in-ttwo",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·资本",
      "tag": "Take-Two",
      "title": "GTA 6 评测解禁带飞股价，Take-Two 盘前一度涨近 7%",
      "summary": "随着《GTA 6》媒体评测解禁并拿下 Metacritic 99 分，Take-Two Interactive 股价在 11 月 18 日盘前一度上涨近 7%，从 11 月 17 日收盘的 203.93 美元升至约 216 美元。分析师看好 GTA Online 与 PC 版带来的后续空间，但该股 2026 年内仍累计下跌近 20%。",
      "image": "",
      "source": "Proactive Investors / 网易（转述行情）",
      "date": "2026-11-19",
      "url": "https://www.proactiveinvestors.com/companies/news/1102049/market-movers-tjx-take-two-bullish-target-1102049.html",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Take-Two",
        "股价",
        "GTA 6"
      ],
      "content": [
        {
          "title": "事实梳理",
          "type": "list",
          "items": [
            "Take-Two 盘前涨近 7%，报约 216 美元",
            "催化剂为 GTA 6 评测解禁与高预期",
            "年内该股仍累计下跌近 20%",
            "分析师看好 GTA Online 与 PC 版后续"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "一款游戏能左右母公司数十亿美元市值，说明头部 IP 的现金流预期已高度金融化。做行业观察时，把产品节奏与财报周期放在一起看，线索会更清晰。"
        }
      ]
    },
    {
      "id": "in-roblox",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·资本",
      "tag": "Roblox",
      "title": "Roblox 逆势收涨 6.34%，市场情绪与增长担忧出现背离",
      "summary": "11 月 18 日 Roblox 股价上涨 6.34%，收于 46.79 美元，单日涨 2.79 美元，且无明确公司层面催化剂。近期市场对其预订增长与估值偏高多有谨慎评论，Jefferies 也曾提示增长风险，但资金仍在推动股价反弹。公司上季度营收约 17 亿美元，仍处亏损状态。",
      "image": "https://images.jkn.co.kr/data/images/full/112/03/1120319.png?v=1795014426&width=1200&height=630",
      "source": "JKN News（转述行情）",
      "date": "2026-11-19",
      "url": "https://news.jkn.co.kr/editions/english/post/1105647",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Roblox",
        "股价",
        "UGC 平台"
      ],
      "content": [
        {
          "title": "事实梳理",
          "type": "list",
          "items": [
            "11 月 18 日收涨 6.34% 至 46.79 美元",
            "无明显公司催化剂",
            "上季度营收约 17 亿美元、仍亏损",
            "市场对预订增长与估值存分歧"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "没有消息面的上涨，往往是资金对「平台型故事」的再定价。观察 UGC 平台时，预订额与用户留存比单季利润更能说明长期健康度。"
        }
      ]
    },
    {
      "id": "in-helix",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·硬件",
      "tag": "Xbox / Project Helix",
      "title": "微软下一代主机定名 Project Helix：能跑 PC 游戏，却强调「仍是主机」",
      "summary": "微软下一代业务副总裁 Jason Ronald 介绍次世代主机 Project Helix，称其首先是一台主机、不是改装 PC。设备计划完整兼容四代 Xbox 游戏并继承存档，引入神经渲染在不堆硬件的前提下提升画质，官方明确不把 8K/240Hz 当核心标准。发售窗口、硬件规格与售价尚未公布。",
      "image": "",
      "source": "网易（转述官方表态）",
      "date": "2026-11-19",
      "url": "https://www.163.com/dy/article/LC2GD2TO05561FY9_pdya11y.html",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Xbox",
        "次世代主机",
        "神经渲染"
      ],
      "content": [
        {
          "title": "官方口径",
          "type": "list",
          "items": [
            "定位主机而非改装 PC",
            "兼容四代 Xbox 游戏并继承存档",
            "引入神经渲染提升画面",
            "未公布发售窗口与售价"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「能跑 PC 游戏但强调是主机」反映平台方想把 PC 生态的便利性收编进主机体验。神经渲染被写进主机路线图，也说明 AI 图形技术正从可选走向标配。"
        }
      ]
    },
    {
      "id": "in-ben-feder",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·观点",
      "tag": "Ben Feder",
      "title": "前 Take-Two CEO：西方玩家接受 AI 游戏，只差一个「玩具总动员时刻」",
      "summary": "前 Take-Two CEO、现掌舵 Tirta Ventures 的 Ben Feder 表示，西方玩家对生成式 AI 游戏的抵触可能只差一部《玩具总动员》式的转折之作。他类比动画从手绘转向电脑动画时的抵制，被皮克斯用高质量作品终结。他同时质疑 AI 究竟是降本，还是用同样成本把游戏做得更大。",
      "image": "",
      "source": "The Game Business / 网易（转述访谈）",
      "date": "2026-11-19",
      "url": "https://www.163.com/dy/article/LC2DTJNN05561FX5_pdya11y.html",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "生成式 AI",
        "行业观点",
        "投资"
      ],
      "content": [
        {
          "title": "观点要点",
          "type": "list",
          "items": [
            "用《玩具总动员》类比 AI 游戏的接受转折",
            "投资方向聚焦「AI 优先」游戏",
            "质疑 AI 是否真的降本",
            "强调 AI 应改变玩法而非只扩内容"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「AI 之前能不能实现、AI 之后会不会更好」是判断一个 AI 游戏点子的实用过滤器。把它用在自己的选题上，能快速剔除那些只是蹭概念的方案。"
        }
      ]
    },
    {
      "id": "in-rstar-noai",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·技术路线",
      "tag": "Rockstar",
      "title": "R 星坚持 GTA 6 零 AIGC，但传统游戏 AI 一点没少",
      "summary": "Take-Two CEO Strauss Zelnick 多次明确表示生成式 AI 在 GTA 6 制作中「零参与」，罪恶都市的街道、NPC、广告牌均由创作者打磨。官方同时澄清：不用 AIGC 不等于不用 AI，NPC 行为仿真、车流群体 AI、通缉记忆系统与 Euphoria 物理动画仍是传统游戏 AI，AI 与自动化工具也用在 QA 与管线提效等后台环节。",
      "image": "",
      "source": "游戏干线 / 网易（转述官方表态）",
      "date": "2026-11-19",
      "url": "https://www.163.com/dy/article/LC2FMLP105268VHQ.html",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "GTA 6",
        "生成式 AI",
        "游戏 AI"
      ],
      "content": [
        {
          "title": "概念辨析",
          "type": "list",
          "items": [
            "GTA 6 内容创作零 AIGC",
            "NPC 行为、群体 AI、通缉记忆属传统游戏 AI",
            "Euphoria 物理动画仍是程序驱动",
            "AI 用于 QA、管线提效等后台"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「生成式 AI」和「传统游戏 AI」混为一谈，是当下最常见的讨论误区。做技术选型时先分清这两条路线，才不会被营销话术带偏。"
        }
      ]
    },
    {
      "id": "ga-gta6-launch",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·3A",
      "tag": "GTA 6",
      "title": "等了 13 年，《GTA 6》发售即登顶 Metacritic 历史均分榜",
      "summary": "《GTA 6》于 11 月 19 日全球发售（新西兰率先解锁），Metacritic 收录 141 篇评测、均分 99，追平 1998 年《塞尔达传说：时之笛》的历史最高纪录。IGN、GameSpot、Game Informer 等多家媒体给出 10 分，OpenCritic 推荐率 100%。世界规模达 50–75 平方公里，约为 GTA 5 两倍，业界估算年内销售额可达 32 亿美元。",
      "image": "https://media.tag24.com/1200x800/7/4/74y4bbwstg54mckoj44m5okdmke3j4z6.jpg",
      "source": "ABC News / Metacritic（一手报道）",
      "date": "2026-11-19",
      "url": "https://www.abc.net.au/news/2026-11-19/gta-vi-smashes-expectations-after-overnight-launch/107401924",
      "readTime": "7 分钟",
      "hotScore": 97,
      "tags": [
        "GTA 6",
        "Rockstar",
        "Metacritic"
      ],
      "content": [
        {
          "title": "发售要点",
          "type": "list",
          "items": [
            "11 月 19 日全球发售，Metacritic 均分 99",
            "141 篇评测，多家居给 10 分满分",
            "世界约 50–75 平方公里，为 GTA 5 两倍",
            "Omdia 估算年内销售额可达 32 亿美元"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "13 年打磨换来一份近乎满分的答卷，提醒开发者：开放世界的天花板不在技术堆料，而在细节密度与统一调性。这份「慢工」在快节奏行业里反而成了稀缺品。"
        }
      ]
    },
    {
      "id": "ga-devolver",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·独立",
      "tag": "Devolver Digital",
      "title": "GTA 6 发售日，Devolver 用一比一恶搞预告把自己的新游送上热搜",
      "summary": "独立发行商 Devolver Digital 在 11 月 19 日同步发售《Volvy's Adventure: Reslimed》，并放出对《GTA 6》预告逐镜头复刻的恶搞短片。游戏由 Gunbrella、Gato Robot 开发者 doinksoft 制作，是仅登陆 PC 的横版平台游戏，定价 4.99 美元。发行商还发起「删掉 GTA 6 预载抽奖送 key」的活动。",
      "image": "https://hauntystech.com/wp-content/uploads/2026/11/devolver-digital-gta-6-trailer-parody-hero.jpg",
      "source": "Eurogamer / Hauntys Tech（一手预告）",
      "date": "2026-11-19",
      "url": "https://www.eurogamer.net/delete-gta-6-free-game-devolver-digital",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Devolver Digital",
        "独立游戏",
        "营销"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "与 GTA 6 同日发售《Volvy's Adventure: Reslimed》",
            "逐镜头复刻 GTA 6 预告做恶搞",
            "doinksoft 开发、仅登陆 PC、定价 4.99 美元",
            "以「删 GTA 6 预载抽奖」制造话题"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "小团队抢不到大作流量，就用创意反向借势。这种「认真做的恶搞」本身需要扎实的动画与镜头功底，比硬买量更能沉淀口碑。"
        }
      ]
    },
    {
      "id": "ga-kuroshio",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·新游",
      "tag": "Kuroshio",
      "title": "雨夜东京黑帮开放世界《Kuroshio: Neon Blood》11 月 19 日登陆 PC",
      "summary": "由 Isekai Games 开发发行的开放世界射击竞速游戏《Kuroshio: Neon Blood》于 11 月 19 日在 PC 发售。游戏以雨夜东京为舞台，玩家扮演离乡十二年的「新桥之鬼」，在银座、筑地、赤坂等真实街区与虚构区域间穿行，融合格斗、枪战、警匪追逐与山道竞速，结局随玩家立场变化。",
      "image": "https://operogames.com/img/game/299379?w=640",
      "source": "Steam / OperoGames（一手商店页）",
      "date": "2026-11-19",
      "url": "https://operogames.com/game/299379/kuroshio-neon-blood",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Kuroshio",
        "开放世界",
        "独立游戏"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11 月 19 日登陆 PC / Steam",
            "雨夜东京开放世界，多真实与虚构街区",
            "射击、格斗、竞速混合玩法",
            "站位选择影响故事结局"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "小团队做开放世界，靠的是「垂直切片式」的高密度场景而非地图面积。把有限区域做出强烈氛围，是控制成本又保住体验的务实做法。"
        }
      ]
    },
    {
      "id": "ga-greedforest",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·新游",
      "tag": "Greed Forest TD",
      "title": "《Greed Forest TD》把塔防的「调高难度」做成核心玩法",
      "summary": "塔防游戏《Greed Forest TD》于 11 月 18 日登陆 Steam，开发者 Martin Grysbæk。游戏白天布置迷宫、金矿与防御塔，夜晚迎战动物，而每次日出玩家可主动调高「信号强度」引来更强敌人换取更高赏金。单局约 10–20 分钟，支持炮塔叠加与 Spirit Link 组合，定价约 7.14 美元。",
      "image": "https://indiegame.party/assets/greed-forest-td-spotlight-hero.jpg",
      "source": "Steam 商店页 / IndieGame.Party（一手）",
      "date": "2026-11-19",
      "url": "https://indiegame.party/articles/greed-forest-td-spotlight",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "塔防",
        "独立游戏",
        "Steam"
      ],
      "content": [
        {
          "title": "玩法要点",
          "type": "list",
          "items": [
            "11 月 18 日登陆 Steam，单局 10–20 分钟",
            "日出可调高信号强度换更高赏金",
            "炮塔可叠加、可与 Buildy 精神链接",
            "定价约 7.14 美元"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「难度选择」从开局菜单搬到每局循环里，就变成一个有张力的经济决策。小成本玩法创新，往往就藏在这样一次规则位移里。"
        }
      ]
    },
    {
      "id": "ga-korridor",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·独立",
      "tag": "Korridor",
      "title": "《Korridor》把竖屏手游广告套路，做成号称「深度策略」的新品类",
      "summary": "独立游戏《Korridor》把 YouTube 上常见的竖屏手游广告玩法做成一款产品，Steam 页面称其为「闸门射击」（gates shooter）新品类，融合 Roguelike 与弹幕元素。玩家扮演中世纪修士，在无法控制纵向移动速度的走廊中迎战哥布林与恶魔，通过闸门选择增益，游戏节奏与配乐同步。",
      "image": "",
      "source": "网易（一手评测转述）",
      "date": "2026-11-19",
      "url": "https://www.163.com/dy/article/LC2SR82K05561FZ1_pdya11y.html",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "Korridor",
        "独立游戏",
        "玩法设计"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "把手游广告玩法做成「闸门射击」品类",
            "角色纵向速度不可控，节奏与配乐绑定",
            "闸门提供回血、穿透、横移等增益",
            "是否「深度策略」仍存争议"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把被公认「low」的广告玩法认真做成可玩产品，是一种有趣的设计实验。品类名字是营销话术还是真创新，最终还得看机制能否撑起深度。"
        }
      ]
    },
    {
      "id": "ga-gta-jp",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "热门游戏·发行",
      "tag": "GTA 6 日版",
      "title": "GTA 6 日版过审：男性裸体仅用黑色丁字裤做「部分遮挡」",
      "summary": "《GTA 6》11 月 19 日全球发售，日本玩家发现日版对男性裸露内容做了本地化处理——主角 Jason 淋浴场景中，臀部仅以一条黑色丁字裤部分遮挡。此前有报道指出日版因分级委员会未列出「性内容」标注、安装体积也小于其他地区而疑似被审查。",
      "image": "https://assetsio.gnwcdn.com/Volvy-Adventure.png?width=1200&height=630&fit=crop&enable=upscale",
      "source": "TAG24 / Eurogamer（一手报道）",
      "date": "2026-11-19",
      "url": "https://www.tag24.com/en/entertainment/gaming/grand-theft-auto-vi-reviews-roll-in-as-fan-frenzy-goes-into-overdrive-the-taylor-swift-of-video-games-3550560",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "GTA 6",
        "本地化",
        "分级审查"
      ],
      "content": [
        {
          "title": "事实梳理",
          "type": "list",
          "items": [
            "日版男性裸露以黑色丁字裤部分遮挡",
            "此前日版分级未标注「性内容」",
            "日版安装体积小于其他地区",
            "属地区分级与本地化差异"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "同一款游戏在不同市场要做内容取舍，本地化不只是翻译文本，更是分级与合规的工程。出海团队应把各地区分级规则前置到内容设计阶段。"
        }
      ]
    },
    {
      "id": "os-rea",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工具",
      "tag": "morluto/rea",
      "title": "REA 把逆向工程接进 MCP，让代理能直接检查二进制与 Electron 程序",
      "summary": "开源项目 morluto/rea 通过 MCP 把逆向工程能力接入 AI 代理，可在本地检查原生二进制、JavaScript、Electron、.NET 程序集与网站，并输出证据与结论限制。周增星约 1.5 万、总星标约 46.8 万，位列本周 GitHub 增长榜首，采用 TypeScript 开发。",
      "image": "https://repository-images.githubusercontent.com/1209966933/1a3fef9a-be4b-41f4-8830-a94c0e8288cc",
      "source": "GitHub / HotGit（一手项目）",
      "date": "2026-11-19",
      "url": "https://github.com/morluto/rea",
      "readTime": "6 分钟",
      "hotScore": 92,
      "tags": [
        "逆向工程",
        "MCP",
        "AI 代理"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "经 MCP 把逆向工程能力接入代理",
            "支持原生二进制/JS/Electron/.NET/网站",
            "明确输出证据与结论限制",
            "周增星约 1.5 万，增长榜首"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「给结论附上证据与不确定性」是这类工具难得的设计自觉。做 AI 辅助工具时，把可验证性做进输出格式，比追求答案本身更值得投入。"
        }
      ]
    },
    {
      "id": "os-orca",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工具",
      "tag": "stablyai/orca",
      "title": "Orca 让你用自己的订阅跑一支编码代理舰队，桌面、手机、远程都能调度",
      "summary": "开源项目 stablyai/orca 允许开发者用自己的 Claude Code、Codex 等订阅，在桌面、移动端与远程运行时编排一支编码代理集群。项目为 TypeScript，周增星约 6510、总星标约 12.9 万，定位为 agent-IDE 与自动化编排工具。",
      "image": "https://opengraph.githubassets.com/18344a1c64382d1c1864362f2057d5ad0b4ba3c1993a5d52a888d1f9c0328384/stablyai/orca",
      "source": "GitHub / HotGit（一手项目）",
      "date": "2026-11-19",
      "url": "https://github.com/stablyai/orca",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "AI 代理",
        "编排",
        "Claude Code"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "用自有订阅运行多编码代理",
            "支持桌面、移动端、远程运行时",
            "TypeScript 实现，周增星约 6510",
            "定位 agent-IDE 与自动化编排"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "当「一个代理」变成「一支代理舰队」，调度、权限与成本控制就成了新工程问题。这类编排工具的出现，说明多代理协作正在从概念走向基础设施。"
        }
      ]
    },
    {
      "id": "os-harness",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工具",
      "tag": "deepseek-ai/deepseek-harness",
      "title": "DeepSeek Harness 打出「一切皆插件」，把代理能力拆成可插拔模块",
      "summary": "deepseek-ai/deepseek-harness 是 DeepSeek 开源的代理框架，主张「Everything is a Plugin」，围绕 cordis、dsh 与 dsh-plugin 生态构建。项目为 TypeScript，周增星约 4650、总星标约 28.4 万，11 月 18 日仍在活跃更新。",
      "image": "https://repository-images.githubusercontent.com/1333065091/05ca062c-0277-415c-90b5-f43277f73436",
      "source": "GitHub / HotGit（一手项目）",
      "date": "2026-11-19",
      "url": "https://github.com/deepseek-ai/deepseek-harness",
      "readTime": "5 分钟",
      "hotScore": 87,
      "tags": [
        "DeepSeek",
        "插件",
        "AI 代理"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "主张「Everything is a Plugin」",
            "基于 cordis/dsh 插件生态",
            "TypeScript 实现，周增星约 4650",
            "11 月 18 日活跃更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「一切皆插件」的价值在于约束边界：把能力拆成可替换模块，才能在不推倒重来的前提下持续迭代。这个思路对构建长期维护的工具链同样适用。"
        }
      ]
    },
    {
      "id": "os-graphify",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工具",
      "tag": "Graphify-Labs/graphify",
      "title": "Graphify 把代码库变成可查询知识图谱，无需向量库、每条边都可解释",
      "summary": "开源项目 Graphify 把代码库及其文档、SQL schema、配置与 PDF 转成可查询的知识图谱，作为 Claude Code、Cursor、Codex、Gemini CLI 的 /graphify 技能使用。特点是本地确定性 AST 解析、每条边都有解释、不依赖向量库。Python 实现，周增星约 4020。",
      "image": "https://opengraph.githubassets.com/f9d228a566c505b341fa3f55e62e870990c4e20ce52c65d68edd810e44bcab96/Graphify-Labs/graphify",
      "source": "GitHub / HotGit（一手项目）",
      "date": "2026-11-19",
      "url": "https://github.com/Graphify-Labs/graphify",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "知识图谱",
        "AST",
        "代码分析"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "把代码库转成可查询知识图谱",
            "本地确定性 AST 解析、无需向量库",
            "每条边可解释，作为多 CLI 技能使用",
            "Python 实现，周增星约 4020"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "在 RAG 之外，「确定性解析 + 可解释关系」提供了一条更可控的理解代码路径。对大型遗留项目，能解释的图谱比模糊的向量相似度更可靠。"
        }
      ]
    },
    {
      "id": "os-firecrawl",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工具",
      "tag": "firecrawl/firecrawl",
      "title": "Firecrawl Local 单文件二进制：37 倍抓取速度、空闲仅 11MB 内存",
      "summary": "Firecrawl 于 11 月 18 日开源 Firecrawl Local，一个 Rust 编写的单文件二进制，可在本地抓取、爬取与映射网站，无需数据库、队列或容器。官方称比自托管版快 37 倍、内存少 230 倍（空闲 11MB），采用 AGPL-3.0 许可，可一键注册为 Claude Code、Cursor、Gemini CLI、Codex 的 MCP 服务器。",
      "image": "https://repository-images.githubusercontent.com/787076358/f9616c09-3701-41ef-b5a6-fdf912ffb15b",
      "source": "GitHub / Firecrawl 官方（一手）",
      "date": "2026-11-19",
      "url": "https://github.com/firecrawl/firecrawl",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Firecrawl",
        "爬虫",
        "MCP"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "Rust 单文件二进制，无需数据库/队列/容器",
            "官方称快 37 倍、空闲内存 11MB",
            "AGPL-3.0 许可",
            "可一键接入多种 AI 工具的 MCP"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「去掉基础设施依赖」是本地工具体验的关键：一个二进制就能跑，大幅降低了试用门槛。性能数字出自官方、尚待第三方验证，落地前仍要用真实负载测一遍。"
        }
      ]
    },
    {
      "id": "os-uv",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·工具",
      "tag": "astral-sh/uv",
      "title": "Rust 写的 Python 包管理器 uv 持续冲榜，单周再增约一万星",
      "summary": "开源项目 astral-sh/uv 是一款用 Rust 编写的极速 Python 包与项目管理工具，最新快照显示总星标约 9.2 万、单周增约 1 万星。它集安装、解析、虚拟环境管理于一体，以速度著称，是当下 Python 工具链中最活跃的项目之一。",
      "image": "https://opengraph.githubassets.com/492b579a52c7cff6da225470eeb162c377e9cca2e6d37c97c0be024edb16e0b3/astral-sh/uv",
      "source": "GitHub / HotGit（一手项目）",
      "date": "2026-11-19",
      "url": "https://github.com/astral-sh/uv",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Python",
        "Rust",
        "包管理"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "Rust 实现的高性能 Python 包管理器",
            "集成安装、解析与环境管理",
            "总星标约 9.2 万、周增约 1 万",
            "11 月 19 日仍活跃更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "用系统级语言重写开发工具，正在成为提升工程效率的常见路径。对日常被包管理拖慢的团队，换工具链的收益往往立竿见影。"
        }
      ]
    },
    {
      "id": "tu-beginners",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·入门",
      "tag": "游戏开发入门",
      "title": "新手做游戏的第一步：先做一个「ryan」跑到能玩，而不是先学完引擎",
      "summary": "面向零基础的视频游戏开发指南指出，初学者最常见的坑是「教程地狱」——看完一门又一门课程却没做出自己的东西。文章建议每看一小时教程，就花一小时改自己的项目；从单屏躲避、Pong 这类极小游戏入手，先让它跑起来，再逐项修改、读代码、加细节并导出分享。",
      "image": "https://f004.backblazeb2.com/file/blogwriter-media/sites/sorceress/5d7357139dc4e2339f693edb7768cedfbf52fa7cfd32a62990ca518ff7f3a98b.webp",
      "source": "Sorceress Games 官方博客（一手教程）",
      "date": "2026-11-19",
      "url": "https://sorceress.games/blog/video-game-development-for-beginners",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "新手入门",
        "学习方法",
        "游戏开发"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "警惕「教程地狱」：看课与实操应有时间配比",
            "从单屏躲避、Pong 等极小项目起步",
            "先跑起来，再逐项修改与读代码",
            "导出并分享，完成闭环"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「先做出能玩的东西，再回头补理论」是符合认知规律的路径。把大目标切成一周能finish的小项目，比收藏一百个教程更能建立手感。"
        }
      ]
    },
    {
      "id": "tu-tps",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·架构",
      "tag": "Unity 架构",
      "title": "Unity 第三人称射击模板拆解：模块化架构与「先测量后优化」法则",
      "summary": "Unity 第三人称射击模板解析文章系统梳理了模块化架构与核心实现，重点讲 GPU 性能瓶颈定位：用 Profiler、RenderDoc、Frame Debugger 分析，针对 Draw Call 过高采用静态/动态合批、GPU Instancing、纹理图集，针对填充率与阴影开销做简化着色与烘焙光照。核心原则是「先测量、后优化」。",
      "image": "",
      "source": "编程知识（一手技术文章）",
      "date": "2026-11-19",
      "url": "http://www.hqwc.cn/a/879367.html",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "Unity",
        "性能优化",
        "架构"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "用 Profiler/RenderDoc 定位真实瓶颈",
            "Draw Call 优化：合批、GPU Instancing、图集",
            "阴影与填充率：简化 Shader、烘焙光照",
            "先测量后优化，避免过早优化"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "80% 的性能问题常由 20% 的代码造成。「先测量」这条看似朴素，却是区分经验型优化与盲猜的关键习惯。"
        }
      ]
    },
    {
      "id": "tu-shadow",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·渲染",
      "tag": "Unity 阴影",
      "title": "Unity 实时阴影优化：Projector 的性能瓶颈与三条替代路线",
      "summary": "技术文章剖析 Unity 中 Projector 阴影的性能开销，给出可操作的优化清单：用分层（Layer）限制 Projector 影响范围、收紧近远裁剪面与视锥、使用最简单的内置 Shader、合并多张阴影贴图为图集、缩小 Falloff 纹理并关闭 Mipmaps，以及按距离或可见性动态启停组件。",
      "image": "",
      "source": "编程知识（一手技术文章）",
      "date": "2026-11-19",
      "url": "http://www.hqwc.cn/a/669376.html",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "Unity",
        "阴影",
        "性能优化"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "用 Layer 限制 Projector 影响范围",
            "收紧裁剪面与视锥，避免无用计算",
            "内置精简 Shader + 阴影贴图图集",
            "按距离/可见性动态启停"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "阴影优化的本质是「少算该算的」：把每帧无谓的采样和绘制砍掉，往往比换更贵的硬件更有效。"
        }
      ]
    },
    {
      "id": "tu-postfx",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Shader",
      "tag": "Unity Shader",
      "title": "Unity 屏幕后处理实战：从高斯模糊到景深，以及「画面全黑」的定位套路",
      "summary": "Unity Shader 后处理笔记以高斯模糊、景深为例，强调先建 Built-in 管线项目跟做、理解后再迁 URP，并注意线性空间与 Gamma 空间的颜色差异。调试环节给出工具链组合：Frame Debugger 看 DrawCall、RenderDoc 查采样与 UV、Profiler 看性能；优化方向是降采样到半分辨率、把多个效果合进一个 Pass。",
      "image": "",
      "source": "尧图网络科技（一手技术文章）",
      "date": "2026-11-19",
      "url": "http://www.nxbn.cn/news/9596",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "Unity",
        "Shader",
        "后处理"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "先 Built-in 管线跟做，再迁 URP",
            "注意线性/Gamma 空间颜色差异",
            "Frame Debugger + RenderDoc + Profiler 定位",
            "降采样半分辨率、合并 Pass 优化"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「画面全黑但报错很少」是后处理新手的高频噩梦。先确认 OnRenderImage 是否被调用、再查 Shader 内部，这种分层排查思路可迁移到很多图形问题。"
        }
      ]
    },
    {
      "id": "tu-fog",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·2D",
      "tag": "Unity 2D",
      "title": "Unity 2D 战争迷雾实战：FunkyCode 光照与 Spine 动画的联动方案",
      "summary": "Unity 2D 战争迷雾实战文章给出大量调优经验：只对视野内遮挡物启用 LightCollider、合并地面碎片为图集、小光源用低分辨率纹理、把「已探索层」更新降到每秒 1–2 次并用双缓冲 RenderTexture。实战可在中端安卓机上稳定运行 4 角色、12 光源、150 遮挡物于 60 帧。",
      "image": "",
      "source": "尧图网络（一手技术文章）",
      "date": "2026-11-19",
      "url": "http://www.wmrh.cn/news/44975",
      "readTime": "6 分钟",
      "hotScore": 79,
      "tags": [
        "Unity 2D",
        "光照",
        "性能优化"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "视野外遮挡物禁用 LightCollider",
            "合并图集、减少动态阴影多边形",
            "已探索层降频更新 + 双缓冲 RT",
            "中端机 4 角色/12 光源/150 遮挡物跑 60 帧"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "光照渲染与迷雾遮罩是两套系统，别指望一套的极限功能覆盖另一套——这种「把问题拆对」的判断，比堆参数更能决定性能上限。"
        }
      ]
    },
    {
      "id": "ai-genie4",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·世界模型",
      "tag": "Google DeepMind",
      "title": "Genie 4 首次向公众开放： Ultra 用户可边走边改世界模型",
      "summary": "Google DeepMind 于 11 月 18 日宣布 Project Genie 新体验向符合条件的 Google AI Ultra 订阅者开放，Genie 4 首次面向公众。最大变化是实时编辑——在世界里行走时输入新提示即可就地改变天气、加入角色或扭转剧情，并首次加入实时原生音频。Genie 3 会话从 60 秒延长至 3 分钟，Pro 用户暂只能排队。",
      "image": "https://toolnavs.com/uploads/articles/20261119-genie4-available-cover.jpg",
      "source": "Google DeepMind 官方博客 / AI 工具导航（一手）",
      "date": "2026-11-19",
      "url": "https://toolnavs.com/article/3538",
      "readTime": "7 分钟",
      "hotScore": 93,
      "tags": [
        "Genie 4",
        "世界模型",
        "Google DeepMind"
      ],
      "content": [
        {
          "title": "发布要点",
          "type": "list",
          "items": [
            "Genie 4 首次向 Ultra 订阅者开放",
            "支持行走中实时编辑世界与原生音频",
            "Genie 3 会话延至 3 分钟、可链式连接",
            "内容带 SynthID 水印、仍属前沿研究"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "世界模型从演示走向可玩，真正的考题是「能否稳定记住你改过的世界」。对游戏开发者，这类技术短期内更适合做原型探索而非内容生产。"
        }
      ]
    },
    {
      "id": "ai-switchyard",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·基础设施",
      "tag": "NVIDIA",
      "title": "NVIDIA 开源 Switchyard：让编码代理在便宜模型与前沿模型间自动路由",
      "summary": "NVIDIA 开源 Rust 代理 Switchyard，可在多个模型供应商间路由 AI 代理请求，实时转换 OpenAI 与 Anthropic API，让运行 Claude Code、Codex 的团队把简单请求导向更便宜的开放权重模型而不改应用代码。核心为 Rust 库 libsy，也提供基于 Envoy 的自托管 Agent Router。官方提醒需用真实负载对比「任务完成总成本」，尚无第三方基准。",
      "image": "https://storage.ghost.io/c/6e/89/6e896869-22ef-4281-a213-b4c462c17cff/content/images/size/w1200/2026/11/header_ae63caf7977e529bc24e.jpg",
      "source": "NVIDIA Technical Blog / GitHub（一手）",
      "date": "2026-11-19",
      "url": "https://www.notatechguy.com/nvidia-switchyard-routes-ai-traffic-across-models",
      "readTime": "8 分钟",
      "hotScore": 90,
      "tags": [
        "NVIDIA",
        "模型路由",
        "AI 代理"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "Rust 开源代理，跨供应商路由请求",
            "实时转换 OpenAI/Anthropic API",
            "核心库 libsy + 自托管 Agent Router",
            "LiteLLM/NeMo Relay 集成存在已知缺口"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「更便宜的单次调用 ≠ 更便宜的完成任务」是路由策略的关键陷阱：弱模型失败重试可能反而更贵。落地前务必用自己的真实工作流做基线对比。"
        }
      ]
    },
    {
      "id": "ai-stitchloop",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·智能体",
      "tag": "Google Labs",
      "title": "Google 推出 Stitch Loop：连接代码与线上指标，自动开 PR 修安全、延迟与无障碍问题",
      "summary": "Google Labs 于 11 月 18 日推出实验性代理 Stitch Loop，连接代码库与线上指标后自动提交 GitHub PR 改进已上线产品，内置安全、延迟、无障碍三条默认循环。安全循环把 Gemini 4 Carbon 与 DeepMind 的 CodeMender 结合；每个循环走「建议—方案—构建—反思」四步，任何改动都要人工审核后才合并。目前全球候补名单开放，Ultra 用户优先。",
      "image": "https://news.sulat.com/wp-content/uploads/2026/11/hero-stitch-loop-product-agent.jpg",
      "source": "Google Labs 官方博客（一手）",
      "date": "2026-11-19",
      "url": "https://news.sulat.com/2026/11/19/stitch-loop",
      "readTime": "7 分钟",
      "hotScore": 91,
      "tags": [
        "Google Labs",
        "AI 代理",
        "DevOps"
      ],
      "content": [
        {
          "title": "产品要点",
          "type": "list",
          "items": [
            "连接代码与线上指标，自动开 PR",
            "内置安全、延迟、无障碍三条循环",
            "安全循环结合 Gemini 4 Carbon 与 CodeMender",
            "改动须人工审核，无自动合并"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把代理的价值从「写代码」延伸到「上线后持续优化」，是 AI 工具的重要转向。保留人工审核这道闸，正是这类工具能被信任落地的前提。"
        }
      ]
    },
    {
      "id": "ai-inference",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "inference-optimisation-skill",
      "title": "GitHub 热榜新项目：把本地大模型推理调优做成「爬坡式」代理技能",
      "summary": "GitHub 项目 inference-optimisation-skill 于 11 月 16 日发布，定位为「对本地大模型服务速度做爬坡优化」的代理技能，覆盖解码、投机解码、预填充、KV 缓存等环节。发布数日获得约 1016 星、88 fork，反映出社区对「用代理自动化性能调优」的持续热度。",
      "image": "",
      "source": "AI 工具导航网（一手项目页）",
      "date": "2026-11-19",
      "url": "https://yitb.com/archives/1934/",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "LLM 推理",
        "性能优化",
        "Agent Skill"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "11 月 16 日发布，聚焦本地推理提速",
            "覆盖解码、投机解码、Prefill、KV 优化",
            "数日约 1016 星、88 fork",
            "以 Agent Skill 形式提供"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把调优经验固化成代理可执行的技能，是「专家经验产品化」的典型路径。对做引擎或工具链的团队，这也是沉淀内部 know-how 的好形式。"
        }
      ]
    },
    {
      "id": "ai-gpt62",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·大模型",
      "tag": "GPT-6.2",
      "title": "GPT-6.2 突袭发布，成本大幅下降搅动游戏开发模型选型",
      "summary": "按照行业简报转述，OpenAI 的 GPT-6.2 突袭发布并带来明显成本下降，成为近期游戏开发者选型讨论的焦点。结合 GDC 报告 40% 开发者已在工作中使用生成式 AI，模型成本与能力的变动，正直接影响 AI 工具在游戏工作流中的可用性。相关参数与价格以官方发布为准。",
      "image": "",
      "source": "行业简报（转述，关键数据以官方为准）",
      "date": "2026-11-19",
      "url": "https://www.163.com/dy/article/LC2ENQO105561FYA.html",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "GPT-6.2",
        "大模型",
        "成本"
      ],
      "content": [
        {
          "title": "关注要点",
          "type": "list",
          "items": [
            "GPT-6.2 发布并带来成本下降",
            "成为游戏开发模型选型讨论焦点",
            "GDC 报告 40% 开发者工作中用生成式 AI",
            "关键参数价格以官方为准"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "模型成本的每一次下探，都会把一批「算不过账」的应用场景变成可行。做 AI 玩法评估时，成本曲线比榜单排名更值得盯。"
        }
      ]
    },
    {
      "id": "ai-aigames",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·游戏应用",
      "tag": "AI 游戏",
      "title": "从 AI 驱动 NPC 到世界引擎，生成式 AI 正在渗入游戏玩法层",
      "summary": "多篇行业观察梳理了 AI  games 的落地形态：与现实时间同步、能记住玩家对话的 AI 生活模拟；包含 150+ 星球、600+ 智能 NPC 的 AI 驱动太空跑商；以及让创作者用自然语言生成世界观、任务、关卡的 AI 游戏世界引擎。前 Take-Two CEO 也判断西方玩家接受 AI 游戏只差一个标志性作品。",
      "image": "",
      "source": "虎扑 / 行业观察（转述）",
      "date": "2026-11-19",
      "url": "https://voice.hupu.com/bbs/641444934",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "AI 游戏",
        "NPC",
        "世界引擎"
      ],
      "content": [
        {
          "title": "应用形态",
          "type": "list",
          "items": [
            "能记住对话与习惯的 AI 生活模拟",
            "150+ 星球、600+ 智能 NPC 的动态宇宙",
            "自然语言生成任务与关卡的世界引擎",
            "业界等待「标志性作品」扭转接受度"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "AI 在游戏里的价值正从「降本工具」转向「 enabling 新玩法」。判断一个 AI 游戏点子，先问它是否做了没有 AI 就做不到的事。"
        }
      ]
    },
    {
      "id": "co-ggj2027",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·GameJam",
      "tag": "Global Game Jam",
      "title": "GGJ 2027 站点注册开放：1 月 25–31 日，48 小时围绕统一主题做游戏",
      "summary": "全球最大游戏创作活动 Global Game Jam 宣布 2027 站点注册开放，官方活动周为 2027 年 1 月 25–31 日，各站点日期略有差异。参与者组队围绕全球同步公布的主题，在 48 小时内设计、构建并发布完整游戏。站点注册已于 11 月 1 日开放，参与者注册将于 12 月 1 日开放；累计参与者超 50 万、诞生游戏超 11 万款。",
      "image": "https://storage.ghost.io/c/41/49/41499d0c-2aba-44d9-90ee-2f06884f30ea/content/images/2026/11/ggj-2027-site-registration-is-now-open-1.jpg",
      "source": "Global Game Jam 官方 / BigTime（一手）",
      "date": "2026-11-19",
      "url": "https://globalgamejam.org/news/global-game-jam-2027-site-registration-now-open",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "GGJ 2027",
        "Game Jam",
        "大学生"
      ],
      "content": [
        {
          "title": "赛程信息",
          "type": "list",
          "items": [
            "站点注册 11 月 1 日开放、参与者注册 12 月 1 日开放",
            "官方活动周 2027 年 1 月 25–31 日",
            "48 小时围绕统一主题做完整游戏",
            "累计参与者超 50 万、作品超 11 万款"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "GGJ 是零基础学生验证「能否在极限时间做出可玩游戏」的最佳练兵场。想校招时拿出作品，一场 Game Jam 往往比空谈项目更说明问题。"
        }
      ]
    },
    {
      "id": "co-ggj-sites",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·GameJam",
      "tag": "GGJ 2027 站点",
      "title": "GGJ 2027 全球站点陆续公布，高校与社区可申办本地赛点",
      "summary": "Global Game Jam 官网 2027 站点列表持续更新，已登记的赛点覆盖意大利、土耳其、英国、美国、埃及、中国香港、尼日利亚、阿根廷、瑞士、德国等多地与高校。官方强调承办方无需是大型机构，一个能提供空间、网络与电源的环境即可，也支持线上站点。",
      "image": "",
      "source": "Global Game Jam 官方（一手赛点页）",
      "date": "2026-11-19",
      "url": "https://globalgamejam.org/jam-sites/2027",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "GGJ 2027",
        "赛点",
        "高校"
      ],
      "content": [
        {
          "title": "站点信息",
          "type": "list",
          "items": [
            "2027 站点列表持续新增",
            "覆盖多国高校与社区组织",
            "承办门槛低：空间+网络+电源即可",
            "支持线上站点参与"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "找不到就近赛点，就自己申办一个——这种「把参与门槛降到最低」的思路，是 GGJ 能扩张到全球的秘密，也适合学生社团借鉴。"
        }
      ]
    },
    {
      "id": "co-37game",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "三七互娱",
      "title": "三七互娱 2027 届秋招进行中：Unity 客户端、C++ 服务端与 AI 算法岗齐开",
      "summary": "三七互娱 2027 届校园招聘正在推进，岗位覆盖 AI 算法工程师/AI 产品经理、游戏研发（C++ 服务端/客户端、Unity 客户端、Java 服务端）、运维、美术设计、游戏策划与运营等方向，Base 广州/北京。公司布局 AI、XR、人机交互等前沿方向，岗位招满即关停。网申入口以官方 Moka 页面为准。",
      "image": "",
      "source": "中国矿业大学（北京）就业网 / 三七互娱（一手公告）",
      "date": "2026-11-19",
      "url": "https://jy.cumtb.edu.cn/Zhaopin/xiaozhao.html?id=a35eab9e-6d64-3fa0-bebd-8b4ef2f7d799&type=1",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "三七互娱",
        "校招",
        "Unity"
      ],
      "content": [
        {
          "title": "招聘要点",
          "type": "list",
          "items": [
            "2027 届秋招，Base 广州/北京",
            "岗位含 Unity 客户端、C++ 服务端、AI 算法",
            "覆盖研发、美术、策划、运营全链条",
            "岗位招满即关停，宜尽早投递"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "中厂校招常把 Unity 客户端与 C++ 服务端一起招，说明「引擎应用层 + 底层服务」是游戏研发的双主干。学生可按这两条线分别准备作品。"
        }
      ]
    },
    {
      "id": "co-perfect",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "完美世界",
      "title": "完美世界游戏图形开发实习生：要 C# + HLSL/GLSL，有渲染 Demo 优先",
      "summary": "完美世界发布游戏图形开发实习生岗位（北京望京），要求熟练掌握 C# 与 Unity API、能独立编写 HLSL/GLSL 并有 Shader 开发经验，了解 DrawCall、Overdraw、渲染批处理等性能概念。加分项包括个人渲染 Demo、Shader 作品集、开源图形项目经历，以及 Vulkan/Metal/DirectX 底层 API 或 Compute Shader 经验。截止日期 2027 年 10 月 15 日。",
      "image": "",
      "source": "全职招聘网 / 完美世界（一手岗位页）",
      "date": "2026-11-19",
      "url": "https://m1.quanzhi.com/job/detail/6ad1a3dd8f5a4fdf3c90b2ae",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "完美世界",
        "图形开发",
        "校招"
      ],
      "content": [
        {
          "title": "岗位要点",
          "type": "list",
          "items": [
            "图形开发实习生，Base 北京望京",
            "要求 C# + Unity API + HLSL/GLSL",
            "理解 DrawCall/Overdraw/Batching",
            "有渲染 Demo 或底层 API 经验优先"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这份 JD 把「作品集」写进加分项，说明图形岗看实战胜过看学历。想进这类岗位，准备一两个可演示的渲染 Demo，比堆课程分数更管用。"
        }
      ]
    }
  ]
};
