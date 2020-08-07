/**
 * Name: Nonogram
 * Author: Justin McGettigan
 * Co-Author: Andy Gatza
 */

/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import React, { createContext, useState, useEffect } from 'react';
import Board from './Board';
//import Game from './Game';
//import { boardState } from './logic';
import { BoardProvider, useBoardState } from './state';
import { boardState } from './logic';
import { observer } from 'mobx-react-lite';

/**
 * A panel of controls for manipulating and/or generating a Nonogram.
 * @param {*} param0 
 */
const ControlPanel = observer(({ className }) => {
  const boardState = useBoardState();

  const controlPanelStyle = css(`
    display: grid;
    gap: 1rem;
    grid-template-rows: min-content min-content auto;
    padding: 2rem;
    border: 1px solid gray;
    background-color: white;

    h1 {
      white-space: nowrap;
    }

    .controls {
      display: grid;
      gap: 1rem;
      grid-template-columns: min-content auto;
      //grid-template-rows: min-content;

      .boardSize {
        padding: 1rem;
        border: 1px solid gray;
        width: min-content;
  
        select {
          overflow-y: scroll;
        }
      }

      .inputs {

        button {
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }

        label > input {
          margin-right: 0.5rem;
        }
      }
    }

    .groupsInput {
      //padding: 1rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr 1fr;

      textarea {
        height: 100%;
      }
    }
  `)

  const boardSizes = []

  for(let i = 5; i < 50; i+=5) {
    boardSizes.push(i)
  }

  return (
    <form css={controlPanelStyle} className={className}>
      <h1>Nonogram Control Panel</h1>
      <div className="controls">
        <div className="boardSize">
          <h3>Size</h3>
          <select>
            {boardSizes.map((v, i) => <option key={i} value={v}>{v}</option>)}
          </select>
        </div>
        <div className="inputs">
          <button>Generate</button>
          <button onClick={(e) => {e.preventDefault();boardState.solveNonogram();}}>Solve</button>
          <button>Next Step</button>
          <button>Previous Step</button>
          <button>Undo</button>
          <button onClick={(e) => {e.preventDefault();boardState.clearNonogram();}}>Clear</button><br/>
          <input type="text" placeholder="speed"/><br/> {/* Replace this with slider.  Control 'lines solved per second'. */}
          <label>
            <input type="checkbox" />
            Visualize Solve
          </label><br/>
          <label>
            <input type="checkbox" />
            Automatically Solve Trivial Lines
          </label>
        </div>
      </div>
      <div className="groupsInput">
        <textarea placeholder="rows"/>
        <textarea placeholder="columns"/>
      </div>
    </form>
  )
})

const Nonogram = ({ className }) => {

  const nonogramStyle = theme => css(`
    display: grid;
    grid-template-columns: min-content min-content;
    gap: 2rem;
  `)

  return (
    <BoardProvider>
      <div css={nonogramStyle} className={className}>
        <Board/>
        <ControlPanel/>
      </div>
    </BoardProvider>
  )
}

export default Nonogram;