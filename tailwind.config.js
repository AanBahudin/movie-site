/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Mono', 'monospace'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'gunmetal': '#333745',
        'crayola': '#FE5F55',
        'cultured': '#F4F4F5',
        'silver': '#9EA1A9'
      }
    },
  },
  plugins: [],
}