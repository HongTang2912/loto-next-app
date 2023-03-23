import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { shuffled } from "../../utils/shuffleArray";
import NumberFloating from "./animate";
import configColors from "../../utils/configuration/colors.json";
import { blobs } from "../../utils/configuration/blobs";

const intervalGap = 1000;
const limit = 15;

export default function BackgroundAnimation() {
  const [bubblePropsList, setBubblePropsList] = useState([]);
  const colors = useMemo(() => configColors, []);

  const initPositions = useMemo(() => shuffled, []);


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
          blobStyle: blobs[Math.floor(Math.random() * 20)],
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
