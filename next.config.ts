import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use a server runtime so API routes like /api/upload are supported
  output: "standalone",
};

export default nextConfig;
