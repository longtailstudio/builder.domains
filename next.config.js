module.exports = {
    images: {
        domains: ['tailwindui.com'],
    },
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: 'https://app.builder.domains/:path'
        },
      ]
    },
}   
