/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        padding: "15px",
      },
      fontFamily: {
        "noto-normal": "'Noto Naskh Arabic', serif",
        "noto-reqaa": "'Noto Nastaliq Urdu', serif",
        cairo: "'Cairo', sans-serif",
      },
      boxShadow: {
        "section-shadow":
          "-4px -4px 4px 0px inset #8d8dc2, 4px 4px 4px 0 inset #8d8dc2",
        "form-shadow": "0px 0px 15px 0px #5e5ef6",
        "links-sorah-shadow":
          "0px 0px 5px 0px #2563ea inset, 0px 0px 4px 0px #2563ea",
        "links-sorah-shadow-hover":
          "0px 0px 15px 0px #2563eb inset, 0px 10px 15px 0px #2563eb",
        "links-aya-hover":
          "0px 0px 5px 0px #2563eb inset, 0px 5px 5px 0px #2563eb",
        "popup-shadow": "0px 0px 15px 0px #2563eb;",
        "header-shadow": "0px_0px_5px_0px_#2563eb",
      },
      keyframes: {
        "hide-and-shaw": {
          "0%": {
            opacity: "0",
            transform: "translateY(-200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        loading: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "change-color": {
          "0%": { backgroundColor: "#dbeafe", color: "#1e40af" },
          "100%": { backgroundColor: "#1e40af", color: "#dbeafe" },
        },
        "before-animation": {
          "50%": {
            left: "50%",
            width: "10px",
            height: "10px",
            borderRadius: "0",
          },
          "100%": {
            width: "50%",
            height: "100%",
            left: "50%",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          },
        },
        "after-animation": {
          "50%": {
            right: "50%",
            width: "10px",
            height: "10px",
            borderRadius: "0",
          },
          "100%": {
            width: "50%",
            right: "50%",
            height: "100%",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          },
        },
        "time-animation-before": {
          from: {
            left: "50%",
            top: "50%",
            width: "0%",
            height: "0%",
          },
          to: {
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100%",
          },
        },
        "time-animation-li": {
          from: {
            // transform: "translateY(-10px)",
            transform: "scale(1)",
          },
          to: {
            // transform: "translateY(10px)",
            transform: "scale(1.2)",
          },
        },
      },
      animation: {
        "hide-and-show": "hide-and-shaw 1.5s ease-in-out",
        loading: "loading 1.5s linear infinite",
        "color-change": "change-color 1s ease-in-out infinite alternate",
        "before-animation": "before-animation 1s linear forwards",
        "after-animation": "after-animation 1s linear forwards",
        "time-animation-li":
          "time-animation-li 1s ease-in-out infinite alternate",
        "time-animation-before": "time-animation-before 1s linear infinite",
      },
    },
  },
  plugins: [],
};
