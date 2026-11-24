window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-24",
    "weekday": "星期二",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-24 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：Klei 正版授权手游《饥困荒野》11/24 上线，预约破 2500 万，取消武器宠物抽卡改兑换商店（hero）",
      "引擎精读：PlayCanvas 2.24 动态天空与平面反射、Unity 6.2 AI Assistant/Sentis、PlayCanvas 2.24 引擎更新、Stride 4.4 图形后端重构",
      "开源宝库：raea（React+TS 描述的渲染引擎）、OhMyGame 一人游戏工作室、SolidCraft 参数化 3D CAD、ArtCraft AI 创作 IDE",
      "AI 前沿：Anthropic IPO 募资 1195 亿美元收官、Gemini Decisions API 决策模型、Inkling 2 Mini 26B 本地可跑、腾讯 Hy4 开源",
      "游戏动态：《饥困荒野》11/24 上线、年末五款旗舰排期、Terminus Day Zero 免费上线、No Asteroids 挖小行星",
      "竞赛招聘：EHU Game Jam 2026、库洛/莉莉丝 2027 秋招、英雄游戏社招与 27 届校招"
    ],
    "engineStatus": [
      {
        "name": "PlayCanvas 2.24",
        "type": "webgpu",
        "status": "动态天空+平面反射",
        "badge": "WEB",
        "color": "cyan"
      },
      {
        "name": "Unity 6.2",
        "type": "unity",
        "status": "AI Assistant 登场",
        "badge": "UNITY",
        "color": "blue"
      },
      {
        "name": "Stride 4.4",
        "type": "native",
        "status": "Vulkan/DX12 重构",
        "badge": "OSS",
        "color": "teal"
      },
      {
        "name": "Bevy 0.20",
        "type": "native",
        "status": "Rust ECS 引擎",
        "badge": "OSS",
        "color": "orange"
      },
      {
        "name": "Gemini Decision 1",
        "type": "ai",
        "status": "决策模型 API",
        "badge": "AI",
        "color": "violet"
      },
      {
        "name": "饥困荒野",
        "type": "game",
        "status": "11/24 上线",
        "badge": "GAME",
        "color": "green"
      }
    ]
  },
  "hero": {
    "id": "hero-famine-wilds-launch",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "腾讯发行·Klei 授权",
    "subcategory": "大厂动向",
    "title": "《饥困荒野》11 月 24 日上线：预约破 2500 万，饥荒手游砍掉武器宠物抽卡",
    "summary": "由 Klei 正版授权、盛趣研发、腾讯发行的《饥困荒野》11 月 24 日全平台上线，国内预约量突破 2500 万。这款基于《饥荒：联机版》的多人生存手游保留随机生成世界、四季循环与哥特美术，新增「家园」安全区，角色与背包跨局保留；商业化上取消武器和宠物抽卡，改为沙盒材料兑换商店，付费重心转向外观。把成熟 IP 的移动化做成「去抽卡化」样本，反映大厂在长线运营与口碑之间的取舍正在往玩家友好一侧移动，值得做商业化设计的团队盯住它的留存数据。",
    "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-24-hero-famine.jpg",
    "source": "腾讯新闻（年末新游盘点）",
    "date": "2026-11-18",
    "url": "https://news.qq.com/rain/a/20261118A0F3Q700",
    "readTime": "6 分钟",
    "hotScore": 95,
    "tags": [
      "饥困荒野",
      "腾讯游戏",
      "Klei",
      "手游上线",
      "商业化"
    ],
    "content": [
      {
        "title": "关键事实",
        "type": "list",
        "items": [
          "11 月 24 日全平台上线，Klei 正版授权、盛趣研发、腾讯发行，基于《饥荒：联机版》开发",
          "国内预约量突破 2500 万，新增「家园」安全区，沙盒重置后角色与背包物品保留",
          "取消武器与宠物抽卡，改为兑换商店，道具只消耗沙盒材料，付费转向外观"
        ]
      },
      {
        "title": "学习观察",
        "type": "text",
        "text": "把「饥荒」这套高自由度的生存循环搬到移动端，难点从来不是玩法移植，而是如何在不破坏探索节奏的前提下建立商业化。取消抽卡、改用材料兑换，是把付费压力从核心循环挪到外观层的一次尝试；对独立开发者来说，这类大厂实验等于替行业验证了「去抽卡化」在买量时代是否还能跑通，比看财报数字更有参考价值。"
      }
    ]
  },
  "items": [
    {
      "id": "in-plugindigital",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "投融资·并购",
      "title": "法国 Plug In Digital 收购 Twin Sails，合并成面向独立游戏的发行集团",
      "summary": "法国发行商 Plug In Digital 收购《News Tower》发行方 Twin Sails Interactive，两家合并为 Plug In Digital Group，Twin Sails CEO 升任集团 CEO。新集团整合 Dear Villagers、移植工作室 Pixel Ratio，为独立开发者提供最高 50 万欧元开发预算与全球分发，目标每年发行 6 至 8 款新作。发行端 consolidation 在给独立团队更多基础设施的同时，也意味着选发行商要更看重长线分发能力。",
      "source": "GamesIndustry.biz",
      "date": "2026-11-21",
      "url": "https://gamesindustry.biz/plug-in-digital-acquires-news-tower-publisher-twin-sails-interactive-creating-new-publishing-group-to-compete-in-a-highly-competitive-market",
      "image": "https://assetsio.gnwcdn.com/HeroBanner_TSIxPiD.png?width=1200&height=630&fit=crop&enable=upscale&aut=format",
      "badge": "发行并购",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Plug In Digital",
        "Twin Sails",
        "独立发行",
        "并购"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Plug In Digital 收购《News Tower》发行方 Twin Sails Interactive，合并为 Plug In Digital Group",
            "新集团为独立开发者提供最高 50 万欧元开发预算与全球分发，目标每年发行 6-8 款新作",
            "Twin Sails CEO Nicolas Godement 升任集团 CEO，Dear Villagers 等厂牌继续独立运营"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "发行商合并潮的另一面，是独立开发者越来越需要「发行+移植+渠道」一条龙能力。挑合作伙伴时，与其看单款分成比例，不如看它在多平台分发和中国市场落地上的真本事，这才是作品能不能活过首年的关键。"
        }
      ]
    },
    {
      "id": "in-tencent-q3ai",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "大厂财报",
      "title": "腾讯三季度经营利润降 7%，财报把账算在 AI 投入头上",
      "summary": "腾讯 2026 年三季度营收 2073.36 亿元、同比增 8%，归母净利润 636.12 亿元、同比增 0.8%，但经营利润 591 亿元、同比下降 7%，经营利润率从 33% 降到 29%。财报注明若剔除混元、元宝、CodeBuddy、WorkBuddy 等新 AI 产品投入，经营利润为 833 亿元、同比增 8%。三季度自由现金流为负 691 亿元，主因大额算力采购预付款。把 AI 成本单独摊开披露，是大厂给股东交代投入节奏的新写法。",
      "source": "网易财经（转中国工业报）",
      "date": "2026-11-23",
      "url": "https://www.163.com/dy/article/LCDQJOQS05568W0A.html",
      "image": "",
      "badge": "财报解读",
      "badgeType": "business",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "腾讯",
        "三季度财报",
        "AI投入",
        "算力采购"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "三季度营收 2073.36 亿元、同比增 8%；经营利润 591 亿元、同比下降 7%",
            "剔除新 AI 产品投入后经营利润 833 亿元、同比增 8%，利润率保持 40%",
            "自由现金流为负 691 亿元，主要来自算力采购预付款"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「剔除 AI 后利润其实在涨」这种披露口径，本质是在给长周期投入争取时间窗口。对做技术选型的团队，信号很直接：头部厂商把算力当战略资产囤，未来一两年的云与模型调用供给会更充足，但上游价格波动也值得提前锁价。"
        }
      ]
    },
    {
      "id": "in-game-etf",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "资本市场",
      "title": "游戏 ETF 连续 5 个交易日净流入，合计吸金 2.3 亿元",
      "summary": "截至 11 月 20 日，游戏 ETF 华夏（159869）连续 5 个交易日获资金净流入，单日最高 0.86 亿元，合计约 2.30 亿元。11 月 23 日早盘动漫游戏板块走强，北纬科技涨 6.86%、盛天网络涨 4.79%；消息面受网易三季度财报与短剧冲击讨论影响。资金在「政策利好+产品周期+AI 赋能」叙事下回补游戏板块，但成分股涨跌互现，说明预期的兑现仍分化。",
      "source": "每日经济新闻（网易转载）",
      "date": "2026-11-23",
      "url": "https://www.163.com/dy/article/LCDNLFUO0512B07B.html",
      "image": "",
      "badge": "资金动向",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "游戏ETF",
        "A股",
        "资金净流入",
        "板块"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "游戏 ETF 华夏连续 5 个交易日净流入，合计约 2.30 亿元",
            "11 月 23 日早盘北纬科技涨 6.86%、盛天网络涨 4.79%",
            "网易三季度游戏及相关增值服务净收入 229 亿元、同比下降 1.7%"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "板块资金回流不等于行业基本面上行，净流入更多是「政策+AI」叙事的定价修复。做发行和投放的人别被指数带着走，真正要看的是自己赛道的用户时长与付费转化有没有跟着回暖。"
        }
      ]
    },
    {
      "id": "in-yearend-newgames",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "新游排期",
      "title": "年末五款旗舰新游六周内扎堆开服，赛道覆盖二次元到生活模拟",
      "summary": "11 月中下旬至 12 月，《饥困荒野》《蓝色星原：旅谣》《星布谷地》《白银之城》《异人之下》五款重点新游在不到六周内接连开服，涵盖沙盒生存、幻想大世界、生活模拟、开放世界动作 RPG 与 3D 格斗。预约量从 1000 万到 4700 万不等，其中《白银之城》基于虚幻引擎 5 开发、《星布谷地》官宣 2027 年登陆 Switch 2。密集排期把年末变成新品试金石，同期撞车也意味着买量与内容质量的双重考验。",
      "source": "腾讯新闻",
      "date": "2026-11-18",
      "url": "https://news.qq.com/rain/a/20261118A0F3Q700",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-24-yearend.jpg",
      "badge": "新游潮",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 91,
      "tags": [
        "年末新游",
        "蓝色星原",
        "星布谷地",
        "白银之城",
        "异人之下"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "六周内五款重点新游开服，预约量从 1000 万到 4700 万不等",
            "《白银之城》基于虚幻引擎 5，《星布谷地》官宣 2027 年登陆 Switch 2",
            "题材覆盖沙盒生存、幻想大世界、生活模拟、开放世界动作与 3D 格斗"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "五款产品挤在同一窗口，本质是各家对「年末注意力红利」的集中押注。对中小团队，这不是跟着挤独木舟的理由，反而提示了一个空档：大作扎堆时，差异化题材与清晰卖点比堆量更容易被看见。"
        }
      ]
    },
    {
      "id": "in-hot-preview",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "版本动态",
      "title": "无畏契约手游新版本 11/26 上线，怪物猎人崛起 Netflix 版同日登陆移动端",
      "summary": "腾讯新闻热点预告显示，无畏契约手游新版本「新频共振」11 月 26 日上线，推出新特工、新地图与排位赛季更新；卡普空《怪物猎人：崛起》Netflix 版 11 月 24 日推出，订阅用户可在手机端体验本体与全部 DLC。同期《装备仔：OVERGEARED》11 月 25 日开服，《蕾斯莱莉娅娜的炼金工房》日服 11 月 25 日停运。新版本与订阅制并行，正在改写玩家获取 3A 内容的路径。",
      "source": "腾讯新闻",
      "date": "2026-11-23",
      "url": "https://news.qq.com/rain/a/20261123A07M5Q00",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-24-hotpreview.jpg",
      "badge": "版本预告",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "无畏契约手游",
        "怪物猎人崛起",
        "Netflix",
        "版本更新"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "无畏契约手游「新频共振」11 月 26 日上线，含新特工、新地图与排位更新",
            "《怪物猎人：崛起》Netflix 版 11 月 24 日登陆移动端，订阅用户可玩本体与全部 DLC",
            "《装备仔：OVERGEARED》11 月 25 日开服，炼金工房手游日服同日停运"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把成熟主机作品塞进订阅制、直接开放手机端，是在用内容库摊薄获客成本。对开发者而言，这意味着「移植到订阅平台」正变成一条独立于买断与内购之外的第三条发行路径，值得在立项期就纳入平台评估。"
        }
      ]
    },
    {
      "id": "in-layoffs",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业调查",
      "title": "2026 年游戏业裁员预测上调至 14259 人，确认人数已破 12800",
      "summary": "ASGC 裁员追踪 11 月 23 日更新，把 2026 年全球游戏业裁员预测上调至 14259 人，较 11 月 10 日的预测增加 39 人；已确认实际裁员从 12420 人升至 12809 人。今年已记录 175 起裁员事件，其中 65% 在北美、27% 集中在加州，前五大事件约占全部裁员的 43%。2022 至 2026 五年累计裁员预计达 58087 人。数据仍在攀升，行业集中度风险比单月数字更值得警惕。",
      "source": "ASGC Games Industry Layoffs Tracker",
      "date": "2026-11-23",
      "url": "https://layoffs.asgc.gg/",
      "image": "",
      "badge": "行业数据",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 87,
      "tags": [
        "游戏裁员",
        "行业报告",
        "ASGC",
        "就业"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "2026 年裁员预测上调至 14259 人，已确认实际裁员 12809 人",
            "今年记录 175 起裁员事件，65% 在北美、27% 在加州",
            "前五大裁员事件约占全部裁员的 43%，五年累计预计 58087 人"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「大厂大裁员」的叙事听多了容易麻木，但集中度数据说明风险正在向少数超大事件聚集。对求职中的应届生，判断一家工作室是否稳定，要比对它的现金流来源与项目管线，而不是只看招牌是否响亮。"
        }
      ]
    },
    {
      "id": "en-playcanvas224",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Web 引擎",
      "title": "PlayCanvas 2.24 发布：动态天空、平面反射与公开渲染通道 API",
      "summary": "PlayCanvas 11 月 9 日发布引擎 2.24，新增 DynamicSkyEffect，可绘制昼夜、星空、月亮与体积云，并让方向光与环境光照随太阳同步变化；StandardMaterial 加入平面反射输入，镜面、抛光地面与静水可用镜像相机渲染反射；帧通道 API 转为公开并新增 ComputePass。体积云和反射都有额外 GPU 开销，官方建议先在目标设备实测。把电影级光照塞进浏览器引擎，Web 项目的画面天花板又被抬高一层。",
      "source": "Cinevva（PlayCanvas Release Notes）",
      "date": "2026-11-13",
      "url": "https://app.cinevva.com/news/2026-11-13-playcanvas-2-24-dynamic-skies-reflections",
      "image": "https://app.cinevva.com/news/playcanvas-2-24-dynamic-sky.jpg",
      "badge": "引擎更新",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "PlayCanvas",
        "WebGPU",
        "动态天空",
        "平面反射"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "2.24 新增 DynamicSkyEffect，昼夜循环随太阳同步更新方向光与环境光照",
            "StandardMaterial 加入平面反射，帧通道 API 公开并新增 ComputePass",
            "体积云与反射有额外 GPU 成本，ComputePass 仅 WebGPU 可用"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "Web 引擎补齐动态天空与反射，意味着「浏览器里做写实 outdoor 场景」的成本又降了一截。真正要注意的是性能账：体积云和镜像相机都是帧率杀手，先定设备档位再决定开哪些效果，比堆功能更重要。"
        }
      ]
    },
    {
      "id": "en-unity62",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Unity 版本",
      "title": "Unity 6.2 深度解析：AI Assistant 登场，World Space UI 与 Sentis 升级",
      "summary": "Unity 6.2 把三项更新摆上台面：编辑器内 AI Assistant 面向创作效率，World Space UI 扩展 UI 能力边界，Sentis 运行时智能升级。配套变化包括 Web 平台预配置构建 Profile、Shader Graph 新增 Append 节点、Unity Test Framework 成为核心包，以及新增场景加载时强制 GC 的可关闭选项。Unity 6.2 也是最后一个完整支持 Magic Leap 的版本。一个点版本里三项战略级更新，说明 Unity 正把 AI 与 UI 能力当作下一阶段的主战场。",
      "source": "尧图网络（Unity 官方博客解读）",
      "date": "2026-11-20",
      "url": "http://www.mzlw.cn/news/30357",
      "image": "",
      "badge": "版本解读",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "Unity 6.2",
        "AI Assistant",
        "Sentis",
        "World Space UI"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "AI Assistant 登场，World Space UI 与 Sentis 三项战略级更新",
            "Web 平台新增预配置构建 Profile，Shader Graph 加入 Append 节点",
            "Unity Test Framework 成为核心包，6.2 是最后完整支持 Magic Leap 的版本"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把 AI Assistant 直接塞进编辑器，是「AI 辅助」从插件走向内置工作流的信号。对团队而言，值得关注的不是功能本身有多炫，而是内置后能否沉淀成可复用的项目规范——工具进菜单容易，进流程难。"
        }
      ]
    },
    {
      "id": "en-playcanvas-forum",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎发布",
      "title": "PlayCanvas 引擎 2.24 转正：二十余个新示例覆盖抗锯齿与高斯泼溅",
      "summary": "PlayCanvas 官方论坛宣布引擎 2.24 发布，随版本放出大量新示例：抗锯齿对比（SMAA 质量档与 TAA 时域升采样）、自动曝光、动态天空、墨线描边、镜头光晕、场景地图扫描脉冲（WebGPU）等；还包括汽车配置器、Villa Sales 高斯泼溅演示、火星 3D Tiles 与赫尔辛基 3D Tiles 流式加载。该版本计划 11 月 16 日前后升为编辑器默认版本。示例即文档，PlayCanvas 用一批可运行 demo 降低了新特性的上手门槛。",
      "source": "PlayCanvas 官方论坛",
      "date": "2026-11-20",
      "url": "https://forum.playcanvas.com/t/engine-v2-24-0/42778",
      "image": "",
      "badge": "引擎发布",
      "badgeType": "hot",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "PlayCanvas",
        "引擎示例",
        "WebGPU",
        "高斯泼溅"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "引擎 2.24 发布，计划 11 月 16 日前后升为编辑器默认版本",
            "新示例覆盖 SMAA/TAA 抗锯齿、自动曝光、动态天空、墨线描边与镜头光晕",
            "高斯泼溅、3D Tiles 流式加载与物理骨架示例同步放出"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "官方把每个新特性都配一个可运行示例，这种「示例即文档」的做法很值得中小引擎团队学。开发者评估新版本时，跑一遍示例比读发布说明更快判断「这功能到底能不能用在我项目里」。"
        }
      ]
    },
    {
      "id": "en-stride44",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "开源引擎",
      "title": "Stride 4.4 重构图形后端：Vulkan 与 DX12 上位，OpenGL 退场",
      "summary": "开源 C# 引擎 Stride（原 Xenko）4.4 版本于 10 月 9 日发布，维护者称是自上次更新以来约 3200 次提交的「多年最大更新之一」。图形后端方面，Vulkan 与 Direct3D 12 被大幅重构，OpenGL 与 OpenGL ES 被移除，团队透露下一大版本可能放弃 Direct3D 11。引擎用 SyncScript 把逻辑留在 C#、参数调优放在编辑器属性面板，形成编辑与运行分离的工作流。主动砍掉旧后端，是 Stride 为现代化渲染管线做的取舍。",
      "source": "UrhobA",
      "date": "2026-11-18",
      "url": "https://www.urhoba.net/zh/post/stride-xenko-c",
      "image": "https://www.urhoba.net/uploads/2026/11/what-is-stride-engine-04d4734e.webp",
      "badge": "引擎深读",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Stride",
        "C#引擎",
        "Vulkan",
        "DX12"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Stride 4.4 约 3200 次提交，Vulkan 与 DX12 后端大幅重构",
            "OpenGL 与 OpenGL ES 被移除，下一版本或放弃 Direct3D 11",
            "SyncScript 把 C# 逻辑与编辑器参数调优分离"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "敢砍掉 OpenGL 说明 Stride 把赌注压在现代图形 API 上。对用 C# 做 3D 的团队，这是一条值得观察的 Unity 之外的路线，但版本升级要盯紧它每三个月一次的破坏性改动节奏。"
        }
      ]
    },
    {
      "id": "en-bevy-ecs",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Rust 引擎",
      "title": "Bevy 逼近 5 万星：Rust ECS 引擎的插件化架构与破坏性升级节奏",
      "summary": "数据驱动 Rust 引擎 Bevy 的 GitHub 星数逼近 5 万。它用 ECS（实体-组件-系统）架构支持 2D/3D 开发，以 Plugin 为模块化单位，DefaultPlugins 打包常用功能、可按需替换。项目处于早期开发，约每三到五个月发一版且常带破坏性 API 变更：0.16（2025-04）、0.17（2025-09）、0.18（2026-01）、0.19（2026-06）、0.20（2026-10）。官方建议固定版本并把每次升级当计划任务，编辑器仍在开发中。星数高不等于稳定，Bevy 的升级成本要提前算进技术债。",
      "source": "UrhobA",
      "date": "2026-11-18",
      "url": "https://www.urhoba.net/zh/post/bevy-ecs-rust",
      "image": "https://www.urhoba.net/uploads/2026/11/what-is-bevy-engine-62223ea3.webp",
      "badge": "引擎深读",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Bevy",
        "Rust",
        "ECS",
        "版本节奏"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Bevy 星数逼近 5 万，采用 ECS 架构与 Plugin 模块化",
            "约每三到五个月发一版且常带破坏性 API 变更，0.20 于 2026-10 发布",
            "社区建议固定版本，官方编辑器截至 11 月仍在开发中"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "选 Bevy 等于接受「快速演进」的代价：ECS 的数据局部性优势很诱人，但每次破坏性升级都要预留迁移工时。个人学习门槛在 Rust 与 ECS 思维，团队采用则要把版本锁定写进工程规范。"
        }
      ]
    },
    {
      "id": "en-web-engine-guide",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "选型实战",
      "title": "Awesome-Gamedev 引擎专区盘点：三大商业引擎与 20+ 开源方案怎么选",
      "summary": "GitCode 博客对 Awesome-Gamedev 引擎专区做了梳理：Unity 资源丰富、跨平台尤其移动端强，但未开源且方案繁杂；Unreal 蓝图可视化编程强大、渲染顶级，适合追求 C++ 与高画质的团队；Godot 完全免费开源、编辑器仅几百 MB、2D 与轻量 3D 体验好，是独立开发者的甜点。专区还收录 Defold、MonoGame、Urho3D、GDevelop、SFML 等 20 多款开源引擎，并给出「定平台—定技能—定目标」三步定位法。选型口诀是按需求收敛，而不是纠结谁更强。",
      "source": "GitCode 博客（Awesome-Gamedev 引擎专区）",
      "date": "2026-11-14",
      "url": "https://blog.gitcode.com/f9eae8e389132641812a69a9f024e054.html",
      "image": "",
      "badge": "选型指南",
      "badgeType": "hot",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "引擎选型",
        "Awesome-Gamedev",
        "Godot",
        "Unreal",
        "开源引擎"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Unity 资源与跨平台强但未开源，Unreal 渲染与蓝图强、C++ 门槛高",
            "Godot 完全免费开源、轻量，适合独立开发者与 2D/轻量 3D",
            "专区收录 Defold/MonoGame/GDevelop 等 20+ 开源引擎，给出三步定位法"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把引擎选择拆成「定平台—定技能—定目标」三步，比空谈「哪个引擎最强」有用得多。对个人开发者，Godot 的零授权门槛与轻量编辑器确实降低了试错成本，但大型项目仍要看团队长期维护能力。"
        }
      ]
    },
    {
      "id": "ga-famine-launch",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游上线",
      "title": "《饥困荒野》今日全平台上线，把饥荒生存循环搬进手机",
      "summary": "Klei 正版授权、盛趣研发、腾讯发行的《饥困荒野》11 月 24 日全平台上线。游戏基于《饥荒：联机版》开发，保留随机生成世界、昼夜四季循环与哥特风美术，新增「家园」安全区，沙盒世界重置后角色与背包物品保留；提供轻松、标准、专家三种模式，并有手游独家赛季「绿洲之诗」。国内预约量突破 2500 万，商业化取消武器与宠物抽卡，改为兑换商店。经典 IP 的移动化落地，给「老玩法新平台」提供了一份完整样本。",
      "source": "18183 游戏网",
      "date": "2026-11-18",
      "url": "https://news.18183.com/yxxw/202611/9194158.html",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-24-hero-famine.jpg",
      "badge": "新游",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "饥困荒野",
        "饥荒",
        "生存手游",
        "腾讯"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11 月 24 日全平台上线，预约破 2500 万，基于《饥荒：联机版》开发",
            "保留随机世界与四季循环，新增「家园」安全区，角色背包跨局保留",
            "取消武器宠物抽卡，改兑换商店，道具只消耗沙盒材料"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把 PC 生存游戏做成手游，最难的是在触屏上保留「探索-收集-制作」的节奏感。取消抽卡、以材料兑换替代，说明团队把长线留存押在玩法循环而非数值付费上，这个取舍值得同类改编项目参考。"
        }
      ]
    },
    {
      "id": "ga-terminius",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "独立游戏",
      "title": "《Terminus: Day Zero》免费上线：不能战斗的僵尸生存叙事",
      "summary": "Longplay Studios 的《Terminus: Day Zero》11 月 24 日在 Steam 免费上线，仅支持 Windows。它是《Terminus: Zombie Survivors》世界观的短篇前传，讲述爆发第一天独自在家的女孩 Daisy 如何躲藏求生——她无法战斗，只能靠对家里的躲藏点、还关得上的门的熟悉度活下去，随后逃入满是陌生人的街区。没有战斗的僵尸题材把压力全押在潜行与叙事上，是独立游戏用小体量做体验差异的一次尝试。",
      "source": "Patchbeat",
      "date": "2026-11-24",
      "url": "https://patchbeat.net/news/terminus-day-zero-out-now-steam-free",
      "image": "https://patchbeat.net/og/news/terminus-day-zero-out-now-steam-free.jpg",
      "badge": "免费新游",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Terminus",
        "僵尸生存",
        "叙事游戏",
        "Steam"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11 月 24 日 Steam 免费上线，Windows 独占，为《Zombie Survivors》前传",
            "主角 Daisy 无法战斗，只能靠躲藏与熟悉环境求生",
            "以「一个女孩、一个街区」的叙事视角替代传统战斗生存"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "砍掉战斗系统反而给僵尸题材腾出了叙事空间：当玩家不能反击，紧张感来自观察与判断而非数值碾压。小团队做差异化，与其加系统，不如先想清楚要卖哪种体验。"
        }
      ]
    },
    {
      "id": "ga-noasteroids",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "独立游戏",
      "title": "《No Asteroids》11/24 上线：挖小行星拯救地球的多人协作玩法",
      "summary": "Unruled Games 开发发行的休闲模拟兼第一人称挖矿游戏《No Asteroids》11 月 24 日登陆 Steam PC。玩家面对一颗 500 万立方米的巨大小行星，需要在 90 天内把它挖空——从十字镐起步，卖矿石升级工具与武器，最终用黑洞加速进度。游戏支持最多 8 人在线协作挖同一颗小行星，共享钱包、由房主分配支出，离开飞船的人会丢失货物。把「倒计时+共享进度」做成多人协作核心，是轻度玩法里少见的强社交设计。",
      "source": "MadInfinite",
      "date": "2026-11-24",
      "url": "https://www.madinfinite.com/news/you-have-90-days-to-act-while-mining-an-asteroid-to-defend-earth-in-no-asteroids",
      "image": "",
      "badge": "独立新游",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "No Asteroids",
        "多人协作",
        "挖矿",
        "Steam"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11 月 24 日登陆 Steam，玩家需在 90 天内挖空 500 万立方米小行星",
            "从十字镐起步，卖矿石升级工具，最高可用黑洞加速",
            "支持最多 8 人在线共享钱包协作，未登船者会丢失货物"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「共享进度+有限时间」压进同一个目标，天然催生分工与争执，这正是一座低成本高互动的社交玩法骨架。独立游戏想做多人，先设计一个能让玩家有理由互相算计的目标，比堆模式有效。"
        }
      ]
    },
    {
      "id": "ga-50days",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游排期",
      "title": "50 天五款大作排队：绝区零前瞻打头，二次元赛道迎最凶险大决战",
      "summary": "腾讯新闻梳理 11 月至 12 月新游排期：绝区零 3.4 版本前瞻直播率先开启，蛮啾《蓝色星原：旅谣》11 月 26 日公测、全球预约超 2500 万且五端互通；鹰角《明日方舟：终末地》2.0 前瞻、米哈游《崩坏：因缘精灵》幸福测试穿插其间；12 月 4 日《星布谷地》、12 月 14 日《白银之城》接连公测，腾讯魔方《异人之下》12 月上线、预约破 4700 万。GameLook 称这轮为「二次元游戏史上最凶险大决战」。密集排期背后，是各家对同一批用户时长的贴身争夺。",
      "source": "腾讯新闻",
      "date": "2026-11-20",
      "url": "https://news.qq.com/rain/a/20261120A0CWEL00",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-24-50days.jpg",
      "badge": "新游潮",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "绝区零",
        "蓝色星原",
        "终末地",
        "异人之下",
        "排期"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "绝区零 3.4 前瞻打头，蓝色星原旅谣 11 月 26 日公测、预约超 2500 万",
            "终末地 2.0 前瞻与崩坏因缘精灵测试穿插，12 月星布谷地、白银之城接连公测",
            "异人之下 12 月上线、预约破 4700 万，GameLook 称最凶险二次元大决战"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "同一批用户在 50 天内被五款大作争抢，结果是福利战与口碑战同时开打。对开发者，这提示了「错峰」的价值：当头部产品扎堆，与其硬碰硬，不如把上线窗口挪到注意力真空期。"
        }
      ]
    },
    {
      "id": "ga-steamrec",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "Steam 新作",
      "title": "Steam 11/23-11/29 上架推荐：增量、恐怖与模拟经营百花齐放",
      "summary": "Steam 11 月 23 至 29 日上架新作中，11 月 24 日上线的包括休闲增量游戏《A Thousand Clowns》（操控烤面包机在异星采集）、PSX 风格心理恐怖《Late Night Duty》、手绘解谜《逃离宝宝警报》、增量 RTS《Incremental RTS》与恐龙动物园经营《侏罗纪建筑师》。其中多款支持中文，题材从育儿模拟到多人酒馆经营，独立小品的创意密度很高。看这批新品能直观感受到：小团队正用题材细分而非画面堆料找突破口。",
      "source": "腾讯新闻",
      "date": "2026-11-23",
      "url": "https://news.qq.com/rain/a/20261123A03Y6400",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-24-steamrec.jpg",
      "badge": "Steam 上新",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "Steam",
        "独立游戏",
        "新作推荐",
        "增量游戏"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11 月 24 日上线《A Thousand Clowns》《Late Night Duty》《Incremental RTS》等多款",
            "《逃离宝宝警报》《侏罗纪建筑师》等支持中文，题材覆盖解谜与模拟经营",
            "多款作品用独特题材（烤面包机、育儿、恐龙动物园）做差异化"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "一周新游列表是观察独立游戏创意风向的好窗口。这批作品几乎不拼画面，而是靠一个清晰的「如果……会怎样」设定立住玩法，这种低成本高概念的思路正是小团队最该学的。"
        }
      ]
    },
    {
      "id": "ga-famine-business",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "商业化观察",
      "title": "饥荒手游取消抽卡的样本：从数值付费转向外观与赛季",
      "summary": "《饥困荒野》的商业化设计成为年末新游讨论焦点：游戏取消武器与宠物抽卡，原卡池改为兑换商店，道具只消耗沙盒材料，玩家通过日常活跃即可免费兑换；突破养成仅消耗沙盒基础材料，付费重心转向外观等非战力内容。同时推出手游独家赛季「绿洲之诗」与多种联动内容维系长线活跃。这套「去战力付费」结构在头部发行产品里并不多见，等于把口碑与留存放在短期付费之前。",
      "source": "18183 游戏网",
      "date": "2026-11-18",
      "url": "https://news.18183.com/yxxw/202611/9197180.html",
      "image": "",
      "badge": "商业化",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "饥困荒野",
        "去抽卡",
        "商业化",
        "赛季制"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "取消武器与宠物抽卡，卡池改兑换商店，道具只消耗沙盒材料",
            "突破养成仅消耗基础材料，付费重心转向外观等非战力内容",
            "以手游独家赛季「绿洲之诗」与联动内容维系长线活跃"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「去战力付费」在大厂产品里是稀有选择，因为它要求用内容更新而非数值膨胀来撑留存。这条路能不能走通，要看赛季内容产能是否跟得上；但对被抽卡疲劳困扰的玩家，至少提供了一个不同的选项。"
        }
      ]
    },
    {
      "id": "os-raea",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "渲染引擎",
      "title": "raea：用 React 和 TypeScript 描述视频与 3D，在本地 GPU 上渲染",
      "summary": "GitHub 项目 shinyobjectz/raea 是一个「渲染一切」引擎：开发者用 React 与 TypeScript 编写视频、动态图形、3D 场景（基于 Bevy）和游戏，由 Rust 引擎在本地 GPU 与硬件编码器上渲染。它提供 raea CLI 与桌面应用，让 Claude 等智能体写合成、渲染帧、检查输出并迭代；`raea check` 可自动识别文字裁切、低对比度、卡顿与音量问题。项目采用 FSL-1.1-ALv2 许可，非 OSI 开源，近一周增长数百星。把「描述式创作+本地渲染+自动质检」打通，是 AI 生成内容工具链的新形态。",
      "source": "GitHub: shinyobjectz/raea",
      "date": "2026-11-22",
      "url": "https://github.com/shinyobjectz/raea",
      "image": "https://opengraph.githubassets.com/1/shinyobjectz/raea",
      "badge": "开源引擎",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "raea",
        "React",
        "Bevy",
        "AI渲染",
        "TypeScript"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "用 React/TS 编写视频、动态图形、3D 与游戏，Rust+Bevy 本地 GPU 渲染",
            "提供 CLI 与桌面应用，智能体可写合成、渲染帧、检查并迭代",
            "raea check 自动检测文字裁切、低对比度、卡顿与音量问题；FSL-1.1 许可非 OSI 开源"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「生成」和「质检」塞进同一条本地管线，是这类工具最有价值的地方：AI 生成内容的瓶颈早就不是生成速度，而是能不能稳定验收。商用前记得核对 FSL 许可条款，别把非 OSI 开源当成 Apache 用。"
        }
      ]
    },
    {
      "id": "os-ohmygame",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "AI 游戏开发",
      "title": "OhMyGame：一个人也能开游戏工作室的桌面智能体应用",
      "summary": "GitHub 项目 WhiteTowerAI/ohmygame 是一个 Electron 桌面应用（TypeScript），让 AI 智能体在设计文档、图片、视频、3D 模型与音频的画布上工作：智能体编写 Three.js、React Three Fiber 或 Phaser 网页游戏，在实时预览中试玩并自动重试修复，最后发布可分享链接。它支持 40 多家模型供应商自带密钥，也可接入 Claude Code、Codex、OpenCode；提供 Godot、Unity、Unreal、Blender 等插件，项目文件是普通 Markdown/JSON。beta 阶段、仅 macOS Apple Silicon 与 Windows x64 有安装包。把设计到试玩闭环在一个画布里，是「一人工作室」工具链的激进实验。",
      "source": "GitHub: WhiteTowerAI/ohmygame",
      "date": "2026-11-20",
      "url": "https://github.com/WhiteTowerAI/ohmygame",
      "image": "https://opengraph.githubassets.com/1/WhiteTowerAI/ohmygame",
      "badge": "开源工具",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "OhMyGame",
        "AI智能体",
        "网页游戏",
        "一人开发"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Electron 桌面应用，智能体在设计画布上编写网页游戏并实时试玩修复",
            "支持 40+ 模型供应商自带密钥，提供 Godot/Unity/Unreal/Blender 等插件",
            "项目文件是普通 Markdown/JSON，beta 阶段仅部分平台有安装包"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「智能体自己试玩、自己修」是这套工具最值得关注的能力：生成代码不难，难的是闭环验证。项目还早、安装包也挑平台，但一人工作室的技术形态已经能窥见轮廓了。"
        }
      ]
    },
    {
      "id": "os-solidcraft",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "参数化建模",
      "title": "SolidCraft：纯 Rust 参数化 3D CAD，桌面/浏览器/MCP 三端可用",
      "summary": "GitHub 项目 tangency-labs/solidcraft 是纯 Rust 编写的参数化 3D CAD，星数约 1.6 万、Apache-2.0 许可。它支持在特征时间轴上草图、约束并构建实体，改一个尺寸即可重建模型；同一引擎运行在 Windows、macOS、Linux 与浏览器端，并内置 MCP 服务器让 AI 智能体通过自然语言驱动建模，支持 STEP 导出与 WebAssembly 插件（仅显式请求时加载）。对游戏开发者，它是做程序化资产与硬表面原型的轻量选择；参数化+智能体驱动，正在把 CAD 从手工工具变成可编程管线。",
      "source": "GitHub: tangency-labs/solidcraft",
      "date": "2026-11-15",
      "url": "https://github.com/tangency-labs/solidcraft",
      "image": "https://opengraph.githubassets.com/1/tangency-labs/solidcraft",
      "badge": "开源工具",
      "badgeType": "hot",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "SolidCraft",
        "参数化CAD",
        "Rust",
        "MCP",
        "程序化资产"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "纯 Rust 参数化 3D CAD，约 1.6 万星，Apache-2.0 许可",
            "桌面与浏览器同引擎，内置 MCP 服务器让智能体驱动建模",
            "支持 STEP 导出与按需加载的 WebAssembly 插件"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "参数化建模的价值在于「改一个参数、整模型重建」，这和游戏里的程序化资产生成天然契合。MCP 接口让 AI 能直接操刀建模，未来做道具、关卡结构的技术美术工作流可能被重新定义。"
        }
      ]
    },
    {
      "id": "os-artcraft",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "AI 创作 IDE",
      "title": "ArtCraft：在 2D 构图、3D 布景里调用多模型的 AI 创作桌面 IDE",
      "summary": "GitHub 项目 storytold/artcraft 是 Rust 编写的桌面 IDE，面向交互式 AI 图像与视频创作：用户在 2D 中构图、在 3D 中布景，再从数十个 AI 模型里挑一个生成最终结果，覆盖去背景、inpainting、GPT-Image 等 filmmaking 场景。项目星数约 4 万，是 3D 类目里增长较快的一个。把「场景编排」放在模型调用之前，说明 AI 创作工具正从「抽卡式出图」转向可控的生产管线。",
      "source": "GitHub: storytold/artcraft",
      "date": "2026-11-21",
      "url": "https://github.com/storytold/artcraft",
      "image": "",
      "badge": "开源工具",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "ArtCraft",
        "AI创作",
        "Rust",
        "视频生成",
        "3D布景"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Rust 桌面 IDE，2D 构图 + 3D 布景，再调用多种 AI 模型生成",
            "覆盖去背景、inpainting、GPT-Image 等影视创作场景",
            "GitHub 约 4 万星，3D 类目增长较快"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "先编排场景、再调用模型，这种顺序把 AI 从「随机灵感机」变成可控的生产环节。对做游戏美术管线的团队，这类工具的思路比具体功能更值得借鉴：把不确定性锁在最小的生成步骤里。"
        }
      ]
    },
    {
      "id": "os-droiddeck",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "移动端工具",
      "title": "DroidDeck：把 SteamOS 大屏体验搬到骁龙安卓掌机",
      "summary": "GitHub 项目 Droid-Deck/DroidDeck 让安卓设备获得 SteamOS 大屏体验，可在搭载高通 Adreno GPU 的手机或掌机上，通过 ARM64 Proton 运行 Steam 客户端与 Windows 游戏。开源免费、纯本地运行，旧骁龙 8 手机即可尝试；局限是仅支持 Adreno 机型，天玑、Exynos 暂不支持，重度 3A 受转译损耗影响、部分游戏文字偏小可切「电视模式」。把现成手机变成掌机，开源社区用软件补齐了硬件的最后一公里。",
      "source": "GitHub: Droid-Deck/DroidDeck",
      "date": "2026-11-20",
      "url": "https://github.com/Droid-Deck/DroidDeck",
      "image": "https://opengraph.githubassets.com/1/Droid-Deck/DroidDeck",
      "badge": "开源工具",
      "badgeType": "hot",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "DroidDeck",
        "SteamOS",
        "安卓掌机",
        "Proton",
        "模拟器"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "在骁龙 Adreno 安卓设备上通过 ARM64 Proton 运行 Steam 与 Windows 游戏",
            "开源免费、纯本地运行，旧骁龙 8 手机即可尝试",
            "仅支持 Adreno 机型，重度 3A 受转译损耗，部分文字偏小"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把闲置手机变成掌机，是转译与兼容层技术的平民化落地。对游戏开发者，别忘了这类设备正在扩大「类 Steam 环境」的覆盖范围——你的输入映射、手柄适配与低分辨率 UI，未来会被更多非 PC 设备检验。"
        }
      ]
    },
    {
      "id": "os-playcanvas-engine",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "Web 引擎",
      "title": "PlayCanvas Engine：MIT 许可的 WebGL/WebGPU 3D 引擎持续更新",
      "summary": "PlayCanvas 引擎（github.com/playcanvas/engine）是 MIT 许可的开源 Web 3D 引擎，基于 WebGL2 与 WebGPU，星数约 1.7 万，最新稳定版 2.24.1。它支持计算着色器、3D 高斯泼溅的编辑与渲染，可用可视化编辑器、npm、React 或 Web Components 多种方式开发；配合 create-playcanvas 可快速搭建项目。2.24 版本新增动态天空与平面反射，编辑器默认版本同步跟进。想做浏览器 3D 又不想被托管平台绑定，PlayCanvas 引擎提供了可自托管的完整底座。",
      "source": "GitHub: playcanvas/engine",
      "date": "2026-11-12",
      "url": "https://github.com/playcanvas/engine",
      "image": "https://repository-images.githubusercontent.com/19696006/f792c200-9ae5-11ea-8193-af24596ab0c7",
      "badge": "开源引擎",
      "badgeType": "hot",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "PlayCanvas",
        "WebGL",
        "WebGPU",
        "开源引擎",
        "高斯泼溅"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "MIT 许可 Web 3D 引擎，基于 WebGL2/WebGPU，约 1.7 万星",
            "支持计算着色器与高斯泼溅，提供编辑器/npm/React/Web Components 工作流",
            "最新稳定版 2.24.1，2.24 新增动态天空与平面反射"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "MIT 许可加上可自托管，让 PlayCanvas 成为「既想要引擎完整度、又不愿被平台锁死」时的现实选择。评估时重点看 WebGPU 特性的实际覆盖——很多新能力在 WebGL 后端会静默失效。"
        }
      ]
    },
    {
      "id": "tu-godot-compute",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "着色器实战",
      "title": "Godot 4 计算着色器实战：先常规 Shader 做 80%，再补性能缺口",
      "summary": "独游魔盒的 Godot 关键技术笔记指出，Compute Shader 在 Godot 4 里最适合大规模粒子模拟与屏幕后处理（动态模糊、景深、体积光），但别当银弹：GPU 并行顺序不可预测，粒子相互碰撞要用共享显存，冲突处理会吃掉大半性能收益。作者建议先用 CanvasItem/Particles 常规 Shader 完成 80% 效果，只对绕不开的 20% 性能缺口上 Compute；入门方式是写小规模测试、用计算缓冲模拟几十个粒子，再对照 Profiler 的 CPU/GPU 耗时找拐点。判断该不该上 Compute，靠的是 Profiler 数据不是直觉。",
      "source": "独游魔盒",
      "date": "2026-11-19",
      "url": "https://xmohe.com/techie/special/godot-key-tech/06-from-basics-to-compute",
      "image": "",
      "badge": "技术笔记",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Godot",
        "Compute Shader",
        "粒子",
        "性能优化"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Compute Shader 适合大规模粒子与屏幕后处理，但共享显存冲突会吃掉性能收益",
            "建议先用常规 Shader 做 80% 效果，只对 20% 缺口用 Compute",
            "入门 Write 小规模测试，用 Profiler 对比 CPU/GPU 耗时找拐点"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「别把 Compute 当银弹」这句提醒很实在：并行化的门槛不在语法，而在能否看出一张图可以并行拆解。先用数据证明瓶颈，再决定是否上重武器，是性能优化的基本纪律。"
        }
      ]
    },
    {
      "id": "tu-godot-perf",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "性能与发布",
      "title": "Godot 4.7.2 性能实战：看 gpu_ms/cpu_ms 而非窗口帧率",
      "summary": "GitCode 博客逐条解读一份 Godot 4.7.2 性能优化笔记：判断性能要看 gpu_ms 与 cpu_ms，而不是窗口里的帧率数字；Export With Debug 不会让游戏变慢，可直接用于设备测量；Performance Advisor 适合放进 CI 并为场景打 region marker；短测试看不到降频，要看温度曲线。笔记指出 4.7.2 没有热状态 API，替代方案是长时日志；陈旧构建缓存叠加 API 改名会造成追了几周的「幽灵性能 bug」，每次报告都该从干净构建开始。把测量方法做对，比盲目调参数有用得多。",
      "source": "GitCode 博客",
      "date": "2026-11-19",
      "url": "https://blog.gitcode.com/c26a59e384ca094f37a740ef63b81519.html",
      "image": "",
      "badge": "专家笔记",
      "badgeType": "hot",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "Godot",
        "性能优化",
        "Profiler",
        "CI",
        "干净构建"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "判断性能看 gpu_ms/cpu_ms 而非窗口帧率，Export With Debug 可直接测量",
            "Performance Advisor 适合进 CI，短测试看不到降频需看温度曲线",
            "陈旧构建缓存会造成难查的幽灵 bug，每次报告从干净构建开始"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "性能调优最常见的坑不是不会优化，而是测得不准。这份笔记把「干净构建+分场景标记+长时温度曲线」变成可复用的流程，比单点技巧更能救命。"
        }
      ]
    },
    {
      "id": "tu-gdscript",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "GDScript 进阶",
      "title": "GDScript 高效开发：把节点查找从 _process 里挪出去",
      "summary": "一篇 GDScript 开发指南强调几类高频性能坑：_process 与 _physics_process 每秒执行 60 次以上，里面做 find_node 或长路径 $ 查询会拖慢帧率，应在 _ready 中用 @onready 缓存引用；循环里频繁创建 Vector2、Array、Dictionary 应复用或在循环外声明；用get_tree().get_nodes_in_group 前先想清楚频率。监控重点包括帧时间（60FPS 下每帧低于 16.6ms）、物理处理时间、脚本函数耗时与对象计数。热点定位要顺着 Profiler 的调用树走，而不是猜哪个函数慢。",
      "source": "编程知识（hqwc）",
      "date": "2026-11-18",
      "url": "http://www.hqwc.cn/news/854575.html",
      "image": "",
      "badge": "实战教程",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "GDScript",
        "Godot",
        "性能优化",
        "Profiler",
        "对象池"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "_process 里避免 find_node 与长路径查询，用 @onready 缓存引用",
            "循环里复用对象而非重复创建，字符串与数组尽量预声明",
            "监控帧时间 16.6ms、物理处理、脚本耗时与对象计数"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这些规则单看都很基础，真正拉开差距的是把它们变成编码习惯。GDScript 的动态特性让「每帧查节点」这类坑极易发生，团队用代码审查把 @onready 缓存固化下来，比事后 Profile 追热点省事。"
        }
      ]
    },
    {
      "id": "tu-gdquest",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "架构设计",
      "title": "GDQuest 设计模式教程：把经典模式搬进 Godot 的工程实践",
      "summary": "GDQuest 的 Godot 设计模式教程把游戏开发常见的架构问题整理成可落地的模式集合，配合其交互式 GDScript 课程，帮开发者从「能跑通」走向「好维护」。教程强调信号解耦、单一职责节点、用 Resource 承载数据、谨慎使用 Autoload，以及缓存节点引用、对象池复用、静态类型等性能实践。对从脚本堆砌转向工程化的人来说，设计模式不是教条，而是让场景可复用、改动可控的工具。把模式与引擎特性结合讲，比空谈 UML 更实用。",
      "source": "GDQuest",
      "date": "2026-11-16",
      "url": "https://www.gdquest.com/tutorial/godot/design-patterns/intro-to-design-patterns/",
      "image": "https://www.gdquest.com/img/social-banner.png",
      "badge": "系统教程",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "GDQuest",
        "设计模式",
        "Godot",
        "架构",
        "GDScript"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "把信号解耦、单一职责节点、Resource 数据与谨慎 Autoload 讲成工程实践",
            "性能侧强调缓存引用、对象池与静态类型",
            "配合交互式 GDScript 课程，从能跑通走向好维护"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "设计模式最怕变成背概念。GDQuest 的价值在于把每个模式都扣回 Godot 的节点与信号机制，让「为什么这样写」有引擎层面的答案——这才是从脚本爱好者到工程师的分水岭。"
        }
      ]
    },
    {
      "id": "tu-dantes3d",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "学习路线",
      "title": "3D 游戏开发学习资源清单：从 Polycount 到 LearnOpenGL 的十年路径",
      "summary": "Project Monte Cristo 整理的 3D 游戏开发资源清单，按初级到进阶列出十项免费/付费材料：Polycount 看美术批评标准，Godot 官方文档做分步项目，Unreal Engine Learn 提供蓝图与 Nanite/Lumen 参考，Unity Learn 用项目制路径教 C# 脚本；进阶有 LearnOpenGL（从建窗口、写着色器到 PBR 与延迟渲染）、Game Programming Patterns（游戏循环等架构模式）与《Game Engine Architecture》。清单按「学会什么」而非「有多少资源」编排，对自学路线很有参考价值。",
      "source": "Project Monte Cristo",
      "date": "2026-11-20",
      "url": "https://dantes.io/subject/3d-game-development",
      "image": "https://dantes.io/subject/3d-game-development/opengraph-image",
      "badge": "学习路线",
      "badgeType": "hot",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "学习资源",
        "LearnOpenGL",
        "游戏编程模式",
        "引擎架构",
        "自学路线"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "初级：Polycount 看美术标准，Godot/Unreal/Unity 官方文档做分步项目",
            "进阶：LearnOpenGL 从着色器到 PBR，Game Programming Patterns 讲架构模式",
            "延伸：《Game Engine Architecture》系统梳理商业引擎子系统"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "好清单的价值在于取舍：它没堆几百个链接，而是按「先做什么、再学什么」排了顺序。自学者最容易犯的错就是收藏成瘾，照这条路径挑两三个资源吃透，比囤一百个收藏夹有用。"
        }
      ]
    },
    {
      "id": "tu-gamepatterns",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "架构经典",
      "title": "《游戏编程模式》在线版：把更新、状态与对象池讲成可复用的解法",
      "summary": "Robert Nystrom 的《游戏编程模式》在线版把游戏代码里的常见结构整理成模式：游戏循环、更新方法、组件、命令、观察者、状态、对象池、空间分区与数据局部性等。每一项既讲「解决什么问题」也讲「什么时候别用」，例如对象池在频繁创建销毁对象时 reduces GC 抖动，但对生命周期长的对象反而是负担。这本书免费在线可读，是连接「会写脚本」与「写得可维护」的经典桥梁。模式不是越多越好，理解适用边界才是重点。",
      "source": "Game Programming Patterns",
      "date": "2026-11-15",
      "url": "https://gameprogrammingpatterns.com/contents.html",
      "image": "",
      "badge": "经典读物",
      "badgeType": "hot",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "游戏编程模式",
        "架构",
        "对象池",
        "状态机",
        "数据局部性"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "覆盖游戏循环、更新方法、组件、命令、观察者、状态、对象池等模式",
            "每一项同时讲清适用场景与不适用边界",
            "免费在线可读，连接脚本编写与可维护架构"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这本书最难得的不是列模式，而是反复提醒「什么时候别用」。架构的核心是取舍——把状态机用在合适的地方能省掉大量 if-else，滥用则让简单逻辑变得绕。"
        }
      ]
    },
    {
      "id": "ai-anthropic-ipo",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI 资本",
      "title": "Anthropic IPO 收官：合计募资约 1195 亿美元，刷新全球最大 IPO 纪录",
      "summary": "Anthropic 宣布完成 IPO，以每股 83 美元发行 11.27 亿股 A 类普通股（含承销商全额行使额外 1.47 亿股期权），募资总额约 935 亿美元；同期向 AMD、博通、谷歌、美光、微软、英伟达、台积电等定向增发 3.13 亿股 N 类股，约 260 亿美元，合计毛募资约 1195 亿美元。A 类股 11 月 19 日以代码 ANT 在纳斯达克开始交易。这是全球规模最大的 IPO 之一，也把 AI 实验室的资本化推向新量级。",
      "source": "Anthropic 官方公告",
      "date": "2026-11-21",
      "url": "https://www.anthropic.com/news/ipo-close",
      "image": "https://assets.claude.com/6d4a0d28992ade92d6fa63646fd9c9d318245c6c.jpg",
      "badge": "AI 资本",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 94,
      "tags": [
        "Anthropic",
        "IPO",
        "Claude",
        "AI产业",
        "融资"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "以每股 83 美元发行 11.27 亿股，公开募资约 935 亿美元",
            "向 AMD、谷歌、英伟达、台积电等定向增发约 260 亿美元 N 类股",
            "合计毛募资约 1195 亿美元，A 类股 11 月 19 日以 ANT 在纳斯达克交易"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "史上最大 IPO 之一落在 AI 实验室，说明资本对基础模型的定价还没降温。对开发者，这意味着上游模型的研发投入短期不会缺钱，工具链与 API 供给会更丰富；但要留意资本回报压力最终会怎么传导到定价策略。"
        }
      ]
    },
    {
      "id": "ai-gemini-decision",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI 模型",
      "title": "谷歌发布 Gemini Decision 1：不生成文字，只给候选项打分",
      "summary": "谷歌 11 月 11 日发布首个决策模型 Gemini Decision 1 与 Decisions API：模型不生成文本，而是对预设候选项返回概率与置信度，单次请求最多评估 1000 个独立问题，支持文本、图像、音频、视频与 PDF 混合输入，16K token 内端到端延迟 150-250ms，且问题数从 1 增至 100 延迟几乎不变。它提供 Yes/No（noul）、Choice（2-255 选项）与 Score（打分）三类问题，官方称 JevBench 得分 92.2%、价格约为 Gemini 3.5 Flash-Lite 的五分之一。目前通过 Gemini API 在 AI Studio 提供（v1beta）。把「判断」从「生成」里拆出来单做模型，是推理分层的新方向。",
      "source": "LLMs Blog（Google DeepMind 公告解读）",
      "date": "2026-11-20",
      "url": "https://www.llms.blog/posts/gemini-decisions-api",
      "image": "https://cms.llms.blog/content/images/2026/11/gemini-decisions-api-cover-mwcwzjqu.png",
      "badge": "AI 模型",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Gemini Decision",
        "决策模型",
        "API",
        "工具路由",
        "多模态"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "决策模型只返回概率与置信度，单次最多评估 1000 个问题",
            "支持多模态输入，16K 内延迟 150-250ms，问题数增加几乎不影响延迟",
            "提供 noul/Choice/Score 三类问题，通过 Gemini API 在 AI Studio 提供"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「判断」从大模型生成里拆出来单做，对做智能体的团队很实用：工具选择、策略检查、模型路由这类封闭决策，用专用模型比让生成模型吐 JSON 更快更省。值得注意的是它还在 v1beta，接口细节可能变。"
        }
      ]
    },
    {
      "id": "ai-inkling2",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "开源模型",
      "title": "Thinking Machines 开源 Inkling 2 Mini：26.4B 参数，32GB 内存笔记本可离线跑",
      "summary": "Thinking Machines Lab 11 月 20 日发布开放权重多模态模型 Inkling 2 Mini，Apache-2.0 许可，支持文本与图像输入、文本输出。模型总参数 26.4B、每 token 激活 3.4B（循环层重复三次使有效计算约 5.4B），24 层 decoder-only 架构、128 专家路由 8 个，检查点约 20GB，可在 32GB 内存的 Mac 或 DGX Spark 上本地运行，支持 vLLM、llama.cpp、Ollama 等框架。官方自报 SWE-bench Verified 79.2%，但承认长对话会退化、调试时可能陷入重复循环。本地可跑的多模态模型给了隐私敏感场景一个新选项，但别把厂商自评当独立结论。",
      "source": "New Runtime",
      "date": "2026-11-21",
      "url": "https://newruntime.com/posts/thinking-machines-releases-inkling-2-mini-open-weights-34eb4b",
      "image": "https://newruntime.com/og/field-notes.png",
      "badge": "开源模型",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "Inkling 2 Mini",
        "开源模型",
        "本地推理",
        "多模态",
        "Apache-2.0"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "26.4B 总参/3.4B 激活，循环层设计以小体积换更多计算",
            "约 20GB 检查点，32GB 内存可本地跑，Apache-2.0 许可",
            "官方自报 SWE-bench Verified 79.2%，但长对话退化与重复循环是已知短板"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「笔记本能离线跑的多模态模型」对不想把代码上传云端的团队很有吸引力。不过厂商跑分要打折看，官方自己都写了调试时会陷入循环——上线前务必用自己的任务集压测，并给智能体套上输出与轮次限制。"
        }
      ]
    },
    {
      "id": "ai-hy4",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "开源模型",
      "title": "腾讯混元 Hy4 开源：770B MoE、百万上下文，许可证需仔细核对",
      "summary": "腾讯 11 月 20 日开放混元旗舰 Hy4 权重，采用 MoE 架构、总参 770B、每 token 激活 49B，上下文 100 万 token，原生支持文本、图像与视频输入，同步放出指令版、FP8 量化版与 base 版，并提供 GGUF 与 vLLM、SGLang 镜像。官方自评办公与金融基准居开源前列，但与非正式测试存在口径差异；许可证是 Tencent Hy License 1.0（派生自 Apache 2.0），全球年营收超 5000 万美元或月活超 1 亿的 MaaS 场景需单独书面授权。多家媒体误写为 Apache 2.0，商用前务必核对 LICENSE 原文。",
      "source": "GitHub: Tencent-Hunyuan/Hy4",
      "date": "2026-11-20",
      "url": "https://github.com/Tencent-Hunyuan/Hy4",
      "image": "https://opengraph.githubassets.com/1/Tencent-Hunyuan/Hy4",
      "badge": "开源模型",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 91,
      "tags": [
        "混元 Hy4",
        "开源大模型",
        "MoE",
        "许可证",
        "腾讯云"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "770B 总参/49B 激活、百万上下文，原生多模态，四平台可下载",
            "提供指令版、FP8 与 base 版，附 GGUF 与 vLLM/SGLang 镜像",
            "许可证为 Tencent Hy License 1.0，MaaS 场景触发营收/月活门槛需书面授权"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「是不是真 Apache 2.0」这件事，值得每个打算商用的团队打开 LICENSE 逐字读。厂商自评跑分与媒体转述常常打架，开源的意义不只是权重可下载，更包括许可边界清晰——这条如果含糊，再强的模型也得先放一放。"
        }
      ]
    },
    {
      "id": "ai-hy4-ama",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "模型动态",
      "title": "混元团队 Reddit AMA：Hy4-mini 在路上，图像视频小模型也在规划中",
      "summary": "腾讯混元团队 11 月 21 日在 Reddit 举行两小时 AMA，收到 300 多条留言。团队确认 Hy4-mini 已在路线图，正考虑 24-31B 稠密模型，并预告面向客服、文档解析与简单自动化的前沿 Flash-Lite 模型（如 35B-A3B）；图像模型将考虑 5-12B 本地版本，视频模型「也在路上」。架构上 Hy4 flash 以 iHC、门控 MLA 和 DSA 为基础，新增混合 SWA、LatentMoE 与 Engram。官方称 Hy4 在后训练与大规模强化学习上仍有提升空间，下一代规模将显著扩大。路线图信息属官方预告，落地版本与时间表尚未敲定。",
      "source": "覆手为雨（AI 早报）",
      "date": "2026-11-22",
      "url": "https://www.lininn.cn/page/ai-daily-2026-11-22-morning",
      "image": "",
      "badge": "模型动态",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "混元",
        "AMA",
        "Hy4-mini",
        "路线图",
        "小模型"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "团队确认 Hy4-mini 在路线图，考虑 24-31B 稠密模型",
            "预告 35B-A3B 级 Flash-Lite，图像考虑 5-12B 本地版，视频模型在路上",
            "Hy4 flash 架构新增混合 SWA、LatentMoE 与 Engram"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "从旗舰开源到本地小模型的路线图，反映大模型厂商正在往「端侧可部署」铺路。对做游戏内 AI 的团队，小模型的意义在于能塞进客户端或本地服务器——但这些都是官方预告，等真放权重再排期不迟。"
        }
      ]
    },
    {
      "id": "ai-openweights-trend",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "行业观察",
      "title": "开放权重模型密集发布：本地推理正在成为一条独立路线",
      "summary": "11 月下旬，Thinking Machines 的 Inkling 2 Mini（26B、Apache-2.0）、腾讯混元 Hy4（770B MoE）等开放权重模型密集发布，加上此前多家厂商跟进，本地与自托管推理的选项显著增加。这些模型的共同点是给出明确硬件目标（如 20GB 检查点、32GB 内存）和多家推理框架支持，让团队能按自有硬件评估可行性。与此同时，模型卡里的「已知限制」也越写越细——幻觉、长对话退化、工具误用都被明确标注。开放权重让实验更可控，但可靠性仍要靠受限的智能体外壳来兜底。",
      "source": "Optimisus",
      "date": "2026-11-21",
      "url": "https://optimisus.com/news/ai-news/thinking-machines-inkling-2-mini-26b-looped-model-offline-laptop-open-weights",
      "image": "https://optimisus.com/wp-content/uploads/2026/11/optimisus-2026-11-21-inkling-ai-mini.png",
      "badge": "行业观察",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "开放权重",
        "本地推理",
        "模型卡",
        "自托管",
        "AI趋势"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Inkling 2 Mini、Hy4 等开放权重模型密集发布，本地推理选项增加",
            "模型卡给出明确硬件目标与多家推理框架支持，便于按硬件评估",
            "已知限制（幻觉、长对话退化、工具误用）被明确标注"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "开放权重不等于开箱即用：模型卡把风险写清楚是好事，但真正的可靠性来自外面的约束设计——限制输出长度、限制工具轮次、关键操作需确认。选型时把「模型能力」和「外壳可靠性」分开评估，才不会被跑分带偏。"
        }
      ]
    },
    {
      "id": "co-ehujam",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·GameJam",
      "title": "EHU Game Jam 2026：三天创作电子或桌游，鼓励 AI 辅助",
      "summary": "欧洲人文大学（EHU）举办 EHU Game Jam 2026，为期三天（11 月 13-15 日），面向在校学生，可组队创作电子游戏或桌游。活动明确欢迎并鼓励使用 AI 工具辅助创作，设置最佳游戏、最佳视觉、游戏设计、最佳叙事、最佳 AI 应用与最佳桌游等多个奖项，并安排客座讲座与行业分享；无需专业经验，组织方会在开场安排提案与组队。这类「允许并鼓励 AI」的学生 Jam，正在把 AI 素养变成创作默认值。",
      "source": "European Humanities University",
      "date": "2026-11-13",
      "url": "https://en.ehuniversity.lt/news/ehu-game-jam-2026-opens-registrations/",
      "image": "",
      "badge": "Game Jam",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "EHU Game Jam",
        "GameJam",
        "学生竞赛",
        "AI辅助",
        "桌游"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11 月 13-15 日举办，为期三天，面向学生，可创作电子游戏或桌游",
            "明确鼓励使用 AI 工具，设最佳 AI 应用等多个奖项",
            "安排客座讲座与行业分享，无需经验、现场组队"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "学生 Jam 把 AI 从争议变成默认工具，给新手的启示是：先做出来再谈对错。国内高校的 Game Jam 也可以借鉴这种「低门槛+多赛道」组织方式，让非程序背景的同学都能参与进来。"
        }
      ]
    },
    {
      "id": "co-kuro27",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "title": "库洛游戏 2027 届秋招开启：八大类岗位，广州上海两地",
      "summary": "库洛游戏 2027 届秋季校园招聘全面开启，面向 2026 年 9 月至 2027 年 8 月毕业生，工作地点广州、上海，开放技术、美术、策划、音频、运营、营销、项管、职能八大类岗位。公司旗下有《战双帕弥什》《鸣潮》等产品，海外发行覆盖日韩、东南亚与欧美。每人可投两个志愿、第一志愿优先，官网与飞书投递通道同步开放，使用内推码可加速流程。想做引擎与图形开发的应届生，可重点关注其技术类岗位的具体方向。",
      "source": "四川大学就业指导中心",
      "date": "2026-11-19",
      "url": "https://jy.scu.edu.cn/index/index/newsdetail.html?data=MDAwMDAwMDAwMJG6n3_Ed6imi4qQtbR4iZmKutS-yGHRp7ugzc-GnZ2skMx9ZMN4gtKLipCwxKF0lZC5sq-0gqJv",
      "image": "",
      "badge": "校招",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "库洛游戏",
        "2027校招",
        "鸣潮",
        "战双帕弥什",
        "游戏岗位"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "面向 2026.9-2027.8 毕业生，广州上海两地，八大类岗位",
            "旗下有《战双帕弥什》《鸣潮》，海外发行覆盖多地区",
            "每人可投两个志愿，第一志愿优先，内推码可加速流程"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "库洛的技术岗位常年偏重引擎与图形方向，准备投递的同学建议把项目作品与岗位方向对齐，而不是海投。招聘信息以高校就业网转载为准，最终以企业官网投递页面为准。"
        }
      ]
    },
    {
      "id": "co-lilith27",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "title": "莉莉丝游戏 2027 届秋招持续开放：技术产品发行测试多方向",
      "summary": "莉莉丝游戏 2027 届秋季校园招聘正式批部分岗位仍开放网申、招满即止，面向 2026 年 1 月至 2027 年 12 月毕业生，热招方向覆盖技术、产品、发行、测试与项目管理；同时开放校招储备实习与日常实习，面向 2027 年 1-12 月毕业生。公司代表作有《小冰冰传奇》《剑与远征》《万国觉醒》，全球员工超 2300 人，是中国游戏出海代表之一。通过内推码选择「大使推荐」可优先筛选。出海向岗位对跨文化发行与本地化能力有额外要求。",
      "source": "华中师范大学就业信息网",
      "date": "2026-11-20",
      "url": "https://ccnu.91wllm.cn/campus/view/id/1010156",
      "image": "",
      "badge": "校招",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "莉莉丝游戏",
        "2027秋招",
        "游戏出海",
        "实习",
        "校招"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "2027 届秋招正式批部分岗位开放，面向 2026.1-2027.12 毕业生",
            "热招技术、产品、发行、测试、项目管理，另开储备实习与日常实习",
            "代表作《剑与远征》《万国觉醒》，全球员工超 2300 人"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "莉莉丝的出海基因让它的发行与本地化岗位更有国际视野，适合想做全球发行的同学。秋招岗位「招满即止」，看到匹配方向尽早投，别等到截止日前。"
        }
      ]
    },
    {
      "id": "co-hero27",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·社招",
      "title": "英雄游戏放出社招与 27 届校招：UE5 特效、开放世界 TA 与实习岗",
      "summary": "英雄游戏（Hero Games）双 11 一次性放出社招、27 届校招与实习三大专场。社招北京地区含 UE5 特效资深/组长、客户端 TA（开放世界 CrisisX）、战斗策划与场景模型等；广州地区有 Unity3D 客户端开发、TA 技术美术等；校招岗位含角色原画、场景原画与文案策划；实习岗含 UE 开发、数值策划、地编与关卡策划等，工作地覆盖北京、广州、杭州。招聘时间为 11 月 11 日至 12 月 9 日。校招社招同时开放，给不同阶段的开发者都留了入口。",
      "source": "牛企直聘（英雄游戏 HR）",
      "date": "2026-11-11",
      "url": "https://campus.niuqizp.com/job-vmlNZa5zZ.html",
      "image": "",
      "badge": "社招·校招",
      "badgeType": "event",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "英雄游戏",
        "社招",
        "27届校招",
        "UE5",
        "技术美术"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "社招含 UE5 特效资深/组长、开放世界客户端 TA 与 Unity3D 客户端开发",
            "校招含角色原画、场景原画、文案策划；实习含 UE 开发、地编与关卡策划",
            "招聘期 11 月 11 日至 12 月 9 日，工作地北京、广州、杭州"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "UE5 特效与开放世界 TA 岗集中释放，说明项目对实时渲染与技术美术的需求仍在扩张。这类岗位看重作品集与实际管线经验，准备时把「做过什么效果、怎么优化」讲清楚，比堆关键词有效。"
        }
      ]
    }
  ]
};
