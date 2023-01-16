import { useState } from "react";
import { patchVotesComment } from "../utils/API";

const ThumbsComment = ({ setComments, commentID, isThumbsUp }) => {
  const [commentVotes, setCommentVotes] = useState([]);

  const handleVoting = () => {
    if (commentVotes.includes(commentID)) {
      alert("You cannot vote on this comment again!");
      return;
    }
    setCommentVotes([...commentVotes, commentID]);
    setComments((currComments) => {
      return currComments.map((comment) => {
        if (comment.comment_id === commentID) {
          return { ...comment, votes: comment.votes + (isThumbsUp ? 1 : -1) };
        }
        return comment;
      });
    });

    patchVotesComment(commentID, isThumbsUp)
      .then((updatedComment) => {})
      .catch((err) => {
        setComments((currComments) => {
          alert("Request to server failed, try again!");
          currComments.map((comment) => {
            if (comment.comment_id === commentID) {
              return {
                ...comment,
                votes: comment.votes - (isThumbsUp ? 1 : -1),
              };
            }
            return comment;
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
