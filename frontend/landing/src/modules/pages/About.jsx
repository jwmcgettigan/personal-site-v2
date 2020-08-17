/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Link } from "react-router-dom";

// Import components
import Main from 'modules/common/Main';

// Import helpers
import { elevate, mq, color } from 'helpers';

const About = (props) => {
  const style = css`
    height: 100%;
  `;

  const sectionStyle = theme => css`
    margin: 2rem;
    padding: 2rem;
    background: ${color(theme.primary.main).setAlpha(0.8).str};
    color: ${color(theme.primary.main).getContrastText(15).str};
    border: 3px solid ${theme.secondary.light};
    width: 50rem;
    justify-self: center;

    h2 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }
  `;

  const elevatorPitch = `
    Hello there!  I'm a software developer and aspiring software engineer.  My background is that I live in Florida and studied computer science at Florida Polytechnic University.  I have a LOT of interests but my primary ones would have to be web novels, art, game design, software development, augmented reality, autonomous systems, and programming.
  `;

  return (
    <Main css={style} {...props}>
      <div css={sectionStyle}>
        <h2>About Me</h2>
        <p>{elevatorPitch}</p>
      </div>
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