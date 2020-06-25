import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { setCheckerPos } from './Game';

const checkerStyle = (color) => {
  const primary = (color === 'black' ? 'black' : '#aa0000')
  const secondary = (color === 'black' ? '#282828' : '#dd0000')

  return {
    display: 'inline-block',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    zIndex: 1,
    cursor: 'move',
    backgroundImage: `radial-gradient(${secondary}, ${primary}, ${secondary}, ${primary} 40%, ${secondary} 60%)`,
    boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3), 1px 1px 2px rgba(0,0,0,0.6)',
  }
}

//backgroundColor: '#282828',
//border: '5px solid black',

const Checker = ({ id, pos, color }) => {
  //const itemType = (color === 'black' ? ItemTypes.BLACKCHECKER : ItemTypes.REDCHECKER);
  //setCheckerPos(pos);

  const [{ isDragging }, drag] = useDrag({
    item: { id, pos, type: ItemTypes.CHECKER},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return <div ref={drag} style={{...checkerStyle(color)}}/>
}

export default Checker;