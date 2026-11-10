/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的書き出し：Cloudflare Pages などの無料ホスティングにそのまま置ける
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
