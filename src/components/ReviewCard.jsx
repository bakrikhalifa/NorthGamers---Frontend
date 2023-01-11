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
          <h3>{review.title}</h3>
          <p>
            <strong>Designer: </strong>
            {review.designer}
          </p>
          <p>
            <strong>Owner: </strong> {review.owner}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewCard;
