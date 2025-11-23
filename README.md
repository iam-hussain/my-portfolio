# Jakir Hussain - Portfolio Website

A premium, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a modern dark theme with gradient effects, smooth animations, and a fully responsive design.

## 🚀 Features

- **6 Main Sections:**
  - Snapshot (Hero section with animated gradient orb)
  - Value Pillars (Why hire me - 4 core strengths)
  - Impact Gallery (Metrics-first achievements)
  - Storyline (Experience timeline with case studies)
  - Playground (Side projects showcase)
  - Contact (Contact form and quick actions)

- **Design & UX:**
  - Dark theme with vibrant gradients
  - Smooth animations and micro-interactions
  - Fully responsive (mobile, tablet, desktop)
  - Accessibility-first (WCAG AA compliant)
  - SEO optimized with Open Graph and JSON-LD

- **Tech Stack:**
  - Next.js 16 (App Router)
  - TypeScript
  - Tailwind CSS v4
  - shadcn/ui components
  - Framer Motion (animations)
  - React Hook Form + Zod (form validation)

## 📦 Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## ✏️ Content Editing Guide

All content is stored in TypeScript data files under `lib/data/`. To update content, edit these files:

### Personal Information
**File:** `lib/data/personal-info.ts`

Update name, title, contact info, social links, and resume URL.

### Stat Chips (Hero Section)
**File:** `lib/data/stat-chips.ts`

Modify the stat chips displayed in the hero section (e.g., "8+ yrs experience", "FinTech · Open Finance").

### Value Pillars
**File:** `lib/data/value-pillars.ts`

Update the 4 core value pillars with descriptions and tech badges.

### Impact Metrics
**File:** `lib/data/impact-metrics.ts`

Add or modify achievement metrics (e.g., "+27% User Engagement").

### Work Experience
**File:** `lib/data/experience.ts`

Add, remove, or update work experience entries. Each entry includes:
- Company name, role, period, location
- Bullet points describing achievements
- Tech stack
- Optional case study ID

### Case Studies
**File:** `lib/data/case-studies.ts`

Create detailed case studies that can be linked from experience entries. Each case study includes:
- Context
- What I Did (bullet points)
- Impact (bullet points)
- Tech stack

### Side Projects
**File:** `lib/data/projects.ts`

Add or update side projects with:
- Name, tagline, description
- Status (Live, WIP, or Prototype)
- Links (live site, GitHub, demo)
- Tech stack

### Type Definitions
**File:** `lib/types/index.ts`

If you need to add new fields to any data structure, update the TypeScript interfaces here first.

## 🎨 Customization

### Colors & Theme
Edit `app/globals.css` to customize:
- Color palette (CSS variables in `:root`)
- Gradient combinations
- Animation keyframes

### Components
All components are in `components/` directory:
- Section components: `components/snapshot/`, `components/value-pillars/`, etc.
- Shared components: `components/shared/`
- UI components: `components/ui/` (shadcn/ui)

### Styling
The project uses Tailwind CSS v4. Custom utilities are defined in `globals.css`.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted (Node.js server)

### Environment Variables

No environment variables are required for basic functionality. If you add email functionality to the contact form, you'll need to configure:
- Email service API keys (e.g., Resend, SendGrid)
- Add to `.env.local`:
```
NEXT_PUBLIC_EMAIL_SERVICE_API_KEY=your_key_here
```

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles, theme, animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── snapshot/            # Hero section
│   ├── value-pillars/       # Value pillars section
│   ├── impact-gallery/      # Impact metrics section
│   ├── storyline/           # Experience timeline
│   ├── playground/          # Side projects
│   ├── contact/             # Contact form
│   ├── shared/              # Navigation, footer, etc.
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── data/                # All content data files
│   ├── types/                # TypeScript type definitions
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── PROJECT_PLAN.md          # Detailed implementation plan
```

## 🛠️ Development

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📝 Notes

- The contact form currently logs to console. To enable email sending, integrate with an email service (Resend, SendGrid, etc.) in `components/contact/contact-form.tsx`.
- Resume PDF should be placed in `public/` directory and referenced in `lib/data/personal-info.ts`.
- All sections are fully responsive and tested on mobile, tablet, and desktop breakpoints.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Jakir Hussain**
- Website: [iam-hussain.site](https://iam-hussain.site)
- LinkedIn: [linkedin.com/in/iam-hussain](https://linkedin.com/in/iam-hussain)
- GitHub: [github.com/iam-hussain](https://github.com/iam-hussain)
