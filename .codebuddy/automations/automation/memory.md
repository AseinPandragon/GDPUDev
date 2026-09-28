# 自动化执行记录：每日游戏开发技术学习观察简报

## 例行规则（每次执行都要做）
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
- 站点背景：十页站点（start 新生入口 + roadmap/ta/client/design/engine/art/server/contests/jobs）+ art/design 各 5 个细分子页；细分子页含知乎延伸阅读（浏览器验证）与原文摘录；导航 ART/DESIGN 悬停下拉 + 当前页高亮；nginx no-cache + .html 301 已配置；全站内链无 .html 后缀。
