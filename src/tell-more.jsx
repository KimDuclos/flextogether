import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressButton from "./components/progress-button.jsx";
import "./tell-more.scss";

const TellMore = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [disabled, setDisabled] = useState(true); // set submit to initially disabled

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="tell-more-page">
      <div className="tell-more-title">Tell us a bit more...</div>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="text-boxes">
          <div className="box">
            <div className="label">
              <label htmlFor="firstName" className="text-box-labels">
                First Name
              </label>
            </div>
            <div className="input">
              <input
                className="contact-input"
                name="firstName"
                type="text"
                placeholder="First"
                ref={register({
                  required: "First name is required.",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message:
                      "First name can only have alphabetical characters.",
                  },
                })}
              />
              {errors.firstName && errors.firstName.message && (
                <p>{errors.firstName.message}</p>
              )}
            </div>
          </div>

          <div className="text-boxes">
            <div className="box">
              <div className="label">
                <label htmlFor="lastName" className="text-box-labels">
                  Last Name
                </label>
              </div>
              <input
                className="contact-input"
                name="lastName"
                type="text"
                placeholder="Last"
                ref={register({
                  required: "Last name is required.",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Last name can only have alphabetical characters.",
                  },
                })}
              />
              {errors.lastName && errors.lastName.message && (
                <p>{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="text-boxes">
            <div className="box">
              <div className="label">
                <label htmlFor="email" className="text-box-labels">
                  Email
                </label>
              </div>
              <input
                className="contact-input"
                name="email"
                // type="email"
                placeholder="email@email.com"
                ref={register({
                  required: "Email is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                    message: "Email is not in correct format.",
                  },
                })}
              />
              {errors.email && errors.email.message && (
                <p>{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="text-boxes">
            <div className="box">
              <div className="label">
                <label htmlFor="phone">Phone</label>
              </div>
              <input
                className="contact-input"
                name="phone"
                type="tel"
                placeholder="555-555-5555"
                ref={register({
                  required: "Phone number is required.",
                  pattern: {
                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Phone number is not in correct format.",
                  },
                })}
              />
              {errors.phone && errors.phone.message && (
                <p>{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>
        <label className="notification-title">
          Please click your prefered method of contact.
        </label>
        <div className="notification-pref">
          <label className="notification-labels">
            <input
              type="radio"
              value="email"
              name="notificationMethod"
              value="Email"
              checked
            />{" "}
            Email
          </label>
          <label>
            <input type="radio" value="phone" name="notificationMethod" /> Phone
          </label>
          <label>
            <input type="radio" value="both" name="notificationMethod" /> Both
          </label>
        </div>
        <div className="tell-more-prog-btns">
          <input type="submit" value="BACK" className="tell-more-prog-button" />
          <input type="submit" value="NEXT" className="tell-more-prog-button" />
        </div>
      </form>
    </div>
  );
};

export default TellMore;
