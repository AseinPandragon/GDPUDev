# GDPUDev 项目长期记忆

## 环境事实（2026-10-19 踩坑，跨会话有效）

- **PowerShell 删除钩子**：本环境 `Remove-Item` 被 harness 注入同名函数劫持（safe-delete）。仅 `[IO.Path]::GetTempPath()`（= `E:\Temp`）下允许直接永久删除；其他路径必须走 trash（`$env:GENIE_TRASH_DIR\win32-x64.exe`），该二进制已坏（`Some operations were aborted` / 假成功），于是 fail-closed 拒删。`dangerouslyDisableSandbox` 对钩子无效。经用户明确确认后的绕过法：`Microsoft.PowerShell.Management\Remove-Item` 直调真 cmdlet。批量删除另有 `Invoke-SafeDeleteBulkGuard`（node 脚本）管控。
- **modify_backup 空间吞噬者**：`.workbuddy-ai\workspace\sessions\*\modify_backup\` 会在文件被编辑/移动时自动快照副本（曾因搬迁 1.9 GB 的 .codex\sessions 衍生 467 MB 备份；历史累计 1.27 GB）。定期清理旧会话的该目录。
- 用户 TEMP 指向 `E:\Temp`（不在 C:）。pagefile 在 D:（32 GB allocated）。C: 为 111 GB 系统盘，长期紧张；D: / E: 空间充裕，大文件与归档一律放 D:/E:。
- C 盘空间大鳄常态：`.codex`（会话/历史/多版本二进制）、Ollama 2.85 GB（三套 GPU 后端）、WPS 2.86 GB、ProgramData\Microsoft\Search 2.76 GB、Windows\Installer 1.15 GB。

## 项目要点

- 仓库 `E:\Programs\GDPUDev`（站点 = index.html + data/ + news_data.js + archive_list.js），remote `github.com/AseinPandragon/GDPUDev` (main)；提交用指定文件清单，禁 `add -A`。部署两路：Cloudflare Pages（wrangler.toml，主站 www.gdpudev.cn/gamedev/）、自建服务器 `/var/www/gdpudev`（ssh gdpudev）。**GitHub Pages 工作流已于 2026-11-05 删除**：仓库从未启用 Pages（`has_pages=false`），且开通站点需 owner 级 `admin:repo` 权限——GITHUB_TOKEN 无法声明 `administration`（非其合法权限键）、协作者令牌被 404 拦截，工作流不可能自动转绿；drift-check 里的 GitHub Pages 备用站文案也一并改为「仅 Cloudflare 单一部署」。若日后要恢复 Pages 备用站，须仓库主在 Settings→Pages 手动启用（Source=GitHub Actions）后重加 `deploy-pages.yml`。
- 服务器同步：`ssh gdpudev "cd /var/www/gdpudev && git fetch origin && git reset --hard origin/main"`；每 30 分钟 cron 兜底；一键信号入口 `https://gdpudev.cn/gamedev/sync?token=<服务器令牌>`（nginx→webhook 127.0.0.1:9000，令牌仅存服务器 `/etc/gdpudev/sync.token` 600/root，自动化本体不持有）。
- 定时任务「每日游戏开发技术学习观察简报」（id `fafd5493-ba9d-4a58-b10f-3ee734b474e9`，每天 07:00）：规则文档《定时任务_游戏开发技术学习观察简报.md》+ `.codebuddy/automations/automation/memory.md`；硬门禁 `node scripts/check_briefing.js <日期>` 必须 exit 0 才能 commit；ssh 失败不判运行失败（cron 兜底）。
- PowerShell 坑：heredoc 会把 `$host`/`$(...)` 当本地变量展开/抢先执行——写含 `$` 的服务器配置用块文件 + Python 插入或 `` `$ `` 转义；PowerShell 下中文正则验网页内容易假阴性，用 ASCII 字段（如 date）验证。
