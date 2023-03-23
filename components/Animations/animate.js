import React from "react";

export default function NumberFloating({ number, mainColor, blobStyle }) {
  return (
    <span
      className="inline-flex flex-col gap-5 scaler"
      style={{ color: mainColor }}
    >
      <span className="relative flex h-32 justify-evenly ">
        <div>
          <span
            style={{ borderColor: mainColor }}
            className="absolute h-20 border-4 rounded-full fade-delay-1 fade"
          ></span>
        </div>
        <div>
          <span
            style={{ borderColor: mainColor }}
            className="absolute h-20 border-4 rounded-full fade"
          ></span>
        </div>
        <div>
          <span
            style={{ borderColor: mainColor }}
            className="absolute h-20 border-4 rounded-full bg fade-delay-2 fade"
          ></span>
        </div>
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
