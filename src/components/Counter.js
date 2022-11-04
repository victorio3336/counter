import React from "react";
import "../styles-sheet/Counter.css";

const Counter = ({ numClicks }) => {
  return (
    <div className="counter">
      <div></div>
      {numClicks}
    </div>
  );
};

export default Counter;
