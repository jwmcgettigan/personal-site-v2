//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import SocialNetworks from './SocialNetworks';
import Profile from './Profile';
import Navigation from './Navigation';

// Import helpers
import { mq, color } from 'helpers';

//#endregion

/**
 * Component for displaying website navigation,
 * my profile, and my social networks in the form
 * of a sidemenu.
 */
const Menu = (props) => {

  //#region CSS

  const style = theme => css`
    /* Layout */
    position: fixed;
    top: 0; left: 0;
    height: 100vh;
    padding: 2rem;

    /* Color */
    background: ${theme.primary.main};
    color: ${color(theme.primary.main).getContrastText(15).toString()};
    z-index: 4;

    /* Content Layout */
    display: grid;
    gap: 1rem;
    align-content: space-between;

    a {
      font-weight: 400;

      &:hover {
        color: ${theme.primary.A100};
      }
      &.active {
        color: ${theme.primary.A700};
      }
    }
  `;

  //#endregion

  //#region JSX

  //TODO: Try out the 'desktop app' look instead of the normal one.
  return (
    <header css={style} {...props}>
      <div css={css`
          display: grid;
          gap: 2rem;
          align-content: flex-start;
          ${mq('tablet-wide')} {
            gap: 4rem;
          }
        `}>
        <Profile/>
        <Navigation/>
      </div>
      <SocialNetworks/>
    </header>
  );

  //#endregion

};

export default Menu;