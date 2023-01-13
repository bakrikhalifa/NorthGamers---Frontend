import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ThumbsReview from "./ThumbsReview";
import { getReviewsById } from "../utils/API";

const IndividualReview = ({ setCommentCount }) => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviewsById(review_id).then((res) => {
      setSingleReview(res.data);
      setLoading(false);
      setCommentCount(res.data.comment_count);
    });
  }, [review_id, setCommentCount]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
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
        <Link to={`/reviews/${singleReview.review_id}/comments`}>
          <button className="viewCommentsButton">View All Comments</button>
        </Link>
        <div className="votingSection">
          <ThumbsReview
            setSingleReview={setSingleReview}
            review_id={review_id}
            isThumbsUp={true}
            isCategory={false}
          />
          <strong className="votes">Votes: {singleReview.votes}</strong>
          <ThumbsReview
            setSingleReview={setSingleReview}
            review_id={review_id}
            isThumbsUp={false}
            isCategory={false}
          />
        </div>
      </footer>
    </section>
  );
};

export default IndividualReview;
