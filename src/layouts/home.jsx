import React from 'react';
import PropTypes from 'prop-types';

import Head from '../components/head';
import Background from '../components/background';
import Lightbulb from '../components/lightbulb';

const HomeLayout = ({ title, children }) => (
  <div>
    <Head title={title} />
    <Background />
    <Lightbulb />
    <div className="center">
      <div className="container fade-in">{children}</div>
    </div>
  </div>
);

HomeLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default HomeLayout;
