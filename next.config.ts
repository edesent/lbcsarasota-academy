import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // One canonical host. Every page's canonical tag, the sitemap and robots all
  // name the bare domain, so www is folded into it rather than served twice.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.libertybaptistacademy.org" }],
        destination: "https://libertybaptistacademy.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
