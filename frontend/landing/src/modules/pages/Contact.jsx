/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Link } from "react-router-dom";

// Import components
import Main from 'modules/common/Main';

// Import helpers
import { elevate, mq, color } from 'helpers';

const Contact = (props) => {
  const style = css`
    height: 100%;
  `;

  return (
    <Main css={style} {...props}>
      
    </Main>
  );
}

export default {
  name: 'Contact',
  icon: 'FaEnvelopeOpenText',
  routeProps: {
    path: '/contact',
    exact: true,
    component: Contact
  }
};