/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';

// Import helpers
import { elevate, mq, color, googleFileURL } from 'helpers';

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

    & > div {
      display: grid;
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
      display: grid;
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

    .repo-card {
      display: grid;
      align-content: flex-start;
      height: auto;

      .header {
        display: grid;
        justify-content: center;

        .name {
          line-height: 1;
        }
      }

      .content {
        height: auto;
      }

      .status {
        position: relative;
        height: auto;
        line-height: normal;
        li {
          display: flex;
          justify-content: center;
          strong { margin-right: 0.2rem; }
        }
      }
    }
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>Renegade</h2>
      </Header>
      <Section css={sectionStyle}>
        <div>
          <div>
            <h2>What is this project?</h2>
            <p>Renegade was a self driving car that me and my classmate David Cicerrello spent a semester working on for our Autonomous Robotic Systems course.  The course was composed of 4-5 groups of students each with their own car competitively completing a series of increasingly difficult challenges throughout the semester.  The course was inspired by the <a href="https://racecar.mit.edu/">MIT racecar</a>.</p>
          </div>
          <RepoCard username="jwmcgettigan" repo="renegade"/>
        </div>
        <div>
          <div>
            <h3>What kind of car was Renegade?</h3>
            <p>Renegade was a rally racing model car that we took apart and put back together so that it gained a brain and some senses.  In particular, the brain was the NVIDIA Jetson TX2 and the sensors were a lidar (Hokuyo Laser Range Finder) and a stereoscopic camera (StereoLabsZED).</p>
          </div>
          <img css={css`width:80%;`} src={googleFileURL("1GKyqTYFHC2n1GM8YQ4POU8DEMTUnqGUX")}/>
        </div>
      </Section>
      <Section css={sectionStyle}>
        <div>
          <h2>What were the challenges?</h2>
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
          <div css={css`grid-template-columns: 1fr 271px;`} className="videos">
            <iframe src="https://drive.google.com/file/d/1hPylMXipPmXH0asiaYOUh8mogN0U2NLp/preview"/>
            <iframe src="https://drive.google.com/file/d/1gWxxc7XTLbcXmmKFa4HCSZUlxzD1lU78/preview"/>
          </div>
        </div>

        <div>
          <div>
            <h3>Obstacle Detection & Lane Centering</h3>
            <p>This challenge entailed using the Lidar to go through a course by staying centered between two walls and to be able to stop or circumvent any obstacles along the path.</p>
          </div>
          <div css={css`grid-template-columns: 271px 1fr;`} className="videos">
            <iframe src="https://drive.google.com/file/d/1yxgHPOKaWoGiIgN_XKzwiiYcDobNNawc/preview"/>
            <iframe src="https://drive.google.com/file/d/1qJ5e0DmQJovCi_FOUIU14jYXoksrPjxN/preview"/>
          </div>
        </div>

        <div>
          <div>
            <h3>Visual Servoing Serpentine & Pole Bending</h3>
            <p>This challenge was required a different mindset from the previous ones.  Instead of following a course, we had to be able to navigate around certain landmarks (yellow cones and an orange cube) while maintaining a certain pattern/behavior (swerving in a serpentine pattern).</p>
          </div>
          <iframe src="https://drive.google.com/file/d/1gX9T9vYlBpcPUVCRjkMHWeRBnHgxWONX/preview"/>
        </div>

        <div>
          <div>
            <h3>A Multi-Car Race</h3>
            <p>The idea behind this 'final challenge' was to test what we learned from all of our earlier challenges while adding the element of another vehicle in the mix.  We had to go through the course as fast as possible while avoiding the other vehicle.</p>
          </div>
          <iframe src="https://drive.google.com/file/d/1yFMl4V9Q-ftioWnG1WYd9m6-QlpG5hRz/preview"/>
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