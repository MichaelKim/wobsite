import React from 'react';
import PropTypes from 'prop-types';

import Head from '../head';
import Background from '../background';
import Lightbulb from '../lightbulb';

import './main.scss';

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
