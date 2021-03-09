import React from "react";
import "./progress-button.scss";

const ProgressButton = (props) => {
  return (
    <div className="prog-button" id={props.id}>
      <div className="prog-button-text">{props.text}</div>
    </div>
  );
};

export default ProgressButton;
