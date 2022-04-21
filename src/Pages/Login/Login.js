import React, { useState } from "react";
import Errors from "../../api/Errors";
import { userLogin } from "../../api/api-auth";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./login.css";


const Login = ({ authenticate, handleUserData, handleUserHeaders }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  // Declare variable for useNavigate & useParams
  let navigate = useNavigate();
  let { uid } = useParams();

  // Reset function
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  // Login function
  const loginUser = (e) => {
    e.preventDefault();

    // Create object with login details
    const userDetails = { email, password };

    // Invoke API for user login
    userLogin(userDetails)
      .then((response) => {
        // handleUserData(response.data)
        // handleUserHeaders(response.headers)
        if (response.status === 200) {
          sessionStorage.setItem(
            "userLoggedInDetails",
            JSON.stringify(response.headers)
          );
          uid = response.data.data.id;
          console.log("login uid", uid);
          setHasError(false);
          reset();
          authenticate();
          navigate(`/${uid}`);
          window.location.reload();
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  const signUp = () => {
    navigate("/register");
  };

  const handleLoginEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginPwInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    loginUser(e);
  };

  const handleLoginClickSubmit = (e) => {
    loginUser(e);
  };

  return (
    <body className="loginBody">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form className="loginForm" onSubmit={handleLoginSubmit}>
            <h1 className="loginH1">Sign in</h1>
            <div className="social-container"></div>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              name="reg-email"
              id="reg-email"
              onChange={handleLoginEmailInput}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              name="setpw"
              id="setpw"
              value={password}
              onChange={handleLoginPwInput}
              required
            />
            {hasError && (
              <Errors title="warning-red">
                Review the information you have submitted and try again.
              </Errors>
            )}
            <div>Forgot your password?</div>
            <button
              className="loginButton"
              onClick={handleLoginClickSubmit}
              title="signIn-button"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="loginH1">Welcome Back!</h1>
              <p className="pText">
                To keep connected with us please login with your personal info
              </p>
              <button className="loginButton ghost" id="signIn" onClick={signUp}>
                New here? Sign Up
                <Link to="/register"></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
