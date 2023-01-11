import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/API";

const AddComment = ({ username, comments, setComments }) => {
  const [newComment, setnewComment] = useState("");
  const { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(review_id, username, newComment)
      .then((addedComment) => {
        setComments((currComments) => {
          return [addedComment, ...currComments];
        });
        setnewComment("");
        alert("Comment added succesfully!");
      })
      .catch((err) => {
        alert("Request failed!");
      });
  };

  return (
    <form className="comment" onSubmit={handleSubmit}>
      <label htmlFor="newComment" className="commentLabel">
        Add a comment:{" "}
      </label>
      <textarea
        className="CommentAdder"
        value={newComment}
        onChange={(e) => setnewComment(e.target.value)}
        required
      ></textarea>
      <button className="commentButton">Add</button>
    </form>
  );
};

export default AddComment;
