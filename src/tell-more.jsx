import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tell-more.scss";
import backgroundImage from "./assets/backgroundImage.png";

const tellMoreBackgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "100%",
  margin: "0% 0 0 0",
  display: "inline-block",
};

const TellMore = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone1: "",
    phone2: "",
    phone3: "",
  });

  const [disabled, setDisabled] = useState(true); // set submit initially to disabled

  // set disabled submit if form not valid
  useEffect(() => {
    console.log(values);
    if (
      values.firstName !== "" &&
      values.lastName !== "" &&
      values.email !== "" &&
      values.phone1 !== "" &&
      values.phone2 !== "" &&
      values.phone3 !== ""
    ) {
      setDisabled(false);
      console.log("link is disabled");
    } else {
      setDisabled(true);
    }
  }, [values]);

  const set = (userInput) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [userInput]: value }));
    };
  };

  return (
    <div className="tell-more-page" style={tellMoreBackgroundStyle}>
      <form>
        <label className="contact-form">First Name</label>
        <input
          className="contact-input"
          value={values.firstName}
          onChange={set("firstName")}
          type="text"
          placeholder="First Name"
          required
        />
        <label>Last Name</label>
        <input
          className="contact-input"
          value={values.lastName}
          onChange={set("lastName")}
          type="text"
          placeholder="Last Name"
          required
        />
        <label>Email:</label>
        <input
          className="contact-input"
          value={values.email}
          onChange={set("email")}
          type="email"
          placeholder="email@email.com"
          aria-label="email address"
          required
        />
        <label>Phone Number</label>
        (
        <input
          className="contact-input"
          value={values.phone1}
          name="phone1"
          type="tel"
          pattern="[0-9]{3}"
          placeholder="###"
          aria-label="3-digit area code"
          size="2"
          onChange={set("phone1")}
          maxLength="3"
          required
        />
        )-
        <input
          className="contact-input"
          value={values.phone2}
          name="phone2"
          type="tel"
          pattern="[0-9]{3}"
          placeholder="###"
          aria-label="3-digit prefix"
          size="2"
          onChange={set("phone2")}
          maxLength="3"
          required
        />
        -
        <input
          className="contact-input"
          value={values.phone3}
          name="phone3"
          type="tel"
          pattern="[0-9]{4}"
          placeholder="####"
          aria-label="4-digit number"
          size="3"
          onChange={set("phone3")}
          maxLength="4"
          required
        />
        <p className="notification-pref">
          I prefer to receive notifications by:
        </p>
        <div className="notification-buttons">
          Email
          <input
            className="radio-button"
            type="radio"
            value="radioEmail"
            name="contact-selection"
            id="email-notification"
            required
            checked
          />
          Text
          <input
            className="radio-button"
            type="radio"
            value="radioText"
            name="contact-selection"
            id="text-notification"
          />
          Both
          <input
            className="radio-button"
            type="radio"
            value="radioBoth"
            name="contact-selection"
            id="both-notification"
          />
        </div>
        <Link to="./who-are-you">
          <button
            type="submit"
            disabled={disabled}
            className="tell-more-progress-button"
          >
            BACK
          </button>
        </Link>
        <Link to="./level">
          <button
            type="submit"
            disabled={disabled}
            className="tell-more-prog-button"
          >
            NEXT
          </button>
        </Link>
      </form>
    </div>
  );
};

export default TellMore;
