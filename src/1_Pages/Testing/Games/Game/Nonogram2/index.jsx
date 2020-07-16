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
import { updateTiles, observe } from './logic';
import { GameContext } from './state';

const config = {
  board: {
    size: [10, 10],
    columns: [[4], [3], [1], [3], [4,2], [4,4], [3,2], [3,4], [1,1,2], [2,7]],
    rows: [[3,4,1], [2,6], [2,4], [1,2,1], [1], [1], [1,3], [1,1,1,1], [7], [7]]
  }
}
const [numCols, numRows] = config.board.size;
const initialTiles = Array(numRows).fill(null).map(() => Array(numCols).fill("-"));

const Nonogram = ({ }) => {
  const [tiles, setTiles] = useState(initialTiles);
  useEffect(() => {
    observe((newTiles) => {
      setTiles(newTiles)
    })
    updateTiles(tiles);
  }, [])

  const nonogramStyle = theme => css(`

  `)

  const gameContext = {
    tiles: tiles,
    board: config.board
  }

  return (
    <GameContext.Provider value={gameContext}>
      <Board/>
    </GameContext.Provider>
  )
}

export default Nonogram;