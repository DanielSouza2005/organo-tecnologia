import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoriaProvider } from './context/Categoria';
import { TecnologiaProvider } from './context/Tecnologia';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <CategoriaProvider>
      <TecnologiaProvider>
        <App />
      </TecnologiaProvider> 
    </CategoriaProvider>
  </React.StrictMode>
);
