import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: {}, // Ensure correct Turbo config
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors
  },
  output: "standalone", // Ensures all dependencies are bundled properly
};

export default nextConfig;
