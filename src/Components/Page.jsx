/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react';

import Navigation from './Navigation';
import { useTheme } from '@material-ui/core/styles';
import { mq, zDepth } from '../helper';
//import Footer from './Footer';



const Page = ({ page, renderedPage, toggleTheme }) => {
  const theme = useTheme();
  const pageStyle = css(`
    display: grid;
    grid-row: 2;
    margin: 70px 0 0 0;
    //justify-content: center;
    //background: grey;
    //background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);

    ${mq('tablet-wide')} {
      grid-column: 2;
      margin: 0 0 0 280px;
    }
  `)
  const Main = page;

  return (<>
    <Navigation toggleTheme={toggleTheme} />
    <Main css={pageStyle} renderedPage={renderedPage}/>
  </>)
}

export default Page;