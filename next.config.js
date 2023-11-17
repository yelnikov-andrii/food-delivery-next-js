const path = require('path')
 
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pizzalife.ua',
        pathname: '/files/**',
      },
      {
        protocol: 'https',
        hostname: 'pizzalife.ua',
        pathname: '/templates/**',
      },
      {
        protocol: 'https',
        hostname: 'pizzalife.ua',
        pathname: '/assets/**',
      },
    ],
  },
}

