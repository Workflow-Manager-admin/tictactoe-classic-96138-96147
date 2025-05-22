import React from 'react';
import Cell from './Cell';

// PUBLIC_INTERFACE
/**
 * Board component that renders the 3x3 TicTacToe grid
 * @param {Object} props - Component props
 * @param {Array} props.squares - Current state of the board (array of 9 elements)
 * @param {Function} props.onClick - Handler function when a cell is clicked
 * @returns {JSX.Element} - Rendered component
 */
const Board = ({ squares, onClick }) => {
  // Helper function to render each cell
  const renderCell = (index) => {
    return (
      <Cell
        value={squares[index]}
        onClick={() => onClick(index)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="board-row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="board-row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

export default Board;
