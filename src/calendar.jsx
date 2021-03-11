import React from "react";
import "./calendar.scss";
import calendarBackground from "./assets/calendarBackground.png";
import Dropdown from "react-dropdown";
import TimeButton from "./components/time-button.jsx";
import ProgressButton from "./components/progress-button.jsx";
import { BrowserRouter as Router, Link } from "react-router-dom";

const calendarBackgroundStyle = {
  width: "100%",
  height: "1600px",
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

// set dropdown to eastern
const defaultOption = options[0];

// insert times to blocks - map
const times = [
  "6:00 am",
  "7:00 am",
  "8:00 am",
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
  "6:00 pm",
];

const timeBlocks = times.map((time) => <TimeButton time={time} />);

const Calendar = () => {
  return (
    <div className="calendar-page" style={calendarBackgroundStyle}>
      <div className="calendar-page-title">When can you exercise?</div>
      <div className="calendar-page-paragraph">
        <p>
          Please select your timezone and tap at least one hour time block. You
          might not exercise for the entire time block, but for scheduling
          purposes, we like to set aside a minumum availability window. You can
          log in in again anytime to change your availability.
        </p>
        <p>
          Please select a time zone from the dropdown menu. Then click the times
          you are available. Click NEXT when you are done.
        </p>
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
      <div className="days">
        <div className="day-titles">
          <p className="day">Sunday</p>
          <p className="day">Monday</p>
          <p className="day">Tuesday</p>
          <p className="day">Wednesday</p>
          <p className="day">Thursday</p>
          <p className="day">Friday</p>
          <p className="day">Saturday</p>
        </div>
      </div>
      <div className="time-picker">
        <div className="time-picker-row">
          <div className="time-picker-column">{timeBlocks}</div>
          <div className="time-picker-column">{timeBlocks}</div>
          <div className="time-picker-column">{timeBlocks}</div>
          <div className="time-picker-column">{timeBlocks}</div>
          <div className="time-picker-column">{timeBlocks}</div>
          <div className="time-picker-column">{timeBlocks}</div>
          <div className="time-picker-column">{timeBlocks}</div>
        </div>
      </div>
      <div className="time-prog-buttons">
        <Router>
          <Link to="/level">
            <ProgressButton text="BACK" />
          </Link>
          <Link to="/thanks">
            <ProgressButton text="NEXT" />
          </Link>
        </Router>
      </div>
    </div>
  );
};

export default Calendar;
