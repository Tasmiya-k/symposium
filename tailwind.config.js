/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        starry:
          "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 30, 1) 100%)",
      },
      colors: {
        customBg: "#000000",
      },
      keyframes: {
        countin: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { transform: "translateY(10%)", opacity: "0.8" }, 
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        countIn: "countin 0.5s ease-out",
      },
    },
  },
};
