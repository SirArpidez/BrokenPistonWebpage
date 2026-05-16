import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            THE BROKEN <span>PISTON</span>
          </div>
          <p>Pasión por las dos ruedas. Servicio especializado, customización y refacciones de alta calidad.</p>
        </div>
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#gallery">Galería</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>📍 Pluton 1743, satelite</p>
          <p>📞 6562056475</p>
          <p>✉️ contacto.brokenpiston@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Broken Piston. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
