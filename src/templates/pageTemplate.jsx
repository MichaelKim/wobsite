import React from 'react';

import PageLayout from '../components/layouts/page';

export default function pageTemplate(props) {
  const { html } = props.data.markdownRemark;
  const { title } = props.data.markdownRemark.frontmatter;
  return (
    <PageLayout title={title}>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
