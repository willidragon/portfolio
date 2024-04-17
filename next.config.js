/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This setting is usually used for `next export` which statically exports your app.
  basePath: "/portfolio", // Sets the base path for all the pages.
  assetPrefix: "/portfolio/", // Sets the base path for all assets.
};

module.exports = nextConfig;
