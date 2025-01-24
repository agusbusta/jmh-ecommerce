import { Link } from 'react-router-dom';
import homeImage from '../../assets/images/home.jpg';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '70vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '1400px'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    padding: '40px',
    maxWidth: '1000px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    letterSpacing: '2px'
  };

  const paragraphStyle = {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
    fontWeight: '500'
  };

  const buttonStyle = {
    backgroundColor: '#ff4400',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '2rem',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    ':hover': {
      backgroundColor: '#ff5500'
    }
  };

  return (
    <div className="hero" style={heroStyle}>
      <div style={overlayStyle}></div>
      <div className="hero-content" style={contentStyle}>
        <h1 style={titleStyle}>Instrumental para competicion</h1>
        <p style={paragraphStyle}>Control avanzado para motores de alto rendimiento.</p>
        <p style={paragraphStyle}>Herramientas diseñadas para mejorar la precisión y maximizar la seguridad en competencias automovilísticas.</p>
        <Link to="/productos" style={buttonStyle}>
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default Hero; 