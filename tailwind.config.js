/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4aab6',
          400: '#ec7a8d',
          500: '#e04f68',
          600: '#cc2f4d',
          700: '#ab2240',
          800: '#8f1f3b',
          900: '#7a1d38',
          950: '#440b1c',
        },
        wine: {
          DEFAULT: '#6B1A2A',
          dark:    '#4A0F1C',
          deeper:  '#2E0910',
        },
        cream: {
          DEFAULT: '#F8F3EC',
          warm:    '#F2EBE0',
          deep:    '#E8DDD0',
        },
        gold: {
          light:   '#D4A847',
          DEFAULT: '#B8892A',
          dark:    '#8B6520',
        },
        medical: {
          teal:    '#2A6B6B',
          green:   '#3A6B4A',
          blue:    '#1A3A5C',
        }
      },
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        body:   ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:   ['var(--font-jost)', 'system-ui', 'sans-serif'],
        mono:   ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra:  '0.35em',
      },
    },
  },
  plugins: [],
}
