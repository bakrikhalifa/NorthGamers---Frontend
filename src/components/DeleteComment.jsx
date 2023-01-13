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
    <div>
      <button onClick={handleClick} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete comment"}
      </button>
    </div>
  );
};

export default DeleteComment;
