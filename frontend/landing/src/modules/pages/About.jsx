/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Link } from "react-router-dom";

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';

// Import helpers
import { elevate, mq, color } from 'helpers';

const About = (props) => {
  const style = theme => css`
    height: 100%;
    //font-size: 1.25rem;

    .hoverbox {
      width: 100px;
      height: 100px;
      background: white;
      margin-top: 2rem;
      margin-bottom: 2rem;
      ${elevate(1)};

      animation: hover 0.5s alternate infinite;
    }

    @keyframes hover {
      0% {
        ${elevate(1)};
      }
      100% {
        ${elevate(24)};
      }
    }

    .testbox {
      width: 50px;
      height: 50px;
      background: white;
      color: black;

      animation: breath 3s alternate infinite;
    }

    @keyframes breath {
      0% {
        width: 50px;
        height: 50px;
      }
      100% {
        width: 500px;
        height: 500px;
      }
    }
  `;

  const elevatorPitch = `
    Hello there!  I'm a software developer and aspiring software engineer.  My background is that I live in Florida and studied computer science at Florida Polytechnic University.  I have a LOT of interests but my primary ones would have to be web novels, art, game design, software development, augmented reality, autonomous systems, and programming.
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>About Me</h2>
      </Header>
      <Section>
        <h2>Introduction</h2>
        <p>{elevatorPitch}</p>
        <div className="hoverbox"/>
        <div className="testbox">
          {elevatorPitch}
        </div>
      </Section>
    </Main>
  );
}

export default {
  name: 'About',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/',
    exact: true,
    component: About
  }
};