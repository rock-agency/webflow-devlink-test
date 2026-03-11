import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  basePath: "/app",
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
