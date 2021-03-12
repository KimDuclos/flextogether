import React from "react";
import "./progress-button.scss";

const ProgressButton = (props) => {
  return (
    <div className="base-prog-button" id={props.id}>
      <div className="base-prog-button-text">{props.text}</div>
    </div>
  );
};

export default ProgressButton;
