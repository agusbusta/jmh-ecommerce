import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Empresa</h3>
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/nuestra-empresa">Nuestra empresa</Link></li>
            <li><Link to="/instalaciones">Instalaciones</Link></li>
            <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Productos</h3>
          <ul>
            <li><Link to="/manometros">Manómetros</Link></li>
            <li><Link to="/transmisores">Transmisores</Link></li>
            <li><Link to="/sellos-separadores">Sellos separadores</Link></li>
            <li><Link to="/valvulas">Válvulas y Manifolds</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://facebook.com/jmh" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/jmh" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/company/jmh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/jmh" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>JMH SRL</h3>
          <p>Madariaga 830, Sarandí</p>
          <p>Buenos Aires, CP 1872</p>
          <p>Argentina</p>
          <p>+54 11 5263 0404</p>
          <p>ventas@jmh.com.ar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 