import React from 'react';

// PUBLIC_INTERFACE
/**
 * Cell component for a single cell in the TicTacToe grid
 * @param {Object} props - Component props
 * @param {string|null} props.value - Cell value ('X', 'O', or null)
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} - Rendered component
 */
const Cell = ({ value, onClick }) => {
  return (
    <button 
      className={`cell ${value ? `cell-${value.toLowerCase()}` : ''}`} 
      onClick={onClick}
      aria-label={value ? `Cell marked with ${value}` : 'Empty cell'}
    >
      {value}
    </button>
  );
};

export default Cell;
