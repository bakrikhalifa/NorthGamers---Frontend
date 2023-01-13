import { useState } from "react";
import { patchVotes } from "../utils/API";

const ThumbsReview = ({ setSingleReview, review_id, isThumbsUp }) => {
  const [userVotes, setUserVotes] = useState([]);

  const handleVoting = () => {
    if (userVotes.includes(review_id)) {
      alert("You cannot vote on this review again!");
      return;
    }
    setUserVotes((currVotes) => {
      return [...currVotes, review_id];
    });
    setSingleReview((currReview) => {
      return { ...currReview, votes: currReview.votes + (isThumbsUp ? 1 : -1) };
    });

    patchVotes(review_id, isThumbsUp)
      .then((updatedReview) => {})
      .catch((err) => {
        setSingleReview((currReview) => {
          alert("Request to server failed, try again!");
          return {
            ...currReview,
            votes: currReview.votes - (isThumbsUp ? 1 : -1),
          };
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

export default ThumbsReview;
