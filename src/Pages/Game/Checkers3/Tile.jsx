import React, { useState, useEffect } from 'react';

const getVector = (x, y, toX, toY) => {
  const dx = toX - x; // x vector
  const dy = toY - y; // y vector
  return [dx, dy];
}

const Overlay = ({ backgroundColor }) => {
  return <div className="overlay" style={{backgroundColor}}/>
}

const Tile = ({ backgroundColor, x, y, forceUpdate, board, children }) => {
  const [isHover, setHover] = useState(false);
  const activeChecker = window.game.activeChecker;
  let checker = null;
  let vector = null;
  if (children.props != null && children.props.checker) {
    checker = children.props.checker;
  }

  const checkerIsActive = (checker != null) && (checker === activeChecker);
  //let possibleMove = (activeChecker != null) && activeChecker.canMove(x, y) && (checker == null);
  const possibleMove = () => {
    if(activeChecker != null) {
      if(activeChecker.canMove(x, y)) { // || activeChecker.canJump(board.checkers, x, y)) {
        if(checker == null) {
          const [dx, dy] = getVector(...activeChecker.position, x, y);
          if(Math.abs(dx) === 2 && Math.abs(dy) === 2) {
            let jumpableChecker = board.checkers.filter(checker => (
              JSON.stringify(getVector(...checker.position, x, y)) === JSON.stringify([dx/2, dy/2]))[0]
            )
          }
          
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }
  const moveChecker = (checker) => {
    if(checker != null && possibleMove()) {
      checker.position = [x, y];
      if((checker.player.side === "bottom" 
          && checker.position[1] === 0)
        || (checker.player.side === "top" 
          && checker.position[1] === board.size[1]-1)) {
        checker.isKing = true;
      }
      window.game.currentPlayer = board.players.filter(player => player !== window.game.currentPlayer)[0];
      forceUpdate([x, y]);
    }
  }

  return (
    <div className="tile" style={{backgroundColor}}
      //onMouseEnter={() => setHover(true)}
      //onMouseLeave={() => setHover(false)}
      onClick={() => moveChecker(activeChecker)}
      >
      {children}
      {possibleMove() && <Overlay backgroundColor={"yellow"}/>}
      {/*isHover && <Overlay backgroundColor={"green"}/>*/}
      {checkerIsActive && <Overlay backgroundColor={"green"}/>}
    </div>
  )
}

export default Tile;