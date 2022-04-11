import React from "react";
import Auth from "./Auth";
import Particles from "./Particles";
import "./login.css";
import logo from "../../Assets/Images/logo.png"

const Login = () => {
  return (
    <div className="loginLanding">
      <Particles className="particles"/>
      <img src={logo} alt="Logo" className="slackLogo"/>
      <Auth className="auth"/>
    </div>
  );
};

export default Login;
