/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        scaletransform: {
          "0%": { transform: "scale(0) translate(-50%,-50%)" },
          "100%": { transform: "scale(1) translate(-50%,-50%)" },
        },
      },
      animation: {
        scale: "scale 500ms",
        scaletransform: "scaletransform 300ms",
      },
    },
    fontFamily: {
      barlow: "Barlow",
      inter: "Inter",
    },
  },
  plugins: [],
};
