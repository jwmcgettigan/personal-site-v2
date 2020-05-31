import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './Data';

const Checker = ({ id, startPos, player, color, callback }) => {
  /* States:
    - moveable (true/false)
    - isKing (true/false)
    - isCaptured (true/false)
    - position ([x, y])
  */
  const [moveable, setMoveable] = useState(false);
  const [isKing, setIsKing] = useState(false);
  const [isCaptured, setIsCaptured] = useState(false);
  const [position, setPosition] = useState(startPos);

  callback(setPosition, position);

  //const color = player.color;
  const primary = (color === 'black' ? 'black' : '#aa0000')
  const secondary = (color === 'black' ? '#282828' : '#dd0000')
  const backgroundImage = `radial-gradient(${secondary}, ${primary}, ${secondary}, ${primary} 40%, ${secondary} 60%)`
  
  const [{ isDragging }, drag] = useDrag({
    item: { id, position, type: ItemTypes.CHECKER },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  
  return (
    <div ref={drag} className="checker" style={{backgroundImage}}/>
  )
}

const Checker2 = () => {
  const Component = ({ id, startPos, player, color }) => {

  }; this.Component = Component;

}

export default Checker;