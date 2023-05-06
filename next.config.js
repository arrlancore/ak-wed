/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/undang/default',
        permanent: true,
      },
    ];
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,
  // output: 'export',
  // images: { unoptimized: true },
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/undang/default' },
  //   };
  // },

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
