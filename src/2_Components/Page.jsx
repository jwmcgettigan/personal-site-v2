/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react';
import Navigation from './Navigation';
import Menu from './Menu';
import { mq, zDepth } from '../4_Utilities';
//import Footer from './Footer';

import { useSwipeable } from 'react-swipeable';

const Page = ({ page, renderedPage, className }) => {
  const [swipe, setSwipe] = useState(null);
  
  const swipeStyle = (swipe != null) ? `
  ${mq('tablet-wide', 'max')} {
    /*overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }*/

    //${swipe.dir === "Right" ? 'animation: slide 0.5s 1 linear forwards' : ''};
    //${swipe.dir === "Left" ? 'animation: slide 1s 1 linear reverse' : ''};
    //animation: slide 0.5s 1 linear ${swipe.dir === "Right" ? 'forwards' : (swipe.dir === "Left" ? 'reverse' : '')};
    
    
    ${swipe.dir === "Right" ? `
      transform: translateX(0px);
      transition: transform .3s cubic-bezier(0, .52, 0, 1);
    ` : ''}

    @keyframes slide {
      from {
        transform: translateX(-280px);
      }
      to {
        transform: translateX(0px);
      }
      //0% { transform: translateX(-280px); }
      //90% { transform: translateX(10px); }
      //100% { transform: translateX(0px); }
    }
  }` : ''

  const navStyle = css(`
    //transform: translateX(-280px);

    /*${swipe != null && swipe.dir === "Right" ? `
      transform: translateX(0px);
      transition: transform .3s cubic-bezier(0, .52, 0, 1);
    ` : ''}*/

    //${swipeStyle}
  `)

  const pageStyle = theme => css(`
    display: grid;
    grid-row: 2;
    //!margin: 70px 0 0 0;
    margin: 0;
    //justify-content: center;
    //background: grey;
    //background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);

    /*${swipe != null && swipe.dir === "Right" ? `
      transform: translateX(280px);
      transition: transform .3s cubic-bezier(0, .52, 0, 1);
    ` : ''}*/

    ${mq('tablet-wide')} {
      grid-row: 1;
      grid-column: 2;
      margin: 0 0 0 280px;
    }
  `)

  const containerStyle = css(`
    //display: grid;
    //grid-template-columns: min-content 1fr;
    //width: calc(100vw - 280px);
    display: grid;
    grid-template-rows: min-content auto;
    overflow: hidden;

    ${mq('tablet-wide')} {
      grid-template-columns: min-content auto;
    }
    //${swipeStyle}
  `)

  const Main = page;
  const config = {};
  const handlers = useSwipeable({ onSwiped: (eventData) => {setSwipe(eventData);}, ...config });

  return (
    <div css={containerStyle} className={className} {...handlers}>
      {/* <Navigation css={navStyle}/> */}
      <Menu/>
      <Main css={pageStyle} renderedPage={renderedPage}/>
    </div>
  )
}

export default Page;