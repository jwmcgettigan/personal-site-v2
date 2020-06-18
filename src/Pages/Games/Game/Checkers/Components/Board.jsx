import React from 'react';
import Tile from './Tile';
import Checker from './Checker';
import { CheckerPositions } from './Game';

const boardStyle = {
  width: 560,
  height: 560,
  border: '1px solid gray',
  display: 'flex',
  flexWrap: 'wrap',
}
const tileStyle = { width: '12.5%', height: '12.5%' }

const Board = ({ checkerPos: [checkerX, checkerY] }) => {
  const tiles = [];

  function renderChecker(id, x, y, color) {
    const isCheckerHere = x === checkerX && y === checkerY;
    //const isCheckerHere = checkerPos.includes(pos);
    return isCheckerHere ? <Checker id={id} pos={[x, y]} color={color} /> : null;
  }

  function renderTile(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={tileStyle}>
        <Tile x={x} y={y}>
          {renderChecker(i, x, y, 'black')}
        </Tile>
      </div>
    )
  }

  for (let i = 0; i < 64; i += 1) {
    tiles.push(renderTile(i));
  }

  return <div style={boardStyle}>{tiles}</div>
}

export default Board;