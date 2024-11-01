import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Dimension from './components/Dimension';
import IslandCount from './components/IslandCount';

function App() {
  // Main app
  const [sizeX, setSizeX] = useState(16);
  const [sizeY, setSizeY] = useState(16);
  
  return (
    <div className="App">
      <div className="content-container">
        
        <Grid sizeX={sizeX} sizeY={sizeY}/>
        <Dimension
          sizeX={sizeX} 
          sizeY={sizeY} 
          setSizeX={setSizeX} 
          setSizeY={setSizeY}
        />
        <IslandCount/>
      
      </div>
    </div>
  );
}

export default App;
