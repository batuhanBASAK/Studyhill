/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "body-dark": "#1A1A2E",
        "navbar-dark": "#0F3460",
        "yellow-avatar": "#D6CDA4",
      },
      backgroundImage: {
        "mountain-agri": "url('../public/img/mountain_agri.jpg')",
      },
    },
  },
  plugins: [],
};
