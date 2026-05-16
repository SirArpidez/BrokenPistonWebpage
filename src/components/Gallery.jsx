import React from 'react';
import './Gallery.css';
import img1 from '../assets/images/IMG_1596.JPG';
import img2 from '../assets/images/IMG_1632.PNG';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Nuestros <span>Trabajos</span></h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={img1} alt="Trabajo en moto 1" />
            <div className="gallery-overlay">
              <span>Restauración</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src={img2} alt="Trabajo en moto 2" />
            <div className="gallery-overlay">
              <span>Mantenimiento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
