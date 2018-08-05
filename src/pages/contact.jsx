import React from 'react';

import GithubIcon from '../components/icon-github.svg';
import LinkedinIcon from '../components/icon-linkedin.svg';

import PageLayout from '../layouts/page';

const ContactPage = () => (
  <PageLayout title="Contact">
    <div>
      <p>Want to have a chat? Feel free to contact me by:</p>
      <p>
        <b>Email: </b>
        <a href="mailto:michaelkim314@gmail.com">michaelkim314@gmail.com</a>
      </p>
      <p>
        <b>Github: </b>
        <a href="https://github.com/LenKagamine">
          <span className="icon">
            <img src={GithubIcon} />
          </span>
          <span className="username">LenKagamine</span>
        </a>
      </p>
      <p>
        <b>LinkedIn: </b>
        <a href="https://ca.linkedin.com/in/michaelkim314">
          <span className="icon">
            <img src={LinkedinIcon} />
          </span>
          <span className="username">michaelkim314</span>
        </a>
      </p>
    </div>
  </PageLayout>
);

export default ContactPage;
