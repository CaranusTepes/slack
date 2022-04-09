import React, { useState } from "react";
import "./login.css";
import Particles from "./Particles";

const Login = () => {
  const [isActive, setActive] = useState("true");

  const signUpButton = () => {
    setActive(!isActive);
  };
  const signInButton = () => {
    setActive(true);
  };

  function signInSubmit(e) {
    e.preventDefault();
    console.log("You clicked Sign In.");
  }

  function signUpSubmit(e) {
    e.preventDefault();
    console.log("You clicked Sign Up.");
  }

  return (
    <body className="loginBody">
      <div className={isActive ? "container" : "container right-panel-active"} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={signUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-container"></div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={signInSubmit}>
            <h1>Sign in</h1>
            <div className="social-container"></div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div>Forgot your password?</div>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
