// Import React and useState for managing component state
import React, { useState } from "react";

// Import the Board component and helper functions
import Board from "./components/Board";
import { checkWinner, initialBoard } from "./utils/gameLogic";

// Main App component
function App() {
  // State variables:
  const [board, setBoard] = useState(initialBoard); // The game board (array of 9 cells)
  const [xIsNext, setXIsNext] = useState(true); // Tracks which player's turn it is
  const [moves, setMoves] = useState({ X: [], O: [] }); // Stores player move history
  const [winner, setWinner] = useState(null); // Stores the winner if there's one
  const [winningLine, setWinningLine] = useState([]); // Stores the winning line positions

  // Handles cell clicks
  const handleClick = (index) => {
    // Prevent clicking on an already filled cell or when game is over
    if (board[index] || winner) return;

    const currentPlayer = xIsNext ? "X" : "O"; // Determine the current player
    const playerMoves = moves[currentPlayer]; // Get that player's move history

    // Update moves: if player already has 3 moves, remove the oldest one
    const newMoves =
      playerMoves.length >= 3
        ? [...playerMoves.slice(1), index] // Remove oldest move
        : [...playerMoves, index]; // Otherwise, just add move

    const newBoard = [...board]; // Clone current board

    // Remove the oldest mark if player has >= 3 moves
    if (playerMoves.length >= 3) {
      const removeIndex = playerMoves[0];
      newBoard[removeIndex] = null;
    }

    // Place the new mark
    newBoard[index] = currentPlayer;

    // Check for winner
    const gameWinner = checkWinner(newBoard);

    // Update states
    setBoard(newBoard);
    setMoves({ ...moves, [currentPlayer]: newMoves });
    setXIsNext(!xIsNext); // Switch player
    if (gameWinner) {
      setWinner(gameWinner.winner);
      setWinningLine(gameWinner.winningLine);
    }
  };

  // Resets the game to its initial state
  const reset = () => {
    setBoard(initialBoard);
    setMoves({ X: [], O: [] });
    setWinner(null);
    setWinningLine([]);
    setXIsNext(true);
  };

  // JSX rendering
  return (
    <div className="min-h-screen bg-[#333446] text-center text-white flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold mb-5">Tic Tac Toe</h1>
      <Board
        board={board}
        onClick={handleClick}
        moves={moves}
        winningLine={winningLine}
      />
      {winner ? (
        <>
          <div className="animate-bounce">
            <p className="text-3xl mt-2 text-green-300 font-bold tracking-wide winning-text">
              🎉 Winner: {winner} 🎉
            </p>
          </div>
          <button
            className="gradient-button animate-celebration hover:animate-none"
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
          <button className="gradient-button " onClick={reset}>
            New Game
          </button>
        </>
      )}
    </div>
  );
}

export default App;
