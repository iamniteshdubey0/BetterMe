import React, { useMemo } from "react";

const RandomDots = ({ count = 10, colors = ["#F97316", "#FACC15", "#FFFFFF"], sizeRange = [10, 20] }) => {
  const dots = useMemo(() => {
    const newDots = [];
    for (let i = 0; i < count; i++) {
      const size = Math.floor(Math.random() * (sizeRange[1] - sizeRange[0] + 1)) + sizeRange[0];
      newDots.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return newDots;
  }, [count, colors, sizeRange]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-75">
      {dots.map((dot, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};

export default RandomDots;
