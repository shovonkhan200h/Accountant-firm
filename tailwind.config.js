/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImg': "url('/src/assets/1.jpg')"
      },
      screens: {
        'xs': '390px', // min-width
      }
    },
  },
  plugins: [],
}