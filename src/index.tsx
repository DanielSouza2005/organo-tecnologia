import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoriaProvider } from './context/Categoria';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <CategoriaProvider>
      <App />
    </CategoriaProvider>
  </React.StrictMode>
);
