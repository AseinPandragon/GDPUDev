#!/usr/bin/env bash
# GDPUDev 腾讯云服务器一键部署脚本（兼容 Ubuntu/Debian 与 CentOS/腾讯OS，root 或 sudo 执行）
# 用法：把仓库克隆到服务器后，在仓库目录执行 bash deploy/server-setup.sh
set -e

SITE_DIR=/var/www/gdpudev
REPO_URL=https://github.com/AseinPandragon/GDPUDev.git

# ---- 包管理器探测 ----
if command -v apt-get >/dev/null 2>&1; then
    PKG=apt
elif command -v dnf >/dev/null 2>&1; then
    PKG=dnf
elif command -v yum >/dev/null 2>&1; then
    PKG=yum
else
    echo "未识别的包管理器，请手动安装 nginx 与 git" && exit 1
fi

install_pkg() {
    case "$PKG" in
        apt) apt-get update -y && apt-get install -y "$@" ;;
        dnf) dnf install -y "$@" ;;
        yum) yum install -y "$@" ;;
    esac
}

enable_service() {
    systemctl enable --now "$1" 2>/dev/null || systemctl restart "$1"
}

echo "==> 1/5 安装 nginx 与 git（包管理器: $PKG）"
install_pkg nginx git

echo "==> 2/5 拉取站点文件到 ${SITE_DIR}"
mkdir -p "$SITE_DIR"
if [ -d "$SITE_DIR/.git" ]; then
    git -C "$SITE_DIR" fetch origin && git -C "$SITE_DIR" reset --hard origin/main
else
    git clone "$REPO_URL" "$SITE_DIR"
fi

echo "==> 3/5 安装 nginx 站点配置"
CONF_DIR=/etc/nginx/conf.d
mkdir -p "$CONF_DIR"
cp "$(dirname "$0")/nginx-gdpudev.conf" "$CONF_DIR/gdpudev.conf"

# Ubuntu 的 default 站点会抢占 default_server，移除
if [ -f /etc/nginx/sites-enabled/default ]; then
    rm -f /etc/nginx/sites-enabled/default
fi

echo "==> 4/5 校验并启动 nginx"
nginx -t
enable_service nginx

echo "==> 5/5 配置定时同步（每 30 分钟 git pull，配合 CodeBuddy 每日推送自动更新）"
cat > /etc/cron.d/gdpudev-sync <<'CRON'
*/30 * * * * root cd /var/www/gdpudev && git fetch origin && git reset --hard origin/main >/dev/null 2>&1
CRON
chmod 644 /etc/cron.d/gdpudev-sync

echo
echo "部署完成。剩余手动步骤："
echo "  1) 腾讯云 DNSPod 给 gdpudev.cn 添加 A 记录：@ 和 www -> 111.230.241.145"
echo "  2) 轻量服务器控制台 -> 防火墙 -> 添加规则：允许 TCP 80"
echo "  3) 验证：curl -H 'Host: www.gdpudev.cn' http://127.0.0.1/ 应返回首页 HTML"
echo "     curl -H 'Host: www.gdpudev.cn' http://127.0.0.1/gamedev/ 应返回同一首页"
