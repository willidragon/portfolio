/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"; // This checks if the build is for production
const nextConfig = {
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  output: "export",
};

module.exports = nextConfig;
