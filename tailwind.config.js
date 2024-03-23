/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "Nunito": "Nunito",
      },
      colors: {
        blue:{
          light:'#8fb2f5'
        },
        gray: {
          100: "#fafafa",
          200: "#bfbfd4",
          300: "#ababc4",
          400: "#7f7f98",
          500: "#3b3b54",
          600: "#22222f",
          700: "#1c1c27",
          800: "#16161f",
          900: "#13131a",
        },
      },
    },
  },
  plugins: [],
};
