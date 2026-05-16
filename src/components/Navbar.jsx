import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          THE BROKEN <span>PISTON</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#contact" className="btn-primary nav-btn">Agenda Cita</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
