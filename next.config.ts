import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: '/auth/:path*',
        destination: 'https://api.github.com/auth/:path*',
      },
    ];
  },
};