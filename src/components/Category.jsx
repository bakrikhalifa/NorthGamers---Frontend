import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div>
      <ul className="category">
        {categories.map((category) => (
          <li key={category.slug} className="individualCategory">
            <h3>{category.slug}</h3>

            <p>
              <strong>Description:</strong> {category.description}
            </p>
            <Link to={`/categories/${category.slug}`} className="view-games-link">
              View Games
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
