/* ================= 数据 ================= */
const WORKS = [
  {
    num: "01", title: "窗帘交互网页", latin: "Curtain Physics",
    note: "把一块布交给物理引擎，风从窗外来，鼠标拨一下就掀起真实的褶皱——最日常的场景，做成可以伸手触碰的。",
    credit: "选入 Kimi K2.6 版本宣发视频与开屏动画 · 小红书收藏 2k+",
    accent: "#e8ddd0",
    video: "public/videos/01-curtain.mp4", thumb: "public/thumbnails/01-curtain.jpg",
    href: "https://5lva67yl7c23k.beta-ok.kimi.link/",
  },
  {
    num: "02", title: "海洋模拟器", latin: "Ocean Simulation",
    note: "灵感来自盯着海面发呆的下午。波形跑在 GPU 上，风速、浪高、天色都能实时拨动，像随手调一片会呼吸的海。",
    accent: "#4ecdc4",
    video: "public/videos/02-ocean.mp4", thumb: "public/thumbnails/02-ocean.jpg",
    href: "https://ggt6cplnklnfw.beta-ok.kimi.link",
  },
  {
    num: "03", title: "逃离恐怖宜家 3D", latin: "Infinite IKEA",
    note: "把逛卖场逛到迷路的荒诞感放大成一场游戏：低多边形、第一人称、永远走不出去的样板间。黑色幽默的探索。",
    accent: "#f0b866",
    video: "public/videos/03-ikea.mp4", thumb: "public/thumbnails/03-ikea.jpg",
    href: "https://2y33i5wmwyx2w.beta-ok.kimi.link",
  },
  {
    num: "04", title: "喜鹊谋杀案片头", latin: "Magpie Murders",
    note: "复刻并重写一段悬疑剧片头，用几何拼贴讲一桩命案。研究镜头怎么在几秒里把张力立起来。",
    accent: "#e63946",
    video: "public/videos/04-magpie.mp4", thumb: "public/thumbnails/04-magpie.jpg",
    href: "https://jm5lno2havkfg.beta-ok.kimi.link",
  },
  {
    num: "05", title: "纽约没有巴黎", latin: "Permian Basin",
    note: "公路电影的黄昏被搬进浏览器：霓虹、沙漠、拉长的影子。一场关于「在别处」的超现实光影实验。",
    accent: "#f4a261",
    video: "public/videos/05-desert.mp4", thumb: "public/thumbnails/05-desert.jpg",
    href: "https://mk3hswixdbt7w.beta-ok.kimi.link",
  },
  {
    num: "06", title: "月之暗面太空舱", latin: "Station V",
    note: "旅程的终点在深空。走进一座轨道空间站的内部，零重力里物件缓缓漂浮——冰冷、安静、离地面最远的一站。",
    accent: "#b9a7f0",
    video: "public/videos/06-space.mp4", thumb: "public/thumbnails/06-space.jpg",
    href: "https://uo5tzwz6f7ze2.beta-ok.kimi.link/",
  },
];

const TOOLS = [
  {
    num: "07", title: "WoR Discord 攻略 Bot", latin: "Guide Bot", badge: "🤖",
    note: "Gemini API（谷歌生态可直连 YouTube）接入 OpenClaw 再接入 Discord 的定制问答 Bot。玩家发一张游戏截图就能识别角色，卡关时自动推荐对应的 YouTube 攻略视频。",
    accent: "#f4a261",
    img: "public/extras/guide-site.png",
  },
  {
    num: "08", title: "WoR 平面攻略站", latin: "Build Archive", badge: "📚",
    note: "收录全角色信息与配装推荐的攻略站，一处查齐英雄、装备与神器搭配，并支持多语言切换，服务全球玩家。",
    accent: "#b9a7f0",
    img: "public/extras/guide-flat.jpg",
  },
];

/* ================= 作品胶片渲染 ================= */
function entryCard(w, i) {
  const flip = i % 2 === 1 ? " entry--flip" : "";
  return `
  <article class="entry${flip}" style="--accent-local:${w.accent}" data-accent="${w.accent}">
    <div class="entry__text">
      <span class="entry__index line">${w.num}</span>
      <h3 class="entry__title line">${w.title}<span class="entry__latin">${w.latin}</span></h3>
      <p class="entry__note line">${w.note}</p>
      ${w.credit ? `<p class="entry__credit line"><span class="entry__credit-mark">★</span>${w.credit}</p>` : ""}
      <a class="entry__link" href="${w.href}" target="_blank" rel="noopener" data-link>
        进入世界 <span class="arrow">↗</span>
      </a>
    </div>
    <a class="entry__media" href="${w.href}" target="_blank" rel="noopener" aria-label="${w.title}">
      <span class="entry__tag"><i>◆</i> ${w.latin}</span>
      <img class="entry__thumb" src="${w.thumb}" alt="${w.title}" loading="lazy" />
      <video class="entry__video" src="${w.video}" muted loop playsinline preload="none"></video>
      <span class="entry__sound" role="button" tabindex="0" aria-label="开启声音" aria-pressed="false">
        <svg class="entry__sound-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 9.5v5h3.6L12 18.2V5.8L7.6 9.5H4z"/>
          <path class="entry__sound-wave" d="M15.4 9.2a3.8 3.8 0 0 1 0 5.6"/>
          <path class="entry__sound-wave" d="M17.9 6.7a7.3 7.3 0 0 1 0 10.6"/>
          <line class="entry__sound-slash" x1="15" y1="9" x2="20" y2="15"/>
        </svg>
      </span>
    </a>
  </article>`;
}

