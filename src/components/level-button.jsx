import React from "react";
import "./level-button.scss";

const LevelButton = (props) => {
  return (
    <div className="level-button">
      <div className="level-button-text">{props.text}</div>
    </div>
  );
};

export default LevelButton;
