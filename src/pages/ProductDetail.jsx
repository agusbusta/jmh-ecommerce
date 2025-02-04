import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import termometroImage from '../assets/images/termometro.jpg';
import '../styles/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setProduct({
          id: parseInt(id),
          name: "Termómetro bimetálico",
          price: 27721.00,
          image: termometroImage,
          stock: 25,
          description: "Termómetro bimetálico marca CENI - Construido totalmente en acero inoxidable",
          specifications: [
            "Caja: Ø63 mm",
            "Salida Posterior",
            "Rosca: 1/4'NPT",
            "Largo vaina: 85 mm UTIL",
            "Rango: 0-100°C"
          ],
          technicalDescription: {
            title: "Descripción Técnica",
            content: `Los termómetros bimetálicos CENI están diseñados para ofrecer mediciones precisas y confiables de temperatura en diversas aplicaciones industriales. 

            Características principales:
            - Sistema de medición bimetálico de respuesta rápida
            - Construcción robusta en acero inoxidable AISI 304
            - Precisión según DIN EN 13190 clase 1
            - Protección IP65 contra polvo y agua
            - Ajuste del cero externo
            
            Aplicaciones recomendadas:
            - Industria química y petroquímica
            - Procesos industriales
            - Sistemas de calefacción
            - Industria alimenticia
            - Aplicaciones marinas
            
            El diseño robusto y la construcción en acero inoxidable garantizan una larga vida útil incluso en condiciones adversas. La conexión posterior permite una instalación versátil en diferentes configuraciones.`
          }
        });
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <div className="loading">Cargando...</div>;
  if (!product) return <div className="error">Producto no encontrado</div>;

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
      <div className="technical-description">
        <h2>{product.technicalDescription.title}</h2>
        <div className="technical-content">
          {product.technicalDescription.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 