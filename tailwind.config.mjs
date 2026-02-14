/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        // Seed & Source Design Tokens
        primary: {
          50: '#EFF6FF',
          100: '#DEE9FF',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A'
        },
        secondary: {
          50: '#F0FDF4',
          500: '#10B981',
          600: '#059669',
          700: '#047857'
        },
        dark: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#0F172A',
          950: '#030712'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};
