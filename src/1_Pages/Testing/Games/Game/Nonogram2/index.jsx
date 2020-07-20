/**
 * Name: Nonogram
 * Author: Justin McGettigan
 * Co-Author: Andy Gatza
 */

/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import React, { createContext, useState, useEffect } from 'react';
import Board from './Board';
//import Game from './Game';
//import { boardState } from './logic';
import { BoardProvider } from './state';

const Nonogram = ({ }) => {

  const nonogramStyle = theme => css(`

  `)

  /*
  const gameContext = {
    tiles: tiles,
    board: config.board,
    drag: {
      start: null,
      current: null,
      end: null
    }
  }*/

  return (
    <BoardProvider>
      <Board/>
    </BoardProvider>
  )
}

export default Nonogram;