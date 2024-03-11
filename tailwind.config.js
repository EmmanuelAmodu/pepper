/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rethink Sans", "sans-serif"]
      },
      colors: {
        foundation: {
          grey: {
            1: '#FFFFFF',
            2: '#FDFCFC',
            4: '#F1F0F0',
            6: '#C4BFC0',
            7: '#958C8D',
            11: '#301F1F',
            13: '#140001',
          },
          red: {
            DEFAULT: '#F70011'
          }
        }
      }
    },
  },
  plugins: [],
}

