import React from "react";
import Login from "./Login";
import Particles from "./Particles";
import "./fullLogin.css";
import logo from "../../Assets/Images/logo.png"

const FullLogin = () => {
  return (
    <div className="loginLanding">
      <Particles className="particles"/>
      <img src={logo} alt="Logo" className="slackLogo"/>
      <Login />
    </div>
  );
};

export default FullLogin;
