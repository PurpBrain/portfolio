/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'base': '1rem',
      'xl': '1.25rem',
      '4xl': '2rem',
      '5xl': '3rem',
    },
    colors: {
      'primary': '#F9F4EF',
      'secondary': '#EADDCF',
      'brown': '#716040',
      'black': "#020826",
    },
    fontFamily: {
      Helvetica: ['Helvetica',"sans-serif"]
    },
    extend: {
      padding: {
        
      },
      margin: {

      },
    },
  },
  plugins: [],
}
