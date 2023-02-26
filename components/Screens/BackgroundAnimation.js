import React from "react";
import { useState, useEffect } from "react";

export default function BackgroundAnimation() {
  const intervalGap = 500;
  const limit = 100;
  const [bubblePropsList, setBubblePropsList] = useState([]);

  useEffect(() => {
    const generator = setInterval(() => {
      const size = Math.random() * 20 + 5;
      setBubblePropsList((prev) => {
        if (prev.length >= limit) {
          clearInterval(generator);
        }
        return [
          ...prev,
          {
            animationDuration: `${Math.random() * 6 + 10}s`,
            top: 0,
            left: `${Math.random() * 120 * 5}vw`,
            width: size,
            height: size,
          },
        ];
      });
    }, intervalGap);
  }, []);

  return (
    <div className="fixed z-0">
      <div className="relative -top-23 animate-frame">
        {bubblePropsList.map((bubble, index) => (
          <div
            key={index}
            style={bubble}
            className={`absolute circle-dot bg-black`}
          ></div>
        ))}
      </div>
    </div>
  );
}
