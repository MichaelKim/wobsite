module.exports = {
  siteMetadata: {
    title: 'Michael Kim',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'project-images',
        path: `${__dirname}/src/project-images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Michael Kim',
        short_name: 'Michael Kim',
        start_url: '/',
        background_color: '#eaeaea',
        theme_color: '#eaeaea',
        display: 'standalone',
        icon: `${__dirname}/static/images/favicon.svg`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
  ],
};
