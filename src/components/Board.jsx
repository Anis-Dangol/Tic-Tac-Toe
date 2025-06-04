// client/src/components/Board.js
import React from 'react';

const Board = ({ board, onClick, moves }) => {
  const renderCell = (i) => {
    const value = board[i];
    const highlight = moves[value]?.[0];
    const isHighlighted = i === highlight && moves[value]?.length >= 3;

    return (
      <div
        key={i}
        onClick={() => onClick(i)}
        className={`w-24 h-24 flex items-center justify-center text-4xl font-bold cursor-pointer border-4 border-black
        ${isHighlighted ? 'bg-red-300' : 'bg-[#B8CFCE]'} 
        ${value === 'X' ? 'text-white' : value === 'O' ? 'text-yellow-300' : ''}`}
      >
        {value}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3">{board.map((_, i) => renderCell(i))}</div>
  );
};

export default Board;
