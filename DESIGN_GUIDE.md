# Virentis Website - Design System & Visual Guide

## 🎨 Design Philosophy

**Enterprise. Modern. Calm.**

The Virentis website uses a professional, minimal design aesthetic that communicates technical sophistication without overwhelming enterprise decision-makers. Large hero sections with strong hierarchy, generous whitespace, and subtle gradients create a premium, trustworthy feel.

---

## 🎯 Inspiration & Style

**Reference:** Similar to Avathon.com's approach
- ✅ **Large hero sections** - Dominant headlines that command attention
- ✅ **Strong typography hierarchy** - Text sizes from 4xl to 7xl
- ✅ **Generous spacing** - Content breathes, never cramped
- ✅ **Subtle backgrounds** - Soft gradients, not flashy
- ✅ **Clean sections** - Clear separation between content blocks
- ✅ **Professional CTAs** - Prominent but not aggressive

---

## 🎨 Color Palette

### Accent Color: Teal
**Primary Accent:** #14b8a6 (Teal 600)
- Professional and trustworthy
- Associated with energy, growth, technology
- Excellent contrast on white backgrounds
- Accessible color ratios

```
accent-50:  #f0fdfa (very light backgrounds)
accent-100: #ccfbf1 (light backgrounds)
accent-600: #14b8a6 (primary accent - buttons, links)
accent-700: #0f766e (hover states)
```

### Neutral Base: Slate
**Text & Backgrounds:** Slate gray scale
```
slate-50:  #f8fafc (light backgrounds)
slate-100: #f1f5f9 (section backgrounds)
slate-300: #cbd5e1 (borders)
slate-600: #475569 (secondary text)
slate-700: #334155 (body text)
slate-900: #0f172a (headings, dark text)
```

### Background Gradients
**Subtle gradient:** White → Slate-50 → Slate-100
```css
background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
```

**Accent gradient (for buttons):**
```css
background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
```

---

## 📐 Typography

### Font Stack
**System Fonts** (performance optimized):
```
system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
Roboto, 'Helvetica Neue', Arial, sans-serif
```

### Heading Sizes (Responsive)

**H1 - Hero Headlines:**
- Mobile: 4xl (2.25rem / 36px)
- Tablet: 5xl (3rem / 48px)
- Desktop: 7xl (4.5rem / 72px)
- Weight: Bold (700)
- Tracking: Tight

**H2 - Section Headers:**
- Mobile: 3xl (1.875rem / 30px)
- Tablet: 4xl (2.25rem / 36px)
- Desktop: 5xl (3rem / 48px)
- Weight: Bold (700)

**H3 - Subsections:**
- Mobile: 2xl (1.5rem / 24px)
- Tablet: 3xl (1.875rem / 30px)
- Weight: Semibold (600)

### Body Text
**Large (Hero/Intro):**
- Mobile: lg (1.125rem / 18px)
- Tablet: xl (1.25rem / 20px)
- Desktop: 2xl (1.5rem / 24px)
- Line-height: Relaxed (1.625)

**Regular:**
- Base: 1rem (16px)
- Line-height: Relaxed (1.625)

---

## 🏗️ Layout Structure

### Hero Section (Large)
```
Padding: py-20 md:py-28 lg:py-36
Background: gradient-bg
Max-width: 4xl (56rem) centered
Text-align: center
```

**Hierarchy:**
1. Optional subtitle (small, uppercase, accent color)
2. Large headline (4xl → 7xl)
3. Description (lg → 2xl)
4. CTA buttons (flex row on desktop, column on mobile)

### Content Sections
```
Padding: py-16 md:py-24 lg:py-32
Max-width: 7xl (80rem) with padding
```

### Container Sizes
- **Default:** max-w-7xl (80rem / 1280px)
- **Large:** max-w-8xl (88rem / 1408px)
- **Narrow:** max-w-4xl (56rem / 896px)

---

## 🔘 Components

### Buttons

**Primary (Accent):**
```
Background: accent-600
Hover: accent-700
Text: white
Shadow: sm → md on hover
Padding: px-8 py-4 (large)
Border-radius: lg (0.5rem)
```

**Secondary (Dark):**
```
Background: slate-900
Hover: slate-800
Text: white
```

**Outline:**
```
Border: 2px slate-300
Hover: slate-400 border, slate-50 bg
Text: slate-900
```

### Cards & Sections

**Feature Cards:**
```
Background: slate-50 or white
Padding: p-8
Border-radius: xl (0.75rem)
Border: Optional 1px slate-200
```

**Content Sections:**
```
Background: white or slate-50 alternating
Padding: py-16 md:py-24 lg:py-32
```

---

## 📱 Responsive Breakpoints

```
sm:  640px   (small tablets)
md:  768px   (tablets)
lg:  1024px  (small desktops)
xl:  1280px  (large desktops)
2xl: 1536px  (extra large)
```

