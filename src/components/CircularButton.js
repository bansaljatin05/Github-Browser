import React from "react";
import "./circularButton.css";

const CircularButton = ({ onPress }) => {
  return (
    <button className="btn-round" onClick={() => onPress(true)}>
      <span className="btn-round__content">+</span>
    </button>
  );
};

export default CircularButton;
