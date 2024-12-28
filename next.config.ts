import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  webpack: (config ) => {

    // Modify the existing Webpack config
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // Return the updated config
    return config;
  },

  
};

export default nextConfig;
