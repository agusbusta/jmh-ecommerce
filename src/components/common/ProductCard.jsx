import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product.id) {
      console.error('Producto sin ID:', product);
      return;
    }
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="add-to-cart-btn"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard; 