import React from "react";
import "./calendar.scss";
import calendarBackground from "./assets/calendarBackground.png";
import Dropdown from "react-dropdown";

const calendarBackgroundStyle = {
  width: "100%",
  height: "1500px",
  backgroundImage: `url(${calendarBackground})`,
  backgroundSize: "cover",
  margin: "0% 0 0 0",
};

const options = [
  {
    value: "eastern",
    label: "Eastern Time (New York)",
    className: "drop-item",
  },
  { value: "central", label: "Central Time (Chicago)", className: "drop-item" },
  {
    value: "mountain",
    label: "Mountain Time (Denver)",
    className: "drop-item",
  },
  {
    value: "pacific",
    label: "Pacific Time (Los Angeles)",
    className: "drop-item",
  },
];

const defaultOption = options[0];

const Calendar = () => {
  return (
    <div className="calendar-page" style={calendarBackgroundStyle}>
      <div className="calendar-page-title">When can you exercise?</div>
      <div className="calendar-page-paragraph">
        Please select your timezone and tap at least one hour time block. You
        might not exercise for the entire time block, but for scheduling
        purposes, we like to set aside a minumum availability window. You can
        log in in again anytime to change your availability.
      </div>
      <div className="time-zone-title">Time Zone</div>
      <div className="time-zone-dropdown">
        <Dropdown
          className="dropdown"
          options={options}
          //   onChange={this._onSelect}
          value={defaultOption}
          placeholder={"Select an Option"}
        />
      </div>
    </div>
  );
};

export default Calendar;
