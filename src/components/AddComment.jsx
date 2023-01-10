import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/API";

const AddComment = ({ username, comments, setComments }) => {
  const [newComment, setnewComment] = useState("");
  const { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(review_id, "weegembump", newComment)
      .then((addedComment) => {
        setComments((currComments) => {
          return [addedComment, ...currComments];
        });
        setnewComment("");
        alert("comment added succesfully!");
      })
      .catch((err) => {
        alert("You must sign in to comment!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a comment: </label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={(e) => setnewComment(e.target.value)}
      ></textarea>
      <button>Add</button>
    </form>
  );
};

export default AddComment;
