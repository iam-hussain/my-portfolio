# Jakir Hussain — Portfolio

A premium portfolio website for **Jakir Hussain**, Senior Full-Stack & AI Platform Engineer. Built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui. Optimized for traditional SEO, AI discoverability (LLM indexing), and rich search results.

**Live:** [iam-hussain.site](https://iam-hussain.site)

---

## Features

### Sections

- **Hero** — Snapshot hero with animated gradient, role headline, and CTAs (View Projects, Contact, Resume)
- **Tech Strip** — Horizontal scroll of technologies (LangChain, LangGraph, RAG, Node.js, TypeScript, etc.)
- **About** — AI Platform Engineering & Full-Stack Development overview with highlight cards
- **Featured Projects** — Enterprise AI platforms, fintech systems, and production applications with case studies
- **Experience** — Timeline of work history (Emirates NBD, The New Yorker, etc.)
- **Skills** — Grouped capability clusters (AI Engineering, Backend, Frontend, Data, Infrastructure)
- **Contact** — CTA with Email, LinkedIn, GitHub, and footer

### Design & UX

- Dark/light theme toggle with persistent preference
- Smooth animations (Framer Motion)
- Fully responsive (mobile, tablet, desktop)
- Theme-aware scrollbars
- Skip-to-content link for accessibility
- Semantic HTML and ARIA labels

### SEO & AI Discoverability

- Full metadata (title, description, keywords, OpenGraph, Twitter Card)
- JSON-LD structured data (Person, WebSite, WebPage, CreativeWork, SoftwareSourceCode)
- `robots.txt` with AI crawler support (GPTBot, Claude-Web, PerplexityBot, Google-Extended)
- `sitemap.xml` with section anchors
- Target keywords: AI Engineer, LangChain Developer, RAG Engineer, Node.js AI Platform Engineer, etc.

---

## Tech Stack

| Category   | Technologies                                      |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router), React 19                 |
| Language   | TypeScript 5                                      |
| Styling    | Tailwind CSS v4, shadcn/ui (Radix UI)              |
| Animation  | Framer Motion                                     |
| Forms      | React Hook Form, Zod, @hookform/resolvers         |
| Fonts      | Geist, Geist Mono (next/font)                     |

---

## Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone <repository-url>
cd my-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Content Editing

### Site Configuration

| File                    | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| `src/config/site.ts`    | Personal info, hero copy, nav, CTAs, links   |
| `src/config/metadata.ts`| SEO metadata, OpenGraph, Twitter, keywords  |

### Data Files

| File                         | Purpose                          |
| ---------------------------- | -------------------------------- |
| `lib/data/featured-projects.ts` | Featured projects with summaries, tech stack, case study IDs |
| `lib/data/experience.ts`     | Work experience timeline         |
| `lib/data/skill-clusters.ts` | Skills grouped by category       |
| `lib/data/case-studies.ts`   | Detailed case studies for projects |
| `lib/data/tech-strip.ts`     | Technologies in hero tech strip  |

### Resume

Place your resume PDF in `public/` and set the path in `src/config/site.ts`:

```ts
links: {
  resumeUrl: '/your-resume.pdf',
  // ...
}
```

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css       # Theme, animations, scrollbar
│   ├── layout.tsx        # Root layout, metadata, JSON-LD
│   ├── page.tsx          # Main page
│   ├── robots.ts         # robots.txt (AI crawlers)
│   └── sitemap.ts        # sitemap.xml
├── components/
│   ├── snapshot/         # Hero section
│   ├── tech-strip/       # Tech badges strip
│   ├── about/            # About section
│   ├── featured-projects/
│   ├── storyline/       # Experience timeline
│   ├── skills/
│   ├── contact/
│   ├── shared/           # Nav, footer, theme toggle, scroll-to-top
│   ├── theme/            # ThemeProvider
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── data/             # Content data files
│   ├── seo/              # Structured data (JSON-LD)
│   ├── types/
│   └── utils.ts
├── src/config/           # site.ts, metadata.ts
├── public/
│   ├── share.jpg         # OpenGraph image (1200×630)
│   ├── favicon.svg
│   └── manifest.json
└── docs/
    └── SEO_IMPROVEMENTS.md
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Deploy (auto-detects Next.js)

### Environment Variables

No environment variables required for basic functionality. For contact form email delivery, add your email service API key to `.env.local`.

---

## Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start dev server         |
| `npm run build`     | Production build         |
| `npm run build:analyze` | Build + bundle analyzer |
| `npm start`         | Start production server  |
| `npm run lint`      | Run ESLint               |

---

## Author

**Jakir Hussain** — Senior Full-Stack & AI Platform Engineer

- Website: [iam-hussain.site](https://iam-hussain.site)
- LinkedIn: [linkedin.com/in/iam-hussain](https://linkedin.com/in/iam-hussain)
- GitHub: [github.com/iam-hussain](https://github.com/iam-hussain)

---

## License

Private and proprietary.
