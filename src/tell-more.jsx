import React from "react";
import { useState } from "react";
import "./tell-more.scss";

const TellMore = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone1: "",
    phone2: "",
    phone3: ""
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <form>
      <label>First Name</label>
      <input
        value={values.firstName}
        onChange={set("firstName")}
        type="text"
        placeholder="First Name"
        required
      />
      <label>Last Name</label>
      <input
        value={values.lastName}
        onChange={set("lastName")}
        type="text"
        placeholder="Last Name"
        required
      />
      <label>Email:</label>
      <input
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
        name="tel1"
        type="tel"
        pattern="[0-9]{3}"
        placeholder="###"
        aria-label="3-digit area code"
        size="2"
        onChange={set("phone")}
      />
      )-
      <input
        name="tel2"
        type="tel"
        pattern="[0-9]{3}"
        placeholder="###"
        aria-label="3-digit prefix"
        size="2"
        onChange={set("phone")}

      />
      -
      <input
        name="tel3"
        type="tel"
        pattern="[0-9]{4}"
        placeholder="####"
        aria-label="4-digit number"
        size="3"
        onChange={set("phone")}
      />
      <button type="submit">BACK</button>
      <button type="submit">NEXT</button>
    </form>
  );
};

export default TellMore;
