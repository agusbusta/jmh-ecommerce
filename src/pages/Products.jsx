import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import '../styles/products.css';

const Products = () => {
  const products = useSelector(state => state.products.items);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const filteredProducts = searchTerm
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

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