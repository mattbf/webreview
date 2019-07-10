import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawing from './Drawing.js';
import DrawingLine from './DrawingLine.js';
import Immutable from 'immutable';
//import { makeStyles } from '@material-ui/styles';


const drawAreaStyle = {

}

const useStyles = makeStyles({
  root: {
    border: 'solid',
    borderColor: '#FF8E53',
    position: 'absolute',
    cursor: 'crosshair',
    marginLeft: '100px',
  },
});


function DrawArea(props) {
  const classes = useStyles();
  //Maybe create a global mode component instead
  //const mode = props.mode
  const width = props.w
  const height = props.h
  const [lines, setLines] = useState(new Immutable.List())
  const [isDrawing, setIsDrawing] = useState(false)
  const drawRef = useRef();
  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
  })

  // componentDidMount() {
  //   document.addEventListener("mouseup", this.handleMouseUp);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener("mouseup", this.handleMouseUp);
  // }

  function handleMouseDown(mouseEvent) {

    if (mouseEvent.button != 0) {
      return;
    }

    const point = relativeCoordinatesForEvent(mouseEvent);

    setLines(lines.push(new Immutable.List([point])))
    setIsDrawing(true)

    // this.setState(prevState => ({
    //   lines: prevState.lines.push(new Immutable.List([point])),
    //   isDrawing: true
    // }));
  }

  function handleMouseMove(mouseEvent) {
    if (!isDrawing) {
      return;
    }

    const point = relativeCoordinatesForEvent(mouseEvent);
    setLines(lines.updateIn([lines.size -1], line => line.push(point)))

    // this.setState(prevState =>  ({
    //   lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
    // }));
  }

  function handleMouseUp() {
    setIsDrawing(false)
  }

  function relativeCoordinatesForEvent(mouseEvent) {
    const drawDiv = document.getElementById ("drawArea");
    //const drawDiv = drawRef
    const boundingRect = drawDiv.getBoundingClientRect();
    console.log(boundingRect)
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.x,
      y: mouseEvent.clientY - boundingRect.y,
    });
  }

  //console.log(lines)

  return (
    <div
      className={classes.root}
      id="drawArea"
      style={{width: '400px', height: '400px'}}
      //style={{display: mode === 'markup' ? 'block' : 'none', width: width, height: height}}
      ref={drawRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >

      <Drawing lines={lines} /> // Map an array of drawings (layers) for each user
    </div>
  );
}


export default DrawArea
