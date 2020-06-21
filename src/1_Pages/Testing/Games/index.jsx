/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth } from '../../../4_Utilities';

import React from 'react';

import Checkers from './Game/Checkers';
import Checkers3 from './Game/Checkers3';

const Games = ({ className }) => {
  const theme = useTheme();
  return (
    <main className={className}>
      <div css={css`
      display: flex;
      justify-content: space-evenly;
      padding: 4rem;
      background: ${theme.palette.surface};
      margin: 3rem;
      `}>
        <Checkers3/>
        <Checkers/>
      </div>
    </main>
  )
}

export default Games;