import React from 'react';
import Board from './Board';

const getVector = (x, y, toX, toY) => {
  const dx = toX - x; // x vector
  const dy = toY - y; // y vector
  return [dx, dy];
}

const Game = () => {
  /*
  
  */
  window.game = {
    currentPlayer: null,
    activeChecker: null,
    //lastActiveChecker: null,
    jumpableCheckers: [],
    winner: null,
  }

  const createPlayers = () => {
    const player0 = {
      color: "black",
      side: "top",
      checkers: [],
      capturedCheckers: []
    };
    const player1 = {
      color: "red",
      side: "bottom",
      checkers: [],
      capturedCheckers: []
    };
    window.game.currentPlayer = player0;
    return [player0, player1]
  }

  const createChecker = (position, player) => {
    const checker = {
      player: player,
      position: position,
      isKing: false,
      //isCaptured/isJumped?
      canJumpTo: (checkers, toX, toY) => {
        const [dx, dy] = getVector(...checker.position, toX, toY);

        const isJumpable = (condition) => {
          if(condition) {
            let jumpableChecker = board.checkers.filter(checker => (
              JSON.stringify(getVector(...checker.position, toX, toY)) === JSON.stringify([dx/2, dy/2])
            ))[0]
            if(jumpableChecker != null && jumpableChecker.player !== checker.player) {
              window.game.jumpableCheckers.push(jumpableChecker);
              return true;
            }
            return false;
          }
        }

        if(checker.isKing) {
          return isJumpable(Math.abs(dx) === 2 && Math.abs(dy) === 2)
        } else {
          if(checker.player.side === "top") {
            return isJumpable(Math.abs(dx) === 2 && dy === 2);
          } else {
            return isJumpable(Math.abs(dx) === 2 && dy === -2);
          }
        }
      },
      canMoveTo: (toX, toY) => {
        const [x, y] = checker.position;
        const dx = toX - x;
        const dy = toY - y;
        if(checker.isKing) {
          return Math.abs(dx) === 1 && Math.abs(dy) === 1;
        } else {
          if(checker.player.side === "top") {
            return Math.abs(dx) === 1 && dy === 1;
          } else {
            return Math.abs(dx) === 1 && dy === -1;
          }
        }
      },
      selectToggle: () => {
        if(window.game.activeChecker === checker
            || checker.player !== window.game.currentPlayer) {
          window.game.activeChecker = null;
          return null;
        } else {
          window.game.activeChecker = checker;
          return checker;
        }
      }
    };
    return checker;
  }

  const createBoard = (size, players) => {
    const [cols, rows] = size;
    const board = {
      size: size,
      checkers: [],
      tiles: Array(rows).fill(null).map(() => Array(cols).fill("-")),
      players: players
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
          board.tiles[y][x] = player.color[0];
        }
      }
    }

    board.checkers = players.map(player => player.checkers).flat(1); //[].concat(...players.map(player => player.checkers));
    return board;
  }

  const players = createPlayers();
  const board = createBoard([8, 8], players);
  return <Board board={board}/>
}

export default Game;


/*
activeCheckerPOV
------------------
check 4 corners around activeChecker: 
  [1, 1], [1, -1], [-1, 1], [1, 1]
if a corner contains an enemy player's checker:
  then check the tile that is one magnitude further: 
    [corner[0]*2, corner[1]*2]
    if tile is empty:
      then this tile is a possible move and the checked checker is capturable
        if the activeChecker moves to this tile:
          then the checked checker will be considered captured


should I take the approach of having a list of possibleMoves or
should I keep doing it where each tile is checked to be a possible move rather than comparing to a list?

tile POV
-----------------
const [x, y] = tile.position;
let enemyChecker = null; // not necessarily enemy
get vector between tile and activeChecker: 
  const vector = getVector(...activeChecker.position, x, y);
  if vector is Math.abs(dx) === 2 && Math.abs(dy) === 2:
    if an enemy player's checker is inbetween tile and activeChecker:
      enemyChecker = checkers.filter(checker => (
        JSON.stringify(getVector(...checker.position, x, y)) === JSON.stringify(vector.map(v => v/2)))[0]
      )
      if (enemyChecker.player !== activeChecker.player):
        
I need a way to capture checkers.
 - how to recognize that a checker has been captured?
  - distinguish between moves and jumps
  - identify (and store) the jumpable checkers for the activeChecker
  - once activeChecker is moved, find jumped checker through vector math
    and then capture it by moving it from playerX.checkers to playerY.capturedCheckers

Need to implement chain jumping.
 - instead of changing players and toggling the activeChecker right after moving,
   do another check for possible jumps
 - if there are possible jumps, then still forceUpdate but don't toggle activeChecker

 
*/