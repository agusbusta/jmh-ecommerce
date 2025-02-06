import { useState } from 'react';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import '../components/auth/Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container">
        {isLogin ? (
          <Login 
            onSwitchToRegister={() => setIsLogin(false)}
            onClose={() => window.history.back()}
          />
        ) : (
          <Register 
            onSwitchToLogin={() => setIsLogin(true)}
            onClose={() => window.history.back()}
          />
        )}
      </div>
    </div>
  );
};

export default Auth; 