import React, { useState } from "react";
import '../App.css'

function DimensionBox({ }) {

    return (
    <div className="dimension-box">
        <input placeholder="X Dimensions"/>
        
        <div></div>

        <input placeholder="Y Dimensions"/>
    </div>
    );
}

export default DimensionBox;