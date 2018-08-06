import React from 'react';

import GithubIcon from '../components/icon-github';
import LinkedinIcon from '../components/icon-linkedin';

import PageLayout from '../layouts/page';

const ContactPage = () => (
  <PageLayout title="Contact">
    <div>
      <p>Want to have a chat? Feel free to contact me by:</p>
      <p>
        <b>Email: </b>
        <a href="mailto:michaelkim314@gmail.com"> michaelkim314@gmail.com</a>
      </p>
      <p>
        <b>Github: </b>
        <a href="https://github.com/LenKagamine">
          <GithubIcon />
          <span className="username"> LenKagamine</span>
        </a>
      </p>
      <p>
        <b>LinkedIn: </b>
        <a href="https://ca.linkedin.com/in/michaelkim314">
          <LinkedinIcon />
          <span className="username"> michaelkim314</span>
        </a>
      </p>
    </div>
  </PageLayout>
);

export default ContactPage;
