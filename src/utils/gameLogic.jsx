// Initializes an empty board with 9 nulls
export const initialBoard = Array(9).fill(null);

// Checks the board for a winner by checking all winning lines
export const checkWinner = (board) => {
  const winLines = [
    [0,1,2],[3,4,5],[6,7,8],  // Rows
    [0,3,6],[1,4,7],[2,5,8],  // Columns
    [0,4,8],[2,4,6]           // Diagonals
  ];

  // Check each winning line
  for (let [a,b,c] of winLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { 
        winner: board[a], // Return winner ('X' or 'O')
        winningLine: [a, b, c] // Return the winning line positions
      };
    }
  }
  return null; // No winner found
};
