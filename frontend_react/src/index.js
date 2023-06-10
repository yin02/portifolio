import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';

import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
//   document.getElementById('root'),
);