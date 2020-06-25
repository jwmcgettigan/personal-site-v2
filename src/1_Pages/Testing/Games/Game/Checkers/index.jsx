import React, { useState, useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './Checkers.scss';

import Board from './Components/Board';
import { observe, checkerPositions, checkerPos } from './Components/Game';

const containerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Checkers = ({ className }) => {
  const [checkerPos, setCheckerPos] = useState([0, 0]);
  useEffect(() => {
      observe((newPos) => {
        setCheckerPos(newPos)
      })
  })

  return (
    <DndProvider backend={HTML5Backend}>
      <main id="checkers" className={className}>
        <div className="section" style={containerStyle}>
          <Board checkerPos={checkerPos} />
        </div>
      </main>
    </DndProvider>
  );
}

export default Checkers;

/*

?Requirements
* Checkerboard
  * Tiles
* Checker
* Drag and drop
* Rules


Checkers need to start at specified tiles.
Checkers have a team/type (red or black).
There should be 'Players'.

*/