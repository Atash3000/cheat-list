/** @type {import('tailwindcss').Config} */ 
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,html}",
    "./components/**/*.{js,html}",
  ],
  
  theme: {

   extend: {},
  },

  plugins: [ require('@tailwindcss/typography')({
  })]
}