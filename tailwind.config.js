/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/**/*.html",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.mjs",
    "./src/js/**/*.mjs",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        "brand-color": "#1EBFBF",
        "brand-dark": "#181818",
        "brand-light": "#F5F5F5",
        "brand-red": "#E94A60",
      },
    },
  },
  plugins: [],
};
