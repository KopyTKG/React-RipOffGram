import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import "./style/main.min.css";

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
