import React, {useState, Fragment} from 'react'


//Need Stroke and colour selectors
// Need to be able to select, resize, and delete lines

function DrawingLine({ line }, props) {
  const color = props.color
  const stroke = props.stroke
  const [selected, setSelected] = useState(false)
  const [sketchStyle, setSketchStyle] = useState({
    colour: "#000",
    size: '5px',
  })
  const pathStyle = {
    fill: 'none',
    strokeWidth: sketchStyle.size,
    stroke: sketchStyle.colour,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',

  }

  const pathData = "M " +
    line
      .map(p => {
        return `${p.get('x')} ${p.get('y')}`;
      })
      .join(" L ");

  return (
      <path className="path" d={pathData} style={pathStyle} />
  )
}

export default DrawingLine
