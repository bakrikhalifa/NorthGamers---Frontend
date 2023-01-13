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
          <p><strong>Date posted: </strong>{review.created_at}</p>
          <p><strong>Designer: </strong>{review.designer}</p>
          <p><strong>Owner: </strong>{review.owner}</p>
          <p><strong>Comment Count: </strong>{review.comment_count}</p>
          <p><strong>Votes: </strong>{review.votes}</p>
        </li>
      ))}
    </ul>
  )
}

export default ReviewCard;
