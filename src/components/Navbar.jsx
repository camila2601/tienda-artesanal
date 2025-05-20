import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../App.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="d-flex align-items-center">
        <img
          src="https://previews.123rf.com/images/pepj/pepj1308/pepj130800010/21385679-sello-del-grunge-de-productos-artesanales-en-espa%C3%B1ol.jpg"
          alt="Logo"
          style={{ width: 40, marginRight: 16 }}
        />
        <span style={{ fontWeight: 'bold', fontSize: 22, color: '#232323' }}>
          Tienda Artesanal
        </span>
      </div>
      <div>
        <Link to="/" className="mx-3" style={{ color: '#232323', textDecoration: 'none', fontWeight: 'bold' }}>
          Inicio
        </Link>
        <Link to="/productos" className="mx-3" style={{ color: '#232323', textDecoration: 'none', fontWeight: 'bold' }}>
          Productos
        </Link>
        <Link to="/artesanos" className="mx-3" style={{ color: '#232323', textDecoration: 'none', fontWeight: 'bold' }}>
          Artesanos
        </Link>
        <Link to="/contacto" className="mx-3" style={{ color: '#232323', textDecoration: 'none', fontWeight: 'bold' }}>
          Contacto
        </Link>
        <Link to="/carrito" className="cart-link mx-3" title="Carrito" style={{ color: '#232323', textDecoration: 'none', fontWeight: 'bold' }}>
          <FaShoppingCart className="cart-icon" /> Ver carrito
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;