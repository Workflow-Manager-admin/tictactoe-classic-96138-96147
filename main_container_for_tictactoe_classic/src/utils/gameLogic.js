/**
 * Utility functions for TicTacToe game logic
 */

// PUBLIC_INTERFACE
/**
 * Checks if there is a winner on the board
 * @param {Array} squares - The current game board state (array of 9 elements)
 * @returns {string|null} - The winner ('X' or 'O') or null if no winner
 */
export const calculateWinner = (squares) => {
  // All possible winning combinations (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three positions have the same value (and not null), we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

// PUBLIC_INTERFACE
/**
 * Checks if the game is a draw (all squares filled with no winner)
 * @param {Array} squares - The current game board state
 * @param {string|null} winner - The current winner status
 * @returns {boolean} - True if the game is a draw
 */
export const isDraw = (squares, winner) => {
  // If there's a winner, it's not a draw
  if (winner) return false;
  
  // If any square is null/undefined, the game is not a draw yet
  return squares.every(square => square !== null);
};

// PUBLIC_INTERFACE
/**
 * Gets the status message based on current game state
 * @param {string|null} winner - The current winner
 * @param {boolean} isDraw - Whether the game is a draw
 * @param {boolean} xIsNext - Whether it's X's turn
 * @returns {string} - Status message to display
 */
export const getStatusMessage = (winner, isDraw, xIsNext) => {
  if (winner) {
    return `Winner: ${winner}`;
  }
  
  if (isDraw) {
    return 'Game ended in a draw!';
  }
  
  return `Next player: ${xIsNext ? 'X' : 'O'}`;
};
