import { createGrid } from "./grid";

export function startGame() {
  console.log("--starting game--");
  console.log(createGrid(10));
}

startGame();
