import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ThumbsUp from "./ThumbsUp";
import ThumbsDown from "./ThumbsDown";

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
    <div>
      <ul>
        <li key={singleReview.review_id} className="reviewCard">
          <img
            src={singleReview.review_img_url}
            className="review_image"
            alt="Avatar"
          ></img>

          <h2>{singleReview.title}</h2>
          <p>Review ID: {singleReview.review_id}</p>
          <p>Category: {singleReview.category}</p>
          <p>Designer: {singleReview.designer}</p>
          <p>Owner: {singleReview.owner}</p>
          <p>Review: {singleReview.review_body}</p>
          <div>
            <ThumbsUp />
            <strong className="votes">Votes: {singleReview.votes}</strong>
            <ThumbsDown />
          </div>
        </li>
      </ul>
    </div>
    
  );
};

export default IndividualReview;
