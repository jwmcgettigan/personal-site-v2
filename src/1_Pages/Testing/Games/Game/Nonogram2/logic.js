
//let tiles = [[],[]]
let tiles = null;
let observers = []

export function observe(o) {
  observers.push(o)
  emitChange()
  return () => {
    observers = observers.filter((t) => t !== o)
  }
}

function emitChange() {
  observers.forEach((o) => o && o(tiles))
}

export function updateTiles(newTiles) {
  tiles = newTiles;
  emitChange()
}

export const applyToLine = (from, to, fn) => {
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
    fn(x, y);
  }
}

export const selectTile = (x, y) => {
  //console.log(tiles)
  if (tiles[y][x] === '-') {
    tiles[y][x] = '#';
    emitChange();
  }
}

export const selectTiles = (from, to) => {
  applyToLine(from, to, selectTile);
}

export const eliminateTile = (x, y) => {
  if (tiles[y][x] === '-') {
    tiles[y][x] = 'x';
    emitChange();
  }
}

export const eliminateTiles = (from, to) => {
  applyToLine(from, to, eliminateTile);
}

const dragSelection = () => {

}

export {tiles};