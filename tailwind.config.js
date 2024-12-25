/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "nm": '20px',
        "2xs": ".625rem",
        "3xs": ".5rem",
      },
    },
  },
  plugins: [],
};
