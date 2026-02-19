import type { NextConfig } from "next";
import type { Configuration } from "webpack";

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
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    // Handle styled-components in Sanity
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
