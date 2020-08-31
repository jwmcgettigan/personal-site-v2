/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

// Components
import ScrollToTop from 'modules/common/ScrollToTop';
import Menu from 'modules/common/Menu';

// Import helpers
import { mq, color } from 'helpers';

const Main = ({ children, className }) => {
  const [isOpen, setOpen] = useState(false);
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true),
    onSwipedLeft: () => setOpen(false)
  });

  const gridBackground = (bg_color) => css`
    background-color: ${bg_color};
    /* background-image:
    repeating-linear-gradient(${color(bg_color).getContrastText(1.1).toString()} 0 1px, transparent 1px 100%),
    repeating-linear-gradient(90deg, ${color(bg_color).getContrastText(1.1).toString()} 0 1px, transparent 1px 100%);
    background-size: 8px 8px; */
  `;

  const swipeAnimation = (from, to) => css`
    transform: translate3d(${isOpen ? to+'px' : from+'px'}, 0, 0);
    transition: all 0.5s;
  `;

  const containerStyle = css`
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  `;

  const menuWidth = '280px';
  const menuStyle = theme => css`
    ${gridBackground(theme.primary.main)};
    ${swipeAnimation(-280, 0)};
    width: ${menuWidth};
    ${mq('tablet-wide')} {
      transform: none;
      transition: none;
    }
  `;
  const mainStyle = theme => css`
    height: 100%;
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
  `;

  return (
    <>
      {/* Put analytics here */}
      <ScrollToTop/>
      <div css={containerStyle} {...handlers}>
        <Menu css={menuStyle}/>
        <main css={mainStyle} className={className}>
          {children}
        </main>
      </div>
    </>
  );
}

export default Main;