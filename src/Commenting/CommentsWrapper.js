import React from 'react';
import Comment from './Comment.js';



function CommentsWrapper() {

  const comments = [
    {
      text: "this is a comment"
    },
    {
      text: "this is another comment"
    },
  ]

  return(
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment}/>
      ))
    }

    </div>
  )
}

export default CommentsWrapper
