import React from "react";
import "./time-button.scss";

const TimeButton = (props) => {
    return (
        <div className="time-btns">
            <div className="time-text">{props.time}</div>
        </div>
    );
}

export default TimeButton;