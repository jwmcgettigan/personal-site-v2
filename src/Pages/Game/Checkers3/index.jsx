import React from 'react';
import './Checkers.scss';
import Game from './Game';

const Checkers3 = () => {

  return (
    <main id="checkers">
      <div className="game section">
        {Game()}
      </div>
    </main>
  );
}

export default Checkers3;

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