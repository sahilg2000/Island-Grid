import React from 'react';

// Receives size from Grid.js
function Cell({ size, filled, onClick  }) {
    const oceanRGB = [87, 148, 255]
    const islandRGB = [0, 140, 50]

    const colorOcean    = 'rgb(' + oceanRGB[0] + ',' + oceanRGB[1] + ',' + oceanRGB[2] + ')'; 
    const colorIsland   = 'rgb(' + islandRGB[0] + ',' + islandRGB[1] + ',' + islandRGB[2] + ')'; 
    
    return (
        <div
            onClick={onClick}
            style={{
            width:  `${size}px`,
            height: `${size}px`,
            backgroundColor: filled ? colorIsland : colorOcean,
            cursor: 'pointer',
            transition: 'background-color 0.22s',
        }}>
        </div>
    );
}

export default Cell;