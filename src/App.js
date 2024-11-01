import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Dimension from './components/Dimension';

function App() {
  const [sizeX, setSizeX] = useState(16);
  const [sizeY, setSizeY] = useState(16);
  
  return (
    <div className="App">
      <Grid sizeX={sizeX} sizeY={sizeY}/>
      <Dimension
        sizeX={sizeX} 
        sizeY={sizeY} 
        setSizeX={setSizeX} 
        setSizeY={setSizeY}
      />
    </div>
  );
}

export default App;
