import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from './default';

const PageLayout = ({ title, children }) => (
  <DefaultLayout title={title}>
    <div id="content" className="post-content">
      <header className="post-header">
        <h1 className="post-title">{title}</h1>
      </header>
      {children}
    </div>
  </DefaultLayout>
);

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default PageLayout;
