import React from 'react';
import { Link, graphql } from 'gatsby';

import PageLayout from '../../components/layouts/page';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <PageLayout title="Blog">
    <div className="blog-list">
      {edges.map(({ node }) => (
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

// TODO: query non-markdown blog posts to add to list

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/src/pages/blog/.+md/" } }
    ) {
      edges {
        node {
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
