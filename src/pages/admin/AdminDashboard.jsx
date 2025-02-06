import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import OrdersManagement from './OrdersManagement';
import ProductsManagement from './ProductsManagement';
import CustomersManagement from './CustomersManagement';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const { user, isAuthenticated } = useSelector(state => state.auth);

  // Protección de ruta - si no está autenticado o no es admin, redirige
  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/identificarse" replace />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrdersManagement />;
      case 'products':
        return <ProductsManagement />;
      case 'customers':
        return <CustomersManagement />;
      default:
        return <OrdersManagement />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-user-info">
          <h2>Panel de Administración</h2>
          <p>{user.name}</p>
        </div>
        <nav className="admin-nav">
          <button
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Gestión de Pedidos
          </button>
          <button
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Gestión de Productos
          </button>
          <button
            className={`nav-item ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            Gestión de Clientes
          </button>
        </nav>
      </div>
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard; 