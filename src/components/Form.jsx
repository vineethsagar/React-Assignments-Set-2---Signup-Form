import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handlePassword = (event) => {
    setPhonenumber(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWelcomeMessage("");
    if (!name || !email || !gender || !phoneNumber || !password) {
      setErrorMessage("All fields are mandatory");
      return;
    } else if (!isValidName(name)) {
      setErrorMessage("Name is not alphanumeric");
      return;
    } else if (!isValidEmail(email)) {
      setErrorMessage("Email must contain @");
      return;
    } else if (!isValidGender(gender)) {
      setErrorMessage("Please identify as male, female or others");
      return;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      setErrorMessage("Phone Number must contain only numbers");
      return;
    } else if (!isValidPassword(password)) {
      setErrorMessage("Password must contain atleast 6 letters");
      return;
    } else {
      setErrorMessage("");
      setWelcomeMessage(`Hello ${email.split("@")[0]}`);
    }
  };
  const isValidName = (name) => {
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(name);
  };
  const isValidEmail = (email) => {
    return email.includes("@");
  };
  const isValidGender = (gender) => {
    if (gender === "male" || gender === "female" || gender === "other") {
      return true;
    }
    return false;
  };
  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^\d+$/;
    return regex.test(phoneNumber);
  };
  const isValidPassword = (password) => {
    return password.length > 6;
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" data-testid="name" onChange={handleName}></input>
        </label>
        <label>
          Email:
          <input
            type="email"
            data-testid="email"
            onChange={handleEmail}
          ></input>
        </label>
        <label>
          Gender:
          <input
            type="text"
            data-testid="gender"
            onChange={handleGender}
          ></input>
        </label>
        <label>
          Phone number:
          <input data-testid="phoneNumber" onChange={handlePhoneNumber}></input>
        </label>
        <label>
          Password:
          <input
            data-testid="password"
            type="password"
            onChange={handlePassword}
          />
        </label>
        <button data-testid="button">button</button>
      </form>
      <h3>{errorMessage}</h3>
      <h3>{welcomeMessage}</h3>
    </>
  );
};
export default Form;
