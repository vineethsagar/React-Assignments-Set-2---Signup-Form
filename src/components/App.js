import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
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
    setPassword(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhonenumber(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("sumbit");
    event.preventDefault();
    setWelcomeMessage("");
    setErrorMessage("");
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
    <div id="main">
      {/* <form onSubmit={handleSubmit}> */}
      <label>
        Name:
        <input
          type="text"
          value={name}
          data-testid="name"
          onChange={handleName}
        ></input>
      </label>
      <label>
        Email:
        <input
          // type="email"
          value={email}
          data-testid="email"
          onChange={handleEmail}
        ></input>
      </label>
      <label>
        Gender:
        <input
          type="text"
          value={gender}
          data-testid="gender"
          onChange={handleGender}
        ></input>
      </label>
      <label>
        Phone number:
        <input
          data-testid="phoneNumber"
          type="number"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        ></input>
      </label>
      <label>
        Password:
        <input
          data-testid="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </label>
      <button data-testid="button" onClick={handleSubmit}>
        button
      </button>
      {/* </form> */}
      <h3>{errorMessage}</h3>
      <h3>{welcomeMessage}</h3>
    </div>
  );
};

export default App;
