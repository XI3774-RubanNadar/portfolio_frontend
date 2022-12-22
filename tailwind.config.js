/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bigSmall: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        'wobble': 'bigSmall 3s ease-in infinite',
        'fade': 'fadeIn 6s ease-in infinite',
      },
      fontFamily: {
       secondary:["Roboto","sans-serif"]
        // primary: ['Kosugi Maru', sans-serif],
      },
      colors:{
        primaryColor: '#edf2f8',
        secondaryColor: '#454dac',
        ternaryColor: '#454caa',
        grayColor: '#747576',
      }
    },
  },
  plugins: [],
}
