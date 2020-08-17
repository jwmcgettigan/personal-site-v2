/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Main from 'modules/common/Main';

const NotFound = (props) => {

  return (
    <Main {...props}>
      <h1>Page Not Found</h1>
    </Main>
  );
}

export default {
  name: 'NotFound',
  icon: 'FaExclamationTriangle',
  routeProps: {
    status: 404,
    component: NotFound
  }
};