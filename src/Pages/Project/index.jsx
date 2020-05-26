import React from 'react';
import './Project.scss';
import Icon from '../../Components/Icon';
import ReactMd from 'react-md-file';

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
      <div className="title-section">
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </div>
      <ClientSection project={project}/>
      <ProjectContent project={project}/>
    </main>
  )
}

export default Project;