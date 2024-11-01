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
        <div className="input-group">
            <label htmlFor="columns">Columns</label>
            <input 
                name="columns"
                placeholder="16"
                value={sizeX}
                onChange={handleXChange}
                type="number"
                min="1"
            />
        </div>
        
        <div className="input-group">
            <label htmlFor="rows">Rows</label> 
            <input 
                name="rows"
                placeholder="16"
                value={sizeY}
                onChange={handleYChange}
                type="number"
                min="1"
            />
        </div>
    </div>
    );
}

export default Dimension;