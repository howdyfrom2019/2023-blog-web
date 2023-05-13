/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-multima)'],
        roboto: 'var(--font-roboto)',
      },
      borderWidth: {
        px: '1px',
      },
      colors: {
        'bg-white-1': '#f9f6ee',
        primary: '#1831bc',
        border: '#d0d7ff',
        primaryScale: {
          100: '#d0d7ff',
          400: '#8f9be7',
        },
        primaryAlpha: {
          40: '#1831BC66'
        }
      },
      boxShadow: {
        'search-bar': '0 4px 16px rgba(0, 0, 0, 0.25)',
      },
      filter: {
        primary: 'sepia(100%) hue-rotate(190deg) saturate(900%)',
      },
      animation: {
        removeFilter: 'removeFilter 0.3s ease-in-out infinite',
      },
      keyframes: {
        removeFilter: {
          from: { filter: 'sepia(100%) hue-rotate(190deg) saturate(900%)' },
          to: { filter: 'none' }
        }
      }
    },
  },
  plugins: [],
}
