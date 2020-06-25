/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { mq, zDepth, color } from '../../../4_Utilities';

import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Info from './Info';
import Projects from './Projects';
import Skills from './Skills';

import { resume } from '../../../3_Data';

function scaleToScreen(width, height, proportional) {
  const currentWidth = width;
  const currentHeight = height;

  const availableHeight = window.innerHeight;
  const availableWidth = window.innerWidth;

  let scaleX = availableWidth / currentWidth;
  let scaleY = availableHeight / currentHeight;

  if (proportional) {
    scaleX = Math.min(scaleX, scaleY);
    scaleY = scaleX;
  }

  const translationX = Math.round((availableWidth - (currentWidth * scaleX)) / 2);
  const translationY = Math.round((availableHeight - (currentHeight * scaleY)) / 2);

  //const translate = `translate(${translationX}px, ${translationY}px)`
  const scale = `scale3d(${scaleX}, ${scaleY}, 1)`

  return `
    transform: translate(0px, 0px) ${scale};
    transform-origin: top left;
  `;
}

const ResumeDoc = ({ className }) => {
  const theme = useTheme();
  const ratio = 8.5 / 11.0; // Letter(US) dimensions in inches (W/H)
  const inverseRatio = 11.0 / 8.5;
  const width = 816, height = width * inverseRatio;
  const resumeStyle = css(`
    display: grid;/*
    justify-content: center;
    align-content: center;*/
    width: ${width}px;
    height: ${height}px;

    ${mq('tablet')} {
      width: ${width}px;
      height: ${height}px;
    }
    color: ${color(theme.palette.resume.left).getContrastText(13)};

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
    grid-column: 1;
    padding: 1rem;
    //width: 228px;
    //width: min-content;
    background: ${theme.palette.resume.left};

    display: grid;
    grid-row-gap: 0.5rem;
  `)

  const rightStyle = css(`
    grid-column: 2;
    padding: 1rem;
    //width: 587px;
    background: ${theme.palette.resume.right};

    display: grid;
    grid-template-rows: min-content;
    grid-row-gap: 1rem;
  `)

  return (
    <article css={resumeStyle} className={className}>
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

export default ResumeDoc;