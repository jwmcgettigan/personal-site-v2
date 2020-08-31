/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Basic from './Basic';
import Header from 'modules/common/Header';

// Import helpers
import { mq, color, elevate } from 'helpers';

const Resume = ({ className }) => {
  const style = theme => css`
    display: grid;
    justify-items: center;
  `;

  const docStyle = css`
    margin: 3rem;
    ${elevate(24)};
  `;

  return (
    <Main css={style}>
      <Header>
        <h2>Resume</h2>
      </Header>
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