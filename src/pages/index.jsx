import React from 'react';
import Link from 'gatsby-link';

import './index.scss';

const IndexPage = () => (
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
    <h3>Student, Programmer, Gamer</h3>

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

export default IndexPage;
