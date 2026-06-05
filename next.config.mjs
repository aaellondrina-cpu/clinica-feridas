/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática — gera a pasta out/ (Vercel detecta Next.js automaticamente).
  output: "export",
  trailingSlash: true,
  images: {
    // necessário no output: 'export' (sem otimização server-side)
    unoptimized: true,
  },
};

export default nextConfig;
