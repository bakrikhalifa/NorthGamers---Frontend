import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/API";
import SortBy from "./SortBy";
import Order from "./Order";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("all");
  const [order, setOrder] = useState("desc");

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
      <SortBy
        setReviews={setReviews}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
      />
      {sortBy !== "all" && (
        <Order
          sortBy={sortBy}
          order={order}
          setOrder={setOrder}
          setReviews={setReviews}
        />
      )}
      <ReviewCard reviews={reviews} />
    </div>
  );
};

export default Reviews;
