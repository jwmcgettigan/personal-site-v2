import React, { useState, useEffect } from 'react';

const Checker = ({ checker, forceUpdate, board }) => {
  const color = checker.player.color;
  const [isHover, setHover] = useState(false);

  const primary = (color === 'black' ? 'black' : '#aa0000')
  const secondary = (color === 'black' ? '#282828' : '#dd0000')
  const backgroundImage = `radial-gradient(${secondary}, ${primary}, ${secondary}, ${primary} 40%, ${secondary} 60%)`

  let border = null;
  if (checker.isKing) {
    border = "1px solid white";
  }

  const selectCheckerToggle = () => {
    if(window.game.activeChecker === checker
      || checker.player !== window.game.currentPlayer) {
      window.game.activeChecker = null;
      forceUpdate(null);
    } else {
      window.game.activeChecker = checker;
      forceUpdate(checker);
    }
  }

  return (
    <div className="checker" style={{backgroundImage, border}}
      //onMouseEnter={() => setHover(true)}
      //onMouseLeave={() => setHover(false)}
      onClick={() => forceUpdate(checker.activeToggle())}>
      {/*checker.selected && <Overlay backgroundColor={"green"}/>*/}
    </div>
  )
}

export default Checker;