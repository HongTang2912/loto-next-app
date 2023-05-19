import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function NumberFloating({ number, mainColor, blobStyle }) {
  const Behind = useRef(null);
  const sizes = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const [streak1, setStreak1] = useState(null);
 const [streak2, setStreak2] = useState(null);
  const [streak3, setStreak3] = useState(null);
  const intervalGenerator = (cb) => {
     const streakSize = sizes[Math.floor(Math.random() * (sizes.length - 1))];
    cb(
      <div
        
        >
        <span
          style={{
            backgroundColor: mainColor,
            height: streakSize,
            width: streakSize,
            left: `${Math.floor(Math.random() * 60) + 20}%`,
          }}
          className={`absolute rounded-full fade`}
        ></span>
      </div>
    );
       
  };

  useEffect(() => {
    setInterval(() => intervalGenerator(setStreak1), 1500);
    setTimeout(() => {
      setInterval(() => intervalGenerator(setStreak2), 1500);

    },500)
    setTimeout(() => {
      setInterval(() => intervalGenerator(setStreak3), 1500);
    }, 1000);
  }, []);

  return (
    <span
      className="inline-flex flex-col gap-5 scaler"
      style={{ color: mainColor }}
    >
      <span className="relative flex h-52 justify-evenly " ref={Behind}>
        {/* <div>
          <span
            style={{ borderColor: mainColor, height: size, width: size, left:'80%' }}
            className={`absolute  border-4 rounded-full fade`}
          ></span>
        </div> */}
        {streak1}
        {streak2}
        {streak3}
      </span>

      <div
        className={`spiner flex bg-transparent items-center justify-center w-40 h-40 text-slate-50`}
      >
        {blobStyle(mainColor)}
        <p className="text-6xl font-extrabold absolute">{number}</p>
      </div>
    </span>
  );
}
