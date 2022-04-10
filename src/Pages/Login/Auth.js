import React, { useState } from "react";
import "./auth.css";

const Auth = () => {
  const [isActive, setActive] = useState("true");

  const signUpButton = () => {
    setActive(true);
  };
  const signInButton = () => {
    setActive(!isActive);
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
      <div
        className={isActive ? "container" : "container right-panel-active"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={signUpSubmit} className="loginForm">
            <h1 className="loginH1">Create Account</h1>
            <div className="social-container"></div>
            <span className="orText">or use your email for registration</span>
            <input type="text" placeholder="Name" className="loginInput"/>
            <input type="email" placeholder="Email" className="loginInput"/>
            <input type="password" placeholder="Password" className="loginInput"/>
            <button className="loginButton">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={signInSubmit} className="loginForm">
            <h1 className="loginH1">Sign in</h1>
            <div className="social-container"></div>
            <span className="orText">or use your account</span>
            <input type="email" placeholder="Email" className="loginInput"/>
            <input type="password" placeholder="Password" className="loginInput"/>
            <div>Forgot your password?</div>
            <button className="loginButton">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="loginH1">Welcome Back!</h1>
              <p className="pText">
                To keep connected with us please login with your personal info
              </p>
              <button className="loginButton ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-left">
              <h1 className="loginH1">Hello, Friend!</h1>
              <p className="pText">Enter your personal details and start journey with us</p>
              <button className="loginButton ghost" id="signUp" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Auth;
