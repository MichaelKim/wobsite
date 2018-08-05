import React from 'react';

import PageLayout from '../layouts/page';

export default function pageTemplate({ pathContext }) {
  const { html, title } = pathContext;
  return (
    <PageLayout title={title}>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </PageLayout>
  );
}
