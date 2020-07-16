import React, { useEffect } from 'react';
import Board from './Board';

const Game = ({ size }) => {
  const board = {
    size: size,
    columns: [[4], [3], [1], [3], [4,2], [4,4], [3,2], [3,4], [1,1,2], [2,7]],
    rows: [[3,4,1], [2,6], [2,4], [1,2,1], [1], [1], [1,3], [1,1,1,1], [7], [7]]
  }
  
  const [numCols, numRows] = board.size;
  board.tiles = Array(numRows).fill(null).map(() => Array(numCols).fill("-"));
  window.nonogram = {
    tiles: Array(numRows).fill(null).map(() => Array(numCols).fill("-")),
    drag: {
      dragging: false,
      start: [],
      end: []
    },
    mouseDown: false
  }

  return <Board board={board}/>
}

export default Game;