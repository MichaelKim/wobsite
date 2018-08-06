import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { connect } from 'react-redux';

import './index.scss';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prev: this.props.chain };
  }

  render() {
    const { chain } = this.props;
    const { prev } = this.state;

    const bios = [
      'Student, Programmer, Gamer',
      "Yahoo Intern: May - Aug '17",
      "Facebook Intern: Jan - Apr '18",
      'Student, Programmer, Gamer'
    ];

    if (bios[prev] !== bios[chain]) {
      setTimeout(() => this.setState({ prev: chain }), 370);
    }

    return (
      <div className="box">
        <img
          src="https://avatars1.githubusercontent.com/u/8509052"
          alt="author photo"
          className="img-circle"
          width="150"
          height="150"
        />
        <h1>
          <span className="no-wrap">Hello, I'm</span>{' '}
          <span className="no-wrap">
            <b>Michael Kim</b>!
          </span>
        </h1>
        <h3
          style={{
            transition: 'opacity 0.37s',
            opacity: bios[chain] === bios[prev] ? 1 : 0
          }}
        >
          {bios[prev]}
        </h3>

        <hr className="hline" />

        <Link to="/about/" className="btn">
          about
        </Link>
        <Link to="/projects/" className="btn">
          projects
        </Link>
        <Link to="/blog/" className="btn">
          blog
        </Link>
        <a href="https://github.com/LenKagamine/" className="btn">
          github
        </a>
        <a href="/Michael-Kim-Resume.pdf" className="btn">
          resume
        </a>

        <hr className="hline" />
      </div>
    );
  }
}

const mapStateToProps = ({ chain }) => ({ chain });

IndexPage.propTypes = {
  chain: PropTypes.number
};

export default connect(
  mapStateToProps,
  null
)(IndexPage);
