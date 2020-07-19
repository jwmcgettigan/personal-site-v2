/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import { useMediaQuery } from 'react-responsive';
import { bp, mq, zDepth, color } from '../../4_Utilities';

import Profile from './Profile';
import Nav from './Nav';
import Footer from './Footer';

const Menu = ({ className }) => {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${bp['tablet-wide']-1}px)`
  });

  const menuStyle = theme => css(`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%; // or 100vh?
    width: 280px;
    padding: 1rem;
    box-sizing: border-box;
    background: ${theme.palette.primary.dark};
    color: ${color(theme.palette.primary.dark).getContrastText()};

    display: grid;
    grid-template-rows: repeat(3, min-content) auto;
    grid-gap: 1rem;
    z-index: 8;
    transform: translateX(-280px);

    ${mq('tablet-wide')} {
      transform: translateX(0px);
    }

    hr {
      border: 0;
      border-top: 1px solid rgba(0,0,0,0.1);
      border-color: rgba(255,255,255,0.08);
      height: 0;
      align-self: end;
    }
  `)

  return (
    <header css={menuStyle} className={className}>
      <Profile/>
      <hr/>
      <Nav/>
      <Footer/>
    </header>
  )
}

export default Menu;