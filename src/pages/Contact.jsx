import { useState } from 'react';
import '../styles/contact.css';
import PageContainer from '../components/layout/PageContainer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <div className="contact-page">
        <h1>Contáctenos</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <p>Madariaga 830, Sarandí</p>
            <p>Buenos Aires, CP 1872</p>
            <p>Argentina</p>
            <p>Tel: +54 11 5263 0404</p>
            <p>Email: ventas@jmh.com.ar</p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact; 