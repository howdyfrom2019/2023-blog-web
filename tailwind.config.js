/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.dark-theme'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/featurs/**/*.{js,ts,jsx,tsx}',
    './src/hoc/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-multima)', 'var(--font-roboto)'],
        roboto: 'var(--font-roboto)',
      },
      borderWidth: {
        px: '1px',
      },
      colors: {
        'bg-white-1': '#f9f6ee',
        primary: '#1831bc',
        border: '#d0d7ff',
        'primary-scale': {
          100: '#d0d7ff',
          400: '#8f9be7',
        },
        'primary-alpha': {
          40: '#1831BC66',
        },
        stone: {
          50: 'var(--novel-stone-50)',
          100: 'var(--novel-stone-100)',
          200: 'var(--novel-stone-200)',
          300: 'var(--novel-stone-300)',
          400: 'var(--novel-stone-400)',
          500: 'var(--novel-stone-500)',
          600: 'var(--novel-stone-600)',
          700: 'var(--novel-stone-700)',
          800: 'var(--novel-stone-800)',
          900: 'var(--novel-stone-900)',
        },
        'black-alpha': '#0F172AAB',
      },
      zIndex: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
      borderSpacing: {
        px: '1px',
      },
      boxShadow: {
        'search-bar': '0 4px 16px rgba(0, 0, 0, 0.25)',
        'btn-primary': '4px 4px 0 0 #8f9be7',
      },
      filter: {
        primary: 'sepia(100%) hue-rotate(190deg) saturate(900%)',
      },
      animation: {
        removeFilter: 'removeFilter 0.3s ease-in-out infinite',
        searchBarAppear: 'searchBarAppear 0.3s ease-in-out forwards',
      },
      keyframes: {
        removeFilter: {
          from: { filter: 'sepia(100%) hue-rotate(190deg) saturate(900%)' },
          to: { filter: 'none' },
        },
        searchBarAppear: {
          from: {
            transform: 'translate(-50%, -100%)',
            zIndex: -10,
            opacity: 0,
          },
          to: { transform: 'translate(-50%)', zIndex: 999, opacity: 1 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
