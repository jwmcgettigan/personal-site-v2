/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { mq, zDepth, lighten, color } from '../../../4_Utilities';
import React from 'react';

const Projects = ({ projects, className }) => {
  const theme = useTheme();
  const projectsStyle = css(`
    .projectlist {
      display: grid;
      padding-top: 1rem;
      //! color: color(background, on, 0.7);
      //color: ${color(theme.palette.resume.left).getContrastText(9)};
      
      .project {
        //background: color(surface, dark, 0.7);
        //border: 1px solid color(background, on, 0.05);
        vertical-align: middle;
        padding: 0 0.5rem 0.5rem 0;
        
        h4 {
          white-space: nowrap;
        }
      }
    }

    h4 {
      line-height: 1.3rem;
      font-size: 17.3333px;
    }
    p {
      line-height: 1.3rem;
      font-size: 14.6667px;
    }
  `)

  return (
    <div css={projectsStyle} className={className}>
      <h1 className="title">PROJECTS</h1>
      <div className="projectlist">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h4>{project.name}</h4>
            <p>{project.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;