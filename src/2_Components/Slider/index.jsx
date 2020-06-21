import React from 'react';
import { NavLink } from 'react-router-dom';

import { projects } from '../../3_Data';
import './Slider.scss';

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

const Slider = ({ n=-1 }) => {
  
}
 
export default Slider;