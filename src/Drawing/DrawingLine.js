import React from 'react'

const pathStyle = {
  fill: 'none',
  strokeWidth: '10px',
  stroke: "#000",
  strokeLinejoin: 'round',
  strokeLinecap: 'round',
}

function DrawingLine({ line }) {
  const pathData = "M " +
    line
      .map(p => {
        return `${p.get('x')} ${p.get('y')}`;
      })
      .join(" L ");

  return <path className="path" d={pathData} style={pathStyle} />;
}

export default DrawingLine
