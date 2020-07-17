/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react';
import Navigation from './Navigation';
import { mq, zDepth } from '../4_Utilities';
//import Footer from './Footer';

import { useSwipeable } from 'react-swipeable';

const Page = ({ page, renderedPage, className }) => {
  const [swipe, setSwipe] = useState(null);
  console.log(swipe);

  const swipeStyle = (swipe != null) ? `
  ${mq('tablet-wide', 'max')} {
    /*overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }*/

    animation: slide 0.35s 1 linear ${swipe.dir === "Right" ? 'forwards' : (swipe.dir === "Left" ? 'reverse' : '')};

    @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(295.41px);
      }
    }
  }` : ''

  const pageStyle = theme => css(`
    display: grid;
    grid-row: 2;
    //!margin: 70px 0 0 0;
    margin: 0;
    //justify-content: center;
    //background: grey;
    //background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);

    ${mq('tablet-wide')} {
      grid-row: 1;
      grid-column: 2;
      margin: 0 0 0 280px;
    }
  `)

  const Main = page;
  const config = {};
  const handlers = useSwipeable({ onSwiped: (eventData) => {setSwipe(eventData);}, ...config });

  return (
    <div css={css`${swipeStyle}`} className={className} {...handlers}>
      <Navigation/>
      <Main css={pageStyle} renderedPage={renderedPage}/>
    </div>
  )
}

export default Page;