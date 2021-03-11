import React from "react";
import "./who-are-you-button.scss";

const WhoAreYouButton = (props) => {
  return (
    <div className="who-are-you-button">
      <div className="who-are-you-btn-text">{props.text}</div>
    </div>
  );
};

export default WhoAreYouButton;
