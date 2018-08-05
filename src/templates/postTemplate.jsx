import React from 'react';

import PostLayout from '../layouts/post';

export default function postTemplate({ pathContext }) {
  const { date, title, html } = pathContext;
  return (
    <PostLayout title={title} date={date}>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </PostLayout>
  );
}
