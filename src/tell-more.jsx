import React from "react";
import "./tell-more.scss";

const txtFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: "",
};

const ErrorValidationLabel = ({ txtLbl }) => (
  <label htmlFor="" style={{ color: "red" }}>
    {txtLbl}
  </label>
);

class TellMore extends React.Component {
  state = {
    name: {
      ...txtFieldState,
      fieldName: "Name",
      required: true,
      requiredTxt: "Name is required",
      formatErrorTxt: "Incorrect name format",
    },
    email: {
      ...txtFieldState,
      fieldName: "Email",
      required: true,
      requiredTxt: "Email is required",
      formatErrorTxt: "Incorrect email format",
    },
    phone: {
      ...txtFieldState,
      fieldName: "Phone",
      required: false,
      requiredTxt: "Phone is required",
      formatErrorTxt: "Incorrect phone format",
    },
    allFieldsValid: false,
  };

  reduceFormValues = (formElements) => {
    const arrElements = Array.prototype.slice.call(formElements); // convert elements/inputs into an array found inside form element

    // extract specific properties in Constraint Validation API using this code snippet
    const formValues = arrElements
      .filter((elem) => elem.name.length > 0)
      .map((x) => {
        const { typeMismatch } = x.validity;
        const { name, type, value } = x;

        return {
          name,
          type,
          typeMismatch,
          value,
          valid: x.checkValidity(),
        };
      })
      .reduce((acc, currVal) => {
        const { value, valid, typeMismatch } = currVal;
        const { fieldName, requiredTxt, formatErrorTxt } = this.state[
          currVal.name
        ];

        // map these properties back to state so we use reducer
        acc[currVal.name] = {
          value,
          valid,
          typeMismatch,
          fieldName,
          requiredTxt,
          formatErrorTxt,
        };

        return acc;
      }, {});

    return formValues;
  };

  checkAllFieldsValid = (formValues) => {
    return !Object.keys(formValues)
      .map((x) => formValues[x])
      .some((field) => !field.valid);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // extract specific properties in Constraint Validation API using this code snippet
    const formValues = this.reduceFormValues(form.elements);
    const allFieldsValid = this.checkAllFieldsValid(formValues);

    this.setState({ ...formValues, allFieldsValid }); //we set the state based on the extracted values from Constraint Validation API
  };

  render() {
    const { name, email, phone } = this.state;

    const renderNameValidationError = name.valid ? (
      ""
    ) : (
      <ErrorValidationLabel
        txtLbl={name.typeMismatch ? name.formatErrorTxt : name.requiredTxt}
      />
    );
    const renderEmailValidationError = email.valid ? (
      ""
    ) : (
      <ErrorValidationLabel
        txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt}
      />
    );
    const renderPhoneValidationError = phone.valid ? (
      ""
    ) : (
      <ErrorValidationLabel
        txtLbl={phone.typeMismatch ? phone.formatErrorTxt : phone.requiredTxt}
      />
    );

    return (
      <div>
        <div className="tell-more-page">
          <h1 className="tell-more-title" style={{ textAlign: "center" }}>
            Tell us a bit more...
          </h1>
          <p className="tell-more-paragraph">
            {" "}
            Please enter your name, email, and phone number in the boxes. Select
            your notification preference. Click "Submit" when after have filled
            out your info. Then click NEXT.
          </p>
          <form className="contact-form" onSubmit={this.onSubmit} noValidate>
            <input
              className="contact-form-input"
              type="text"
              name="name"
              placeholder="Name"
              pattern="[A-Za-z]"
              required
            />
            <br />
            {renderNameValidationError}
            <br />
            <input
              className="contact-form-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <br />
            {renderEmailValidationError}
            <br />
            <input
              className="contact-form-input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <br />
            {renderPhoneValidationError}
            <br />
            <input type="submit" value="BACK" />
            <input type="submit" value="NEXT" />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default TellMore;
