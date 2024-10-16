import React, { useState, useEffect } from "react";

const moveCircle = () => {
  const randomX = Math.floor(Math.random() * 100);
  const randomY = Math.floor(Math.random() * 100);
  return { top: `${randomY}%`, left: `${randomX}%` };
};

const MovingCircle = () => {
  const [position, setPosition] = useState(moveCircle());

  useEffect(() => {
    const updatePosition = () => {
      setPosition(moveCircle());
    };

    const interval = setInterval(updatePosition, 5000); // 3 secondes pour atteindre la destination

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute h-64 w-64 rounded-full bg-white opacity-75 blur-3xl transition-all duration-[5000ms] ease-in-out"
      style={{ top: position.top, left: position.left }}
    ></div>
  );
};

export default MovingCircle;
