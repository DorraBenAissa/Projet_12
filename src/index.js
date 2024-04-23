import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
import App from './App';

//import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
