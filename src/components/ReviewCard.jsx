import ThumbsDown from "./ThumbsDown";
import ThumbsUp from "./ThumbsUp";
import { Link } from "react-router-dom";

const ReviewCard = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.review_id} className="reviewCard">
          <Link to={`/reviews/${review.review_id}`}>
            <img
              src={review.review_img_url}
              className="review_image"
              alt="Avatar"
            ></img>
          </Link>
          <h2>{review.title}</h2>
          <p>Review ID: {review.review_id}</p>
          <p>Category: {review.category}</p>
          <p>Designer: {review.designer}</p>
          <p>Owner: {review.owner}</p>
          <p>Review: {review.review_body}</p>
          <div>
            <ThumbsUp />
            <strong className="votes">Votes: {review.votes}</strong>
            <ThumbsDown />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewCard;
