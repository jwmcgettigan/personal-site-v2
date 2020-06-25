import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Checker from './Checker';

const useForceUpdate = () => useState()[1];

const Board = ({ board }) => {
  const size = board.size;
  const checkers = board.checkers;
  const forceUpdate = useForceUpdate();
  //useEffect((checker) => setActiveChecker(checker));

  function renderTiles(size) {
    const tiles = [];

    function renderTile(i) {
      const x = i % size[0];
      const y = Math.floor(i / size[1]);
      const evenTile = (x + y) % 2 === 1;
      const color = evenTile ? 'black' : 'white';
      const checker = checkers.filter(checker => 
        JSON.stringify(checker.position) === JSON.stringify([x, y]))[0];
      return (
        <Tile key={i} backgroundColor={color} x={x} y={y} forceUpdate={forceUpdate} board={board}>
          { (checker != null) && <Checker checker={checker} forceUpdate={forceUpdate} board={board} /> }
        </Tile>
      )
    }

    for (let i = 0; i < (size[0]*size[1]); i += 1) {
      tiles.push(renderTile(i));
    }
    return tiles;
  }

  return (
    <div className="board" 
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size[0]}, 1fr)`,
        gridTemplateRows: `repeat(${size[1]}, 1fr)`,
        //gridGap: "0.25rem"
      }}>
      {renderTiles(size)}
    </div>
  )
}

export default Board;