function toolCard(t) {
  return `
  <button class="tool line" data-zoom="${t.img}" data-cap="${t.title} — ${t.note}" style="--accent-local:${t.accent}">
    <div class="tool__media">
      <span class="tool__badge">${t.badge} ${t.num}</span>
      <img src="${t.img}" alt="${t.title}" loading="lazy" />
      <span class="tool__zoom">点击放大 ⤢</span>
    </div>
    <h3 class="tool__title">${t.title}<span class="tool__latin">${t.latin}</span></h3>
    <p class="tool__note">${t.note}</p>
  </button>`;
}

document.getElementById("reel").innerHTML = WORKS.map(entryCard).join("");
document.getElementById("toolsGrid").innerHTML = TOOLS.map(toolCard).join("");

/* ================= 顶部世界名跑马灯 ================= */
(function ticker() {
  const track = document.getElementById("tickerTrack");
  if (!track) return;
  const names = WORKS.map((w) => w.latin);
  const one = names.map((n) => `<span>${n}</span>`).join("");
  track.innerHTML = one + one; // 复制一份实现 50% 无缝循环
})();

/* ================= 灯箱：点击工具卡放大 ================= */
(function lightbox() {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCap");
  const closeBtn = document.getElementById("lightboxClose");
  if (!box) return;

  const open = (src, caption) => {
    img.src = src;
    img.alt = caption;
    cap.textContent = caption;
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
  };
  const close = () => {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
  };

  document.querySelectorAll("[data-zoom]").forEach((el) => {
    el.addEventListener("click", () => open(el.dataset.zoom, el.dataset.cap || ""));
  });
  closeBtn.addEventListener("click", close);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();

/* ================= hover 播放视频 ================= */
document.querySelectorAll(".entry").forEach((entry) => {
  const video = entry.querySelector(".entry__video");
  if (!video) return;
  let loaded = false;
  const media = entry.querySelector(".entry__media");
  media.addEventListener("mouseenter", () => {
    if (!loaded) { video.load(); loaded = true; }
    entry.classList.add("is-playing");
    video.play().catch(() => {});
  });
  media.addEventListener("mouseleave", () => {
    entry.classList.remove("is-playing");
    video.pause();
  });

  // 声音开关：默认静音自动播放，点击喇叭后带声音（点击本身是用户手势，绕过自动播放限制）
  const sound = entry.querySelector(".entry__sound");
  if (sound) {
    const toggle = (e) => {
      e.preventDefault();
      e.stopPropagation();
      video.muted = !video.muted;
      const on = !video.muted;
      entry.classList.toggle("is-sound", on);
      sound.setAttribute("aria-pressed", String(on));
      sound.setAttribute("aria-label", on ? "关闭声音" : "开启声音");
      if (on) {
        if (!loaded) { video.load(); loaded = true; }
        video.play().catch(() => {});
      }
    };
    sound.addEventListener("click", toggle);
    sound.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") toggle(e);
    });
  }
});

/* ================= Lenis 平滑滚动 ================= */
let lenis = null;
if (window.Lenis && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  window.__lenis = lenis;
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = a.getAttribute("href");
      if (target.length > 1) { e.preventDefault(); lenis.scrollTo(target, { offset: 0 }); }
    });
  });
}

/* ================= 强调色随滚动流动 ================= */
(function accentFlow() {
  const root = document.documentElement;
  const glow = document.querySelector(".hero__glow");
  const entries = Array.from(document.querySelectorAll(".entry"));
  if (!entries.length) return;

  const io = new IntersectionObserver((items) => {
    items.forEach((it) => {
      if (it.isIntersecting && it.intersectionRatio > 0.4) {
        const c = it.target.dataset.accent;
        if (c) {
          root.style.setProperty("--accent", c);
          if (glow) glow.style.background =
            `radial-gradient(circle, color-mix(in srgb, ${c} 16%, transparent), transparent 62%)`;
        }
      }
    });
  }, { threshold: [0.4, 0.6] });
  entries.forEach((e) => io.observe(e));
})();

/* ================= GSAP 入场动画 ================= */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  if (lenis) lenis.on("scroll", ScrollTrigger.update);

  // Hero 逐行入场
  gsap.set(".hero .line", { opacity: 0, y: 34 });
  gsap.to(".hero .line", {
    opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.13, delay: 0.2,
  });

  // 区块标题
  gsap.utils.toArray(".section-head .line").forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  // 作品行 / 工具卡逐个淡入
  gsap.utils.toArray(".entry .line, .tool").forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 44 }, {
      opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
    });
  });
} else {
  document.querySelectorAll(".line, .tool").forEach((el) => {
    el.style.opacity = 1; el.style.transform = "none";
  });
}

/* ================= 自定义光标 ================= */
const cursor = document.getElementById("cursor");
if (cursor && matchMedia("(hover: hover)").matches) {
  let cx = 0, cy = 0, tx = 0, ty = 0;
  window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();
  const hoverTargets = "a, button, [data-link], .entry__media, .tool";
  document.querySelectorAll(hoverTargets).forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
  });
}
