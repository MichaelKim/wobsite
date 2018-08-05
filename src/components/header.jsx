import React from 'react';
import Link from 'gatsby-link';

import MenuIcon from './icon-menu.svg';
import GithubIcon from './icon-github.svg';
import LinkedinIcon from './icon-linkedin.svg';

import './header.scss';

const Header = () => (
  <header className="site-header">
    <div className="wrapper">
      <Link to="/" id="site-title">
        Michael Kim
      </Link>

      <nav className="site-nav">
        <a className="menu-icon">
          <img src={MenuIcon} />
        </a>
        <div id="menu">
          <Link to="/about/" className="fade-link">
            About
          </Link>
          <Link to="/projects/" className="fade-link">
            Projects
          </Link>
          <Link to="/blog/" className="fade-link">
            Blog
          </Link>
          <a href="/Michael-Kim-Resume.pdf">Resume</a>
          <Link to="/contact/" className="fade-link">
            Contact
          </Link>

          <a href="https://github.com/LenKagamine" style={{ textDecoration: 'none' }}>
            <span className="icon">
              <img src={GithubIcon} />
            </span>
          </a>
          <a href="https://ca.linkedin.com/in/michaelkim314" style={{ textDecoration: 'none' }}>
            <span className="icon">
              <img src={LinkedinIcon} />
            </span>
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
