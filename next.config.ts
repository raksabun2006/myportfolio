import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/persona",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/forge",
        destination: "/skills",
        permanent: true,
      },
      {
        source: "/certificate",
        destination: "/credentials",
        permanent: true,
      },
      {
        source: "/certificate/:id",
        destination: "/credentials/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
