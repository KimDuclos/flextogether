import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./time-button.scss";

const TimeDropDown = () => {
  const [value, setValue] = useState("");
  const handleOnChange = (val) => {
    setValue(val);
  };
  const options = [
    { label: "6:00am", value: "600am" },
    { label: "7:00am", value: "700am" },
    { label: "8:00am", value: "800am" },
    { label: "9:00am", value: "900am" },
    { label: "10:00am", value: "1000am" },
    { label: "11:00am", value: "1100am" },
    { label: "12:00pm", value: "1200pm" },
    { label: "1:00pm", value: "100pm" },
    { label: "2:00pm", value: "200pm" },
    { label: "3:00pm", value: "300pm" },
    { label: "4:00pm", value: "400pm" },
    { label: "5:00pm", value: "500pm" },
    { label: "6:00pm", value: "600pm" },
  ];
  return (
    <div className="time-dopdown">
      <div className="preview-values">
        <h4>Value</h4>
        {value}
      </div>

      <MultiSelect onChange={handleOnChange} options={options} />
    </div>
  );
};

export default TimeDropDown;
