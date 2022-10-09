/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        header: ['Acme', 'sans-serif'],
      },
      colors: {
        "light-shadow": 'rgba(200, 200, 200, 0.3)',
        "dark-shadow": 'rgba(200, 200, 200, 0.3)',
      },
    },
  },
  plugins: [],
}