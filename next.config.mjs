// next.config.js
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkGfm, remarkFrontmatter],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
};
