/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useEffect } from 'react';
import { Icon } from '../../../../../2_Components';

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

const Tile = ({ backgroundColor, groups, x, y, className }) => {
  const [isSelected, setSelected] = useState(false);
  const [isEliminated, setEliminated] = useState(false);
  const isSelectable = groups != null && groups.length === 0;

  const tileStyle = theme => css(`
    //background-color: ${backgroundColor};
    //background-color: ${isSelected ? 'black' : 'white'};
    //position: relative;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  `)

  const displayGroups = (groups) => {
    if (!isSelectable && groups != null) {
      return groups.map((group, i) => {
        return <span key={i} css={css`font-size: 1.5rem; font-weight: 500;`}>{group}</span>;
      })
    }
  }

  const selectTile = () => {
    if (isSelectable) {
      setSelected(isSelected => !isSelected);
    }
  }
  

  const eliminateTile = () => {
    if (isSelectable) {
      setEliminated(isEliminated => !isEliminated);
    }
  }

  return (
    <div css={tileStyle} onClick={() => selectTile()} onContextMenu={(e) => { e.preventDefault(); eliminateTile(); }} onDragOver={() => selectTile()} className={className}>
      {displayGroups(groups)}
      {isSelected && <Overlay backgroundColor={'black'}/>}
      {isEliminated && <Overlay icon={'FaTimes'}/>}
    </div>
  )
}

/**
 * 
 * @param {Array} size - the number of [columns, rows]
 */
const Board = ({ size, className }) => {
  const [numCols, numRows] = size.map(v => v+1)
  const tiles = Array(numRows).fill(null).map(() => Array(numCols).fill("-"));

  const columns = [[4], [3], [1], [3], [4,2], [4,4], [3,2], [3,4], [1,1,2], [2,7]]
  const rows = [[3,4,1], [2,6], [2,4], [1,2,1], [1], [1], [1,3], [1,1,1,1], [7], [7]]
  //const groups = [columns, rows]

  function renderTiles(size) {
    const tiles = [];

    function renderTile(i) {
      const x = i % numCols;
      const y = Math.floor(i / numRows);
      
      let tileStyle = '';
      let groups = [];
      if (x % 5 == 0) {
        tileStyle += 'border-right: 3px solid black;';
      }
      if (y % 5 == 0) {
        tileStyle += 'border-bottom: 3px solid black;';
      }
      if (x == 0) {
        tileStyle += 'border-left: 3px solid black; justify-content: flex-end; padding: 0 0.5rem; span { margin-left: 0.75rem; }';
        groups = rows[y-1];
      }
      if (y == 0) {
        tileStyle += 'border-top: 3px solid black; flex-direction: column; justify-content: flex-end; padding: 0.5rem 0; span { margin-top: 0.25rem; }';
        groups = columns[x-1];
      }
      if (x == 0 && y == 0) {
        tileStyle += 'border-top: none; border-left: none;';
      }
      return <Tile key={i} css={css(tileStyle)} backgroundColor={'white'} groups={groups}/>
    }

    for (let i = 0; i < (numCols*numRows); i += 1) {
      tiles.push(renderTile(i));
    }
    return tiles;
  }

  const boardStyle = theme => css(`
    display: grid;
    grid-template-columns: ${`repeat(${numCols}, 1fr)`};
    grid-template-rows: ${`repeat(${numRows}, 1fr)`};
    width: 560px;
    height: 560px;
    border: 1px solid gray;
    padding: 2rem;
    background-color: white;
  `)

  return (
    <div css={boardStyle} className={className}>
      {renderTiles(size)} 
    </div>
  )
}

export default Board;