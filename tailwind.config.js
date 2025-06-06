/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}