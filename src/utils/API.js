import axios from "axios";

const gamersAPI = axios.create({
  baseURL: "https://bakrisncgames.onrender.com/api",
});

export const getReviews = () => {
  return gamersAPI.get("/reviews").then((res) => {
    return res.data;
  });
};

export const patchVotesInc = (reviewId) => {
  const incrementVote = { inc_votes: 1 };
  return gamersAPI
    .patch(`/reviews/${reviewId}`, incrementVote)
    .then(({ data }) => {});
};

export const patchVotesDec = (reviewId) => {
  const decrementVote = { inc_votes: -1 };
  return gamersAPI
    .patch(`/reviews/${reviewId}`, decrementVote)
    .then(({ data }) => {});
};
