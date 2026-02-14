# Static Landing Template

A production-ready Astro static site generator template for building fast, responsive landing pages aligned with the Seed & Source design system.

## Overview

This template provides:
- **Astro SSG**: Static site generation for blazing-fast performance
- **Tailwind CSS**: Utility-first CSS with Seed & Source design tokens
- **TypeScript**: Full type safety for components
- **Responsive Design**: Mobile-first approach with all components
- **Pre-built Sections**: Hero, Features, Pricing, FAQ, Social Proof, CTA

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
static-landing/
├── src/
│   ├── pages/
│   │   └── index.astro          # Main landing page
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with header/footer
│   ├── components/
│   │   ├── Hero.astro           # Hero section
│   │   ├── Features.astro       # Features grid
│   │   ├── Pricing.astro        # Pricing tiers
│   │   ├── FAQ.astro            # FAQ accordion
│   │   ├── SocialProof.astro    # Testimonials & metrics
│   │   └── CTA.astro            # Call-to-action section
│   └── styles/
│       └── global.css            # Global styles & tailwind directives
├── public/                        # Static assets
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies

## Design Tokens

The project uses Seed & Source design tokens:

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Emerald (#10B981)
- **Dark Background**: #0F172A
- **Text**: Gray (#1F2937)

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Responsive Sizing**: Mobile-first approach

## Customization Guide

### Hero Section
Edit `src/components/Hero.astro` to customize:
- Title and subtitle
- Call-to-action buttons
- Hero image/demo area

### Features
Edit `src/components/Features.astro` to:
- Add/remove features
- Change icons
- Update descriptions

### Pricing
Edit `src/components/Pricing.astro` to:
- Modify pricing tiers
- Update feature lists
- Change call-to-action text

### FAQ
Edit `src/components/FAQ.astro` to:
- Add/remove questions
- Update answers

### Styling
Modify `tailwind.config.mjs` to adjust:
- Colors
- Fonts
- Breakpoints
- Custom utilities

## Building for Production

The Astro build process automatically:
- Optimizes images
- Minifies CSS and JavaScript
- Generates static HTML

Deploy the `dist/` folder to your hosting provider:
- Vercel
- Netlify
- AWS S3
- GitHub Pages
- Any static hosting service

## Best Practices

1. **Performance**: Keep JavaScript minimal. Astro strips all JS by default.
2. **Accessibility**: All components include semantic HTML and ARIA labels.
3. **SEO**: Use proper heading hierarchy and meta tags.
4. **Mobile-First**: Design for mobile, enhance for larger screens.
5. **Customization**: Leverage Tailwind utilities instead of custom CSS when possible.

## Dependencies

- `astro`: Static site generator
- `@astrojs/tailwind`: Tailwind CSS integration
- `tailwindcss`: Utility-first CSS framework
- `typescript`: Type safety

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Seed & Source](https://seed-source.dev)
