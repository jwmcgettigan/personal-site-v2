import React, { useState, useEffect } from 'react';

const getVector = (x, y, toX, toY) => {
  const dx = toX - x; // x vector
  const dy = toY - y; // y vector
  return [dx, dy];
}

const Overlay = ({ backgroundColor }) => {
  //let boxShadow = `inset 0 0 1px 5px ${backgroundColor}`;
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

  const emptyTile = checker == null;
  const activeCheckerCanMove = emptyTile && (activeChecker != null);
  const checkerIsActive = (checker != null) && (checker === activeChecker);
  const possibleMove = activeCheckerCanMove && activeChecker.canMoveTo(x, y);
  const possibleJump = activeCheckerCanMove && activeChecker.canJumpTo(board.checkers, x, y);
  const checkerCaptured = (x, y) => {
    const [dx, dy] = getVector(...activeChecker.position, x, y);

    if(Math.abs(dx) === 2 && Math.abs(dy) === 2) {
      let capturedChecker = window.game.jumpableCheckers.filter(checker => {
        //console.log(JSON.stringify(getVector(...activeChecker.position, ...checker.position)) + " = " + JSON.stringify([dx/2, dy/2]));
        return JSON.stringify(getVector(...activeChecker.position, ...checker.position)) === JSON.stringify([dx/2, dy/2])
      })[0]

      if(capturedChecker != null) {
        window.game.currentPlayer.capturedCheckers.push(capturedChecker);
        let checkerIndex = capturedChecker.player.checkers.indexOf(capturedChecker);
        capturedChecker.player.checkers.splice(checkerIndex, 1);
        checkerIndex = board.checkers.indexOf(capturedChecker);
        board.checkers.splice(checkerIndex, 1);
        //! MAKE SURE TO CONSOLIDATE PLAYER AND BOARD CHECKER ARRAYS
        window.game.jumpableCheckers = [];
      }
    }
  }
  const moveChecker = (checker) => {
    if(checker != null && (possibleMove || possibleJump)) {
      checkerCaptured(x, y);
      checker.position = [x, y];
      if((checker.player.side === "bottom" 
          && checker.position[1] === 0)
        || (checker.player.side === "top" 
          && checker.position[1] === board.size[1]-1)) {
        checker.isKing = true;
      }

      //! NEED CHAINJUMP FUNCTIONALITY
      let chainJump = false//activeCheckerCanMove && activeChecker.canJumpTo(board.checkers, x, y);
      if(chainJump) {
        //forceUpdate([x, y]);
      } else {
        window.game.currentPlayer = board.players.filter(player => (
          player !== window.game.currentPlayer)
        )[0]
        forceUpdate(activeChecker.activeToggle());
      }
    }
  }

  return (
    <div className="tile" style={{backgroundColor}}
      //onMouseEnter={() => setHover(true)}
      //onMouseLeave={() => setHover(false)}
      onClick={() => moveChecker(activeChecker)}
      >
      {children}
      {(possibleMove || possibleJump) && <Overlay backgroundColor={"yellow"}/>}
      {/*isHover && <Overlay backgroundColor={"green"}/>*/}
      {checkerIsActive && <Overlay backgroundColor={"green"}/>}
    </div>
  )
}

export default Tile;