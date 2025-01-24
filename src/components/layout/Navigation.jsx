import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navigation = ({ isOpen, setIsOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li className="has-submenu">
          <button 
            className="submenu-trigger"
            onClick={() => handleSubmenuToggle(0)}
          >
            Productos <FaChevronDown className={activeSubmenu === 0 ? 'rotate' : ''} />
          </button>
          <ul className={`submenu ${activeSubmenu === 0 ? 'active' : ''}`}>
            <li><Link to="/productos/manometros">Manómetros</Link></li>
            <li><Link to="/productos/transmisores">Transmisores</Link></li>
            <li><Link to="/productos/sellos-separadores">Sellos Separadores</Link></li>
            <li><Link to="/productos/valvulas">Válvulas y Manifolds</Link></li>
          </ul>
        </li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation; 