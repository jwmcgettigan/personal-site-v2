/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'

import React, { useState, useContext, createRef } from 'react';
import Icon from '../Icon';
import Profile from './Profile';
import Navbar from './Navbar';

import { useTheme } from 'emotion-theming';
import { useMediaQuery } from 'react-responsive';
import { bp, mq, zDepth, color, StateContext } from '../../4_Utilities';

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
    //!grid-template-columns: 1fr 1fr;
    grid-column: 1;
    overflow-y: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content) auto;
    width: max-content;
    background: ${theme.palette.primary.dark};
    ${zDepth(24, true)}
    padding: 1rem;

    ${mq('tablet-wide')} {
      width: 100%;
      background: none;
      padding: 0;
      ${zDepth(0, false, true)}
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
      width: 100%;

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
      <Profile isTabletOrMobile={isTabletOrMobile}/>
      <hr/>
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

const Navigation = ({ className, handlers }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const isTabletOrMobile = useMediaQuery({query: `(max-width: ${bp['tablet-wide']-1}px)`});
  //! detect touchscreen
  //const [isTouchScreen, setTouchScreen] = useState(false);
  const theme = useTheme();
  const headerStyle = css(`
    grid-row: 1;
    position: fixed;
    //left: 0;
    top: 0;
    /* ${isCollapsed ? 'height: 70px;' : ''} */
    left: -295.41px;
    height: 100vh;
    width: max-content;
    box-sizing: border-box;
    //padding: 1rem;
    //!background: ${theme.palette.primary.dark};
    background: none;
    color: ${color(theme.palette.primary.dark).getContrastText()}; //(theme.palette.secondary.main)};
    /*${zDepth(8, true)}*/

    display: grid;
    grid-gap: 1rem;
    z-index: 10;

    ${mq('tablet-wide')} {
      left: 0;
      background: ${theme.palette.primary.dark};
      ${zDepth(8, true)}
      grid-column: 1;
      height: 100vh;
      width: 280px;
      overflow-y: auto;
    }
  `)

  const expanderButtonStyle = css(`
    display: grid;
    background: none;
    border: none;
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    border: 1px solid color(background, on, 0.5);
    border-radius: 3px;
    background: ${theme.palette.primary.dark};
    color: ${color(theme.palette.primary.dark).getContrastText(13)};
    ${zDepth(8, true)}

    svg {
      font-size: 1.5rem;
    }

    ${mq('tablet-wide')} {
      display: none;
    }

    .collapsed, .expanded {
      position: absolute;
			top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
			display: block;
    }

    .collapsed {
      transition: opacity .3s, transform .3s;
    }
    .expanded {
      transition: opacity .3s, transform .3s;
			transform: rotate(-180deg) scale(.5);
			opacity: 0;
    }
    &:focus {
      .collapsed {
        transform: rotate(180deg) scale(.5);
			  opacity: 0;
      }
      .expanded {
        transform: rotate(0deg) scale(1);
			  opacity: 1;
      }
    }
  `)

  const hasFocus = element => element === document.activeElement;
  const expanderButtonRef = createRef();
  const headerRef = createRef();
  const isHidden = isTabletOrMobile && isCollapsed;
  //if(!hasFocus(expanderButtonRef.current)) setCollapsed(!isCollapsed);

  return (<>
    <header name="navigation" css={headerStyle} ref={headerRef} className={className} {...handlers}>
      {/* <button css={expanderButtonStyle} ref={expanderButtonRef} 
        onClick={() => {
          setCollapsed(!isCollapsed);
          //if(!isCollapsed) expanderButtonRef.current.blur()
        }} tabIndex="0" onBlur={() => {
          if(!headerRef.current.contains(document.activeElement)) {
            //console.log(headerRef.current.contains(document.activeElement))
            
            //setCollapsed(true);
          }
        }}>
        <Icon icon={'FaBars'} className="collapsed"/>
        <Icon icon={'FaTimes'} className="expanded"/>
      </button> */}
      {/*!isHidden && <Menu isTabletOrMobile={isTabletOrMobile}/>*/}
      <Menu isTabletOrMobile={isTabletOrMobile}/>
    </header>
    {/* isTabletOrMobile && <ProfileButton/> */}
  </>)
}

export default Navigation;

const TransitionIcon = ({ from, to, className }) => {
  const transitionStyle = css(`
    .collapsed, .expanded {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      display: block;
    }

    .collapsed {
      transition: opacity .3s, transform .3s;
    }
    .expanded {
      transition: opacity .3s, transform .3s;
      transform: rotate(-180deg) scale(.5);
      opacity: 0;
    }
    &:focus {
      .collapsed {
        transform: rotate(180deg) scale(.5);
        opacity: 0;
      }
      .expanded {
        transform: rotate(0deg) scale(1);
        opacity: 1;
      }
    }
  `)
  return (
    <div css={transitionStyle} className={className}>
      <Icon icon={'FaBars'} className="collapsed"/>
      <Icon icon={'FaTimes'} className="expanded"/>
    </div>
  )
}