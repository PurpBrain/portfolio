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
      'primary': '#16161A',
      'secondary': '#242629',
      'tertiary': "#7F5AF0",
      'text': '#9FADBF',
      'black': "#020826",
      'headline':"#FFFFFE",
      'icon':"#FFFFFE",
      'white':"#FFFFFE",
      "blue":"#343466",
    },
    fontFamily: {
      Helvetica: ['Helvetica',"sans-serif"],
      Raleway: ['Raleway',"sans-serif"],
      Calibre: ['Calibre',"sans-serif"],
    },
    extend: {
      backgroundImage: {
        'projet-1' : "url('/src/assets/image/projet/portfolio.png')",
        "projet-2" : "url('/src/assets/image/projet/jdm.png')",
      },
      height: {
        '104': "409px"
      },
      dropShadow: {
        'xs': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        '22': '90px'
      },
    },
  },
  plugins: [],
}
