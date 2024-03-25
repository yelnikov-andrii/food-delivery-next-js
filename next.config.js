const path = require('path')
 
module.exports = {
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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return config;
  },
}

