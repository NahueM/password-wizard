module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      fontFamily: {
        'primary': ['"Quicksand"', 'sans-serif']
      },
      colors:{
            primary: '#FF0049',
            secondary: '#002B45',
            terciary: '#FFF1E5',
            grey: '#ababab',
            secondaryGrey: '#ddd',
        },
        animation: {
          bounce200: 'bounce 1s infinite 200ms',
          bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    }
  },
}
