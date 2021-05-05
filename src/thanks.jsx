import React from "react";
import "./thanks.scss";
import backgroundImage from "./assets/backgroundImage.png";
import ProgressButton from "./components/progress-button.jsx";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="thanks-page">
      <div className="thanks-page-title">
        <p>Thanks!</p>
        <p>We've got all we need!</p>
      </div>
      <div className="thanks-page-paragraph">
        <p>
          We'll review your companion matches and send you an email with your
          assigned time(s)!
        </p>
        <p>The Flex Together Team</p>
      </div>
      <div className="thanks-prog-button" id="thanks-prog-btn">
        <Link to="/" style={{ textDecoration: "none" }}>
          <ProgressButton text="DONE" />
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
