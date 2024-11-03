import React from "react";
import '../App.css'

function Dimension({ sizeX, sizeY, setSizeX, setSizeY }) {
    const handleDimensionChange = (setter, value) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue) && newValue > 0) {
            setter(newValue);
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
                onChange={(e) => handleDimensionChange(setSizeX, e.target.value)}
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
                onChange={(e) => handleDimensionChange(setSizeY, e.target.value)}
                type="number"
                min="1"
            />
        </div>
    </div>
    );
}

export default Dimension;