import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import ApiContextProvider from './context/ApiContext';

ReactDOM.render(
  <React.StrictMode>
    <ApiContextProvider>
    <App />
    </ApiContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
