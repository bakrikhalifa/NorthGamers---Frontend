import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategories, getReviews } from "../utils/API";

const IndividualCategory = () => {
  const { slug } = useParams();
  const [singleCategory, setSingleCategory] = useState({});
  const [categoryReviews, SetCategoryReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCategories().then((response) => {
      const filteredCategory = response.filter(
        (category) => category.slug === slug
      );
      setSingleCategory(filteredCategory[0]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getReviews().then((response) => {
      const filteredReview = response.reviews.filter(
        (review) => review.category === slug
      );
      SetCategoryReviews(filteredReview);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(categoryReviews);

  return (
    <div>
      <h2>{singleCategory.slug}</h2>
      <ul>
        {categoryReviews.map((review) => {
          return (
            <li key={review.review_id} className="reviewCard">
              <img
                src={review.review_img_url}
                alt={review.title}
                className="review_image"
              />
              <h3>{review.title}</h3>
              <p>
                <strong>Review ID: </strong>
                {review.review_id}
              </p>
              <p>
                <strong>Category: </strong>
                {review.category}
              </p>
              <p>
                <strong>Designer: </strong>
                {review.designer}
              </p>
              <p>
                <strong>Owner: </strong>
                {review.owner}
              </p>
              <p>
                <strong>Review: </strong>
                {review.review_body}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IndividualCategory;
