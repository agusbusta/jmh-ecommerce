import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../store/cartSlice';
import { createOrder } from '../store/ordersSlice';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      navigate('/identificarse');
      return;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    const orderData = {
      items: cartItems,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone
      },
      total
    };

    const { success, order, whatsappMessage } = await dispatch(createOrder(orderData));

    if (success) {
      // Redirigir a WhatsApp con el mensaje pre-armado
      const whatsappUrl = `https://wa.me/5491152630404?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      // Redirigir al usuario a la página de confirmación
      navigate('/orden-confirmada', { 
        state: { 
          orderId: order.id,
          total: order.total 
        } 
      });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos" className="continue-shopping">
          Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="price">${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="remove-item"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
        <button 
          className="checkout-button"
          onClick={handleCheckout}
        >
          Proceder al pago
        </button>
        {!isAuthenticated && (
          <p className="login-reminder">
            Debes <Link to="/identificarse">iniciar sesión</Link> para completar la compra
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart; 