import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './errorBoundary';
import './index.css';

const main = (

  // O error boudary envolve toda a aplicação para capturar todos os erros que possam aparecer
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(
  main,
  document.getElementById('root')
);


