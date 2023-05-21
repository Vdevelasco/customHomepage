/** @type {import('tailwindcss').Config} */
/*global require*/

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
}

