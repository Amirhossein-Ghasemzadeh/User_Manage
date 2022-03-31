import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CandidatesProvider } from './context/CandidatesState';
ReactDOM.render(
  <Router>
    <CandidatesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CandidatesProvider>
  </Router>,
  document.getElementById('root')
);
