import React from "react";
import "./progress-button.scss";

const ProgressButton = (props) => {
  return (
    <button
      className="base-prog-button"
      id={props.id}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default ProgressButton;
