/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rancho: ["Rancho", "cursive"],
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
