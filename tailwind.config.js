/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/atom/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/molecule/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/organisms/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-multima)', 'var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        px: '1px',
      },
      colors: {
        'bg-white-1': '#f9f6ee',
        primary: '#1831bc',
        border: '#d0d7ff'
      },
      boxShadow: {
        'search-bar': '0 4px 16px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
