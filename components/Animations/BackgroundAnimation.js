import React from "react";
import { useState, useEffect } from "react";
import NumberFloating from "./animate";

export default function BackgroundAnimation() {
  const intervalGap = 200;
  const limit = 40;
  const [bubblePropsList, setBubblePropsList] = useState([]);
  const colors = [
    "#e97b40",
    "#e9cbff",
    "#99ccdd",
    "#a4daef",
    "#aaddee",
    "#009489",
    "#fdc8c0",
    "#8de8e8",
    "#ac92c0",
    "#ab92b3",
  ];

  useEffect(() => {
    const generator = setInterval(() => {
      const mainColor = colors[Math.floor(Math.random() * colors.length)];
      setBubblePropsList((prev) => {
        if (prev.length >= limit) {
          clearInterval(generator);
        }
        return [
          ...prev,
          {
            mainColor,
            number: Math.floor(Math.random() * 10),
            styles: {
              animationDuration: `${Math.random() * 6 + 10}s`,
              top: 0,
              left: `${Math.random() * 60 * 5}vw`,
              transform: `scale(${Math.random() * 0.4 + 0.2})`,
            },
          },
        ];
      });
    }, intervalGap);
  }, []);

  return (
    <div className="fixed -top-23 animate-frame">
      {bubblePropsList.map((bubble, index) => (
        <div key={index} className="absolute circle-dot" style={bubble.styles}>
          <NumberFloating number={bubble.number} mainColor={bubble.mainColor} />
        </div>
      ))}
    </div>
  );
}
