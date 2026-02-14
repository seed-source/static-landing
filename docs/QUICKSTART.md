# Quick Start Guide

## Overview

The **static-landing** template is a production-ready Astro-based static site generator for building high-performance landing pages within the Seed & Source stack. It generates zero-JavaScript static HTML files optimized for SEO, speed, and deployment on edge networks.

**Key Features:**
- ⚡ Static HTML generation (instant page loads)
- 🎨 Tailwind CSS for styling
- 🚀 Zero client-side JavaScript by default
- 📱 Mobile-responsive design
- 🔍 SEO-optimized structure
- 🐳 Docker-ready with Nginx serving
- 📊 Perfect Lighthouse scores (potential)

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9.x or **pnpm** 8.x (package manager)
- **Docker** (optional; for containerized deployment)

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   # OR with pnpm:
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   This launches Astro's dev server (default: `http://localhost:3000`) with hot module reloading (HMR).

3. **Build Static Site**
   ```bash
   npm run build
   ```
   Generates optimized static files in the `dist/` directory.

4. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Serves the `dist/` folder locally to verify production output before deployment.

### Command Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI directly |

---

## Maintenance & Development

### Linting & Formatting

**ESLint** (optional):
```bash
npm install --save-dev eslint @astrojs/eslint
npm run lint
```

**Prettier** (code formatting):
```bash
npm install --save-dev prettier prettier-plugin-astro
npm run format
```

Add to `package.json`:
```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

### Testing

Astro projects typically don't require backend testing. For component testing:

```bash
npm install --save-dev vitest @testing-library/astro
```

Create `src/components/__tests__/HeroSection.test.ts`:
```typescript
import { render } from '@testing-library/astro';
import HeroSection from '../HeroSection.astro';

it('renders hero section', async () => {
  const { container } = await render(HeroSection);
  expect(container.querySelector('h1')).toBeDefined();
});
```

Run: `npm test`

### Dependency Updates

Keep dependencies current:
```bash
npm outdated           # Check for updates
npm update             # Update to latest minor/patch
npm audit fix          # Fix security vulnerabilities
```
