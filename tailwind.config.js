/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      primary:{
        50:'#3b82f6',
        100:'#1e40af',

      },
      secondary:{
        50:'#a8a29e',
        100: '#525252',
      },

      danger:{
        50:'#fbbf24',
        100:'#7f1d1d',
      }
     }
    },
  },
  plugins: [],
}
