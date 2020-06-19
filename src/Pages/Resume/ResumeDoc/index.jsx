/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { mq, zDepth, lighten } from '../../../helper';

import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';

import resume from '../../../data/resumeV2';
//import './ResumeDoc.scss';

const Resume = () => {
  const theme = useTheme();
  const resumeStyle = css(`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 816px;
    height: 1056px;
    ${zDepth(24)};

    //background: ${theme.palette.background};
    //color: ${theme.palette.getContrastText(theme.palette.background)};

    //box-shadow: 0 1rem 3rem rgba(0,0,0,0.275);
    margin: 3rem auto;
    transform-origin: top;

    ${mq('tablet-wide')} {
      transform: scale(0.9);
      zoom: 0.9;
    }
    ${mq('desktop')} {
      transform: scale(1.1);
    }
    ${mq('desktop-wide')} {
      transform: scale(1.3);
    }

    a:hover {
      color: ${theme.palette.primary.main};
    }
  
    .title {
      color: ${theme.palette.primary.main};
      border-bottom: 4px solid ${lighten(theme.palette.primary.main, 5)};
      margin: 0;
      font-size: 26.6667px;
      line-height: 1.25;
    }
    
    p, h4, ul {
      margin: 0;
      margin-top: 6px;
    }
  `)

  const leftStyle = css(`
    padding: 1rem;
    width: 228px;
    width: min-content;
    background: ${theme.palette.surface};

    display: grid;
    grid-row-gap: 0.5rem;
  `)

  const rightStyle = css(`
    padding: 1rem;
    width: 587px;
    background: ${theme.palette.background};

    display: grid;
    grid-template-rows: min-content;
    grid-row-gap: 1rem;
  `)

  return (
    <article css={resumeStyle}>
      <div css={leftStyle}>
        <Info basics={resume.basics}/>
        <Skills skills={resume.skills}/>
        <Education education={resume.education}/>
        <Interests interests={resume.interests}/>
      </div>
      <div css={rightStyle}>
        <Experience experience={resume.work}/>
        <Projects projects={resume.publications}/>
      </div>
    </article>
  )
};

export default Resume;