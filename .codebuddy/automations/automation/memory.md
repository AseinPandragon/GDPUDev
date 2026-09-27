# 自动化执行记录：每日游戏开发技术学习观察简报

## 2026-09-27（星期日）
- 生成 data/2026-09-27.js（hero=The Relic: First Guardian Xbox 上线+永久降价+Switch 2 版 10/9 + 4 条 items）。周日 GI.biz 无更新、稿源极薄，按宁缺毋滥收 5 条内容（含 hero）：relic 发售、Godot 基金会愿景声明（godotengine.org/article/godot-vision-statement-2026/，官方 evergreen 深读）、Game-Oracle AI 披露销量报告（GameLook）、The Games Forum Roma 官网上线、墨尔本国际游戏周 10/2-11 回归（gamesweek.melbourne）。
- 验证升级：脚本 IWR 被 403/TLS 拦的链接（rpgamer TLS、gamesweek.melbourne 403），改用已接管的 Edge CDP 会话（playwright-cli goto + eval document.title / head.children 遍历取 og:image）逐条浏览器验证——此方法可永久复用；nintendo-insider 是 Cloudflare 盾（自动化无法过）→ 按规则弃用。
- 同步 news_data.js 与 archive_list.js（09-27 置顶、09-26/25/24 保留）；UTF-8 无 BOM、CRLF 校验通过。去重：与近 5 天归档无重复。
- git commit 1ed3027 已 push origin main（未手动同步服务器）。
- 经验：①脚本验证失败≠链接死，先分清 404（真死）与 403/TLS（反爬），反爬链接用 Edge CDP 浏览器验证；②eval 里含双引号会被参数拆分——用 head.children 遍历或 IIFE+单引号规避；③周日稿源薄，5 条也可接受。
