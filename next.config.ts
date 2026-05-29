import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Desabilitamos o turbopack explicitamente como sugerido pelo erro
  // e removemos configurações experimentais conflitantes
  turbopack: {}, 

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