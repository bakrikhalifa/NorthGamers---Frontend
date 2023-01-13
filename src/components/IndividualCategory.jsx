import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCategories, getReviews } from "../utils/API";
import ThumbsCategory from "./ThumbsCategory";

const IndividualCategory = () => {
  const { slug } = useParams();
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [singleCategory, setSingleCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((response) => {
      const filteredCategory = response.filter(
        (category) => category.slug === slug
      );
      if (filteredCategory.length === 0) {
        setNotFound(true);
      }
      setSingleCategory(filteredCategory[0]);
      setLoading(false);
    });
  }, [slug]);


  useEffect(() => {
    getReviews().then((response) => {
      const filteredReviews = response.reviews.filter(
        (review) => review.category === slug
      );
      setCategoryReviews(filteredReviews);
      setLoading(false);
    });
  }, [slug]);

  if (notFound) {
    return (
      <div>
        <h2>Error 404: Category Not Found</h2>
        <button onClick={() => navigate("/categories")}>
          Go to categories
        </button>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{slug}</h2>
      <ul className="indCategoryComments">
        {categoryReviews.map((review) => {
          return (
            <li key={review.review_id} className="indCategoryComment">
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
              <footer className="votingSection">
                <Link to={`/reviews/${review.review_id}/comments`}>
                  <button className="view-comments-link">
                    View All Comments
                  </button>
                </Link>
                <div className="votingSection">
                  <ThumbsCategory
                    setCategoryReviews={setCategoryReviews}
                    review_id={review.review_id}
                    isThumbsUp={true}
                  />
                  <strong className="votes">Votes: {review.votes}</strong>
                  <ThumbsCategory
                    setCategoryReviews={setCategoryReviews}
                    review_id={review.review_id}
                    isThumbsUp={false}
                  />
                </div>
              </footer>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IndividualCategory;
