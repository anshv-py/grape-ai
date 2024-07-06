import React from 'react';

const TextArea = (props) => {
  return (
    <svg width="400" height="300">
      <switch>
        <foreignObject x="0" y="0" width="400" height="250" fill="lightblue" stroke="black" strokeWidth="2">
          <p xmlns="http://www.w3.org/1999/xhtml">{ props.transcript }</p>
        </foreignObject>
        <text x="20" y="20">Your SVG viewer cannot display html.</text>
      </switch>
    </svg>
  );
};

export default TextArea;