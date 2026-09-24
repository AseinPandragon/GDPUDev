@echo off
title GDPU GAMEDEV HUB - Setup Windows AutoStart
cd /d "%~dp0"
echo ==========================================================
echo  正在将 [GDPU GAMEDEV HUB 自动门户服务] 设置为 Windows 开机自启...
echo ==========================================================

set "STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "VBS_FILE=%STARTUP_FOLDER%\GDPU_GameDev_Hub_AutoStart.vbs"

echo Set WshShell = CreateObject("WScript.Shell") > "%VBS_FILE%"
echo WshShell.CurrentDirectory = "%~dp0" >> "%VBS_FILE%"
echo WshShell.Run "python run_portal_server.py", 0, False >> "%VBS_FILE%"

echo.
echo [OK] 已经成功创建开机静默自启脚本：
echo      %VBS_FILE%
echo.
echo ==========================================================
echo  从现在起：
echo  1. 电脑开机后会自动在后台静默运行 Web 服务器与数据同步器！
echo  2. 完全不需要打开网页去点启动，也不会弹出黑框打扰您！
echo  3. 豆包每天填完数据，手机和电脑端刷新即看！
echo ==========================================================
echo.
pause
