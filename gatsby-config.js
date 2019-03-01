module.exports = {
  siteMetadata: {
    title: 'Michael Kim'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'project-images',
        path: `${__dirname}/src/project-images/`
      }
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
        display: 'standalone'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links'
  ]
};
