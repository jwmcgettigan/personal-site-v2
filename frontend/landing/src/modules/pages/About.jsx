/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Link } from "react-router-dom";

// Import components
import Main from 'modules/common/Main';

// Import helpers
import { elevate, mq, color } from 'helpers';

const About = ({ theme, staticContext, ...props }) => {
  const style = css`
    height: 100%;
  `;

  return (
    <Main css={style} {...props}>
      
    </Main>
  );
}

export default {
  name: 'About',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/',
    exact: true,
    component: withTheme(About)
  }
};