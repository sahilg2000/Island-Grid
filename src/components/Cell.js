import React, { useState } from 'react';

// Receives size from Grid.js
function Cell({ size, filled, onClick  }) {

    return (
        <div
            onClick={onClick}
            style={{
            width:  `${size}px`,
            height: `${size}px`,
            backgroundColor: filled ? 'green' : 'blue',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        }}>
        </div>
    );
}

export default Cell;