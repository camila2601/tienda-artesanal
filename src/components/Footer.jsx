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
      <div className="footer-content">
        <div className="footer-column">
          <h3>Marketplace Artesanal</h3>
          <p>Conectamos a artesanos con compradores que valoran lo hecho a mano y apoyan el comercio justo.</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/artesanos">Artesanos</a></li>
            <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Ayuda</h3>
          <ul>
            <li><a href="/faq">Preguntas frecuentes</a></li>
            <li><a href="/envios">Envíos y devoluciones</a></li>
            <li><a href="/pagos">Métodos de pago</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contacto</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> Ciudad, País</li>
            <li><FaPhone /> +123 456 7890</li>
            <li><FaEnvelope /> info@marketartesanal.com</li>
            <li><FaClock /> Lunes a Viernes: 9am - 6pm</li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {currentYear} Marketplace Artesanal. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;