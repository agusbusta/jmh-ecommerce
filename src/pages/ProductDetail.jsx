import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Aquí iría la llamada a la API para obtener el detalle del producto
    setProduct({
      id: 1,
      name: "Termómetro bimetálico",
      price: 27721.00,
      image: "/product1.jpg",
      stock: 25,
      description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable",
      specifications: [
        "Caja: Ø63 mm",
        "Salida Posterior",
        "Rosca: 1/4'NPT",
        "Largo vaina: 85 mm UTIL",
        "Rango: 0-100°C"
      ]
    });
    setLoading(false);
  }, [id]);

  const handleAddToCart = () => {
    console.log('Agregando desde detalle:', product);
    addToCart(product);
  };

  if (loading) return <div>Cargando...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <div className="specifications">
          <h2>Especificaciones</h2>
          <ul>
            {product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <button 
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail; 