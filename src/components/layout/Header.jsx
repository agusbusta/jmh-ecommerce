import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import Navigation from './Navigation';
import SearchBar from '../common/SearchBar';
import logo from '../../assets/images/logo.jpg';
import '../../styles/header.css';

const Header = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="JMH" />
          </Link>
        </div>
        <div className="header-actions">
          {isAuthenticated ? (
            <div className="auth-links">
              <Link to="/mi-cuenta" className="auth-link">
                <FaUser />
                <span>{user.name}</span>
              </Link>
              <button onClick={handleLogout} className="logout-button">
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link to="/identificarse" className="auth-link">
              <FaUser />
              <span>Identificarse</span>
            </Link>
          )}
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