import { patchVotesInc } from "../utils/API";

const ThumbsUp = ({setSingleReview, singleReview, review_id}) => {

const thumbsUpHandler = () => {

  setSingleReview(currReview => {
    return {...currReview, votes: currReview.votes + 1 }
  })

  patchVotesInc(review_id).then((updatedReview) => {
  }).catch(err => {
    setSingleReview((currReview) => {
      return {...currReview, votes: currReview.votes - 1}
    }) 
  })
}
  return <button className="thumbsUp" onClick={thumbsUpHandler}>Thumbs Up</button>;
};

export default ThumbsUp;
