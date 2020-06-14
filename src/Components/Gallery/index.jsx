import React from 'react';
import { NavLink } from 'react-router-dom';

import projects from '../../data/projects';
import './Gallery.scss';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  project: {
    display: 'grid',
    gridTemplateRows: 'min-content auto',
    backgroundColor: theme.palette.background[100],
    overflow: 'hidden'
  },
  info: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const Project = ({ project }) => {
  const classes = useStyles();
  return (
  <NavLink to={"/project/" + project.name.replace(/ /g, '-').toLowerCase()} className={'nav-link'} exact>
    <Paper elevation={2} className={classes.project + " project"}>
      <img src={require("../../assets/Projects/" + project.image)} alt=""/>
      <div className={classes.info + " info"}>
        <h3>{project.name}</h3>
      </div>
    </Paper>
  </NavLink>
)}

const Gallery = ({ n=-1, slider }) => (
  <div className="gallery section">
    {projects.map((project, index) => {
      if (n < 0 || index <= n-1) {
        return <Project key={index} project={project}/>
      }
    })}
  </div>
)
 
export default Gallery;