/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Caprasimo', 'cursive'],
        body:    ['Nunito', 'sans-serif'],
      },
      colors: {
        cream:    '#FFF8F0',
        peach:    '#FFD6BA',
        rose:     '#FFAFC5',
        mint:     '#B8F0DC',
        lavender: '#D9C6FF',
        caramel:  '#E8845A',
        brown:    '#5C3D2E',
        muted:    '#9B7B6E',
      },
      boxShadow: {
        'hard-peach':    '5px 5px 0 #FFD6BA',
        'hard-peach-lg': '8px 8px 0 #FFD6BA',
        'btn':           '0 5px 0 #b85a30',
        'btn-hover':     '0 7px 0 #b85a30',
      },
    },
  },
  plugins: [],
}
