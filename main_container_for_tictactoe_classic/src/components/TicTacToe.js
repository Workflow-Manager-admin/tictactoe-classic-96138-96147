import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner, isDraw, getStatusMessage } from '../utils/gameLogic';

// PUBLIC_INTERFACE
/**
 * Main container component for the TicTacToe game
 * Manages game state and logic
 * @returns {JSX.Element} - Rendered component
 */
const TicTacToe = () => {
  // Initialize state for the board (9 null values for the 3x3 grid)
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // Track whose turn it is (X goes first)
  const [xIsNext, setXIsNext] = useState(true);
  
  // Calculate if there's a winner
  const winner = calculateWinner(squares);
  
  // Check if the game is a draw
  const gameIsDraw = isDraw(squares, winner);
  
  // Get the game status message
  const status = getStatusMessage(winner, gameIsDraw, xIsNext);

  /**
   * Handle a cell click
   * @param {number} index - The index of the clicked cell (0-8)
   */
  const handleClick = (index) => {
    // Create a copy of the squares array
    const squaresCopy = [...squares];
    
    // If there's already a winner, or the cell is already filled, ignore the click
    if (winner || squaresCopy[index]) {
      return;
    }
    
    // Set the value of the cell based on whose turn it is
    squaresCopy[index] = xIsNext ? 'X' : 'O';
    
    // Update the state with the new squares array and toggle whose turn it is
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  /**
   * Reset the game to its initial state
   */
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="game-status">{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button className="btn reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
