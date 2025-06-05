import React from "react";

// Board component takes the board array, click handler, moves, and winning line as props
const Board = ({ board, onClick, moves, winningLine = [] }) => {
  // Function to get the line style based on winning line pattern
  const getLineStyle = () => {
    if (winningLine.length === 0) return {};

    const [a, b, c] = winningLine;

    // Row lines (horizontal)
    if (a === 0 && b === 1 && c === 2)
      return {
        top: "16.5%",
        left: "0%",
        width: "100%",
        height: "4px",
        transform: "none",
      }; // Top row
    if (a === 3 && b === 4 && c === 5)
      return {
        top: "50%",
        left: "0%",
        width: "100%",
        height: "4px",
        transform: "translateY(-50%)",
      }; // Middle row
    if (a === 6 && b === 7 && c === 8)
      return {
        top: "83.5%",
        left: "0%",
        width: "100%",
        height: "4px",
        transform: "none",
      }; // Bottom row

    // Column lines (vertical)
    if (a === 0 && b === 3 && c === 6)
      return {
        top: "0%",
        left: "15.8%",
        width: "4px",
        height: "100%",
        transform: "none",
      }; // Left column
    if (a === 1 && b === 4 && c === 7)
      return {
        top: "0%",
        left: "50%",
        width: "4px",
        height: "100%",
        transform: "translateX(-50%)",
      }; // Middle column
    if (a === 2 && b === 5 && c === 8)
      return {
        top: "0%",
        left: "82.5%",
        width: "4px",
        height: "100%",
        transform: "none",
      }; // Right column

    // Diagonal lines
    if (a === 0 && b === 4 && c === 8)
      return {
        top: "50%",
        left: "50%",
        width: "141%",
        height: "4px",
        transform: "translate(-50%, -50%) rotate(45deg)",
      }; // Top-left to bottom-right
    if (a === 2 && b === 4 && c === 6)
      return {
        top: "50%",
        left: "50%",
        width: "141%",
        height: "4px",
        transform: "translate(-50%, -50%) rotate(-45deg)",
      }; // Top-right to bottom-left

    return {};
  };
  // Renders a single cell
  const renderCell = (i) => {
    const value = board[i]; // X, O, or null
    const highlight = moves[value]?.[0]; // First move to be potentially removed
    const isHighlighted = i === highlight && moves[value]?.length >= 3;
    const isWinningCell = winningLine.includes(i); // Check if this cell is part of winning line

    return (
      <div
        key={i}
        onClick={() => onClick(i)} // Handle cell click
        className={`w-24 h-24 flex items-center justify-center text-4xl font-bold cursor-pointer border-4 border-black transition-all duration-500
        ${
          isWinningCell
            ? ""
            : isHighlighted
            ? "bg-red-300"
            : "bg-[#B8CFCE]"
        } 
        ${value === "X" ? "text-white" : value === "O" ? "text-yellow-300" : ""}
        `}
      >
        <span
          className={isWinningCell ? " text-white font-extrabold text-4xl" : ""}
        >
          {value}
        </span>
      </div>
    );
  };
  // Render a 3x3 grid of cells
  return (
    <div className="relative">
      <div className="grid grid-cols-3">
        {board.map((_, i) => renderCell(i))}
      </div>
      {/* Winning line overlay */}
      {winningLine.length > 0 && (
        <div
          className="absolute bg-green-500 winning-line shadow-lg z-10 rounded-full"
          style={getLineStyle()}
        />
      )}
    </div>
  );
};

export default Board;
