import {randomInt}  from "./randomInt"
export function prepareGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push({ opened: false, secret: false });
      }
      grid.push(row);
    }
  
    const secretsTotal = Math.floor(size);
    let secretsCount = 0;
  
    while (secretsCount < secretsTotal) {
      const randY = randomInt(0, size - 1);
      const randX = randomInt(0, size - 1);
      const target = grid[randY][randX];
  
      if (!target.secret) {
        target.secret = true;
        secretsCount++;
      }
    }
  
    return grid;
  }
  