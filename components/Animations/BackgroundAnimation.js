import React from "react";
import { useState, useEffect } from "react";
import NumberFloating from "./animate";

export default function BackgroundAnimation() {
  const intervalGap = 200;
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
            number: Math.floor(Math.random() * 10),
            styles: {
              animationDuration: `${Math.random() * 6 + 10}s`,
              top: 0,
              left: `${Math.random() * 120 * 5}vw`,
              transform: `scale(${Math.random() * 0.4 + 0.2})`,
            },
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
            className="absolute circle-dot"
            style={bubble.styles}
          >
            <NumberFloating number={bubble.number} />
          </div>
        ))}
      </div>
    </div>
  );
}
