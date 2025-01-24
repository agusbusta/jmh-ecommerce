import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
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
        <button className="checkout-button">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default Cart; 