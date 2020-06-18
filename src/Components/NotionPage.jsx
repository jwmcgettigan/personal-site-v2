/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useState, useEffect } from 'react';
import 'react-notion/src/styles.css';
import Section from './Section';
import { bp, mq, zDepth } from '../helper';



const NotionPage = ({ renderedPage, className }) => {
  const notionStyle = css(`
    //max-width: min-content !important;
    padding-top: 1rem !important;

    .notion-page-offset {
      margin-top: 0;
    }
    .notion-asset-wrapper {
      width: 100% !important;
    }

    .notion-link {
      word-break: normal;
    }

    img {
      &:before { 
        content: " ";
        display: block;
      
        position: absolute;
        top: -10px;
        left: 0;
        height: calc(100% + 10px);
        width: 100%;
        background-color: rgb(230, 230, 230);
        border: 2px dotted rgb(200, 200, 200);
        border-radius: 5px;
      }
      
      &:after { 
        content: "";
        display: block;
        font-size: 16px;
        font-style: normal;
        font-family: FontAwesome;
        color: rgb(100, 100, 100);
        
        position: absolute;
        top: 5px;
        left: 0;
        width: 100%;
        text-align: center;
      }
    }

    ${mq('phablet')} {
      //max-width: 640px;
    }
    ${mq('tablet')} {
      //max-width: 720px;
    }
    ${mq('tablet-wide')} {
      //max-width: 960px;
    }
    ${mq('desktop')} {
      //max-width: 1140px;
      max-width: 824px;
    }
  `)

  return (
    <main className={className}>
      <Section css={notionStyle}>
        {renderedPage}
      </Section>
    </main>
  )
}

export default NotionPage;