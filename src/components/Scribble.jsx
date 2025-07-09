import React from "react";

const Scribble = ({
  width = 200,
  height = 100,
  stroke = "hsl(160, 84%, 39%)", // Adjust color to match your design
  strokeWidth = 8,
  className = "absolute z-0 opacity-60",
}) => {
  // Example path — adjust control points for more complex curves
  const pathData = `
    M10,${height / 2}
    C ${width / 4},${height} ${width * 0.75},0 ${width - 10},${height / 2}
  `;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={pathData}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Scribble;
