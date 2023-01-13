import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewQuery, getReviews } from "../utils/API";

const SortBy = ({ setReviews, sortBy, setSortBy, order }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/reviews?sort_by=${sortBy}&order=${order}`);
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
          Sort by:
          <select onChange={handleChange}>
            <option value="all">All</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
          <button type="submit">Sort</button>
        </label>
      </form>
    </div>
  );
};

export default SortBy;