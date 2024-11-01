import React, { useState } from 'react';
import '../App.css'; 
import Cell from './Cell';

function Grid({  }) {
    // Size State variable
    const [sizeX, setSizeX] = useState(4);
    const [sizeY, setSizeY] = useState(4);

    return (
    <div 
    className="grid"
    style={{
        gridTemplateColumns: `repeat(${sizeX}, 1fr)`,
        gridTemplateRows: `repeat(${sizeY}, 1fr)`,
        width: '70vh',
        height: '70vh',
        }}>
            {Array.from({ length: sizeX * sizeY }).map((_, index) => (
            <Cell key={index} />
            ))}
    </div>
        
    );
}

export default Grid;