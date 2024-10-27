/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jxs,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        padding: "15px",
      },
      fontFamily: {
        "noto-arabic": "'Noto Naskh Arabic', serif",
        "noto-urdo": "'Noto Nastaliq Urdu', serif",
        cairo: "'Cairo', sans-serif",
      },
      colors: {
        "green-header": "#004d40",
        "paige-color": "#f1f5f9",
        "dark-green": "#379569",
      },
      animation: {
        "top-to-bottom": "1.5s top-bottom ease-in-out",
        show: "2.25s opacity ease-in-out infinite",
        scale: "1.5s scale ease-in-out",
        img: "1.5s img ease-in-out infinite alternate",
        opacity: ".8s animate-popup ease-in-out",
      },
      keyframes: {
        "top-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(-130px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        opacity: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        scale: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        img: {
          "0%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(10px)",
          },
        },
        "animate-popup": {
          "0%": {
            opacity: 1,
            transform: "translate(50%, 35px)",
          },
          "100%": {
            opacity: 0,
            transform: "translate(50%, 20px)",
          },
        },
      },
      boxShadow: {
        "box-shadow": "0px 0px 20px 0px #009688 inset",
        "header-shadow": "0px 0px 20px 0px #009688",
        "box-sorah": "0px 0px 20px 0px #009688 inset, 0px 0px 10px 0px #009688",
        "box-sorah-hover":
          "0px 0px 30px 0px #009688 inset, 0px 10px 20px 0px #009688",
        "sorah-header": "0px 2px 15px 0px #ccc",
      },
    },
  },
  plugins: [],
};
