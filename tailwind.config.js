/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        img: "40px",
        "s-img": "25px",
        sides: "5%",
      
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
     
    },
    colors: {
      // black: "#1E1E1E",
      black: "#0A0A0A ",
      gradient: "#fec1958c"
    }
    },
  },
  plugins: [],
}