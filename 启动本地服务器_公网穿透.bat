@echo off
title GDPU GAMEDEV HUB - Local Web Server
cd /d "%~dp0"
echo ===================================================
echo [GDPU GAMEDEV HUB] 正在启动本地 Web 服务器 (Port 8000)...
echo 服务目录: C:\Users\Administrator\Doubao\chats\2026-08-27\new-chat
echo 本地访问: http://localhost:8000
echo cpolar 穿透: https://419a46eb.r9.cpolar.cn
echo ===================================================
python run_portal_server.py
pause
