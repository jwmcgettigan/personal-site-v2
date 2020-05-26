import React from 'react';
import Link, { Button } from '../../../Components/Link';

import projects from '../../../data/projects';
import './FeaturedProjects.scss';
import { NavLink } from 'react-router-dom';

const FeaturedProjects = () => (
  <div className="featured-projects section">
    <h2>Featured Projects</h2>

    <section className="gallery">
      {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="content">
              <img src={require("../../../assets/Projects/" + project.image)} alt=""/>
              <div className="info">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="links">
                  { project.url.repo !== '' ? 
                    <Link url={project.url.repo} title={project.name + ' Repository'}
                      icon={'FaGithub'}/>
                    : ''
                  }
                  { project.url.demo !== '' ? 
                    <Link url={project.url.demo} title={project.name + ' Demo'}
                      icon={'FaPowerOff'}/>
                    : ''
                  }
                </div>
              </div>
            </div>
            <div className="hover-mask">
              <NavLink to={"/project/" + project.name.replace(/ /g, '-').toLowerCase()} className={'button nav-link'} exact>
                {"View Project"}
              </NavLink>
            </div>
          </div>
        )
      )}
    </section>

  </div>
)

export default FeaturedProjects;