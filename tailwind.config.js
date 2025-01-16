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
        customBg: "#040406",
      },
    },
  },
};
