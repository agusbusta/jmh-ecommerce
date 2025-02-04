import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Navigation from './Navigation';
import SearchBar from '../common/SearchBar';
import logo from '../../assets/images/logo.jpg';
import '../../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="JMH" />
          </Link>
        </div>
        <div className="header-actions">
          <Link to="/identificarse" className="auth-link">
            <FaUser />
            <span>Identificarse</span>
          </Link>
          <Link to="/contacto" className="contact-link">
            Contáctenos
          </Link>
          <Link to="/carrito" className="cart-widget">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <Navigation />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;