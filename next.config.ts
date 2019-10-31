import withPlugins from 'next-compose-plugins'
import optimizedImages from 'next-optimized-images'

const core = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ywc17-chimp/' : '',
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  },
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

export default config
