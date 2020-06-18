/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { bp, mq, zDepth } from '../helper';

const Section = ({ className, children }) => {
  const theme = useTheme();

  const sectionStyle = css(`
    //border-bottom: 1px solid ${theme.palette.secondary.dark};
    background: ${theme.palette.background};
    padding: 1rem;
    margin: auto;
    //box-sizing: border-box;
    //${zDepth(3)}

    ${mq('tablet-wide')} {
      padding: 3rem;
    }

    ${mq('phablet')} {
      //max-width: 640px;
    }
    ${mq('tablet')} {
      max-width: 720px;
    }
    ${mq('tablet-wide')} {
      max-width: 960px;
    }
    ${mq('desktop')} {
      max-width: 1140px;
    }
  `)

  return (
    <div css={sectionStyle} className={className}>
      {children}
    </div>
  )
}

const TitleSection = ({ className, children }) => {
  const theme = useTheme();

  const titleSectionStyle = css(`
    background: ${theme.palette.surface};
    color: ${theme.palette.getContrastText(theme.palette.surface)};
    max-width: 100% !important;
    width: 100%;
    box-sizing: border-box;
    text-align: center;

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
    p {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      font-weight: 300;
    }
  `)

  return (
    <Section css={titleSectionStyle} className={className}>
      {children}
    </Section>
  )
}

export {
  TitleSection
}
export default Section;