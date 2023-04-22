/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-multima)', 'var(--font-roboto)']
      },
      colors: {
        'bg-white-1': '#f9f6ee',
        primary: '#1831bc',
        border: '#d0d7ff'
      }
    },
  },
  plugins: [],
}
