/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react';
import { Button } from '../../Components/Link';
import { TitleSection } from '../../Components/Section';

import ProfilePicture from '../../assets/body-shot-placeholder.jpg';
import pages from '../../data/staticPages';

//pages.find(page => page.name === 'Resume')
import { useTheme } from '@material-ui/core/styles';
import { mq, zDepth } from '../../helper';

const AboutMe = () => {
  const theme = useTheme();

  const aboutMeStyle = css(`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto min-content;
    justify-content: center;
    grid-gap: 3rem;
    margin: auto;

    ${mq('desktop')} {
      grid-template-columns: auto min-content;
      grid-template-rows: 1fr;
    }
    img {
      border-radius: 0;
      align-self: center;
      width: 256px;
    }
  `)

  const profileStyle = css(`
    //color: ${theme.palette.getContrastText(theme.palette.surface)};
    h2 {
      font-size: 3rem;
      //! color: color(background, on);
      color: ${theme.palette.getContrastText(theme.palette.surface)};
      margin-bottom: 0.25rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.5rem;
      text-align: left;
    }

    .buttons {
      display: flex;
      margin-bottom: 1.5rem;

      a {
        margin-right: 0.5rem;
        margin-bottom: 1rem;
        &:first-of-type {
          background: ${theme.palette.primary.dark};
          color: ${theme.palette.getContrastText(theme.palette.primary.dark)};
        }
        &:last-of-type {
          background: ${theme.palette.primary.main};
          color: ${theme.palette.getContrastText(theme.palette.primary.main)};
        }
        &:hover {
          filter: none;
          transform: scale(1.1, 1.1);
        }
      }
    }
  `)

  return (
    <TitleSection>
      <div css={aboutMeStyle} className="card">
        <div css={profileStyle}>
          <h2>Justin McGettigan</h2>
          <h3>Aspiring Software Engineer</h3>
          <p>
            I'm an aspiring software engineer who loves learning about the cutting edge technologies that are shaping the future of our world.  
            With strong experience developing sensor fusion and tracking algorithms,
            I believe that computer vision, machine learning, and augmented reality are the future.
          </p>
          <div className="buttons">
            <Button type="pagelink" page={pages.find(page => page.name === 'Projects')}/>
            <Button type="pagelink" page={pages.find(page => page.name === 'Resume')}/>
          </div>
        </div>
        <img src={ProfilePicture} alt="Profile"/> 
      </div>
    </TitleSection>
  )
}

export default AboutMe;