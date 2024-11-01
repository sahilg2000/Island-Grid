import React, { useState } from "react";
import '../App.css'

function Dimension({ sizeX, sizeY, setSizeX, setSizeY }) {
    const handleXChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setSizeX(value);
        }
    };

    const handleYChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setSizeY(value);
        }
    };

    return (
    <div className="dimension">
        <input 
            placeholder="X Dimensions"
            value={sizeX}
            onChange={handleXChange}
            type="number"
            min="1"
        />
        
        <div></div>

        <input 
            placeholder="Y Dimensions"
            value={sizeY}
            onChange={handleYChange}
            type="number"
            min="1"
        />
    </div>
    );
}

export default Dimension;