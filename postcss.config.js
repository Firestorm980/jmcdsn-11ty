const stylelint = require('stylelint')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssNesting = require('postcss-nesting')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const config = ({ env }) => {
  const plugins = [
    stylelint,
    autoprefixer,
    postcssImport,
    postcssNesting,
    purgecss({
      content: [
        './build/**/*.html',
        './build/**/*.js'
      ]
    })
  ]

  if (env === 'production') {
    plugins.push(cssnano({ preset: 'default' }))
  }

  return {
    plugins
  }
}

module.exports = config
