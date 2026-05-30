import type { NextConfig } from "next";

// Forçamos o tipo para 'any' para ignorar restrições severas do compilador
// durante o processo de build em ambientes restritos (como a Vercel)
const nextConfig: any = {
  reactStrictMode: true,
  
  // Desativa a minificação para evitar erro de memória (OOM - Out of Memory)
  swcMinify: false,
  
  webpack: (config: any) => {
    // Garante que o webpack não tente otimizações agressivas de CSS/JS
    config.optimization.minimize = false;
    
    // Alias para evitar que bibliotecas nativas de compilação CSS tentem rodar
    config.resolve.alias = {
      ...config.resolve.alias,
      'lightningcss': false,
    };
    
    return config;
  },

  // Desativa o Turbopack explicitamente
  experimental: {
    turbo: undefined,
  },

  // Rotas para o Decap CMS
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