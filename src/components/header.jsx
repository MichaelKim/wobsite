import React from 'react';
import { Link } from 'gatsby';

import MenuIcon from './icon-menu';
import GithubIcon from './icon-github';
import LinkedinIcon from './icon-linkedin';

import './header.scss';

const Header = () => (
  <header className="site-header">
    <div className="wrapper">
      <Link to="/" id="site-title">
        Michael Kim
      </Link>

      <nav className="site-nav">
        <div className="menu-icon">
          <MenuIcon />
        </div>
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
            <GithubIcon />
          </a>
          <a href="https://ca.linkedin.com/in/michaelkim314" style={{ textDecoration: 'none' }}>
            <LinkedinIcon />
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
