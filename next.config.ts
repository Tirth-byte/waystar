import type { NextConfig } from "next";

const isExport = process.env.GITHUB_PAGES === "true" || process.env.NEXT_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isExport ? "/waystar" : "");

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  basePath: basePath || undefined,
  images: {
    unoptimized: isExport,
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
  ...(!isExport
    ? {
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
      }
    : {}),
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
