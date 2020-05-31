import React from 'react';
import './Checkers.scss';
import Board from './Board';

const Player = ({ color }) => { // functional component
  this.color = color;
}

const Game = () => {
  /*
  
  */

  const createPlayers = () => {
    const player0 = {
      color: "black",
      side: "top",
      checkers: []
    };
    const player1 = {
      color: "red",
      side: "bottom",
      checkers: []
    };
    return [player0, player1]
  }

  const createChecker = (position, player) => {
    let checker = {
      player: player,
      position: position,
      isKing: false,
    };
    return checker;
  }

  const createBoard = (size, players) => {
    let [cols, rows] = size;
    //let checkers = [].concat(...players.map(player => player.checkers));
    //let checkers = players.map(player => player.checkers).flat(1);
    let board = {
      size: size,
      checkers: [],
      map: Array(rows).fill(null).map(() => Array(cols).fill("-"))
    }

    for (let y = 0; y < rows; y+=1 ) {
      for (let x = 0; x < cols; x+=1 ) {
        let evenTile = (y + x) % 2 === 1;
        if (evenTile && (y < 3 || y > cols-4)) {
          let player = null;
          if (y < 3) {
            player = players.filter(player => player.side === "top")[0];
          }
          if (y > cols-4) {
            player = players.filter(player => player.side === "bottom")[0];
          }
          player.checkers.push(createChecker([x, y], player));
          board.map[y][x] = player.color[0];
        }
      }
    }

    board.checkers = players.map(player => player.checkers).flat(1);
    return board;
  }

  let players = createPlayers();
  let board = createBoard([8, 8], players);
  //console.log(players);
  //console.log(board);

  return <Board board={board}/>
}

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