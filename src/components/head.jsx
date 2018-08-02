import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Head = ({ title }) => (
  <Helmet
    title={title}
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' }
    ]}
  />
);

// <title>{% if page.title %}{{ page.title | append: " | "}}{% endif %}{{ site.title }}</title>
// <meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
