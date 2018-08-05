import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = ({ title, children }) => (
  <div id="content" className="post-content">
    <header className="post-header">
      <h1 className="post-title">{title}</h1>
    </header>
    {children}
  </div>
);

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default PageLayout;
