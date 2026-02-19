import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Support for styled-components
  compiler: {
    styledComponents: true,
  },
  // Transpile sanity packages
  transpilePackages: ["sanity", "@sanity/ui", "@sanity/icons"],
  // Turbopack configuration (Next.js 16 default bundler)
  turbopack: {},
};

export default nextConfig;
