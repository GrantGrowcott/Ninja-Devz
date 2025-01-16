const nextConfig = {
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
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: isDevelopment
              ? 'no-store'
              : 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
