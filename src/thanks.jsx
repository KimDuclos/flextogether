import React from "react";
import "./thanks.scss";
import backgroundImage from "./assets/backgroundImage.png";
import ProgressButton from "./components/progress-button.jsx";
import { BrowserRouter as Router, Link } from "react-router-dom";

const thanksBackgroundStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  margin: "0% 0 0 0",
};

const Thanks = () => {
  return (
    <div className="thanks-page" style={thanksBackgroundStyle}>
      <div className="thanks-page-title">
        <p>Thanks!</p>
        <p>We've got all we need!</p>
      </div>
      <div className="thanks-page-paragraph">
        <p>
          We'll review your companion matches and send you an email with your
          assigned time(s)!
        </p>
        <p>- The Flex Together Team</p>
      </div>
      <Router>
        <Link to="/start-page">
          <ProgressButton text="DONE" />
        </Link>
      </Router>
    </div>
  );
};

export default Thanks;
