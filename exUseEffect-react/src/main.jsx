import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação CORRETA
import App from './App';

// Cria a root e renderiza o App
createRoot(document.getElementById('root')).render(
  <App />
);