import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from './page';

const ProjectLayout = ({ title, link, ghUser, ghRepo, children }) => (
  <PageLayout title={title}>
    <article id="post" className="post">
      <div id="content" className="post-content">
        <header className="post-header">
          <h1 className="post-title">Project: {title}</h1>
          {ghUser ? (
            <h4>
              Github:{' '}
              {ghRepo ? (
                <a href={'https://github.com/' + ghUser + '/' + ghRepo}>{ghRepo}</a>
              ) : (
                <a href={'https://github.com/LenKagamine/' + ghUser}>{ghUser}</a>
              )}
            </h4>
          ) : null}
          {link ? (
            <h4 style={{ wordWrap: 'break-word' }}>
              Link: <a href={'https://' + link}>{link}</a>
            </h4>
          ) : null}
        </header>

        <div style={{ textAlign: 'left' }}>{children}</div>
      </div>
    </article>
  </PageLayout>
);

ProjectLayout.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  ghUser: PropTypes.string,
  ghRepo: PropTypes.string,
  children: PropTypes.node
};

export default ProjectLayout;
