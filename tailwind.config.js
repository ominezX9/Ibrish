/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      primary: '#B87333', //copper
      secondary: '#708238', //Olive Green
      cream: '#F5F5DC', //Off-white
      grey: '#E8E8E8',
      lightgrey: '#828282',
      darkgray: '#2F2F2F',
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
}