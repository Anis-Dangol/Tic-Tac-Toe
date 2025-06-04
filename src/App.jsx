// client/src/App.js
import React, { useState } from "react";
import Board from "./components/Board";
import { checkWinner, initialBoard } from "./utils/gameLogic";

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [moves, setMoves] = useState({ X: [], O: [] });
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const currentPlayer = xIsNext ? "X" : "O";
    const playerMoves = moves[currentPlayer];
    const newMoves =
      playerMoves.length >= 3
        ? [...playerMoves.slice(1), index]
        : [...playerMoves, index];
    const newBoard = [...board];

    if (playerMoves.length >= 3) {
      const removeIndex = playerMoves[0];
      newBoard[removeIndex] = null;
    }

    newBoard[index] = currentPlayer;
    const gameWinner = checkWinner(newBoard);

    setBoard(newBoard);
    setMoves({ ...moves, [currentPlayer]: newMoves });
    setXIsNext(!xIsNext);
    if (gameWinner) setWinner(gameWinner);
  };

  const reset = () => {
    setBoard(initialBoard);
    setMoves({ X: [], O: [] });
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="min-h-screen bg-[#333446] text-center text-white flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold mb-5">
        Tic Tac Toe
      </h1>
      <Board board={board} onClick={handleClick} moves={moves} />
      {winner ? (
        <>
          <p className="text-xl mt-2 text-green-300 font-bold tracking-wide">
            Winner: {winner}
          </p>
          <button
            className="gradient-button "
            onClick={reset}
          >
            Restart
          </button>
        </>
      ) : (
        <>
          <p className="mt-2 font-bold text-xl tracking-wider">
            Turn: {xIsNext ? "X" : "O"}
          </p>
          <button
            className="gradient-button "
            onClick={reset}
          >
            New Game
          </button>
        </>
      )}
    </div>
  );
}

export default App;
