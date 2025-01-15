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
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return [
      {
        source: "/(.*)", // match all routes
        headers: [
          {
            key: "Cache-Control",
            value: isDevelopment
              ? "no-store" // Disable caching during development
              : "public, max-age=31536000, immutable", // Allow long caching in production
          },
        ],
      },
    ];
  },
};

export default nextConfig;
