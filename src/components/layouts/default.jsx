import React from 'react';
import PropTypes from 'prop-types';

import Head from '../head';
import Background from '../background';
import Lightbulb from '../lightbulb';
import Header from '../header';
import Footer from '../footer';

import './main.scss';

const DefaultLayout = ({ title, children }) => (
  <div>
    <Head title={title} />
    <Background />
    <Lightbulb />
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
