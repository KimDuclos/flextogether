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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          ref={register({
            required: "First name is required.",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "First name can only have alphabetical characters.",
            },
          })}
        />
        {errors.firstName && errors.firstName.message && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
        name="lastName"
        type="text"
        ref={register({
          required: "Last name is required.",
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Last name can only have alphabetical characters."
          },
        })}  
        />
        {errors.lastName && errors.lastName.message && <p>{errors.lastName.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          ref={register({
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              message: "Email is not in correct format."
            }
          })}
        />
        {errors.email && errors.email.message && <p>{errors.email.message}</p>}

        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          type="tel"
          ref={register({
            required: "Phone number is required.",
            pattern: {
              value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
              message: "Phone number is not in correct format."
            }
          })}

        />
        {errors.phone && errors.phone.message && <p>{errors.phone.message}</p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default TellMore;
