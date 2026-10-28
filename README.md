# Infinity Events Dubai — Next.js Application

A modern, high-performance, accessible, and SEO-optimized rebuild of the **Infinix Infinity Events Dubai** website using Next.js 15 (App Router), React 19, TypeScript (strict mode), and Tailwind CSS.

Faithfully recreates the visual identity, branding, interactions, media assets, and workflows of the original website.

---

## 🌟 Key Features

- **Next.js App Router**: Built with modern Server and Client Components architecture.
- **Strict TypeScript**: Clean data types for services, portfolio, summit routes, and form states.
- **Tailwind CSS Design Tokens**: Centralized luxury black & gold palette (`--bg: #07060a`, `--gold: #d4af5c`, etc.), Anton, Playfair Display, and Manrope typography.
- **Hero Video & Poster**: Lazy-loaded hero video (`dubai-night.mp4`) with poster fallback, word rotator, and animated statistics.
- **Interactive Portfolio & Lightbox**: Category filtering (Awards, Roadshows, Corporate, Spotlight) with an accessible modal lightbox supporting keyboard navigation (Esc, Arrows) and mobile swipe gestures.
- **3-Step Event Planner**: Interactive guest count range slider with dynamic fill, event type cards, service toggles, live brief summary, and direct WhatsApp handoff (`wa.me`).
- **Contact Form & API**: Full client and server-side validation using **Zod** and **React Hook Form**, anti-spam honeypot, configurable external CRM/Formspree webhook via `CONTACT_FORM_ENDPOINT`, and fallback to email.
- **Infinity NextGen Business Summit 2026**: Complete dedicated page (`/next-gen-business-summit`) with countdown timer, 4 pillars, route pricing comparison, 4-step path timeline, and Founder Challenge showcase.
- **Complete SEO & Metadata**: Next.js Metadata API, dynamic `sitemap.ts`, `robots.ts`, Open Graph / Twitter cards, and Schema.org JSON-LD (Organization, LocalBusiness, FAQPage, BusinessEvent, BreadcrumbList).
- **Accessibility & Motion**: Semantic headings, accessible ARIA accordions and dialogs, focus indicators, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```
infinity-events-web/
├── public/
│   ├── assets/
│   │   ├── img/            # Brand logos, posters, portfolio webp images
│   │   └── video/          # dubai-night.mp4 background video
│   ├── favicon.ico
│   ├── icon-32.png, icon-180.png, icon-192.png, icon-512.png
│   ├── og-image.jpg
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── api/contact/    # Contact form API endpoint with Zod validation
│   │   ├── next-gen-business-summit/ # Dedicated Summit Page
│   │   ├── globals.css     # Design tokens & core animations
│   │   ├── layout.tsx      # Root layout, fonts, header, footer
│   │   ├── not-found.tsx   # Custom 404 page
│   │   ├── page.tsx        # Homepage in exact section order
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic XML sitemap
│   ├── components/
│   │   ├── forms/          # EventPlannerForm, ContactForm
│   │   ├── layout/         # SiteHeader, SiteFooter, MobileNavigation, Container
│   │   ├── sections/       # Hero, Marquee, About, Services, NextGen, Portfolio, etc.
│   │   ├── seo/            # JsonLd structured data schemas
│   │   └── ui/             # Button, Accordion, Lightbox, ScrollToTop, CustomCursor
│   ├── config/             # Site configuration, contact details, licence info
│   ├── data/               # Typed data for navigation, services, portfolio, faqs
│   ├── lib/                # Utilities, WhatsApp URL generator, Zod schemas
│   └── types/              # TypeScript interfaces
├── .env.example
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+ (Node v22 recommended)
- npm or yarn or pnpm

### 2. Installation
```bash
# Inside the infinity-events-web directory
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Configure your optional external CRM or Formspree endpoint:
```env
CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
```

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 🛠️ Build & Verification Commands

```bash
# Linting
npm run lint

# TypeScript verification
npx tsc --noEmit

# Production build
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment

The application can be deployed on any modern hosting provider:
- **Vercel**: Simply connect the GitHub repository or deploy via `vercel deploy`.
- **Cloudflare Pages / Netlify**: Standard Next.js runtime build.
- **Node Server / Docker / VPS**: Run `npm run build && npm run start`.
