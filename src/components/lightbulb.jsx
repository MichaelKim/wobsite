import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './lightbulb.scss';

const Lightbulb = ({ chain, pullChain }) => (
  <div className={'lightbulb ' + (chain % 2 === 1 ? 'light-off' : 'light-on')} onClick={pullChain}>
    <div className="chain" />
    <div className="handle" />
  </div>
);

const mapStateToProps = ({ chain }) => ({ chain });

const mapDispatchToProps = dispatch => ({
  pullChain: () => dispatch({ type: 'PULL_CHAIN' })
});

Lightbulb.propTypes = {
  chain: PropTypes.number,
  pullChain: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lightbulb);
