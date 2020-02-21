import React from 'react';

import Link from '../../Components/Link';

import projects from '../../data/projects';
import './Projects.scss';

const Title = () => (
  <div className="title title-section">
    <h2>Projects</h2>
    <p>Welcome to my project portfolio!</p>
    {/*<a href="#"><Icon icon="FaPaperPlane"/>Hire Me</a>*/}
  </div>
)

const Gallery = () => (
  <div className="gallery section">
    {projects.map((project, index) => (
      <div className="project" key={index}>
        <img  src={require("../../assets/Projects/" + project.image)} alt=""/>
        <div className="info">
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <div className="links">
            { project.url.repo !== '' ? 
              <Link url={project.url.repo} title={project.name}
                icon={'FaGithub'}/>
              : ''
            }
            { project.url.demo !== '' ? 
              <Link url={project.url.demo} title={project.name}
                icon={'FaPowerOff'}/>
              : ''
            }
          </div>
        </div>
      </div>
    ))}
  </div>
)

const Projects = () => (<>
  <main className="projects">
    <Title/>
    <Gallery/>
  </main>
</>)
 
export default Projects;