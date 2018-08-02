/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const pageTemplate = path.resolve(`src/templates/pageTemplate.jsx`);
  const postTemplate = path.resolve(`src/templates/postTemplate.jsx`);

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              layout
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node.frontmatter);
      if (node.frontmatter.layout === 'post') {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
          context: {}
        });
      } else {
        createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
          context: {}
        });
      }
    });
  });
};
