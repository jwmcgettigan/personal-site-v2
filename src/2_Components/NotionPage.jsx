/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useState, useEffect } from 'react';
import 'react-notion/src/styles.css';
import Section from './Section';
import { bp, mq, zDepth, color } from '../4_Utilities';
import { useTheme } from 'emotion-theming';


const NotionPage = ({ renderedPage, className }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.type === 'dark';
  const notionStyle = css(`
    //max-width: min-content !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;

    .notion {
      color: ${color(theme.palette.background).getContrastText()};
      caret-color: ${color(theme.palette.background).getContrastText()};
      ${isDarkTheme ? `background: ${theme.palette.surface};` : ''}
    }

    .notion-page-offset {
      margin-top: 0;
    }
    .notion-asset-wrapper {
      width: 100% !important;
    }

    .notion-link {
      word-break: normal;
    }

    .notion-bookmark {
      .notion-bookmark-title {
        color: ${color(theme.palette.surface).getContrastText()};
      }
      .notion-bookmark-description {
        color: ${color(theme.palette.surface).getContrastText()};
      }
      .notion-bookmark-link > div {
        color: ${color(theme.palette.surface).getContrastText()};
      }
    }

    img {
      &:before { 
        content: "";
        display: block;
        position: absolute;
        top: -10px;
        left: 0;
        height: calc(100% + 10px);
        width: 100%;
        background-color: ${theme.palette.background};
        border: 2px dotted ${theme.palette.surface};
        border-radius: 5px;
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