import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';//Importamos estilos
import App from './App';//Importamos componente

//Con este metodo renderizamos nuestra pagina 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
