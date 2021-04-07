import { Link } from "react-router-dom";
import "./level.scss";
import LevelButton from "./components/level-button.jsx";
import ProgressButton from "./components/progress-button";

const Level = () => {
  return (
    <div className="level-page">
      <h1 className="level-page-title">What is your assigned level?</h1>
      <p className="level-page-paragraph">
        What is the level your doctor assigned to you upon joining our progam?
        Please tap one box. You can log in again anytime if need to change your
        level.
      </p>
      <div className="level-buttons">
        <div className="levelButton">
          <LevelButton text="LOW: 1 hour per week" />
        </div>
        <div className="levelButton">
          <LevelButton text="MEDIUM: 3 hours per week" />
        </div>
        <div className="levelButton">
          <LevelButton text="HIGH: More than 4 hours per week" />
        </div>
      </div>
      <div className="level-prog-buttons">
        <Link to="/tell-more" style={{ textDecoration: "none" }}>
          <ProgressButton className="level-back-button" text="BACK" />
        </Link>
        <Link to="/calendar" style={{ textDecoration: "none" }}>
          <ProgressButton className="level-next-button" text="NEXT" />
        </Link>
      </div>
    </div>
  );
};

export default Level;
