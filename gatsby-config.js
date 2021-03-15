module.exports = {
  siteMetadata: {
    title: `@mheap's notes`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: {
        hideDoubleBrackets: false,
        mdxOtherwiseConfigured: true,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [`gatsby-remark-embedder`],
      },
    },
  ],
};
