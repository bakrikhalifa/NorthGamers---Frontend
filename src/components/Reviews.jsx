import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/API";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((response) => {
      setReviews(response.reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ReviewCard reviews={reviews} />;
    </div>
  );
};

export default Reviews;
