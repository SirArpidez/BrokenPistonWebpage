import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: "Mantenimiento General",
    desc: "Cambio de aceite, filtros, bujías y revisión de puntos de seguridad. Todo para que tu moto ruede como nueva.",
    icon: "🔧"
  },
  {
    title: "Reparación de Motor",
    desc: "Diagnóstico profundo, ajuste de válvulas, reparación de transmisión y reconstrucción completa del motor.",
    icon: "⚙️"
  },
  {
    title: "Customización",
    desc: "Transformamos tu moto. Estilo Cafe Racer, Bobber, Scrambler. Pintura personalizada y accesorios a medida.",
    icon: "🎨"
  },
  {
    title: "Sistema Eléctrico",
    desc: "Diagnóstico por escáner, reparación de cableado, instalación de luces LED e inyección electrónica.",
    icon: "⚡"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros <span>Servicios</span></h2>
        <div className="services-grid">
          {services.map((srv, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
