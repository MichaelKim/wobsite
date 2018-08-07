import React from 'react';
import PropTypes from 'prop-types';
import baguetteBox from 'baguettebox.js';

import { slugify } from '../../util';

import DefaultLayout from './default';

import 'baguettebox.js/dist/baguetteBox.min.css';

class ProjectLayout extends React.Component {
  componentDidMount = () => {
    baguetteBox.run('.slider-' + slugify(this.props.title));
  };

  render() {
    const { title, link, ghUser, ghRepo, slider, children } = this.props;
    const slug = slugify(title);

    return (
      <DefaultLayout title={title}>
        <article id="post" className="post">
          <div id="content" className="post-content">
            <header className="post-header">
              <h1 className="post-title">Project: {title}</h1>
              {ghUser ? (
                <h4>
                  Github:{' '}
                  {ghRepo ? (
                    <a href={'https://github.com/' + ghUser + '/' + ghRepo}>{ghRepo}</a>
                  ) : (
                    <a href={'https://github.com/LenKagamine/' + ghUser}>{ghUser}</a>
                  )}
                </h4>
              ) : null}
              {link ? (
                <h4 style={{ wordWrap: 'break-word' }}>
                  Link: <a href={'https://' + link}>{link}</a>
                </h4>
              ) : null}
            </header>

            <div style={{ textAlign: 'left' }}>
              {children}
              {slider ? (
                <div className={'imagebox slider-' + slug}>
                  {slider.map((caption, i) => (
                    <a href={'../images/' + slug + '-' + i + '.png'} data-caption={caption} key={slug + '-' + i}>
                      <img src={'../images/' + slug + '-' + i + '.png'} alt={caption} />
                    </a>
                  ))}{' '}
                </div>
              ) : null}
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
