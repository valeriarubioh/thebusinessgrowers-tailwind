/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
  "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "sans-serif",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
