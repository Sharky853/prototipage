import React from 'react';
import  ReactFusionGrid  from "ReactFusionGrid";

import FusionGrid from 'fusiongrid';
import Grid from "./Grid"
import './App.css';




 
ReactFusionGrid.fgRoot(FusionGrid);
function App() {
 

  return (
    
    <div className="App">
      <body>
      <h1> FusionGrid</h1>
      <Grid />
      </body>
    </div>

    
  );
}


export default App();
