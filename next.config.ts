import withPlugins from 'next-compose-plugins'
import optimizedImages from 'next-optimized-images'

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
])

export default config
