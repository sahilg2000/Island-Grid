import React, { useEffect, useState } from 'react';
import '../App.css'; 
import Cell from './Cell';

function Grid({ sizeX, sizeY }) {
    // Receives sizeX and sizeY from App.js

    const [grid, setGrid] = useState([]);           // Grid, with all cells
    const [cellSize, setCellSize] = useState(100);  // Initial cell size in pixels
    const maxGridSize = 500;    // Max grid size in pixels
    const maxCellSize = 100;    // Max cell size in pixels

    useEffect(() => {
        // Create a new grid preserving existing values
        const newGrid = Array(sizeY).fill().map((_, rowIndex) => 
            Array(sizeX).fill().map((_, colIndex) => 
                grid[rowIndex]?.[colIndex] ?? 0
            ));        
        setGrid(newGrid);

        // Debugging Statement: Grid generation, row/column changes
        console.log('New Grid:', newGrid);

        // Cell size calculator
        const calculatedCellSize = Math.min(
            maxGridSize / sizeX,
            maxGridSize / sizeY,
            maxCellSize
        );
        setCellSize(calculatedCellSize);
    }, [sizeX, sizeY]);

    const handleCellClick = (rowIndex, colIndex) => {
        const newGrid = grid.map((row, r) => 
            row.map((cell, c) => 
                r === rowIndex && c === colIndex ? (cell === 0 ? 1 : 0) : cell
            )
        );
        setGrid(newGrid);
        
        // Debugging Statement: Cell Click
        console.log('Updated Grid with click:', newGrid);
    };

    const gridWidth = cellSize * sizeX;
    const gridHeight = cellSize * sizeY;

    return (
    <div 
    className="grid"
    style={{
        width:  `${gridWidth}px`,
        height: `${gridHeight}px`,
        gridTemplateColumns: `repeat(${sizeX}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${sizeY}, ${cellSize}px)`,
        }}>
            {grid.map((row, rowIndex) => 
                row.map((cell, colIndex) => (
                    <Cell 
                    key={`${rowIndex}-${colIndex}`}
                    size={cellSize}
                    filled={cell === 1}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    />
                ))
            )}
    </div>
        
    );
}

export default Grid;