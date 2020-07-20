// https://mobx-react.js.org/recipes-context
import React, { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { boardState } from './logic';

const BoardContext = createContext(null);

export const BoardProvider = ({ children }) => {
  const temp = useLocalStore(boardState);
  return (
    <BoardContext.Provider value={temp}>
      {children}
    </BoardContext.Provider>
  )
}

export const useBoardState = () => {
  const boardStore = useContext(BoardContext);
  if (!boardStore) {
    // this is so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return boardStore
}