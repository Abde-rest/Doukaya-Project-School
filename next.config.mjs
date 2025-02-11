import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = withNextVideo({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
});

export default nextConfig;
