import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['res.cloudinary.com'], // Add your external domain here
  },
};