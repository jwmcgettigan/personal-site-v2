import React from 'react';

const Tile = ({ backgroundColor, children }) => {
  return <div className="tile" style={{backgroundColor}}>{children}</div>
}

const Checker = ({ checker }) => {
  const color = checker.player.color;

  const primary = (color === 'black' ? 'black' : '#aa0000')
  const secondary = (color === 'black' ? '#282828' : '#dd0000')
  const backgroundImage = `radial-gradient(${secondary}, ${primary}, ${secondary}, ${primary} 40%, ${secondary} 60%)`

  return <div className="checker" style={{backgroundImage}}/>
}

const Board = ({ board }) => {
  const size = board.size;
  const checkers = board.checkers;

  function renderTiles(size) {
    const tiles = [];

    function renderTile(i) {
      const x = i % size[0];
      const y = Math.floor(i / size[1]);
      const evenTile = (x + y) % 2 === 1;
      const color = evenTile ? 'black' : 'white';
      let checker = checkers.filter(checker => 
        JSON.stringify(checker.position) === JSON.stringify([x, y]))[0];
      return (
        <Tile key={i} backgroundColor={color}>
          { (checker != null) ? <Checker checker={checker}/> : null }
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
      }}>
      {renderTiles(size)}
    </div>
  )
}

export default Board;