# 夏正阳 · Vibe Coder 作品集

暗黑科幻风格的单页作品集。纯静态站点（HTML/CSS/JS + CDN 引入 Three.js / GSAP / Lenis），**无需构建**，可直接部署到任何静态托管。

## 本地预览

```bash
npx serve .
# 打开 http://localhost:3000
```

## 目录结构

```
portfolio/
├── index.html          # 页面结构
├── styles.css          # 全部样式与响应式
├── main.js             # 数据、粒子背景、滚动动画、hover 播放
├── .nojekyll           # GitHub Pages 保留原始目录
└── public/
    ├── videos/         # 6 个作品视频 (mp4, hover 播放)
    ├── thumbnails/     # 6 张封面图 (默认显示)
    └── extras/         # 攻略工具截图
```

## 部署到 GitHub Pages

1. 新建仓库 `xiazhengyang195-coder-portfolio`，把 `portfolio/` 内的文件放到仓库根目录。
2. 推送到 `main` 分支。
3. 仓库 Settings → Pages → Source 选 `Deploy from a branch` → `main` / `/ (root)`。
4. 访问 `https://xiazhengyang195-coder.github.io/xiazhengyang195-coder-portfolio/`。

## 部署到 Vercel（镜像）

Import GitHub 仓库 → Framework Preset 选 **Other**（无需构建）→ Deploy。

## 修改内容

- 作品数据（标题/描述/标签/链接/强调色）集中在 `main.js` 顶部的 `WORKS` 与 `EXTRAS` 数组。
- 配色变量在 `styles.css` 的 `:root`。

## 说明

- 视频由飞书屏录 `.qt` 经 ffmpeg 转码为 1280px 宽、去音频的 H.264 mp4，`preload="none"` 懒加载，hover 才拉流。
- 移动端 (<640px) 关闭粒子背景以保流畅；`prefers-reduced-motion` 下禁用所有动画。
