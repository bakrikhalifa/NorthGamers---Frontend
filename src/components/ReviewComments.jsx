import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewComments = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://bakrisncgames.onrender.com/api/reviews/${review_id}/comments`
      )
      .then((response) => {
        setComments(response.data.comments);
        setLoading(false);
      });
  }, [review_id]);

  console.log(comments);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!comments.length) {
    return <p>No comments available for this review.</p>;
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.comment_id} className="ReviewComment">
          <h3>{comment.author}</h3>
          <p>Date added: {comment.created_at}</p>
          <p>Comment: {comment.body}</p>
          <div className="reviewVotes-container">
            <button>Thumbs Up</button>
            <strong>Votes: {comment.votes}</strong>
            <button>Thumbs Down</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewComments;
