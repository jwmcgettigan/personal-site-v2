/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

// Components
import ScrollToTop from 'modules/common/ScrollToTop';
import Menu from 'modules/common/Menu';
import Copyright from 'modules/common/Copyright';
import Icon from 'modules/common/Icon';

// Import helpers
import { mq, color, elevate } from 'helpers';

let indicate = true;

const Main = ({ children, className }) => {
  const [isOpen, setOpen] = useState(true);
  if(isOpen) {
    indicate = false;
  }
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true),
    onSwipedLeft: () => setOpen(false)
  });

  const gridBackground = (bg_color) => css`
    background-color: ${bg_color};
    /*background-image:
    repeating-linear-gradient(${color(bg_color).getContrastText(1.1).toString()} 0 1px, transparent 1px 100%),
    repeating-linear-gradient(90deg, ${color(bg_color).getContrastText(1.1).toString()} 0 1px, transparent 1px 100%);
    background-size: 8px 8px;*/
  `;

  const swipeAnimation = (from, to) => css`
    transform: translate3d(${isOpen ? to+'px' : from+'px'}, 0, 0);
    transition: all 0.5s;
  `;

  const containerStyle = css`
    display: grid;
    overflow-x: hidden;
  `;

  const menuWidth = '280px';
  const menuStyle = theme => css`
    ${gridBackground(theme.primary.main)};
    ${swipeAnimation(-280, 0)};
    width: ${menuWidth};
    ${isOpen ? elevate(24) : ''};
    ${mq('tablet-wide')} {
      transform: none;
      transition: none;
    }
  `;
  const mainStyle = theme => css`
    display: grid;
    align-content: flex-start;
    font-size: 1.25rem;
    ${gridBackground(theme.background)};
    ${swipeAnimation(0, 280)};
    ${mq('tablet-wide')} {
      margin: 0 0 0 ${menuWidth};
      transform: none;
      transition: none;
    }

    .indicator {
      ${indicate ? css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        background: rgba(0,0,0,0.8);
        width: 100%;
        height:4rem;
        bottom: 0;
        font-family: Rubik, sans-serif;
        font-weight: 300;
        color: rgba(255,255,255,0.8);
        text-shadow: 0 1px 1px black;
        svg {
          height: 100%;
          width: auto;
          filter: drop-shadow(0 1px 1px black);
        }
        h3 {
          margin-right: 1rem;
        }
      ` : ''};
    }
  `;

  return (
    <>
      {/* Put analytics here */}
      <ScrollToTop/>
      <div css={containerStyle} {...handlers}>
        <Menu css={menuStyle}/>
        <main css={mainStyle} className={className}>
          {children}
          <Copyright/>
          {/* <div className="indicator">
            <Icon icon='MdKeyboardArrowRight'/>
            <h3>Slide to Open Menu</h3>
          </div> */}
        </main>
      </div>
    </>
  );
}

export default Main;