import React from 'react';
import Gallery from '../../Components/Gallery';
import './Projects.scss';
import { Paper } from '@material-ui/core';

const Title = () => (
  <Paper elevation={2} className="title title-section">
    <h2>Projects</h2>
    <p>Welcome to my project portfolio!</p>
    {/*<a href="#"><Icon icon="FaPaperPlane"/>Hire Me</a>*/}
  </Paper>
)

const Projects = () => (<>
  <main className="projects">
    <Title/>
    <Gallery/>
  </main>
</>)
 
export default Projects;


{/*
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
</div>*/}