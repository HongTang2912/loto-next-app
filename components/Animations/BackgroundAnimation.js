import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { shuffled } from "../../utils/shuffleArray";
import NumberFloating from "./animate";
import configColors from "../../utils/configuration/color.json";

const intervalGap = 1000;
const limit = 15;

export default function BackgroundAnimation() {
  const [bubblePropsList, setBubblePropsList] = useState([]);
  const colors = useMemo(() => configColors, []);

  const initPositions = useMemo(() => shuffled, []);

  const borderBlobs = () => {
    let array = [];
    for (let i = 0; i < 8; i++) {
      array.push(Math.floor(Math.random() * 60) + 40);
    }
    return `${array[0]}% ${array[1]}% ${array[2]}% ${array[3]}% / ${array[4]}% ${array[5]}% ${array[6]}% ${array[7]}%`;
  };

  const generator = useCallback(() => {
    const mainColor = colors[Math.floor(Math.random() * colors.length)];
    setBubblePropsList((prev) => {
      const init = initPositions[prev.length];

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
            left: `${init + (Math.random() * 15 - 7.5)}vw`,
            transform: `scale(${Math.random() * 0.3 + 0.3})`,
          },
          blobStyle: {
            borderRadius: borderBlobs(),
            animation: "spin 4.2s infinite linear",
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
        <NumberFloating
          number={bubble.number}
          mainColor={bubble.mainColor}
          blobStyle={bubble.blobStyle}
        />
      </div>
    );
  }

  return <div className="fixed animate-frame">{bubbles}</div>;
}
