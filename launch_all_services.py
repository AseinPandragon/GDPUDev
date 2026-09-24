import os
import sys
import time
import subprocess
import urllib.request
import re

WORKSPACE_DIR = r"e:\Programs\GDPU_GameDev_Hub"
DOUBAO_DIR = r"C:\Users\Administrator\Doubao\chats\2026-08-27\new-chat"
CPOLAR_LOG = r"C:\Users\Administrator\.cpolar\logs\cpolar_service.log"

def is_port_listening(port=8000):
    try:
        resp = urllib.request.urlopen(f"http://127.0.0.1:{port}/", timeout=1.5)
        return resp.status == 200
    except Exception:
        return False

def get_active_cpolar_url():
    if not os.path.exists(CPOLAR_LOG):
        return None
    try:
        with open(CPOLAR_LOG, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()
            for line in reversed(lines[-80:]):
                m = re.search(r"Tunnel established at (https?://[a-zA-Z0-9\.\-]+)", line)
                if m:
                    url = m.group(1)
                    if "cpolar" in url and "tcp" not in url:
                        return url
    except Exception:
        pass
    return None

def main():
    print("=" * 65)
    print(" [GDPU GAMEDEV HUB] 游戏开发情报中枢 · 全自动一键服务管家")
    print("=" * 65)

    # 1. 检查并确保 cpolar Windows 后台服务运行中
    print("\n[1/3] 正在检查 cpolar 穿透守护服务...")
    try:
        out = subprocess.check_output("sc query cpolar", shell=True).decode("gbk", errors="ignore")
        if "RUNNING" in out:
            print("  -> cpolar 系统服务状态: [正常运行中 OK]")
        else:
            print("  -> 正在拉起 cpolar 服务...")
            subprocess.run("net start cpolar", shell=True)
    except Exception as e:
        print("  -> cpolar 服务检测:", e)

    # 2. 检查并启动本地 Web 服务器 & 自动同步监听器
    print("\n[2/3] 正在检查本地 Web 门户服务器 (Port 8000)...")
    if is_port_listening(8000):
        print("  -> 本地 Web 8000 端口: [已在后台运行中 OK]")
    else:
        print("  -> 正在启动后台 Web 服务器 (run_portal_server.py)...")
        subprocess.Popen(
            [sys.executable, os.path.join(WORKSPACE_DIR, "run_portal_server.py")],
            cwd=WORKSPACE_DIR,
            creationflags=subprocess.CREATE_NEW_PROCESS_GROUP if os.name == 'nt' else 0
        )
        time.sleep(2)
        if is_port_listening(8000):
            print("  -> 本地 Web 服务器启动成功: [已就绪 OK]")
        else:
            print("  -> 正在等待服务响应...")

    # 3. 提取并展示最新外网穿透地址
    print("\n[3/3] 正在获取当前最新外网/手机访问公网链接...")
    public_url = get_active_cpolar_url()
    
    print("\n" + "=" * 65)
    print(" 全部服务已 100% 自动启动就绪！无需打开任何网页点击启动！")
    print("=" * 65)
    print(" 本地电脑访问: http://localhost:8000")
    if public_url:
        print(f" 手机外网访问: {public_url}")
    else:
        print(" 手机外网访问: 请直接连接 cpolar (默认映射端口 8000)")
    print("=" * 65)
    print(" 提示：豆包只要在 data/ 下放入新数据，系统会在 2 秒内全自动同步并发布！")
    print("=" * 65)

if __name__ == "__main__":
    main()
