import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import NumberFloating from "./animate";

export default function BackgroundAnimation() {
  const intervalGap = 400;
  const limit = 25;
  const [bubblePropsList, setBubblePropsList] = useState([]);
  const colors = useMemo(
    () => [
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
    ],
    []
  );

  const generator = useCallback(() => {
    const mainColor = colors[Math.floor(Math.random() * colors.length)];
    setBubblePropsList((prev) => {
      if (prev.length >= limit) {
        clearInterval(intervalRef.current);
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
            transform: `scale(${Math.random() * 0.3 + 0.2})`,
          },
        },
      ];
    });
  }, [colors]);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(generator, intervalGap);
    return () => clearInterval(intervalRef.current);
  }, [generator]);

  const bubbles = [];
  for (let i = 0; i < bubblePropsList.length; i++) {
    const bubble = bubblePropsList[i];
    bubbles.push(
      <div key={i} className="absolute circle-dot" style={bubble.styles}>
        <NumberFloating number={bubble.number} mainColor={bubble.mainColor} />
      </div>
    );
  }

  return <div className="fixed -top-23 animate-frame">{bubbles}</div>;
}
