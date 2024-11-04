import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from './components/Grid';
import Dimension from './components/Dimension';
import IslandCount from './components/IslandCount';
import useTutorial from './hooks/useTutorial';
import { TbRestore } from "react-icons/tb";

function App() {
  const initialSizeX = 16;
  const initialSizeY = 16;

  const [sizeX, setSizeX] = useState(initialSizeX);
  const [sizeY, setSizeY] = useState(initialSizeY);
  
  const [grid, setGrid] = useState([]);             // Grid, with all cells

  useEffect(() => {
    resetGrid();
  }, []);

  // Tutorial steps
  const tutorialSteps = [
    { element: '.grid', text: 'This is the grid where you can create islands. ' + 
      'Clicking on this section creates landmasses in this ocean. \n' 
      + 'Landmasses that are connected vertically or horizontally are considered as one island.' },

    { element: '.dimension', text: 'Adjust the grid dimensions here. \n' + 
      'Use the "+" (plus) and "-" (minus) buttons to increment or decrement the grid\'s rows and columns. \n\n' + 
      'DELETING A ROW OR COLUMN ERASES ALL ISLANDS! \n' },

    { element: '.island-count', text: 'The number of islands is displayed here. \n' + 
      'This updates in real time. ' },

    { element: '.reset-button', text: 'Click here to erase all islands. Does not affect dimensions. \n' + 
      'THIS ACTION IS PERMANENT AND CANNOT BE UNDONE. ' }
  ];

  const { tutorialStep, nextTutorialStep } = useTutorial(tutorialSteps);

  const resetGrid = () => {
    const blankGrid = Array(sizeY).fill().map(() => Array(sizeX).fill(0));
    setGrid(blankGrid);
  };

  return (
    <div className="App" onClick={tutorialStep > 0 ? nextTutorialStep : undefined}>
      <h1 className='header'>Island Visualizer</h1>
      <div className="content-container">
        <div className='grid-container'>
          <Grid 
            sizeX={sizeX} 
            sizeY={sizeY}
            grid={grid}
            setGrid={setGrid}
          />
        </div>
        
        <Dimension
          sizeX={sizeX} 
          sizeY={sizeY} 
          setSizeX={setSizeX} 
          setSizeY={setSizeY}
        />
        
        <div className='info'>
          <div className='island-count'>
            <h2>Island Count:</h2>
            <h1><IslandCount grid={grid}/></h1>
            <TbRestore className='reset-button' onClick={resetGrid}/>
          </div>
          <button className='tutorial-button' onClick={nextTutorialStep}>
            <h2>Tutorial</h2>
          </button>
        </div>
        
        {tutorialStep > 0 && (
          <div className="tutorial-overlay">
            <p>{tutorialSteps[tutorialStep - 1].text}</p>
            <br/>
            <p> Click anywhere to continue </p>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
