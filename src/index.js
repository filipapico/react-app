import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Weather from './Weather';

ReactDOM.render(
  <React.StrictMode>
    <Weather />
    <small>
      <a href="https://github.com/filipapico/react-app">Open-source code</a>
      , by <a href="https://www.linkedin.com/in/filipapico/">Filipa Pico</a>
      </small>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
