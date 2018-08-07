/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

const { slugify } = require('./src/util');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const pageTemplate = path.resolve(`src/templates/pageTemplate.jsx`);
  const postTemplate = path.resolve(`src/templates/postTemplate.jsx`);
  const projectTemplate = path.resolve(`src/templates/projectTemplate.jsx`);

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            html
            frontmatter {
              layout
              title
              date(formatString: "MMMM DD, YYYY")
              path
              github
              link
              slider
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
      if (node.frontmatter.layout === 'post') {
        createPage({
          path: '/blog' + node.frontmatter.path,
          component: postTemplate,
          context: {
            html: node.html,
            title: node.frontmatter.title,
            date: node.frontmatter.date
          }
        });
      } else if (node.frontmatter.layout === 'project') {
        createPage({
          path: '/project/' + slugify(node.frontmatter.title),
          component: projectTemplate,
          context: {
            html: node.html,
            title: node.frontmatter.title,
            github: node.frontmatter.github,
            link: node.frontmatter.link,
            slider: node.frontmatter.slider
          }
        });
      } else {
        createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
          context: {
            html: node.html,
            title: node.frontmatter.title
          }
        });
      }
    });
  });
};
