# The Kusanali — Reimagined 🌿

> Personal Blog, Knowledge Archive, and Creative Workspace inspired by **Nahida**, **Sumeru**, nature, dreams, and interactive technology. Built with **Astro 5**, **TypeScript**, **Tailwind CSS**, and modern client-side motion design for **GitHub Pages**.

---

## 🏛 Architecture Overview

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / 0KB runtime JS for prose)
- **Styling**: Tailwind CSS + Custom CSS Variables (`HYWenHei Extended` & Sumeru botanical palette)
- **Dynamic Gradient Engine**: Scroll-reactive GPU-accelerated ambient mesh with per-section color shifts
- **Content System**: Markdown-driven Astro Content Collections with strict Zod validation
- **Deployment**: GitHub Actions static build pipeline targeting `https://kusanali5002.github.io/`

```
├── public/
│   ├── assets/              # Categorized brand, nahida, and workspace assets
│   ├── fonts/               # HYWenHei Extended typography
│   ├── images/              # Media archive & backward-compatible image paths
│   └── robots.txt           # Static SEO configuration
├── src/
│   ├── content/
│   │   ├── activities/      # Markdown blog articles (Read / Learn / Think)
│   │   └── workspace/       # Markdown creative projects (Make / Create / Show)
│   ├── content.config.ts    # Zod schemas & Astro glob loaders
│   ├── components/
│   │   ├── common/          # Navbar, MobileNav, Footer, ThemeToggle, DynamicGradient, Cursor
│   │   ├── activities/      # ActivityCard, ActivitySearch, TagFilter
│   │   ├── workspace/       # MediaProjectCard, SocialEmbed, VideoPlayer, ImageGallery, ProjectModal
│   │   └── home/            # Hero, Introduction, LatestActivities, WorkspacePreview, NahidaTeaser
│   ├── layouts/
│   │   ├── BaseLayout.astro # Site shell, theme initialization (no FOUC), dynamic gradient
│   │   └── ArticleLayout.astro # Editorial long-form reading typography & related links
│   └── pages/               # Clean URL static routes (Home, Activities, Workspace, Nahida, About, Contact)
```

---

## 🚀 1. How to Run Locally

Clone the repository and install dependencies:

```bash
npm install
npm run dev
```

Open your browser at `http://localhost:4321/`.

---

## 🔨 2. How to Build for Production

```bash
npm run build
```

Static output will be compiled into the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 3. How to Deploy to GitHub Pages

The repository includes an automated GitHub Actions deployment workflow in `.github/workflows/deploy.yml`.

1. Push your changes to the `main` or `master` branch.
2. In your GitHub repository settings, go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push will automatically trigger a clean Astro static build and deploy to `https://USERNAME.github.io/`.

---

## ✍️ 4. How to Create a New Activity (Article)

Add a new `.md` file inside `src/content/activities/`:

```markdown
---
title: "My New Article Title"
description: "A concise, engaging summary of the article."
date: "2026-09-15"
tags:
  - "Genshin Impact"
  - "Analysis"
category: "Knowledge"
cover: "/images/nahida_stats_image.jpeg"
author: "Ha Manh Dung (Dun)"
featured: false
---

Your markdown content here...
Use standard markdown: ## headings, tables, blockquotes, code blocks, and images.
```

The article will automatically appear in:
- The Activities index listing
- Client-side search and category filters
- Related articles on similar posts
- Homepage latest entries

---

## 🎨 5. How to Create a New Workspace Project

Workspace items live inside `src/content/workspace/`. The media renderer automatically determines how to present the project based on the `type` and metadata.

### 6. Supported Media Types

| Type | Description | Key Fields |
| :--- | :--- | :--- |
| `social` | Official embed (TikTok, YouTube, Instagram) | `platform`, `url`, `thumbnail`, `fallbackVideo` |
| `video` | Native HTML5 video stored in repo or CDN | `media`, `poster`, `source` |
| `gallery`| Multi-image lightbox showcase | `images: [...]`, `thumbnail` |
| `image`  | Single visual study / artwork | `thumbnail` or `media`, `aspectRatio` |
| `website`| Interactive web project or simulator | `url`, `thumbnail`, `source` |
| `project`| General creative experiment | `thumbnail`, `source` |

---

### 7. How to Add a TikTok Video

