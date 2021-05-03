import React from "react";
import "./welcome-page.scss";
import { Link } from "react-router-dom";
import ProgressButton from "./components/progress-button.jsx";

const WelcomePage = () => {
  return (
    <div className="welcome-page" >
      <h1 className="welcome-page-title">Welcome to FlexTogether</h1>
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
        Please click or tap the NEXT button to get started!
      </p>
      <Link to="/who-are-you" style={{ textDecoration: "none" }}>
        <ProgressButton
          className="prog-button"
          id="welcome-progress-button"
          text="NEXT"
        ></ProgressButton>
      </Link>
    </div>
  );
};

export default WelcomePage;
