import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './CartContext'; // <-- Agrega esto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* <-- Envuelve tu App */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
