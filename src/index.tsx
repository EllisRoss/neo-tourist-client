import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {NeoTouristApp} from "./App";

ReactDOM.render(
  <React.StrictMode>
    <NeoTouristApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
