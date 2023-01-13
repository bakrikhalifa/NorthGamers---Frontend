import React, { useState } from "react";
import { deleteComment } from "../utils/API";

const DeleteComment = ({ comment_id, comments, setComments }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    setComments((currComments) => {
      return currComments.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
    alert("Comment has been deleted!");
    deleteComment(comment_id).then(() => {});
  };

  return (
    <button onClick={handleClick} disabled={isDeleting} className="deleteButton">
      {isDeleting ? "Deleting..." : "Delete comment"}
    </button>
  );
};

export default DeleteComment;
