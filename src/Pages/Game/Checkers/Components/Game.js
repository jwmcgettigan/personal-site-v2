//let checkerPosition = [0, 0]
export let checkerPositions = [[1, 0], [3, 0], [5, 0], [7, 0], [0, 1], [2, 1], [4, 1], [6, 1], [8, 1]]
let observers = []
export let checkerPos = [0, 0]

function emitChange() {
  observers.forEach((o) => o && o(checkerPos))
}

export function observe(o) {
  observers.push(o)
  emitChange()
  return () => {
    observers = observers.filter((t) => t !== o)
  }
}

export function canMoveChecker(toX, toY) {
  const [x, y] = checkerPos
  const dx = toX - x
  const dy = toY - y
  return (
    (Math.abs(dx) === 1 && Math.abs(dy) === 1)
  )
}

export function moveChecker(toX, toY) {
  checkerPos = [toX, toY]
  emitChange()
}

export function setCheckerPos(pos) {
  checkerPos = pos
}

export function getCheckerPos() {
  return checkerPos;
}