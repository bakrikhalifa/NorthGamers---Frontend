import { Link } from "react-router-dom";

const CategoryCard = ({ categories }) => {
  return (
    <div>
      <ul className="category">
        {categories.map((category) => (
          <li key={category.slug} className="individualCategory">
            <h3>{category.slug}</h3>

            <p>
              <strong>Description:</strong> {category.description}
            </p>
            <Link to={`/categories/${category.slug}`}>
              <button>View Games</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
