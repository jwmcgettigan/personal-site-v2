import React from 'react';
import './Projects.scss';

const Projects = ({projects}) => (
  <div id="projects">
    <h1 className="title">PROJECTS</h1>
    {projects.map((project, index) => (
      <div key={index}>
        <h4>{project.name}</h4>
        <p>{project.summary}</p>
      </div>
    ))}
  </div>
)

export default Projects;