
module.exports = ({ env }) => ({
  plugins: {
    stylelint: {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    cssnano:
      env === 'production'
        ? { preset: 'default' }
        : false
  }
})
