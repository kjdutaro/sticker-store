/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading' : ['Abril Fatface', 'serif'],
        'body' : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}