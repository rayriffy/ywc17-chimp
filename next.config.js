const withOffline = require('next-offline')

const config = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ywc17-chimp' : '',
}

module.exports = withOffline(config)
