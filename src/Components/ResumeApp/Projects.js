import React from 'react';
import * as Icons from 'react-icons/fa';

import projects from '../../data/projects';

const Link = ({url, text, icon}) => {
  const Icon = Icons[icon.type]
  return (
    <a href={url}>
      <span title={text}>
        <Icon color={icon.color}/>
      </span>
    </a>
  )
}

const Projects = () => (
  <section id="projects">
    <h1>PROJECTS</h1>
    <div className="gallery">
      {projects.map((project, index) => {
        let color = "#"+((1<<24)*Math.random()|0).toString(16);
        return (
          <div className="project" key={index}>
            <img style={{backgroundColor: color}} alt=""/>
            <h3>{project.name}</h3>
            <p>{project.summary.substring(0, 28) + '...'}</p>
            <div className="links">
              { project.url.repo !== '' ? 
                <Link url={project.url.repo} text={project.name}
                  icon={{type: 'FaGithub', color: '#FFFFFF'}}/>
                : ''
              }
              { project.url.demo !== '' ? 
                <Link url={project.url.demo} text={project.name}
                  icon={{type: 'FaPowerOff', color: '#FFFFFF'}}/>
                : ''
              }
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

export default Projects;