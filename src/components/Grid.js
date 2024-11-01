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
        gridTemplateColumns: `repeat(${sizeX}, 100px)`,
        gridTemplateRows: `repeat(${sizeY}, 100px)`,
        }}>
            {Array.from({ length: sizeX * sizeY }).map((_, index) => (
            <Cell key={index} />
            ))}
    </div>
        
    );
}

export default Grid;