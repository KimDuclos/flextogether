import React from "react";
import "./welcome-page.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import backgroundImage from "./assets/backgroundImage.png";
import ProgressButton from "./components/progress-button.jsx";

const welcomeBackgroundStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  margin: "0% 0 0 0",
};

const WelcomePage = () => {
  return (
    <div className="welcome-page" style={welcomeBackgroundStyle}>
      <h1 className="welcome-page-title">Welcome to Flex Together</h1>
      <p className="welcome-paragraph">We’re so glad you joined our team.</p>
      <p className="welcome-paragraph">
        This application will help you find a companion through the Flex
        Together program.
      </p>
      <p className="welcome-paragraph">
        The next few screens will walk you through the process of finding a
        fitness companion. You will be asked some questions about yourself, your
        availability, and your fitness level.
      </p>
      <p className="welcome-paragraph">
        Please click the NEXT button to get started!
      </p>
      <Router>
        <Link to="/who-are-you">
          <ProgressButton
            className="prog-button"
            id="welcome-progress-button"
            text="NEXT"
          ></ProgressButton>
        </Link>
      </Router>
    </div>
  );
};

export default WelcomePage;
