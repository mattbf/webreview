import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WebContainer from './WebContainer.js';


import {
  Button,
  Input,
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
  },
}));


function ModeWrapper() {
  const classes = useStyles()
  // have view, markup, and comment mode
  const [mode, setMode] = useState('markup')

  function selectMode(view) {
    setMode(view)
    console.log(view)
  }

  return (
    <div>
      <Button onClick={() => selectMode('view')}> View Mode </Button>
      <Button onClick={() => selectMode('markup')}> Markup Mode </Button>
      <Button onClick={() => selectMode('comment')}> Comment Mode </Button>
      <div
        style={{border: 'solid', borderColor: mode == 'view' ? '#000' : mode == 'markup' ? '#00c676' : '#ff8900'}}
      > </div>
      <WebContainer mode={mode}/>
    </div>
  );
}

export default ModeWrapper;
