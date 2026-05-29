import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Isso ignora o lightningcss que está a causar o erro de "Cannot find module"
    config.resolve.alias['lightningcss'] = false;
    config.optimization.minimize = false;
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
};

export default nextConfig;