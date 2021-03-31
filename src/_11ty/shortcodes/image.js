const Image = require('@11ty/eleventy-img')

const imageShortcode = async function (src, alt, sizes = false, caption = '') {
  const metadata = await Image(src, {
    widths: [320, 640, 960, 1280, 1600, 1920],
    formats: ['avif', 'jpeg', 'webp'],
    outputDir: './build/img/'
  })

  const data = metadata.jpeg[metadata.jpeg.length - 1]

  if (!sizes) {
    sizes = `(min-width: ${data.width}px) ${data.width}px, 100vw`
  }

  const imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async'
  }

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return `<figure>${Image.generateHTML(metadata, imageAttributes)}<figcaption>${caption}</figcaption></figure>`
}

module.exports = imageShortcode
