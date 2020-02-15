import React from 'react';

const Projects = ({projects}) => (
  <section id="projects">
    <h1>PROJECTS</h1>
    <div className="table">
      {projects.map((project, index) => (
        <div className="row" key={index}>
          <div className="name">{project.name}</div>
          <div className="symbol">►</div>
          <div className="summary">{project.summary}</div>
        </div>
      ))}
    </div>
  </section>
)

export default Projects;