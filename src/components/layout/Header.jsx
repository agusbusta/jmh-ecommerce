import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import SearchBar from '../common/SearchBar';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpg';
import '../../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

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
            <span className="cart-count">{cartItems.length}</span>
          </Link>
        </div>
      </div>
      
      <div className="nav-container">
        <div className="header-nav">
          <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;