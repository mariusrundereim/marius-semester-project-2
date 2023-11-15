/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./src/**/*.js",
    "./src/**/*.mjs",
    "./src/js/**/*.mjs",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
