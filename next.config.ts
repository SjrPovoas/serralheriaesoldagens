import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Força o uso do Webpack
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },

  // Usamos o operador 'as any' para enganar o TypeScript
  // e silenciar o erro de "property 'turbo' does not exist"
  experimental: {
    ...( { turbo: undefined } as any ),
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