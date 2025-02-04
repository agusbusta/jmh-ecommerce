import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="main-content">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home; 