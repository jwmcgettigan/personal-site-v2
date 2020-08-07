/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useEffect, useContext } from 'react';
import { Icon } from '../../../../../2_Components';
//import { startDrag, stopDrag, dragSelection } from './logic';
import { useBoardState } from './state';
//import { GameContext } from './state';
import { observer } from 'mobx-react-lite';

const Overlay = ({ icon, backgroundColor='rgba(0,0,0,0)', className }) => {
  const overlayStyle = theme => css(`
    position: absolute;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    background-color: ${backgroundColor};
    pointer-events: none;
    svg {
      height: 100%;
      width: 100%;
    }
  `)

  return (
    <div css={overlayStyle} className={className}>
      {icon != null ? <Icon icon={icon}/> : ''}
    </div>
  )
}

const Tile = observer(({ groups, x, y, setHighlight, className }) => {
  const boardState = useBoardState();
  const isSelectable = y > 0 && x > 0;
  const isGroups = groups != null;
  x = x-1;
  y = y-1;
  const selected = isSelectable && boardState.tiles[y][x] === '#';
  const eliminated = isSelectable && boardState.tiles[y][x] === 'x';
  let highlighted = (isSelectable || isGroups) && (boardState.highlight.column === x || boardState.highlight.row === y);
  let dragType = null;
  let currentTile = JSON.stringify([x, y]) === JSON.stringify(boardState.drag.current);
  let startTile = JSON.stringify([x, y]) === JSON.stringify(boardState.drag.start);
  //const isSelectable = groups != null && groups.length === 0;

  const displayGroups = (groups) => {
    if (isGroups) {
      return groups.map((group, i) => {
        return <span key={i} css={css`font-size: 1.5rem; font-weight: 500;`}>{group}</span>;
      })
    }
  }

  const tileLeftClick = () => {
    //boardState.selectTile(x, y);
  }
  
  const tileRightClick = (e) => {
    e.preventDefault();
    //boardState.eliminateTile(x, y);
  }

  const mouseEntersTile = () => {
    boardState.highlight = {
      column: x,
      row: y
    }
    boardState.dragSelection([x, y]);
  }

  const mouseLeavesTile = () => {
    
  }

  const mouseDown = (e) => {
    switch(e.button) {
      case 0: // Left Mouse Button
        dragType = '#';
        break;
      case 1: // Middle Mouse Button
        break;
      case 2: // Right Mouse Button
        dragType = 'x';
        break;
    }
    if (boardState.tiles[y][x] !== '-') {
      dragType = '-'; // or boardState.tiles[y][x]
    }
    boardState.startDrag([x, y], dragType);
    //console.log(JSON.stringify(boardState.drag.tiles.after))
  }

  const mouseUp = () => {
    boardState.stopDrag();
  }

  const dragtoTile = () => {
    
  }

  const tileStyle = theme => css(`
    background-color: ${highlighted ? 'lightgrey' : 'white'};
    //position: relative;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  `)

  return (
    <div css={tileStyle} onClick={() => tileLeftClick()} 
      onContextMenu={(e) => tileRightClick(e)} onMouseDown={(e) => mouseDown(e)} 
      onMouseUp={() => mouseUp()} onMouseEnter={() => mouseEntersTile()} 
      onMouseLeave={() => mouseLeavesTile()} className={className}>
      {displayGroups(groups)}
      {selected && <Overlay backgroundColor={'black'}/>}
      {eliminated && <Overlay icon={'FaTimes'}/>}
      {currentTile && <Overlay css={css`border-radius:50%;height:5rem;width:5rem;z-index:50;`} backgroundColor={'rgba(0,0,0,0.3)'}/>}
      {startTile && <Overlay css={css`border: 3px solid rgba(255,0,0,0.8);`}/>}
    </div>
  )
})

export default Tile;