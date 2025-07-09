import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const generateLoopingPath = (width, height) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const rX = width / 3;
  const rY = height / 3;

  const p1 = { x: centerX - rX, y: centerY };                     // Left mid
  const p2 = { x: centerX, y: centerY - rY };                     // Top mid
  const p3 = { x: centerX + rX, y: centerY };                     // Right mid
  const p4 = { x: centerX, y: centerY + rY };                     // Bottom mid

  const p5 = { x: centerX - rX / 1.5, y: centerY + rY / 1.2 };    // Bottom left
  const p6 = { x: centerX - rX / 1.5, y: centerY - rY / 1.2 };    // Top left

  const path = `
    M ${p1.x},${p1.y}
    Q ${p1.x},${p2.y} ${p2.x},${p2.y}
    Q ${p3.x},${p2.y} ${p3.x},${p3.y}
    Q ${p3.x},${p4.y} ${p4.x},${p4.y}
    Q ${p5.x},${p4.y} ${p5.x},${p5.y}
    Q ${p5.x},${p6.y} ${p6.x},${p6.y}
    Q ${p1.x},${p6.y} ${p1.x},${p1.y}
  `;

  return path;
};

const SmoothScribble = ({
  width = 400,
  height = 300,
  stroke = "#497A4D", // Bold Green
  strokeWidth = 12,
  duration = 3,
  className = "absolute opacity-70 z-10",
}) => {
  const [path, setPath] = useState(generateLoopingPath(width, height));

  useEffect(() => {
    const interval = setInterval(() => {
      setPath(generateLoopingPath(width, height)); // Optional: Remove this line if you want static shape
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [width, height, duration]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={path}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default SmoothScribble;
