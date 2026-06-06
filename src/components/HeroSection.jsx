import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/IMG_1632.PNG';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="container hero-content animate-fade-in">
        <h1>Revive el <span>Alma</span> de tu Máquina</h1>
        <p>Especialistas en reparación, customización y mantenimiento de motocicletas de todas las cilindradas y estilos. Tu moto en las mejores manos.</p>
        <div className="hero-buttons">
          <a href="#services" className="btn-primary">Nuestros Servicios</a>
          <a href="#gallery" className="btn-secondary">Ver Trabajos</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
