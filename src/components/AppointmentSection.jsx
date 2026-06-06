import { useState } from 'react';
import './AppointmentSection.css';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    motorcycle: '',
    serviceType: '',
    date: '',
    time: '',
    details: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "526562056475";
    
    const text = `¡Hola Broken Piston! Me gustaría agendar una cita.

*Detalles del Cliente:*
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}

*Detalles de la Motocicleta:*
- Modelo: ${formData.motorcycle}

*Detalles del Servicio:*
- Tipo de Servicio: ${formData.serviceType}
- Fecha Preferida: ${formData.date}
- Hora Preferida: ${formData.time}
- Notas adicionales: ${formData.details ? formData.details : 'Ninguna'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section className="appointment-section" id="citas">
      <div className="container">
        <div className="appointment-container">
          <div className="appointment-header animate-fade-in">
            <h2 className="section-title">Agenda tu <span>Cita</span></h2>
            <p className="appointment-subtitle">
              Déjanos tus datos y nos pondremos en contacto contigo para confirmar tu espacio.
            </p>
          </div>

          <div className="appointment-content">
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Ej. 555-123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="motorcycle">Modelo de Motocicleta [Marca, modelo, año, variante]</label>
                <input
                  type="text"
                  id="motorcycle"
                  name="motorcycle"
                  value={formData.motorcycle}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Harley-Davidson, Sportster, 2021, Iron 883"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">Tipo de Servicio</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecciona un servicio...</option>
                  <option value="mantenimiento">Mantenimiento Preventivo</option>
                  <option value="reparacion">Reparación General</option>
                  <option value="customizacion">Customización</option>
                  <option value="diagnostico">Diagnóstico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="details">Detalles Específicos</label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Ej. Cambio de aceite, revisión de bujías, etc."
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Fecha Preferida</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Hora Preferida</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary appointment-btn"
              >
                Agendar por WhatsApp
              </button>

              {isSuccess && (
                <div className="success-message">
                  ✅ ¡Tu solicitud ha sido enviada! Nos pondremos en contacto pronto para confirmar.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
