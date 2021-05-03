import React, { useState } from "react";
import "./time-button.scss";

const TimeButton = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="time-btn-hover">
      <div
        className="time-btns"
        onClick={() => {
          setClicked(!clicked);
          props.onClick(clicked)
        }}
        style={{ backgroundColor: clicked ? "white" : "black" }}
      >
        <div
          className="time-text"
          style={{ color: clicked ? "black" : "white" }}
        >
          {props.time}
        </div>
      </div>
    </div>
  );
};

export default TimeButton;
