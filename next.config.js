const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const core = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ywc17-chimp' : '',
}

const config = withPlugins([
  [optimizedImages, {
    handleImages: ['jpeg', 'png', 'webp'],
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
], core)

module.exports = config
