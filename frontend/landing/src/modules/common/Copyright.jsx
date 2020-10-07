//#region Imports

/** @jsx jsx */
// Imports
import { css, jsx } from '@emotion/core';

// Import Components
import Icon from 'modules/common/Icon';

// Import helpers
import { color } from 'helpers';

//#endregion

/**
 * Component for displaying copyright 
 * information at the bottom of a page.
 */
const Copyright = ({ children, ...rest }) => {

  //#region CSS

  const style = theme => css`
    display: grid;
    gap: 0.25rem;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: Rubik, sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    color: ${color(theme.background).getContrastText(15).str};
  `;

  //#endregion

  //#region JSX
  
  return (
    <p css={style} {...rest}>
      Copyright
      <Icon icon={'FaRegCopyright'}/>
      {(new Date().getFullYear())} Justin McGettigan
    </p>
  );

  //#endregion

};

export default Copyright;