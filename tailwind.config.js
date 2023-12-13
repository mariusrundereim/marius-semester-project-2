/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/**/*.html",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.js",
    "./src/js/**/*.js",
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
      backgroundImage: {
        "graphic-image-one": "url('/src/assets/graphic/graphic_item_1.svg')",
        "no-image": "url('./src/assets/images/NoImage.png')",
      },
    },
  },
  plugins: [],
};
