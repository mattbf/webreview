import React, {useState, useEffect, useRef} from 'react'
import Drawing from './Drawing.js';
import DrawingLine from './DrawingLine.js';
import Immutable from 'immutable';
//import { makeStyles } from '@material-ui/styles';


const drawAreaStyle = {
  border: 'solid',
  width: '400px',
  height: '400px',
}

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });


function DrawArea() {
  //const classes = useStyles();
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
    const boundingRect = drawDiv.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  }

    console.log(lines)

  return (
    <div
      className="drawArea"
      id="drawArea"
      style={drawAreaStyle}
      ref={drawRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      // Map an array of drawings (layers) for each user
      <Drawing lines={lines} />
    </div>
  );
}


export default DrawArea
