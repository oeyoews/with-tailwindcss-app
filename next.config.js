/** @type {import('next').NextConfig} */
const domains = ["images.unsplash.com", "www.gravatar.com"]

const nextConfig = {
  // output: "export",
  // distDir: "dist",
  images: { domains },
};

module.exports = nextConfig;
