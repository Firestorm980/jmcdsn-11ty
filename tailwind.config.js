const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './site/**/*.njk',
      './site/**/*.js'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            light: colors.amber[400],
            DEFAULT: colors.amber[500],
            dark: colors.amber[600]
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
