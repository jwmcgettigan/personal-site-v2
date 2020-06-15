/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react';
import { NavLink } from 'react-router-dom';

import projects from '../../data/projects';
//import './Gallery.scss';
import { Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const Project = ({ project }) => {
  const theme = useTheme();

  const projectStyle = css(`
    display: grid;
    grid-template-rows: min-content auto;
    overflow: hidden;

    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.01, 1.01);
    }
  `)

  const imageStyle = css(`
    box-sizing: border-box;
    object-fit: cover;
    object-position: top;
    width: 100%;
    min-width: 16rem;
    height: 16rem;
  `)

  const infoStyle = css(`
    display: grid;
    grid-template-rows: min-content min-content auto;
    padding: 1rem;

    h3 {
      font-size: 1.125rem;
      //margin-bottom: 0.75rem;
      line-height: 1.2;
      font-weight: 500;
    }
  `)

  return (
  <NavLink to={"/project/" + project.name.replace(/ /g, '-').toLowerCase()} className={'nav-link'} exact>
    <Paper elevation={2} css={projectStyle}>
      <img css={imageStyle} src={require("../../assets/Projects/" + project.image)} alt=""/>
      <div css={infoStyle}>
        <h3>{project.name}</h3>
      </div>
    </Paper>
  </NavLink>
)}

const galleryStyle = css(`
  margin: 0 -15px;
  padding: 0 !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem 2rem;
`)

const Gallery = ({ n=-1, slider }) => (
  <div css={galleryStyle} className="section">
    {projects.map((project, index) => {
      if (n < 0 || index <= n-1) {
        return <Project key={index} project={project}/>
      }
    })}
  </div>
)
 
export default Gallery;