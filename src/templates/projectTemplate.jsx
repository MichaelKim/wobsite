import React from 'react';

import PageLayout from '../layouts/page';

export default function projectTemplate({ pathContext }) {
  const { html, title, github, link } = pathContext;
  const [ghUser, ghRepo] = (github || '').split('/');
  return (
    <article id="post" className="post">
      <div id="content" className="post-content">
        <header className="post-header">
          <h1 className="post-title">Project: {title}</h1>
          {github ? (
            <h4>
              Github:{' '}
              {ghRepo ? (
                <a href={'https://github.com/' + ghUser + '/' + ghRepo}>{ghRepo}</a>
              ) : (
                <a href={'https://github.com/LenKagamine/' + github}>{github}</a>
              )}
            </h4>
          ) : null}
          {link ? (
            <h4 style={{ wordWrap: 'break-word' }}>
              Link: <a href={'https://' + link}>{link}</a>
            </h4>
          ) : null}
        </header>

        <div style={{ textAlign: 'left' }}>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </article>
  );
}
