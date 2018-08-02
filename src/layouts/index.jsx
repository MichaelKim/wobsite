import React from 'react';
import PropTypes from 'prop-types';

import Background from '../components/background';
import Head from '../components/head';
import Header from '../components/header';
import './main.scss';

const Layout = ({ children, data, location }) => {
  if (location.pathname === '/') {
    return (
      <div>
        <Head title={data.site.siteMetadata.title} />
        <Background />
        <div className="center">
          <div className="container fade-in">{children()}</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Head title={data.site.siteMetadata.title} />
      <Background />
      <Header />
      <div className="container fade-in">{children()}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
