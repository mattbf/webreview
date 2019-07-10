import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DrawArea from './DrawArea.js';
import MyColorPicker from './ColourPicker.js';
import ColorSelect from './ColorSelect.js';


import {
  Button,
  Input,
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    width: '500px',
    height: '500px',
    display: 'flex',
    padding: '25px',
  },
}));


function ModeWrapper() {
  const classes = useStyles()
  // have view, markup, and comment mode
  const [mode, setMode] = useState('markup')

  return (
    <div className={classes.root}>
      <DrawArea mode={mode}/>
      <div>
        <MyColorPicker/>
        <ColorSelect/>
      </div>
    </div>
  );
}

export default ModeWrapper;
