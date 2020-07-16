/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext, useState, useEffect } from 'react';
import { Icon } from '../../../../../2_Components';
import { GameContext } from './state';
import Tile from './Tile';

/**
 * 
 * @param {Array} size - the number of [columns, rows]
 */
const Board = ({ className }) => {
  const gameContext = useContext(GameContext);
  const board = gameContext.board;
  const [numCols, numRows] = board.size.map(v => v+1);
  
  const [highlight, setHighlight] = useState({
    column: -1,
    row: -1
  })

  function renderTiles() {
    const tiles = [];

    function renderTile(i) {
      const x = i % numCols;
      const y = Math.floor(i / numRows);
      
      let tileStyle = '';
      let groups = [];
      if (x % 5 === 0) {
        tileStyle += 'border-right: 3px solid black;';
      }
      if (y % 5 === 0) {
        tileStyle += 'border-bottom: 3px solid black;';
      }
      if (x === 0) {
        tileStyle += 'border-left: 3px solid black; justify-content: flex-end; padding: 0 0.5rem; span { margin-left: 0.75rem; }';
        groups = board.rows[y-1];
      }
      if (y === 0) {
        tileStyle += 'border-top: 3px solid black; flex-direction: column; justify-content: flex-end; padding: 0.5rem 0; span { margin-top: 0.25rem; }';
        groups = board.columns[x-1];
      }
      if (x === 0 && y === 0) {
        tileStyle += 'border-top: none; border-left: none;';
      }
      if ((x > 0 && x === highlight.column) || (y > 0 && y === highlight.row)) {
        tileStyle += 'background-color: lightgrey;'
        if (x === highlight.column && y === highlight.row) {
          tileStyle += 'background-color: white;'
        }
      }
      return <Tile key={i} css={css(tileStyle)} groups={groups} x={x} y={y} setHighlight={setHighlight}/>
    }

    for (let i = 0; i < (numCols*numRows); i += 1) {
      tiles.push(renderTile(i));
    }
    return tiles;
  }

  const boardStyle = theme => css(`
    display: grid;
    grid-template-columns: ${`repeat(${numCols}, 1fr)`};
    grid-template-rows: ${`repeat(${numRows}, 1fr)`};
    width: 560px;
    height: 560px;
    border: 1px solid gray;
    padding: 2rem;
    background-color: white;
  `)

  return (
    <div css={boardStyle} className={className}>
      {renderTiles()}
    </div>
  )
}

export default Board;