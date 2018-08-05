import React from 'react';
import Link from 'gatsby-link';

import PageLayout from '../../layouts/page';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <PageLayout title="Blog">
    <div className="blog-list">
      {edges.filter(({ node }) => /\/src\/pages\/blog\/.+\.md/.exec(node.fileAbsolutePath)).map(({ node }) => (
        <Link to={'/blog' + node.frontmatter.path} className="fade-link blog-link" key={node.frontmatter.path}>
          <div className="blog-box">
            <h2>{node.frontmatter.title}</h2>
            <h3>{node.frontmatter.date}</h3>
          </div>
        </Link>
      ))}
    </div>
  </PageLayout>
);

export default BlogPage;

// TODO: query non-markdown blog posts to add to lsit

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
