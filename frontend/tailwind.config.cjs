/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS,
  variants: {
    extend: {},
  },
  theme: {
    fontFamily: ["Roboto", "sans-serif"],
    extend: {},
  },
  plugins: [],
  darkMode: true,
};
