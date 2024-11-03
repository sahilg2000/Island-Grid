import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Dimension from './components/Dimension';
import IslandCount from './components/IslandCount';

function App() {
  // Main app
  const [sizeX, setSizeX] = useState(16);
  const [sizeY, setSizeY] = useState(16);
  const [grid, setGrid] = useState([]);           // Grid, with all cells
  
  return (
    <div className="App">
      <h1>Island Visualizer</h1>
      <div className="content-container">
        
        <Grid 
          sizeX={sizeX} 
          sizeY={sizeY}
          grid={grid}
          setGrid={setGrid}
        />
        <Dimension
          sizeX={sizeX} 
          sizeY={sizeY} 
          setSizeX={setSizeX} 
          setSizeY={setSizeY}
        />
        <div>
        <h2>Island Count:</h2>
        <h1><IslandCount grid={grid}/></h1>
        </div> 
      
      </div>
    </div>
  );
}

export default App;
