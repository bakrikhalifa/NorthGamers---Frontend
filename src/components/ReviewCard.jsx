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
          <p>Designer: {review.designer}</p>
          <p>Owner: {review.owner}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewCard;
