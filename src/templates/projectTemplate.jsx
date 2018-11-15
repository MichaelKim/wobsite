import React from 'react';
import { graphql } from 'gatsby';

import ProjectLayout from '../components/layouts/project';

export default function projectTemplate(props) {
  const { markdownRemark } = props.data;
  const { html } = markdownRemark;
  const { title, github, link, slider } = markdownRemark.frontmatter;
  const [ghUser, ghRepo] = (github || '').split('/');
  return (
    <ProjectLayout title={title} link={link} slider={slider} ghUser={ghUser} ghRepo={ghRepo}>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </ProjectLayout>
  );
}

export const projectQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        github
        link
        slider
      }
    }
  }
`;
