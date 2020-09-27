/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import ReactPlayer from 'react-player';
import { RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';
import Video from 'modules/common/Video';
import Image from 'modules/common/Image';

// Import helpers
import { elevate, mq, color, googleFileURL, youtubeEmbedURL } from 'helpers';

const Renegade = (props) => {
  const style = theme => css`
    height: 100%;

    h4 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }
  `;

  const sectionStyle = theme => css`
    display: grid;
    gap: 2rem;
    height: 100%;
    //font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 1.5rem;
    //width: 50rem;

    & > div {
      display: grid;
      //width: 50rem;
      gap: 1rem;
    }

    .row {
      display: grid;
      grid-auto-flow: column;
      justify-content: left;
      gap: 2rem;
    }

    .block {
      display: grid;
      align-content: flex-start;
      h3 { 
        margin-bottom: 1rem;
      }
    }

    .videos {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: left;
    }

    iframe {
      width: 100%;
      max-width: 880px;
      height: 480px;
    }

    h3 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }

    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
      }
    }
  `;

  const imageStyle = css`
    width: 60rem;
    ${elevate(4)};

    img {
      object-position: bottom;
    }
  `;

  //<RepoCard username="jwmcgettigan" repo="renegade"/>

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>Renegade</h2>
      </Header>
      <Section css={sectionStyle}>
        <div css={css`
            display: flex !important;`}>
          <Image css={imageStyle} src="/assets/projects/Renegade.jpg"/>
          <div>
            <h2>What is this project?</h2>
            <p>Renegade was a self driving car that me and my classmate <a href="https://www.linkedin.com/in/david-ciccarello/">David Cicerrello</a> spent a semester working on for our Autonomous Robotic Systems course, instructed by <a href="https://www.linkedin.com/in/dean-bushey/">Dean Bushey</a>.  The course was composed of 4-5 groups of students each with their own car competitively completing a series of increasingly difficult challenges throughout the semester.  The course was inspired by the <a href="https://racecar.mit.edu/">MIT racecar project</a>.</p>
          </div>
        </div>
        <div>
          <div>
            <h3>What kind of car was Renegade?</h3>
            <p>Renegade was a <a href="https://www.amainhobbies.com/traxxas-rally-rtr-1-10-4wd-rally-racer-tra74076-1/p403885">Traxxas 74076 Rally 1/10 Brushless Rally Racer</a> that we took apart and put back together so that it gained a brain and some senses.  In particular, the brain was the NVIDIA Jetson TX2 and the sensors were a lidar (Hokuyo Laser Range Finder) and a stereoscopic camera (StereoLabsZED).</p>
          </div>
          <img css={css`width:80%;`} src={googleFileURL("1GKyqTYFHC2n1GM8YQ4POU8DEMTUnqGUX")}/>
        </div>
      </Section>
      <Section css={sectionStyle}>
        <h2>What were the challenges?</h2>
        <div>
          <ul>
            <li>Line Following</li>
            <li>Obstacle Detection & Lane Centering</li>
            <li>Visual Servoing Serpentine & Pole Bending</li>
            <li>A Multi-Car Race</li>
          </ul>
        </div>

        <div>
          <div>
            <h3>Line Following</h3>
            <p>This was our first challenge and the one that forced me to learn python very quickly as I hadn't used it before this taking this course.  We essentially needed to use our stereoscopic camera to go through a course by staying centered upon a blue line in the form of blue tape along the ground.</p>
          </div>
          <div className="videos">
            <Video css={css`width:271px !important;`} src={youtubeEmbedURL('kyWz21H-jaM')}/>
            <Video css={css`width:271px !important;`} src={youtubeEmbedURL('bWIslaxpfDk')}/>
          </div>
        </div>

        <div>
          <div>
            <h3>Obstacle Detection & Lane Centering</h3>
            <p>This challenge entailed using the Lidar to go through a course by staying centered between two walls and to be able to stop or circumvent any obstacles along the path.</p>
          </div>
          <div className="videos">
            <Video css={css`width:271px !important;`} src={youtubeEmbedURL('_oDNLpHoLfE')}/>
            <Video src={youtubeEmbedURL('9-QTUsi3jeA')}/>
          </div>
        </div>

        <div>
          <div>
            <h3>Visual Servoing Serpentine & Pole Bending</h3>
            <p>This challenge was required a different mindset from the previous ones.  Instead of following a course, we had to be able to navigate around certain landmarks (yellow cones and an orange cube) while maintaining a certain pattern/behavior (swerving in a serpentine pattern).</p>
          </div>
          <Video src={youtubeEmbedURL('ZQqze9KQkP8')}/>
        </div>

        <div>
          <div>
            <h3>A Multi-Car Race</h3>
            <p>The idea behind this 'final challenge' was to test what we learned from all of our earlier challenges while adding the element of another vehicle in the mix.  We had to go through the course as fast as possible while avoiding the other vehicle.</p>
          </div>
          {/* <ReactPlayer url={youtubeEmbedURL('nmcDLAjBWmQ')}/> */}
          <Video src={youtubeEmbedURL('nmcDLAjBWmQ')}/>
        </div>
      </Section>
      <Section>
        <div css={css`text-align: right;`}>
          Last Updated: 2020-09-13
        </div>
      </Section>
    </Main>
  );
}

export default {
  name: 'Renegade',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/portfolio/renegade',
    exact: true,
    component: Renegade
  }
};