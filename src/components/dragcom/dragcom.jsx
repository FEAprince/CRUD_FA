import React, { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import { useEffect } from "react";

import { todoHandlergetData } from "../service/auth.service";
const board = {
  columns: [
    {
      id: 1,
      title: "Todo",
      cards: [],
    },
    {
      id: 2,
      title: "Process",
      cards: [],
    },
    {
      id: 3,
      title: "Completed",
      cards: [],
    },
  ],
};
// console.log(board);
// const body = {
//   id: localStorage.getItem("id"),
// };
// const getData = async () => {
//   const response = await todoHandlergetData(body);

//   console.log(response.data);
// };
// useEffect(() => {
//   getData();
// }, []);

function ControlledBoard() {
  const [controlledBoard, setBoard] = useState(board);
  const body = {
    id: localStorage.getItem("id"),
  };
  const getData = async () => {
    const response = await todoHandlergetData(body);
    if (response.data.length > 0) {
      let updated = controlledBoard;
      updated.columns[0].cards = response.data;
      setBoard(updated);
      // console.log(response.data);
    }
  };
  useEffect(() => {
    getData();
  });

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    // console.log(updatedBoard);
    setBoard(updatedBoard);
  }

  return (
    <Board 
    onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

export default function Dragcom() {
  return (
    <div className="tableui">
      <ControlledBoard />
          </div>
  );
}
