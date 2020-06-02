import React, { useState, useEffect, useContext } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrop } from 'react-dnd';
//import Tile from './Tile';
import Checker from './Checker';
import { ItemTypes } from './Data';
import { checkers } from './Logic';

const object = {
  a: 2,
  b: 3,
  thisFunction: function() {
    return this.a + this.b;
  }
};

const myFunction = () => {
  return this.props.a + this.props.b;
}

const Tile = ({ id, backgroundColor, isEven, position }) => {
  let checker = null;

  const setCheckerPosition = (setPosition, position) => {
    //console.log("New: " + position.toString());
    return setPosition;
  }

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.CHECKER,
    //canDrop: () => canMoveChecker(x, y),
    drop: () => setCheckerPosition(position), //moveChecker(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  if (isEven) {
    if (id < 24) {
      checker = <Checker id={id} color={"black"} startPos={position} 
      callback={setCheckerPosition}/>
    } if (id > 39) {
      checker = <Checker id={id} color={"red"} startPos={position} 
      callback={setCheckerPosition}/>
    }
  }

  checkers.push(checker);
  console.log(checker ? checker.props : null);

  return (
    <div ref={drop} className="tile" style={{backgroundColor}}>{checker}</div>
  )
}

const Board = ({ size }) => {
  // size: (columns / rows) (x, y)
  //! Should I improve how checkers are rendered?

  function renderTiles(size) {
    const tiles = [];

    function renderTile(i) {
      const x = i % size[0];
      const y = Math.floor(i / size[1]);
      const evenTile = (x + y) % 2 === 1;
      const color = evenTile ? 'black' : 'white';
      return (
        <Tile key={i} id={i} 
          backgroundColor={color} 
          isEven={evenTile} 
          position={[x, y]}/>
          /*{evenTile && (i < 24) ? <Checker id={i} color={"black"} startPos={[x, y]}/> : <></>}
          {evenTile && (i > 39) ? <Checker id={i} color={"red"} startPos={[x, y]}/> : <></>}
          </Tile>*/
      )
    }

    for (let i = 0; i < 64; i += 1) {
      tiles.push(renderTile(i));
    }
    return tiles;
  }

  function renderCheckers() {
    const checkers = []
    //function renderChecker()
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">{renderTiles(size)}</div>
    </DndProvider>
  )
}

export default Board;

// Make the board resizable (in pixels).
// Make the board dimensions resizable (in rows and columns of tiles).

// On initialization, each player gets 12 checkers of their color

// I need to program the game using javascript
// and only use React for displaying things.