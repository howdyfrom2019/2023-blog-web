/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/**/*.{js,ts,tsx,jsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-multima)', 'var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
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
