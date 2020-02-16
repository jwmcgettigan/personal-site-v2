import React from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';
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

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Projects = () => (<>
  <Navigation/>
  <main id="projects">
    <div className="gallery">
      {projects.map((project) => {
        let color = "#"+((1<<24)*Math.random()|0).toString(16);
        return (
          <div className="project">
            <img style={{backgroundColor: color}}></img>
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
  </main>
  <Footer/>
</>)
 
export default Projects;