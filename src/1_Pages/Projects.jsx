/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useContext } from 'react';
import { zDepth, StateContext, clone } from '../4_Utilities';
import { TitleSection, Gallery } from '../2_Components';

const Title = () => {
  const titleStyle = theme => css(`
    display: grid;
    //margin: auto;
    justify-content: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
      text-align: center;
    }
    p {
      margin-bottom: 1rem;
      white-space: nowrap;
    }
  `)

  return (
    <TitleSection css={titleStyle}>
      <h2>Projects</h2>
      <p>Welcome to my project portfolio!</p>
      {/*<a href="#"><Icon icon="FaPaperPlane"/>Hire Me</a>*/}
    </TitleSection>
  )
}

const Projects = ({ className }) => {
  const notionAPI = useContext(StateContext).notionAPI;
  //console.log(clone(notionAPI))
  return (
    <main className={className}>
      <Title/>
      {notionAPI.isLoading ? <div>Loading ...</div>
      : <Gallery subpath={'/project'} pages={notionAPI.data.projectPages}/>}
    </main>
  )
}
 
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