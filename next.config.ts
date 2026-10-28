import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/next-gen-business-summit.html",
        destination: "/next-gen-business-summit",
        permanent: true,
      },
      {
        source: "/404.html",
        destination: "/not-found",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
