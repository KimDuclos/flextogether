import React from "react";
import "./start-page.scss";
import { Link } from "react-router-dom";
import ProgressButton from "./components/progress-button.jsx";

const StartPage = () => {
  return (
    <div className="start-page">
      <h1 className="start-page-title">Flex Together</h1>
      <p className="start-page-paragraph">Please click or tap START</p>
      <Link to="/welcome-page" style={{ textDecoration: "none" }}>
        <ProgressButton
          className="prog-button"
          id="start-progress-button"
          text="START"
        />
      </Link>
    </div>
  );
};

export default StartPage;
