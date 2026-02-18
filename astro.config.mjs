import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    sitemap(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    /* [SS-FEATURE-SDK-INTEGRATIONS-START] */
    // Commerce SDKs (Stripe, Shopify) and third-party integrations injected here
    /* [SS-FEATURE-SDK-INTEGRATIONS-END] */
  ],
  output: 'static',
  site: 'https://seedsource.dev',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
