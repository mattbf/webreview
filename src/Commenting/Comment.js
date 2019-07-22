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
  colorSelectDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    <Paper>
      <Typography> {comment.comment.text} </Typography>
    </Paper>
  )
}

export default Comment
