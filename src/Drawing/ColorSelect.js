import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  IconButton,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList
} from '@material-ui/core';

import {
  ArrowDropDown,
  Check,
} from '@material-ui/icons';

const colors = ['#000', '#00c676', '#2979ff', '#ff9800', '#673ab7'];

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

//Custom CSS button
const ColorButton = withStyles(theme => ({
  root: {
    color: '#000', //theme.palette.getContrastText(purple[500]),
    backgroundColor: '#FFF',
    '&:hover': {
      backgroundColor: '#FFF',
    },
  },
}))(Button);

export default function ColourPicker(props) {
  const handleColorSelect = props.handleSelect
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  // function handleColorSelect(event, index) {
  //   setSelectedIndex(index);
  //   setOpen(false);
  //   console.log(colors[selectedIndex])
  // }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }
  console.log(colors[selectedIndex])
  return (
    <Grid container>
      <Grid item xs={12} align="center">
          <ColorButton
            color="primary"
            variant="contained"
            size="small"
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
              <IconButton
                 aria-label="Delete"
                 className={classes.margin}
                 style={{backgroundColor: colors[selectedIndex]}}
                 size="small"
               >
               <Check fontSize="inherit" style={{opacity: 0}}/>
             </IconButton>
            <ArrowDropDown />
          </ColorButton>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow" style={{padding: '5px', }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <div className={classes.colorSelectDiv}>
                    {colors.map((color, index) => (
                       <IconButton
                          key={index}
                          onClick={event => handleColorSelect(event, index)}
                          aria-label="Delete"
                          className={classes.margin}
                          style={{backgroundColor: color,}}
                          size="small"
                        >
                        {index === selectedIndex ? <Check fontSize="inherit"/> : <Check fontSize="inherit" style={{opacity: 0}}/>}
                      </IconButton>
                    ))}
                  </div>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
