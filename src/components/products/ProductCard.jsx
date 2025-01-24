import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <Link to={`/producto/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </Link>
      
      {product.stock > 0 ? (
        <div className="product-actions">
          <button 
            className="add-to-cart"
            onClick={handleAddToCart}
            type="button"
          >
            AÑADIR AL CARRITO
          </button>
          <button className="buy-now" type="button">
            COMPRAR AHORA
          </button>
        </div>
      ) : (
        <span className="out-of-stock">SIN STOCK</span>
      )}
    </div>
  );
};

export default ProductCard; 