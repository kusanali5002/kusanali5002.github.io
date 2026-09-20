# The Kusanali - Dun Official Webpage

> Personal Blog, Archive, and Creative Workspace inspired by **Nahida**theme. Built with **Astro 5**, **TypeScript**, **Tailwind CSS**, and modern client-side motion design for **GitHub Pages**.

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
│   │   ├── activities/      # Markdown blog articles
│   │   └── workspace/       # Markdown creative projects
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
