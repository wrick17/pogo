module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pogo",
        short_name: "Pogo",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "static/assets/icon.png", // This path is relative to the root of the site.
      },
    },
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
