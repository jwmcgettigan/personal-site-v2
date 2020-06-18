/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { bp, mq, zDepth } from '../../helper';

import React from 'react';
import './Project.scss';
import Icon from '../../Components/Icon';
import ReactMd from 'react-md-file';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ClientSection = ({ project }) => (
  <div className="client section">
    <img src={require("../../assets/Projects/" + project.image)} alt=""/>
    <div className="info">
      <h3>{project.client.name}</h3>
      <div className="metadata">
        <span><Icon icon="FaIndustry"/>&nbsp;Industry: {project.client.industry}</span>
        <span><Icon icon="FaUsers"/>&nbsp;Size: {project.client.size}</span>
        <span><Icon icon="FaLink"/>&nbsp;Website: <a href={project.client.website}>{project.client.website}</a></span>
      </div>
      <p>{project.client.description}</p>
      <h4>Project Requirements</h4>
      <ul>
        {project.requirements.map((req, i) => <li key={i}>{req}</li>)}
      </ul>
    </div>
  </div>
)

const ProjectContent = ({ project }) => (
  <div className="project-sections section">
    <ReactMd fileName={project.content}/>
  </div>
)

const Project = ({project}) => {

  return (
    <main id="project">
      <Paper elevation={2} className="title-section">
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </Paper>
      <ClientSection project={project}/>
      <ProjectContent project={project}/>
    </main>
  )
}

export default Project;