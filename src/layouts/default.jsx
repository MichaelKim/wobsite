import React from 'react';
import PropTypes from 'prop-types';

import Head from '../components/head';
import Background from '../components/background';
import Header from '../components/header';
import Footer from '../components/footer';

const DefaultLayout = ({ title, children }) => (
  <div>
    <Head title={title} />
    <Background />
    <Header />
    <div className="container fade-in">
      <div className="box">
        {children}
        <Footer />
      </div>
    </div>
  </div>
);

DefaultLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default DefaultLayout;
