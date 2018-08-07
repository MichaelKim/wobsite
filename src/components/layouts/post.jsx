import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from './default';

const PostLayout = ({ title, date, children }) => (
  <DefaultLayout title={title}>
    <div id="content" className="post-content">
      <header className="post-header">
        <h1 className="post-title" itemProp="name headline">
          Blog: {title}
        </h1>
        <h4 className="post-meta">
          <time dateTime={date} itemProp="datePublished">
            {date}
          </time>
        </h4>
      </header>

      <div style={{ textAlign: 'left' }} itemProp="articleBody">
        {children}
      </div>
    </div>
  </DefaultLayout>
);

PostLayout.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.node
};

export default PostLayout;
