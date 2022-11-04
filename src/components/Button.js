import React from "react";
import "../styles-sheet/Button.css";

function Button({ text, isButtonOpen, driveClick }) {
  return (
    <button
      className={isButtonOpen ? "Click-button" : "Start-button"}
      onClick={driveClick}
    >
      {text}
    </button>
  );
}

export default Button;
