/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useContext } from 'react';
import Gallery from '../Components/Gallery';
import { useTheme } from '@material-ui/core/styles';
import { zDepth } from '../helper';
import { TitleSection } from '../Components/Section';

import { StateContext } from '../App';

const Title = () => {
  const theme = useTheme();
  const titleStyle = css(`
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
  const projectPages = useContext(StateContext).projects;
  return (
    <main className={className}>
      <Title/>
      <Gallery subpath={'/project'} pages={projectPages}/>
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