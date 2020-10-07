//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';

// Import helpers
import {} from 'helpers';

//#endregion

/**
 * Component for viewing a responsive grid of card components.
 */
const Gallery = (props) => {
  const style = css`
    height: 100%;
  `;

  return (
    <Main css={style} {...props}>
      
    </Main>
  );
}

export default {
  name: 'Gallery',
  icon: 'MdWallpaper',
  routeProps: {
    path: '/gallery',
    exact: true,
    component: Gallery
  }
};