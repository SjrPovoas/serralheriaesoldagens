/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Desativar minificação para economizar recursos
  swcMinify: false,
  // Garante que o Next não tente usar o Turbopack em hipótese alguma
  // e remove a necessidade de configuração complexa de Webpack
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;