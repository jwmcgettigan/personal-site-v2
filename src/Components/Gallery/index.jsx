import React from 'react';
import { NavLink } from 'react-router-dom';

import projects from '../../data/projects';
import './Gallery.scss';

const Project = ({ project }) => (
  <NavLink to={"/project/" + project.name.replace(/ /g, '-').toLowerCase()} className={'nav-link'} exact>
    <div className="project">
      <img src={require("../../assets/Projects/" + project.image)} alt=""/>
      <div className="info">
        <h3>{project.name}</h3>
      </div>
    </div>
  </NavLink>
)

const Gallery = ({ n=-1 }) => (
  <div className="gallery section">
    {projects.map((project, index) => {
      if (n < 0 || index <= n-1) {
        return <Project key={index} project={project}/>
      }
    })}
  </div>
)
 
export default Gallery;