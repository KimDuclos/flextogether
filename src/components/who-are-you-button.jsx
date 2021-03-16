import { useState } from "react";
import "./who-are-you-button.scss";

const WhoAreYouButton = (props) => {
  // toggle clicked or not, starting with not clicked
  const [clicked, setClicked] = useState(false);

  return (
    <div className="button-hover-border">
      <div
        id="who-button"
        className="who-are-you-button"
        onClick={() => setClicked(!clicked)}
        // clicked = white, not-clicked = black
        style={{
          backgroundColor: clicked ? "white" : "black",
        }}
      >
        <div
          className="who-are-you-btn-text"
          // clicked = black, not clicked = white
          style={{ color: clicked ? "black" : "white" }}
        >
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default WhoAreYouButton;
