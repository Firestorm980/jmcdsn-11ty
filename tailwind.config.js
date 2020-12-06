module.exports = {
  purge: {
    content: [
      './site/**/*.njk',
      './site/**/*.js'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
