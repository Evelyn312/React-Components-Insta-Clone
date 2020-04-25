// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const initialState = {username: '', text: ''};
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [comment, setComment] = useState(initialState);

  const onInputChange = (event) => {
    const newCommentObj = {
      username: 'anonymous',
      text: event.target.value
    }
    setComment(newCommentObj);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // stops submit button from reloading page
    setComments(comments => [...comments, comment]);
    setComment(initialState);
  };

  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map((item,i) => {
          return <Comment comment={item} key={i}/>
        })
      }
      <CommentInput comment={comment.text} submitComment={handleSubmit} changeComment={onInputChange}/>
    </div>
  );
};

export default CommentSection;
