import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Lightbulb from './lightbulb';

import './background.scss';

const Background = ({ chain }) => {
  let bgColor = 'rgba(0, 0, 0, 0)';
  if (chain === 1) {
    bgColor = 'rgba(79, 0, 99, 0.7)'; // purple
  } else if (chain === 2) {
    bgColor = 'rgba(8, 56, 161, 0.7)'; // blue
  } else if (chain === 3) {
    bgColor = 'rgba(0, 0, 0, 0.7)'; // dark
  }

  return (
    <div>
      <div id="full-page" />
      <div id="full-page-color" style={{ backgroundColor: bgColor }} />
      <Lightbulb />
    </div>
  );
};

const mapStateToProps = ({ chain }) => ({ chain });

Background.propTypes = {
  chain: PropTypes.number
};

export default connect(
  mapStateToProps,
  null
)(Background);
