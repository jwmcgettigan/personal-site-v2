import React from 'react';
import * as Icons from 'react-icons/fa';
import projects from '../../../../data/projects';
import './FeaturedProjects.scss';

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

const FeaturedProjects = () => (
  <section className="featured-projects">
    <h2>Featured Projects</h2>
    <div className="gallery">
      {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={require("../../../../assets/Projects/" + project.image)} alt=""/>
            <div className="info">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="links">
                { project.url.repo !== '' ? 
                  <Link url={project.url.repo} text={project.name + ' Repository'}
                    icon={{type: 'FaGithub', color: '#FFFFFF'}}/>
                  : ''
                }
                { project.url.demo !== '' ? 
                  <Link url={project.url.demo} text={project.name + ' Demo'}
                    icon={{type: 'FaPowerOff', color: '#FFFFFF'}}/>
                  : ''
                }
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </section>
)

export default FeaturedProjects;