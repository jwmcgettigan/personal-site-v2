/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Basic from './Basic';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';

// Import helpers
import { mq, color, elevate } from 'helpers';

const Resume = ({ className }) => {
  const style = theme => css`
    display: grid;
    justify-items: left;
  `;

  const docStyle = css`
    //margin: 3rem;
    ${elevate(24)};
  `;

  return (
    <Main css={style}>
      <Header>
        <h2>Resume</h2>
      </Header>
      <Section>
        <Basic css={docStyle}/>
      </Section>
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