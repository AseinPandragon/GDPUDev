window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-10-20",
    "weekday": "星期二",
    "title": "广药 游戏开发情报中枢 · 每日技术情报",
    "subtitle": "个人学习观察与评述 · 附参考来源外部链接",
    "updateTime": "2026-10-20 10:30",
    "editor": "广药技术中枢 & CodeBuddy",
    "highlights": ["VAST 开源实时世界模型 EdenLive：单卡 5090、720P 超 24FPS，权重/代码/报告全开放", "Anthropic 宣布 5% 股份注入公共利益基金；Claude 自主重设计量子电路刷新七项纪录", "Unity 连发三招：EDM 官方依赖管理包（EDM4U 将于 10-26 弃用）、Grok Build 插件、浏览器创作 Unity Spark", "GDCA 2027 首次开放厂商自主投稿（11-01 截止零报名费）；GitHub Game Off 2026 定档 11 月", "PEGI 开始把含战利品箱的数字游戏上调至 16 评级，10 月内滚动更新"],
    "engineStatus": [
      {
        "name": "Unity 6.6",
        "type": "unity",
        "status": "6000.6.5f1 补丁·生产推荐",
        "badge": "推荐生产",
        "color": "indigo"
      },
      {
        "name": "Unity 6.7 Beta 4",
        "type": "unity",
        "status": "6000.7.0b4·Beta推进中",
        "badge": "测试中",
        "color": "blue"
      },
      {
        "name": "团结引擎 1.10.4",
        "type": "tuanjie",
        "status": "9/23发布·持续更新",
        "badge": "国内生态",
        "color": "cyan"
      },
      {
        "name": "UE 6",
        "type": "unreal",
        "status": "Rocket League首发·2027上线·UEFN合并",
        "badge": "下一代",
        "color": "purple"
      },
      {
        "name": "Bevy 0.20.0",
        "type": "bevy",
        "status": "10/8正式版·Rust ECS",
        "badge": "新版发布",
        "color": "emerald"
      },
      {
        "name": "Godot 4.8-beta1",
        "type": "godot",
        "status": "10/15发布·Beta推进中",
        "badge": "新版发布",
        "color": "pink"
      }
    ]
  },
  "hero": {
    "id": "vast-edenlive-realtime-world-model",
    "category": "ai",
    "categoryName": "AI前沿 · 头条",
    "tag": "开源世界模型",
    "title": "VAST 开源实时世界模型 EdenLive：一张 5090 跑出 720P 24FPS 的可交互世界",
    "summary": "VAST 于 10 月 18 日发布并开源实时世界模型 EdenLive——模型权重、推理代码、技术报告全开放。在单张 RTX 5090、720P、5B 参数下生成速度超过 24FPS，可连续生成分钟级画面，端到端延迟约百毫秒。核心路线是「交互系统维护世界状态、生成模型只管视觉渲染」的解耦设计：「先用方块跑逻辑、再换皮出画面」的原型工作流第一次有了现成零件。",
    "image": "https://opengraph.githubassets.com/26e8cacbcf00cabfd0dfbce64b440184dbc3f8b04b1cd618fffb677f7e5448ef/VAST-AI-Research/EdenLive",
    "source": "GitHub: VAST-AI-Research/EdenLive",
    "date": "2026-10-18",
    "url": "https://github.com/VAST-AI-Research/EdenLive",
    "readTime": "8 分钟深度",
    "hotScore": 93,
    "tags": ["EdenLive", "世界模型", "实时生成", "VAST"],
    "content": [
      {
        "title": "实验要点",
        "type": "list",
        "items": ["10 月 18 日发布并同步开源：权重（Hugging Face）、推理代码（GitHub）、技术报告与端到端 Demo 一并公开；", "性能口径：单张消费级 RTX 5090、720P、5B 模型下超过 24FPS，支持分钟级连续生成，输入到画面端到端延迟约百毫秒；", "输入形态：简化场景或参考视频提供布局与运动，目标首帧加提示词指定画风，可生成写实 / 二次元等不同风格；", "同步开源 Game Prototype Turbo（Prompt to Proxy Game Skill）：游戏运行时由交互系统更新状态并输出简化参考画面，EdenLive 再实时渲染为精细画面。"]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "「状态维护与视觉渲染解耦」是今天最值得游戏开发者记住的七个字——它等于承认：游戏逻辑的正确性不该由生成模型担保，生成模型只负责让画面变贵。对独立团队的现实用法很具体：GameJam 里用免费资产搭出能玩的原型，临提交前用 EdenLive 批量「换皮」出演示视频；教学场景里让学生同时看到逻辑层与渲染层的边界。也要泼冷水：高频激烈交互、多角色身份保持、小物体精细控制仍是官方列明的待改善项——今天的它更适合场景漫游与回合制 demo，而不是硬核动作游戏。参考来源：GitHub 项目主页（量子位 10-18 报道）。"
      }
    ]
  },
  "categories": [
    {
      "id": "all",
      "name": "全部资讯",
      "icon": "🔥",
      "desc": "汇总今日游戏开发全生态情报"
    },
    {
      "id": "industry",
      "name": "行业热点",
      "icon": "📰",
      "desc": "大厂动向 / 财报 / 投融资 / 市场分析"
    },
    {
      "id": "games",
      "name": "热门游戏",
      "icon": "🎮",
      "desc": "新作发售 / 展会发布 / 热门追踪"
    },
    {
      "id": "opensource",
      "name": "开源宝库",
      "icon": "⭐",
      "desc": "GitHub 精选开源库 / 工具链 / 引擎框架"
    },
    {
      "id": "tutorials",
      "name": "实战教程",
      "icon": "📚",
      "desc": "DOTS / C# / 性能优化 / 架构设计"
    },
    {
      "id": "ai",
      "name": "AI前沿",
      "icon": "🤖",
      "desc": "AI NPC / 智能体 / 生成式AI / 大模型工具"
    },
    {
      "id": "contest",
      "name": "杂项",
      "icon": "🎯",
      "desc": "比赛 GameJam / 大厂中厂招聘 / 其他观察"
    },
    {
      "id": "engine",
      "name": "引擎前沿",
      "icon": "🔧",
      "desc": "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术"
    }
  ],
  "items": [
    {
      "id": "ai-openai-humanoid-robot",
      "category": "ai",
      "subcategory": "具身智能",
      "title": "OpenAI 确认自研人形机器人：奥特曼的胜负手是「大脑」不是身体",
      "summary": "Engadget 10 月 17 日报道：Altman 在 Sources 播客确认 OpenAI 将自研人形机器人（\"We will\"），并明确核心攻关是驱动机器人的「大脑」而非躯体；他对《财富》表示 2027 年会有「酷炫演示」，但机器人走上街头还要再等几年。OpenAI 官网在招 27 个机器人岗位，覆盖运动控制、执行器与整机行为。",
      "source": "Engadget",
      "date": "2026-10-17",
      "url": "https://www.engadget.com/2285040/openai-humanoid-robot-sam-altman-statement-real-challenge/",
      "image": "",
      "badge": "大厂动向",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": ["OpenAI", "人形机器人", "具身智能"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["Altman 在 Sources 播客确认自研人形机器人：选人形是因为「世界是为人的形态设计的」——门、键盘、工具皆然；", "他明确「身体长什么样」不重要，重要的是「驱动机器人的大脑」——给足四肢但不懂调度，硬件发挥不出价值；", "对《财富》的口径：2027 年有「酷炫演示」，但机器人上街还要再等几年；产品形态、价格、隐私框架均未公布；", "佐证：官网在招 27 个机器人岗位；其 Dactyl 项目（仿真训练魔方还原）是「模型学得会、物理说了算」的早期案例。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「用模型定义硬件」与特斯拉 Optimus 的「量产本体」路线形成对照。对游戏开发者的间接信号：具身智能对「大规模并行试错环境」的需求，正在把游戏引擎（Isaac、MuJoCo、乃至自研 ECS 世界）变成机器人训练的基础设施供应商——「游戏 = 训练场」的叙事从 AI 智能体扩展到了物理智能体。参考来源：Engadget。"
        }
      ]
    },
    {
      "id": "ai-anthropic-benefit-fund",
      "category": "ai",
      "subcategory": "公司治理",
      "title": "Anthropic 把 5% 股份划进公共利益基金：对「AI 冲击就业」的股份级回应",
      "summary": "Anthropic 官方 10 月 18 日公告：经股东批准后，将把 5% 公司股份注入新设的 Anthropic Public Benefit Fund；此后公司估值每较基准上涨 50%，董事会还可自主追加 2%。基金为全资 LLC，明确不得用于游说或政治献金，用途点名「研究并缓解 AI 对劳动力市场的冲击」（此前已承诺 2 亿美元）。",
      "source": "Anthropic 官方公告",
      "date": "2026-10-18",
      "url": "https://www.anthropic.com/news/public-benefit-fund",
      "image": "https://www-cdn.anthropic.com/images/4zrzovbb/website/85648c93880ac27347f8e6a4008650a65c12ede8-1200x630.jpg",
      "badge": "公司动向",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": ["Anthropic", "公共利益基金", "公司治理"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["10 月 18 日官方公告：Subject to stockholder approval，首批 5% 股份注入 Anthropic Public Benefit Fund；", "动态追加机制：公司估值每较设定基准上涨 50%，董事会可再划入 2%——公司越涨，公益池越大；", "结构：全资 LLC（非 501c3），股权不得用于任何游说或政治献金；典型用途包括大额捐赠与直接分配；", "背景：创始团队已承诺捐赠 80% 个人持股，加员工配比计划后约 20% 股份将用于公益；另已承诺 2 亿美元研究 AI 对就业的冲击。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把这条与本站连日跟踪的「智能体替你谈判/操作网页」连读：头部实验室一边让 AI 长出手脚，一边开始为「被冲击的人」预留股份——这不是公关姿态而是商业模式的一部分（IPO 前的治理叙事）。对学习者的实在信息：劳动力的「再技能化」会是真金白银的赛道，游戏/交互设计背景的人正大批涌向 AI 产品与教育内容岗。参考来源：Anthropic 官方公告。"
        }
      ]
    },
    {
      "id": "ai-claude-quantum-circuits",
      "category": "ai",
      "subcategory": "AI for Science",
      "title": "Claude 自己重设计量子电路：七项任务同时刷新，椭圆曲线门数降到此前最小设计的 1/17",
      "summary": "Anthropic 官方研究博客 10 月 16 日发布：让 Claude 在闭环中为八个量子计算基础构件重新设计电路——自然语言规格加自动评估器（按「量子比特数×门数」打分），模型自提方案、看分、改下一版。七项任务同时降低比特与门数量，椭圆曲线点加法给出新架构（门数为先前最小设计的 1/17），其中一次自主运行达 53 小时，并用 Lean 完成形式化验证。",
      "source": "Anthropic 研究博客",
      "date": "2026-10-16",
      "url": "https://www.anthropic.com/research/designing-efficient-quantum-circuits",
      "image": "https://www-cdn.anthropic.com/images/4zrzovbb/website/cc389d90b468ebc86011f6642099dfad9a4a757f-2000x1125.jpg",
      "badge": "研究前沿",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": ["Claude", "量子计算", "Lean", "AI for Science"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["官方口径：八个量子电路设计任务，闭环自动化（提方案→评估打分→迭代），轮次间基本无人类介入；", "结果：七项任务同时降低量子比特与门数量；椭圆曲线点加法新架构门数降至先前最小设计的 1/17；", "过程细节：一次 53 小时自主运行，Claude 用 Lean 做形式化验证，还自行证明出一组新的代数恒等式（中文报道口径）；", "必要冷静：上述均为设计阶段改进、经模拟与评估器验证——够大的真实量子计算机尚不存在，离「算东西」还远。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「AI 做科研」的正确打开方式不是「AI 替代科学家」，而是「AI 接管了搜索式迭代」：评估器即奖励函数，这正是强化学习的古老配方，只是搜索空间换成了电路。对游戏开发者的迁移价值：任何「可自动打分的设计空间」（关卡难度曲线、数值平衡、着色器指令数）都可以复制这套闭环——先写评估器，再放模型去跑。参考来源：Anthropic 研究博客。"
        }
      ]
    },
    {
      "id": "ai-reflection-beam-open-weights",
      "category": "ai",
      "subcategory": "开放权重",
      "title": "Reflection Beam 501B 开放权重：Apache 2.0、百万上下文，编程模型的「同车道」反击",
      "summary": "Hugging Face 博客 10 月 16 日文章：Reflection AI 将 Beam 模型权重上架 Hugging Face，Apache 2.0 许可，可下载、自托管、微调乃至商用。总参数 501B、MoE 每 token 激活约 23B、上下文约 100 万 token，主攻长上下文编程与智能体任务，官方称推理计算效率比同级开放模型高 3-4 倍。",
      "source": "Hugging Face 博客",
      "date": "2026-10-16",
      "url": "https://huggingface.blog/blog/reflection-beam/",
      "image": "https://riexmvmt4mtgutha.public.blob.vercel-storage.com/huggingface-blog/images/reflection-beam/8b2c21c2-af8b-4ad1-8fb2-0ddda1340fe7.webp",
      "badge": "模型发布",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": ["Reflection Beam", "开放权重", "编程模型"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["HF 博客 10-16：Beam 权重上架 Hugging Face，Apache 2.0（可商用改造）；", "规格：501B 总参数 MoE、每 token 激活约 23B、约 1M token 上下文，首发支持 Transformers / vLLM / SGLang；", "官方口径：推理计算效率比同级别开放模型高 3-4 倍；Google Cloud Day 0 部署（宣称 5x 性能）；", "现实门槛：NVFP4 压缩版仍需约 280GB 显存——正经跑起来要 4 张 B200 级显卡，不是笔记本玩具。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "开放权重阵营今年基本被 DeepSeek/Kimi/智谱领跑，Beam 是美国团队的「同车道」回应，卖点是数据主权与可审计。对学生和独立团队，今天的实际意义不在跑得动，而在「微调权」——敏感代码库、未公开项目文档不出机房就能用前沿级编程模型，这条对游戏公司（反洩密）比对个人开发者更有价值。参考来源：Hugging Face 博客。"
        }
      ]
    },
    {
      "id": "ai-laws-game-development",
      "category": "ai",
      "subcategory": "行业合规",
      "title": "AI 立法撞上游戏开发：GI 梳理配音、广告与资产合规的雷区地图",
      "summary": "GamesIndustry.biz 10 月 19 日专题长文：系统梳理 AI 法律环境变化如何影响游戏工作室——从配音演员权益到广告合规，逐条列出工作室正在面对的实际风险区。本站连日跟踪的「智能体与内容合规」话题，第一次有了面向开发者的地图式整理。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-19",
      "url": "https://www.gamesindustry.biz/the-ai-state-of-play-ai-laws-and-game-development",
      "image": "https://assetsio.gnwcdn.com/steve-a-johnson-1FD-E7Ioblw-unsplash-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "合规专题",
      "badgeType": "ai",
      "readTime": "9 分钟",
      "hotScore": 81,
      "tags": ["AI 合规", "法律", "游戏开发"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["GI 10-19 专题：AI 法律环境变化对工作室的影响面，覆盖表演（配音/动捕）与广告等方向；", "核心矛盾：生成式工具已成管线事实，而训练数据来源、替代人工、生成物版权三件事在各司法辖区答案不同；", "对发行侧：商店页素材、买量广告中的 AI 内容披露要求正在细化。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "与同日 UKIE×Sheridans 的 AI 认证服务连读，能看到行业分工：一方画雷区地图，一方卖避雷证书。对国内学生的实际建议：简历上「会用 AI 工具」正在贬值，「能说清某项 AI 产物的合规边界」正在升值——招聘 JD 里「了解 AIGC 合规」已从加分项变成常见项。参考来源：GamesIndustry.biz。"
        }
      ]
    },
    {
      "id": "ai-ukie-sheridans-compliance",
      "category": "ai",
      "subcategory": "行业合规",
      "title": "UKIE 联手 Sheridans 推出 AI 合规认证：四步流程，路演时亮出的「AI 证书」",
      "summary": "GamesIndustry.biz 10 月 19 日报道：英国游戏产业协会 UKIE 与律所 Sheridans 合作推出 AI Compliance and Accreditation Service，四步流程的终点是一枚 AI Certification Mark——可在路演与融资场景展示的合规标识。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-19",
      "url": "https://www.gamesindustry.biz/ukie-partners-with-sheridans-on-ai-compliance-and-accreditation-service-to-guide-uk-studios-in-using-ai-lawfully-and-responsibly",
      "image": "https://assetsio.gnwcdn.com/Screenshot-2026-10-16-150111.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "行业服务",
      "badgeType": "ai",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": ["UKIE", "合规认证", "AI"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["GI 10-19：UKIE × Sheridans 推出 AI 合规与认证服务；", "四步流程的终点是一枚 AI Certification Mark，可在 pitch 与融资轮次中展示；", "定位：帮英国工作室「合法且负责任地」使用 AI——把合规从法务成本变成商业信用。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「认证标记」的思路本质是把合规产品化：就像无障碍标识、环保标识一样，AI 使用合规正在成为发行商与平台的采购门槛。可以预期的下一步：Steam/App Store 上架的 AI 内容声明、发行商合同里的 AI 条款模板——早做准备的工作室能把认证变成竞标优势。参考来源：GamesIndustry.biz。"
        }
      ]
    },
    {
      "id": "engine-godot-cpu-rendering",
      "category": "engine",
      "subcategory": "官方技术博客",
      "title": "Godot 官方博客谈 CPU 侧渲染优化：把渲染主循环的每一毫秒抠出来",
      "summary": "Godot 官方博客 9 月 15 日文章（Clay John 执笔）：讲解引擎 CPU 侧渲染代码的优化方法论——从场景遍历到渲染指令提交，逐层剖析瓶颈定位与修复思路。对想在开源引擎里读源码学优化的同学，这是一篇带官方注释的「渲染器 internals 导览」。",
      "source": "Godot Engine 官方博客",
      "date": "2026-09-15",
      "url": "https://godotengine.org/article/rendering-cpu-optimizations/",
      "image": "https://godotengine.org/storage/blog/rendering-optimizations-cpu-2026/progress-report-cpu-rendering-optimizations.jpg",
      "badge": "渲染优化",
      "badgeType": "engine",
      "readTime": "10 分钟",
      "hotScore": 83,
      "tags": ["Godot", "CPU 渲染", "性能优化"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["Godot 官方 9-15 文章《Optimizing CPU-side Rendering Code》；", "视角：GPU 之外的性能另一半——场景树遍历、可见性剔除、渲染命令生成的 CPU 成本；", "作者 Clay John 为 Godot 渲染核心贡献者，文中方法即引擎实际采用的优化路径。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "引擎优化教学大多盯着 GPU（shader/带宽），CPU 侧的「draw call 组织成本」才是中小团队的隐形瓶颈——尤其 2D 游戏的万级节点场景。把这篇与本站 10-19 收录的 Oblivion Remastered 社区性能修复连读：官方方法论 + 民间实战，正好构成 UE/Godot 两套参照。参考来源：Godot 官方博客。"
        }
      ]
    },
    {
      "id": "engine-unity-edm-package",
      "category": "engine",
      "subcategory": "官方工具",
      "title": "Unity 把 EDM4U 收编为官方包：移动端依赖管理升格，Google 侧 10-26 弃用倒计时",
      "summary": "Unity 官方博客 9 月 29 日公告：External Dependency Manager（EDM）成为经由 UPM 分发的官方包——基于 Google EDM4U 的 fork，由 Unity 维护引擎兼容与修复；对 2022.3 及以后版本免费，沿用同一套 XML 依赖声明。Google 已宣布 EDM4U 将于 10 月 26 日弃用，移动端 SDK 依赖管理的权杖正式交接。",
      "source": "Unity 官方博客",
      "date": "2026-09-29",
      "url": "https://unity.com/blog/external-dependency-manager",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/e8cb5e6760b82f908aa770df056e36f2ca91e67e-3840x2160.jpg",
      "badge": "官方工具",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": ["Unity", "EDM", "移动端"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["EDM 经 Unity Package Manager 分发，免费支持 Unity 2022.3+，可无重写迁移现有 EDM4U 项目；", "Google EDM4U 将于 10 月 26 日弃用——距离今天只剩 6 天，SDK 维护者与项目都该行动了；", "SDK 维护者路径：同一 XML 依赖规范，按官方 plug-in distributor 指南把推荐项切到 EDM；", "首个版本聚焦稳定迁移，已含 CocoaPods/Ruby 集成与体验修复。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "EDM4U 是每一个接过 Android SDK 冲突报错的 Unity 开发者的共同 trauma——「duplicate class」「signature conflict」一类问题终于有官方亲爹管了。给项目组的行动清单：先在 Package Manager 装 EDM、让 Unity 提示选择活跃依赖管理器、SDK 全部迁完再卸 EDM4U。截止日 10-26，本周就该排进任务板。参考来源：Unity 官方博客。"
        }
      ]
    },
    {
      "id": "engine-unity-grok-plugin",
      "category": "engine",
      "subcategory": "AI 工具链",
      "title": "Unity 官方插件登陆 Grok Build：30+ 技能一个仓库维护，三家编码智能体同步更新",
      "summary": "Unity 官方博客 10 月 1 日宣布：继 Claude Code 与 Codex 之后，Grok Build 成为第三个搭载 Unity 官方插件的编码智能体——同一仓库维护的 30+ 技能（UI Toolkit/uGUI、2D 与 Tilemap、URP 与 Shader Graph、音频、导航与物理、IAP、多人、Web、本地化），一条命令安装，Unity 6 起可用。",
      "source": "Unity 官方博客",
      "date": "2026-10-01",
      "url": "https://unity.com/blog/unity-plugin-grok",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/ae3527e27fc75b514ea44132e8d3e23882bdc721-1177x655.png",
      "badge": "AI 工具链",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": ["Unity", "Grok Build", "编码智能体"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["三家智能体（Claude Code / Codex / Grok Build）使用同一份由 Unity 功能团队编写的 30+ 技能，单仓库统一更新；", "安装即一条 CLI 命令（grok plugin install Unity-Technologies/unity-agent-plugin --trust），无需手工配置；", "官方数据点：Codex 活跃用户 1500 万（8 月口径），Claude Code 仍是最广泛使用的编码智能体；", "Unity 预告 10 月内发布自家 CLI + 插件使用数据报告。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「引擎主动住进智能体」这件事的信号意义大于插件本身：Unity 认为游戏开发的起点正在从「浏览器下载页」变成「已打开的终端 + agent」。对学生的启示很直接——把一份官方技能包同时喂给三家智能体，比较它们在同一任务上的差异，是理解「提示工程上下文」最便宜的实验。参考来源：Unity 官方博客。"
        }
      ]
    },
    {
      "id": "engine-unity-spark",
      "category": "engine",
      "subcategory": "新产品",
      "title": "Unity Spark：与 Google 合作把游戏创作搬进浏览器——「先做出真东西，再谈小岛秀夫」",
      "summary": "Unity CEO Matt Bromberg 10 月 7 日撰文介绍 Unity Spark：与 Google 合作推出的浏览器内游戏创作与分享方式，无需 Unity 或游戏开发经验，可直接连接 Asset Store 使用社区美术资产。他特意与「一句话复刻游戏」划清界限：Spark 的目标是让人做出值得打磨的真作品。",
      "source": "Unity 官方博客",
      "date": "2026-10-07",
      "url": "https://unity.com/blog/why-we-built-unity-spark",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/4d1659d37f2ec5077c183bd7e11b9ed6da141e90-1920x1080.png",
      "badge": "新产品",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": ["Unity Spark", "浏览器创作", "Democratizing"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["10-07 与 Google 同步官宣：浏览器内创作 + 分享，零门槛入门，直连 Asset Store 的美术资产库；", "官方立场明确反「one-shotting」：让 AI 复述一个已有的游戏不等于创作；", "背景数据：每月 30 亿人次玩 Unity 游戏，但几乎没有人自己做过游戏——Spark 想改变这个比例。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "CEO 亲自下场反「一句话生成游戏」的叙事很值得玩味：大厂开始意识到「留存」靠的是创作的粘性而不是生成的爽感——能打磨、能分享、能积累的作品才会留人。对教学场景，Spark 可能是比完整引擎更好的第一课：先在浏览器里拼出可玩原型，建立「系统感」，再迁移到 Unity 编辑器。参考来源：Unity 官方博客。"
        }
      ]
    },
    {
      "id": "engine-phaser-42-release",
      "category": "engine",
      "subcategory": "版本发布",
      "title": "Phaser 4.2：Spine 成为一等公民，Mesh2D 与模板缓冲进主线（补位收录）",
      "summary": "Phaser 官方 7 月 21 日发布 4.2：Spine 骨骼动画从插件升格为引擎一级公民，同批带来 Mesh2D、模板缓冲（Stencil）API 与锥形光源等渲染能力。作为 2D Web 游戏框架的年度重要更新，本条为引擎线补位收录（日期如实标注）。",
      "source": "Phaser 官方新闻",
      "date": "2026-07-21",
      "url": "https://phaser.io/news/2026/07/phaser-4-2-spine-renderer-mesh2d-stencil",
      "image": "https://cdn.phaser.io/news/2026/07/spine-renderer-final-header.png",
      "badge": "版本发布",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": ["Phaser", "Spine", "2D 渲染"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["Phaser 4.2（7-21）：Spine 渲染器成为官方一等公民，配合官方 Spine 插件使用；", "同批特性：Mesh2D（自定义网格）、Stencil 模板缓冲 API、锥形光源等；", "Phaser 4 主线与面向 Game Agent 的 Phaser AE 双线并行的格局不变。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把这条与今天的 Phaser Spine 教程（PSD→绑定→官方插件播放）连读就是完整闭环：引擎层先收编 Spine，教程层再教你怎么用——小而快生态的「发布即教学」节奏值得国内引擎社区学习。Web 小游戏赛道的同学：Spine 授权费用别漏算，骨骼动画的性价比要按项目规模算账。参考来源：Phaser 官方新闻。"
        }
      ]
    },
    {
      "id": "oss-comfyui-daily-trending",
      "category": "opensource",
      "subcategory": "GitHub 热榜",
      "title": "ComfyUI 单日再涨千星：本地 AI 图像工作流的「默认操作系统」",
      "summary": "Comfy-Org/ComfyUI 今日登上 GitHub 日榜（单日 +1011 星，总量约 13.98 万星）：节点图界面的模块化扩散模型 GUI 与推理后端，本地 AI 图像/视频生成管线的事实标准。对游戏美术管线而言，它已是「本地生成」的默认起手式。",
      "source": "GitHub: Comfy-Org/ComfyUI",
      "date": "2026-10-20",
      "url": "https://github.com/Comfy-Org/ComfyUI",
      "image": "https://opengraph.githubassets.com/1/Comfy-Org/ComfyUI",
      "badge": "热榜精选",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": ["ComfyUI", "AI 图像", "节点图"],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": ["GitHub 日榜在榜：单日 +1011 星，总星标约 13.98 万（10-20 快照）；", "定位：最强大的模块化扩散模型 GUI/API/后端，节点图编排，号称最快本地推理引擎；", "生态：新模型（FLUX 3 系、世界模型类）的社区节点通常当日即有适配。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "ComfyUI 的护城河不是模型而是「工作流的可分享性」——一张 JSON 工作流图就是一条可复现的生产线。对美术向同学的建议：别只收藏别人的工作流，拆一遍节点图理解每个采样器/调度器的取舍，这才是它区别于「套壳网页」的学习价值。参考来源：GitHub。"
        }
      ]
    },
    {
      "id": "oss-headroom-context-compression",
      "category": "opensource",
      "subcategory": "GitHub 新仓库",
      "title": "headroom：给编码智能体「减压」——工具输出压缩省 20%，JSON 最高省 95% token",
      "summary": "GitHub 新仓库 headroomlabs-ai/headroom（今日 +310 星，总量约 7.63 万星）：在工具输出、日志、文件与 RAG 分块进入 LLM 之前做压缩——官方口径为编码智能体省 20% token、JSON 类内容省 60-95%，且「答案不变」。提供库、代理与 MCP Server 三种接入形态。",
      "source": "GitHub: headroomlabs-ai/headroom",
      "date": "2026-10-20",
      "url": "https://github.com/headroomlabs-ai/headroom",
      "image": "https://opengraph.githubassets.com/1/headroomlabs-ai/headroom",
      "badge": "新仓库",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": ["上下文压缩", "MCP", "智能体"],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": ["GitHub 日榜在榜：单日 +310 星，总星标约 7.63 万；", "功能：压缩工具输出/日志/文件/RAG 分块后再喂给模型，官方口径 20% 起步、JSON 最高 95%；", "形态：库（library）、代理（proxy）、MCP Server 三种接入方式。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "上下文工程（context engineering）正在从「提示词怎么写」演进到「token 预算怎么花」——headroom、context-mode 这类压缩层一周内接连上榜说明需求真实存在。与游戏开发的关系：智能体读引擎日志/编译输出的场景里，压缩层几乎是无脑收益；「答案不变」的宣称记得用自己的任务集验证。参考来源：GitHub。"
        }
      ]
    },
    {
      "id": "oss-artcraft-crafting-engine",
      "category": "opensource",
      "subcategory": "GitHub 周榜",
      "title": "ArtCraft 周榜暴涨 1.36 万星：Rust 写的「给艺术家与电影人的刻意创作引擎」",
      "summary": "GitHub 周榜仓库 storytold/artcraft（本周 +13572 星，总量约 3.38 万星）：Rust 实现的「intentional crafting engine for artists, designers, and filmmakers」——面向美术、设计师与电影人的创作工具链。生成式工具泛滥的当下，一个强调「刻意创作」的开源项目逆势爆红。",
      "source": "GitHub: storytold/artcraft",
      "date": "2026-10-20",
      "url": "https://github.com/storytold/artcraft",
      "image": "https://opengraph.githubassets.com/1/storytold/artcraft",
      "badge": "周榜精选",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": ["ArtCraft", "Rust", "创作工具"],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": ["GitHub 周榜：本周 +13572 星，总星标约 3.38 万（10-20 快照）；", "定位：面向 artists / designers / filmmakers 的「intentional crafting engine」，Rust 实现；", "与生成式工具的反差叙事是它出圈的关键词。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「intentional（刻意的）」这个词选得很妙——它把产品立场写进了名字：工具应该放大你的意图，而不是替你做决定。这恰是本站 10-18 科乐美「真人才是做好游戏的关键」言论的工具侧回声。周榜爆红的 Rust 创作工具值得围观代码组织，但星标暴涨期先让它飞一会儿，等第一个稳定版再上手不迟。参考来源：GitHub。"
        }
      ]
    },
    {
      "id": "oss-voicestudio-local-tts",
      "category": "opensource",
      "subcategory": "GitHub 周榜",
      "title": "VoiceStudio：开源全本地 ElevenLabs 替代品，646 语言配音克隆上周涨 1.7 万星",
      "summary": "GitHub 周榜仓库 debpalash/VoiceStudio（本周 +17291 星，总量约 7.76 万星）：开源自托管的语音工具箱——声音克隆、语音设计、视频配音、听写、转写与有声书制作，覆盖 646 种语言，全程本地运行。游戏本地化管线的「配音环节」有了零 API 成本的备选。",
      "source": "GitHub: debpalash/VoiceStudio",
      "date": "2026-10-20",
      "url": "https://github.com/debpalash/VoiceStudio",
      "image": "https://opengraph.githubassets.com/1/debpalash/VoiceStudio",
      "badge": "周榜精选",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": ["VoiceStudio", "TTS", "本地化"],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": ["GitHub 周榜：本周 +17291 星，总星标约 7.76 万（10-20 快照）；", "能力：声音克隆 / 语音设计 / 视频配音 / 听写 / 转写 / 有声书，646 语言，完全本地；", "定位：ElevenLabs 的开源替代——数据不出本机。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "游戏管线的直接用法：占位配音（临时的 temp VO）与本地化 QA 的配音对轨——正式配音仍应留给人类演员（合规与品质双原因）。注意克隆声音的授权边界：只克隆你自己或已获授权的声音，这条红线和上周的 AI 法规专题完全一致。参考来源：GitHub。"
        }
      ]
    },
    {
      "id": "oss-unity-agent-plugin-repo",
      "category": "opensource",
      "subcategory": "官方仓库",
      "title": "Unity 官方 unity-agent-plugin 仓库：一份技能喂三家智能体，官方工程经验的开源化",
      "summary": "Unity-Technologies/unity-agent-plugin：Unity 官方维护的智能体插件仓库，为 Claude Code / Codex / Grok Build 三家编码智能体提供同一套 30+ 官方技能——由各功能团队撰写并随版本更新，覆盖 UI Toolkit、URP/Shader Graph、导航物理、IAP、多人与本地化等模块。",
      "source": "GitHub: Unity-Technologies/unity-agent-plugin",
      "date": "2026-10-20",
      "url": "https://github.com/Unity-Technologies/unity-agent-plugin",
      "image": "https://opengraph.githubassets.com/1/Unity-Technologies/unity-agent-plugin",
      "badge": "官方仓库",
      "badgeType": "engine",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": ["Unity", "Agent Skills", "官方插件"],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": ["单仓库统一维护三家智能体的插件，更新同步下发；", "技能由 Unity 各功能团队（而非文档团队）撰写，随系统版本迭代修订；", "安装即用：一条 CLI 命令，无需拷贝配置，换机器零成本。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这个仓库的真正价值是「官方工程经验的开源化」——每个技能文件就是一份浓缩的最佳实践（UI Toolkit 怎么搭、Shader Graph 怎么组织），就算你不打算用智能体写 Unity，把它们当「官方口味的速查手册」读也值回票价。配合昨天 EDM 迁移截止日（10-26）食用更佳。参考来源：GitHub。"
        }
      ]
    },
    {
      "id": "oss-wfc-reference-mxgmn",
      "category": "opensource",
      "subcategory": "经典必读",
      "title": "WaveFunctionCollapse 参考实现：从一张示例图生成关卡的算法原点",
      "summary": "mxgmn/WaveFunctionCollapse：WFC（波函数坍缩）算法的参考实现——从单张示例位图学习局部约束，生成无限延展的新位图。算法已被移植到 C++/Python/Rust 等 14 种语言，并适配 Unity、UE5、Godot 4 与 Houdini，是程序化生成（PCG）领域引用最多的起点。",
      "source": "GitHub: mxgmn/WaveFunctionCollapse",
      "date": "2026-10-20",
      "url": "https://github.com/mxgmn/WaveFunctionCollapse",
      "image": "https://opengraph.githubassets.com/1/mxgmn/WaveFunctionCollapse",
      "badge": "经典必读",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 81,
      "tags": ["WFC", "程序化生成", "PCG"],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": ["官方参考实现：Bitmap & tilemap generation from a single example；", "移植生态：C++/Python/Kotlin/Rust/Go/Java 等 14 种语言，Unity/UE5/Godot 4/Houdini 适配；", "作者 mxgmn（Maxim Gumin）也是 MagicaVoxel 生态的重要贡献者。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把这条与今天的 glusoft Fast WFC 教程连读就是完整学习路径：先读参考实现理解「叠加态→坍缩→约束传播」的三步曲，再进 Godot 用插件落地上手。WFC 最好的练手项目是瓦片地图关卡生成器——它教会你的「局部规则涌现全局结构」思维，在洞穴生成、城市街区乃至叙事分支里全部通用。参考来源：GitHub。"
        }
      ]
    },
    {
      "id": "tut-glusoft-fast-wfc-godot",
      "category": "tutorials",
      "subcategory": "程序化生成",
      "title": "在 Godot 里用 Fast WFC 插件：把「一张示例图变关卡」接进工作流",
      "summary": "Glusoft 10 月 7 日教程：手把手在 Godot 中使用 Fast WFC（快速波函数坍缩）插件——从安装配置到生成第一张瓦片地图，覆盖插件参数与常见坑。配合本条收录的 WFC 参考实现，构成「原理 + 落地」的完整路径。",
      "source": "Glusoft",
      "date": "2026-10-07",
      "url": "https://glusoft.com/godot-tutorials/use-fast-wfc",
      "image": "",
      "badge": "PCG 实战",
      "badgeType": "event",
      "readTime": "8 分钟",
      "hotScore": 80,
      "tags": ["Godot", "WFC", "程序化生成"],
      "content": [
        {
          "title": "站点要点",
          "type": "list",
          "items": ["Glusoft（SDL3/SFML/Godot 教程站）10-07 发布《Use Fast WFC in Godot》；", "内容：fast wave function collapse 插件在 Godot 中的安装与使用；", "该站同系列还有 Tiled 导入与 GDShader 入门教程。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "WFC 教程的常见断层是「跑通了 Demo 但不知道示例图怎么画」——记住一条：示例图的局部模式就是你给算法的全部世界观，想出城堡就喂城堡局部，想出地牢就喂地牢局部。建议拿 Aseprite 画一张 64x64 的最小示例开练。参考来源：Glusoft。"
        }
      ]
    },
    {
      "id": "tut-phaser-spine-riggy",
      "category": "tutorials",
      "subcategory": "2D 动画管线",
      "title": "Phaser 4 Spine 管线：分层 PSD 经 AI 绑定成角色，官方插件直接播放",
      "summary": "Phaser 官方 10 月 12 日教程：Riggy 工具把分层 PSD 用 AI 自动绑定骨骼，导出标准 Spine 4.2 文件，再用 Phaser 官方 Spine 插件在 Phaser 4 里播放——从美术源文件到游戏内动画的完整链路演示。",
      "source": "Phaser 官方新闻",
      "date": "2026-10-12",
      "url": "https://phaser.io/news/2026/10/riggy-spine-animation-phaser-tutorial",
      "image": "https://cdn.phaser.io/news/2026/10/riggy-header.png",
      "badge": "管线教程",
      "badgeType": "event",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": ["Phaser", "Spine", "AI 绑定"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["流程：分层 PSD → Riggy（AI 骨骼绑定）→ 标准 Spine 4.2 导出 → Phaser 官方 Spine 插件播放；", "关键卖点：导出的是「plain Spine 4.2 files」——不锁工具链，Spine 编辑器里仍可继续精修；", "与 Phaser 4.2 的 Spine 一等公民地位（本条引擎分类已收录）配套食用。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「AI 绑定 + 开放格式导出」是这套管线最聪明的组合拳：AI 干最枯燥的权重活，但产物落回开放标准——不绑架你进私有格式。独立团队的 2D 角色动画成本因此逼近于零，剩下的预算建议花在关键帧手修上（AI 绑定的膝盖/肘部仍需人眼把关）。参考来源：Phaser 官方新闻。"
        }
      ]
    },
    {
      "id": "tut-godotlearning-interactive",
      "category": "tutorials",
      "subcategory": "常青库",
      "title": "godotlearning.com：给 Unity/UE 转型者的交互式 Godot 4 课——用旧概念映射新引擎",
      "summary": "常青库新增：godotlearning.com。面向 Unity 与 Unreal 开发者的交互式 Godot 4 教程站——把 Unity 的 UI 概念映射进 Godot（如在屏幕上挂分数、给成长中的游戏添功能），边学边练。引擎迁移期开发者的低成本入口。",
      "source": "Godot Learning",
      "date": "2026-10-20",
      "url": "https://godotlearning.com/",
      "image": "https://godotlearning.com/og-image.png",
      "badge": "常青库",
      "badgeType": "event",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": ["Godot", "引擎迁移", "交互式教程"],
      "content": [
        {
          "title": "站点要点",
          "type": "list",
          "items": ["godotlearning.com 为常青库新增收录（验证可访问，og 可用）；", "定位：Learn Godot 4 - Interactive Tutorials for Unity & Unreal Developers；", "特色：用 Unity 概念作脚手架（UI/场景/输入），交互式小步练习。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "引擎迁移教程的最大价值不是「教 Godot」，而是「翻译」——把 GameObject/Component 的心智模型翻译成 Node/Scene，你已有的五年 Unity 经验就不会归零重学。配合本站已收录的 GDQuest 交互式 GDScript 课程（0 基础线）与官方文档（权威线），Godot 学习三件套成型。参考来源：godotlearning.com。"
        }
      ]
    },
    {
      "id": "tut-gp-godot-state-machine",
      "category": "tutorials",
      "subcategory": "架构模式",
      "title": "Godot 状态机选读：用 Enum 把游戏 AI 的「人格」写清楚",
      "summary": "GeneralistProgrammer 的 Godot 状态机完整教程：以 Enum 驱动的有限状态机实现游戏 AI——状态切换、进入/退出逻辑与调试技巧，配完整示例代码。游戏 AI 架构的第一块地基，学生项目里最值得早写的「基础设施」。",
      "source": "GeneralistProgrammer",
      "date": "2026-10-20",
      "url": "https://generalistprogrammer.com/tutorials/godot-state-machine-complete-tutorial-game-ai",
      "image": "https://generalistprogrammer.com/images/tutorials/godot-state-machine-complete-tutorial.svg",
      "badge": "架构入门",
      "badgeType": "event",
      "readTime": "12 分钟",
      "hotScore": 80,
      "tags": ["Godot", "状态机", "游戏 AI"],
      "content": [
        {
          "title": "站点要点",
          "type": "list",
          "items": ["GeneralistProgrammer（3545+ 指南的游戏开发教程站）Godot 状态机长文；", "内容：Enum 状态定义、transition 表、enter/exit 钩子与调试方法；", "该站同系列还有 Godot 信号通信、场景实例化等架构主题。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "学生项目最常见的 AI 惨案是把所有行为塞进 _process 里用布尔变量串行——三个月后没人敢动那份代码。状态机的本质是「把行为合法性写成结构」：每种状态只回答「我现在能做什么、什么条件换下一幕」。先写 Enum 状态机，等它撑不住了再上行为树，这个顺序别反。参考来源：GeneralistProgrammer。"
        }
      ]
    },
    {
      "id": "tut-unity-edm-migration-guide",
      "category": "tutorials",
      "subcategory": "迁移指南",
      "title": "EDM 迁移实操：Unity 官方 Discussions 的 FAQ 与 SDK 维护者清单",
      "summary": "Unity 官方 Discussions 置顶帖：《Introducing External Dependency Manager (EDM)》——EDM4U 转 EDM 的技术细节、FAQ 与完整迁移步骤，配套官方文档。配合 10 月 26 日 EDM4U 弃用节点，这是本周 Unity 移动端项目最该读完的一篇实操指南。",
      "source": "Unity Discussions（官方）",
      "date": "2026-09-29",
      "url": "https://discussions.unity.com/t/introducing-external-dependency-manager-edm-unitys-official-package-for-mobile-native-dependencies/1737255",
      "image": "https://europe1.discourse-cdn.com/unity/original/3X/a/a/aaeab82727497b6f37f4312dcd57be21e6cd25e8.png",
      "badge": "迁移指南",
      "badgeType": "event",
      "readTime": "10 分钟",
      "hotScore": 80,
      "tags": ["Unity", "EDM 迁移", "移动端"],
      "content": [
        {
          "title": "站点要点",
          "type": "list",
          "items": ["官方 Discussions 长帖：技术细节、FAQ 与迁移全步骤；", "两条路线：游戏开发者（Package Manager 安装 + 选择活跃管理器）与 SDK 维护者（XML 规范 + distributor 指南）；", "官方 EDM 文档同步上线（get-started 与 plug-in-distributor 两册）。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "迁移最容易翻车的点是「SDK 经由第三方插件带进来的 EDM4U」——帖子里说得很清楚：这种情况先别卸，等 SDK 官方迁完再动。给毕设团队的建议：如果项目里嵌了广告/统计 SDK，本周就开一个迁移分支做演练，别拖到截止日当天和 Gradle 冲突搏斗。参考来源：Unity Discussions。"
        }
      ]
    },
    {
      "id": "tut-lsde-phaser-localization",
      "category": "tutorials",
      "subcategory": "工具链",
      "title": "LSDE：Phaser 生态的对话、翻译与本地化工具——文案管线的一次性补全",
      "summary": "Phaser 官方 9 月 30 日收录：LSDE——为 Phaser 游戏设计的对话撰写、翻译与本地化工具，从编写、翻译、配音到导出一条龙，开发者保持对文案的完全控制。独立游戏的本地化管线终于有了轻量级起手式。",
      "source": "Phaser 官方新闻",
      "date": "2026-09-30",
      "url": "https://phaser.io/news/2026/09/lsde-phaser-localization-tool",
      "image": "https://cdn.phaser.io/news/2026/09/lsde-header.png",
      "badge": "工具链",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": ["Phaser", "本地化", "对话系统"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["LSDE 定位：dialogue, translation and localization tool for Phaser；", "流程：撰写 → 翻译 → 配音 → 导出，全程可控（staying in control）；", "Phaser 官方新闻频道收录，属于生态推荐级工具。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "独立游戏的本地化失败几乎都输在「最后一公里」：文案散落在代码里、翻译版本对不上、配音替换漏文件。LSDE 这类「文案即数据」的工具把对话当成管线资产来管——这个思路不分引擎，Godot/Unity 项目同样值得抄作业（关键词：string table + key 引用，别硬编码文案）。参考来源：Phaser 官方新闻。"
        }
      ]
    },
    {
      "id": "games-gta-london-viz-story",
      "category": "games",
      "subcategory": "开发轶事",
      "title": "GTA 伦敦满街「狗蛋」的源头：一位痴迷英国讽刺杂志的加拿大美术师",
      "summary": "Rock Paper Shotgun 10 月 19 日口述史：GTA London 街头那些荒诞的「狗蛋」等涂鸦，源自一位痴迷英国讽刺漫画杂志《Viz》的加拿大美术师——文化错位造就了游戏史上最古灵精怪的地图装饰。90 年代本地化「不服管」的名场面。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-19",
      "url": "https://www.rockpapershotgun.com/i-was-a-real-anglophile-a-canadians-obsession-of-viz-magazine-is-why-grand-theft-auto-londons-streets-are-covered-in-dogs-eggs",
      "image": "https://assetsio.gnwcdn.com/grand-theft-auto-london.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "开发轶事",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": ["GTA London", "开发史", "美术"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["RPS 10-19 口述史：GTA London 的美术细节源自美术师对英国讽刺杂志 Viz 的痴迷；", "「狗蛋」（dog's eggs）等涂鸦正是 Viz 式英式粗俗幽默的移植；", "一位加拿大人给「最英国的城」画「最英国的梗」——文化转译者才是本地化的灵魂。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这条轶事最好的读法是当「文化转译」案例：本地化不是翻译文本，而是翻译「笑点的社会语境」。对比当下大厂把本地化做成「术语表一致性工程」，90 年代的野路子反而留下了 30 年后还有人写文章考古的细节——controlled chaos 的价值。参考来源：Rock Paper Shotgun。"
        }
      ]
    },
    {
      "id": "games-dragon-age-conan-oral-history",
      "category": "games",
      "subcategory": "开发口述史",
      "title": "《龙腾世纪》原画团队曾想做成《蛮王柯南》风：编剧回忆录里的「愿景保卫战」",
      "summary": "Rock Paper Shotgun 10 月 19 日报道：前首席编剧 David Gaider 回忆，《龙腾世纪》初代原画团队曾想把游戏做成「性感女术士 + 裸胸战士」的《蛮王柯南》风格，遭到设计师集体反对——缺乏「愿景守护者」时，艺术方向与系统设计谁说了算？",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-19",
      "url": "https://www.rockpapershotgun.com/sexy-sorceresses-and-bare-chested-fighters-dragon-ages-original-artists-wanted-to-base-it-on-conan-the-barbarian-much-to-the-outrage-of-the-designers",
      "image": "https://assetsio.gnwcdn.com/dragon-age-origins-e3-2004.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "开发口述史",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": ["龙腾世纪", "口述史", "美术方向"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["Gaider 回忆：初代原画团队的美学参照是《蛮王柯南》——「性感女术士」「裸胸战士」；", "设计师群体强烈反对，双方在「卖相」与「玩法表达」间拉锯；", "Gaider 的结论指向组织问题：团队需要明确的「愿景守护者」角色。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「美术与设计打架」是每个学生团队都会遇到的宪政危机，而大厂史的答案很一致：问题不在谁赢，而在「没有裁判」。Creative Director 的真实工作就是把愿景写成文档，让争论有共同的锚点。往深一层看，当年若真做成柯南风，Bioware 的叙事招牌可能就没了——愿景的胜负常在立项头三个月就决定。参考来源：Rock Paper Shotgun。"
        }
      ]
    },
    {
      "id": "games-ck3-silk-and-silver",
      "category": "games",
      "subcategory": "DLC 定档",
      "title": "CK3 商人共和国 DLC「Silk and Silver」定档 11 月中旬：敢在淡季发行的胆量",
      "summary": "Rock Paper Shotgun 10 月 19 日报道：《十字军之王3》商人共和国资料片「Silk and Silver」定档 2026 年 11 月中旬——主动选择 PC 游戏发售淡季。Paradox 的长线运营节奏与大作避让策略，又是一堂发行日历课。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-19",
      "url": "https://www.rockpapershotgun.com/crusader-kings-3s-merchant-republics-expansion-silk-and-silver-will-release-during-the-very-quiet-time-of-mid-november-2026",
      "image": "https://assetsio.gnwcdn.com/crusader-kings-3-silk-and-silver-release-date-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "DLC 定档",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": ["CK3", "Paradox", "发行节奏"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["CK3 商人共和国扩展「Silk and Silver」定档 2026 年 11 月中旬；", "RPS 点评该档期是 PC 游戏的「very quiet time」——大作空窗的淡季；", "商人共和国玩法 = 贸易站 + 选举政治，P 社祖传的「把系统做成角色剧」路线延续。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「敢发淡季」的底气来自产品形态：CK3 是长线运营的模拟器型游戏，没有首周销量生死线，淡季反而媒体版面更空、核心玩家注意力更集中。对比 AAA 的假日档期内卷，这是「产品类型决定发行策略」的活教材——独立小团队在 11-12 月上线反而可能是聪明选择。参考来源：Rock Paper Shotgun。"
        }
      ]
    },
    {
      "id": "games-needle-haystack-clone-war",
      "category": "games",
      "subcategory": "克隆风波",
      "title": "《Needle in a Haystack》克隆混战升级：模仿者的代码被「用 genAI 的克隆者」偷了",
      "summary": "Rock Paper Shotgun 10 月 19 日报道：病毒式爆款《Needle in a Haystack》的模仿之作开始大量涌现，而其中一位模仿者开发者声称，自己的代码被一个使用生成式 AI 的克隆作品盗走。套娃式克隆把「AI 抄袭链」推到了前所未有的荒诞层级。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-19",
      "url": "https://www.rockpapershotgun.com/endless-pile-of-needle-in-haystack-games-begins-to-emerge-as-viral-hit-imitators-devs-claim-their-code-was-nicked-by-a-genai-using-clone",
      "image": "https://assetsio.gnwcdn.com/needle-in-a-haystack-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "克隆风波",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": ["Needle in a Haystack", "克隆", "AI 抄袭"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["爆款《Needle in a Haystack》的模仿品开始成堆出现（endless pile）；", "荒诞核心：模仿者开发者声称其代码被「使用生成式 AI 的克隆者」盗用；", "与本周 Moonlighter 开发商因怕 genAI 克隆而推迟 Demo 的事件（本站 10-17 收录）同属一个风暴眼。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「原创者 → 模仿者 → AI 克隆者」的三层套娃给行业出了一道新题：当抄袭链足够长，「谁抄谁」已经无法追溯——低成本生成让克隆的速度第一次超过了维权的速度。对学习者的结论很功利：你的防抄袭资产不是代码（可被扒），而是社区关系与更新速度（Clone 不走心）。参考来源：Rock Paper Shotgun。"
        }
      ]
    },
    {
      "id": "games-athanasia-dino-fps",
      "category": "games",
      "subcategory": "新作前瞻",
      "title": "Athanasia：让《恐龙危机》玩家狂喜的「舒适向」恐龙 FPS 前瞻",
      "summary": "Rock Paper Shotgun 10 月 19 日前瞻：沉浸式恐龙题材 FPS《Athanasia》——被形容为《恐龙危机》与《网络奇兵》玩家的「舒适食物」（comfort food）。恐龙题材在《Instinction》们跳票多年后，终于又有新作值得蹲。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-19",
      "url": "https://www.rockpapershotgun.com/life-has-once-again-found-a-way-in-athanasia-an-immersive-dinosaur-fps-that-feels-like-comfort-food-for-dino-crisis-and-system-shock-players-alike",
      "image": "https://assetsio.gnwcdn.com/athanasia.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "新作前瞻",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": ["Athanasia", "恐龙 FPS", "前瞻"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["RPS 10-19 前瞻：immersive 恐龙 FPS《Athanasia》；", "气质定位：Dino Crisis + System Shock 玩家的 comfort food；", "「Life has once again found a way」——侏罗纪梗开场。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「恐龙」是游戏史最诡异的空窗题材：需求（Primal Coworker 的爆款、恐龙危机的高价二手）一直都在，供给却常年断档。原因值得深思——恐龙的「恐怖谷」极难做：太写实像纪录片，太卡通像玩具。Athanasia 选的沉浸式路线（慢节奏 + 氛围压迫）可能是资源最省的解法，值得做独游的同学参考「用氛围代替预算」。参考来源：Rock Paper Shotgun。"
        }
      ]
    },
    {
      "id": "games-bloodlines-remaster-rumours",
      "category": "games",
      "subcategory": "传闻观察",
      "title": "《吸血鬼：避世血族》重制传闻流转：一支金属乐队成了导火索",
      "summary": "Rock Paper Shotgun 10 月 19 日报道：《吸血鬼：避世血族》重制版/复刻版传闻开始发酵——据报道，原版配乐中的金属乐队 Genitorturers 的动向成为线索之一。传闻归传闻，本作 2 代 2024 年首发翻车后的 IP 修复工程倒是真的在推进。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-19",
      "url": "https://www.rockpapershotgun.com/vampire-the-masquerade-bloodlines-remaster-or-remake-rumours-begin-to-flow-reportedly-in-part-thanks-to-a-metal-band-from-the-originals-score",
      "image": "https://assetsio.gnwcdn.com/vampire-the-masquerade-bloodlines-remaster-rumours-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "传闻观察",
      "badgeType": "game",
      "readTime": "4 分钟",
      "hotScore": 79,
      "tags": ["避世血族", "重制传闻", "White Wolf"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["RPS 10-19：Bloodlines 重制/复刻传闻开始流传；", "线索之一：原版配乐金属乐队的授权/合作动向（报道口径，未经官方确认）；", "背景：初代 2004 年发售的 cult 经典，2 代 2024 首发口碑翻车。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "用「配乐乐队动向」当传闻线索是游戏新闻学里的趣味侧写——授权合同的续签往往比官方公告更早泄露产品意图。提醒读者：传闻条目按「未证实」处理，真正值得蹲的是 Troika 老人是否回流（社区呼声最高的信号）。参考来源：Rock Paper Shotgun。"
        }
      ]
    },
    {
      "id": "industry-pegi-lootbox-16",
      "category": "industry",
      "subcategory": "评级监管",
      "title": "PEGI 开始把含战利品箱的数字游戏上调至 16 评级：10 月内滚动更新",
      "summary": "GamesIndustry.biz 今日报道：PEGI 开始对已上线的纯数字游戏执行新规——含付费随机内容（战利品箱）的游戏从 PEGI 3/7/12 统一上调至 16 评级，更新将在 10 月内滚动完成。2020 年引入「含内购」标签后，欧洲对 Loot Box 的监管又实质收紧一步。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-20",
      "url": "https://www.gamesindustry.biz/pegi-begins-moving-existing-digital-only-games-with-loot-boxes-up-to-a-16-rating",
      "image": "https://assetsio.gnwcdn.com/PEGI-age-rating-logos.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "评级监管",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": ["PEGI", "战利品箱", "监管"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["新规执行：纯数字游戏中含战利品箱者，评级上调至 PEGI 16（无论原评级 3/7/12）；", "更新节奏：10 月内滚动覆盖存量游戏，而非只管新游；", "背景：2020 年 PEGI 引入「Contains In-Game Purchases」标签，本次是评级本身首次因 loot box 上调。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「追溯存量游戏」是这轮新规最狠的细节——它不是窗口期合规，而是全量改造。做面向欧洲市场的抽卡/开箱玩法的团队要重新算账：16+ 评级意味着受众池收窄，商业化模型可能需要把「随机奖励」改成「保底直购」或「可视化兑换」。比利时之后，欧洲监管正从「贴标签」走向「动评级」。参考来源：GamesIndustry.biz。"
        }
      ]
    },
    {
      "id": "industry-wotc-union-vote",
      "category": "industry",
      "subcategory": "劳资关系",
      "title": "威世智拒绝自愿承认 D&D 与 Studio X 工会：员工将走 NLRB 选举程序",
      "summary": "GamesIndustry.biz 今日报道：Wizards of the Coast 拒绝自愿承认 D&D 与 Studio X 团队的工会，相关员工将转入美国全国劳动关系委员会（NLRB）选举程序。游戏业工会化浪潮里的又一回合，发生在桌面游戏与数字游戏的双重总部。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-20",
      "url": "https://www.gamesindustry.biz/wizards-of-the-coast-declines-to-voluntarily-recognize-dd-and-studio-x-union-drive",
      "image": "https://assetsio.gnwcdn.com/Wizards_CWA.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "劳资观察",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": ["威世智", "工会", "NLRB"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["WotC 拒绝自愿承认（voluntarily recognize）D&D 与 Studio X 团队工会；", "下一站：NLRB 主持的投票选举——程序更长，结果更具法律效力；", "本站 10-16 已收录动视 QA 工会授权罢工投票——劳资议题在本周高频出现。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「自愿承认」与「NLRB 选举」的区别是关键：前者是资方点头当天生效，后者要走数月程序、且资方可以在此期间开展反工会活动。把本周的动视罢工授权、WotC 拒认、Liquid Swords 破产连读，你会看到行业收缩期的劳资张力在所有规模的工作室同步升温——求职时把「是否有工会/劳资历史」纳入尽调清单，已是合理动作。参考来源：GamesIndustry.biz。"
        }
      ]
    },
    {
      "id": "industry-jobs-roundup-ukie-chair",
      "category": "industry",
      "subcategory": "人事盘点",
      "title": "GI 十月人事盘点：Playstack CEO 当选 UKIE 主席，多家公司人事异动",
      "summary": "GamesIndustry.biz 今日发布十月 Jobs Roundup：Playstack CEO Harvey Elliott 当选 UKIE 新任主席；另有 Diva Agency 商务拓展、Pantaloon 品牌与市场负责人等系列任命。行业收缩期的人事流向，是观察资源往哪去的免费风向标。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-20",
      "url": "https://www.gamesindustry.biz/jobs-roundup-october-playstack-ceo-harvey-elliott-voted-in-as-char-of-ukie",
      "image": "https://assetsio.gnwcdn.com/harvey-elliot-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "人事盘点",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": ["UKIE", "人事", "Playstack"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["Playstack CEO Harvey Elliott 当选 UKIE 主席（Playstack 系《Salvage》《Milk inside a bag of milk》发行商）；", "UPDATE 项：Chris Collins 加入 Diva Agency 任商务拓展，Kelly Bennet 出任 Pantaloon 品牌与市场营销经理；", "GI 月度 Jobs Roundup 为固定栏目，行业人事的月度切片。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "独立发行商掌门人执掌行业协会，通常意味着政策议程向中小团队倾斜（UKIE 本周同期推出 AI 合规认证服务，本条 AI 分类已收录）。找工作的同学可以把 GI 的月度 Jobs Roundup 当「行业血缘图」看：谁去了哪家、哪些新工作室由谁创办——人脉网络的可视化拼图。参考来源：GamesIndustry.biz。"
        }
      ]
    },
    {
      "id": "industry-splitscreen-croatia",
      "category": "industry",
      "subcategory": "行业会议",
      "title": "克罗地亚新会议 Splitscreen 接棒 Reboot Develop：2027 年 4 月，海边酒店没有 Meeting App",
      "summary": "GamesIndustry.biz 10 月 19 日报道：新会议 Splitscreen 将于 2027 年 4 月 20-22 日在克罗地亚斯普利特举行——接棒今年因主办方破产而终结的 Reboot Develop。卖点：海滨酒店、AAA 与独立混编的国际听众，以及「最受requested 的特性」：没有会议预约 App。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-19",
      "url": "https://www.gamesindustry.biz/new-croatian-conference-splitscreen-wants-to-keep-that-half-holiday-half-work-feeling-of-reboot-develop",
      "image": "https://assetsio.gnwcdn.com/Splitscreen-logo.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "行业会议",
      "badgeType": "business",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": ["Splitscreen", "行业会议", "克罗地亚"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["时间地点：2027 年 4 月 20-22 日，克罗地亚斯普利特 Radisson Blu 海滨酒店；", "初始阵容：Landfall 的 Rebecca Lautner、Housemarque 联合创始人 Ilari Kuittinen、Panache Digital 的 Patrice Désilets 等；", "定位宣言：「half-holiday, half-work」——亚得里亚海边重建 Reboot Develop 的社区氛围；官方特别强调 NO meeting app。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「没有 Meeting App」居然是首届大会最响的卖点——这说明行业对「效率工具化的社交」已经反弹到临界点。欧洲会议版图（GIC 波兹南、PG Connects、Splitscreen）对学生党的现实意义：这些会的学生票/志愿者通道通常是接触行业最便宜的门票，2027 年 4 月的时间点可以提前规划毕业旅行了。参考来源：GamesIndustry.biz。"
        }
      ]
    },
    {
      "id": "industry-amazon-luna-expansion",
      "category": "industry",
      "subcategory": "云游戏",
      "title": "亚马逊 Luna 再扩 12 国：Prime 会员免费玩，星战竞速打头阵",
      "summary": "亚马逊游戏官方公告：Luna 云游戏服务向 12 个新国家/地区的 Prime 订阅者开放，加拿大、法国、意大利、西班牙等国的会员可直接在应用内免费游玩新游戏，包括《Star Wars: Galactic Racer》。云游戏从「独立订阅」转向「Prime 权益捆绑」的路线再下一城。",
      "source": "Amazon Games（官方公告）",
      "date": "2026-10-19",
      "url": "https://www.amazongamestudios.com/news/articles/primevideo-luna-expands",
      "image": "https://images.ctfassets.net/5lpapfxq15sk/42Pk9QASW64Tfy75qZgzt2/7c43e43efd1e5262dbb32440c94542d6/EN_BMO_PR_Image_740x416.jpg",
      "badge": "云游戏",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": ["Luna", "云游戏", "Prime"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["Luna 向 12 个新国家扩展，Prime 会员在应用内免费玩新游戏；", "首发阵容包括《Star Wars: Galactic Racer》（本站 10-17/10-19 曾两次收录其开发专题）；", "策略：不做独立订阅制，绑进 Prime 大礼包摊薄成本。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "云游戏十年的「平台梦」集体熄火后，Luna 的「Prime 权益化」路线反而活得越来越滋润——不向用户单独收钱，就成了边际成本生意。对本站读者：其一，独立游戏上 Luna 的门槛与分成条件值得查一眼（比主机上架宽松）；其二，与本周「硬件市场冻结」评论连读，设备受限市场的串流需求正在成为真实的用户增量。参考来源：Amazon Games。"
        }
      ]
    },
    {
      "id": "contest-gdca-2027-submissions",
      "category": "contest",
      "subcategory": "赛事节点",
      "title": "GDCA 2027 首次向厂商开放直投：11 月 1 日截止、零报名费、新增两个奖项",
      "summary": "GamesIndustry.biz 10 月 19 日报道：2027 年游戏开发者选择奖（GDCA）打破 500 人 ICAN 评审团提名制——发行商与开发者首次可自主提交作品参评。资格为 2026 年 1 月 1 日至 12 月 31 日间在 PC 或主机发售的游戏，零报名费，截止 11 月 1 日；新增 Best Game Launch 与 Best Gaming Tech 两个奖项，获奖者于 2027 年 3 月 2 日 GDC 现场揭晓。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-19",
      "url": "https://www.gamesindustry.biz/gdca-2027-moves-away-from-nominations-based-system-publishers-and-devs-can-now-submit-games-for-consideration",
      "image": "https://assetsio.gnwcdn.com/gdca_H2ogd1U.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "赛事节点",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": ["GDCA", "GDC", "评奖"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["制度变化：从 ICAN（500+ 创作者邀请制评审团）提名制 → 开放自主投稿；", "资格窗口：2026-01-01 至 2026-12-31 发售于 PC 或主机的游戏，零报名费，截止 2026-11-01；", "新奖项：Best Game Launch（最佳发行）与 Best Gaming Tech（最佳技术）；", "颁奖：2027 年 3 月 2 日 GDC Festival of Gaming 现场。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "GDCA 开放直投对小团队是实打实的利好：过去提名靠评审团「看不见你」，现在投稿即入池——GDC 系奖项的含金量（尤其是 Best Gaming Tech 这种技术奖）对融资与发行谈判的加成远超独立奖项。日历提醒：11 月 1 日截止，留给打磨提交材料只有 12 天。参考来源：GamesIndustry.biz。"
        }
      ]
    },
    {
      "id": "contest-github-game-off-2026",
      "category": "contest",
      "subcategory": "GameJam",
      "title": "GitHub Game Off 2026 定档 11 月：整月开发、主题 11 月 1 日公布",
      "summary": "GitHub 年度 GameJam「Game Off 2026」已上架 itch.io：提交窗口 11 月 2 日至 12 月 2 日，主题 11 月 1 日公布——整月开发节奏，对课业繁重的学生是最友好的 Jam 形态。要求源码托管在公开 GitHub 仓库，12 月 1 日 13:37（PST）前推送即可。",
      "source": "GitHub Game Off（itch.io）",
      "date": "2026-10-20",
      "url": "https://itch.io/jam/game-off-2026",
      "image": "https://img.itch.zone/aW1nLzEzNjAyOTg3LnBuZw==/original/NHgMM%2F.png",
      "badge": "GameJam",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": ["Game Off", "GitHub", "11 月 Jam"],
      "content": [
        {
          "title": "赛事要点",
          "type": "list",
          "items": ["提交窗口：2026-11-02 至 2026-12-02（整月）；主题 11 月 1 日公布，当前已 807 人加入；", "硬性要求：源码存放在公开 GitHub 仓库——「开源魔法」，评审含 Overall/Graphics/Audio/Innovation/Theme 诠释等维度；", "投票至 2027-01-01；引擎不限（官方点名 Phaser/Pygame/Godot/Bevy/libGDX/Defold 等）。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Game Off 是少数「整月节奏」的 Jam——它考的不是爆发力而是持续性，特别适合用「每周末推进一个系统」的方式参与。附加价值常被低估：参赛即强制练习 Git 工作流（源码公开是硬要求），对求职的隐性收益不输游戏本身。距离开赛 12 天，正好用来组队和熟悉 itch 提交流程。参考来源：itch.io 赛事页。"
        }
      ]
    },
    {
      "id": "contest-godot-wild-jam-98-voting",
      "category": "contest",
      "subcategory": "GameJam",
      "title": "Godot Wild Jam #98 投票进行中：158 份 Godot 作品的 9 天极限，规则明令禁用 AI 内容",
      "summary": "Godot Wild Jam #98（10 月 9-18 日提交）已进入投票期，共 158 份作品、895 份评分。该 Jam 每月第二个周五开赛、为期 9 天，规则里白纸黑字写着「禁止使用 AI 生成内容」——在 2026 年的 Jam 生态里，这是一份值得细读的立场声明。",
      "source": "Godot Wild Jam（itch.io）",
      "date": "2026-10-20",
      "url": "https://itch.io/jam/godot-wild-jam-98",
      "image": "https://img.itch.zone/aW1nLzkwMjEzMTcucG5n/original/Ck8a1F.png",
      "badge": "GameJam",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": ["Godot Wild Jam", "Godot", "9 天 Jam"],
      "content": [
        {
          "title": "赛事要点",
          "type": "list",
          "items": ["GWJ #98：10 月 9-18 日提交，158 份作品；投票至 10 月 25 日左右；", "节奏：每月第二个周五开赛，9 天（比 48 小时 Jam 舒展，比月度 Jam 紧凑）；", "规则亮点：禁止一切 AI 生成内容（代码/美术/音乐/文案，含 itch 页面）；队伍上限 5 人；必须用 Godot。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「禁止 AI 内容」写在 Jam 规则里，2024 年还是新闻，2026 年已成常规——它实际上重新定义了「参赛作品」的信号价值：评委与玩家默认你的每一帧都是手作。对练习者的提醒：9 天 Jam 的正确姿势是第 1 天出可玩 vertical slice，别把 80% 时间花在技术选型上。参考来源：itch.io 赛事页。"
        }
      ]
    },
    {
      "id": "contest-godotfest-2026-munich",
      "category": "contest",
      "subcategory": "行业会议",
      "title": "GodotFest 2026 回到慕尼黑：11 月 3-4 日，开源引擎社区的年度小而美聚会",
      "summary": "Godot 官方 8 月 12 日公告：第二届 GodotFest 定于 11 月 3-4 日在慕尼黑举行——由引擎核心开发者与社区领衔的年度技术大会，距离今天只剩两周。用 Godot 或观望 Godot 的团队，这是每年性价比最高的「直接对话开发者」窗口。",
      "source": "Godot Engine 官方公告",
      "date": "2026-10-20",
      "url": "https://godotengine.org/article/godotfest-2026/",
      "image": "https://godotengine.org/storage/blog/covers/godotfest-2026.jpg",
      "badge": "行业会议",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": ["GodotFest", "慕尼黑", "开源引擎"],
      "content": [
        {
          "title": "赛事要点",
          "type": "list",
          "items": ["GodotFest 2026：11 月 3-4 日，德国慕尼黑（第二届）；", "内容惯例：核心开发者演讲、引擎路线图、社区实战分享；", "参会价值：GDC 之外最接近 Godot 决策层的场合，往届演讲会后放出录像。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "开源引擎的官方大会本质是「路线图听证会」：你在现场听到的渲染器计划、平台优先级，比任何新闻稿都前沿。去不了现场的同学蹲两周后的录像即可——建议重点标记 4.8 正式版时间线与主机/主机级平台支持的说法（本站 10-15 已收录 4.8-beta1）。参考来源：Godot 官方公告。"
        }
      ]
    },
    {
      "id": "contest-tencent-bfa-2027-campus",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "腾讯游戏×北京电影学院 2027 校招专场：多媒体、2D/3D 美术与技术美术一大波岗位",
      "summary": "北京电影学院就业渠道 10 月 16 日转发腾讯游戏校园招聘专场公告：面向 2027 年 1 月后毕业的在校大学生，岗位覆盖多媒体设计（导演/分镜）、2D 场景与角色、3D 场景与角色、动画、特效、技术美术、交互设计与视觉设计，专场嘉宾来自光子工作室。",
      "source": "腾讯游戏校园招聘（北京电影学院就业渠道转载）",
      "date": "2026-10-16",
      "url": "https://mp.weixin.qq.com/s?__biz=MzAwOTAzMDE1OA==&mid=2650982799&idx=1&sn=392520a80f7de0c758d9a4b050c55cf5&chksm=81dfdee114c8b3027e23b046cae1b1303b1b83030cc754b70aeb880a5122b04af83b544dd5b0&scene=27",
      "image": "https://mmbiz.qpic.cn/mmbiz_jpg/WaQDe451kxmXWJZJK4Vgrbqv63icImicMZ6j94aQ5oeW6icXmELeiaRnoWLzibSeLVPJLWIJYNQzbMw2jZ5ICjR6zujtkv12s38LOXnibXnVpJLvs/0?wx_fmt=jpeg",
      "badge": "招聘·校招",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": ["腾讯游戏", "2027 校招", "美术岗"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["面向对象：毕业时间在 2027 年 1 月之后的在校大学生；", "岗位方向：多媒体设计（导演/分镜）、2D 场景/角色、3D 场景/角色、动画、特效、技术美术（TA）、交互设计、视觉设计；", "专场形式：光子工作室嘉宾分享 + 校招宣讲（北影专场，其他高校同学可关注同款岗位在官方渠道的常规批次）。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "注意这波岗位的构成：几乎全是「内容资产与表达」岗（美术/动画/TA/导演），程序岗另走常规批次——美术与 TA 是秋招窗口里需求最稳的两类。非北影学生别被「专场」二字劝退：专场岗位通常同步挂在招聘官网，按官网常规通道投递即可。参考来源：腾讯游戏校园招聘（高校渠道转载）。"
        }
      ]
    },
    {
      "id": "contest-boke-2027-campus",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "波克 2027 届秋招网申启动：校园大使内推通道已提前开放",
      "summary": "山东师范大学研究生就业信息网 10 月 12 日转发波克 2027 届秋招公告：面向 2026 年 9 月及以后毕业的同学，校招大使内推通道提前开放（早投递早 offer），官方宣传预计随后发布。出海休闲游戏大厂的秋招窗口，适合关注全球化与小游戏方向的同学。",
      "source": "波克校园招聘（山东师范大学就业网转载）",
      "date": "2026-10-12",
      "url": "http://www.yjsjy.sdnu.edu.cn/info/1041/97911.htm",
      "image": "",
      "badge": "招聘·校招",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 79,
      "tags": ["波克", "2027 秋招", "内推"],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": ["面向对象：2026 年 9 月及以后毕业的同学（覆盖 2027 届为主）；", "通道：校园大使内推已提前开放——官方宣传稿随后发布，内推通常早于大部队；", "公司背景：波克（Boke）2010 年成立，全球化精品游戏 + 互联网方向。"]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把本条与 10-15 的米哈游（10-31 截止）、10-18 的库洛连成一张秋招日历：10 月下旬是 2027 届秋招的密集截止区。给「还没投的同学」一句实在话：内推通道的实际收益不在免笔试（多数公司内推不免），而在简历被看的优先级与进度可追踪——能找到在职学长学姐内推就别裸投。参考来源：高校就业网转载。"
        }
      ]
    }
  ]
};
