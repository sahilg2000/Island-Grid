import React, { useState } from 'react';
import '../App.css'; 
import Cell from './Cell';

function Grid({  }) {
    // Size State variable
    const [size, setSize] = useState(4);

    /* 
    Size Handler 
    */

    return (
    <div className="grid">
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
    </div>
        
    );
}

export default Grid;