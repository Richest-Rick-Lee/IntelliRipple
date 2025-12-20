/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify plugin will handle the build output
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 确保使用正确的模块系统
  experimental: {
    optimizePackageImports: ['next/image'],
  },
}

module.exports = nextConfig

