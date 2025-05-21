import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      {/* Logo */}
      <div className="logo-container">
        <img 
          src="https://previews.123rf.com/images/pepj/pepj1308/pepj130800010/21385679-sello-del-grunge-de-productos-artesanales-en-espa%C3%B1ol.jpg" 
          alt="Logo Tienda Artesanal" 
          className="logo"
        />
      </div>

      {/* Message */}
      <h1 className="title">Cada pieza cuenta una historia</h1>
      <p className="subtitle">
        En <span className="highlight">Marketplace Artesanal</span>, celebramos la belleza de lo hecho a mano. 
        Conectamos a artesanos talentosos con personas que valoran la autenticidad y el comercio justo.
      </p>

      {/* Button */}
      <Link 
        to="/productos" 
        className="cta-button"
      >
        Descubre Artesanías
      </Link>

      {/* Footer */}
      <p className="footer-text">
        Hecho con ❤️ por artesanos de todo el mundo.
      </p>
    </div>
  );
};

export default Home;