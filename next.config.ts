import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Required for JamBot canvas iframe embedding (cross-origin dev server)
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    unoptimized: true,
    remotePatterns: [
      // Add client's image CDN or CMS domain here
      // { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
