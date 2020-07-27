import { observable, autorun, toJS } from "mobx";

/*
Algorithm to solve a Nonogram.
1. Check for trivial lines.
  - Check the sum of each line's groups plus 1 between each of them.
    ex. groups [4, 6, 2] => sum = 4 + 1 + 6 + 1 + 2
  - If this sum is equal to the length of the line, then it is a trivial line (and can be solved immediately).
2. If trivial lines are found on the edges...
3. Check for the largest groups.
  - Large groups can be used to find portions of a line that must be part of it.


*/

export const boardState = () => {
  const state = {
    // observable states
    columns: [[4], [3], [1], [3], [4,2], [4,4], [3,2], [3,4], [1,1,2], [2,7]],
    rows: [[3,4,1], [2,6], [2,4], [1,2,1], [1], [1], [1,3], [1,1,1,1], [7], [7]],
    tiles: [],
    highlight: {
      column: -1,
      row: -1
    },
    drag: {
      type: null,
      direction: null, // Detect whether first onMouseEnter is vertical or horizontal
      start: null,
      current: null,
      end: null,
      tiles: { // Consider using a set instead of array for these tiles
        before: [], // stores the tile types (ex. '#', 'x', '-')
        after: [], // stores the tile positions (ex. [2, 3])
        lastSnapped: null
      }
    },

    // derived values
    get size() {
      return [this.columns.length, this.rows.length]
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

    updateTile ([x, y], type=this.drag.type) {
      if (this.tiles[y][x] !== type) {
        this.tiles[y][x] = type;
      }
    },

    cautiousTileUpdate ([x, y], type) {
      if (this.tiles[y][x] === '-') {
        this.tiles[y][x] = type;
      }
    },

    startDrag (from, type) {
      this.drag.type = type;
      this.addTileToDrag(from);
      this.drag.current = from;
      this.drag.start = from;
    },

    stopDrag () {
      this.drag = {
        type: null,
        direction: null, // Detect whether first onMouseEnter is vertical or horizontal
        start: null,
        current: null,
        end: null,
        tiles: { // Consider using a set instead of array for these tiles
          before: [], // stores the tile types (ex. '#', 'x', '-')
          after: [], // stores the tile positions (ex. [2, 3])
          lastSnappedTile: null
        }
      }
    },

    dragSelection (current) {
      if(this.drag.start != null && current != null) {
        this.drag.current = current;
        this.snapToLine(this.drag.start, current);
      }
    },

    addTileToDrag ([x, y]) {
      this.drag.tiles.before.push(this.tiles[y][x]);
      this.drag.tiles.after.push([x, y]);
      this.updateTile([x, y]);
    },

    popTileFromDrag () {
      const [x, y] = this.drag.tiles.after.pop();
      this.tiles[y][x] = this.drag.tiles.before.pop();
    },

    snapToLine (from, to) {
      const [x1, y1] = from;
      const [x2, y2] = to;
    
      let x, y, direction;
    
      if (Math.abs(x2-x1) > Math.abs(y2-y1)) {
        // Horizontal Line
        direction = "Horizontal";
        y = y1;
        x = x2;
      } else {
        // Vertical line
        direction = "Vertical";
        x = x1;
        y = y2;
      }

      const snappedTile = [x, y];

      if(direction !== this.drag.direction) {
        if(this.drag.tiles.after.length > 1) {
          this.swapLineDirection();
          this.popTileFromDrag();
        }
        this.addTileToDrag(snappedTile);
        this.drag.direction = direction;
      } else {
        if (JSON.stringify(snappedTile) !== JSON.stringify(this.drag.tiles.lastSnappedTile)) {
          if(JSON.stringify(this.drag.tiles.after).indexOf(JSON.stringify(snappedTile)) !== -1) {
            this.popTileFromDrag();
          } else {
            this.addTileToDrag(snappedTile);
          }
        }
      }

      console.log(JSON.stringify(this.drag.tiles.after))

      this.drag.tiles.lastSnappedTile = snappedTile;
    },

    swapLineDirection () {
      // Swap the line's direction
      this.popLine();
      this.pushLine(this.drag.start, this.drag.current);
    },

    popLine () {
      const lineLength = this.drag.tiles.after.length;
      for(let i = 0; i < lineLength; i++) {
        this.popTileFromDrag();
      }
    },

    pushLine (from, to) {
      const [x1, y1] = from;
      const [x2, y2] = to;

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
        this.addTileToDrag([x, y]);
      }
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    solveNonogram () {
      this.solveTrivialLines();
      this.solveEdges();
      this.checkForSolvedLines();
      //this.solveEdges();
    },

    solveTrivialLines () {
      this.rows.forEach((row, i) => {
        let rowPos = 0;
        if((row.reduce((a,b) => a+b) + (row.length-1)) === this.size[0]) {
          row.forEach((group) => {
            for(let j = 0; j < group; j++) {
              this.updateTile([rowPos, i], '#');
              rowPos++;
            }
            if (rowPos < this.size[0]) {
              this.updateTile([rowPos, i], 'x');
              rowPos++;
            }
          })
        }
      })

      this.columns.forEach((col, i) => {
        let colPos = 0;
        if((col.reduce((a,b) => a+b) + (col.length-1)) === this.size[1]) {
          col.forEach((group) => {
            for(let j = 0; j < group; j++) {
              this.updateTile([i, colPos], '#');
              colPos++;
            }
            if (colPos < this.size[1]) {
              this.updateTile([i, colPos], 'x');
              colPos++;
            }
          })
        }
      })
    },

    solveEdges (verify) {
      //TODO: Have a way to detect new edge lines during the process.
      //      - Does it do this automatically already? Edge cases?
      //TODO: Verify that there are no unsolved edge lines.
      //      - For the purpose of testing the algorithm only.
      //      - Don't run this for production purposes.
      let j;
      this.tiles.forEach((row, i) => {

        
        if(row[0] === '#') {
          for(j = 1; j < this.rows[i][0]; j++) {
            this.cautiousTileUpdate([j, i], '#');
          }
          this.cautiousTileUpdate([j, i], 'x');
          if(this.rows[i].length === 1) {
            for(j = j; j < this.rows.length; j++) {
              this.cautiousTileUpdate([j, i], 'x');
            }
          }
        }
        if(row[this.rows.length-1] === '#') {
          for(j = this.rows.length - 2; j > this.rows.length - 1 - this.rows[i][this.rows[i].length-1]; j--) {
            this.cautiousTileUpdate([j, i], '#');
          }
          this.cautiousTileUpdate([j, i], 'x');
          if(this.rows[i].length === 1) {
            for(j = j; j >= 0; j--) {
              this.cautiousTileUpdate([j, i], 'x');
            }
          }
        }

        
        row.forEach((col, k) => {
          if(i === 0 && col[0] === '#') {
            for(j = 1; j < this.columns[k][0]; j++) {
              this.cautiousTileUpdate([k, j], '#');
            }
            this.cautiousTileUpdate([k, j], 'x');
            if(this.columns[k].length === 1) {
              for(j = j; j < this.columns.length; j++) {
                this.cautiousTileUpdate([k, j], 'x');
              }
            }
          }

          if(i === this.rows.length-1 && this.tiles[i][this.columns.length-1] === '#') {
            for(j = this.columns.length - 2; j > this.columns.length - 1 - this.columns[k][this.columns[k].length-1]; j--) {
              this.cautiousTileUpdate([k, j], '#');
            }
            this.cautiousTileUpdate([k, j], 'x');
            if(this.columns[k].length === 1) {
              for(j = j; j >= 0; j--) {
                this.cautiousTileUpdate([k, j], 'x');
              }
            }
          }
        })
      })
    },

    checkForSolvedLines () {
      // Go through each row and column
      // If the sum of groups = the number of selected tiles
      // then that line is solved and
      // all blank tiles should be eliminated.

      let selectedTileSum, groupSum, j;

      this.tiles.forEach((row, i) => {
        groupSum = selectedTileSum = 0;
        groupSum = this.rows[i].reduce((a,b) => a+b);
        for(j = 0; j < this.rows.length; j++) {
          selectedTileSum += (this.tiles[i][j] === '#');
        }
        if (groupSum === selectedTileSum) {
          for(j = 0; j < this.rows.length; j++) {
            this.cautiousTileUpdate([j, i], 'x');
          }
        }
        
        row.forEach((col, k) => {
          if (i === 0) {
            groupSum = selectedTileSum = 0;
            groupSum = this.columns[k].reduce((a,b) => a+b);
            for(j = 0; j < this.columns.length; j++) {
              selectedTileSum += (this.tiles[j][k] === '#');
            }
            if (groupSum === selectedTileSum) {
              for(j = 0; j < this.rows.length; j++) {
                this.cautiousTileUpdate([k, j], 'x');
              }
            }
          }
        })
      })
    }
  }

  state.tiles = Array(state.size[1]).fill(null).map(
    () => Array(state.size[0]).fill("-"));

  // a function that observes the state
  autorun(() => {
    console.log(state.tiles);
  })

  return state;
}

export const applyToLine = (from, to) => {
  // Apply a function to a line of coordinates that snaps to a grid.
  const [x1, y1] = from;
  const [x2, y2] = to;

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
    //addTileToDrag([x, y]);
  }
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