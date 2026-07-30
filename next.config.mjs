import path from "node:path";
import { fileURLToPath } from "node:url";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "atelier-noir";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
