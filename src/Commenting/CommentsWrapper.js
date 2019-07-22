import React, {useState, useEffect} from 'react';
import Comment from './Comment.js';

import {
  Button,
} from '@material-ui/core';

function CommentsWrapper() {
  //comments will eventually be passed to CommentWrapper
  const [filter, setFilter] = useState(null)

  const comments = [
    {
      text: "this is a comment",
      user: "Matthew",
      time: new Date(), //when was it added
      ref: {
        isMarkup: true, //is it a markup or a pinpoint
        index: 0, //which markup or pinpoint does it refer to
      },
      info: {
        // the browser, screen, etc. info
      },
      
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
  	return comment
    // comment //for all comments
    //ex comment.user == 'Matthew';
  });


  return(
    <div>
      {filteredComments.map((comment, index) => (
        <Comment key={index} comment={comment}/>
      ))
    }
    <Button onClick={() => setFilter(".user == 'Matthew'")}> Matthew's Comments </Button>
    </div>
  )
}

export default CommentsWrapper
