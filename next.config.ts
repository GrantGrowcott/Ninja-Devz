import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // match all routes
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Allow caching
          },
        ],
      },
    ];
  },
};

export default nextConfig;
