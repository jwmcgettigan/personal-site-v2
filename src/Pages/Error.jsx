/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth } from '../utils';

import React from 'react';
import Section from '../Components/Section';

const Error = ({ className }) => {
  const theme = useTheme();
  const errorStyle = css(`
    display: grid;
    justify-content: center;
    align-content: center;
    //height: 100%;
    width: min-content;
    white-space: nowrap;
    //margin: auto;
    ${zDepth(5, true)};
    border-radius: 3px;
    background: ${theme.palette.secondary.light};

    h1 {
      font-size: 4rem;
    }
  `)

  return (
    <main css={css`height: 100vh; background: grey;
    background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);`} 
    className={className}>
      <Section css={errorStyle}>
        <h1>404: Page does not exist!</h1>
      </Section>
    </main>
  )
}
 
export default Error;