import React from "react";
import NumberFloating from "../components/Animations/animate";

export default function animation() {
  return (
    <div className="absolute circle-dot">
      <NumberFloating number={2} mainColor={"#000"} />
    </div>
  );
}
