import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { canMoveChecker, moveChecker, getCheckerPos } from './Game';
import { Overlay } from './Overlay';

const tileStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Tile = ({ x, y, children }) => {
  const black = (x + y) % 2 === 1;
  const backgroundColor = black ? 'black' : 'white';
  //const color = black ? 'white' : 'black';

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.CHECKER,
    canDrop: () => canMoveChecker(x, y),
    drop: () => moveChecker(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  return (
    <div
      ref={drop}
      style={{
        ...tileStyle,
        //color,
        backgroundColor,
      }}>
      {children}
      
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  )
}

export default Tile;