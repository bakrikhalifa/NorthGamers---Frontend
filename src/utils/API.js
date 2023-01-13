import axios from "axios";

const gamersAPI = axios.create({
  baseURL: "https://bakrisncgames.onrender.com/api",
});

export const getReviews = () => {
  return gamersAPI.get("/reviews").then((res) => {
    return res.data;
  });
};

export const getReviewsById = (review_id) => {
  return gamersAPI.get(`reviews/${review_id}`).then((res) => {
    return res
  })
}

export const patchVotes = (reviewId, increment) => {
  const voteChange = { inc_votes: increment ? 1 : -1 };
  return gamersAPI.patch(`/reviews/${reviewId}`, voteChange);
};

export const getCommentsByID = (reviewId) => {
  return gamersAPI.get(`/reviews/${reviewId}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const postComment = (reviewId, username, newComment) => {
  const postBody = { username: username, body: newComment };

  return gamersAPI
    .post(`/reviews/${reviewId}/comments`, postBody)
    .then(({ data }) => {
      return data;
    });
};

export const getCategories = () => {
  return gamersAPI.get(`/categories`).then(({ data }) => {
    return data;
  });
};

export const getReviewQuery = (sortBy, order) => {
  return gamersAPI.get(`/reviews?sort_by=${sortBy}&order=${order}`).then(({data}) => {
    return data.reviews
  })
}
