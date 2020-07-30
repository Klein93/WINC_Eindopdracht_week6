import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode className="container">
    <App className="container" />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
