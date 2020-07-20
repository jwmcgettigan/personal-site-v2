import { observable, autorun } from "mobx";

export const boardState = () => {
  const state = {
    // observable states
    columns: [[4], [3], [1], [3], [4,2], [4,4], [3,2], [3,4], [1,1,2], [2,7]],
    rows: [[3,4,1], [2,6], [2,4], [1,2,1], [1], [1], [1,3], [1,1,1,1], [7], [7]],
    tiles: [],
    drag: {
      type: null,
      direction: null,
      start: null,
      current: null,
      end: null,
      tiles: []
    },

    // derived values
    get numCols() {
      return this.columns.length;
    },

    get numRows() {
      return this.rows.length;
    },

    selectTile (x, y) {
      if (this.tiles[y][x] === '-') {
        this.tiles[y][x] = '#';
      }
    },

    eliminateTile (x, y) {
      if (this.tiles[y][x] === '-') {
        this.tiles[y][x] = 'x';
      }
    },

    updateTile ([x, y]) {
      if (this.tiles[y][x] !== this.drag.type) {
        this.tiles[y][x] = this.drag.type;
      } /*else if (this.tiles[y][x] === this.drag.type) {
        this.tiles[y][x] = '-';
      }*/
    },

    startDrag (from, type) {
      this.drag.type = type;
      this.drag.start = from;
    },

    stopDrag () {
      this.drag.start = null;
      this.drag.type = null;
    },

    dragSelection (current) {
      if(this.drag.start != null && current != null) {
        this.drag.tiles = applyToLine(this.drag.start, current);
        this.drag.tiles.forEach((tile, i) => {
          this.updateTile(tile);
        })
      }
    }
  }

  state.tiles = Array(state.numRows).fill(null).map(
    () => Array(state.numCols).fill("-"));

  // a function that observes the state
  autorun(() => {
    console.log(state.tiles);
  })

  return state;
}

export const applyToLine = (from, to, tiles) => {
  // Apply a function to a line of coordinates that snaps to a grid.
  const [x1, y1] = from;
  const [x2, y2] = to;
  const tempTiles = [];

  let fromX, toX, stepX, fromY, toY, stepY;

  if (Math.abs(x1-x2) > Math.abs(y1-y2)) {
    // Horizontal Line
    stepX = 1;
    stepY = 0;

    fromY = toY = y1;

    if (x1 < x2) {
      fromX = x1;
      toX = x2;
    } else {
      fromX = x2;
      toX = x1;
    }
  } else {
    // Vertical line
    stepX = 0;
    stepY = 1;

    fromX = toX = x1;

    if (y1 < y2) {
      fromY = y1;
      toY = y2;
    } else {
      fromY = y2;
      toY = y1;
    }
  }

  for(let x = fromX, y = fromY; x <= toX && y <= toY; x += stepX, y += stepY) {
    tempTiles.push([x, y]);
  }
  return tempTiles;
}

export const selectTile = (x, y) => {
  if (boardState.tiles[y][x] === '-') {
    boardState.tiles[y][x] = '#';
  }
}

export const selectTiles = (from, to) => {
  applyToLine(from, to, selectTile);
}

export const eliminateTile = (x, y) => {
  if (boardState.tiles[y][x] === '-') {
    boardState.tiles[y][x] = 'x';
  }
}

export const eliminateTiles = (from, to) => {
  applyToLine(from, to, eliminateTile);
}

export const startDrag = (from, type) => {
  boardState.drag.type = type;
  boardState.drag.start = from;
}

export const stopDrag = () => {
  boardState.drag.start = null;
  boardState.drag.type = null;
}

export const dragSelection = (current) => {
  if(boardState.drag.start != null && current != null) {
    applyToLine(boardState.drag.start, current, selectTile);
  }
}