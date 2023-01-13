import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getReviewQuery, getReviews } from "../utils/API";

const Order = ({ sortBy, order, setOrder, setReviews }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sortBy === "all") {
      navigate(`/reviews?sort_by=all`);
      getReviews().then((res) => {
        setReviews(res.reviews);
      });
    } else {
      navigate(`/reviews?sort_by=${sortBy}&order=${order}`);
      getReviewQuery(sortBy, order).then((res) => {
        setReviews(res);
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Order:
          <select onChange={handleChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <button type="submit">Sort</button>
        </label>
      </form>
    </div>
  );
};

export default Order;
