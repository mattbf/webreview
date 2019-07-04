import React from 'react';
import {
  Paper,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    position: 'absolute',
    top: '15px',
    right: '15px',

  },
});

function ContentInfoCard(props){
  const classes = useStyles()
  const info = props.props
  //console.log(props)

  return(
    <div className={classes.card}>
      <Paper style={{padding: "15px",}}>
        <Typography variant="body2">Screen Size: {info.clientWidth} x {info.clientHeight}</Typography>
        <Typography variant="body2">page: {info.url}</Typography>
        <Typography variant="body2">Location: {info.scroll}</Typography>
        <Typography variant="body2">Browser: {info.browser} {info.version}</Typography>
        <Typography variant="body2">OS: {info.os}</Typography>
        <Typography variant="body2">allowable width: {info.allowableWidth}</Typography>
        <Typography variant="body2">allowable height: {info.allowableHeight}</Typography>
      </Paper>
    </div>
  )
}

export default ContentInfoCard
