//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Article from 'modules/common/Article';
import Header from 'modules/common/Header';

//#endregion

/**
 * Page for informing the user that a url
 * does not exist for any purpose.
 */
const NotFound = (props) => {

  //#region CSS

  const style = theme => css`
    article { width: 100%; }
  `;

  //#endregion

  //#region JSX

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

  //#endregion

};

export default {
  name: 'Not Found',
  icon: 'FaExclamationTriangle',
  routeProps: {
    status: 404,
    component: NotFound
  }
};