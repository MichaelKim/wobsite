import React from 'react';
import PropTypes from 'prop-types';

const PostLayout = ({ title, date, children }) => (
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
);

PostLayout.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.node
};

export default PostLayout;
