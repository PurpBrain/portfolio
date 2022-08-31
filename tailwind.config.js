/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'background': '#F9F4EF',
      'secondary': '#EADDCF',
      'brown': '#716040',
    },
    fontFamily: {
      JacquesFrancois: ['Jacques Francois', 'serif'],
    },
    extend: {
      padding: {
        "15px": "15px",
      },
      margin: {
        "40px": "40px",
        "250px": "250px",
      },
    },
  },
  plugins: [],
}
