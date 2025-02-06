import { useLocation, Link, Navigate } from 'react-router-dom';
import '../styles/orderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId, total } = location.state || {};

  if (!orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="order-confirmation">
      <div className="confirmation-content">
        <h1>¡Gracias por tu compra!</h1>
        <div className="order-details">
          <p>Número de orden: #{orderId}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
        <div className="next-steps">
          <p>Te hemos enviado un email con los detalles de tu compra.</p>
          <p>Un asesor se pondrá en contacto contigo a través de WhatsApp para coordinar el pago y la entrega.</p>
        </div>
        <div className="actions">
          <Link to="/productos" className="continue-shopping">
            Seguir comprando
          </Link>
          <Link to="/mi-cuenta" className="view-order">
            Ver mis pedidos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 