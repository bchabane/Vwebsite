# Virentis – Autonomous Intelligence for Renewable Asset Performance

## Project Overview

This is a production-ready marketing website for **Virentis**, built with modern web technologies to deliver a fast, SEO-friendly, and conversion-optimized experience for enterprise renewable energy operators.

**Tech Stack:** Next.js 14+ (App Router) + TypeScript + Tailwind CSS

**Why Next.js 14?**
- Server Components for optimal performance and SEO
- Built-in image optimization with `next/image`
- File-based routing with App Router for clean structure
- Server Actions for form handling without API boilerplate
- Excellent TypeScript support and developer experience
- Production-ready with zero config

## Features

✅ 8 fully responsive pages with enterprise-grade design  
✅ Component-based architecture with reusable UI components  
✅ SEO optimization (meta tags, OpenGraph, sitemap, robots.txt, JSON-LD)  
✅ Accessible (semantic HTML, ARIA labels, keyboard navigation)  
✅ Form validation with anti-spam (honeypot + rate limiting)  
✅ Demo request submissions stored via Prisma + SQLite  
✅ Performance optimized (Lighthouse-friendly)  
✅ Analytics tracking stubs  
✅ Deployment-ready

## Folder Structure

```
Vwebsite/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with header/footer
│   ├── page.tsx                  # Home page
│   ├── platform/page.tsx         # Platform page
│   ├── industries/page.tsx       # Industries page
│   ├── renewable-energy/page.tsx # Renewable Energy page
│   ├── company/page.tsx          # Company (About) page
│   ├── careers/page.tsx          # Careers page
│   ├── partners/page.tsx         # Partners page
│   ├── book-a-demo/              # Demo booking
│   │   ├── page.tsx
│   │   └── actions.ts            # Server action for form
│   ├── api/
│   │   └── submissions/route.ts  # API endpoint (optional)
│   ├── globals.css               # Global styles + Tailwind
│   └── sitemap.ts                # Dynamic sitemap
├── components/                   # Reusable components
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── Hero.tsx
│   ├── FeatureGrid.tsx
│   ├── UseCaseSection.tsx
│   ├── Testimonial.tsx
│   ├── StatsStrip.tsx
│   └── ContactForm.tsx
├── lib/
│   ├── analytics.ts              # Analytics tracking stub
│   ├── prisma.ts                 # Prisma client singleton
│   └── rate-limit.ts             # Simple rate limiting
├── prisma/
│   └── schema.prisma             # Database schema
├── public/
│   ├── robots.txt
│   └── logo.svg
├── .env.example                  # Environment variables template
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone or extract the repository**

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env` as needed (defaults work for local development).

4. **Initialize the database:**

```bash
npx prisma generate
npx prisma db push
```

This creates a local SQLite database at `prisma/dev.db`.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This command will:
- Type-check TypeScript
- Build optimized production bundles
- Generate static pages where possible

### Start Production Server

```bash
npm start
```

## Environment Variables

See `.env.example` for all available variables:

- `DATABASE_URL`: Database connection string (default: SQLite)
- `NEXT_PUBLIC_SITE_URL`: Your production domain (for sitemap/SEO)

## Form Submissions

Demo requests are stored in the SQLite database (`prisma/dev.db`). To view submissions:

```bash
npx prisma studio
```

This opens a GUI at [http://localhost:5555](http://localhost:5555).

## Anti-Spam Features

- **Honeypot field**: Hidden field that bots will fill
- **Rate limiting**: Max 3 submissions per IP per hour (in-memory, resets on server restart)

## SEO

- Each page has unique title and description
- OpenGraph and Twitter Card meta tags
- Sitemap auto-generated at `/sitemap.xml`
- `robots.txt` allows all crawlers
- JSON-LD structured data (Organization + WebSite)

## Analytics

Analytics tracking is stubbed in `lib/analytics.ts`. Integrate your provider (Google Analytics, Plausible, etc.) by implementing the `track()` function.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Works on any platform supporting Next.js (Netlify, Railway, self-hosted, etc.). Ensure:
- Node.js 18+ available
- Environment variables configured
- Database accessible (or use hosted DB)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features

## License

Proprietary – Virentis © 2026

---

**Need help?** Contact the engineering team.

