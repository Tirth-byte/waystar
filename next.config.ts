import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "player.vimeo.com",
      },
      {
        protocol: "https",
        hostname: "assets.mixkit.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/developments",
        destination: "/residences",
        permanent: true,
      },
      {
        source: "/developments/:slug*",
        destination: "/residences/:slug*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/philosophy",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/residences",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/waystar:path(.*)",
        destination: "/",
        permanent: false,
      },
      {
        source: "/WAYSTAR:path(.*)",
        destination: "/",
        permanent: false,
      },
      {
        source: "/%20:path(.*)",
        destination: "/",
        permanent: false,
      },
      {
        source: "/ :path(.*)",
        destination: "/",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
