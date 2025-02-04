import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          INSTRUMENTAL PARA COMPETICION
        </h1>
        <div className="hero-description">
          <p>Control avanzado para motores de alto rendimiento.</p>
          <p>Herramientas diseñadas para mejorar la precisión y maximizar la seguridad en competencias automovilísticas.</p>
        </div>
        <Link to="/productos" className="hero-button">
          VER PRODUCTOS
        </Link>
      </div>
    </section>
  );
};

export default Hero; 