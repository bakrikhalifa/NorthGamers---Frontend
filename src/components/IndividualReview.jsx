import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Thumbs from "./Thumbs";

const IndividualReview = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://bakrisncgames.onrender.com/api/reviews/${review_id}`)
      .then((response) => {
        setSingleReview(response.data);
        setLoading(false);
      });
  }, [review_id]);

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
        <p>Review ID: {singleReview.review_id}</p>
        <p>Category: {singleReview.category}</p>
        <p>Designer: {singleReview.designer}</p>
        <p>Owner: {singleReview.owner}</p>
        <p>Review: {singleReview.review_body}</p>
      </main>
      <footer className="votingSection">
        <Link to={`/reviews/${singleReview.review_id}/comments`}>
          <button className="viewCommentsButton">View All Comments</button>
        </Link>
        <div className="votingSection">
          <Thumbs
            setSingleReview={setSingleReview}
            review_id={review_id}
            isThumbsUp={true}
          />
          <strong className="votes">Votes: {singleReview.votes}</strong>
          <Thumbs
            setSingleReview={setSingleReview}
            review_id={review_id}
            isThumbsUp={false}
          />
        </div>
      </footer>
    </section>
  );
};

export default IndividualReview;
