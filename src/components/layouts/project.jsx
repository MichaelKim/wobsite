import React from 'react';
import PropTypes from 'prop-types';
import baguetteBox from 'baguettebox.js';

import { slugify } from '../../util';

import DefaultLayout from './default';

import 'baguettebox.js/dist/baguetteBox.min.css';

class ProjectLayout extends React.Component {
  componentDidMount = () => {
    baguetteBox.run('.imagebox');
  };

  render() {
    const { title, link, ghUser, ghRepo, slider, children } = this.props;
    const slug = slugify(title);

    const githubLink = ghUser ? (
      <h4>
        Github:{' '}
        {ghRepo ? (
          <a href={'https://github.com/' + ghUser + '/' + ghRepo}>
            {ghUser}/{ghRepo}
          </a>
        ) : (
          <a href={'https://github.com/LenKagamine/' + ghUser}>{ghUser}</a>
        )}
      </h4>
    ) : null;

    const externalLink = link ? (
      <h4 style={{ wordWrap: 'break-word' }}>
        Link: <a href={'https://' + link}>{link}</a>
      </h4>
    ) : null;

    const sliderBox = slider ? (
      <div className='imagebox'>
        {slider.map((caption, i) => (
          <a
            href={'/images/' + slug + '-' + i + '.png'}
            data-caption={caption}
            key={slug + '-' + i}
          >
            <img src={'/images/' + slug + '-' + i + '.png'} alt={caption} />
          </a>
        ))}
      </div>
    ) : null;

    return (
      <DefaultLayout title={title}>
        <article id='post' className='post'>
          <div id='content' className='post-content'>
            <header className='post-header'>
              <h1 className='post-title'>Project: {title}</h1>
              {githubLink}
              {externalLink}
            </header>

            <div style={{ textAlign: 'left' }}>
              {children}
              {sliderBox}
            </div>
          </div>
        </article>
      </DefaultLayout>
    );
  }
}

ProjectLayout.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  ghUser: PropTypes.string,
  ghRepo: PropTypes.string,
  slider: PropTypes.array,
  children: PropTypes.node
};

export default ProjectLayout;
