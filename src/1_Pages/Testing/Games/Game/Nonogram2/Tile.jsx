/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useEffect, useContext } from 'react';
import { Icon } from '../../../../../2_Components';
import { applyToLine, selectTile } from './logic';
import { GameContext } from './state';

const Overlay = ({ icon, backgroundColor='white', className }) => {
  const overlayStyle = theme => css(`
    position: absolute;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    background-color: ${backgroundColor};
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

const Tile = ({ tileState, groups, x, y, setHighlight, className }) => {
  //const [isSelected, setSelected] = useState(false);
  //const [isEliminated, setEliminated] = useState(false);
  const isSelected = false//(tileState != null) && tileState.selected;
  const isEliminated = false//(tileState != null) && tileState.eliminated;
  const gameContext = useContext(GameContext);
  const isSelectable = groups != null && groups.length === 0;

  const tileStyle = theme => css(`
    //background-color: ${isSelected ? 'black' : 'white'};
    //position: relative;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  `)

  const displayGroups = (groups) => {
    if (!isSelectable && groups != null) {
      return groups.map((group, i) => {
        return <span key={i} css={css`font-size: 1.5rem; font-weight: 500;`}>{group}</span>;
      })
    }
  }

  const tileLeftClick = () => {
  }
  
  const tileRightClick = () => {

  }

  const mouseEntersTile = () => {
    highlightColumnAndRow();
    gameContext.drag.current = [x, y];
    if(gameContext.drag.start != null && gameContext.drag.current != null) {
      applyToLine(gameContext.drag.start, gameContext.drag.current, selectTile);
    }
  }

  const mouseLeavesTile = () => {

  }

  const mouseDown = () => {
    gameContext.drag.start = [x, y];
  }

  const mouseUp = () => {
    //gameContext.drag.end = [x, y];
    //gameContext.drag.start = [];
  }

  const eliminateTile = (e) => {
    e.preventDefault()
  }

  const dragtoTile = () => {
    
  }

  const highlightColumnAndRow = () => {
    setHighlight({
      column: x,
      row: y
    })
  }

  return (
    <div css={tileStyle} onClick={() => tileLeftClick()} 
      onContextMenu={(e) => eliminateTile(e)} onMouseDown={() => mouseDown()} 
      onMouseUp={() => mouseUp()} onMouseEnter={() => mouseEntersTile()} 
      onMouseLeave={() => mouseLeavesTile()} className={className}>
      {displayGroups(groups)}
      {isSelected && <Overlay backgroundColor={'black'}/>}
      {isEliminated && <Overlay icon={'FaTimes'}/>}
    </div>
  )
}

export default Tile;