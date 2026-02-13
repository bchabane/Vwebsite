# Quick Verification Checklist

Use this checklist to verify all changes are working correctly.

## Visual Inspection (2 minutes)

### Homepage
- [ ] Logo is slate color (not teal)
- [ ] "Book a Demo" button is slate-700 (not teal)
- [ ] Hero section has subtle gradient background
- [ ] All sections properly spaced

### Header Navigation
- [ ] Desktop: Hover "Industries" shows dropdown with 2 items
- [ ] Desktop: Hover "Company" shows dropdown with 3 items
- [ ] Mobile: Hamburger menu icon appears on small screens
- [ ] Mobile: Nested items show under Industries and Company
- [ ] Active page is highlighted correctly

### Footer
- [ ] Background is pure black (not dark blue)
- [ ] LinkedIn icon is visible
- [ ] LinkedIn icon turns white on hover
- [ ] Link opens https://www.linkedin.com/company/virentis in new tab
- [ ] Footer sections: Product, Industries, Company, Resources

### All Pages Color Check
- [ ] Industries page - checkmarks are slate-600 (not teal)
- [ ] Partners page - checkmarks are slate-600 (not teal)
- [ ] Careers page - badges are slate-100 bg with slate-700 text
- [ ] Book a Demo page - icon circles are slate-100 bg (not teal)
- [ ] Platform page - all elements use slate colors
- [ ] Renewable Energy page - all elements use slate colors
- [ ] Company page - all elements use slate colors

## Functional Testing (5 minutes)

### Navigation
- [ ] All dropdown menus open and close properly
- [ ] Clicking dropdown items navigates to correct page
- [ ] Mobile menu opens/closes with hamburger icon
- [ ] "Book a Demo" button navigates to /book-a-demo
- [ ] All footer links work correctly

### Keyboard Navigation
- [ ] Tab key cycles through navigation items
- [ ] Enter opens dropdowns and follows links
- [ ] Focus states are visible (outline around items)
- [ ] Can navigate entire menu without mouse

### Form Testing
- [ ] Go to /book-a-demo
- [ ] Fill out contact form
- [ ] Input borders are slate (not teal) when focused
- [ ] Submit button is slate-700 (not teal)
- [ ] Form validation works
- [ ] Error states show in red

## Responsive Testing (3 minutes)

### Desktop (>1024px)
- [ ] Dropdown navigation visible
- [ ] No hamburger menu
- [ ] All columns display properly
- [ ] Footer shows 5 columns

### Tablet (768px - 1024px)
- [ ] Hamburger menu appears
- [ ] Navigation collapses properly
- [ ] Content remains readable
- [ ] Footer responsive

### Mobile (<768px)
- [ ] All text readable
- [ ] Buttons properly sized
- [ ] Forms stack vertically
- [ ] Footer stacks properly

## Accessibility Check (2 minutes)

- [ ] All images have alt text
- [ ] Links have descriptive text or aria-labels
- [ ] Form inputs have labels
- [ ] Error messages are announced
- [ ] Contrast ratios look good (no faint text)
- [ ] Keyboard navigation works everywhere

## Browser Testing (Optional)

- [ ] Chrome/Edge - Everything works
- [ ] Firefox - Everything works
- [ ] Safari - Everything works
- [ ] Mobile Safari - Everything works
- [ ] Mobile Chrome - Everything works

## Color Verification

### Should NOT see these colors:
- ❌ Teal (#14b8a6)
- ❌ Bright green
- ❌ Dark blue-gray (slate-900 backgrounds)

### Should see these colors:
- ✅ Slate-600 (#475569) - icons, buttons
- ✅ Slate-700 (#334155) - primary buttons
- ✅ Pure black (#000000) - footer, stats strip
- ✅ White/gray backgrounds - main content

## Quick Command Tests

```bash
# Development server
npm run dev
# Should start without errors

# Production build
npm run build
# Should complete successfully with no errors

# Check for old colors in code
grep -r "#14b8a6" . --exclude-dir=node_modules
# Should return no results

grep -r "bg-accent-600" . --exclude-dir=node_modules
# Should return no results

grep -r "text-accent-600" . --exclude-dir=node_modules
# Should return no results
```

## Sign-Off

- [ ] All visual checks passed
- [ ] All functional tests passed
- [ ] All responsive tests passed
- [ ] All accessibility checks passed
- [ ] No console errors
- [ ] Build completes successfully

**Tested by:** _______________  
**Date:** _______________  
**Status:** ⬜ Pass / ⬜ Fail  

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________

