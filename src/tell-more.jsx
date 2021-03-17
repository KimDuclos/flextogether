import React from "react";
import "./tell-more.scss";
import { Link } from "react-router-dom";
import ProgressButton from "./components/progress-button.jsx";
import backgroundImage from "./assets/backgroundImage.png";

const tellMoreBackgroundStyle = {
  width: "100%",
  height: "910px",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "100%",
  margin: "0% 0 0 0",
  display: "inline-block",
};

const TellMore = () => {
  return (
    <div className="tell-more-page" style={tellMoreBackgroundStyle}>
      <h1 className="tell-more-title">Tell us a bit more...</h1>
      <p className="tell-more-paragraph">
        Please enter your name, email, and phone number in the boxes. Select
        your notification preference. Click "Submit" when after have filled out
        your info. Then click NEXT.
      </p>
      <form>
        <label className="contact-form">
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="contact-input"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="contact-input"
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />
        </label>
        {/* <input type="submit" className="submit-button" /> */}
        {/* </form> */}
        <p className="notification-pref">
          I prefer to receive notifications by:
        </p>
        <div className="notification-buttons">
          Email{" "}
          <input
            className="radio-button"
            type="radio"
            value="Email"
            name="contact-selection"
          />
          Text{" "}
          <input
            className="radio-button"
            type="radio"
            value="Text"
            name="contact-selection"
            required
          />
          Both{" "}
          <input
            className="radio-button"
            type="radio"
            value="Both"
            name="contact-selection"
          />
        </div>
        <div className="tell-more-prog-buttons">
          <Link to="/who-are-you" style={{ textDecoration: "none" }}>
            <ProgressButton className="tell-more-back-btn" text="BACK" />
          </Link>
          <Link to="/level" style={{ textDecoration: "none" }}>
            <ProgressButton className="tell-more-next-btn" text="NEXT" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TellMore;
