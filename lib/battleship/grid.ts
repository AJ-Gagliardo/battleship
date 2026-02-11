export function createGrid(n: number) {
  let grid = {};

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      grid[`${x},${y}`] = { fired: false, hasShip: false };
    }
  }
  return grid;
}
