import type { NextConfig } from "next";
// import bundleAnalyzer from '@next/bundle-analyzer';

/* Bundle Analyzer */
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true, 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.optimization.moduleIds = 'named'
    return config;
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    qualities: [75, 85]
  },
};

// export default withBundleAnalyzer(nextConfig);
export default nextConfig
