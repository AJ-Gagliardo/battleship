import React from "react";
import Cell from "./Cell";

export default function Board() {
  const cells = [];
  const n = 4;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      cells.push(
        <button key={`${x},${y}`}>
          {x},{y}
        </button>,
      );
    }
  }
  return <div>{cells}</div>;
}
