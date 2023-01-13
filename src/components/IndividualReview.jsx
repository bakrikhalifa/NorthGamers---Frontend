import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ThumbsReview from "./ThumbsReview";
import { getReviewsById } from "../utils/API";

const IndividualReview = ({ setCommentCount }) => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getReviewsById(review_id)
      .then((res) => {
        setSingleReview(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [review_id]);

  if (notFound) {
    return (
      <div>
        <h2>Error 404: Review Not Found</h2>
        <button onClick={() => navigate("/reviews")}>Go to reviews</button>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="reviewIDCard">
      <figure>
        <img
          src={singleReview.review_img_url}
          alt={singleReview.title}
          className="review_image"
        />
      </figure>
      <header>
        <h2>{singleReview.title}</h2>
      </header>
      <main>
        <p>
          <strong>Review ID: </strong>
          {singleReview.review_id}
        </p>
        <p>
          <strong>Category: </strong>
          {singleReview.category}
        </p>
        <p>
          <strong>Designer: </strong>
          {singleReview.designer}
        </p>
        <p>
          <strong>Owner: </strong>
          {singleReview.owner}
        </p>
        <p>
          <strong>Review: </strong>
          {singleReview.review_body}
        </p>
        <p>
          <strong>Comments Count: </strong>
          {singleReview.comment_count}
        </p>
      </main>
      <footer className="votingSection">
        <Link to={`/reviews/${singleReview.review_id}/comments`} className="view-comments-link">
          View All Comments
        </Link>
        <div className="votingSection">
          <ThumbsReview
            setSingleReview={setSingleReview}
            review_id={review_id}
            isThumbsUp={true}
            isCategory={false}
            className="thumbsUp"
          />
          <strong className="votes">Votes: {singleReview.votes}</strong>
          <ThumbsReview
            setSingleReview={setSingleReview}
            review_id={review_id}
            isThumbsUp={false}
            isCategory={false}
            className="thumbsDown"
          />
        </div>
      </footer>
    </section>
  );
};

export default IndividualReview;
