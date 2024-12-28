import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
