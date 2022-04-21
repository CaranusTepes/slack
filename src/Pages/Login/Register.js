import React, { useState } from "react";
import { userRegistration } from "./../../api/api-auth";
import { useNavigate, Link } from "react-router-dom";
import Errors from "../../api/Errors";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPwConfirmation] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);

  // Declare variable for useNavigate
  let navigate = useNavigate();

  // Reset function
  const reset = () => {
    setEmail("");
    setPassword("");
    setPwConfirmation("");
  };

  // Create user account upon registration
  const createUser = (e) => {
    e.preventDefault();

    // Create object with new user details
    const userDetails = { email, password, password_confirmation };

    // Invoke API function for user registration
    userRegistration(userDetails)
      .then((response) => {
        if (response.status === 200) {
          setHasError(false);
          setDisplaySuccessMessage(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
          reset();
        } else {
          setDisplaySuccessMessage(false);
          setHasError(true);
          setErrorMessage(response.response.data.errors["full_messages"]);
        }
      })
      .catch((error) => {
        setDisplaySuccessMessage(false);
        setHasError(true);
      });
  };

  // Event handlers

  const signIn = () => {
    navigate("/");
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePwInput = (e) => {
    setPassword(e.target.value);
  };

  const handlePwConfirmation = (e) => {
    setPwConfirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    createUser(e);
  };

  const handleClickSubmit = (e) => {
    createUser(e);
  };
  return (
    <body className="loginBody">
      <div className="container" id="container">
        {hasError && (
          <Errors title="Check your email address.">
            Review the information you have submitted and try again.
          </Errors>
        )}
        <div className="form-container sign-in-container">
          <form className="loginForm" onSubmit={handleSubmit}>
            <h1 className="loginH1">Sign Up</h1>
            <div className="social-container"></div>
            <input
              type="email"
              placeholder="Type your Email"
              className="loginInput"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailInput}
              required
            />
            <input
              type="password"
              placeholder="Type your Password"
              className="loginInput"
              name="password"
              id="password"
              value={password}
              onChange={handlePwInput}
              required
            />
            <input
              type="password"
              placeholder="Type your Password Again"
              className="loginInput"
              name="password_confirmation"
              id="password_confirmation"
              value={password_confirmation}
              onChange={handlePwConfirmation}
              required
            />
            {hasError
              ? errorMessage.map((error, index) => (
                  <Errors key={index} title="warning-red">
                    {error}
                  </Errors>
                ))
              : null}
            {displaySuccessMessage ? (
              <div className="success-message">
                Successfully created account. Redirecting to login...
              </div>
            ) : null}
            <button
              className="loginButton"
              onClick={handleClickSubmit}
              title="signIn-button"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="loginH1">Hello, Friend!</h1>
              <p className="pText">
                Enter your personal details and start journey with us
              </p>
              <button className="loginButton ghost" id="signUp" onClick={signIn}>
                Already have an account? Sign In
                <Link to="/"></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Register;
