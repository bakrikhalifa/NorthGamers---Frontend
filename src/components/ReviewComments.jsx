import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import { getCommentsByID } from "../utils/API";
import DeleteComment from "./DeleteComment";
import ThumbsComment from "./ThumbsComment";

const ReviewComments = ({ LoggedInUser: username }) => {
  const { review_id } = useParams();
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsByID(review_id).then((response) => {
      setComments(response);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!comments.length) {
    return (
      <div>
        <AddComment
          username={username}
          setComments={setComments}
          comments={comments}
        />
        <p>No comments available for this review.</p>
      </div>
    );
  }

  return (
    <div>
      <AddComment
        username={username}
        setComments={setComments}
        comments={comments}
      />
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id} className="ReviewComment">
            <h3>{comment.author}</h3>
            <p>Date added: {comment.created_at}</p>
            <p>Comment: {comment.body}</p>
            {username === comment.author && (
              <DeleteComment
                comment_id={comment.comment_id}
                comments={comments}
                setComments={setComments}
              />
            )}
            <div className="reviewVotes-container">
              <ThumbsComment
                setComments={setComments}
                review_id={comment.review_id}
                isThumbsUp={true}
              />
              <strong>Votes: {comment.votes}</strong>
              <ThumbsComment
                setComments={setComments}
                review_id={comment.review_id}
                isThumbsUp={false}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewComments;
