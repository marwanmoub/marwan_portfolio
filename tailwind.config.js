/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'hover-nav': 'blue-500',
      },
    },
  },
  variants: {
    textColor: ['hover'],
  },
  plugins: [],
}
