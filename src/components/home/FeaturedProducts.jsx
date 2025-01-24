import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  // Podemos mostrar solo algunos productos destacados
  const featuredProducts = products.slice(0, 4); // Muestra los primeros 4 productos

  return (
    <div className="featured-products-grid">
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts; 