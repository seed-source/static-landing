# Configuration & Customization

## Project Structure

```
static-landing/
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts (e.g., BaseLayout)
│   └── pages/           # Route-based pages (auto-generated routes)
├── public/              # Static assets (copied as-is to dist/)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS customization
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Editing Content

### Hero Section
Located in `src/pages/index.astro` (main landing page). Update:
- Headline text
- Subheading
- CTA button text and links
- Background image/gradient

Example:
```astro
---
// src/pages/index.astro
import HeroSection from '../components/HeroSection.astro';
---

<HeroSection 
  title="Your Product" 
  subtitle="Short description" 
  ctaText="Get Started"
  ctaLink="/signup"
/>
```

### Pricing Tiers
Create or edit `src/components/PricingCard.astro`:
```astro
<PricingCard 
  tier="Starter"
  price="$29"
  features={['Feature 1', 'Feature 2']}
/>
```

Reference [BUSINESS_PLAN.md](../plans/BUSINESS_PLAN.md) for monetization strategy alignment.

### FAQ Content
Edit `src/components/FAQ.astro` with Astro's component syntax:
```astro
<FAQItem 
  question="How does it work?" 
  answer="..."
/>
```

### Social Proof
Add testimonials and logos in `src/components/Testimonials.astro`:
```astro
<Testimonial 
  author="Customer Name"
  company="Company"
  quote="Great product!"
/>
```

## Tailwind CSS Customization

Edit `tailwind.config.mjs` to customize colors, fonts, spacing, and breakpoints:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        brand: '#007BFF',
      },
    },
  },
};
```

## Performance & SEO

### Image Optimization

Use Astro's built-in `<Image />` component:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.png';
---

<Image src={heroImage} alt="Hero" width={1200} height={600} />
```

### Meta Tags & Open Graph

Edit `src/layouts/BaseLayout.astro` to set global metadata:
```astro
<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={pageUrl} />
</head>
```

### Sitemap Generation

Update `astro.config.mjs`:
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
});
```

### Lighthouse Optimization

**Best Practices:**
- Keep JavaScript minimal (Astro generates HTML by default)
- Optimize images (AVIF, WebP formats)
- Enable gzip compression in Nginx (included in `nginx.conf`)
- Minify CSS/HTML (automatic in `npm run build`)
- Add `canonical` tags for multi-version content

**Test Locally:**
```bash
npm run build
npm run preview
# Open http://localhost:3000 in Chrome DevTools > Lighthouse
```

## Environment Variables

Create `.env` file for build-time secrets:
```
PUBLIC_API_URL=https://api.example.com
PUBLIC_GA_ID=G-XXXXXXXXXX
SECRET_API_KEY=sk_live_XXXXX
```

Access in components:
```astro
---
const apiUrl = import.meta.env.PUBLIC_API_URL;
const apiKey = import.meta.env.SECRET_API_KEY; // Server-only
---
```

## Security Design

- ✅ Static HTML only → no runtime secret exposure
- ✅ No database → no schema migrations
- ✅ Environment variables used only at build time
- ✅ Edge-deployable with zero backend dependencies
