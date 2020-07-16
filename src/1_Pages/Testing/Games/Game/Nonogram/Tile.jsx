/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useEffect } from 'react';
import { Icon } from '../../../../../2_Components';
import * as util from './Utility';

const useForceUpdate = () => useState()[1];

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

const Tile = ({ groups, x, y, setHighlight, className }) => {
    const [isSelected, setSelected] = useState(false);
    const [isEliminated, setEliminated] = useState(false);
    const isSelectable = groups != null && groups.length === 0;

    /*
    useEffect(() => {
      console.log(window.nonogram.tiles)
      if (window.nonogram.tiles != null) {
        if (window.nonogram.tiles[y-1][x-1] === '#') {
          setSelected(true);
        }
        if (window.nonogram.tiles[y-1][x-1] === 'x') {
          setEliminated(true);
        }
      }
    }, [])*/
  
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
  
    /*
    const selectTile = () => {
      if (isSelectable) {
        selectTile
        setSelected(isSelected => !isSelected);
        window.nonogram.tiles[y-1][x-1] = '#';
        window.nonogram.drag.start = [x-1, y-1]
      }
    }*/

    const tileLeftClick = () => {
      //util.selectTiles(x, y);
      if (window.nonogram.tiles[y-1][x-1] === '-') {
        //setSelected(isSelected => !isSelected);
        window.nonogram.drag.start = [x-1, y-1]
      }
    }
    
    const tileRightClick = () => {

    }

    const mouseEntersTile = () => {
      console.log(window.nonogram.drag)
      console.log(window.nonogram.mouseDown)
      highlightColumnAndRow();
    }

    const mouseLeavesTile = () => {
      if (window.nonogram.mouseDown) {
        window.nonogram.drag.dragging = true;
      }
    }

    const mouseDown = () => {
      window.nonogram.mouseDown = true;
    }

    const mouseUp = () => {
      console.log([x-1, y-1])
      window.nonogram.mouseDown = false;
      window.nonogram.drag.dragging = false;
      window.nonogram.drag.end = [x-1, y-1]
    }
  
    const eliminateTile = (e) => {
      e.preventDefault();
      if (isSelectable) {
        //setEliminated(isEliminated => !isEliminated);
        window.nonogram.tiles[y-1][x-1] = 'x';
      }
    }
  
    const dragtoTile = () => {
      
    }
  
    const highlightColumnAndRow = () => {
      setHighlight({
        column: x,
        row: y
      })
    }
  
    /*
    When OnMouseDown on tile, get tile data.
    When OnMouseEnters tile, get tile data.
    When OnMouseLeaves tile, get tile data.
  
    If originTile selected and mousedown
    onMouseDown and onMouseOver
  
    mouseDownOnCell
    mouseUp
    mouseEntersCell
    mouseLeavesCell
  
    Drag:
      - Start
      - End
  
    onMouseEnter={() => selectTile()}
    */
  
  /*
  selected: #
  eliminated: x
  */
  
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