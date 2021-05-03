import { PropTypes } from "mobx-react";
import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./time-button.scss";

const TimeDropDown = (props) => {
  const [value, setValue] = useState("");
  const handleOnChange = (val) => {
    setValue(val);
    props.onSelect();
    console.log("handle onChange");
  };

  const options = [
    { label: "6:00am", value: "6:00am" },
    { label: "7:00am", value: "7:00am" },
    { label: "8:00am", value: "8:00am" },
    { label: "9:00am", value: "9:00am" },
    { label: "10:00am", value: "10:00am" },
    { label: "11:00am", value: "11:00am" },
    { label: "12:00pm", value: "12:00am" },
    { label: "1:00pm", value: "1:00am" },
    { label: "2:00pm", value: "2:00am" },
    { label: "3:00pm", value: "3:00am" },
    { label: "4:00pm", value: "4:00am" },
    { label: "5:00pm", value: "5:00am" },
    { label: "6:00pm", value: "6:00am" },
  ];
  return (
    <div className="time-dopdown">
      <div className="preview-values">{value}</div>

      <MultiSelect onChange={handleOnChange} options={options} />
    </div>
  );
};

export default TimeDropDown;
