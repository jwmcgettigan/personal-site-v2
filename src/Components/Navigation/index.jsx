/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useState } from 'react';
import Icon from '../Icon';
import Profile from './Profile';
import Navbar from './Navbar';

import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import { bp, mq, zDepth } from '../../helper';

const Copyright = () => {
  const copyrightStyle = css(`
    display: none;

    ${mq('tablet-wide')} {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: bold;
      align-self: flex-end;
      //margin-top: auto;
      svg {
        margin-right: 0.5rem;
      }
    }
  `)

  return (
    <p css={copyrightStyle}>
      <Icon icon={'FaRegCopyright'}/>
      {(new Date().getFullYear())} Justin McGettigan
    </p>
  )
}

const Navigation = ({ toggleTheme }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const isTabletOrMobile = useMediaQuery({query: `(max-width: ${bp['tablet-wide']-1}px)`});
  //! detect touchscreen
  //const [isTouchScreen, setTouchScreen] = useState(false);
  const theme = useTheme();
  const headerStyle = css(`
    grid-row: 1;
    position: fixed;
    left: 0;
    top: 0;
    ${isCollapsed ? 'height: 70px;' : ''}
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    background: ${theme.palette.primary.dark}; //${theme.palette.navigation[300]};
    color: ${theme.palette.getContrastText(theme.palette.primary.dark)}; //(theme.palette.secondary.main)};
    ${zDepth(8)}

    display: grid;
    grid-gap: 1rem;
    z-index: 1;
    ${mq('tablet-wide')} {
      grid-column: 1;
      height: 100vh;
      width: 280px;
      overflow-y: auto;
      grid-template-rows: repeat(4, min-content) auto min-content;
    }

    hr {
      border: 0;
      border-top: 1px solid rgba(0,0,0,0.1);
      border-color: rgba(255,255,255,0.08);
      height: 0;
      align-self: flex-end;
    }

    .expander {
      display: grid;
      background: none;
      border: none;
      width: 40px;
      padding: 0.5rem;
      border: 1px solid color(background, on, 0.5);
      border-radius: 3px;

      svg {
        font-size: 1.5rem;
      }

      ${mq('tablet-wide')} {
        display: none;
      }
    }
  `)

  const isHidden = isTabletOrMobile && isCollapsed

  return (
    <header name="navigation" css={headerStyle}>
      <button className="expander" onClick={() => setCollapsed(!isCollapsed)}>
        <Icon icon={"FaBars"}/>
      </button>
      {!isHidden && <><Profile/><hr/></>}
      {!isHidden && <Navbar/>}
      {/*<div className="mode"></div>*/}
      <button css={css`
        all: unset;
        width: 3rem;
        margin: auto;
        svg {
          width: 100%;
          height: 100%;
          color: ${theme.palette.background};
        }
      `} onClick={() => toggleTheme()}>
        <Icon icon={theme.palette.type === 'light' ? 'FaToggleOff' : 'FaToggleOn'}/>
      </button><hr/>
      {!isHidden && <Copyright/>}
    </header>
  )
}

export default Navigation;