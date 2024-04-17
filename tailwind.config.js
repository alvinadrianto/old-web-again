/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'cuslor-1': '#202020',
        'cuslor-2': '#C1C1C1',
      },
    },
  },
  plugins: [],
};
