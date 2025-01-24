import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <section className="main-categories">
        <h2>Nuestros Productos</h2>
        <Categories />
      </section>
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <FeaturedProducts />
      </section>
      <section className="company-info">
        <h2>Somos una empresa de comprobada experiencia</h2>
        <p>
          En el rubro de la instrumentación, hemos logrado posicionarnos 
          en el mercado como una compañía sólida y confiable, orientada 
          a la necesidad de sus clientes.
        </p>
      </section>
    </div>
  );
};

export default Home; 