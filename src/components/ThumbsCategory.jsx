import { useState } from "react";
import { patchVotes } from "../utils/API";

const ThumbsCategory = ({ SetCategoryReviews, review_id, isThumbsUp }) => {
  const [userVotes, setUserVotes] = useState([]);

  const handleVoting = () => {
    if (userVotes.includes(review_id)) {
      alert("You cannot vote on this review again!");
      return;
    }
    setUserVotes((currVotes) => {
      return [...currVotes, review_id];
    });
    SetCategoryReviews((currReviews) => {
        console.log(currReviews);
       return currReviews.map(review => {
            return { ...review, votes: review.votes + (isThumbsUp ? 1 : -1) };
        })
     
    });

    patchVotes(review_id, isThumbsUp)
      .then((updatedReview) => {})
      .catch((err) => {
        SetCategoryReviews((currReviews) => {
          alert("Request to server failed, try again!");
          currReviews.map(review => {
            return { ...review, votes: review.votes - (isThumbsUp ? 1 : -1) };
        })
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

export default ThumbsCategory;
