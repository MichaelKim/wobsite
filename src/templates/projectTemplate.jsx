import React from 'react';

import ProjectLayout from '../components/layouts/project';

export default function projectTemplate({ pathContext }) {
  const { html, title, github, link, slider } = pathContext;
  const [ghUser, ghRepo] = (github || '').split('/');
  return (
    <ProjectLayout title={title} link={link} slider={slider} ghUser={ghUser} ghRepo={ghRepo}>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </ProjectLayout>
  );
}
