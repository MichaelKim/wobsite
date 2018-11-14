import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './background.scss';

const colors = [
  'rgba(0, 0, 0, 0)',
  'rgba(79, 0, 99, 0.7)', // purple
  'rgba(8, 56, 161, 0.7)', // blue
  'rgba(0, 0, 0, 0.7)' // dark
];

const Background = ({ chain }) => {
  const bgColor = colors[chain] || colors[0];

  return (
    <div>
      <div id="full-page" />
      <div id="full-page-color" style={{ backgroundColor: bgColor }} />
    </div>
  );
};

const mapStateToProps = ({ chain }) => ({ chain });

Background.propTypes = {
  chain: PropTypes.number
};

export default connect(mapStateToProps)(Background);
