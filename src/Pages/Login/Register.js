import React, { useState } from "react";
import { userRegistration } from "./../../api/api-auth";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPwConfirmation] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
  let navigate = useNavigate();

  const reset = () => {
    setEmail("");
    setPassword("");
    setPwConfirmation("");
  };

  const createUser = (e) => {
    e.preventDefault();
    const userDetails = { email, password, password_confirmation };

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

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePwInput = (e) => {
    setPassword(e.target.value);
  };

  const handlePwConfirmation = (e) => {
    setPwConfirmation(e.target.value);
  };

  const handleClickSubmit = (e) => {
    createUser(e);
  };
  return (
    <body>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">
              Log in to your account using email and password
            </h4>
          </div>
          <form className="form" onSubmit="{handleSubmit}">
            <input
              type="email"
              className="form-field animation a3"
              placeholder="Email Address"
              onChange={handleEmailInput}
              required
            />
            <input
              type="password"
              className="form-field animation a4"
              placeholder="Password"
              onChange={handlePwInput}
              required
            />
            <input
              type="password"
              className="form-field animation a5"
              placeholder="Confirm Password"
              onChange={handlePwConfirmation}
              required
            />
            {hasError
              ? errorMessage.map((error, index) => (
                  <h5 key={index} className="warning-red">
                    {error}
                  </h5>
                ))
              : null}
            {displaySuccessMessage ? (
              <div className="success-green">
                Successfully created account. Redirecting to login...
              </div>
            ) : null}
            <button className="animation a6" onClick={handleClickSubmit}>
              REGISTER
            </button>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </body>
  );
}

export default Register;
