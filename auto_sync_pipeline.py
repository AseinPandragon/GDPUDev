import os
import re
import shutil
import datetime
import time
import threading
import subprocess

DOUBAO_DIR = r"C:\Users\Administrator\Doubao\chats\2026-08-27\new-chat"
WORKSPACE_DIR = r"e:\Programs\GDPU_GameDev_Hub"
MASTER_TEMPLATE_PATH = os.path.join(WORKSPACE_DIR, "rhodes_island_gamedev_portal.html")
WEEKDAY_NAMES = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]

def get_weekday_str(date_str):
    try:
        dt = datetime.datetime.strptime(date_str, "%Y-%m-%d")
        return WEEKDAY_NAMES[dt.weekday()]
    except Exception:
        return "日报"

def auto_git_push(commit_date):
    """自动将更新内容推送至 GitHub，触发 Cloudflare Pages 秒级云端全球热更新"""
    try:
        if not os.path.exists(os.path.join(DOUBAO_DIR, ".git")):
            return
        subprocess.run(["git", "add", "-A"], cwd=DOUBAO_DIR, capture_output=True)
        msg = f"auto: sync daily gamedev data for {commit_date} (Cloudflare Pages auto-deploy)"
        commit_res = subprocess.run(["git", "commit", "-m", msg], cwd=DOUBAO_DIR, capture_output=True, text=True)
        if "nothing to commit" not in (commit_res.stdout + commit_res.stderr).lower():
            push_res = subprocess.run(["git", "push", "origin", "main"], cwd=DOUBAO_DIR, capture_output=True, text=True)
            print(f"[{datetime.datetime.now().strftime('%H:%M:%S')}] [AUTO-PUSH] 已自动推送到 GitHub，Cloudflare Pages 即将同步上线！")
    except Exception as e:
        print("[AUTO-PUSH ERROR]:", e)

def scan_and_rebuild_archives():
    """
    全自动扫描 data/ 目录中的所有历史与最新数据文件，
    自动重构 archive_list.js，自动更新 news_data.js，自动生成对应日期的独立 HTML。
    """
    data_dir = os.path.join(DOUBAO_DIR, "data")
    if not os.path.exists(data_dir):
        return []

    # 1. 扫描所有 YYYY-MM-DD.js 文件
    date_files = []
    for f in os.listdir(data_dir):
        m = re.match(r"^(\d{4}-\d{2}-\d{2})\.js$", f)
        if m:
            date_str = m.group(1)
            fpath = os.path.join(data_dir, f)
            mtime = os.path.getmtime(fpath)
            date_files.append((date_str, f, fpath, mtime))

    if not date_files:
        return []

    # 按日期倒序排列（最新的在最前）
    date_files.sort(key=lambda x: x[0], reverse=True)
    latest_date, latest_file, latest_path, _ = date_files[0]

    # 2. 生成最新 archive_list.js 内容
    archive_entries = []
    for idx, (d_str, f_name, _, _) in enumerate(date_files):
        wk = get_weekday_str(d_str)
        desc = "今日最新情报" if idx == 0 else "往期技术归档"
        entry_str = f'  {{ date: "{d_str}", weekday: "{wk}", file: "data/{f_name}", desc: "{desc}" }}'
        archive_entries.append(entry_str)

    archive_js_content = "/**\n * 广药 游戏开发情报中枢 · 自动历史归档索引 (Auto-Generated)\n * 每次数据更新时由自动监听管道实时同步生成\n */\n"
    archive_js_content += "window.NEWS_ARCHIVE_LIST = [\n" + ",\n".join(archive_entries) + "\n];\n"

    # 写入 archive_list.js 到两处目录
    for target_dir in [DOUBAO_DIR, WORKSPACE_DIR]:
        target_path = os.path.join(target_dir, "archive_list.js")
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(archive_js_content)

    # 3. 自动同步 news_data.js（将最新一天的 JS 复制为 news_data.js）
    for target_dir in [DOUBAO_DIR, WORKSPACE_DIR]:
        target_news_path = os.path.join(target_dir, "news_data.js")
        shutil.copy2(latest_path, target_news_path)

    # 4. 读取主模板，自动同步/生成各日期对应的独立单页 HTML
    if os.path.exists(MASTER_TEMPLATE_PATH):
        with open(MASTER_TEMPLATE_PATH, "r", encoding="utf-8") as f:
            master_html = f.read()

        # 同步 index.html 和 Unity开发资讯.html (默认最新)
        for name in ["index.html", "Unity开发资讯.html", "unity_news_portal.html"]:
            p = os.path.join(DOUBAO_DIR, name)
            with open(p, "w", encoding="utf-8") as f:
                f.write(master_html)
            p_ws = os.path.join(WORKSPACE_DIR, name)
            with open(p_ws, "w", encoding="utf-8") as f:
                f.write(master_html)

        # 遍历生成各日期的专属 HTML 文件（如 Unity开发资讯_2026-08-31.html 等）
        for d_str, f_name, _, _ in date_files:
            page_html = master_html.replace('<script src="news_data.js"></script>', f'<script src="data/{f_name}"></script>')
            page_name = f"Unity开发资讯_{d_str}.html"
            p = os.path.join(DOUBAO_DIR, page_name)
            with open(p, "w", encoding="utf-8") as f:
                f.write(page_html)

    print(f"[{datetime.datetime.now().strftime('%H:%M:%S')}] [AUTO-SYNC] 已全自动同步最新数据: {latest_date} ({len(date_files)} 份归档已更新)")
    
    # 自动触发 Git 推送至 GitHub，驱动 Cloudflare Pages 自动部署
    threading.Thread(target=auto_git_push, args=(latest_date,), daemon=True).start()
    return [d[0] for d in date_files]

class AutoSyncWatcher:
    """实时文件监听守护进程"""
    def __init__(self, watch_dir=os.path.join(DOUBAO_DIR, "data"), interval_sec=2.0):
        self.watch_dir = watch_dir
        self.interval_sec = interval_sec
        self.last_snapshot = {}
        self.running = False
        self._thread = None

    def _get_dir_snapshot(self):
        snapshot = {}
        if not os.path.exists(self.watch_dir):
            return snapshot
        for root, _, files in os.walk(self.watch_dir):
            for f in files:
                if f.endswith(".js") or f.endswith(".json"):
                    full_path = os.path.join(root, f)
                    try:
                        snapshot[full_path] = os.path.getmtime(full_path)
                    except OSError:
                        pass
        return snapshot

    def start(self):
        self.running = True
        self.last_snapshot = self._get_dir_snapshot()
        scan_and_rebuild_archives()
        self._thread = threading.Thread(target=self._watch_loop, daemon=True)
        self._thread.start()
        print(f"[AUTO-SYNC] 守护进程已就绪，正在实时监听: {self.watch_dir}")

    def _watch_loop(self):
        while self.running:
            time.sleep(self.interval_sec)
            current_snapshot = self._get_dir_snapshot()
            if current_snapshot != self.last_snapshot:
                print(f"[{datetime.datetime.now().strftime('%H:%M:%S')}] [AUTO-SYNC] 检测到豆包数据文件变动，正在自动触发全量同步与云端推送...")
                try:
                    scan_and_rebuild_archives()
                except Exception as e:
                    print("[AUTO-SYNC ERROR]:", e)
                self.last_snapshot = current_snapshot

    def stop(self):
        self.running = False

if __name__ == "__main__":
    print("Executing one-off auto sync check...")
    dates = scan_and_rebuild_archives()
    print("Active Dates:", dates)
