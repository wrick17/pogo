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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/tags`,
        name: "tags",
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
  ],
}
