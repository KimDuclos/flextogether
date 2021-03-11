import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./level.scss";
import backgroundImage from "./assets/backgroundImage.png";
import LevelButton from "./components/level-button.jsx";
import ProgressButton from "./components/progress-button";

const levelBackgroundStyle = {
  width: "100%",
  height: "910px",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "100%",
  margin: "0% 0 0 0",
  display: "inline-block"
};

const Level = () => {
  return (
    <div className="level-page" style={levelBackgroundStyle}>
      <h1 className="level-page-title">What is your assigned level?</h1>
      <p className="level-page-paragraph">
        What is the level your doctor assigned to you upon joining our progam?
        Please tap one box. You can log in again anytime if need to change your
        level.
      </p>
      <div className="level-buttons">
        <LevelButton text="LOW: 1 hour per week" />
        <LevelButton text="MEDIUM: 3 hours per week" />
        <LevelButton text="HIGH: 4+ hours per week" />
      </div>
      <div className="level-prog-buttons">
        <Router>
          <Link to="/tell-more" style={{ textDecoration: "none" }}>
            <ProgressButton className="level-back-button" text="BACK" />
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <ProgressButton className="level-next-button" text="NEXT" />
          </Link>
        </Router>
      </div>
    </div>
  );
};

export default Level;
