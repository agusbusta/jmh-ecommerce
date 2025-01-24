import { useState, useEffect } from 'react';
import ProductCard from '../components/products/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { products as allProducts } from '../data/products';

// Función para normalizar texto (eliminar acentos y convertir a minúsculas)
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .replace(/[^a-z0-9\s]/g, ''); // Solo deja letras, números y espacios
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    // Simulamos una carga asíncrona
    const loadProducts = async () => {
      setProducts(allProducts);
      setLoading(false);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const normalizedSearch = normalizeText(searchTerm);
      const filtered = products.filter(product => {
        const normalizedName = normalizeText(product.name);
        const normalizedDescription = product.description ? normalizeText(product.description) : '';
        
        return (
          normalizedName.includes(normalizedSearch) || 
          normalizedDescription.includes(normalizedSearch)
        );
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="products-page">
      {searchTerm && (
        <h2>Resultados para: {searchTerm}</h2>
      )}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No se encontraron productos{searchTerm ? ` para "${searchTerm}"` : ''}</p>
        )}
      </div>
    </div>
  );
};

export default Products; 