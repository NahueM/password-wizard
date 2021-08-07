module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
            primary: '#FF0049',
            secondary: '#002B45',
            terciary: '#FFF1E5',
            grey: '#ababab',
            secondaryGrey: '#ddd',
        },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    }
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
