import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from './default';
import HomeLayout from './home';

import './main.scss';

const Layout = ({ children, data, location }) => {
  if (location.pathname === '/') {
    return <HomeLayout title={data.site.siteMetadata.title}>{children()}</HomeLayout>;
  }
  return <DefaultLayout title={data.site.siteMetadata.title}>{children()}</DefaultLayout>;
};

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object
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
