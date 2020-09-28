/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Main from 'modules/common/Main';
import Article from 'modules/common/Article';
import Header from 'modules/common/Header';

const NotFound = (props) => {
  const style = theme => css`
    article { width: 100%; }
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>Page Not Found</h2>
      </Header>
      <Article>
        <h1>Page Not Found</h1>
        <a onClick={() => props.history.goBack()}>Return to previous page.</a>
      </Article>
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