module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blogs`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
  ],
}
