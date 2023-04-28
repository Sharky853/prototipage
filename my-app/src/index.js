import React from 'react';
import { createRoot } from "react-dom/client";

import './index.css';
import App from './App';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

/*
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

