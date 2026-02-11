import React from "react";
import Cell from "./Cell";

export default function Board() {
  const cells = [];

  for (let i = 0; i < 5; i++) {
    cells.push(<button key={i}>Cell{i}</button>);
  }
  return <div>{cells}</div>;
}
