const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './site/**/*.njk',
      './site/**/*.js'
    ]
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        brand: {
          primary: {
            light: colors.amber[400],
            DEFAULT: colors.amber[500],
            dark: colors.amber[600]
          }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.gray[600],
            fontSize: 'inherit',
            a: {
              color: colors.blue[500],

              '&:hover': {
                color: colors.blue[600],
                textDecoration: 'none'
              }
            },
            'h1,h2,h3,h4,h5,h6': {
              color: colors.gray[900]
            }
          }
        },
        dark: {
          css: {
            color: colors.gray[300],
            a: {
              color: colors.amber[500],

              '&:hover': {
                color: colors.amber[400]
              }
            },
            'h1,h2,h3,h4,h5,h6': {
              color: colors.gray[100]
            }
          }
        }
      },
      spacing: {
        'screenw-10': '10vw',
        'screenw-20': '20vw',
        'screenw-30': '30vw',
        'screenw-40': '40vw',
        'screenw-50': '50vw',
        'screenw-60': '60vw',
        'screenw-70': '70vw',
        'screenw-80': '80vw',
        'screenw-90': '90vw',
        'screenh-10': '10vh',
        'screenh-20': '20vh',
        'screenh-30': '30vh',
        'screenh-40': '40vh',
        'screenh-50': '50vh',
        'screenh-60': '60vh',
        'screenh-70': '70vh',
        'screenh-80': '80vh',
        'screenh-90': '90vh'
      }
    },
    fontFamily: {
      sans: ["'Source Sans Pro'", 'sans-serif'],
      mono: ["'Fira Code'", 'monospace'],
      display: ["'Oswald'", 'sans-serif']
    }
  },
  variants: {
    extend: {},
    typography: ['responsive', 'dark']
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
