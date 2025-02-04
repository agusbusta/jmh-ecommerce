import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import termometroImage from '../../assets/images/termometro.jpg';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Termómetro bimetálico",
      price: 27721.00,
      image: termometroImage,
      description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable"
    },
    {
      id: 2,
      name: "Termómetro bimetálico",
      price: 27721.00,
      image: termometroImage,
      description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable"
    },
    {
      id: 3,
      name: "Termómetro bimetálico",
      price: 27721.00,
      image: termometroImage,
      description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable"
    }
  ];

  return (
    <section className="featured-products">
      <div className="featured-header">
        <h2>Productos Destacados</h2>
        <p>Descubre nuestra selección de instrumentos de alta precisión</p>
      </div>
      <div className="featured-products-grid">
        {featuredProducts.map(product => (
          <div key={product.id} className="featured-product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <div className="product-actions">
                <Link to={`/producto/${product.id}`} className="view-details">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts; 