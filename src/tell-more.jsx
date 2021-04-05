import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ProgressButton from "./components/progress-button.jsx";
import "./tell-more.scss";

const TellMore = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [disabled, setDisabled] = useState(true); // set submit to initially disabled

  // set disabled submit if form not valid
  useEffect(() => {
    console.log(values);
    if (
      values.firstName !== "" &&
      values.lastName !== "" &&
      values.email !== "" &&
      values.phone !== ""
    ) {
      setDisabled(false);
      console.log("button is disabled");
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
    <div className="tell-more-page">
      <div className="tell-more-title">Tell us a bit more...</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={set("firstName")}
            ref={register({
              required: "First Name is required.",
              pattern: {
                value: /[a-zA-Z]$/,
                message: "First Name is not valid.",
              },
            })}
          />
          {errors.firstName && (
            <p className="errorMsg">{errors.firstName.message}</p>
          )}
        </div>
        <div className="contact-form">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={set("lastName")}
            ref={register({
              required: "Last Name is required.",
              pattern: {
                value: /[a-zA-Z]$/,
                message: "Last Name is not valid.",
              },
            })}
          />
          {errors.lastName && (
            <p className="errorMsg">{errors.lastName.message}</p>
          )}
        </div>
        <div className="contact-form">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={set("email")}
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Last Name is wrong format.",
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="contact-form">
          <label>Please click your prefered method of contact.</label>
          <input type="radio" value="email" name="notificationMethod" checked />
          Email
          <input type="radio" value="phone" name="notificationMethod" /> Phone
          <input type="radio" value="both" name="notificationMethod" /> Both
        </div>
        <div>
          <Link to="./who-are-you">
            <button
              type="submit"
              disabled={disabled}
              text="BACK"
              className="tell-more-progress-button"
            />
          </Link>
          <Link to="./level">
            <button
              type="submit"
              disabled={disabled}
              text="NEXT"
              className="tell-more-progress-button"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TellMore;
