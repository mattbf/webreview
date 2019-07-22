import React from 'react';
import Comment from './Comment.js';



function CommentsWrapper() {
  //comments will eventually be passed to CommentWrapper
  const comments = [
    {
      text: "this is a comment",
      user: "Matthew",
    },
    {
      text: "this is another comment",
      user: "Matthew",
    },
    {
      text: "Chris Comment",
      user: "Chris",
    },
  ]

  var filteredComments =  comments.filter(function(comment) {
  	return comment.user == 'Matthew';
  });



  return(
    <div>
      {filteredComments.map((comment, index) => (
        <Comment key={index} comment={comment}/>
      ))
    }

    </div>
  )
}

export default CommentsWrapper
