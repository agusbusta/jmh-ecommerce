import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import '../../styles/navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const productCategories = [
    { name: 'Manómetros', path: '/productos/manometros' },
    { name: 'Transmisores', path: '/productos/transmisores' },
    { name: 'Sellos separadores', path: '/productos/sellos-separadores' },
    { name: 'Válvulas y Manifolds', path: '/productos/valvulas-y-manifolds' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <nav className="navigation">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          </li>
          <li className="has-submenu">
            <a href="#" onClick={toggleSubmenu} className="submenu-trigger">
              Productos <FaChevronDown className={isSubmenuOpen ? 'rotate' : ''} />
            </a>
            <ul className={`submenu ${isSubmenuOpen ? 'active' : ''}`}>
              {productCategories.map((category) => (
                <li key={category.path}>
                  <Link 
                    to={category.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsSubmenuOpen(false);
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 