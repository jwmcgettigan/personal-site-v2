import React from 'react';
import './Checkers.scss';
import Board from './Components/Board';

const Player = ({ color }) => { // functional component
  this.color = color;
}

const Game = () => {
  /* The gamestate...
  Keep track of:
  - which player's turn it is.
  - enforcing the rules.
    - limiting the direction that certain players units can move
    - 
  - reading the board state (is the game over?).
  - game modes
    - forced capture
    - optional capture
  */
}

const Checkers2 = () => {

  return (
    <main id="checkers">
      <div className="game section">
        <Board size={[8, 8]}/>
      </div>
    </main>
  );
}

export default Checkers2;

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