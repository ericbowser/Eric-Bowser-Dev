/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*./src/**/*.{html,js}",
    "*./public/*.{html,js}",
    "*./src/Components/*.{html,js}"
  ],
  plugins: [
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#FFF0',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
}

