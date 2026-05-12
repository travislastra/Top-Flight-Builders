import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Top-Flight-Builders",
  assetPrefix: "/Top-Flight-Builders/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
