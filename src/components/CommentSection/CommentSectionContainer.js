// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);

  const onInputChange = (event) => {
    console.log('event' , event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map((item,i) => {
          return <Comment comment={item} key={i}/>
        })
      }
      <CommentInput comment={props.postId} submitComment={handleSubmit} changeComment={onInputChange}/>
    </div>
  );
};

export default CommentSection;
