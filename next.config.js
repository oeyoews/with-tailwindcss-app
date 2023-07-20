/** @type {import('next').NextConfig} */

// next.config.js

const domains = ["images.unsplash.com", "www.gravatar.com"]
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      require("remark-gfm"),
      require('@mdx-js/loader')
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["images.unsplash.com", "www.gravatar.com"], },
images: { domains },
  experimental: {
    mdxRs: true,
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);