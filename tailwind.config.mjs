/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Foundry Tokens (Configurable via CSS Variables)
        foundry: {
          primary: 'var(--color-foundry-primary)',
          secondary: 'var(--color-foundry-secondary)',
          accent: 'var(--color-foundry-accent)',
          surface: 'var(--color-foundry-surface)',
          text: 'var(--color-foundry-text)',
        },
        // Preserve Seedsource legacy tokens for specific branding
        emerald: {
          DEFAULT: '#10B981',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        forest: {
          DEFAULT: '#064E3B',
          900: '#022C22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': 'var(--shadow-foundry-glow)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
      }
    }
  },
  plugins: []
};
