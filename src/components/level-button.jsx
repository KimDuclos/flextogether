import { useState } from "react";
import "./level-button.scss";

const LevelButton = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="level-btn-hover">
      <div
        className="level-button"
        onClick={() => setClicked(!clicked)}
        style={{ backgroundColor: clicked ? "white" : "black" }}
      >
        <div
          className="level-button-text"
          style={{ color: clicked ? "black" : "white" }}
        >
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default LevelButton;
