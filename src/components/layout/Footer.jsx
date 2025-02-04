import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/images/facebook.png';
import instaIcon from '../../assets/images/insta.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Empresa</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nuestra empresa</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Productos</h3>
          <ul>
            <li><Link to="/productos/manometros">Manómetros</Link></li>
            <li><Link to="/productos/transmisores">Transmisores</Link></li>
            <li><Link to="/productos/sellos-separadores">Sellos separadores</Link></li>
            <li><Link to="/productos/valvulas-y-manifolds">Válvulas y Manifolds</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className="social-icon" />
            </a>
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