import React from 'react';
import Link from 'gatsby-link';

import styles from './header.module.scss';

import MenuIcon from './icon-menu.svg';

const Header = () => (
  <header className={styles.siteHeader}>
    <div className={styles.wrapper}>
      <Link to="/" id={styles.siteTitle}>
        Michael Kim
      </Link>

      <nav className={styles.siteNav}>
        <a className={styles.menuIcon}>
          <img src={MenuIcon} />
        </a>
        <div id={styles.menu}>
          <Link to="/about/" className="page-link fade-link">
            About
          </Link>
          <Link to="/projects/" className="page-link fade-link">
            Projects
          </Link>
          <Link to="/blog/" className="page-link fade-link">
            Blog
          </Link>
          <a className="page-link" href="/Michael-Kim-Resume.pdf">
            Resume
          </a>
          <Link to="/contact/" className="page-link fade-link">
            Contact
          </Link>

          <a href="https://github.com/LenKagamine" style={{ textDecoration: 'none' }}>
            <span className="icon">
              <svg viewBox="0 0 16 16">
                <path
                  id="menu-github"
                  fill="#000000"
                  d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"
                />
              </svg>
            </span>
          </a>
          <a href="https://ca.linkedin.com/in/michaelkim314" style={{ textDecoration: 'none' }}>
            <span className="icon">
              <svg viewBox="0 0 430 430">
                <path
                  id="menu-linkedin"
                  fill="#0083be"
                  d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471   c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z    M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563   c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z    M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621   c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531   c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99   c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"
                />
              </svg>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
