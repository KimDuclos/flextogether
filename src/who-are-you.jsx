import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ProgressButton from "./components/progress-button";
import "./who-are-you.scss";
import backgroundImage from "./assets/backgroundImage.png";
import WhoAreYouButton from "./components/who-are-you-button.jsx";

const whoAreYouBackgroundStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  margin: "0% 0 0 0",
};

const WhoAreYou = () => {
  return (
    <div className="who-are-you-page" style={whoAreYouBackgroundStyle}>
      <h1 className="who-are-you-title">Who are You?</h1>
      <p className="who-are-you-instructions">
        Please click your choice. Then click NEXT.
      </p>
      <div className="who-are-you-button-section">
        <WhoAreYouButton
          className="who-are-you-button"
          id="who-btn-1"
          text="I am a senior looking for a fitness companion."
        ></WhoAreYouButton>
        <WhoAreYouButton
          className="who-are-you-button"
          id="who-btn-2"
          text="I would like to be a fitness companion for a senior"
        ></WhoAreYouButton>
      </div>
      <div className="who-are-you-prog-button-section">
        <Router>
          <Link to="/welcome-page">
            <ProgressButton
              className="prog-button"
              id="who-are-you-back-btn"
              text="BACK"
            ></ProgressButton>
          </Link>
          <Link to="/tell-more">
            <ProgressButton
              className="prog-button"
              id="who-are-you-next-button"
              text="NEXT"
            ></ProgressButton>
          </Link>
        </Router>
      </div>
    </div>
  );
};

export default WhoAreYou;