/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '##e9eef3',
          100: '#bbc9d8',
          200: '#9bafc6',
          300: '#6d8bab',
          400: '#51759b',
          500: '#255282',
          600: '#224b76',
          700: '#1a3a5c',
          800: '#142d48',
          900: '#102237',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
  } 
}