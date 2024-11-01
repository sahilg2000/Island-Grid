import React, { useEffect, useState } from 'react';
import '../App.css'; 
import Cell from './Cell';

function Grid({ sizeX, sizeY }) {
    const [cellSize, setCellSize] = useState(100); // Initial cell size in pixels
    const maxGridSize = 500;    // Max grid size in pixels
    const maxCellSize = 100;    // Max cell size in pixels

    useEffect(() => {
        // Cell size calculator
        const calculatedCellSize = Math.min(
            maxGridSize / sizeX,
            maxGridSize / sizeY,
            maxCellSize
        );
        setCellSize(calculatedCellSize);
    }, [sizeX, sizeY]);

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
            {Array.from({ length: sizeX * sizeY }).map((_, index) => (
            <Cell key={index} size={cellSize} />
            ))}
    </div>
        
    );
}

export default Grid;