import React from "react";
import "./level.scss";
import backgroundImage from "./assets/backgroundImage.png";

const levelBackgroundStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    margin: "0% 0 0 0",
  };

const Level = () => {
  return (
    <div className="level-page" style={levelBackgroundStyle}>
      <h1 className="level-page-title">What is your assigned level?</h1>
      <p className="level-page-paragraph">
        What is the level your doctor assigned to you upon joining our
        progam?Please tap one box. You can log in again anytime if need to
        change your level.
      </p>
    </div>
  );
};

export default Level;
