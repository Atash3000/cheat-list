/** @type {import('tailwindcss').Config} */ 
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
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
        DEFAULT:'#1e293b',
        dark:'#1B2535'
      },
      green:"#90FF0A",
      blue:'#3246a8',
      white:{
        DEFAULT:'#fff',
        light:'#F1F1F1',
        dark:'#DFDFDF'
      },
     
    },
   extend: {},
  },

  plugins: [],
}