import React from "react";
import { useForm } from "react-hook-form";
import ProgressButton from "./components/progress-button.jsx";
import "./tell-more.scss";

export default function TellMore() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="tell-more-page">
      <div className="tell-more-title">
        Tell us a bit more...
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
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
          <label>Last Name</label>
          <input
            type="text"
            name="email"
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
          <input type="radio" value="email" name="notificationMethod" checked /> Email
          <input type="radio" value="phone" name="notificationMethod" /> Phone
          <input type="radio" value="both" name="notificationMethod" /> Both
          <ProgressButton type="submit" text="BACK" />
          <ProgressButton type="submit" text="NEXT" />
        </div>
      </form>
    </div>
  );
}
