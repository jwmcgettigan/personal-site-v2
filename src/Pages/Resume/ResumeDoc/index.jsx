/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { mq, zDepth, lighten, color } from '../../../utils';

import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';

import { resume } from '../../../data/resumeV2';

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
    //color: ${color(theme.palette.background).getContrastText()};
    color: ${color(theme.palette.resume.left).getContrastText(13)};

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
      color: ${theme.palette.resume.title};
    }
  
    .title {
      color: ${theme.palette.resume.title};
      border-bottom: 4px solid ${color(theme.palette.resume.title).adjustBrightness(5)};
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
    background: ${theme.palette.resume.left};

    display: grid;
    grid-row-gap: 0.5rem;
  `)

  const rightStyle = css(`
    padding: 1rem;
    width: 587px;
    background: ${theme.palette.resume.right};

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