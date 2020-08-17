/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Basic from './Basic';

// Import helpers
import { mq, color, elevate } from 'helpers';

const Resume = ({ className }) => {
  const style = css`
    display: grid;
    justify-items: center;
  `;

  const docStyle = css`
    background: white;
    ${elevate(24)};
  `;

  return (
    <Main css={style}>
      <Basic css={docStyle}/>
    </Main>
  );
}

export default {
  name: 'Resume',
  icon: 'FaFileAlt',
  routeProps: {
    path: '/resume',
    exact: true,
    component: Resume
  }
};