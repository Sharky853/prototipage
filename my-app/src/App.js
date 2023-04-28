

import "./styles.css";
import React from "react";
import { ReactFusionGrid } from "react-fusiongrid";
import FusionGrid from "fusiongrid";
import Grid from "./Grid";
import "fusiongrid/dist/fusiongrid.css";

ReactFusionGrid.fgRoot(FusionGrid);

export default function App() {
  return (
    <div className="App">
      <h1>Fusiongrid</h1>
      <Grid />
    </div>
  );
}






/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
