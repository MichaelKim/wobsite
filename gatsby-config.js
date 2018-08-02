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
    `gatsby-transformer-remark`
  ]
};
