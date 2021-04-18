import { Link } from "react-router-dom";
import ProgressButton from "./components/progress-button";
import "./who-are-you.scss";
import WhoAreYouButton from "./components/who-are-you-button.jsx";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const WhoAreYou = () => {
  const [selectedMe, setSelectedMe] = useState(false);
  const [selectedComp, setSelectedComp] = useState(false);
  const { push } = useHistory();

  const onSelect = (who) => {
    console.log("selected");
    if (!selectedMe && !selectedComp) {
      if (who === "me") {
        setSelectedMe(true);
      } else if (who === "comp") {
        setSelectedComp(true);
      }
    } else if (!selectedMe && selectedComp) {
      if (who === "me") {
        setSelectedMe(true);
        setSelectedComp(false);
      }
    } else if (selectedMe && !selectedComp) {
      if (who === "comp") {
        setSelectedMe(false);
        setSelectedComp(true);
      }
    }
  };

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
            selected={selectedMe}
            onClick={() => onSelect("me")}
          ></WhoAreYouButton>
        </div>
        <div className="who-are-you-btn">
          <WhoAreYouButton
            id="who-btn-2"
            text="I would like to be a fitness companion for a senior"
            selected={selectedComp}
            onClick={() => onSelect("comp")}
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
        <div className="prog-button">
          <ProgressButton
            id="who-are-you-next-button"
            text="NEXT"
            disabled={!selectedMe && !selectedComp}
            onClick= {() => {
              push("/tell-more");
            }}
          ></ProgressButton>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYou;
