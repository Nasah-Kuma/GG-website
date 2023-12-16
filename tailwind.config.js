/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        rice: '#F6F8ED',
        // tangerine: '#FA9336',
        tangerine: '#F49200',
        marigold: '#EAA221'
      }
    },
  },
  plugins: [],
}
