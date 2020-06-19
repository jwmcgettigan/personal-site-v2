/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useState, useEffect } from 'react';
import 'react-notion/src/styles.css';
import Section from './Section';
import { bp, mq, zDepth, lighten } from '../helper';
import { useTheme } from '@material-ui/core';



const NotionPage = ({ renderedPage, className }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.type === 'dark';
  const notionStyle = css(`
    //max-width: min-content !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;

    .notion {
      color: ${theme.palette.getContrastText(theme.palette.background)};
      caret-color: ${theme.palette.getContrastText(theme.palette.background)};
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

    .notion-code {
      background: ${lighten(theme.palette.surface, 4)};
      color: ${theme.palette.getContrastText(theme.palette.surface)};
    }

    .notion-bookmark {
      .notion-bookmark-title {
        color: ${theme.palette.getContrastText(theme.palette.surface)};
      }
      .notion-bookmark-description {
        color: ${theme.palette.getContrastText(theme.palette.surface)};
      }
      .notion-bookmark-link > div {
        color: ${theme.palette.getContrastText(theme.palette.surface)};
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