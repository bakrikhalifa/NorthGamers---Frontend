import { patchVotesDec } from "../utils/API";

const ThumbsDown = ({ setSingleReview, singleReview, review_id }) => {
  const thumbsDownHandler = () => {
    setSingleReview((currReview) => {
      return { ...currReview, votes: currReview.votes - 1 };
    });

    patchVotesDec(review_id)
      .then(() => {})
      .catch((err) => {
        setSingleReview((currReview) => {
          return { ...currReview, votes: currReview.votes + 1 };
        });
      });
  };
  return (
    <button className="thumbsDown" onClick={thumbsDownHandler}>
      Thumbs Down
    </button>
  );
};

export default ThumbsDown;
