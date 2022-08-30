/** @type {import('tailwindcss').Config} */ 
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,html}",
    "./components/**/*.{js,html}",
  ],
  
  plugins: [
  ],
  theme: {
    colors:{
      primary:{
        light:'#2C394E',
        DEFAULT:'#0f172a',
        dark:'#1B2535'
      },
      green: "#90FF0A",
      blue:  '#3c82f6',
      white:{
        DEFAULT: '#F0F0F0',
        light:   '#FBFBFB',
        dark:    '#DEDEDE'
      },
     
    },
   extend: {},
  },

  plugins: [],
}