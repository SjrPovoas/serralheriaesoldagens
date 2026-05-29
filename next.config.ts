import type { NextConfig } from "next";

// Definimos uma variável 'config' como 'any' para evitar que 
// o TypeScript verifique propriedades que ele não conhece.
const nextConfig: any = {
  reactStrictMode: true,
  
  // Otimizações de build
  webpack: (config: any) => {
    config.resolve.alias['lightningcss'] = false;
    config.optimization.minimize = false;
    return config;
  },

  // Configurações que costumam dar erro de tipo:
  // Usamos o espalhamento para injetar essas opções ignorando a tipagem estrita
  ...{
    swcMinify: false,
    experimental: {
      turbo: {},
    },
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