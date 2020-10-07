//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import helpers
import { elevate, mq, bp, color } from 'helpers';

//#endregion

//TODO: Use a better font for the header.

/**
 * Component for displaying information about the current page.
 */
const Header = ({ children, ...rest }) => {

  //#region CSS

  const style = theme => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    background: ${theme.primary.lighter};
    color: ${color(theme.primary.lighter).getContrastText(17).str};
    ${elevate(1)};
    z-index: 1;

    h2 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }

    .container {
      width: 100%;
      display: flex;
      justify-items: left;
      align-items: center;
      padding: 1.25rem;
      max-width: 50rem;

      ${mq('tablet')} {
        padding: 0 4rem;
      }
    }
  `;

  //#endregion

  //#region JSX
  
  return (
    <header css={style} {...rest}>
      <div className="container">
        {children}
      </div>
    </header>
  );

  //#endregion

};

export default Header;