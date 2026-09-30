# 自动化执行记录：每日游戏开发技术学习观察简报

## 例行规则（每次执行都要做）
0. **数量硬性验收（用户 2026-09-28 要求，2026-09-30 放宽口径，最高优先级，不得打折）**：items 总数 **≥30 条**（可超过 30，不可少于 30，hero 之外），且 **engine / industry / games / opensource / tutorials / ai 六个分类各 ≥5 条**。生成后必须逐分类清点并把清点结果写进执行摘要；同日条目互不重复（同 URL 或同事件只留一条），并与近 5 天归档去重。某分类穷尽多轮搜索（≥3 组关键词）确实凑不齐 5 条时，在摘要中说明缺哪个分类、差几条、找过什么渠道——严禁用低质或重复条目凑数。详见《定时任务_游戏开发技术学习观察简报.md》第六节。
1. 生成当日 data/日期.js 并同步 news_data.js / archive_list.js（UTF-8 无 BOM、CRLF；archive_list 顶部插当天、原顶部改「往期技术归档」；与近 5 天归档去重）。
2. URL 逐条验 200；配图 og:image / Steam header 验证 image/*，失败留空 image:""。
3. **新生内容每日质检**（用户 2026-09-28 要求新增）：按《新生内容每日质检清单.md》走查新生阅读动线（start.html → roadmap 横幅 → art/design 及细分页），检查①人工撰写感（反 AI 腔：无空洞排比、有立场取舍、有亲历锚点与具体数字）②可读性（术语有解释、建议有下一步、错别字与编号引用）③归纳完整性（细分页五要素齐备、来源可访问、与培养方案一致）。发现问题当次修复，结果追加到质检清单的「检查日志」。当前待办：design/ 下 5 页四年路线扩写（P2）、design 延伸阅读补充、year-tabs/打卡铺开（仅 art/illustration 已打样）。
4. git add -A → commit "auto: sync daily gamedev data for 日期" → push origin main。不同步服务器（30 分钟 cron 自取，用户明确要求）。
5. 执行摘要写回本 memory.md（不含正文全文）。

## 执行日志（摘要）
- 2026-09-25：首期 18+hero 条；NVIDIA ACE hero；Unity Learn 页 403 弃用；Unity 博客 og 有 typo 用内文图替代。
- 2026-09-26：12+hero 条；GI.biz 月度归档页（/archive/2026/09）是枚举本周文章 URL 的最佳来源；周六行业流为主。
- 2026-09-27：初版仅 5 条被用户批评（"不是要保底 30 吗"）→ 按 GI.biz 归档枚举 + RPS 特征短语反查补到 17 条重推。经验：①脚本 403/TLS ≠ 死链，先区分 404（真死）与反爬，反爬链接用已接管的 Edge CDP 浏览器（playwright-cli goto + eval）验证；②RPS slug 猜测易 404，需特征短语反查；③IWR catch 输出真实异常别写死 404。
- 2026-09-28：16 条（hero=Hytale Chapter 1 定档 10/12 + 15 条，RPS 周末文章为主）。新增例行规则：新生内容每日质检（见上）。当日质检结果已写入《新生内容每日质检清单.md》（修 start.html 一处中英混杂；3 项待办：design 5 页扩写 / design 延伸阅读 / year-tabs 铺开）。
- 2026-09-28（链接专项，用户指令）：全站 52 去重外链验证通过；坏链 campus.tencent.com（证书 CN 不匹配，真浏览器也报错）→ 换 join.qq.com；GameLook/手游那点事(sykong) 站点已失效保持纯文字；Maya 用 autodesk.com.cn（国际站拒绝自动化）。正文就地挂链 20+ 处（GAMES101/202/104、唐老狮、Unity Hub、GitHub、LeetCode、牛客、MySQL/Redis、Unity Learn、Godot 教程、知乎专栏、indienova、游戏葡萄、Blender/Maya/ZBrush），新增 .inline-link 样式，CSS 版本 20260928a，commit 292a081。
- 2026-09-29：14 条（hero=巫师3重制版今日免费推送+RT/PT 配置，RPS 文章为 url）。经验：①GI.biz /archive/2026/09 归档页首页混排全月文章且非最新在前，日期必须逐篇核对（抓 2026-09-2x 正则）；②首页（gamesindustry.biz 根）有当日文章列表，比归档页靠谱；③RPS 的 /feed RSS 可脚本直读（含日期+标题+链接，无图），文章 og:image 需浏览器抓但 eval 转义易翻车——游戏类直接换 Steam 头图更稳；④worthplaying 的 og 是站标 logo 不可用作配图，改用对应游戏 Steam 头图；⑤新游戏 header.jpg 404 时用商店页 og:image 的 capsule_616x353（含 t= 参数）。质检例行跑通过（脚本化内链解析+AI 腔哨兵，零问题）。commit 0869363。
- 2026-09-30：初版 12 条（hero=Valve 把 Steam 首页折扣/活动区改算法推荐，RPS）被用户判定未达数量硬性验收 → 用户澄清验收标准为「≥30 条（可超不可少）+ 六分类各 ≥5」。当日手动重做：保留初版 9 条合格条目（砍 2 条最弱 games），删除 8 条与 09-28/29 归档重复的条目（Nadella、DICE、Unity 官博×5——教训：**补条目前必须先跑 dedup 基线比对，Unity 官博一周内的文章大概率已被用过**），补入 11 条新条目（Godot 4.8 dev7 特性冻结、Bevy 0.20-rc2、Unity 6000.6.3 补丁、Naughty Dog 2027 揭露、Minecraft 425M 里程碑（X 一手）、动漫游戏产业指数报告（人民网）、微软 .NET 游戏学习中心、Claude Code Game Studios 教程、GitHub trending×3：PAPERCLIP/Hindsight/CLI-Anything/CUA/Bonsai）。成品 30 条、六分类各 5、31 URL 与近 5 天零重复、27 图全 200、4 条空图（metadevelopers 反爬/x.com 无 og/人民网无 og/CSDN 无头图）。commit 见 git log。
- 站点背景：十页站点（start 新生入口 + roadmap/ta/client/design/engine/art/server/contests/jobs）+ art/design 各 5 个细分子页；细分子页含知乎延伸阅读（浏览器验证）与原文摘录；导航 ART/DESIGN 悬停下拉 + 当前页高亮；nginx no-cache + .html 301 已配置；全站内链无 .html 后缀。
