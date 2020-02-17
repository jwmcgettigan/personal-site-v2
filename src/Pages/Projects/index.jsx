import React from 'react';

import projects from '../../data/projects';
import './Projects.scss';
import * as Icons from 'react-icons/fa';

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

const Icon = ({icon}) => {
  const Icon = Icons[icon];
  return (
    <Icon/>
  )
}

const Title = () => (
  <section className="title">
    <h2>Projects</h2>
    <p>Welcome to my project portfolio!</p>
    <a href="#"><Icon icon="FaPaperPlane"/>Hire Me</a>
  </section>
)

const Gallery = () => (
  <section className="gallery">
    {projects.map((project, index) => {
      let color = "#"+((1<<24)*Math.random()|0).toString(16);
      return (
        <div className="project" key={index}>
          <img  src={require("../../assets/Projects/" + project.image)} alt=""/>
          <div className="info">
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
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
        </div>
      )
    })}
  </section>
)

const Projects = () => (<>
  <main className="projects">
    <Title/>
    <Gallery/>
  </main>
</>)
 
export default Projects;