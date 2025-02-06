import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import OrdersPanel from '../../components/dashboard/OrdersPanel';
import ProfilePanel from '../../components/dashboard/ProfilePanel';
import AddressesPanel from '../../components/dashboard/AddressesPanel';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('pedidos');
  const { user, isAuthenticated } = useSelector(state => state.auth);

  // Protección de ruta - si no está autenticado, redirige
  if (!isAuthenticated) {
    return <Navigate to="/identificarse" replace />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'pedidos':
        return <OrdersPanel />;
      case 'perfil':
        return <ProfilePanel />;
      case 'direcciones':
        return <AddressesPanel />;
      default:
        return <OrdersPanel />;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
        <nav className="dashboard-nav">
          <button
            className={`nav-item ${activeTab === 'pedidos' ? 'active' : ''}`}
            onClick={() => setActiveTab('pedidos')}
          >
            Mis Pedidos
          </button>
          <button
            className={`nav-item ${activeTab === 'perfil' ? 'active' : ''}`}
            onClick={() => setActiveTab('perfil')}
          >
            Mi Perfil
          </button>
          <button
            className={`nav-item ${activeTab === 'direcciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('direcciones')}
          >
            Mis Direcciones
          </button>
        </nav>
      </div>
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard; 