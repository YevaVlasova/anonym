import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import "./i18n.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='shadowPurpl'></div>
    <BrowserRouter>
      <React.Suspense fallback="loading...">
        <App />
      </React.Suspense>
    </BrowserRouter>
  </>
)