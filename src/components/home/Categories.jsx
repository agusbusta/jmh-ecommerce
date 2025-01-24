import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Manómetros",
      image: "/manometros.jpg",
      path: "/productos/manometros"
    },
    {
      id: 2,
      name: "Transmisores",
      image: "/transmisores.jpg",
      path: "/productos/transmisores"
    },
    // Más categorías...
  ];

  return (
    <div className="categories-grid">
      {categories.map(category => (
        <Link key={category.id} to={category.path} className="category-card">
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Categories; 