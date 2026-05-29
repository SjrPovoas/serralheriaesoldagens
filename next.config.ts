import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Mantemos a reescrita necessária para o CMS
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },

  // Otimização para evitar erros de memória no build (Vercel/Netlify)
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },

  // Configuração experimental segura para Next.js 16
  experimental: {
    // Em versões recentes, workerThreads não é mais uma chave direta aqui,
    // por isso focamos em reduzir a carga de processamento
    optimizePackageImports: ['lucide-react', 'bootstrap'],
  },
};

export default nextConfig;