/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { bp, mq, zDepth } from '../../../4_Utilities';

import React from 'react';

import Checkers from './Game/Checkers';
import Checkers3 from './Game/Checkers3';
import Nonogram from './Game/Nonogram';

const Games = ({ className }) => {
  const gamesStyle = theme => css(`
    display: grid;
    justify-content: space-evenly;
    padding: 4rem;
    background: ${theme.palette.surface};
    margin: 3rem;
  `)
  return (
    <main className={className}>
      <div css={gamesStyle}>
        <Nonogram/>
        <div css={css`display: flex; #checkers { margin: 3rem; }`}>
          <Checkers3/>
          <Checkers/>
        </div>
      </div>
    </main>
  )
}

export default Games;