import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures best practices

  typescript: {
    ignoreBuildErrors: true, // Ignores all TypeScript errors
  },
  experimental: {
    turbo: {}, // Enable Turbopack (correct syntax for Next.js 15)
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Allows importing SVGs as React components
    });
    return config;
  },
};

export default nextConfig;
