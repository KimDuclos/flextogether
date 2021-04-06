import { Link } from "react-router-dom";
import ProgressButton from "./components/progress-button";
import "./who-are-you.scss";
import backgroundImage from "./assets/backgroundImage.png";
import WhoAreYouButton from "./components/who-are-you-button.jsx";

const WhoAreYou = () => {
  return (
    <div className="who-are-you-page">
      <h1 className="who-are-you-title">Who are You?</h1>
      <p className="who-are-you-instructions">
        Please click your choice. Then click NEXT.
      </p>
      <div className="who-are-you-button-section">
        <div className="who-are-you-btn">
          <WhoAreYouButton
            id="who-btn-1"
            text="I am a senior looking for a fitness companion."
          ></WhoAreYouButton>
        </div>
        <div className="who-are-you-btn">
          <WhoAreYouButton
            id="who-btn-2"
            text="I would like to be a fitness companion for a senior"
          ></WhoAreYouButton>
        </div>
      </div>
      <div className="who-are-you-prog-button-section">
        <Link to="/welcome-page" style={{ textDecoration: "none" }}>
          <div className="prog-button">
            <ProgressButton
              id="who-are-you-back-btn"
              text="BACK"
            ></ProgressButton>
          </div>
        </Link>
        <Link to="/tell-more" style={{ textDecoration: "none" }}>
          <div className="prog-button">
            <ProgressButton
              id="who-are-you-next-button"
              text="NEXT"
            ></ProgressButton>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhoAreYou;
