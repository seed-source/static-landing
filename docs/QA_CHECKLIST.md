# QA Checklist: Landing Template

Follow these steps to ensure every landing page built with the Seed & Source template meets "Flourishing Foundry" production standards.

## 🛠️ Build & Structure
- [x] **Astro Check**: Run `npx astro check` to verify TypeScript and Astro typing health.
- [ ] **Console Hygiene**: Inspect the browser console (F12). It must be free of errors, warnings, or `uxpilot` tracking leaks.
- [ ] **Build Verification**: Run `npm run build` to ensure the SSG process completes without memory leaks or missing assets.
- [ ] **Clean HTML Scan**: Verify the output (dist/index.html) does not contain raw `<script>` blocks that should be componentized.

## 🎨 Visual Quality (Organic Precision)
- [ ] **Theme Integrity**: Switch the theme in `src/pages/index.astro` and verify that all sections (Hero, Ecosystem, CodeSoil) adapt their semantic colors and shadows.
- [ ] **Animation Performance**: Ensure the `vine-line` growth and Terminal typing animation run at 60fps without layout shifts (CLS).
- [ ] **Organic Curves**: Check `glass-panel` and `organic-curve` borders for aliasing/artifacts on different backgrounds.
- [ ] **Typography**: confirm `Playfair Display` (Serif) and `Inter` (Sans) are loading via CDN or local assets correctly.

## 📱 Responsive & Compatibility
- [ ] **Mobile-First Test**: Shrink viewport to 375px. Verify that the Hero terminal and Ecosystem grid collapse into single columns gracefully.
- [ ] **Safari/WebKit**: Test specifically on Safari for `backdrop-filter` (glassmorphism) support. Ensure the `-webkit-backdrop-filter` fallback is present.
- [ ] **Accessibility (A11y)**: Run an `axe-core` scan. Ensure every SVG (vines, icons) has a `title` or `aria-label`.

## 🚀 Performance & SEO
- [ ] **Lighthouse Score**: Aim for 95+ in Performance, Accessibility, Best Practices, and SEO.
- [ ] **Image Optimization**: If standard images are used, ensure they are passed through the `<Image />` or `<Picture />` Astro component for WebP generation.
- [ ] **Meta Tags**: Check `Layout.astro` for canonical URLs, OG tags, and Twitter cards.
