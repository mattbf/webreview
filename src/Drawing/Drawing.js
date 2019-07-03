import React from 'react'
import DrawingLine from './DrawingLine.js';

const drawingStyle = {
  width: '100%',
  height: '100%',
}

function Drawing({ lines }) {
  return (
    <svg className="drawing" style={drawingStyle}>
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

export default Drawing
