// next.config.ts

import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

// Enable analyzer only when ANALYZE=true
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Your existing Next.js config options
const nextConfig: NextConfig = {
  // Add any existing or future config here
  // Example:
  // reactStrictMode: true,
  // swcMinify: true,
};

export default withAnalyzer(nextConfig);
