/** @jsx jsx */
import { css, jsx } from '@emotion/core';
//import { push as PushMenu } from 'react-burger-menu';

// Import components
import SocialNetworks from './SocialNetworks';
import Profile from './Profile';
import Navigation from './Navigation';

// Import helpers
import { elevate, mq, bp, color } from 'helpers';

const Menu = (props) => {
  const style = theme => css`
    // Layout
    position: fixed;
    top: 0; left: 0;
    height: 100vh;
    padding: 2rem;
    ${mq('tablet-wide')} {
      //padding: 4rem;
    }
    //border-top-left-radius: 2rem;
    //border-bottom-left-radius: 2rem;

    // Color
    background: ${theme.primary.main};
    color: ${color(theme.primary.main).getContrastText(15).toString()};
    ${elevate(24)};
    z-index: 4;

    // Content Layout
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
  )
}

export default Menu;