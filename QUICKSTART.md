# Virentis Website - Quick Start Guide

## ⚡ Quick Install (After Node.js is installed)

```powershell
# Navigate to the project directory
cd C:\Users\bchabane\perso\Vwebsite

# Install dependencies
npm install

# Set up database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Visit: http://localhost:3000

## 📦 What's Included

✅ **8 Pages**
- `/` - Home
- `/platform` - Platform overview
- `/industries` - Target industries
- `/renewable-energy` - Wind, solar, storage
- `/company` - About page
- `/careers` - Careers page
- `/partners` - Partners page
- `/book-a-demo` - Demo request form

✅ **Features**
- Responsive design (mobile, tablet, desktop)
- SEO optimized (meta tags, sitemap, structured data)
- Form with validation + anti-spam
- Demo requests stored in SQLite database
- Accessibility compliant (WCAG 2.1)
- Performance optimized (Lighthouse-ready)
- Analytics tracking stubs

✅ **Tech Stack**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma + SQLite
- Server Actions

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the accent color (currently teal).

### Content
All page content is in `app/*/page.tsx` files. Edit directly.

### Components
Reusable components are in `components/` folder.

### Styling
Global styles in `app/globals.css`.

## 🗄️ Database

Demo submissions are stored in `prisma/dev.db`.

View submissions:
```powershell
npx prisma studio
```

Opens GUI at: http://localhost:5555

## 🚀 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy (automatic)

### Other Platforms
Works on any Node.js hosting:
- Netlify
- Railway
- AWS
- Azure
- Self-hosted

## 📝 Environment Variables

Copy `.env.example` to `.env`:
```powershell
Copy-Item .env.example .env
```

Required for production:
- `DATABASE_URL` - Database connection
- `NEXT_PUBLIC_SITE_URL` - Your domain

## 🧪 Testing Build

Before deploying, test the production build:

```powershell
npm run build
npm start
```

Build must succeed with no errors.

## 📊 Analytics

Stub functions are in `lib/analytics.ts`. Integrate your provider:
- Google Analytics
- Plausible
- Fathom
- Mixpanel

## 🔒 Security Features

- Honeypot field (anti-spam)
- Rate limiting (3 submissions/hour per IP)
- Input validation (client + server)
- XSS protection (React escaping)

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Common Issues

**"npm not found"**
- Install Node.js from https://nodejs.org/

**"Port 3000 in use"**
```powershell
npm run dev -- -p 3001
```

**Build errors**
```powershell
Remove-Item -Recurse -Force node_modules, .next
npm install
npm run build
```

## 📚 Documentation

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Prisma: https://www.prisma.io/docs

## 🎯 Performance Checklist

- [x] Image optimization (next/image)
- [x] Font optimization
- [x] Minimal JavaScript
- [x] Server Components
- [x] Static generation where possible
- [x] Proper caching headers

## ✅ SEO Checklist

- [x] Unique titles/descriptions per page
- [x] OpenGraph tags
- [x] Twitter Card tags
- [x] Sitemap.xml
- [x] Robots.txt
- [x] JSON-LD structured data
- [x] Semantic HTML
- [x] Mobile-friendly

## 🌐 Pages Overview

| Route | Purpose | CTA |
|-------|---------|-----|
| `/` | Homepage - value prop | Book a Demo |
| `/platform` | Product details | Request Demo |
| `/industries` | Target customers | Book a Demo |
| `/renewable-energy` | Technology focus | Request Demo |
| `/company` | About/mission | View Careers, Book Demo |
| `/careers` | Jobs | Get in Touch |
| `/partners` | Ecosystem | Get in Touch |
| `/book-a-demo` | Lead capture | Submit form |

## 💡 Tips

1. **Content updates**: Edit page files directly, no CMS needed
2. **New pages**: Create `app/your-page/page.tsx`
3. **Images**: Add to `public/` folder
4. **Forms**: Extend ContactForm component
5. **Styles**: Use Tailwind classes or add to globals.css

---

**Ready to launch?** Follow SETUP.md for detailed instructions.

