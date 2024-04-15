import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { DarkModeProvider } from './js/darkModeContext.js';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap'; // Required for header
import './styles/lightMode.css';
import './styles/darkMode.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);