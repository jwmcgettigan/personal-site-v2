/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from "react-router-dom";

// Import components
import Main from 'modules/common/Main';

// Import helpers
import { elevate, mq, color } from 'helpers';

const Blog = (props) => {
  const style = css`
    height: 100%;
  `;

  return (
    <Main css={style} {...props}>
      
    </Main>
  );
}

export default {
  name: 'Blog',
  icon: 'IoIosPaper',
  routeProps: {
    path: '/blog',
    exact: true,
    component: Blog
  }
};