import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './lightbulb.scss';

class Lightbulb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { changed: false };
  }

  pullChain = () => {
    this.setState({
      changed: true
    });
    this.props.pullChain();
  };

  render() {
    const { chain } = this.props;
    const { changed } = this.state;

    const style = changed ? (chain % 2 === 1 ? 'light-off' : 'light-on') : '';

    return (
      <div className={'lightbulb ' + style} onClick={this.pullChain}>
        <div className="chain" />
        <div className="handle" />
      </div>
    );
  }
}

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
