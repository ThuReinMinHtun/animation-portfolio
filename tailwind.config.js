/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        'roboto':['"Roboto"','serif'],
      },
      fontSize: {
        "nm": '20px',
        "2xs": ".625rem",
        "3xs": ".5rem",
      },
      colors: {
        "orange": "#ff6700",
        'custom_orange':'#FF6700',
        'custom_white':'#F3F3F3',
        'custom_peach' : '#FFE9DA',
      },
      
    },
  },
  plugins: [],
};
