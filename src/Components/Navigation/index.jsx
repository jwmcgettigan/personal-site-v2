/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useState, useContext } from 'react';
import Icon from '../Icon';
import Profile from './Profile';
import Navbar from './Navbar';

import { useTheme } from 'emotion-theming';
import { useMediaQuery } from 'react-responsive';
import { bp, mq, zDepth, color } from '../../utils';

import { StateContext } from '../../App';

const Copyright = ({ className }) => {
  const copyrightStyle = css(`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    align-self: end;
    white-space: nowrap;
    svg {
      margin-right: 0.5rem;
    }
  `)

  return (
    <p css={copyrightStyle} className={className}>
      <Icon icon={'FaRegCopyright'}/>
      {(new Date().getFullYear())} Justin McGettigan
    </p>
  )
}

const Menu = ({ isTabletOrMobile }) => {
  const toggleTheme = useContext(StateContext).toggleTheme;
  const theme = useTheme();
  const isDarkTheme = theme.palette.type === 'dark';

  const menuStyle = css(`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;

    ${mq('tablet-wide')} {
      grid-column: 1;
      overflow-y: auto;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, min-content) auto;
    }

    hr {
      border: 0;
      border-top: 1px solid rgba(0,0,0,0.1);
      border-color: rgba(255,255,255,0.08);
      height: 0;
      align-self: end;
    }

    .submenu {
      display: grid;
      grid-gap: 1rem;
      grid-template-rows: min-content auto;
      align-content: space-between;

      .footer {
        display: grid;
        grid-gap: 1rem;
        justify-content: center;
      }
    }
  `)

  const buttonStyle = css(`
    all: unset;
    width: 3rem;
    margin: auto;
    align-self: end;
    svg {
      width: 100%;
      height: 100%;
      color: ${theme.palette.background};
    }
  `)

  return (
    <div css={menuStyle}>
      <Profile/>
      {!isTabletOrMobile && <hr/>}
      <div className="submenu">
        <Navbar/>
        <div className="footer">
          <button css={buttonStyle} onClick={() => toggleTheme()}>
            <Icon icon={theme.palette.type === 'light' ? 'FaToggleOff' : 'FaToggleOn'}/>
          </button>
          <hr/>
          <Copyright/>
        </div>
      </div>
    </div>
  )
}

const ProfileButton = ({}) => {
  const theme = useTheme();
  const profileButtonStyle = css(`
    all: unset;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 5rem;
    height: 5rem;
    ${zDepth(6, true)}
    margin: auto;
    border-radius: 50%;
    background: ${theme.palette.secondary.main};
    text-align: center;
    z-index: 10;
    margin: 1rem;
    svg {
      width: 50%;
      height: 100%;
      color: black;//${theme.palette.primary.main};
    }
    &:hover {
      transition: all 0.01s ease-in-out;
      ${zDepth(12, true)}
      transform: scale(1.01, 1.01);
    }
  `)

  return (
    <button css={profileButtonStyle}>
      <Icon icon={"FaUserTie"}/>
    </button>
  )
}

const Navigation = ({}) => {
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
    background: ${theme.palette.primary.dark};
    color: ${color(theme.palette.primary.dark).getContrastText()}; //(theme.palette.secondary.main)};
    ${zDepth(8, true)}

    display: grid;
    grid-gap: 1rem;
    z-index: 10;

    ${mq('tablet-wide')} {
      grid-column: 1;
      height: 100vh;
      width: 280px;
      overflow-y: auto;
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

  const isHidden = isTabletOrMobile && isCollapsed;

  return (<>
    <header name="navigation" css={headerStyle}>
      <button className="expander" onClick={() => setCollapsed(!isCollapsed)}>
        <Icon icon={"FaBars"}/>
      </button>
      {!isHidden && <Menu isTabletOrMobile={isTabletOrMobile}/>}
    </header>
    {isTabletOrMobile && <ProfileButton/>}
  </>)
}

export default Navigation;