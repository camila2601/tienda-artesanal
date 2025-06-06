import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp 
} from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="main-container">
        <div className="footer-content">
          <div>
            <h4>Marketplace Artesanal</h4>
            <p>Conectamos a artesanos con compradores que valoran lo hecho a mano y apoyan el comercio justo.</p>
            <div className="social-icons">
              <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
          <div>
            <h4>Enlaces</h4>
            <p>
              <a href="/">Inicio</a><br />
              <a href="/artesanos">Artesanos</a><br />
              <a href="/sobre-nosotros">Sobre nosotros</a>
            </p>
          </div>
          <div>
            <h4>Ayuda</h4>
            <p>
              <a href="/faq">Preguntas frecuentes</a><br />
              <a href="/envios">Envíos y devoluciones</a><br />
              <a href="/pagos">Métodos de pago</a><br />
              <a href="/contacto">Contacto</a>
            </p>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>
              <FaMapMarkerAlt /> Ciudad, País<br />
              <FaPhone /> +123 456 7890<br />
              <FaEnvelope /> info@marketartesanal.com<br />
              <FaClock /> Lunes a Viernes: 9am - 6pm
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {currentYear} Marketplace Artesanal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;