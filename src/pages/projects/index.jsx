import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import PageLayout from '../../components/layouts/page';

import { slugify } from '../../util';

import './main.scss';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: ''
    };
  }

  clickTool = tool => {
    this.setState(state => {
      console.log(tool);
      if (state.selectedTool === tool) {
        return {
          selectedTool: ''
        };
      }
      return {
        selectedTool: tool
      };
    });
  };

  render() {
    const { selectedTool } = this.state;
    const edges = this.props.data.allMarkdownRemark.edges;
    const projectImages = this.props.data.allFile.edges;

    const projects = edges
      .map(({ node }) => node.frontmatter)
      .map(project => {
        const slug = slugify(project.title);
        const image = projectImages.find(pi => pi.node.name === slug);
        return Object.assign(project, {
          slug,
          image: image ? image.node.childImageSharp.fixed : null
        });
      });

    const filteredProjects = projects
      .filter(project => selectedTool === '' || project.tools.split(', ').indexOf(selectedTool) > -1)
      .sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      });

    const tools = projects
      .map(project => project.tools)
      .reduce((acc, val) => acc.concat(val.split(', ')), [])
      .sort()
      .filter((tool, i, arr) => {
        if (i === 0) return true;
        return arr[i - 1] !== tool;
      });

    return (
      <PageLayout title="Projects">
        <div className="project-list">
          <ul style={{ marginLeft: 0 }}>
            {tools.map(tool => (
              <li className="tools" onClick={() => this.clickTool(tool)} key={tool}>
                <span style={{ color: selectedTool === tool ? 'blue' : 'black' }}>{tool}</span>
              </li>
            ))}
          </ul>
          <div>
            {filteredProjects.map(project => (
              <Link to={'/project/' + project.slug} className="fade-link project-link" key={project.title}>
                <div className="project">
                  {project.image ? (
                    <Img
                      fixed={project.image}
                      className="project-image"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  ) : null}
                  <div className="project-box">
                    <h2>{project.title}</h2>
                    <h3>{project.description}</h3>
                    <h4>Tools: {project.tools}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/src/pages/projects/.+md/" } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            link
            description
            tools
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "project-images" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 400, height: 225) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`;
