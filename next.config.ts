import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'export',
  images:{
    unoptimized:true
  },
  reactStrictMode: true,
  devIndicators:false,
  basePath: '/modern-portfolio',
  assetPrefix: '/modern-portfolio/',
  trailingSlash: true,
};

export default nextConfig;
