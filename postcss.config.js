
module.exports = ({ env }) => ({
  plugins: {
    stylelint: {},
    autoprefixer: {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true
      }
    },
    cssnano:
        env === 'production'
          ? { preset: 'default' }
          : false
  }
})
