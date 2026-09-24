@echo off
title GDPU GAMEDEV HUB - All-in-One Auto Launcher
cd /d "%~dp0"
python launch_all_services.py
echo.
echo 按任意键关闭本控制窗口（后台服务将继续在后台常驻运行）...
pause >nul
