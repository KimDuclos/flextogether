import React from "react";
import "./calendar.scss";
import TimeButton from "./components/time-button.jsx";
import TimeDropDown from "./components/time-dropdown.jsx";
import ProgressButton from "./components/progress-button.jsx";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useHistory } from "react-router-dom";
import { useState } from "react";

library.add(faCaretDown);

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

const CaretDownIcon = () => {
  return <FontAwesomeIcon icon="caret-down" />;
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

// set dropdown to eastern
const defaultOption = "Eastern Time (New York)";

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

const Calendar = (props) => {
  const { push } = useHistory();

  const [timeClicked, setTimeClicked] = useState(false);

  const timeBlocks = times.map((time) => (
    <TimeButton time={time} onClick={() => setTimeClicked(true)} />
  ));

  const [timeDrop, setTimeDrop] = useState(false);

  return (
    <div className="calendar-page">
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
        <Select
          className="dropdown"
          options={options}
          // value={defaultOption}
          placeholder={defaultOption}
          components={{ DropdownIndicator }}
        >
          <CaretDownIcon className="caret-dropdown" />
        </Select>
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
      <div className="time-dropdowns">
        <div className="drop-menu">
          <h3 className="drop-title">Monday</h3>
          <TimeDropDown onSelect={() => setTimeDrop(true)} />
        </div>
        <div className="drop-menu">
          <h3 className="drop-title">Tuesday</h3>
          <TimeDropDown onSelect={() => setTimeDrop(true)} />
        </div>
        <div className="drop-menu">
          <h3 className="drop-title">Wednesday</h3>
          <TimeDropDown onSelect={() => setTimeDrop(true)} />
        </div>
        <div className="drop-menu">
          <h3 className="drop-title">Thursday</h3>
          <TimeDropDown onSelect={() => setTimeDrop(true)} />
        </div>
        <div className="drop-menu">
          <h3 className="drop-title">Friday</h3>
          <TimeDropDown onSelect={() => setTimeDrop(true)} />
        </div>
        <div className="drop-menu">
          <h3 className="drop-title">Saturday</h3>
          <TimeDropDown onSelect={() => setTimeDrop(true)} />
        </div>
        <div className="drop-menu">
          <h3 className="drop-title">Sunday</h3>
          <TimeDropDown onSelect={() => setTimeDrop(true)} />
        </div>
      </div>
      <div className="time-prog-buttons">
        <ProgressButton
          text="BACK"
          onClick={() => {
            push("/tell-more");
          }}
        />
        <ProgressButton
          text="NEXT"
          onClick={() => {
            if (timeClicked || timeDrop) {
              push("/thanks");
            } else {
              alert("Please click at least one time slot.");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
