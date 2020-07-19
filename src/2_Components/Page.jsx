/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react';
import Menu from './Menu';
import { mq, zDepth } from '../4_Utilities';

import { useSwipeable } from 'react-swipeable';
let isHidden = true;

const Page = ({ page, renderedPage, className }) => {
  const [swipe, setSwipe] = useState(null);

  isHidden = (swipe != null) ? (
    swipe.dir === "Right" ? false : true
  ) : true
  
  const slideAnimation = (from, to) => `
    @keyframes slide {
      0% { transform: translateX(${from}px) scaleX(1); }
      90% { transform: translateX(${to+10}px) scaleX(1.07); }
      100% { transform: translateX(${to}px) scaleX(1); }
    }
  `

  const swipeAnimation = (from, to) => `
    ${mq('tablet-wide', 'max')} {
      ${isHidden ? ` // Slide In
        ${slideAnimation(to, from)}
        transform: translateX(${from}px);
        //animation: slide 0.5s ease 0.1s forwards;
        transition: transform 0.4s ease-out;
      ` : ` // Slide Out
        ${slideAnimation(from, to)}
        transform: translateX(${to}px);
        //animation: slide 0.5s ease forwards;
        transition: transform 0.5s ease-out;
        ${zDepth(24)}
      `}
    }
  `

  const menuStyle = css(`
    ${swipeAnimation(-280, 0)}
  `)

  const pageStyle = theme => css(`
    display: grid;
    grid-row: 2;
    margin: 0;

    ${swipeAnimation(0, 280)}

    ${mq('tablet-wide')} {
      grid-row: 1;
      grid-column: 2;
      margin: 0 0 0 280px;
    }
  `)

  const containerStyle = css(`
    display: grid;
    grid-template-rows: min-content auto;
    overflow: hidden;

    ${mq('tablet-wide')} {
      grid-template-columns: min-content auto;
    }
  `)

  const Main = page;
  const config = {};
  const handlers = useSwipeable({ onSwiped: (eventData) => {setSwipe(eventData);}, ...config });

  return (
    <div css={containerStyle} className={className} {...handlers}>
      <Menu css={menuStyle}/>
      <Main css={pageStyle} renderedPage={renderedPage}/>
    </div>
  )
}

export default Page;