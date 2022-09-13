/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        scaletranslate: {
          "0%": { transform: "scale(0) translate(0%,0%)" },
          "100%": { transform: "scale(1) translate(-50%,-50%)" },
        },
        translate: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        translate: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        opacity: "opacity 300ms",
        scale: "scale 300ms",
        scaletranslate: "scaletranslate 300ms forwards",
        translate: "translate 500ms forwards",
      },
    },
    fontFamily: {
      barlow: "Barlow",
      inter: "Inter",
    },
  },
  plugins: [],
};
