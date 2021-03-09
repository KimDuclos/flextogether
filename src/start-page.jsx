import React from "react";
import "./start-page.scss";
import startBackgroundImage from "./assets/man-exercising-background.png";
import ProgressButton from "./components/progress-button.jsx";

const startBackgroundStyle = {
  width: "100%",
  height: "880px",
  backgroundImage: `url(${startBackgroundImage})`,
  backgroundSize: "cover",
  margin: "0% 0 0 0",
};

const StartPage = (props) => {
  return (
    <div className="start-page" style={startBackgroundStyle}>
      <h1 className="start-page-title">Flex Together</h1>
      <ProgressButton
        id="start-progress-button"
        text="START"
      />
    </div>
  );
};

export default StartPage;
