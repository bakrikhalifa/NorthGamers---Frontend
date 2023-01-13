import { useState } from "react";
import { patchVotes } from "../utils/API";

const ThumbsComment = ({ setComments, review_id, isThumbsUp }) => {
  const [commentVotes, setCommentVotes] = useState([]);

  const handleVoting = () => {
    if (commentVotes.includes(review_id)) {
      alert("You cannot vote on this review again!");
      return;
    }
    setCommentVotes((currVotes) => {
      return [...currVotes, review_id];
    });
    setComments((currReviews) => {
      return currReviews.map((comment) => {
        return { ...comment, votes: comment.votes + (isThumbsUp ? 1 : -1) };
      });
    });

    patchVotes(review_id, isThumbsUp)
      .then((updatedReview) => {})
      .catch((err) => {
        setComments((currComments) => {
          alert("Request to server failed, try again!");
          currComments.map((comment) => {
            return { ...comment, votes: comment.votes - (isThumbsUp ? 1 : -1) };
          });
        });
      });
  };

  return (
    <button
      className={isThumbsUp ? "thumbsUp" : "thumbsDown"}
      onClick={handleVoting}
    >
      {isThumbsUp ? "Thumbs Up" : "Thumbs Down"}
    </button>
  );
};

export default ThumbsComment;
