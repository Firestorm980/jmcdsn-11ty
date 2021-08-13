
module.exports = ({ env }) => ({
  plugins: {
    stylelint: {},
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nesting': {},
    cssnano:
        env === 'production'
          ? { preset: 'default' }
          : false
  }
})