```markdown
---
title: "Sumeru Dreams Motion Graphics"
description: "A short-form motion design experiment exploring rhythmic typography."
date: "2026-08-15"
type: "social"
platform: "tiktok"
url: "https://www.tiktok.com/@kusanali.workstation/video/123456"
thumbnail: "/images/nahida.jpg"
tags:
  - "Motion Graphics"
  - "TikTok"
aspectRatio: "9:16"
source:
  platform: "TikTok"
  url: "https://www.tiktok.com/@kusanali.workstation"
  label: "Watch on TikTok"
---

Project notes and reflections go here...
```

---

### 8. How to Add a YouTube Video

```markdown
---
title: "Endgame Mechanics & Motion Guide"
description: "A deep dive video breaking down Memory of Chaos rotation choreography."
date: "2026-07-28"
type: "social"
platform: "youtube"
url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
thumbnail: "/images/moc3.4.png"
tags:
  - "YouTube"
  - "HSR"
  - "Guide"
aspectRatio: "16:9"
---

Breakdown description and production workflow notes...
```

---

### 9. How to Add Instagram Content

```markdown
---
title: "Creative Reel Study"
description: "Visual design reel published to Instagram."
date: "2026-06-01"
type: "social"
platform: "instagram"
url: "https://www.instagram.com/p/EXAMPLE_ID/"
thumbnail: "/images/nahida.jpg"
tags:
  - "Instagram"
  - "Design"
---
```

---

### 10. How to Add a Local Native Video

Place your video in `public/assets/workspace/videos/` and poster in `public/assets/workspace/posters/`:

```markdown
---
title: "Experimental Botanical Micro-Animation"
description: "A generative botanical motion study."
date: "2026-06-18"
type: "video"
media: "/assets/workspace/videos/animation.mp4"
poster: "/images/kalpalata-lotus.webp"
tags:
  - "Motion Design"
  - "Animation"
aspectRatio: "16:9"
source:
  platform: "TikTok"
  url: "https://www.tiktok.com/@kusanali.workstation"
  label: "Original TikTok Cut"
---
```

---

### 11. How to Add a Hybrid Social Project (Official Embed + Local Fallback)

```markdown
---
title: "Kinetic Typography Showcase"
description: "Combines official social delivery with a local fallback video player."
date: "2026-05-12"
type: "social"
platform: "tiktok"
url: "https://www.tiktok.com/@kusanali.workstation"
fallbackVideo: "/assets/workspace/videos/project.mp4"
poster: "/images/March7th_picture.jpg"
thumbnail: "/images/March7th_picture.jpg"
tags:
  - "Motion Graphics"
---
```

---

### 12. How to Add an Image Gallery

```markdown
---
title: "Visual Studies: Sumeru Flora"
description: "A curated gallery exploring botanical iconography."
date: "2026-04-20"
type: "gallery"
images:
  - "/images/Nahida_Icon.webp"
  - "/images/kalpalata-lotus.webp"
  - "/images/nahida_talents_image.jpeg"
thumbnail: "/images/Nahida_Icon.webp"
tags:
  - "Visual Design"
  - "Gallery"
---
```

---

### 13. How to Change Theme Colors

Colors and gradients are controlled via CSS custom properties in `src/styles/global.css`:

```css
:root {
  /* Light Theme */
  --bg-primary: #fcfbf7;
  --text-primary: #18281d;
  --accent-green: #2d6b45;
  --accent-mint: #4ba677;
  --accent-gold: #b38827;
}

.dark {
  /* Dark Theme */
  --bg-primary: #09110d;
  --text-primary: #ecf5ef;
  --accent-green: #52b77c;
  --accent-mint: #7ee8b0;
  --accent-gold: #dfba60;
}
```

---

### 14. How to Add Translations (English + Vietnamese Architecture)

The content architecture is structured to support bilingual Markdown files:
1. Write English articles in `src/content/activities/my-article.md`.
2. For Vietnamese, create localized markdown files (e.g. `my-article.vi.md`) or use a build-time translation step into a separate directory.
3. No external translation API credentials or tokens are exposed to client-side JavaScript.

---

## 🔒 Security & Privacy

- **Zero Secrets in Frontend**: No GitHub Personal Access Tokens (PAT), OpenAI keys, or private credentials are contained in client code.
- **No Scraping or Fake Metrics**: Social cards rely on official embeds or explicit frontmatter metadata. No arbitrary scrapers or artificial counts.
- **Strict Privacy**: YouTube embeds use `youtube-nocookie.com`.
