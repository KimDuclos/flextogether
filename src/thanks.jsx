import React from "react";
import "./thanks.scss";
import backgroundImage from "./assets/backgroundImage.png";
import ProgressButton from "./components/progress-button.jsx";
import { Link } from "react-router-dom";

const thanksBackgroundStyle = {
  width: "100%",
  height: "900px",
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
      <div className="thanks-prog-button">
        <Link to="/" style={{ textDecoration: "none" }}>
          <ProgressButton text="DONE" />
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
