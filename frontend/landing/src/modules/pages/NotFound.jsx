/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';

const NotFound = (props) => {
  const style = theme => css`
    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
        cursor: pointer;
      }
    }
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>Page Not Found</h2>
      </Header>
      <Section>
        <h1>Page Not Found</h1>
        <a onClick={() => props.history.goBack()}>Return to previous page.</a>
      </Section>
    </Main>
  );
}

export default {
  name: 'Not Found',
  icon: 'FaExclamationTriangle',
  routeProps: {
    status: 404,
    component: NotFound
  }
};