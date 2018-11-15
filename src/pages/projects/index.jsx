import React from 'react';
import { Link, graphql } from 'gatsby';

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
    const projects = edges
      .filter(({ node }) => /\/src\/pages\/projects\/.+\.md/.exec(node.fileAbsolutePath))
      .map(({ node }) => node.frontmatter)
      .map(project => Object.assign(project, { slug: slugify(project.title) }));

    const filteredProjects = projects
      .filter(project => selectedTool === '' || project.tools.split(', ').indexOf(selectedTool) > -1)
      .sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      });

    const tools = projects
      .map(project => project.tools)
      .reduce((acc, val) => {
        return acc.concat(val.split(', '));
      }, [])
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
          <p />
          {filteredProjects.map(project => (
            <Link to={'/project/' + project.slug} className="fade-link project-link" key={project.title}>
              <div className="project" style={{ backgroundImage: 'url(/images/' + project.slug + '.png)' }}>
                <div className="project-box">
                  <h2>{project.title}</h2>
                  <h3>{project.description}</h3>
                  <h4>Tools: {project.tools}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageLayout>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fileAbsolutePath
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
  }
`;
