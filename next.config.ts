import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // 🚀 production optimizations
  reactStrictMode: true,

  // ⚡ helps reduce unnecessary checks during build in CI/Docker
  typescript: {
    ignoreBuildErrors: false, // keep safe; change to true only if needed
  },
};

export default nextConfig;