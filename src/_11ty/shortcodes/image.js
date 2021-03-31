const imageShortcode = async function (src, alt, sizes) {
  const metadata = await Image(src, {
    widths: [320, 640, 960, 1280, 1600, 1920],
    formats: ['avif', 'jpeg', 'webp']
  })

  const imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async'
  }

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes)
}

module.exports = imageShortcode
