/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.artcallsindonesia.com',
        pathname: '/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
