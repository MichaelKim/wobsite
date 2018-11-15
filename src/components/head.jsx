import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Head = ({ title }) => (
  <Helmet
    title={'Michael Kim' + (title ? ' | ' + title : '')}
    meta={[{ name: 'description', content: 'Personal website for Michael Kim' }]}
  >
    <html lang="en" />
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
