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
              value: /^[A-Za-z]+$/i,
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
            value: /^[A-Za-z]+$/i,
            message: "Last name can only have alphabetical characters."
          },
        })}  
        />
        {errors.lastName && <span role="alert">This field is required</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", { required: true })}
        />
        {errors.email && <span role="alert">This field is required</span>}

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          aria-invalid={errors.phone ? "true" : "false"}
          {...register("phone", { required: true })}
        />
        {errors.phone && <span role="alert">This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default TellMore;
