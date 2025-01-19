import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoriaProvider } from './context/Categoria';
import { TecnologiaProvider } from './context/Tecnologia';
import { OrganizacaoProvider } from './context/Organizacao';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <CategoriaProvider>
      <TecnologiaProvider>
        <OrganizacaoProvider>
          <App />
        </OrganizacaoProvider>
      </TecnologiaProvider>
    </CategoriaProvider>
  </React.StrictMode>
);
