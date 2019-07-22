import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
  Grow,
  Paper,
  Typography,
} from '@material-ui/core';

import {
  ArrowDropDown,
  Check,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  commentPaper: {
    margin: '10px',
    padding: '10px',
  },
  margin: {
   margin: theme.spacing(1),
  },
  colorCircle: {
    width: '20px',
    height: '20px',
    borderRadius: '100%',
    padding: '3px',
    margin: '3px',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

function Comment(comment) {
  const classes = useStyles()
  console.log(comment)
  return(
    <Paper className={classes.commentPaper} >
      <Typography> {comment.comment.text} </Typography>
      <Typography> By: {comment.comment.user} </Typography>
    </Paper>
  )
}

export default Comment
