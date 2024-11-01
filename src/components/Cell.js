import React, { useState } from 'react';

function Cell({  }) {
    // State variables
    const [color, setColor] = useState('blue');
    const [filled, setFilled] = useState(0);

    /* 
    Cell click handler 
    Filled  -> Empty    -> Filled
    Green   -> Blue     -> Green
    */
    const handleClick = () => {
    if (color === 'blue') {
        setColor('green');
        setFilled(1);
    } else {
        setColor('blue');
        setFilled(0);
        }
    };
    

    return (
        <div
            onClick={handleClick}
            style={{
            width: '100%',
            height: '100%',
            backgroundColor: color,
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        }}>
        </div>
    );
}

export default Cell;