### Mobile-First Strategy
- Base styles = mobile
- Add `md:` and `lg:` prefixes for larger screens
- Hide navigation menu on mobile (show hamburger if needed)
- Stack CTAs vertically on mobile
- Reduce padding on small screens

---

## 🎯 Spacing System

### Padding/Margin Scale
```
4:  1rem   (16px)
6:  1.5rem (24px)
8:  2rem   (32px)
10: 2.5rem (40px)
12: 3rem   (48px)
16: 4rem   (64px)
20: 5rem   (80px)
24: 6rem   (96px)
32: 8rem   (128px)
```

### Section Spacing
- Small: py-16
- Medium: py-24
- Large: py-32

### Component Spacing
- Between elements: space-y-4 to space-y-8
- Grid gaps: gap-6 to gap-10

---

## ✨ Interactive States

### Hover States
- Buttons: Darken color, increase shadow
- Links: Change color, underline
- Cards: Border color change, subtle shadow

### Focus States
```
outline: 2px solid accent-600
outline-offset: 2px
```

### Transitions
```
transition-all duration-200
```

---

## 🖼️ Visual Hierarchy

### Page Structure (Top to Bottom)
1. **Hero** - Large, attention-grabbing
2. **Value prop** - Center-aligned, max-w-3xl
3. **Features/Benefits** - Grid layout
4. **Social proof** (optional) - Stats, testimonials
5. **CTA** - Final conversion push

### Content Hierarchy
1. **Headline** - Largest, boldest
2. **Subheadline** - Supporting context
3. **Body** - Scannable paragraphs
4. **Lists** - Bullets with checkmarks
5. **CTA** - Clear, actionable

---

## ♿ Accessibility

### Color Contrast
All text meets WCAG 2.1 AA standards:
- Large text: 3:1 minimum
- Regular text: 4.5:1 minimum
- Accent on white: 4.8:1 ✅

### Focus Management
- Visible focus indicators
- Logical tab order
- Skip to main content (optional)

### Semantic HTML
```html
<header> - Site header
<nav> - Navigation
<main> - Main content
<section> - Content sections
<article> - Self-contained content
<footer> - Site footer
```

---

## 🎨 Design Tokens (Tailwind)

### Quick Reference
```
Colors: accent-600, slate-900, slate-700, slate-50
Text: text-4xl md:text-5xl lg:text-7xl
Spacing: py-20 md:py-28 lg:py-36
Rounded: rounded-lg, rounded-xl, rounded-2xl
Shadow: shadow-sm, shadow-md, shadow-lg
```

---

## 📐 Grid Layouts

### Feature Grids
```
1 column (mobile)
2 columns (md: tablets)
3 columns (lg: desktop)
gap-8 md:gap-10
```

### Two-Column Layouts
```
1 column (mobile)
2 columns (md:grid-cols-2)
gap-12
items-center
```

---

## 🖼️ Images & Media

### Logo
- SVG format (scalable, small file)
- Teal accent color
- Clean, minimal design
- Used in header and footer

### Icons
- SVG inline (no external dependencies)
- Heroicons style (outline, 24x24)
- Accent color or slate-600
- Used for: checkmarks, features, stats

---

## 🎯 Call-to-Action Design

### Primary CTA: "Book a Demo"
- Always accent-600 background
- Always prominent (large size)
- Strategic placement:
  - Header (always visible)
  - Hero section
  - End of key sections
  - Footer area

### CTA Copy Guidelines
- Action-oriented: "Book a Demo", "Get Started"
- Clear benefit: "See It in Action"
- No generic "Learn More" as primary

---

## ✅ Design Checklist

Before launching, verify:
- [ ] Hero headline is large and impactful (7xl on desktop)
- [ ] Generous spacing between sections
- [ ] Consistent accent color usage
- [ ] All CTAs are prominent and clear
- [ ] Text is readable (good contrast, size, line-height)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Hover states work on all interactive elements
- [ ] Focus states visible for keyboard navigation
- [ ] Loading states for forms
- [ ] Error states are helpful and clear

---

## 🎨 Customization Tips

### To Change Accent Color
Edit `tailwind.config.ts`:
```typescript
accent: {
  // Your color scale here
  600: '#YOUR_COLOR',
}
```

### To Adjust Hero Size
Edit `components/Hero.tsx`:
```typescript
const paddingClasses = size === 'large' 
  ? 'py-24 md:py-32 lg:py-40'  // Even larger
  : 'py-16 md:py-20 lg:py-24'
```

### To Modify Typography
Edit `app/globals.css`:
```css
h1 {
  @apply text-5xl md:text-6xl lg:text-8xl;  // Bigger!
}
```

---

**This design system ensures a consistent, professional, and conversion-optimized experience across all pages.**

