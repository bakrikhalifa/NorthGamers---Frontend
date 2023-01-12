import { useState, useEffect } from "react";
import { getCategories } from "../utils/API";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <CategoryCard categories={categories} />
    </div>
  );
};

export default Categories;
