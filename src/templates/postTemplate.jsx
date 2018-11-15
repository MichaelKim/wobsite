import React from 'react';
import { graphql } from 'gatsby';

import PostLayout from '../components/layouts/post';

export default function postTemplate(props) {
  const { markdownRemark } = props.data;
  const { title, date } = markdownRemark.frontmatter;
  const { html } = markdownRemark;
  return (
    <PostLayout title={title} date={date}>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </PostLayout>
  );
}

export const postQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
