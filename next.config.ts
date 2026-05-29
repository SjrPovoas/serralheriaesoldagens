/** @type {import('next').NextConfig} */
const nextConfig: any = {
  reactStrictMode: true,
  // Desativa a minificação CSS/JS pesada que causa o estouro de memória
  swcMinify: false,
  
  webpack: (config: any) => {
    // Força o webpack a não minimizar, economizando muita RAM
    config.optimization.minimize = false;
    return config;
  },

  // Desativa completamente qualquer coisa relacionada ao Turbopack
  // Isso silencia o erro de "This build is using Turbopack"
  experimental: {
    turbo: undefined,
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