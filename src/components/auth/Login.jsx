import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { attemptLogin } from '../../store/authSlice';
import './Auth.css';

const Login = ({ onSwitchToRegister, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const loading = auth?.loading || false;
  const error = auth?.error || null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await dispatch(attemptLogin(formData));
    
    // Solo navegamos si el login fue exitoso
    if (success && auth.user) {
      // Redirigimos basándonos en el rol del usuario
      navigate(auth.user.role === 'admin' ? '/admin' : '/mi-cuenta');
    }
  };

  return (
    <div className="auth-form">
      <h2>Iniciar Sesión</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
      <p className="switch-form">
        ¿No tienes cuenta?{' '}
        <button onClick={onSwitchToRegister}>Regístrate aquí</button>
      </p>
    </div>
  );
};

export default Login; 