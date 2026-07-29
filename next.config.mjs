/** @type {import('next').NextConfig} */

// Backend API rasmlarini next/image orqali optimallashtirish uchun ruxsat
// berilgan domenlar ro'yxati. API_BASE_URL orqali backend manzili avtomatik
// qo'shiladi (masalan: https://api.fergagold.uz -> hostname "api.fergagold.uz").
function buildRemotePatterns() {
  const patterns = [
    // Demo/placeholder mahsulot rasmlari uchun (lib/data.ts)
    { protocol: "https", hostname: "images.unsplash.com" },
  ];

  const backendUrl = process.env.API_BASE_URL;
  if (backendUrl) {
    try {
      const { protocol, hostname } = new URL(backendUrl);
      patterns.push({
        protocol: protocol.replace(":", ""),
        hostname,
      });
    } catch {
      // API_BASE_URL noto'g'ri formatda bo'lsa, e'tiborsiz qoldiramiz
    }
  }

  return patterns;
}

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Rasmlarni server tomonda avtomatik resize + WebP/AVIF ga o'girish uchun
    // optimizatsiya yoqilgan (self-hosted/standalone rejimda ishlashi uchun
    // "sharp" paketi package.json'ga qo'shilgan bo'lishi shart).
    formats: ["image/avif", "image/webp"],
    remotePatterns: buildRemotePatterns(),
  },
  output: "standalone",
};

export default nextConfig;
